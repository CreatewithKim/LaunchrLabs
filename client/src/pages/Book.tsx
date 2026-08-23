/** Momentum System: booking page that protects the original lead-capture-to-calendar workflow while explaining it plainly. */
import { ArrowRight, CalendarDays, MessageSquareText, Route } from "lucide-react";
import { BookingBenefits, BookingCallout } from "@/components/BookingWorkflow";
import { PageLayout } from "@/components/PageLayout";

export default function Book() {
  return <PageLayout>
    <section className="booking-page-hero"><div className="content-frame booking-page-hero__grid"><div><span className="section-kicker"><span className="pulse-dot" /> A focused working session</span><h1>One good conversation can unlock the next right move.</h1><p>Book 30 minutes with LaunchrLabs Africa to talk through the opportunity, your current friction, and what a practical next step could look like.</p><BookingCallout /><BookingBenefits /></div><aside className="booking-page-hero__side"><span>What happens next</span><ol><li><strong>01</strong> Share a little context about your business.</li><li><strong>02</strong> Choose a time through the secure calendar.</li><li><strong>03</strong> Arrive ready to make the next move clearer.</li></ol></aside></div></section>
    <section className="booking-expectations content-frame"><div><span className="eyebrow">Useful by default</span><h2>Bring the real question, not a polished pitch.</h2><p>We use the session to understand your business in context. It may be a new idea, a site that is not doing enough work, a slow sales journey, a clumsy manual process, or simply uncertainty about where to focus.</p></div><div className="expectation-list"><span><MessageSquareText size={22} /><strong>A practical conversation</strong><small>No generic presentation or overcomplicated tech talk.</small></span><span><Route size={22} /><strong>A clearer direction</strong><small>We will identify the decision, system, or first step worth prioritising.</small></span><span><CalendarDays size={22} /><strong>A straightforward close</strong><small>You will leave knowing whether and how LaunchrLabs can support the work.</small></span></div></section>
    <section className="booking-final content-frame"><span className="eyebrow eyebrow--lime">When you are ready</span><h2>Choose a time that works for you.</h2><p>It takes a minute to provide context, then the calendar will show live availability.</p><BookingCallout /><a href="https://calendly.com/serveiqafrica/30min" target="_blank" rel="noreferrer" className="text-link">Prefer a new browser window? Open Calendly directly <ArrowRight size={15} /></a></section>
  </PageLayout>;
}

