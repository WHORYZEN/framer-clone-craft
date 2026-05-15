import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  { img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop", text: "Honestly, working with DigiFrenzy has been such a smooth ride. They actually listen, deliver on time, and the results speak for themselves. Our enquiries doubled in just two months.", name: "Aarav Sharma" },
  { img: "https://images.unsplash.com/photo-1605405748313-a416a1b84491?w=200&h=200&fit=crop", text: "I was a bit unsure in the beginning, but the team handled everything so patiently. From content to ads, they took care of it all. Very happy with how our brand looks now.", name: "Priya Iyer" },
  { img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop", text: "These guys really know their stuff. The website they built for us is fast, clean, and our customers love it. Best decision we took this year for the business.", name: "Rohan Mehta" },
  { img: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=200&h=200&fit=crop", text: "Loved the whole experience. They gave proper updates, never made us chase them, and the creatives were top-notch. Will definitely keep working with them long term.", name: "Ananya Reddy" },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative z-10 py-20 md:py-32">
      <div className="px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="section-label">Client Voices</span>
          <span className="section-tag">(CQ® — 07)</span>
        </div>
        <span className="section-tag mb-8 block">©2025</span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="section-label text-accent mb-2 block">Testimonial</span>
            <h2 className="heading-section text-foreground">Trusted By Many.</h2>
          </div>
          <div className="max-w-md">
            <p className="body-text mb-6">Real stories from real clients. See how our designs have transformed and elevated businesses.</p>
            <a href="#contact" className="btn-primary text-xs">
              <span className="btn-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Work with us
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
