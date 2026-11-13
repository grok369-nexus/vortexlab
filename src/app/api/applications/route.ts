import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Application = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  service?: unknown;
  budget?: unknown;
  details?: unknown;
  website?: unknown;
};

const text = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: NextRequest) {
  let body: Application;
  try {
    body = (await request.json()) as Application;
  } catch {
    return NextResponse.json({ error: "Please submit a valid application." }, { status: 400 });
  }

  // Quietly accept honeypot submissions so basic bots do not learn the field exists.
  if (text(body.website, 200)) return NextResponse.json({ ok: true });

  const name = text(body.name, 100);
  const email = text(body.email, 254).toLowerCase();
  const organization = text(body.organization, 120);
  const service = text(body.service, 100);
  const budget = text(body.budget, 80);
  const details = text(body.details, 4000);

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || details.length < 15) {
    return NextResponse.json({ error: "Check your name, email, and project description, then try again." }, { status: 400 });
  }

  const allowedServices = [
    "Website design & development", "Web application / platform", "E-commerce website",
    "UI/UX design", "Digital product / MVP", "Something else",
  ];
  if (!allowedServices.includes(service)) {
    return NextResponse.json({ error: "Please choose a valid service." }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json(
      { error: "Applications are not connected yet. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/project_applications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, email, organization, service, budget, details }),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "We couldn't save your application. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "A connection error occurred. Please try again." }, { status: 502 });
  }
}