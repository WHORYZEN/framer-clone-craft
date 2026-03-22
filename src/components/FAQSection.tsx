import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  { q: "What does a project with DigiFrenzy look like?", a: "We start with a discovery call to understand your goals, then build a custom strategy, execute with our creative team, and deliver measurable results — all within clear timelines." },
  { q: "How is your pricing structured?", a: "We offer flexible monthly retainer plans and one-time project pricing. Every package is tailored to your specific business needs and goals." },
  { q: "Do you work with fixed-scope projects?", a: "Yes. We offer both fixed-scope and ongoing retainer models depending on what works best for your brand." },
  { q: "What kind of ROI can I expect?", a: "Our clients typically see a 3–5x return on their marketing investment within the first 6 months, depending on industry and strategy." },
  { q: "How do you measure success?", a: "Through real KPIs — traffic growth, lead generation, conversion rates, ROAS, and revenue. No vanity metrics." },
  { q: "What do I need to get started?", a: "Just a 30-minute discovery call. We handle everything from strategy to execution." },
  { q: "Do I need to know anything about marketing?", a: "Not at all. We make the complex simple and keep you informed at every step without overwhelming you." },
  { q: "Can I pause or cancel my plan?", a: "Yes. All our plans are flexible — pause or cancel anytime with 30 days notice." },
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
