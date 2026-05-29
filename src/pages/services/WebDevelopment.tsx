import ServiceDetailPage, { type ServiceDetail } from "./ServiceDetailPage";

const data: ServiceDetail = {
  slug: "website-development",
  name: "Website Development",
  tag: "Web Development",
  hero: {
    label: "Website Development",
    title: "Pixel-perfect, performance-first",
    intro:
      "Custom websites and SaaS products built with modern stacks — fast, accessible and crafted to convert. From marketing sites to complex dashboards, we ship products that scale.",
    image: "/services-development-updated.jpg",
  },
  overview: {
    heading: "Engineering and design, working as one.",
    body: "Our team blends product design, motion and full-stack engineering to deliver sites and apps that feel premium and perform measurably. Built mobile-first, optimised for SEO, ready for whatever you launch next.",
    stats: [
      { value: "100%", label: "Responsive by default" },
      { value: "95+", label: "Lighthouse target" },
      { value: "WCAG", label: "Accessibility baked in" },
      { value: "∞", label: "Iterations until perfect" },
    ],
  },
  included: [
    { title: "Custom Web Applications", description: "React, Next.js and TypeScript builds tailored to your product." },
    { title: "SaaS & Dashboards", description: "Auth, billing, analytics dashboards and admin panels for your software." },
    { title: "Marketing Websites", description: "Conversion-optimised landing pages and brand sites with motion and polish." },
    { title: "E-commerce & CMS", description: "Shopify, headless commerce and modern CMS integrations." },
    { title: "Maintenance & Support", description: "Ongoing updates, monitoring, security patches and feature releases." },
    { title: "Integrations & APIs", description: "Payments, CRMs, analytics, AI and any third-party service your stack needs." },
  ],
  process: [
    { title: "Discover", description: "Goals, users, content and tech stack scoped in a kickoff sprint." },
    { title: "Design", description: "Wireframes and high-fidelity UI in your brand system." },
    { title: "Build", description: "Componentised, accessible front-end with type-safe back-end." },
    { title: "Launch", description: "QA, performance tuning, deployment and post-launch support." },
  ],
  benefits: [
    { title: "Production-grade code", description: "Typed, tested and documented — handover-friendly from day one." },
    { title: "Design + dev under one roof", description: "No translation loss between Figma and code." },
    { title: "Built to scale", description: "Architecture that grows with your traffic and your team." },
  ],
  faqs: [
    { q: "What tech stack do you build on?", a: "We default to React, Next.js, TypeScript and Tailwind for front-end; Node, Supabase and Postgres on the back-end. We adapt to your stack when needed." },
    { q: "Can you redesign or rebuild our existing site?", a: "Yes. We routinely take legacy sites and ship a faster, modern version without losing SEO equity." },
    { q: "Do you provide hosting?", a: "We deploy on Vercel, Netlify or your preferred infrastructure and can manage hosting under our maintenance plans." },
    { q: "How long does a typical project take?", a: "Marketing sites: 3–6 weeks. SaaS MVPs: 6–12 weeks. Full custom platforms: scoped per project." },
    { q: "Will I be able to edit content myself?", a: "Yes — we integrate a CMS (Sanity, Strapi, WordPress, Shopify) so your team can update content without a developer." },
  ],
};

const WebDevelopment = () => <ServiceDetailPage data={data} />;
export default WebDevelopment;