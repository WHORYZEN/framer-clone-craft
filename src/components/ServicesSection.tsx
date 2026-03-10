import { motion } from "framer-motion";

const services = [
  { img: "/images/service-glasses.png", title: "Professional Videography", tag: "Photography" },
  { img: "/images/service-coffee.png", title: "Product Designing", tag: "Marketing" },
  { img: "/images/service-cream.png", title: "Framer Development", tag: "Development" },
  { img: "/images/service-bottle.png", title: "3D Rendering", tag: "Modeling" },
];

const ServicesSection = () => {
  return (
    <section className="relative z-10 py-20 md:py-32">
      <div className="px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="section-label">Premium Services</span>
          <span className="section-tag">(CQ® — 05)</span>
        </div>
        <span className="section-tag mb-8 block">©2025</span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
          <div>
            <h2 className="heading-section text-foreground">Pro Services®</h2>
            <p className="body-text mt-4 max-w-lg">From web design to branding, I bring your vision to life with precision and creativity</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-accent font-body">Convert More, Grow Faster</span>
            <span className="text-xs uppercase tracking-widest text-text-dim font-body">Future-Proof & Scalable</span>
            <a href="#" className="btn-outline text-xs mt-2">
              <span className="btn-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              View about
            </a>
          </div>
        </div>
      </div>

      {/* Service image with full-width portrait */}
      <div className="relative mt-12">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden hidden lg:block">
          <img src="/images/service-woman.png" alt="Services" className="w-full h-full object-cover object-top" loading="lazy" />
        </div>

        <div className="px-8 md:px-12 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-0 lg:w-2/3">
          {services.map((service, i) => (
            <motion.div key={service.title}
              className="glass-surface-hover lens-flare-card group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
              }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={service.img} alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-base font-bold text-foreground mb-1">{service.title}</h3>
                <span className="text-[10px] uppercase tracking-widest text-text-dimmer font-body">{service.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
