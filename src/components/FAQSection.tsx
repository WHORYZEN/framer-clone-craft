import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  { q: "What does a project look like?", a: "Each project starts with discovery, moves through design and development, and ends with launch and support. We tailor the process to fit your specific needs and timeline." },
  { q: "How is the pricing structure?", a: "We offer transparent, project-based pricing. Our plans are designed to give you maximum value whether you're a startup or enterprise." },
  { q: "Are all projects fixed scope?", a: "We offer both fixed-scope and retainer-based engagements. We'll recommend the best approach based on your project requirements." },
  { q: "What is the ROI?", a: "Our clients typically see significant improvements in engagement, conversion rates, and brand perception within the first few months of launch." },
  { q: "How do we measure success?", a: "We define clear KPIs at the start of each project and track progress through analytics, user feedback, and business metrics." },
  { q: "What do I need to get started?", a: "Just reach out! We'll schedule a discovery call to understand your vision, timeline, and budget." },
  { q: "How easy is it to edit for beginners?", a: "Our solutions are built with user-friendliness in mind. We provide documentation and training to ensure you can manage content independently." },
  { q: "Do I need to know how to code?", a: "Not at all! Our designs are built on platforms that allow non-technical users to make updates easily." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="px-8 md:px-12 lg:px-16 py-8">
          <span className="section-label mb-8 block">FAQ</span>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div key={i}
                className="border-b border-keyline"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-6 flex items-center gap-4 text-left group">
                  <span className="text-xs text-text-dimmer font-body w-6">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-heading text-sm md:text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-300 flex-1">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-text-dim text-lg">
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden">
                      <p className="body-text text-sm pb-6 pl-10">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="relative min-h-[400px] overflow-hidden hidden lg:block"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 1 }}>
          <img src="/images/faq-woman.png" alt="FAQ" className="absolute inset-0 w-full h-full object-cover object-top" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
