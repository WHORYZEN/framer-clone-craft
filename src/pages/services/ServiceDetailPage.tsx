import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export type ServiceDetail = {
  slug: string;
  name: string;
  tag: string;
  hero: {
    label: string;
    title: string;
    intro: string;
    image: string;
  };
  overview: {
    heading: string;
    body: string;
    stats: { value: string; label: string }[];
  };
  included: { title: string; description: string }[];
  process: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7 },
};

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ServiceDetailPage = ({ data }: { data: ServiceDetail }) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "hsl(0 0% 6.7%)" }}>
      <div className="aurora-glow" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20">
        {/* Hero */}
        <section className="px-8 md:px-12 lg:px-16 mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end"
          >
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-2">
                <span className="section-label">{data.hero.label}</span>
                <span className="section-tag">(DF® — {data.tag})</span>
              </div>
              <span className="section-tag mb-8 block">©2025</span>
              <h1 className="heading-display text-foreground">
                {data.hero.title}
                <span className="text-accent">*</span>
              </h1>
              <p className="body-large mt-6 max-w-2xl">{data.hero.intro}</p>

              <div className="flex flex-wrap gap-3 mt-8">
                <a href="#contact" className="btn-primary text-xs inline-flex">
                  <span className="btn-icon"><ArrowIcon /></span>
                  Start a project
                </a>
                <Link to="/pricing" className="btn-outline text-xs inline-flex">
                  <span className="btn-icon"><ArrowIcon /></span>
                  View pricing
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                className="glass-surface overflow-hidden aspect-[4/3]"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <img
                  src={data.hero.image}
                  alt={data.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Overview */}
        <section className="px-8 md:px-12 lg:px-16 mb-20 md:mb-28">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6">
              <span className="section-label mb-4 block">Overview</span>
              <h2 className="heading-section text-foreground mb-6">{data.overview.heading}</h2>
              <p className="body-text max-w-xl">{data.overview.body}</p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {data.overview.stats.map((s) => (
                <div key={s.label} className="glass-surface p-6">
                  <div className="font-heading text-3xl md:text-4xl text-foreground">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-text-dim font-body mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* What's Included */}
        <section className="px-8 md:px-12 lg:px-16 mb-20 md:mb-28">
          <motion.div {...fadeUp} className="mb-10">
            <span className="section-label mb-2 block">What's Included</span>
            <h2 className="heading-section text-foreground">Everything you need to scale</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.included.map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-surface-hover lens-flare-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
                }}
              >
                <span className="section-tag mb-3 block">({String(i + 1).padStart(2, "0")})</span>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-text-dim font-body leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="px-8 md:px-12 lg:px-16 mb-20 md:mb-28">
          <motion.div {...fadeUp} className="mb-10">
            <span className="section-label mb-2 block">Our Process</span>
            <h2 className="heading-section text-foreground">How we deliver</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {data.process.map((step, i) => (
              <motion.div
                key={step.title}
                className="border-t border-keyline lg:border-t-0 lg:border-l first:border-l-0 py-8 px-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="text-accent font-heading text-3xl mb-4">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-text-dim font-body leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why DigiFrenzy */}
        <section className="px-8 md:px-12 lg:px-16 mb-20 md:mb-28">
          <motion.div {...fadeUp} className="mb-10">
            <span className="section-label mb-2 block">Why DigiFrenzy</span>
            <h2 className="heading-section text-foreground">Built for measurable growth</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="glass-surface p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-2 h-2 bg-accent mb-6" />
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{b.title}</h3>
                <p className="text-sm text-text-dim font-body leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mid CTA */}
        <section className="px-8 md:px-12 lg:px-16">
          <motion.div
            className="glass-surface p-12 md:p-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-section text-foreground mb-4">Ready to grow with {data.name}?</h2>
            <p className="body-text max-w-lg mx-auto mb-8">
              Tell us about your goals and we'll craft a tailored plan that delivers measurable results.
            </p>
            <a href="#contact" className="btn-primary text-xs inline-flex">
              <span className="btn-icon"><ArrowIcon /></span>
              Get in touch with us
            </a>
          </motion.div>
        </section>
      </main>

      <FAQSection items={data.faqs} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;