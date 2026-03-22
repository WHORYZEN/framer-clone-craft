import { motion } from "framer-motion";

const plans = [
  {
    price: "₹29,999",
    period: "/month",
    name: "Starter Plan",
    badge: "MOST POPULAR",
    desc: "Perfect for startups and small businesses ready to establish a powerful digital presence.",
    features: [
      "Social Media Management (2 platforms)",
      "Basic SEO Setup",
      "Monthly Performance Report",
      "Email Support",
      "1 Graphic Design Request/week",
      "Pause or cancel anytime",
    ],
  },
  {
    price: "₹49,999",
    period: "/month",
    name: "Growth Plan",
    badge: null,
    desc: "Built for growing businesses that need full-spectrum digital marketing and web support.",
    features: [
      "Social Media (4 platforms)",
      "Advanced SEO & Content",
      "Website Maintenance",
      "Paid Ad Management",
      "Weekly Reports & Strategy Calls",
      "Pause or cancel anytime",
    ],
  },
  {
    price: "₹89,999",
    period: "/month",
    name: "Premium Plan",
    badge: null,
    desc: "The complete package for brands serious about dominating their industry online.",
    features: [
      "Full Digital Marketing Suite",
      "3D Animation (1 video/month)",
      "Custom Website Development",
      "Priority Support & Dedicated Manager",
      "All Platforms + PR Strategy",
      "Pause or cancel anytime",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="relative z-10 py-20 md:py-32">
      <div className="px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="section-label">Pricing Structure</span>
        </div>

        <span className="section-tag block mb-4">©2025</span>
        <span className="section-label text-accent mb-2 block">Premium Plans</span>
        <h2 className="heading-section text-foreground mb-4">Plans Built for Growth.</h2>
        <p className="body-text max-w-lg mb-12">Transparent pricing tailored to your brand's needs. Let's find the plan that takes your business to the next level.</p>
        <a href="#contact" className="btn-primary text-xs mb-12 inline-flex">
          <span className="btn-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          Contact now
        </a>
      </div>

      <div className="px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-0">
        {plans.map((plan, i) => (
          <motion.div key={plan.name}
            className="glass-surface-hover p-8 md:p-10 flex flex-col relative"
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
            <a href="#contact" className="btn-primary text-xs mb-8 text-center justify-center">
              <span className="btn-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Subscribe Now
            </a>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-text-dimmer font-body mb-4">What's included</p>
              <ul className="space-y-3">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-text-dim font-body">
                    <span className="w-4 h-4 flex items-center justify-center text-accent">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5"/></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
