import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, HeartHandshake, Lightbulb, Shapes } from "lucide-react";

export const metadata: Metadata = { title: "About", description: "Learn about the philosophy and approach behind Vortex Labs." };

const values = [
  { icon: Lightbulb, title: "Make difficult things simpler", text: "Complexity is sometimes necessary. Confusion rarely is. We look for the clearest path to a useful result." },
  { icon: HeartHandshake, title: "Respect people's attention", text: "Time and attention are valuable. Products should earn them through usefulness, not demand them through noise." },
  { icon: Compass, title: "Build with intention", text: "Every feature, interaction, and visual choice should have a reason to exist." },
  { icon: Shapes, title: "Leave room for possibility", text: "Technology should not only solve today's problems. It should help people imagine and create what comes next." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">ABOUT VORTEX LABS</div>
          <h1>Technology with<br /><span className="gradient-text">a human point of view.</span></h1>
          <p>Vortex Labs is an independent digital studio exploring how thoughtful design and engineering can make useful technology feel natural.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="container about-statement">
          <div className="eyebrow">OUR BELIEF</div>
          <h2>Extraordinary technology.<br />Effortless experiences.<br /><span className="gradient-text">Meaningful lives.</span></h2>
          <p>We believe good technology should give people more control, more clarity, and more room to focus on what matters. That belief guides the products we create and the work we do with clients.</p>
        </div>
      </section>
      <section className="section-pad values-section">
        <div className="container">
          <div className="eyebrow">THE PRINCIPLES</div><h2>What guides our work.</h2>
          <div className="values-grid">{values.map(({ icon: Icon, title, text }, i) => <article className="value-card" key={title}><span className="offer-icon"><Icon size={20} /></span><span className="service-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>
      <section className="final-cta-section"><div className="container final-cta"><div className="eyebrow">LET'S MAKE SOMETHING USEFUL</div><h2>Have a problem<br /><span className="gradient-text">worth solving?</span></h2><p>We'd like to hear about it.</p><Link href="/start-project" className="button button-primary">Start a conversation <ArrowUpRight size={18} /></Link></div></section>
    </>
  );
}
