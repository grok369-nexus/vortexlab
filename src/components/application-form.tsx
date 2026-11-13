"use client";

import { FormEvent, useState } from "react";

const initialState = { name: "", email: "", organization: "", service: "Website design & development", budget: "", details: "", website: "" };

export function ApplicationForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function update(field: keyof typeof initialState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We couldn't submit your application.");
      setStatus("success");
      setMessage("Your project application has been received. We'll review it and get back to you.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span>PROJECT APPLICATION</span><span>01 — 06</span></div>
      <div className="form-row">
        <label>Your name<input required minLength={2} maxLength={100} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="What should we call you?" /></label>
        <label>Email address<input required type="email" maxLength={254} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" /></label>
      </div>
      <label>Business or organization <span className="optional">(optional)</span><input maxLength={120} value={form.organization} onChange={(e) => update("organization", e.target.value)} placeholder="Your company or project name" /></label>
      <label>What do you need?
        <select value={form.service} onChange={(e) => update("service", e.target.value)}>
          <option>Website design & development</option><option>Web application / platform</option><option>E-commerce website</option><option>UI/UX design</option><option>Digital product / MVP</option><option>Something else</option>
        </select>
      </label>
      <label>Estimated budget <span className="optional">(optional)</span>
        <select value={form.budget} onChange={(e) => update("budget", e.target.value)}>
          <option value="">Not sure yet</option><option>Under UGX 500,000</option><option>UGX 500,000 – 1,500,000</option><option>UGX 1,500,000 – 5,000,000</option><option>UGX 5,000,000+</option><option>Prefer to discuss</option>
        </select>
      </label>
      <label>Tell us about your project<textarea required minLength={15} maxLength={4000} rows={4} value={form.details} onChange={(e) => update("details", e.target.value)} placeholder="What are you trying to build? What should it help people do?" /></label>
      <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update("website", e.target.value)} /></label></div>
      <button className="button button-primary submit-button" disabled={status === "loading"} type="submit">{status === "loading" ? "Sending application..." : "Send project application"} <span aria-hidden="true">↗</span></button>
      <p className={`form-message ${status}`} aria-live="polite">{message || "Your information is only used to respond to this project enquiry."}</p>
    </form>
  );
}