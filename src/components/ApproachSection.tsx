import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Strategy & Planning", badge: "FREE", desc: "We start by understanding your vision and business goals. Through in-depth research and strategic planning, we define the core structure and key elements needed for your project." },
  { num: "02", title: "Design & Development", desc: "Our team crafts a visually stunning and functional design that aligns with your brand. We focus on responsive layouts, and high-performance development to ensure a smooth experience." },
  { num: "03", title: "Launch & Growth", desc: "Once everything is tested and refined, we launch your project with precision. Post-launch, we provide ongoing support, updates, and strategies to help you scale and maximize results." },
];

const progressBars = [
  { label: "Strategy", value: 25 },
  { label: "Design", value: 60 },
  { label: "Launch", value: 100 },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left content */}
        <div className="p-8 md:p-12 lg:p-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="section-label">Approach Style</span>
            <span className="section-tag">(CQ® — 02)</span>
          </div>
          <span className="section-tag">©2025</span>

          <div className="mt-12 space-y-10">
            {steps.map((step, i) => (
              <motion.div key={step.num}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-surface p-6 md:p-8 relative overflow-hidden lens-flare-card"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
                }}>
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-xs font-body text-text-dimmer">{step.num}</span>
                  <h3 className="heading-sub text-foreground">{step.title}</h3>
                  {step.badge && (
                    <span className="ml-auto text-[10px] uppercase tracking-widest px-3 py-1 font-body"
                      style={{ background: "hsl(var(--accent))", color: "hsl(var(--foreground))" }}>
                      {step.badge}
                    </span>
                  )}
                </div>
                <p className="body-text ml-8">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <a href="#contact" className="btn-primary mt-10 inline-flex">
            <span className="btn-icon">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            Contact now
          </a>

          {/* Progress bars */}
          <div className="mt-12 space-y-6">
            {progressBars.map((bar) => (
              <motion.div key={bar.label}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }}>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-body text-text-dim uppercase tracking-widest">{bar.label}</span>
                  <span className="text-xs font-body text-accent">{bar.value}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div className="progress-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <motion.div className="relative min-h-[500px] lg:min-h-full overflow-hidden"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 1 }}>
          <img src="/images/approach-man.png" alt="Approach" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
