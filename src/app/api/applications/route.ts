import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const allowedServices = new Set([
  "Business website",
  "Web platform / marketplace",
  "Web application",
  "UI/UX design",
  "Custom software",
  "Not sure yet",
]);

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Send the form using the supported format." }, { status: 415 });
    }

    const raw = await request.text();
    if (raw.length > 12_000) {
      return NextResponse.json({ error: "The submitted form is too large." }, { status: 413 });
    }

    const body = JSON.parse(raw) as Record<string, unknown>;

    // Quietly accept automated submissions that fill the hidden honeypot.
    if (clean(body.website_url, 200)) {
      return NextResponse.json({ success: true });
    }

    const full_name = clean(body.full_name, 100);
    const email = clean(body.email, 254).toLowerCase();
    const phone = clean(body.phone, 40);
    const organization = clean(body.organization, 120);
    const service_type = clean(body.service_type, 80);
    const project_summary = clean(body.project_summary, 4000);
    const budget_range = clean(body.budget_range, 80);
    const desired_timeline = clean(body.desired_timeline, 80);
    const referral_source = clean(body.referral_source, 80);

    if (full_name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        !allowedServices.has(service_type) || project_summary.length < 20) {
      return NextResponse.json({ error: "Please check your name, email, service, and project description." }, { status: 400 });
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !serviceKey) {
      return NextResponse.json({ error: "The enquiry system is being configured. Please try again later." }, { status: 503 });
    }

    const supabase = createClient(url, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const { error } = await supabase.from("project_applications").insert({
      full_name,
      email,
      phone: phone || null,
      organization: organization || null,
      service_type,
      project_summary,
      budget_range: budget_range || null,
      desired_timeline: desired_timeline || null,
      referral_source: referral_source || null,
    });

    if (error) {
      console.error("Project application insert failed:", error.code);
      return NextResponse.json({ error: "We couldn't save your enquiry right now. Please try again later." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "We couldn't process that submission. Please check the form and try again." }, { status: 400 });
  }
}
