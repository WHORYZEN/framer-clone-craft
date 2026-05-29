import ServiceDetailPage, { type ServiceDetail } from "./ServiceDetailPage";

const data: ServiceDetail = {
  slug: "social-media-marketing",
  name: "Social Media Marketing",
  tag: "Social Media",
  hero: {
    label: "Social Media Marketing",
    title: "Build communities that convert",
    intro:
      "We craft scroll-stopping social strategies across Instagram, Facebook, LinkedIn, X and YouTube — building communities, driving engagement, and turning followers into loyal customers.",
    image: "/services-marketing.jpg",
  },
  overview: {
    heading: "Social-first storytelling, performance backed.",
    body: "From content calendars to paid amplification, we run your social presence as a growth engine. Every post, story and ad is built around your brand voice and tied back to business outcomes — not vanity metrics.",
    stats: [
      { value: "5x", label: "Avg engagement lift" },
      { value: "30+", label: "Posts shipped / month" },
      { value: "4.2x", label: "Avg ROAS on ads" },
      { value: "24/7", label: "Community support" },
    ],
  },
  included: [
    { title: "Content Strategy & Calendar", description: "Monthly content roadmap mapped to your funnel, trends and campaigns." },
    { title: "Creative Production", description: "Reels, carousels, statics and stories produced by our in-house design team." },
    { title: "Paid Ad Campaigns", description: "Meta and YouTube ads built for conversions, retargeting and lookalike scale." },
    { title: "Community Management", description: "We reply, engage and nurture your audience daily across every platform." },
    { title: "Influencer Collaborations", description: "Curated creator partnerships that match your brand and drive real reach." },
    { title: "Analytics & Reporting", description: "Transparent dashboards covering reach, engagement, leads and revenue." },
  ],
  process: [
    { title: "Discover", description: "Audit your brand, audience and competitive landscape." },
    { title: "Strategize", description: "Define pillars, tone, channels and KPIs for the quarter." },
    { title: "Execute", description: "Produce, schedule and amplify content across platforms." },
    { title: "Optimize", description: "Test creative, refine targeting and double down on what works." },
  ],
  benefits: [
    { title: "Always-on creative", description: "A dedicated team shipping fresh content every week — no creative bottlenecks." },
    { title: "Performance obsessed", description: "We optimise for leads, sales and pipeline, not likes." },
    { title: "One partner, every channel", description: "Strategy, design, paid media and community under one roof." },
  ],
  faqs: [
    { q: "Which platforms do you manage?", a: "Instagram, Facebook, LinkedIn, X (Twitter), YouTube and Threads. Plans cover 2–4+ platforms based on your tier." },
    { q: "Do you handle paid ads as well?", a: "Yes. Our Growth and Premium plans include Meta and Google ad management with creative, targeting and ongoing optimisation." },
    { q: "Who creates the content?", a: "Our in-house creative team handles design, copy, reels and edits — you approve via a shared content calendar." },
    { q: "How long before I see results?", a: "Early engagement lifts within 30–45 days. Compounding growth and ROI typically show from month 3 onwards." },
    { q: "Can I request specific campaigns?", a: "Absolutely. Launches, sales, festive campaigns and product drops are planned together each month." },
  ],
};

const SocialMedia = () => <ServiceDetailPage data={data} />;
export default SocialMedia;