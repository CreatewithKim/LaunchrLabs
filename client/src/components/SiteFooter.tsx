/** Momentum System: an editorial footer with concise route cues and the verified Launchr social channels. */
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { Link, useLocation } from "wouter";
import { BrandLockup } from "@/components/BrandLockup";
import { BookingCallout } from "@/components/BookingWorkflow";

export function SiteFooter() {
  const [location] = useLocation();
  const closingLines: Record<string, string> = {
    "/": "Build the next useful system.",
    "/services": "Give the right system a proper start.",
    "/about": "Build something that can keep up.",
    "/resources": "Keep learning. Keep launching.",
    "/book": "The useful next move starts with a conversation.",
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <span className="eyebrow eyebrow--lime">Ready when you are</span>
          <h2>{closingLines[location] ?? closingLines["/"]}</h2>
        </div>
        <BookingCallout />
      </div>
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <BrandLockup inverse />
          <p>A modern digital launch and growth ecosystem for ambitious African businesses.</p>
          <div className="social-links" aria-label="Social channels">
            <a href="mailto:hello@launchrlabs.africa" aria-label="Email LaunchrLabs Africa"><Mail size={18} /></a>
            <a href="https://web.facebook.com/profile.php?id=61593483148807" target="_blank" rel="noreferrer" aria-label="LaunchrLabs Africa on Facebook"><Facebook size={18} /></a>
            <a href="https://www.instagram.com/launchrlabsafrica/" target="_blank" rel="noreferrer" aria-label="LaunchrLabs Africa on Instagram"><Instagram size={18} /></a>
            <a href="https://x.com/launchrlabs" target="_blank" rel="noreferrer" aria-label="LaunchrLabs on X"><Twitter size={18} /></a>
            <a href="https://www.linkedin.com/company/launchr-labs-africa/" target="_blank" rel="noreferrer" aria-label="LaunchrLabs Africa on LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>
        <div className="footer-list">
          <p>Explore</p>
          <Link href="/services">What we build</Link>
          <Link href="/about">Why LaunchrLabs</Link>
          <Link href="/resources">Learning lab</Link>
        </div>
        <div className="footer-list">
          <p>Start here</p>
          <Link href="/book">Book a working session <ArrowUpRight size={14} /></Link>
          <a href="mailto:hello@launchrlabs.africa">hello@launchrlabs.africa <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} LaunchrLabs Africa.</span>
        <span>Built for African builders.</span>
      </div>
    </footer>
  );
}
