Split the hero heading "DigiFrenzy" so that only "Frenzy" is rendered in the accent blue color (`text-accent`), while "Digi" remains in the default `text-foreground` color. The `®` superscript stays in accent as-is.

**File to change:** `src/components/HeroSection.tsx` — wrap "Frenzy" in a `<span className="text-accent">` inside the `<h1>`. No other changes.