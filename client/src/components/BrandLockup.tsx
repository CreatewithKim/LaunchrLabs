/** Momentum System: a plain Launchr icon-and-wordmark lockup with no patterned background or regional suffix. */
import { Link } from "wouter";

const MARK_URL = "/manus-storage/launchr-logo-alpha_312d474b.png";

export function BrandLockup({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={inverse ? "brand-lockup brand-lockup--inverse" : "brand-lockup"} aria-label="Launchr home">
      <img src={MARK_URL} alt="Launchr" className="brand-logo" width="154" height="38" decoding="async" />
    </Link>
  );
}
