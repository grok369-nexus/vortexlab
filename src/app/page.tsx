import Image from "next/image";
import { ApplicationForm } from "@/components/application-form";

const services = [
  {
    number: "01",
    title: "Web design & development",
    description: "Fast, polished websites that explain what you do and turn visitors into customers.",
    tags: ["Business websites", "Landing pages", "Portfolios"],
  },
  {
    number: "02",
    title: "Web applications",
    description: "Custom platforms built around the way your business or idea actually needs to work.",
    tags: ["Dashboards", "Marketplaces", "Business tools"],
  },
  {
    number: "03",
    title: "Digital product development",
    description: "From a rough concept to a working first version, with a clear path to grow.",
    tags: ["MVPs", "Prototypes", "Product strategy"],
  },
];

const projects = [
  {
    name: "Homza",
    type: "PROPERTY TECHNOLOGY",
    description: "A property marketplace concept designed to make finding a place more straightforward.",
    status: "Product in development",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-661987804942093972/original/36a4632e-a208-400f-a0aa-90e47ed19c7a.jpeg",
    imageAlt: "Modern Kampala apartment interior with large windows and natural light",
    imageCredit: "Airbnb",
    imageSource: "https://www.airbnb.com/rooms/661987804942093972",
    tone: "homza",
  },
  {
    name: "DwellSpot",
    type: "LOCATION DISCOVERY",
    description: "An exploration of simpler ways to discover useful places around you.",
    status: "Product in development",
    image: "https://newvision-media.s3.amazonaws.com/cms/46d1f93e-62aa-4c31-9394-5a8ebf6dc15e.jpg",
    imageAlt: "Kampala city street at sunset",
    imageCredit: "New Vision",
    imageSource: "https://www.newvision.co.ug/category/news/in-pictures-sunset-in-kampala-NV_111204",
    tone: "dwell",
  },
  {
    name: "UACE Virtual Lab",
    type: "EDUCATION TECHNOLOGY",
    description: "A practical virtual laboratory and revision experience for science learners.",
    status: "Early-stage project",
    image: "https://scienceid.net/upload/product/81/31076/8817dedf_31076.jpg",
    imageAlt: "Virtual physics laboratory showing an Atwood machine experiment",
    imageCredit: "ScienceID",
    imageSource: "https://lab.scienceid.net/catalog/9935/31076/",
    tone: "lab",
  },
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function HomePage() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vortex Labs home">
          <Image className="brand-logo" src="/vortex-mark.svg" alt="" width={42} height={42} priority />
          <span>VORTEX<span className="brand-light">LABS</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Our work</a>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
        </nav>
        <a className="header-cta" href="#start">Start a project <ArrowUpRight /></a>
      </header>

      <div id="main-content">
        <section className="hero cinematic-hero" id="top">
          <div className="hero-art">
            <Image
              className="hero-art-image"
              src="https://echodesono.com/images/4f2c02ad842b7eae18c14e6c313852a1.png"
              alt=""
              width={1800}
              height={1400}
              sizes="100vw"
              priority
              unoptimized
            />
            <div className="hero-art-shade" />
            <div className="hero-art-topline"><span>IDEAS</span><i /> <span>IN MOTION</span></div>
            <Image className="hero-v-mark" src="/vortex-mark.svg" alt="" width={420} height={520} priority />
            <div className="hero-art-bottom">
              <span className="hero-art-caption">WE TURN POSSIBILITY INTO SOMETHING REAL.</span>
              <span className="hero-impact">IMPACT <b>↗</b></span>
            </div>
            <a className="hero-art-credit" href="https://echodesono.com/" target="_blank" rel="noreferrer">Visual reference · Echo de Sono</a>
          </div>
          <div className="hero-copy section-wrap">
            <div className="eyebrow"><span className="status-dot" /> INDEPENDENT DIGITAL PRODUCT STUDIO</div>
            <h1>Technology that makes <span>more possible.</span></h1>
            <p className="hero-lede">
              We turn meaningful problems into thoughtfully designed, dependable digital products and experiences that make life work better.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#start">Start a conversation <ArrowUpRight /></a>
              <a className="text-link" href="#work">Discover what we make <span>↓</span></a>
            </div>
            <div className="hero-footnote"><span className="line" /> EXTRAORDINARY TECHNOLOGY. EFFORTLESS EXPERIENCES. MEANINGFUL LIVES.</div>
          </div>
          <a className="hero-scroll-cue" href="#belief">SCROLL TO EXPLORE <span>↓</span></a>
        </section>

        <section className="principle-band">
          <div className="section-wrap principle-inner">
            <span className="eyebrow">OUR BELIEF</span>
            <p>Extraordinary technology. <span>Effortless experiences.</span> Meaningful lives.</p>
          </div>
        </section>

        <section className="impact-section" id="belief">
          <div className="section-wrap impact-grid">
            <div className="impact-copy">
              <span className="eyebrow">IDEAS WITH INTENTION</span>
              <h2>Technology should make <span>more possible.</span></h2>
              <p>We believe the best technology doesn&apos;t demand attention. It quietly removes friction, unlocks opportunity, and gives people more room to do meaningful things.</p>
              <a className="impact-link" href="#approach">What guides us <ArrowUpRight /></a>
            </div>
            <div className="impact-visual">
              <Image
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=85"
                alt="Sculptural contemporary architecture with clean lines and a dramatic open sky"
                width={1600}
                height={1100}
                sizes="(max-width: 640px) 100vw, 55vw"
                unoptimized
              />
              <div className="impact-visual-shade" />
              <Image className="impact-visual-v" src="/vortex-mark.svg" alt="" width={220} height={280} />
              <span className="impact-visual-label">DESIGNED FOR POSSIBILITY · BUILT FOR PEOPLE</span>
            </div>
          </div>
        </section>

        <section className="expertise-section">
          <div className="section-wrap expertise-wrap">
            <div className="section-heading expertise-heading">
              <div><span className="eyebrow">WHERE IDEAS MEET REAL NEEDS</span><h2>Technology for<br /><span>everyday progress.</span></h2></div>
              <p>We look for meaningful problems in the world around us, then shape technology around the people who experience them.</p>
            </div>
            <div className="industry-grid">
              <article className="industry-card industry-property">
                <span className="industry-number">01 / PROPERTY</span>
                <div className="industry-symbol" aria-hidden="true">⌂</div>
                <h3>Make finding a place simpler.</h3>
                <p>Clearer ways to discover homes, connect with property providers, and move with confidence.</p>
                <span className="industry-project">EXPLORING THROUGH HOMZA</span>
              </article>
              <article className="industry-card industry-discovery">
                <span className="industry-number">02 / DISCOVERY</span>
                <div className="industry-symbol" aria-hidden="true">◎</div>
                <h3>Bring useful places closer.</h3>
                <p>Location-aware experiences that help people find what matters around them without unnecessary friction.</p>
                <span className="industry-project">EXPLORING THROUGH DWELLSPOT</span>
              </article>
              <article className="industry-card industry-learning">
                <span className="industry-number">03 / LEARNING</span>
                <div className="industry-symbol" aria-hidden="true">⌬</div>
                <h3>Make learning more practical.</h3>
                <p>Interactive digital tools that help learners explore ideas, experiment, and understand difficult concepts.</p>
                <span className="industry-project">EXPLORING THROUGH UACE VIRTUAL LAB</span>
              </article>
            </div>
          </div>
        </section>

        <section className="delivery-section">
          <div className="section-wrap delivery-wrap">
            <div className="delivery-heading">
              <span className="eyebrow">A THOUGHTFUL ENGINEERING PROCESS</span>
              <h2>Think in products.<br /><span>Build for the long run.</span></h2>
              <p>Good work doesn&apos;t end when a first version ships. We keep the full product journey in view, from understanding the need to learning what should improve next.</p>
            </div>
            <div className="delivery-steps">
              <article><span>01</span><div><h3>Discover</h3><p>Understand the people, the problem, and what success should actually mean.</p></div><small>ASK BETTER QUESTIONS</small></article>
              <article><span>02</span><div><h3>Shape</h3><p>Turn the strongest ideas into a clear experience and a focused plan.</p></div><small>MAKE THE RIGHT THINGS</small></article>
              <article><span>03</span><div><h3>Engineer</h3><p>Build carefully, with reliable foundations, thoughtful design, and real-world constraints in mind.</p></div><small>MAKE IT WORK WELL</small></article>
              <article><span>04</span><div><h3>Evolve</h3><p>Learn from use, maintain what matters, and improve the product as needs change.</p></div><small>KEEP MAKING IT BETTER</small></article>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="services">
          <div className="section-heading">
            <div><span className="eyebrow">WHAT WE DO</span><h2>From first thought<br />to <span>finished product.</span></h2></div>
            <p>Technology should move your idea forward, not bury it under complexity. We focus on the parts that make a real difference.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-main"><h3>{service.title}</h3><p>{service.description}</p></div>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="round-arrow" href="#start" aria-label={`Apply for ${service.title}`}><ArrowUpRight /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap section-block">
            <div className="section-heading">
              <div><span className="eyebrow">SELECTED PROJECTS</span><h2>Curiosity, put<br />to <span>work.</span></h2></div>
              <p>We build our own products to explore useful ideas and solve real problems. Here are a few in progress.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className={`project-card ${project.tone}`} key={project.name}>
                  <div className="project-visual">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={1200}
                      height={750}
                      sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                      unoptimized
                    />
                    <span className="project-index">{project.type}</span>
                    <a className="project-image-note" href={project.imageSource} target="_blank" rel="noreferrer">
                      Illustrative image · {project.imageCredit}
                    </a>
                  </div>
                  <div className="project-info"><div><h3>{project.name}</h3><p>{project.description}</p></div><span className="project-status">{project.status}</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-section">
          <div className="section-wrap proof-wrap">
            <div className="proof-copy">
              <span className="eyebrow">CREDIBILITY, BUILT IN THE OPEN</span>
              <h2>Show the work.<br /><span>Be honest about the journey.</span></h2>
              <p>We are an independent, growing studio. Rather than inflate numbers or make promises we cannot prove, we share the products we&apos;re building, the thinking behind them, and their actual stage of development.</p>
            </div>
            <div className="proof-points">
              <article><span>01</span><div><h3>Real problems</h3><p>Each product starts with a need worth solving, not a feature list looking for a reason to exist.</p></div></article>
              <article><span>02</span><div><h3>Visible progress</h3><p>We distinguish concepts, products in development, and released work clearly.</p></div></article>
              <article><span>03</span><div><h3>Long-term thinking</h3><p>We care about reliability, maintainability, and the experience after launch.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section-wrap approach-section" id="approach">
          <div className="approach-intro"><span className="eyebrow">HOW WE THINK</span><h2>Less noise.<br /><span>More meaning.</span></h2></div>
          <div className="approach-points">
            <article><span>01 / CLARITY</span><h3>Understand before building.</h3><p>We start with the problem, the people experiencing it, and what a genuinely useful solution looks like.</p></article>
            <article><span>02 / SIMPLICITY</span><h3>Make the complex feel natural.</h3><p>Every screen, feature, and interaction should earn its place. No complexity for decoration.</p></article>
            <article><span>03 / CRAFT</span><h3>Build for the real world.</h3><p>Thoughtful design, dependable engineering, and experiences that respect people&apos;s time and devices.</p></article>
          </div>
        </section>

        <section className="contact-section" id="start">
          <div className="section-wrap contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
              <h2>Let&apos;s make<br /><span>it real.</span></h2>
              <p>Tell us what you&apos;re trying to create or improve. You don&apos;t need a perfect brief. A clear starting point is enough.</p>
              <div className="contact-note"><span className="status-dot" /> PROJECT APPLICATIONS ARE OPEN</div>
            </div>
            <ApplicationForm />
          </div>
        </section>
      </div>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#top"><Image className="brand-logo" src="/vortex-mark.svg" alt="" width={38} height={38} /><span>VORTEX<span className="brand-light">LABS</span></span></a>
        <span>Extraordinary technology. Effortless experiences.</span>
        <a href="#top">Back to top ↑</a>
        <small>© {new Date().getFullYear()} Vortex Labs. Built with intention.</small>
      </footer>
    </main>
  );
}
