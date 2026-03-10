import { motion } from "framer-motion";
import { useState } from "react";

const plans = [
  { price: "$4,999", period: "/year", name: "Starter Plan", badge: "MOST PICK", desc: "Our basic pricing plan is designed to offer extra-ordinary value and features." },
  { price: "$6,999", period: "/year", name: "Growth Plan", badge: null, desc: "Our pro pricing plan is designed for businesses with advanced features." },
  { price: "$8,999", period: "/year", name: "Premium Plan", badge: null, desc: "Our plus pricing plan is designed for corporate with premium support." },
];

const features = [
  "All templates unlocked",
  "Unlimited requests",
  "Unlimited revisions",
  "Project management",
  "Access to all services",
  "Pause or cancel anytime",
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="relative z-10 py-20 md:py-32">
      <div className="px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="section-label">Pricing Structure</span>
        </div>

        <div className="flex items-center gap-4 mt-4 mb-8">
          <button onClick={() => setAnnual(false)}
            className={`text-xs uppercase tracking-widest font-body px-4 py-2 transition-all duration-300 ${!annual ? "text-foreground glass-surface" : "text-text-dimmer"}`}>
            Monthly
          </button>
          <button onClick={() => setAnnual(true)}
            className={`text-xs uppercase tracking-widest font-body px-4 py-2 transition-all duration-300 ${annual ? "text-foreground glass-surface" : "text-text-dimmer"}`}>
            Annual
          </button>
        </div>

        <span className="section-tag block mb-4">©2025</span>
        <span className="section-label text-accent mb-2 block">Premium Plans</span>
        <h2 className="heading-section text-foreground mb-4">Feasible Plans.</h2>
        <p className="body-text max-w-lg mb-12">Transparent pricing tailored to your needs. Let's discuss your project and find a plan that works for you.</p>
        <a href="#contact" className="btn-primary text-xs mb-12 inline-flex">Contact now</a>
      </div>

      <div className="px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-0 relative">
        {plans.map((plan, i) => (
          <motion.div key={plan.name}
            className={`glass-surface-hover p-8 md:p-10 flex flex-col ${i === 1 ? "relative" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}>
            {plan.badge && (
              <span className="absolute top-4 right-4 text-[9px] uppercase tracking-widest px-3 py-1 font-body"
                style={{ background: "hsl(var(--accent))", color: "hsl(var(--foreground))" }}>
                {plan.badge}
              </span>
            )}
            <div className="mb-6">
              <span className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">{plan.price}</span>
              <span className="text-xs text-text-dimmer font-body">{plan.period}</span>
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{plan.name}</h3>
            <p className="body-text text-sm mb-8">{plan.desc}</p>
            <a href="#contact" className="btn-primary text-xs mb-8 text-center justify-center">Subscribe Now</a>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-text-dimmer font-body mb-4">What's included</p>
              <ul className="space-y-3">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-text-dim font-body">
                    <span className="w-4 h-4 flex items-center justify-center" style={{ color: "hsl(var(--accent))" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5"/></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        {/* Pricing portrait */}
        <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-48 pointer-events-none opacity-60">
          <img src="/images/pricing-man.png" alt="Pricing" className="w-full object-contain" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
