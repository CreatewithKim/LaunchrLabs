# Vercel Route Verification

Verified on 23 August 2026 after restoring the correct route ownership.

| Host | Intended product | Observed result |
| --- | --- | --- |
| `https://launchr-chi.vercel.app/` | Launchr SaaS workspace | The page title was **Launchr** and the dashboard exposed SaaS navigation for Dashboard, Customers, Offers, Campaigns, Leads, Analytics, Profile, and Settings. |
| `https://launchr-labs.vercel.app/` | LaunchrLabs Africa website | The page title was **LaunchrLabs Africa — Built for African Builders** and the full website showed its brand, service, learning, and booking experience. |
| `https://launchr-labs.vercel.app/book` | LaunchrLabs booking workflow | The booking route loaded directly and exposed the retained 30-minute working-session flow and Calendly link. |

> The two public hosts are now serving separate intended products. The SaaS host was restored from `CreatewithKim/launchr`; the dedicated LaunchrLabs host was preserved without modification.

## Social Link Verification

| Channel | Supplied destination | Verification note |
| --- | --- | --- |
| Facebook | `web.facebook.com/profile.php?id=61593483148807` | Redirected to the public **Launchr Labs Africa** Facebook page in Nairobi. |
| Instagram | `instagram.com/launchrlabsafrica` | The platform routed to its sign-in page while retaining the supplied profile as the intended destination. |
| X | `x.com/launchrlabs` | Resolved publicly to **Launchr Labs Africa** (`@launchrlabs`). |
| LinkedIn | `linkedin.com/company/launchr-labs-africa` | Resolved publicly to the **Launchr Labs Africa** company page. |

All four verified destinations were inserted exactly as provided in the site footer.
