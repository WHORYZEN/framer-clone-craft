## Goal
Move the "DigiFrenzy" heading from its current top-aligned position toward the vertical center of the hero viewport, similar to the centered heading on the reference template.

## Changes
1. In `src/components/HeroSection.tsx`, modify the wordmark `<motion.div>` (line 54) to occupy the remaining vertical space and center its content:
   - Add `flex-1 flex flex-col justify-center` to the wordmark container
   - Reduce or remove the top padding `pt-32 md:pt-36` so it centers naturally in the viewport
2. Keep the outer container as `flex flex-col` so the bottom tagline + buttons remain at the bottom of the hero.
3. Preserve all existing scroll-driven parallax effects (wordmarkY, wordmarkOpacity, overlayOpacity, etc.) and the background image.

## Visual outcome
- The "DigiFrenzy" wordmark and its "Digital Agency" tag sit vertically centered in the hero banner.
- Bottom paragraph, buttons, and scroll indicator stay anchored at the bottom.
- No other sections or components are affected.