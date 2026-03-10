import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  { img: "/images/testimonial-1.jpg", text: "With Clive's user-friendly CRM, our sales team can now work smarter, not harder. Deal tracking, reports, traffic - it's all automated and accessible in one place.", name: "Eddie Brock", role: "CEO", company: "Royal Kingdope" },
  { img: "/images/testimonial-2.jpg", text: "I was amazed by how intuitive and user-friendly everything felt. It's clear their designers obsess over every pixel, every transition, to create experiences that delight.", name: "John Fitzgerald", role: "Manager", company: "Microsoft Solutions" },
  { img: "/images/testimonial-3.jpg", text: "I hired Clive to redesign my company's website. The process was smooth and easy. They listened to all my needs and delivered a site that exceeded my ideas.", name: "Ellie Sattler", role: "Designer", company: "Nvidia Graphics" },
  { img: "/images/testimonial-4.jpg", text: "We've seen increase in site traffic, lead generation, and sales. I can't recommend Clive enough. He truly transformed our website and design into a masterpiece!", name: "Kate McCallister", role: "Home Advisor", company: "Apple Inc." },
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
            <a href="#contact" className="btn-primary text-xs">Become a partner</a>
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
