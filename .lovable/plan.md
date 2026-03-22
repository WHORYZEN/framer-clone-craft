

## Plan: Convert Content from Personal Portfolio to Digital Agency

### Scope
Update text content in 8 homepage sections to reflect DigiFrenzy as a **digital agency** (team-based "we" language) instead of a personal portfolio. No changes to Pricing, Services, Contact, FAQ sections or the Services/Pricing pages.

### Changes by Component

**1. HeroSection.tsx**
- "Hey, Just An Intro" → "Welcome to DigiFrenzy"
- "A digital designer based in Los Angeles..." → "We are a full-service digital agency crafting bold brands, high-performance websites, and data-driven marketing strategies.®"
- Intro card 1: "Bringing Ideas to Life" — rewrite for agency ("We transform brands into digital powerhouses...")
- Intro card 2: "Collaborate with Me" → "Partner with Us" — rewrite for team collaboration

**2. ApproachSection.tsx**
- Already uses "we/our" language — minor tweaks to reinforce agency identity
- Step descriptions stay mostly the same (already agency-appropriate)

**3. PortfolioSection.tsx**
- Description: "Explore a collection of high-quality..." → agency-focused copy about client work
- Marquee text: "Also work with these international partners:" → "Trusted by brands worldwide:"

**4. StatsSection.tsx**
- "I take pride in creating solutions..." → "We take pride in delivering solutions..."
- Stats labels/descriptions updated to agency context (e.g., "Years Experience" → "Years in the Industry")

**5. BenefitsSection.tsx**
- "Benefits of Hiring Me" → "Why Choose DigiFrenzy"
- "I have a custom application for 24/6 support..." → "Our dedicated team provides 24/6 support..."
- "All in one platform" description stays

**6. TestimonialsSection.tsx**
- "Voices About Me" → "Client Voices"
- Replace "Clive" references in testimonial text with "DigiFrenzy" / "their team"
- "Become a partner" → "Work with us"

**7. PhotographySection.tsx**
- "Shots By Me" → "Visual Showcase"
- "Photography" → "Creative Visuals"
- "Every Pixel Clicked." → "Every Pixel Crafted."
- "Through my lens, I capture..." → "Our creative team produces stunning visuals..."
- "Book an appointment" → "Start a project"

**8. ExpertiseSection.tsx**
- "Framer Developer" → "Web Development Experts"
- "Expertise in Framer Templates." → "Expertise in Modern Web Development."
- Fix mixed "I/we" to consistent "we" language
- "299+ People Rated" → "299+ Clients Served"

**9. BlogSection.tsx**
- "Explore my blog..." → "Explore our blog..."
- Blog post titles/tags stay (they're generic enough)

**10. Footer.tsx**
- Already says "DigiFrenzy" — update social links to "Instagram" instead of "Dribbble" (more agency-relevant)

### What stays untouched
- PricingSection, ServicesSection, ContactSection, FAQSection
- Services page (`src/pages/Services.tsx`)
- Pricing page (`src/pages/Pricing.tsx`)
- All styling, animations, images, and design tokens

