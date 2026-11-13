import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Our work", description: "Explore products and digital projects from Vortex Labs." };

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">SELECTED WORK & EXPERIMENTS</div>
          <h1>Ideas made<br /><span className="gradient-text">tangible.</span></h1>
          <p>We build our own products and work with people who want to make useful things. Here's a look at what we're shaping.</p>
        </div>
      </section>
      <section className="section-pad work-page-section">
        <div className="container">
          <Link href="/start-project" className="featured-project">
            <div className="project-visual homza-visual">
              <div className="browser-frame">
                <div className="browser-top"><i /><i /><i /><span>homza</span></div>
                <div className="homza-preview"><div className="homza-wordmark">homza<span>.</span></div><div className="homza-line" /><div className="homza-title">Find your<br />place.</div><div className="homza-search"><span>Find a place to call home</span><b>Explore</b></div><div className="homza-houses"><span /><span /><span /></div></div>
              </div>
              <span className="visual-label">PRODUCT / 001</span>
            </div>
            <div className="project-info">
              <div className="eyebrow">PROPTECH · UGANDA</div><h3>Homza</h3>
              <p>A property discovery marketplace designed to connect people looking for a place with the people offering one.</p>
              <span className="project-status"><span className="status-dot" /> IN DEVELOPMENT</span>
              <span className="project-open"><ArrowUpRight size={22} /></span>
            </div>
          </Link>
          <div className="work-note"><span className="eyebrow">MORE IN PROGRESS</span><p>We'd rather show fewer real projects than fill this page with invented case studies. More work will appear here as it is ready to share.</p></div>
        </div>
      </section>
      <section className="final-cta-section"><div className="container final-cta"><div className="eyebrow">WORK WITH US</div><h2>Your idea could be<br /><span className="gradient-text">the next one.</span></h2><Link href="/start-project" className="button button-primary">Start a project <ArrowUpRight size={18} /></Link></div></section>
    </>
  );
}
