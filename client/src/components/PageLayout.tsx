/** Momentum System: shared shell with a disciplined dark canvas and an always-available booking route. */
import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export function PageLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const routeIndex: Record<string, string> = { "/": "00", "/services": "01", "/about": "02", "/resources": "03", "/book": "04" };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="site-shell">
      <aside className="momentum-rail" aria-hidden="true">
        <span className="momentum-rail__dot" />
        <span className="momentum-rail__line" />
        <span className="momentum-rail__index">{routeIndex[location] ?? "00"}</span>
      </aside>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
