import { motion } from "framer-motion";

const ExpertiseSection = () => {
  return (
    <section className="relative z-10 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left image */}
        <motion.div className="relative min-h-[400px] lg:min-h-[600px] overflow-hidden"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 1 }}>
          <img src="/images/framer-expert.png" alt="Expert" className="absolute inset-0 w-full h-full object-cover object-top" loading="lazy" />
          <div className="absolute bottom-0 left-0 right-0 p-8" style={{ background: "linear-gradient(to top, hsl(0 0% 6.7%), transparent)" }}>
            <div className="flex items-center gap-4 mb-2">
              <span className="section-label">Web Development Experts</span>
              <span className="section-tag">(CQ® — 09)</span>
            </div>
            <span className="section-tag">©2025</span>
          </div>
        </motion.div>

        {/* Right content */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="section-label text-accent mb-4 block">Website Expert</span>
            <h2 className="heading-section text-foreground mb-6">Expertise in Modern Web Development.</h2>
            <h3 className="heading-sub text-foreground mb-4">Bringing Your Ideas to Life®</h3>
            <p className="body-text mb-8">
              Our team specializes in turning your ideas into functional, high-performance websites. Whether it's a custom build or a template, we ensure every project meets your vision and exceeds expectations.
            </p>
            <a href="#portfolio" className="btn-outline text-xs">
              <span className="btn-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              View portfolio
            </a>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["/images/testimonial-1.jpg", "/images/testimonial-2.jpg", "/images/testimonial-3.jpg"].map((src, i) => (
                  <img key={i} src={src} alt="User" className="w-8 h-8 border-2 object-cover" 
                    style={{ borderColor: "hsl(var(--background))" }} loading="lazy" />
                ))}
              </div>
              <span className="text-xs text-text-dim font-body">299+ Clients Served</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
