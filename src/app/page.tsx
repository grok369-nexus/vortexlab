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
          <span className="brand-mark"><span /></span>
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
        <section className="hero section-wrap" id="top">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> INDEPENDENT DIGITAL PRODUCT STUDIO</div>
            <h1>Good ideas deserve <span>better technology.</span></h1>
            <p className="hero-lede">
              We design and build websites, web applications, and digital products that make complicated things feel simple.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#start">Build something with us <ArrowUpRight /></a>
              <a className="text-link" href="#work">Explore our work <span>↓</span></a>
            </div>
            <div className="hero-footnote"><span className="line" /> BUILT WITH INTENTION. MADE TO BE USEFUL.</div>
          </div>
          <div className="hero-art">
            <Image
              className="hero-art-image"
              src="https://echodesono.com/images/4f2c02ad842b7eae18c14e6c313852a1.png"
              alt="A luminous, flowing glass installation suspended inside a dark architectural space"
              width={1400}
              height={1400}
              sizes="(max-width: 640px) 100vw, 48vw"
              priority
              unoptimized
            />
            <div className="hero-art-shade" />
            <div className="hero-art-topline"><span>IDEAS</span><i /> <span>IN MOTION</span></div>
            <div className="hero-v-mark">V</div>
            <div className="hero-art-bottom">
              <span className="hero-art-caption">WE TURN POSSIBILITY INTO SOMETHING REAL.</span>
              <span className="hero-impact">IMPACT <b>↗</b></span>
            </div>
            <a className="hero-art-credit" href="https://echodesono.com/" target="_blank" rel="noreferrer">Visual reference · Echo de Sono</a>
          </div>
        </section>

        <section className="principle-band">
          <div className="section-wrap principle-inner">
            <span className="eyebrow">OUR BELIEF</span>
            <p>Extraordinary technology. <span>Effortless experiences.</span> Meaningful lives.</p>
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
        <a className="brand" href="#top"><span className="brand-mark"><span /></span><span>VORTEX<span className="brand-light">LABS</span></span></a>
        <span>Extraordinary technology. Effortless experiences.</span>
        <a href="#top">Back to top ↑</a>
        <small>© {new Date().getFullYear()} Vortex Labs. Built with intention.</small>
      </footer>
    </main>
  );
}
