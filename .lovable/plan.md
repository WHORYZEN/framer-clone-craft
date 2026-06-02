# Hero Section Redesign (Agenzo-style)

Rework `src/components/HeroSection.tsx` only. Keep the rest of the page (LogoMarquee, intro cards, work strip) intact by moving the non-hero blocks out of the hero or keeping them below.

## Layout changes
- Remove the right blue (`hsl(var(--accent))`) panel and its "Welcome to DigiFrenzy / We are a full-service…" content + "Get in touch" button.
- Make the hero a single full-bleed section using the existing background portrait image as a full-width backdrop (object-cover, centered). Keep current dark background/aurora as-is behind it.
- Add a subtle dark gradient overlay on top of the image for text legibility (no color change to the page background).
- Place a massive wordmark **DIGIFRENZY®** (using `*` replaced visually with the ® style superscript like Agenzo) left-aligned, vertically centered-ish, spanning most of the viewport width — similar scale/placement to "Agenzo®" in the reference.
- Under the wordmark, add a small tag row: a short divider line + label `— DIGITAL AGENCY` (uppercase, tracked).
- Bottom-left: short tagline paragraph (reuse current "we are a full-service digital agency…" copy, condensed) + two pill buttons: primary "View Our Work" (→ `#portfolio`) and outline/secondary "Contact Us" (→ `#contact`), styled with existing `.btn-primary` / `.btn-outline`.
- Right edge: vertical "Scroll down" label with a thin animated line (decorative, like Agenzo).
- Keep the existing intro-text two-card row and the 3-image work strip below the hero (unchanged).

## Scroll effects (framer-motion, matching example feel)
- Background image: slow parallax translateY + slight scale on scroll (using `useScroll` + `useTransform`, already imported).
- Wordmark: scroll-linked translateY upward and slight opacity fade as user scrolls past hero.
- Tagline + buttons block: small translateY + opacity fade on scroll.
- Vertical "Scroll down" line: height grows / indicator moves with `scrollYProgress`.
- Initial entrance: wordmark letters fade+rise (stagger via simple motion variants), tagline/buttons fade-in delayed.

## Styling / tokens
- Use existing design tokens only (`--foreground`, `--background`, `--accent`, `--keyline`, `.heading-display`, `.btn-primary`, `.btn-outline`, `.section-tag`). No new colors.
- Wordmark: extend `.heading-display` inline with `text-[18vw] leading-[0.85]` (or similar responsive clamp) so it scales like the reference. The `®` rendered as a smaller superscript in `--accent` color.
- Ensure mobile: wordmark scales down gracefully, buttons stack, scroll indicator hidden on small screens.

## Out of scope
- No changes to Navbar, other sections, routing, or design tokens.
- Background page color and aurora glow remain exactly as today.
