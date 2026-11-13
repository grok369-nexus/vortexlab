import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Code2, Layers3, MonitorSmartphone, PenTool, Settings2 } from "lucide-react";

export const metadata: Metadata = { title: "Services", description: "Web design, websites, custom platforms, and digital product development from Vortex Labs." };

const offers = [
  { icon: MonitorSmartphone, title: "Business websites", desc: "A clear, polished online home for your business, service, or organization.", items: ["Responsive design for phones and desktops", "Clear service and contact journeys", "Search-friendly page structure", "Fast, accessible user experience"] },
  { icon: Layers3, title: "Web platforms", desc: "Custom online platforms built around the way your business or community actually works.", items: ["Customer and member experiences", "Dashboards and management tools", "Search, profiles, and workflows", "Secure data and integrations"] },
  { icon: PenTool, title: "UI/UX design", desc: "Turn complicated ideas into interfaces people can understand and use.", items: ["Product structure and user flows", "Interface and interaction design", "Responsive design systems", "Prototypes and design refinement"] },
  { icon: Code2, title: "Custom software", desc: "Practical software for problems that off-the-shelf tools don't solve well.", items: ["Internal business tools", "Automation and integrations", "API-backed applications", "Ongoing improvements"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">WHAT WE CAN BUILD TOGETHER</div>
          <h1>Digital work,<br /><span className="gradient-text">done thoughtfully.</span></h1>
          <p>From a first website to a complete digital platform, we help turn a real need into a useful, well-crafted experience.</p>
          <Link href="/start-project" className="button button-primary">Discuss your project <ArrowUpRight size={18} /></Link>
        </div>
      </section>
      <section className="section-pad">
        <div className="container">
          <div className="eyebrow">OUR SERVICES</div>
          <div className="offer-grid">
            {offers.map(({ icon: Icon, title, desc, items }, index) => (
              <article className="offer-card" key={title}>
                <div className="offer-top"><span className="offer-icon"><Icon size={21} /></span><span className="service-number">0{index + 1}</span></div>
                <h2>{title}</h2><p>{desc}</p>
                <ul>{items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
                <Link href="/start-project" className="under-link">Apply for this service <ArrowUpRight size={16} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="process-section section-pad">
        <div className="container process-grid">
          <div><div className="eyebrow">A SIMPLE PROCESS</div><h2>Clear steps.<br /><span className="muted-heading">No unnecessary drama.</span></h2></div>
          <div className="process-list">
            {["Tell us what you need", "We review and clarify", "You receive a proposal", "We design, build, and refine"].map((step, i) => <div className="process-step" key={step}><span>0{i + 1}</span><strong>{step}</strong></div>)}
          </div>
        </div>
      </section>
      <section className="final-cta-section"><div className="container final-cta"><div className="eyebrow">YOUR NEXT STEP</div><h2>Have a project<br /><span className="gradient-text">in mind?</span></h2><p>Start with a short description. We can work out the details together.</p><Link href="/start-project" className="button button-primary">Start a project <ArrowUpRight size={18} /></Link></div></section>
    </>
  );
}
