import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  { img: "/images/testimonial-1.jpg", text: "With DigiFrenzy's user-friendly approach, our sales team can now work smarter, not harder. Strategy, reports, traffic — it's all streamlined and accessible in one place.", name: "Eddie Brock", role: "CEO", company: "Royal Kingdope" },
  { img: "/images/testimonial-2.jpg", text: "I was amazed by how intuitive and results-driven their process was. It's clear the DigiFrenzy team obsesses over every detail to create experiences that delight.", name: "John Fitzgerald", role: "Manager", company: "Microsoft Solutions" },
  { img: "/images/testimonial-3.jpg", text: "We hired DigiFrenzy to redesign our company's website. The process was smooth and collaborative. They listened to all our needs and delivered a site that exceeded expectations.", name: "Ellie Sattler", role: "Designer", company: "Nvidia Graphics" },
  { img: "/images/testimonial-4.jpg", text: "We've seen a massive increase in site traffic, lead generation, and sales. DigiFrenzy truly transformed our digital presence into a masterpiece!", name: "Kate McCallister", role: "Home Advisor", company: "Apple Inc." },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative z-10 py-20 md:py-32">
      <div className="px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="section-label">Voices About Me</span>
          <span className="section-tag">(CQ® — 07)</span>
        </div>
        <span className="section-tag mb-8 block">©2025</span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="section-label text-accent mb-2 block">Testimonial</span>
            <h2 className="heading-section text-foreground">Trusted By Experts.</h2>
          </div>
          <div className="max-w-md">
            <p className="body-text mb-6">Real stories from real clients. See how our designs have transformed and elevated businesses.</p>
            <a href="#contact" className="btn-primary text-xs">
              <span className="btn-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Become a partner
            </a>
          </div>
        </div>
      </div>

      {/* Testimonial cards */}
      <div className="px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div key={t.name}
              className="glass-surface-hover p-8 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setActive(i)}>
              <div className="flex items-center gap-4 mb-6">
                <img src={t.img} alt={t.name} className="w-12 h-12 object-cover" style={{ borderRadius: 0 }} loading="lazy" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground">{t.name}</h4>
                  <p className="text-[10px] text-text-dimmer font-body">{t.role} · {t.company}</p>
                </div>
              </div>
              <p className="body-text text-sm leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
