/** Momentum System: a direct, human booking path that moves from context to Calendly without friction. */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

type BookingDetails = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type BookingContextValue = {
  openBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const booking = useContext(BookingContext);
  if (!booking) throw new Error("useBooking must be used inside BookingProvider");
  return booking;
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"details" | "calendar">("details");
  const [details, setDetails] = useState<BookingDetails>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const calendarRef = useRef<HTMLDivElement>(null);

  const calendarUrl = (() => {
    const params = new URLSearchParams();
    if (details.name) params.set("name", details.name);
    if (details.email) params.set("email", details.email);
    return `https://calendly.com/serveiqafrica/30min${params.size ? `?${params.toString()}` : ""}`;
  })();

  useEffect(() => {
    if (!open || step !== "calendar" || !calendarRef.current) return;
    const mountCalendar = () => {
      const target = calendarRef.current;
      if (!target || !window.Calendly) return;
      target.replaceChildren();
      window.Calendly.initInlineWidget({ url: calendarUrl, parentElement: target });
    };

    if (window.Calendly) {
      mountCalendar();
      return;
    }

    const scriptId = "launchrlabs-calendly-script";
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener("load", mountCalendar, { once: true });
      return () => existingScript.removeEventListener("load", mountCalendar);
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = mountCalendar;
    document.body.appendChild(script);
  }, [calendarUrl, open, step]);

  const closeBooking = () => {
    setOpen(false);
    window.setTimeout(() => setStep("details"), 180);
  };

  const openBooking = () => {
    setStep("details");
    setOpen(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep("calendar");
  };

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <Dialog open={open} onOpenChange={(nextOpen) => (nextOpen ? setOpen(true) : closeBooking())}>
        <DialogContent className={step === "calendar" ? "booking-dialog booking-dialog--calendar" : "booking-dialog"}>
          {step === "details" ? (
            <div className="booking-panel">
              <DialogHeader className="booking-dialog__header">
                <span className="eyebrow eyebrow--lime">Working session / 30 minutes</span>
                <DialogTitle className="booking-dialog__title">Bring the opportunity. Leave with direction.</DialogTitle>
                <DialogDescription className="booking-dialog__description">
                  Tell us a little about what you are building, then choose a time that works for you.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="booking-form">
                <label>
                  <span>Full name</span>
                  <input
                    required
                    value={details.name}
                    onChange={(event) => setDetails({ ...details, name: event.target.value })}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  <span>Email address</span>
                  <input
                    required
                    type="email"
                    value={details.email}
                    onChange={(event) => setDetails({ ...details, email: event.target.value })}
                    placeholder="you@company.com"
                  />
                </label>
                <label>
                  <span>Business or project</span>
                  <input
                    value={details.company}
                    onChange={(event) => setDetails({ ...details, company: event.target.value })}
                    placeholder="What are you building?"
                  />
                </label>
                <label>
                  <span>What would make this session valuable?</span>
                  <textarea
                    rows={3}
                    value={details.message}
                    onChange={(event) => setDetails({ ...details, message: event.target.value })}
                    placeholder="A launch, redesign, customer journey, automation, or growth challenge"
                  />
                </label>
                <button className="button button--lime button--full" type="submit">
                  Continue to the calendar <ArrowRight size={17} aria-hidden="true" />
                </button>
              </form>
              <p className="booking-privacy"><ShieldCheck size={15} aria-hidden="true" /> Your details remain in this browser while you select a time.</p>
            </div>
          ) : (
            <div className="booking-panel booking-panel--calendar">
              <DialogHeader className="booking-dialog__header booking-dialog__header--calendar">
                <span className="eyebrow eyebrow--lime">Almost there</span>
                <DialogTitle className="booking-dialog__title">Choose your working session.</DialogTitle>
                <DialogDescription className="booking-dialog__description">Your preferred time will be confirmed by Calendly.</DialogDescription>
              </DialogHeader>
              <div ref={calendarRef} className="calendly-slot" aria-label="Calendly booking calendar" />
              <a className="text-link text-link--center" href={calendarUrl} target="_blank" rel="noreferrer">
                Having trouble loading the calendar? Open it in a new window <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </BookingContext.Provider>
  );
}

export function BookingCallout({ compact = false }: { compact?: boolean }) {
  const { openBooking } = useBooking();
  return (
    <button onClick={openBooking} className={compact ? "button button--lime button--small" : "button button--lime"}>
      {compact ? "Book a session" : "Book a working session"} <ArrowRight size={16} aria-hidden="true" />
    </button>
  );
}

export function BookingBenefits() {
  return (
    <div className="booking-benefits" aria-label="What to expect from the working session">
      <span><CalendarDays size={16} aria-hidden="true" /> A focused 30 minutes</span>
      <span><Clock3 size={16} aria-hidden="true" /> Clear next steps</span>
      <span><CheckCircle2 size={16} aria-hidden="true" /> No generic sales script</span>
    </div>
  );
}

