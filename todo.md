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
