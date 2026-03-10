import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BtnIcon = () => (
  <span className="btn-icon">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.4]);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="aurora-glow" />
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 relative z-10">
        {/* Left: Image with parallax */}
        <div className="relative min-h-[60vh] lg:min-h-screen overflow-hidden">
          <motion.img
            src="/images/hero-portrait.png"
            alt="Creative portrait"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ y: imageY, scale: 1.1 }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div 
            className="absolute inset-0 bg-background" 
            style={{ opacity: overlayOpacity }} 
          />
          
          <motion.div className="absolute bottom-8 left-8 z-10"
            style={{ y: textY }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}>
            <p className="section-tag mb-3">©2025</p>
            <h1 className="heading-display text-foreground">
              DigiFrenzy<span className="text-accent">*</span>
            </h1>
          </motion.div>
        </div>

        {/* Right: Content with parallax */}
        <div className="relative flex flex-col justify-between p-8 md:p-12 lg:p-16" 
          style={{ background: "hsl(var(--accent))" }}>
          
          <motion.div className="flex-1 flex flex-col justify-center max-w-lg"
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}>
            <p className="text-sm uppercase tracking-[0.2em] mb-6 font-body"
              style={{ color: "hsl(0 0% 0% / 0.5)" }}>
              Hey, Just An Intro
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold leading-snug mb-8"
              style={{ color: "hsl(0 0% 0% / 0.9)" }}>
              A digital designer based in Los Angeles, passionate about creating immersive visual experiences.®
            </h2>
            <a href="#contact" className="btn-primary inline-flex w-fit">
              <BtnIcon />
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Intro text cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-keyline">
        <motion.div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-keyline"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="heading-sub text-foreground mb-4">Bringing Ideas to Life</h3>
          <p className="body-text">
            I specialize in transforming concepts into captivating 3D visuals. Whether it's product renderings, or immersive environments, my portfolio is designed to tell a story.
          </p>
        </motion.div>
        <motion.div className="p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
          <h3 className="heading-sub text-foreground mb-4">Collaborate with Me</h3>
          <p className="body-text">
            Let's create something extraordinary together! Whether you're looking to visualize a product, animate a concept, or build an interactive experience.
          </p>
        </motion.div>
      </div>

      {/* Work showcase strip */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-keyline">
        {[
          { src: "/images/work-fragrance.jpeg", alt: "Fragrance" },
          { src: "/images/work-shoes.png", alt: "Shoes" },
          { src: "/images/work-bag.png", alt: "Bag" },
        ].map((item, i) => (
          <motion.div key={item.alt} className="relative aspect-[4/3] overflow-hidden border-b md:border-b-0 md:border-r last:border-r-0 border-keyline photo-grid-item"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
            <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
