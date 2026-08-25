/** Momentum System: an outcome-led home page that frames Launchr as the bottleneck-first systems partner for growing businesses. */
import { ArrowDownRight, ArrowRight, Bot, LayoutTemplate, MessageCircleMore, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { BookingBenefits, BookingCallout } from "@/components/BookingWorkflow";
import { PageLayout } from "@/components/PageLayout";

const HERO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663554302780/RLytoPXbOQprGDrV.jpg";
const SYSTEMS_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663554302780/nKziFCPptzBWvgMR.jpg";
const BUILDERS_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663554302780/dZuwKWLPIDaXCZgW.jpg";
const ORBIT_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663554302780/wCmpzdUIjnBtxawW.jpg";

const services = [
  { icon: LayoutTemplate, number: "01", title: "Turn attention into enquiries", text: "Web systems with clearer messaging, mobile-first UX, and conversion paths built around the actions you want customers to take." },
  { icon: MessageCircleMore, number: "02", title: "Make follow-up happen", text: "Customer journeys, WhatsApp flows, and hand-offs that keep conversations moving when your team is busy." },
  { icon: Bot, number: "03", title: "Automate the repetitive work", text: "Reliable workflows that reduce manual tasks across customer service, leads, operations, and reporting." },
  { icon: Sparkles, number: "04", title: "Build tools around the real workflow", text: "Purpose-built software and growth systems for the work off-the-shelf tools cannot handle well." },
];

const process = [
  ["01", "Diagnose", "We identify the bottleneck, business goal, and current workflow before proposing a system."],
  ["02", "Design", "We map the better customer or operational journey before building the technology around it."],
  ["03", "Build", "We implement and test the website, automation, or software system that solves the practical problem."],
  ["04", "Improve", "We use what happens next to refine the system as the business grows."],
];

export default function Home() {
  return (
    <PageLayout>
      <section className="hero-section">
        <div className="hero-orbit hero-orbit--one" />
        <div className="hero-orbit hero-orbit--two" />
        <div className="content-frame hero-grid">
          <div className="hero-copy">
            <div className="section-kicker"><span className="pulse-dot" /> Systems for growing businesses</div>
            <h1>Make your business easier to run — and easier to grow.</h1>
            <p className="hero-copy__lede">Launchr builds websites, software, and automations that remove repetitive work, improve customer journeys, and give growing businesses systems they can rely on.</p>
            <div className="hero-actions">
              <BookingCallout label="Build my growth system" />
              <Link href="/services" className="button button--ghost">See what Launchr can automate <ArrowDownRight size={17} /></Link>
            </div>
            <BookingBenefits />
          </div>
          <div className="hero-media">
            <div className="hero-media__frame">
              <img src={HERO_URL} alt="Founder working with a digital business dashboard" fetchPriority="high" decoding="async" />
              <div className="hero-media__caption"><span>System signal</span><strong>Web × Software × Automation</strong></div>
            </div>
            <div className="hero-corner-card"><span>Built for</span><strong>businesses ready to run better.</strong></div>
          </div>
        </div>
      </section>

      <section className="manifesto-section">
        <div className="content-frame manifesto-grid">
          <div className="section-side-label"><span>01</span><p>The difference</p></div>
          <div className="manifesto-copy">
            <p className="eyebrow">The bottleneck is the brief</p>
            <h2>Your business is growing. Your systems should grow with it.</h2>
          </div>
          <div className="manifesto-note">
            <p>When work depends on spreadsheets, manual follow-ups, disconnected tools, or one person holding the process together, growth becomes harder than it needs to be. Launchr turns those bottlenecks into practical digital systems.</p>
            <Link href="/about" className="text-link">Why we start with the bottleneck <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="services-section content-frame">
        <div className="section-heading section-heading--split">
          <div><span className="eyebrow">What we fix</span><h2>Four systems that make growth less fragile.</h2></div>
          <Link href="/services" className="text-link">See the systems behind the work <ArrowRight size={15} /></Link>
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
          <div className="systems-media"><img src={SYSTEMS_URL} alt="A smartphone and workflow objects representing connected business systems" loading="lazy" decoding="async" /><span className="systems-media__signal"><i /> Customer flow / connected</span></div>
          <div className="systems-copy">
            <span className="eyebrow eyebrow--lime">Practical by design</span>
            <h2>Technology should reduce complexity, not add to it.</h2>
            <p>We use software and automation only where they improve the way your customers, team, and business actually work. The best system is one your team can understand, use, and improve.</p>
            <ul className="check-list">
              <li><span>01</span> Customer journeys that make the next step clear</li>
              <li><span>02</span> Follow-up that does not rely on memory alone</li>
              <li><span>03</span> Less manual work around the tasks that slow growth</li>
            </ul>
            <BookingCallout compact />
          </div>
        </div>
      </section>

      <section className="process-section content-frame">
        <div className="section-heading section-heading--split"><div><span className="eyebrow">The way we work</span><h2>Diagnose first. Build only what moves the business forward.</h2></div><p>No obligation. We will identify one practical improvement you can make next.</p></div>
        <div className="process-rail">
          {process.map(([number, title, text]) => <article className="process-step" key={number}><span className="process-step__number">{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="builders-section">
        <div className="content-frame builders-grid">
          <div className="builders-copy"><span className="eyebrow">More than deliverables</span><h2>We are building a more useful operating toolkit for African businesses.</h2><p>LaunchrLabs brings together hands-on delivery, practical education, useful templates, workshops, and a community that learns by doing.</p><Link href="/resources" className="button button--dark">Step into the learning lab <ArrowRight size={17} /></Link></div>
          <div className="builders-media"><img src={BUILDERS_URL} alt="African founders collaborating in a creative workspace" loading="lazy" decoding="async" /><span className="builders-media__label">Learn / build / launch</span></div>
        </div>
      </section>

      <section className="closing-section content-frame">
        <div className="closing-card">
          <div className="closing-card__image"><img src={ORBIT_URL} alt="Abstract LaunchrLabs orbit mark" loading="lazy" decoding="async" /></div>
          <div className="closing-card__copy"><span className="eyebrow eyebrow--lime">Start with the bottleneck</span><h2>What is slowing your business down?</h2><p>Tell us what is getting in the way. We will help you identify the most practical system to fix first.</p><BookingCallout label="Start a conversation" /></div>
        </div>
      </section>
    </PageLayout>
  );
}
