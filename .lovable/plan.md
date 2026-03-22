

## Plan: Update Pricing Section + Create Dedicated Pricing Page

### Changes

1. **Update `PricingSection.tsx`**
   - Replace plan data with DigiFrenzy's actual plans (Starter ₹29,999, Growth ₹49,999, Premium ₹89,999 — all /month)
   - Each plan gets its own unique features list (not shared)
   - Starter gets "MOST POPULAR" badge
   - Update heading to "Plans Built for Growth." and description to the provided copy
   - Remove the monthly/annual toggle (all plans are monthly)
   - Remove the pricing portrait image
   - Keep glass-surface cards, motion animations, accent checkmarks, pill button CTA

2. **Create `src/pages/Pricing.tsx`**
   - Same layout structure as Services page (Navbar + aurora-glow + Footer)
   - Hero section with "Our Pricing" heading
   - Same 3 plan cards in a grid, but larger/more detailed with feature descriptions
   - CTA section at bottom linking to contact
   - Same design tokens, motion, glass aesthetics

3. **Update `App.tsx`** — Add `/pricing` route

4. **Update `Navbar.tsx`** — Add "Pricing" nav item linking to `/pricing`

### Plan data

| Plan | Price | Badge | Features |
|------|-------|-------|----------|
| Starter | ₹29,999/month | MOST POPULAR | Social Media (2 platforms), Basic SEO Setup, Monthly Performance Report, Email Support, 1 Graphic Design Request/week, Pause or cancel anytime |
| Growth | ₹49,999/month | — | Social Media (4 platforms), Advanced SEO & Content, Website Maintenance, Paid Ad Management, Weekly Reports & Strategy Calls, Pause or cancel anytime |
| Premium | ₹89,999/month | — | Full Digital Marketing Suite, 3D Animation (1 video/month), Custom Website Development, Priority Support & Dedicated Manager, All Platforms + PR Strategy, Pause or cancel anytime |

