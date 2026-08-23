/** Momentum System: supplied Launchr wordmark in a navy, white, and signal-green brand lockup. */
import { Link } from "wouter";

const MARK_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663554302780/AjZcPpbQRfnkobiZ.jpeg";

export function BrandLockup({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="brand-lockup" aria-label="LaunchrLabs Africa home">
      <span className="brand-logo-crop"><img src={MARK_URL} alt="Launchr" className="brand-mark brand-mark--supplied" /></span>
      <span className={inverse ? "brand-wordmark brand-wordmark--inverse" : "brand-wordmark"}>
        Labs
      </span>
      <span className={inverse ? "brand-region brand-region--inverse" : "brand-region"}>Africa</span>
    </Link>
  );
}
