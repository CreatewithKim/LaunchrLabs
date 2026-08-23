/** Momentum System: directional, editorial home page combining SaaS clarity with African founder momentum. */
import { ArrowDownRight, ArrowRight, Bot, LayoutTemplate, MessageCircleMore, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { BookingBenefits, BookingCallout } from "@/components/BookingWorkflow";
import { PageLayout } from "@/components/PageLayout";

const HERO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663554302780/RLytoPXbOQprGDrV.jpg";
const SYSTEMS_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663554302780/nKziFCPptzBWvgMR.jpg";
const BUILDERS_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663554302780/dZuwKWLPIDaXCZgW.jpg";
const ORBIT_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663554302780/wCmpzdUIjnBtxawW.jpg";

const services = [
  { icon: LayoutTemplate, number: "01", title: "Websites that earn trust", text: "Conversion-focused websites, launch pages, and mobile-first digital homes built to make your offer clear." },
  { icon: MessageCircleMore, number: "02", title: "WhatsApp systems that follow through", text: "Sales flows, lead qualification, and follow-up journeys that respect how customers already communicate." },
  { icon: Bot, number: "03", title: "Automation that gives time back", text: "Practical workflows that reduce repeat work across lead generation, support, content, and operations." },
  { icon: Sparkles, number: "04", title: "Brands built to be remembered", text: "Positioning, messaging, visual direction, and launch thinking for businesses ready to look as capable as they are." },
];

const process = [
  ["01", "See the real opportunity", "We get underneath the surface of your idea, offer, bottleneck, or next launch."],
  ["02", "Shape the right system", "We turn the opportunity into a clear plan: what to build, what to simplify, and what to sequence."],
  ["03", "Build with momentum", "Design, tools, touchpoints, and messaging come together around the moments that matter most."],
  ["04", "Keep improving", "Your launch is a starting line. We leave you with a system that can learn, grow, and evolve."],
];

export default function Home() {
  return (
    <PageLayout>
      <section className="hero-section">
        <div className="hero-orbit hero-orbit--one" />
        <div className="hero-orbit hero-orbit--two" />
        <div className="content-frame hero-grid">
          <div className="hero-copy">
            <div className="section-kicker"><span className="pulse-dot" /> Modern systems for African brands</div>
            <h1>Build the business your ambition deserves.</h1>
            <p className="hero-copy__lede">LaunchrLabs Africa helps founders turn promising ideas into modern, trusted, customer-ready internet businesses.</p>
            <div className="hero-actions">
              <BookingCallout />
              <Link href="/services" className="button button--ghost">Explore what we build <ArrowDownRight size={17} /></Link>
            </div>
            <BookingBenefits />
          </div>
          <div className="hero-media">
            <div className="hero-media__frame">
              <img src={HERO_URL} alt="Founder working with a digital business dashboard" />
              <div className="hero-media__caption"><span>Launch signal</span><strong>Design × Automation × Growth</strong></div>
            </div>
            <div className="hero-corner-card"><span>Built for</span><strong>how African businesses actually grow online.</strong></div>
          </div>
        </div>
      </section>

      <section className="manifesto-section">
        <div className="content-frame manifesto-grid">
          <div className="section-side-label"><span>01</span><p>The difference</p></div>
          <div className="manifesto-copy">
            <p className="eyebrow">Launch slower? Not here.</p>
            <h2>Your business does not need more tools. It needs a smarter way to move.</h2>
          </div>
          <div className="manifesto-note">
            <p>We connect strong brand foundations with the digital systems that make growth feel less chaotic: clear websites, customer journeys, practical AI, and better follow-through.</p>
            <Link href="/about" className="text-link">Why this matters <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="services-section content-frame">
        <div className="section-heading section-heading--split">
          <div><span className="eyebrow">What we build</span><h2>A sharper way to show up, sell, and scale.</h2></div>
          <Link href="/services" className="text-link">See all capabilities <ArrowRight size={15} /></Link>
        </div>
        <div className="service-matrix">
          {services.map((service) => {
            const Icon = service.icon;
            return <article className="service-card" key={service.number}>
              <div className="service-card__top"><span>{service.number}</span><Icon size={23} strokeWidth={1.6} /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link href="/services" className="service-card__link" aria-label={`Read about ${service.title}`}><ArrowDownRight size={21} /></Link>
            </article>;
          })}
        </div>
      </section>

      <section className="systems-section">
        <div className="content-frame systems-grid">
          <div className="systems-media"><img src={SYSTEMS_URL} alt="A smartphone and workflow objects representing connected business systems" /><span className="systems-media__signal"><i /> Customer flow / connected</span></div>
          <div className="systems-copy">
            <span className="eyebrow eyebrow--lime">Practical by design</span>
            <h2>AI and automation, translated into work that makes sense.</h2>
            <p>We are not here to add complexity for its own sake. We help you use the tools that make a genuine difference to your customers, team, and business rhythm.</p>
            <ul className="check-list">
              <li><span>01</span> Customer journeys that respond when you cannot</li>
              <li><span>02</span> Follow-up that turns attention into action</li>
              <li><span>03</span> Less manual work around the tasks that drain momentum</li>
            </ul>
            <BookingCallout compact />
          </div>
        </div>
      </section>

      <section className="process-section content-frame">
        <div className="section-heading section-heading--split"><div><span className="eyebrow">The way we work</span><h2>Clear enough to move. Flexible enough to grow.</h2></div><p>Good work starts with a real conversation, then makes every next step easier to see.</p></div>
        <div className="process-rail">
          {process.map(([number, title, text]) => <article className="process-step" key={number}><span className="process-step__number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="builders-section">
        <div className="content-frame builders-grid">
          <div className="builders-copy"><span className="eyebrow">More than deliverables</span><h2>We are building a lab for African business builders.</h2><p>LaunchrLabs brings together hands-on delivery, practical education, useful templates, workshops, and a community that learns by doing.</p><Link href="/resources" className="button button--dark">Step into the learning lab <ArrowRight size={17} /></Link></div>
          <div className="builders-media"><img src={BUILDERS_URL} alt="African founders collaborating in a creative workspace" /><span className="builders-media__label">Learn / build / launch</span></div>
        </div>
      </section>

      <section className="closing-section content-frame">
        <div className="closing-card">
          <div className="closing-card__image"><img src={ORBIT_URL} alt="Abstract LaunchrLabs orbit mark" /></div>
          <div className="closing-card__copy"><span className="eyebrow eyebrow--lime">The launch starts here</span><h2>Ready to make your business feel ready for the internet?</h2><p>Let’s look at the opportunity together and identify the next move that will matter most.</p><BookingCallout /></div>
        </div>
      </section>
    </PageLayout>
  );
}
