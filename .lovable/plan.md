## Changes to Testimonials & Services

### 1. TestimonialsSection.tsx
- Change heading "Trusted By Experts." → "Trusted By Many."
- Replace all 4 testimonials with Indian names + natural Indian-English testimonials (no designation/company shown).
- Remove the role/company line from the card (keep only name).
- Replace profile images with Indian faces (use Unsplash portraits of Indian people).

New testimonials (natural Indian English, casual tone):

1. **Aarav Sharma** — "Honestly, working with DigiFrenzy has been such a smooth ride. They actually listen, deliver on time, and the results speak for themselves. Our enquiries doubled in just two months."

2. **Priya Iyer** — "I was a bit unsure in the beginning, but the team handled everything so patiently. From content to ads, they took care of it all. Very happy with how our brand looks now."

3. **Rohan Mehta** — "These guys really know their stuff. The website they built for us is fast, clean, and our customers love it. Best decision we took this year for the business."

4. **Ananya Reddy** — "Loved the whole experience. They gave proper updates, never made us chase them, and the creatives were top-notch. Will definitely keep working with them long term."

Profile images (Indian faces, square portraits from Unsplash):
- https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop (Indian man)
- https://images.unsplash.com/photo-1605405748313-a416a1b84491?w=200&h=200&fit=crop (Indian woman)
- https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop (Indian man)
- https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=200&h=200&fit=crop (Indian woman)

Card markup change: remove the `<p>` line that renders `{t.role} · {t.company}` — keep only the name.

### 2. ServicesSection.tsx + Services.tsx
Replace the 4 service images with ones that match each service:

- **Social Media Marketing** → phone showing social feed / engagement visual
  `https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop`
- **SEO & Performance** → analytics/charts dashboard
  `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop`
- **Website Development** → code on screen
  `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop`
- **3D Animation & Branding** → 3D abstract / branding visual
  `https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop`

Apply identical image URLs in both `ServicesSection.tsx` (homepage cards) and `Services.tsx` (services page blocks).

The right-side full-height portrait image on homepage Services section is left as-is unless you want it changed too — let me know.

### Files touched
- `src/components/TestimonialsSection.tsx`
- `src/components/ServicesSection.tsx`
- `src/pages/Services.tsx`
