/** Momentum System: brand story page that establishes the African-first, practical, launch-oriented point of view. */
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
    <section className="page-hero page-hero--about"><div className="content-frame page-hero__grid"><div><span className="section-kicker"><span className="pulse-dot" /> Why LaunchrLabs</span><h1>A launch ecosystem for the people building what comes next.</h1></div><p>LaunchrLabs Africa exists for founders, creators, and business owners who want to make a stronger move online without getting lost in the noise.</p></div></section>
    <section className="about-intro content-frame"><div className="about-intro__image"><img src={BUILDERS_URL} alt="Founders building together around a creative workspace" /><span className="image-signal"><i /> Builder network / in motion</span></div><div className="about-intro__copy"><span className="eyebrow">The premise</span><h2>Good businesses should not have to look, feel, or operate behind.</h2><p>We bring modern branding, conversion-focused design, practical automation, AI, and growth thinking into one connected launch system. The result is not just a better website or a new tool. It is a business that feels more confident and ready to act.</p><p>Our work is shaped by the way African businesses actually grow online: mobile-first, relationship-led, resourceful, and ambitious.</p></div></section>
    <section className="beliefs-section"><div className="content-frame beliefs-grid"><div><span className="eyebrow eyebrow--lime">What we believe</span><h2>Practical optimism is a business advantage.</h2><p>There is a more useful alternative to overthinking the launch, copying another market, or chasing every new tool.</p></div><ul>{beliefs.map((belief) => <li key={belief}><span><Check size={15} /></span>{belief}</li>)}</ul></div></section>
    <section className="audience-section content-frame"><div className="section-heading section-heading--split"><div><span className="eyebrow">Who this is for</span><h2>Ambitious builders with something real to move.</h2></div><p>Whether you are opening a new chapter or fixing a growth bottleneck, we meet you at the point where a clearer system can create real momentum.</p></div><div className="audience-tags"><span>Founders</span><span>Creators</span><span>Small teams</span><span>Freelancers</span><span>Coaches</span><span>Consultants</span><span>Digital businesses</span><span>Modern brands</span></div></section>
    <section className="about-cta content-frame"><div><span className="eyebrow eyebrow--lime">Your next useful move</span><h2>Let’s turn the “we should” into a launch plan.</h2></div><div><p>Start with one focused conversation about your business, your customers, and the opportunity in front of you.</p><BookingCallout /><Link href="/services" className="text-link">See how we can help <ArrowRight size={15} /></Link></div></section>
  </PageLayout>;
}
