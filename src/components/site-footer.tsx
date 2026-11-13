import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Link href="/" className="brand footer-brand">
              <span className="brand-mark" aria-hidden="true"><span /></span>
              <span>VORTEX<span className="brand-light">LABS</span></span>
            </Link>
            <p className="footer-statement">Technology should make life<br />feel simpler, not more complicated.</p>
          </div>
          <div className="footer-action">
            <span className="eyebrow">Have something in mind?</span>
            <Link href="/start-project" className="footer-link">Let&apos;s build it <ArrowUpRight size={18} /></Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Vortex Labs</span>
          <span>Extraordinary technology. Effortless experiences.</span>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
