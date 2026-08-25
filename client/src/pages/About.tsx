/** Momentum System: a distinctive bottleneck-first brand story that makes Launchr’s practical systems approach clear. */
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { BookingCallout } from "@/components/BookingWorkflow";
import { PageLayout } from "@/components/PageLayout";

const BUILDERS_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663554302780/dZuwKWLPIDaXCZgW.jpg";

const beliefs = [
  "Launch before you feel completely ready.",
  "African businesses deserve digital experiences that meet a global standard.",
  "Technology should feel useful long before it feels impressive.",
  "WhatsApp is a serious business channel, not an afterthought.",
  "Small teams can compete far beyond their size when their systems are strong.",
];

export default function About() {
  return <PageLayout>
    <section className="page-hero page-hero--about"><div className="content-frame page-hero__grid"><div><span className="section-kicker"><span className="pulse-dot" /> Why LaunchrLabs</span><h1>We do not start with a technology stack. We start with the bottleneck.</h1></div><p>LaunchrLabs Africa helps growing businesses replace scattered tools and manual processes with digital systems built for the way they actually work.</p></div></section>
    <section className="about-intro content-frame"><div className="about-intro__image"><img src={BUILDERS_URL} alt="Founders building together around a creative workspace" loading="lazy" decoding="async" /><span className="image-signal"><i /> Builder network / in motion</span></div><div className="about-intro__copy"><span className="eyebrow">The premise</span><h2>Technology should reduce complexity, not add to it.</h2><p>We combine product thinking, design, software, and automation to solve practical business problems: customer acquisition and follow-up, internal operations, and reporting. The work starts by understanding the process before deciding what to build.</p><p>The best system is one your team can understand, use, and improve. Our approach reflects how African businesses actually grow online: mobile-first, relationship-led, resourceful, and ambitious.</p></div></section>
    <section className="beliefs-section"><div className="content-frame beliefs-grid"><div><span className="eyebrow eyebrow--lime">What we believe</span><h2>Practical optimism is a business advantage.</h2><p>There is a more useful alternative to overthinking the launch, copying another market, or chasing every new tool.</p></div><ul>{beliefs.map((belief) => <li key={belief}><span><Check size={15} /></span>{belief}</li>)}</ul></div></section>
    <section className="audience-section content-frame"><div className="section-heading section-heading--split"><div><span className="eyebrow">Who this is for</span><h2>Growing businesses whose current systems are starting to strain.</h2></div><p>Whether you are opening a new chapter or fixing a growth bottleneck, we meet you where a clearer customer or operational system can create practical momentum.</p></div><div className="audience-tags"><span>Founders</span><span>Operations teams</span><span>Small teams</span><span>Service businesses</span><span>Coaches</span><span>Consultants</span><span>Digital businesses</span><span>Modern brands</span></div></section>
    <section className="route-sequence content-frame" aria-label="How Launchr moves from bottleneck to working system"><div className="route-sequence__intro"><span className="eyebrow eyebrow--lime">Bottleneck → system</span><h2>One clear route from friction to a working next move.</h2></div><ol><li><span>01</span><strong>Diagnose</strong><small>Name the bottleneck and the business outcome.</small></li><li><span>02</span><strong>Design</strong><small>Map the better customer or team workflow.</small></li><li><span>03</span><strong>Build</strong><small>Implement the right website, automation, or tool.</small></li><li><span>04</span><strong>Improve</strong><small>Refine the system as the business grows.</small></li></ol></section>
    <section className="about-cta content-frame"><div><span className="eyebrow eyebrow--lime">Your next practical move</span><h2>Bring the bottleneck. Leave with a clearer next step.</h2></div><div><p>Start with one focused conversation about your workflow, customers, and the part of the business that is making growth harder than it should be.</p><BookingCallout label="Start a conversation" /><Link href="/services" className="text-link">See the systems we build <ArrowRight size={15} /></Link></div></section>
  </PageLayout>;
}
