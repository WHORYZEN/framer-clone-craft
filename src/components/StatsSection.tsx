import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ target, suffix = "+" }: { target: number; suffix?: string }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 2, ease: [0.16, 1, 0.3, 1] });
      const unsub = rounded.on("change", (v) => setDisplay(v));
      return () => { controls.stop(); unsub(); };
    }
  }, [inView, target, count, rounded]);

  return (
    <div ref={ref} className="counter-value">
      {display}{suffix}
    </div>
  );
};

const stats = [
  { value: 10, suffix: "+", label: "Years in the Industry", desc: "Delivering digital excellence worldwide." },
  { value: 230, suffix: "+", label: "Projects Delivered", desc: "For clients across industries globally." },
  { value: 99, suffix: "%", label: "Client Satisfaction", desc: "Consistently exceeding expectations." },
];

const StatsSection = () => {
  return (
    <section className="relative z-10 py-20 md:py-28 px-8 md:px-12 lg:px-16">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16">
        <span className="section-label mb-4 block">Stats & Facts</span>
        <p className="font-heading text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
          I take pride in creating solutions that are not only visually stunning® but also highly functional. Every number tells a story.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {stats.map((stat, i) => (
          <motion.div key={stat.label}
            className="p-8 md:p-10 border border-keyline glass-surface"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}>
            <Counter target={stat.value} suffix={stat.suffix} />
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground mt-4 mb-2">{stat.label}</h4>
            <p className="body-text text-sm">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
