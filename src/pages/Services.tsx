import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Social Media Marketing",
    tag: "Marketing",
    description: "We craft scroll-stopping social strategies that build communities, drive engagement, and convert followers into loyal customers across every platform.",
    features: ["Content Strategy & Calendar", "Paid Ad Campaigns", "Community Management", "Analytics & Reporting"],
    img: "/images/service-glasses.png",
  },
  {
    title: "SEO & Performance",
    tag: "Optimization",
    description: "Data-driven SEO and performance optimization that puts your brand at the top of search results and keeps your site lightning fast.",
    features: ["Technical SEO Audits", "Keyword Research & Strategy", "On-Page Optimization", "Core Web Vitals"],
    img: "/images/service-coffee.png",
  },
  {
    title: "Website Development",
    tag: "Development",
    description: "Pixel-perfect, high-performance websites built with modern tech stacks that deliver exceptional user experiences and drive business results.",
    features: ["Custom Web Applications", "E-Commerce Solutions", "Responsive Design", "CMS Integration"],
    img: "/images/service-cream.png",
  },
  {
    title: "3D Animation & Branding",
    tag: "Branding",
    description: "Immersive 3D visuals and cohesive brand identities that set you apart from the competition and leave a lasting impression.",
    features: ["3D Product Rendering", "Motion Graphics", "Brand Identity Systems", "Visual Storytelling"],
    img: "/images/service-bottle.png",
  },
];

const Services = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "hsl(0 0% 6.7%)" }}>
      <div className="aurora-glow" />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20">
        {/* Hero */}
        <section className="px-8 md:px-12 lg:px-16 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="section-label">What We Do</span>
              <span className="section-tag">(DF® — Services)</span>
            </div>
            <span className="section-tag mb-8 block">©2025</span>
            <h1 className="heading-display text-foreground max-w-4xl">
              Our Services<span className="text-accent">*</span>
            </h1>
            <p className="body-large mt-6 max-w-2xl">
              End-to-end digital solutions designed to elevate your brand, accelerate growth, and create unforgettable experiences.
            </p>
          </motion.div>
        </section>

        {/* Service Blocks */}
        <section className="px-8 md:px-12 lg:px-16 space-y-16 md:space-y-24">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-surface-hover lens-flare-card overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <span className="section-tag mb-4">({String(i + 1).padStart(2, "0")})</span>
                  <h2 className="heading-sub text-foreground mb-2">{service.title}</h2>
                  <span className="text-[10px] uppercase tracking-widest text-accent font-body mb-6">{service.tag}</span>
                  <p className="body-text mb-8">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className="text-sm text-text-dim font-body">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="btn-outline text-xs w-fit">
                    <span className="btn-icon">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    Get started
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <section className="px-8 md:px-12 lg:px-16 mt-20 md:mt-32">
          <motion.div
            className="glass-surface p-12 md:p-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-section text-foreground mb-6">Ready to Elevate?</h2>
            <p className="body-text max-w-lg mx-auto mb-8">
              Let's build something extraordinary together. Tell us about your project and we'll craft the perfect solution.
            </p>
            <a href="#contact" className="btn-primary text-xs inline-flex">
              <span className="btn-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Get in touch with us
            </a>
          </motion.div>
        </section>
      </main>

      <FAQSection />

      <ContactSection />

      <Footer />
    </div>
  );
};

export default Services;
