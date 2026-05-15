## Improve text readability across the site

The current dark theme uses low-contrast text (`text-dim` 50% white, `text-dimmer` 30%, `muted-foreground` 40%) and small base body sizes. I'll bump opacity and sizing in the central design tokens in `src/index.css` so every section benefits without per-component edits.

### Changes in `src/index.css`

1. **Stronger text opacities** (better WCAG contrast on the dark background):
   - `--muted-foreground`: 40% → 65%
   - `--text-dim`: 50% → 75%
   - `--text-dimmer`: 30% → 55%
   - `--keyline`: 15% → 22% (subtle borders still visible)

2. **Larger, more legible body text**:
   - `.body-text`: `text-sm md:text-base` → `text-base md:text-lg`, line-height bumped to `leading-[1.7]`
   - `.body-large`: line-height `leading-[1.7]`
   - Section paragraphs feel more like editorial copy.

3. **Section labels & tags** more readable:
   - `.section-label`: `text-xs` → `text-[13px]`, letter-spacing eased to `0.25em`, weight `font-semibold`
   - `.section-tag`: `text-xs` → `text-[13px]`

4. **Sub-heading bump**: `.heading-sub` → `text-2xl md:text-3xl` so secondary headings don't get lost.

5. **Body font smoothing tweak**: add `letter-spacing: -0.005em` on body for cleaner Inter rendering at the new sizes.

No component files change — all updates are token/utility level so the visual rhythm stays consistent across Home, Services, and Pricing pages.