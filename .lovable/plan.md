## Contact form + footer updates

### 1. Contact form (home page `ContactSection`)
Replace the current centered "Contact Now" card with a glass-surface form matching the existing dark theme (Inter Display headings, accent blue, glassmorphism, pill `btn-primary`).

Fields (all required except where noted):
- Name (text)
- Email (email)
- Mobile Number (tel)
- Business Name (text)
- Business Type (text)
- Services Required (textarea, or multi-select of the 4 core services: Social Media Marketing, SEO & Performance, Web Development, 3D Animation & Branding)

Submit behavior — needs your input (see questions below).

Validation: zod schema, inline error messages, toast on success/failure, disabled submit while sending.

Keep the "24/7 Full Time Support" / "Available Worldwide" chips and the heading. Replace the single mailto button with the form + a "Send enquiry" submit button styled as `btn-primary`.

### 2. Footer (`Footer.tsx`)
- Remove the **Twitter** link from the social row (keep Instagram, LinkedIn).
- Add `support@digifrenzy.com` as a visible mailto link in the footer (placed before the social links, styled with the same uppercase tracked-widest treatment).

### Technical notes
- Form built with react-hook-form + zod + existing shadcn `Form`, `Input`, `Textarea`, `Button` primitives, themed via design tokens (no raw colors).
- Services Required: leaning toward a textarea for flexibility, but a checkbox group of the 4 services is also clean — see Q3.
- No changes to other pages.

### Open questions
Before I implement, I need to confirm how enquiries should actually reach `support@digifrenzy.com`, since a static React app can't send email by itself.
