Update the plan features in both `src/components/PricingSection.tsx` (Home) and `src/pages/Pricing.tsx` (Pricing page) so all three plans match the new feature lists.

## New feature lists

**Starter Plan**
- Social Media Management (2 platforms)
- Basic SEO Setup (On Page SEO)
- Monthly Performance Report
- Email Support
- 4 Graphic Design Requests/week
- Pause or cancel anytime

**Growth Plan**
- Social Media (4 platforms)
- Advanced SEO & Content
- Website Maintenance
- Paid Ad Management (Meta + Google)
- Weekly Reports & Strategy Calls
- 10 Graphic Design Requests/week
- Pause or cancel anytime

**Premium Plan** (Everything in Growth +)
- Full Digital Marketing Suite
- 3D Animation (4 videos/month)
- Priority Support & Dedicated Manager
- All Platform Management + PR Strategy
- Unlimited Graphic Design Requests/week
- Pause or cancel anytime

The Premium card will show a small "Everything in Growth Plan, plus:" note above the feature list. Prices, names, badges, and layout stay unchanged.

## Files

- `src/components/PricingSection.tsx` — replace `features` arrays for all 3 plans; add `includesPrevious` note for Premium.
- `src/pages/Pricing.tsx` — same updates for consistency.
