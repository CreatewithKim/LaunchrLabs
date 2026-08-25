# Branding Revision Checklist

- [x] Add the supplied Launchr logo to the website’s managed asset store and replace the current logo reference.
- [x] Rebase core brand tokens on the supplied dark navy, white, and bright green visual system.
- [x] Update navigation, buttons, surfaces, image treatments, and favicon to use the revised brand assets consistently.
- [x] Validate the revised website at desktop and mobile breakpoints, then save a delivery checkpoint.

## Vercel Synchronization

- [ ] Inspect the current Vercel project and production deployment associated with LaunchrLabs.
- [x] Compare the production deployment source revision and live experience with GitHub commit `9c1aa92`.
- [x] Replace Manus-preview asset paths with portable public asset URLs for the Vercel deployment source.
- [x] Trigger or confirm a production deployment from the current approved source, if required.
- [x] Verify the synchronized production URL and document the outcome.

## Route Correction

- [x] Inspect Vercel deployments for the SaaS host (`launchr-chi.vercel.app`) and the LaunchrLabs host (`launchr-labs.vercel.app`).
- [x] Restore the SaaS deployment at `launchr-chi.vercel.app` from its prior SaaS source.
- [x] Keep the rebuilt LaunchrLabs website at the repository-connected `launchr-labs.vercel.app` project without modifying its working deployment.
- [x] Confirm that both Vercel routes serve their intended products.

## Performance and Brand Refinement

- [x] Audit current image delivery, font loading, and initial bundle contributors for practical loading-speed improvements.
- [x] Replace the background-bearing logo crop with a plain Launchr icon-and-wordmark lockup and remove the Labs Africa suffix.
- [x] Improve desktop scaling behavior at common browser zoom levels and responsive widths.
- [x] Add the supplied Facebook, Instagram, X, and LinkedIn links to the site footer.
- [x] Validate the revised experience at desktop, zoomed desktop, and mobile breakpoints.

## Supplied Logo Replacement

- [x] Prepare the newly supplied Launchr logo as a compact web-ready asset.
- [x] Replace the shared header, footer, and favicon logo references with the supplied asset.
- [x] Validate the supplied logo on desktop, zoomed desktop, mobile, and the connected Vercel host.

## Production Logo Incident

- [x] Inspect the current logo asset response from the Vercel-hosted LaunchrLabs site.
- [x] Replace the Manus-only logo path with a portable public asset URL that Vercel can serve consistently.
- [x] Deploy and verify the corrected logo at `launchr-labs.vercel.app`.

## Browser and Mobile Icon Update

- [x] Prepare an icon-only Launchr play-symbol asset at favicon and mobile app-icon resolutions.
- [x] Add the icon-only asset to browser favicon, Apple touch icon, and web-app manifest metadata.
- [x] Deploy and verify the metadata on the repository-connected Vercel host.

## Content and Copyright Audit Revision

- [x] Extract the attached audit’s copy, CTA, positioning, and copyright recommendations.
- [x] Map approved recommendations to the home, services, about, resources, booking, and footer content.
- [x] Implement the highest-value content and copyright improvements without changing the booking workflow.
- [x] Validate the revised pages and production-ready copy for clarity and consistency.
