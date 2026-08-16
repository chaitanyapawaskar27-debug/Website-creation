import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";

const links = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      data-testid="site-header"
      className="z-50 border-b border-border bg-paper/90 backdrop-blur-md md:sticky md:top-0"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          data-testid="header-logo-link"
          className="font-display text-lg font-semibold tracking-tight text-ink focus:outline-none focus:ring-2 focus:ring-ember"
        >
          {SITE.name}
        </Link>

        <nav data-testid="desktop-nav" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase()}-link`}
              className={({ isActive }) =>
                `text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ember ${
                  isActive ? "font-medium text-ink" : "text-inksoft hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/work"
            data-testid="header-cta-work"
            className="group inline-flex items-center gap-1.5 bg-ember px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-ember-hover focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2"
          >
            View selected work
            <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </nav>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center text-ink focus:outline-none focus:ring-2 focus:ring-ember md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav data-testid="mobile-nav" className="border-t border-border bg-paper px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              data-testid={`mobile-nav-${l.label.toLowerCase()}-link`}
              className={`block border-b border-border py-4 text-base focus:outline-none focus:ring-2 focus:ring-ember ${
                location.pathname === l.to ? "font-medium text-ink" : "text-inksoft"
              }`}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/work"
            onClick={() => setOpen(false)}
            data-testid="mobile-cta-work"
            className="mt-4 inline-flex items-center gap-1.5 bg-ember px-4 py-3 text-sm font-medium text-white"
          >
            View selected work
            <ArrowUpRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
