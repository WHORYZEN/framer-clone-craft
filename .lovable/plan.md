

## Plan: Update FAQ Content + Add FAQ to Services & Pricing Pages

### Changes

1. **Update `FAQSection.tsx`** — Replace the 8 existing FAQ items with the 8 new DigiFrenzy-specific questions and answers provided by the user. Keep the exact same component structure, styling, and animations.

2. **Add FAQSection to `Services.tsx`** — Import and add `<FAQSection />` between the CTA section and Footer.

3. **Add FAQSection to `Pricing.tsx`** — Import and add `<FAQSection />` between the CTA section and Footer.

### Technical details
- No new components needed — reuse the existing `FAQSection` component as-is
- FAQ data update is a simple array replacement (same `{ q, a }` shape)
- The FAQ section already has its own section padding and styling, so it drops in cleanly before `<Footer />`

