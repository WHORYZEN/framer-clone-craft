import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 py-20 md:py-32">
      <div className="px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="section-label">Let's Work Together</span>
          <span className="section-tag">(CQ® — 13)</span>
        </div>
        <span className="section-tag mb-12 block">©2025</span>

        <motion.div className="glass-surface p-8 md:p-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <span className="section-label text-accent mb-4 block">Contact Now</span>
          <h2 className="heading-section text-foreground mb-6">Contact Me!</h2>
          <p className="body-text max-w-md mx-auto mb-8">
            Let's create something amazing together! Reach out — I'd love to hear about your project and ideas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-dim font-body">
              <span className="w-2 h-2" style={{ background: "hsl(var(--accent))" }} />
              24/7 Full Time Support
            </span>
            <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-dim font-body">
              <span className="w-2 h-2" style={{ background: "hsl(var(--accent))" }} />
              Available Worldwide
            </span>
          </div>

          <a href="mailto:hello@digifrenzy.com" className="btn-primary text-xs inline-flex">
            <span className="btn-icon">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Contact now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
