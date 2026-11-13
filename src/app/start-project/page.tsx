"use client";

import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import Link from "next/link";

const serviceOptions = [
  "Business website",
  "Web platform / marketplace",
  "Web application",
  "UI/UX design",
  "Custom software",
  "Not sure yet",
];

const budgets = [
  "Under UGX 500,000",
  "UGX 500,000 – 1,500,000",
  "UGX 1,500,000 – 5,000,000",
  "UGX 5,000,000+",
  "Need guidance",
];

export default function StartProjectPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn't submit your application. Please try again.");
      setStatus("success");
      formElement.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="application-section">
      <div className="container application-layout">
        <div className="application-intro">
          <Link href="/" className="back-link"><ArrowLeft size={15} /> Back to Vortex Labs</Link>
          <div className="eyebrow">PROJECT ENQUIRY</div>
          <h1>Let's talk about<br /><span className="gradient-text">what you need.</span></h1>
          <p>Tell us a little about your idea, business, or challenge. This is a starting point, not a commitment.</p>
          <div className="application-aside"><span className="status-dot" /><div><strong>What happens next?</strong><p>We'll review your enquiry and get back to you to clarify the scope and possible next steps.</p></div></div>
        </div>

        <div className="form-panel">
          {status === "success" ? (
            <div className="success-state"><CheckCircle2 size={42} /><div className="eyebrow">APPLICATION RECEIVED</div><h2>Thanks for reaching out.</h2><p>Your project enquiry has been submitted. We'll review the details and follow up using the contact information you provided.</p><Link href="/" className="button button-primary">Back to home <ArrowRight size={17} /></Link></div>
          ) : (
            <form onSubmit={handleSubmit} className="project-form">
              <div className="form-heading"><span className="eyebrow">TELL US ABOUT IT</span><span className="form-required">* REQUIRED</span></div>
              <div className="form-grid">
                <label className="field"><span>Your name *</span><input name="full_name" required minLength={2} maxLength={100} placeholder="Your full name" /></label>
                <label className="field"><span>Email address *</span><input name="email" type="email" required maxLength={254} placeholder="you@example.com" /></label>
                <label className="field"><span>Phone / WhatsApp</span><input name="phone" type="tel" maxLength={40} placeholder="+256 ..." /></label>
                <label className="field"><span>Business or organization</span><input name="organization" maxLength={120} placeholder="Your business name" /></label>
              </div>
              <label className="field"><span>What do you need? *</span><select name="service_type" required defaultValue=""><option value="" disabled>Select a service</option>{serviceOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
              <label className="field"><span>Tell us about your project *</span><textarea name="project_summary" required minLength={20} maxLength={4000} rows={5} placeholder="What are you trying to build? Who is it for? What should it help people do?" /></label>
              <div className="form-grid">
                <label className="field"><span>Approximate budget</span><select name="budget_range" defaultValue=""><option value="">Choose a range</option>{budgets.map((budget) => <option key={budget}>{budget}</option>)}</select></label>
                <label className="field"><span>When would you like to start?</span><select name="desired_timeline" defaultValue=""><option value="">Select a timeline</option><option>As soon as possible</option><option>Within 1 month</option><option>Within 1–3 months</option><option>Flexible / exploring</option></select></label>
              </div>
              <label className="field"><span>How did you hear about us?</span><select name="referral_source" defaultValue=""><option value="">Select one</option><option>Google / search</option><option>Social media</option><option>Referral</option><option>Vortex Labs project</option><option>Other</option></select></label>
              <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input name="website_url" tabIndex={-1} autoComplete="off" /></label></div>
              {status === "error" && <p className="form-error" role="alert">{error}</p>}
              <button className="button button-primary submit-button" type="submit" disabled={status === "sending"}>{status === "sending" ? <>Submitting <LoaderCircle className="spin" size={17} /></> : <>Submit project enquiry <ArrowRight size={17} /></>}</button>
              <p className="form-privacy">Your details are used only to review and respond to this project enquiry.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
