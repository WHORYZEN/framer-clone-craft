

## Plan: Update Services Section + Create Dedicated Services Page

### What changes

1. **Update `ServicesSection.tsx`** — Replace the 4 placeholder services with DigiFrenzy's actual services:
   - Social Media Marketing
   - SEO & Performance
   - Website Development
   - 3D Animation & Branding
   - Update tags, descriptions, and keep the existing image references (since we don't have new images, we'll reuse the existing ones which are generic product shots)
   - Change "View about" button to "View all services" linking to `/services`

2. **Create `src/pages/Services.tsx`** — A dedicated services page with:
   - Navbar + Footer (same as homepage)
   - Hero banner section with heading "Our Services" in the same dark aesthetic
   - 4 detailed service blocks, each with:
     - Service title, description, key deliverables/features list
     - Glass-surface card styling, motion animations, lens-flare hover effects
   - A CTA section at the bottom linking to contact
   - Same aurora-glow background, fonts, colors, and design tokens

3. **Update `src/App.tsx`** — Add `/services` route

4. **Update `src/components/Navbar.tsx`** — Add "Services" nav item (linking to `/services` page) with number label

### Design details
- All typography uses `heading-section`, `heading-sub`, `body-text`, `section-label`, `section-tag` classes
- Cards use `glass-surface-hover` + `lens-flare-card` classes
- Buttons use `btn-primary` and `btn-outline` pill styles
- Motion: `framer-motion` with fade-up on scroll (`whileInView`)
- Service descriptions will be written for each of the 4 DigiFrenzy services with relevant feature bullets

