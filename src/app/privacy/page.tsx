import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Vortex Labs handles project enquiry information.",
};

export default function PrivacyPage() {
  return (
    <section className="page-hero">
      <div className="container legal-copy">
        <div className="eyebrow">YOUR INFORMATION</div>
        <h1>Privacy, <span className="gradient-text">plainly.</span></h1>
        <p>When you submit a project enquiry, Vortex Labs uses the information you provide to understand your request and contact you about it.</p>
        <h2>What we collect</h2>
        <p>Your name, email address, optional phone number and organization, project description, selected service, budget and timeline preferences, and how you heard about us.</p>
        <h2>How we use it</h2>
        <p>We use this information to review your enquiry, assess whether we can help, ask follow-up questions, and prepare a response or proposal. We do not sell your enquiry information.</p>
        <h2>Where it is stored</h2>
        <p>Project enquiries are intended to be stored in a Vortex Labs-managed database. Access should be limited to people who need the information to respond to the enquiry.</p>
        <h2>Retention and requests</h2>
        <p>We keep enquiry information only as long as it is reasonably needed for communication, project evaluation, and record keeping. You can request access, correction, or deletion by contacting Vortex Labs through the contact details published on this website.</p>
        <h2>Questions</h2>
        <p>If you have a privacy question, contact Vortex Labs before submitting information you do not want us to receive.</p>
        <p className="legal-note">This is an initial privacy notice for the project enquiry form. It should be reviewed and completed with the final business contact details and operating practices before public launch.</p>
      </div>
    </section>
  );
}
