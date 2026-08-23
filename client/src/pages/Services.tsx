/** Momentum System: service architecture page with strong hierarchy, clear outcomes, and zero generic agency filler. */
import { ArrowRight, Bot, Compass, LayoutTemplate, MessageCircleMore, Palette, PanelsTopLeft } from "lucide-react";
import { BookingCallout } from "@/components/BookingWorkflow";
import { PageLayout } from "@/components/PageLayout";

const services = [
  { number: "01", icon: LayoutTemplate, status: "Customer surface", title: "Web design & launch pages", lead: "Your offer deserves a digital home that earns attention and trust quickly.", detail: "Conversion-focused landing pages, business websites, portfolio sites, product launches, mobile-first UX, and scalable visual systems." },
  { number: "02", icon: MessageCircleMore, status: "Conversation flow", title: "WhatsApp business systems", lead: "Turn the channel your customers already use into a stronger customer experience.", detail: "Click-to-WhatsApp funnels, customer follow-up, lead qualification, sales flows, broadcast strategy, and accessible conversation design." },
  { number: "03", icon: Bot, status: "Workflow engine", title: "AI & automation systems", lead: "Give every good process a better chance of happening consistently.", detail: "Workflow design, outreach support, customer-service flows, lead generation, content systems, n8n automation, and business process optimisation." },
  { number: "04", icon: Palette, status: "Market signal", title: "Branding & digital positioning", lead: "Be easier to recognise, understand, and choose in a crowded market.", detail: "Brand foundations, messaging, visual direction, social positioning, launch narratives, and internet-native identity systems." },
  { number: "05", icon: PanelsTopLeft, status: "Capability layer", title: "Education & team capability", lead: "Practical knowledge helps strong businesses keep moving after the project ends.", detail: "Workshops, starter kits, launch guides, automation templates, creator systems, community programmes, and accessible business education." },
];

export default function Services() {
  return <PageLayout>
    <section className="page-hero page-hero--services"><div className="content-frame page-hero__grid"><div><span className="section-kicker"><span className="pulse-dot" /> What we build</span><h1>Modern business systems, built around real momentum.</h1></div><p>Each engagement combines a clear commercial point of view with the practical design and tools that move your business forward.</p></div></section>
    <section className="services-list content-frame">
      {services.map((service) => { const Icon = service.icon; return <article className="service-row" key={service.number}><div className="service-row__meta"><span>{service.number}</span><Icon size={26} strokeWidth={1.5} /><em>System</em></div><div className="service-row__main"><h2>{service.title}</h2><p className="service-row__lead">{service.lead}</p></div><div className="service-row__detail"><span className="system-status"><i />{service.status}</span><p>{service.detail}</p></div></article>; })}
    </section>
    <section className="service-bridge"><div className="content-frame service-bridge__grid"><div><span className="eyebrow eyebrow--lime">Start with the right problem</span><h2>Not sure which system you need first?</h2></div><div><p>A working session is the fastest way to get out of tool overload. We will look at your situation, identify the leverage point, and help you see a practical way forward.</p><BookingCallout /></div></div></section>
    <section className="service-principles content-frame"><span className="eyebrow">Our filter</span><div className="principles-grid"><div><Compass size={26} /><h3>Built for the actual journey</h3><p>We start from your customers, not a software checklist.</p></div><div><Palette size={26} /><h3>Made to feel world-class</h3><p>Clarity and careful craft are not extras. They build trust.</p></div><div><Bot size={26} /><h3>Kept practical</h3><p>Every system should be simple enough to use and easy to improve.</p></div></div><a href="mailto:hello@launchrlabs.africa" className="text-link">Have a specific question? Email us <ArrowRight size={15} /></a></section>
  </PageLayout>;
}
