## Goal
Add four dedicated service pages, linked from the Services page cards, each following the existing dark DigiFrenzy theme with hero, content sections, CTA, contact form, and FAQs.

## New Routes
- `/services/social-media-marketing`
- `/services/seo-performance`
- `/services/website-development`
- `/services/3d-animation-branding`

Registered in `src/App.tsx` above the catch-all route.

## Page Structure (consistent across all 4)
1. **Navbar** (existing)
2. **Hero** — section label `(DF® — Services / [Name])`, large display heading with accent asterisk, intro paragraph, primary CTA "Start a project" → `#contact`, secondary "View pricing" → `/pricing`. Hero image on right (reuse each service's existing image).
3. **Overview / What we do** — 2-column: short narrative + key stat chips (e.g., engagement %, ROI multiplier).
4. **What's Included** — glass cards grid of 6 deliverables specific to the service.
5. **Our Process** — 4-step numbered timeline (Discover → Strategize → Execute → Optimize), themed per service.
6. **Why DigiFrenzy** — 3 benefit cards (results, transparency, dedicated team).
7. **Mid-page CTA band** — glass-surface block "Ready to grow?" with button to `#contact`.
8. **FAQSection** (reuse existing component)
9. **ContactSection** (reuse — anchor `#contact`)
10. **Footer** (existing)

All sections use existing tokens: `glass-surface`, `glass-surface-hover`, `lens-flare-card`, `aurora-glow`, `heading-display/section/sub`, `body-text`, `btn-primary`, `btn-outline`, `section-label`, `section-tag`, accent color. framer-motion fade/slide-in like other pages.

## Linking from Services Page
Update `src/pages/Services.tsx` so each of the 4 service blocks gets a "Learn more" `btn-outline` link to its detail page (kept alongside the existing "Get started" anchor that scrolls to contact).

Also update `src/components/ServicesSection.tsx` (Home) so each service card links to its detail page.

## Per-Service Content Snapshot
- **Social Media Marketing** — platforms (IG, FB, LinkedIn, X, YouTube), content calendar, paid ads, community mgmt, influencer collabs, analytics.
- **SEO & Performance** — technical audit, keyword strategy, on-page, link building, Core Web Vitals, monthly reporting.
- **Website Development** — custom React/Next builds, SaaS dashboards, CMS, e-commerce, responsive, maintenance.
- **3D Animation & Branding** — 3D product renders, motion graphics, brand identity systems, explainer videos, visual storytelling.

Each gets its own tailored FAQ entries handled in `FAQSection` (will accept an optional `items` prop) OR we keep the existing shared FAQ — see Decision below.

## Files
- New: `src/pages/services/SocialMedia.tsx`, `SEO.tsx`, `WebDevelopment.tsx`, `Animation.tsx` (or single template + config).
- Edit: `src/App.tsx` (routes), `src/pages/Services.tsx` (Learn more links), `src/components/ServicesSection.tsx` (Home links), optionally `src/components/FAQSection.tsx` (accept items prop).

## Decision needed
1. Should each service page have its **own service-specific FAQs**, or reuse the standard shared FAQ section as-is?
2. Use a **single shared template component** driven by a config object (less code, perfectly consistent) or **four separate page files** (easier to customize individually later)?
