/** Momentum System: outcome-led service architecture built around recognisable business bottlenecks rather than generic capability lists. */
import { ArrowRight, Bot, Compass, LayoutTemplate, MessageCircleMore, Palette, PanelsTopLeft } from "lucide-react";
import { BookingCallout } from "@/components/BookingWorkflow";
import { PageLayout } from "@/components/PageLayout";

const services = [
  { number: "01", icon: LayoutTemplate, status: "Web systems", title: "Websites built to convert", lead: "Turn your website into a sales tool, not a digital brochure.", detail: "Clear messaging, high-performance UX, and conversion paths that turn attention into qualified enquiries." },
  { number: "02", icon: MessageCircleMore, status: "Business automation", title: "Automate the work that slows you down", lead: "Give follow-up and repetitive tasks a reliable system instead of relying on memory.", detail: "From customer follow-ups to internal workflows, we map the work, connect the tools, and build practical automations." },
  { number: "03", icon: Bot, status: "Custom software", title: "Software designed around your business", lead: "Build the tools your team needs when off-the-shelf software does not fit the workflow.", detail: "Purpose-built internal tools, customer systems, operational dashboards, integrations, and software for the work that matters." },
  { number: "04", icon: PanelsTopLeft, status: "Growth systems", title: "Build once. Improve continuously.", lead: "Make the next stage of growth easier to manage with systems that can learn as the business changes.", detail: "We use customer feedback, workflow insight, and automation to improve the systems supporting your growth." },
];

export default function Services() {
  return <PageLayout>
    <section className="page-hero page-hero--services"><div className="content-frame page-hero__grid"><div><span className="section-kicker"><span className="pulse-dot" /> What we fix</span><h1>What is making your business harder to run?</h1></div><p>Launchr starts with the operational or customer bottleneck, then combines the right design, software, and automation to make the next stage easier — across the social, search, WhatsApp, and team touchpoints where customers actually decide.</p></div></section>
    <section className="services-list content-frame">
      {services.map((service) => { const Icon = service.icon; return <article className="service-row" key={service.number}><div className="service-row__meta"><span>{service.number}</span><Icon size={26} strokeWidth={1.5} /><em>System</em></div><div className="service-row__main"><h2>{service.title}</h2><p className="service-row__lead">{service.lead}</p></div><div className="service-row__detail"><span className="system-status"><i />{service.status}</span><p>{service.detail}</p></div></article>; })}
    </section>
    <section className="service-bridge"><div className="content-frame service-bridge__grid"><div><span className="eyebrow eyebrow--lime">01 / system diagnostic</span><h2>Not sure which system you need first?</h2></div><div><p>Tell us what is slowing the business down. We will identify the leverage point, a clearer scope, and one practical next step before you commit.</p><BookingCallout label="Talk about the bottleneck" /></div></div></section>
    <section className="service-principles content-frame"><span className="eyebrow">Our filter</span><div className="principles-grid"><div><Compass size={26} /><h3>Diagnose before tools</h3><p>We start from the bottleneck, not a technology stack or software checklist.</p></div><div><Palette size={26} /><h3>Build for the actual workflow</h3><p>Clarity and careful craft matter because people have to use the system every day.</p></div><div><Bot size={26} /><h3>Improve what matters</h3><p>Every system should be easy to understand, measure, and improve as the business grows.</p></div></div><a href="mailto:hello@launchrlabs.africa" className="text-link">Have a specific bottleneck? Email us <ArrowRight size={15} /></a></section>
  </PageLayout>;
}
