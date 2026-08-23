/** Momentum System: compact LaunchrLabs lockup with the directional launch symbol. */
import { Link } from "wouter";

const MARK_URL = "/manus-storage/launchrlabs-africa-mark_228a5da3.png";

export function BrandLockup({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="brand-lockup" aria-label="LaunchrLabs Africa home">
      <img src={MARK_URL} alt="" className="brand-mark" />
      <span className={inverse ? "brand-wordmark brand-wordmark--inverse" : "brand-wordmark"}>
        Launchr<span>Labs</span>
      </span>
      <span className={inverse ? "brand-region brand-region--inverse" : "brand-region"}>Africa</span>
    </Link>
  );
}

