import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, MoveUpRight, Sparkles } from "lucide-react";

const services = [
  { number: "01", title: "Websites & digital presence", text: "Distinctive, responsive websites that make your business clear, credible, and easy to reach." },
  { number: "02", title: "Web platforms & applications", text: "Purpose-built platforms that bring your workflows, customers, and services together." },
  { number: "03", title: "Product design & development", text: "From the first idea to a working product, shaped around the people who will use it." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-glow" />
        <div className="container hero-content">
          <div className="eyebrow hero-eyebrow"><span className="status-dot" /> INDEPENDENT DIGITAL STUDIO</div>
          <h1>Make the complex<br /><span className="gradient-text">feel effortless.</span></h1>
          <p className="hero-copy">We design and build digital experiences that help ideas move forward, businesses work better, and everyday life feel a little simpler.</p>
          <div className="hero-actions">
            <Link href="/start-project" className="button button-primary">Start a project <ArrowUpRight size={18} /></Link>
            <Link href="/work" className="text-link">Explore our work <ArrowRight size={17} /></Link>
          </div>
          <div className="hero-foot">
            <span>DESIGN · ENGINEERING · DIGITAL PRODUCTS</span>
            <span className="scroll-cue"><ArrowDown size={14} /> SCROLL TO EXPLORE</span>
          </div>
        </div>
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-core"><span>V</span></div>
        <div className="hero-index">VL / 001</div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-grid">
          <div className="eyebrow">01 — WHY WE EXIST</div>
          <div>
            <h2>Technology is powerful.<br /><span className="muted-heading">Using it shouldn't be hard.</span></h2>
            <p className="section-lead">The best technology doesn't demand attention. It quietly removes friction, opens possibilities, and gives people more room to do what matters.</p>
            <Link href="/about" className="under-link">The thinking behind Vortex <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="services-section section-pad">
        <div className="container">
          <div className="section-heading-row">
            <div><div className="eyebrow">02 — WHAT WE DO</div><h2>Ideas into <span className="gradient-text">experiences.</span></h2></div>
            <Link href="/services" className="text-link">All services <ArrowUpRight size={17} /></Link>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <Link href="/services" className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div><h3>{service.title}</h3><p>{service.text}</p></div>
                <span className="service-arrow"><ArrowUpRight size={20} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section-pad">
        <div className="container">
          <div className="section-heading-row">
            <div><div className="eyebrow">03 — SELECTED WORK</div><h2>Built with <span className="muted-heading">intention.</span></h2></div>
            <Link href="/work" className="text-link">View our work <ArrowUpRight size={17} /></Link>
          </div>
          <Link href="/work" className="featured-project">
            <div className="project-visual homza-visual">
              <div className="browser-frame">
                <div className="browser-top"><i /><i /><i /><span>homza.ug</span></div>
                <div className="homza-preview">
                  <div className="homza-wordmark">homza<span>.</span></div>
                  <div className="homza-line" />
                  <div className="homza-title">Find your<br />place.</div>
                  <div className="homza-search"><span>Where do you want to live?</span><b>Explore</b></div>
                  <div className="homza-houses"><span /><span /><span /></div>
                </div>
              </div>
              <span className="visual-label">PRODUCT / 001</span>
            </div>
            <div className="project-info">
              <div className="eyebrow">PROPTECH · UGANDA</div>
              <h3>Homza</h3>
              <p>A property discovery experience designed to make finding a place feel clearer, safer, and more straightforward.</p>
              <span className="project-status"><span className="status-dot" /> IN DEVELOPMENT</span>
              <span className="project-open"><MoveUpRight size={22} /></span>
            </div>
          </Link>
        </div>
      </section>

      <section className="approach-section section-pad">
        <div className="container approach-grid">
          <div><div className="eyebrow">04 — HOW WE THINK</div><h2>Less noise.<br /><span className="gradient-text">More meaning.</span></h2></div>
          <div className="approach-points">
            <div><span><Check size={16} /></span><p><strong>Clarity before complexity.</strong> We start with the real problem, not a list of features.</p></div>
            <div><span><Check size={16} /></span><p><strong>People before technology.</strong> Every decision should improve the experience for someone.</p></div>
            <div><span><Check size={16} /></span><p><strong>Quality without excess.</strong> Thoughtful design, solid engineering, and no unnecessary friction.</p></div>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container final-cta">
          <div className="eyebrow"><Sparkles size={14} /> HAVE AN IDEA?</div>
          <h2>Let's make something<br /><span className="gradient-text">worth using.</span></h2>
          <p>Tell us what you're trying to build. We'll help you work out a sensible next step.</p>
          <Link href="/start-project" className="button button-primary">Tell us about your project <ArrowUpRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
