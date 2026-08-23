/** Momentum System: a code-split route map that keeps the booking workflow available while reducing initial route cost. */
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { BookingProvider } from "./components/BookingWorkflow";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Book = lazy(() => import("./pages/Book"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Resources = lazy(() => import("./pages/Resources"));
const Services = lazy(() => import("./pages/Services"));

function Router() {
  return <Suspense fallback={<main className="route-loading" aria-label="Loading page" />}><Switch>
    <Route path="/" component={Home} />
    <Route path="/services" component={Services} />
    <Route path="/about" component={About} />
    <Route path="/resources" component={Resources} />
    <Route path="/book" component={Book} />
    <Route component={NotFound} />
  </Switch></Suspense>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><BookingProvider><Toaster /><Router /></BookingProvider></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
