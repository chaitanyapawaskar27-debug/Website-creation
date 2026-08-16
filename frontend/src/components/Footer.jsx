import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";

const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-border bg-paperdark">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-12 lg:px-8">
      <div className="md:col-span-5">
        <p className="font-display text-lg font-semibold text-ink">{SITE.name}</p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-inksoft">
          Multidisciplinary product & industrial designer working across consumer
          products, lighting, mobility, medical systems, and field research.
        </p>
      </div>
      <div className="md:col-span-3">
        <p className="text-xs font-medium uppercase tracking-widest text-inkmuted">Navigate</p>
        <div className="mt-4 flex flex-col gap-2.5">
          {["Work", "About", "Resume", "Contact"].map((l) => (
            <Link
              key={l}
              to={`/${l.toLowerCase()}`}
              data-testid={`footer-${l.toLowerCase()}-link`}
              className="w-fit text-sm text-inksoft transition-colors duration-200 hover:text-ink focus:outline-none focus:ring-2 focus:ring-ember"
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
      <div className="md:col-span-4">
        <p className="text-xs font-medium uppercase tracking-widest text-inkmuted">Get in touch</p>
        <div className="mt-4 flex flex-col gap-2.5">
          <a
            href={`mailto:${SITE.email}`}
            data-testid="footer-email-link"
            className="w-fit text-sm text-inksoft transition-colors duration-200 hover:text-ink focus:outline-none focus:ring-2 focus:ring-ember"
          >
            {SITE.email}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-linkedin-link"
            className="group inline-flex w-fit items-center gap-1 text-sm text-inksoft transition-colors duration-200 hover:text-ink focus:outline-none focus:ring-2 focus:ring-ember"
          >
            LinkedIn
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            data-testid="footer-phone-link"
            className="w-fit text-sm text-inksoft transition-colors duration-200 hover:text-ink focus:outline-none focus:ring-2 focus:ring-ember"
          >
            {SITE.phone}
          </a>
          <a
            href={SITE.behance}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-behance-link"
            className="group inline-flex w-fit items-center gap-1 text-sm text-inksoft transition-colors duration-200 hover:text-ink focus:outline-none focus:ring-2 focus:ring-ember"
          >
            Behance
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-xs text-inkmuted sm:px-6 lg:px-8">
        <span>© {new Date().getFullYear()} {SITE.name}</span>
        <span>Designed & built with care</span>
      </div>
    </div>
  </footer>
);

export default Footer;
