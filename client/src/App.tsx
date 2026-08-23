/** Momentum System: route map for an African-first launch ecosystem, wrapped in a retained booking workflow. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { BookingProvider } from "./components/BookingWorkflow";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Book from "./pages/Book";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Resources from "./pages/Resources";
import Services from "./pages/Services";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/services" component={Services} />
    <Route path="/about" component={About} />
    <Route path="/resources" component={Resources} />
    <Route path="/book" component={Book} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="dark"><TooltipProvider><BookingProvider><Toaster /><Router /></BookingProvider></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

