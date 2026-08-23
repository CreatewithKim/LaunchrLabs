/** Momentum System: a clear recovery page that lets visitors return to a meaningful route immediately. */
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";

export default function NotFound() {
  return <PageLayout><section className="not-found"><span className="eyebrow eyebrow--lime">404 / Signal lost</span><h1>That page has not launched.</h1><p>Let’s get you back to a useful place.</p><Link href="/" className="button button--lime">Return home <ArrowRight size={17} /></Link></section></PageLayout>;
}

