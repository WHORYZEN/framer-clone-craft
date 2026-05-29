import ServiceDetailPage, { type ServiceDetail } from "./ServiceDetailPage";

const data: ServiceDetail = {
  slug: "3d-animation-branding",
  name: "3D Animation & Branding",
  tag: "3D & Branding",
  hero: {
    label: "3D Animation & Branding",
    title: "Brands that move, identities that stick",
    intro:
      "Immersive 3D visuals, motion design and cohesive brand systems that set you apart — from product reveals to full identity launches.",
    image: "/services-branding.jpg",
  },
  overview: {
    heading: "Cinematic visuals, built for every screen.",
    body: "We design brand identities and craft 3D and motion content that lives across your site, ads, social and pitch decks. Every frame is engineered to feel premium and stay on brand.",
    stats: [
      { value: "4K", label: "Render resolution" },
      { value: "30+", label: "Brand systems shipped" },
      { value: "2x", label: "Avg engagement on motion" },
      { value: "100%", label: "Native delivery formats" },
    ],
  },
  included: [
    { title: "3D Product Rendering", description: "Photoreal product visuals for web, ads and packaging." },
    { title: "Motion Graphics", description: "Animated explainers, product reveals and social-first edits." },
    { title: "Brand Identity Systems", description: "Logo, typography, colour, voice and usage guidelines." },
    { title: "Visual Storytelling", description: "Narrative-led campaigns and brand films that connect emotionally." },
    { title: "Pitch & Presentation Design", description: "Investor decks and sales collateral that look as good as your product." },
    { title: "Brand Guidelines", description: "Living systems your team can use to ship on-brand work, anywhere." },
  ],
  process: [
    { title: "Discover", description: "Brand audit, audience and references aligned with your founders." },
    { title: "Concept", description: "Mood boards, storyboards and style frames for your sign-off." },
    { title: "Produce", description: "Modelling, animation, sound design and brand artefacts produced in parallel." },
    { title: "Deliver", description: "Master files, social cutdowns and guidelines packaged for your team." },
  ],
  benefits: [
    { title: "Cinematic craft", description: "A studio-grade pipeline for 3D, motion and identity work." },
    { title: "On-brand at scale", description: "Systems and templates so every future asset stays consistent." },
    { title: "Faster than agencies", description: "Lean, senior team — concept to delivery in weeks, not quarters." },
  ],
  faqs: [
    { q: "What deliverables do I get?", a: "Master files, web-optimised exports, vertical and square social cutdowns and editable source files where applicable." },
    { q: "Can you work with our existing brand?", a: "Yes — we either extend your current identity or rebuild it from the ground up, depending on your goals." },
    { q: "How many revisions are included?", a: "Each milestone (concept, animation, delivery) includes two rounds of revisions. Additional rounds are scoped if needed." },
    { q: "Do you write the script and do voice-overs?", a: "Yes — scripting, voice casting and sound design are all available as part of motion projects." },
    { q: "How long does a 3D project take?", a: "Short reveals: 2–3 weeks. Full brand films and identity launches: 4–8 weeks depending on scope." },
  ],
};

const Animation = () => <ServiceDetailPage data={data} />;
export default Animation;