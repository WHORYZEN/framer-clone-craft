import ServiceDetailPage, { type ServiceDetail } from "./ServiceDetailPage";

const data: ServiceDetail = {
  slug: "seo-performance",
  name: "SEO & Performance",
  tag: "SEO & Performance",
  hero: {
    label: "SEO & Performance",
    title: "Rank higher, load faster",
    intro:
      "Data-driven SEO and Core Web Vitals work that puts your brand at the top of search results and keeps every page lightning fast on every device.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=900&fit=crop",
  },
  overview: {
    heading: "Compounding organic traffic, engineered for growth.",
    body: "We combine technical SEO, content strategy and performance engineering into one program. The result is sustainable rankings, faster pages and more qualified pipeline — month after month.",
    stats: [
      { value: "3x", label: "Avg organic traffic in 6 mo" },
      { value: "<2s", label: "Target page load" },
      { value: "90+", label: "Lighthouse scores" },
      { value: "100s", label: "Keywords tracked" },
    ],
  },
  included: [
    { title: "Technical SEO Audit", description: "Crawl, indexation, schema, redirects and site architecture — fixed end to end." },
    { title: "Keyword & Content Strategy", description: "Topic clusters and search intent mapping aligned to revenue pages." },
    { title: "On-Page Optimisation", description: "Titles, meta, headings, internal links and content refreshes that move rankings." },
    { title: "Core Web Vitals", description: "LCP, INP and CLS tuned through code, image and asset optimisation." },
    { title: "Link Building & Digital PR", description: "High-authority backlinks from relevant, contextual placements." },
    { title: "Monthly Reporting", description: "Rankings, traffic, conversions and ROI in a transparent dashboard." },
  ],
  process: [
    { title: "Audit", description: "Full technical, on-page and competitive audit of your domain." },
    { title: "Strategize", description: "Prioritised roadmap of fixes, content and link opportunities." },
    { title: "Execute", description: "Engineering, content production and outreach run in parallel sprints." },
    { title: "Measure", description: "Track rankings, traffic and conversions; iterate every month." },
  ],
  benefits: [
    { title: "Engineering-grade SEO", description: "Our devs ship the fixes — no waiting on your team to deploy." },
    { title: "Content that ranks and sells", description: "Briefs built for both Google and the human reader." },
    { title: "Transparent reporting", description: "See every keyword, every backlink, every win — no black boxes." },
  ],
  faqs: [
    { q: "How long does SEO take to show results?", a: "Technical and on-page wins show in 4–8 weeks. Meaningful traffic and ranking growth typically compounds from month 3–6." },
    { q: "Do you guarantee #1 rankings?", a: "No reputable agency can. We guarantee strategy, execution and transparent reporting — and our clients consistently see 3x+ organic growth in 6 months." },
    { q: "Will you write content for us?", a: "Yes. Our content team produces SEO briefs and full-length articles aligned to your brand voice." },
    { q: "Can you fix Core Web Vitals on our existing site?", a: "Yes. We work with most modern stacks — React, Next.js, WordPress, Shopify and custom builds." },
    { q: "Do you handle local SEO?", a: "Yes — Google Business Profile, local citations and location-page strategy are all included where relevant." },
  ],
};

const SEO = () => <ServiceDetailPage data={data} />;
export default SEO;