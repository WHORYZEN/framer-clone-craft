import { motion } from "framer-motion";

const BenefitsSection = () => {
  return (
    <section className="relative z-10 py-20 md:py-32">
      <div className="px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="section-label">Why Choose DigiFrenzy</span>
          <span className="section-tag">(CQ® — 06)</span>
        </div>
        <span className="section-tag mb-12 block">©2025</span>
      </div>

      <div className="px-8 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {/* Card 1 - Fast delivery */}
        <motion.div className="glass-surface p-0 overflow-hidden col-span-1 lg:col-span-2"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="relative aspect-[16/9] overflow-hidden">
            <img src="/images/benefits-car.png" alt="Speed" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="p-8">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              It takes <span className="text-accent">5.1</span> Minutes
            </h3>
            <p className="body-text">to launch your site. Lightning-fast delivery without compromising quality</p>
          </div>
        </motion.div>

        {/* Card 2 - All in one */}
        <motion.div className="glass-surface p-8 flex flex-col justify-between"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-accent font-body mb-4">FROM 0 TO 100 IN ONE SMALL STEP</p>
            <h3 className="font-heading text-lg font-bold text-foreground">All in one platform</h3>
          </div>
          <img src="/images/benefits-man.png" alt="Platform" className="w-full mt-6 object-contain" loading="lazy" />
        </motion.div>

        {/* Card 3 - Support */}
        <motion.div className="glass-surface p-8 col-span-1 lg:col-span-2"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <p className="text-[10px] uppercase tracking-widest text-text-dimmer font-body mb-2">FULL TIME SUPPORT</p>
          <div className="font-heading text-6xl md:text-8xl font-extrabold text-foreground">24/6</div>
          <p className="body-text mt-4">I have a custom application for 24/6 support and you will get update anytime.</p>
        </motion.div>

        {/* Card 4 - Mobile */}
        <motion.div className="glass-surface p-0 overflow-hidden"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <img src="/images/benefits-mobile.png" alt="Mobile" className="w-full h-full object-cover" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
