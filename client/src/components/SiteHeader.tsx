/** Momentum System: mobile-first navigation with a persistent, obvious booking route. */
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { BrandLockup } from "@/components/BrandLockup";
import { BookingCallout } from "@/components/BookingWorkflow";

const links = [
  { href: "/services", label: "What we build" },
  { href: "/about", label: "Why LaunchrLabs" },
  { href: "/resources", label: "Learning lab" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 18);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header className={scrolled ? "site-header site-header--solid" : "site-header"}>
      <div className="site-header__inner">
        <BrandLockup />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className={location === link.href ? "nav-link nav-link--active" : "nav-link"}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="site-header__actions">
          <div className="desktop-booking"><BookingCallout compact /></div>
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link href={link.href} key={link.href} className="mobile-nav__link">
              <span>0{index + 1}</span>{link.label}
            </Link>
          ))}
          <div className="mobile-nav__cta"><BookingCallout /></div>
        </nav>
      )}
    </header>
  );
}

