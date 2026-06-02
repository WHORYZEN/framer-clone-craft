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
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.18]);
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const tagY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.35, 0.7]);
  const scrollLineScale = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="aurora-glow" />

      {/* Full-bleed hero */}
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Background image with parallax */}
        <motion.img
          src="https://framerusercontent.com/images/VRwQ9uHPGoSubtzvWBwjE2utUDU.jpg"
          alt="Creative portrait"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ y: imageY, scale: imageScale }}
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Dark overlay for legibility */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: overlayOpacity,
            background:
              "linear-gradient(180deg, hsl(0 0% 0% / 0.55) 0%, hsl(0 0% 0% / 0.25) 40%, hsl(0 0% 0% / 0.75) 100%)",
          }}
        />

        {/* Wordmark */}
        <motion.div
          className="relative z-10 px-6 md:px-10 lg:px-14 pt-32 md:pt-36"
          style={{ y: wordmarkY, opacity: wordmarkOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h1
            className="font-heading font-extrabold uppercase tracking-[-0.05em] leading-[0.85] text-foreground whitespace-nowrap"
            style={{ fontSize: "clamp(2.5rem, 13.5vw, 16rem)" }}
          >
            Digi<span className="text-accent">Frenzy</span>
            <sup className="text-accent align-super" style={{ fontSize: "0.3em", top: "-0.8em" }}>®</sup>
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="block w-10 h-px bg-foreground/70" />
            <span className="section-tag text-foreground/80">Digital Agency</span>
          </div>
        </motion.div>

        {/* Bottom tagline + buttons */}
        <motion.div
          className="relative z-10 px-6 md:px-10 lg:px-14 pb-12 md:pb-16 max-w-3xl"
          style={{ y: tagY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          <div className="flex items-start gap-4 mb-8">
            <span className="text-foreground/60 font-heading text-xl mt-1">/</span>
            <p className="text-base md:text-lg text-foreground/85 leading-[1.6] max-w-xl">
              We craft bold brands, high-performance websites, and data-driven marketing strategies that move the needle.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#portfolio" className="btn-primary inline-flex">
              <BtnIcon />
              View Our Work
            </a>
            <a href="#contact" className="btn-outline inline-flex">
              <BtnIcon />
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Vertical scroll indicator */}
        <div className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4">
          <span
            className="section-tag text-foreground/70"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll down
          </span>
          <div className="relative w-px h-32 bg-foreground/15 overflow-hidden">
            <motion.div
              className="absolute inset-x-0 top-0 w-px bg-accent origin-top h-full"
              style={{ scaleY: scrollLineScale }}
            />
          </div>
        </div>
      </div>

      {/* Intro text cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-keyline">
        <motion.div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-keyline"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="heading-sub text-foreground mb-4">Transforming Brands Digitally</h3>
          <p className="body-text">
            We specialize in transforming brands into digital powerhouses. From stunning websites to data-driven marketing campaigns, our team is built to deliver results that move the needle.
          </p>
        </motion.div>
        <motion.div className="p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
          <h3 className="heading-sub text-foreground mb-4">Partner with Us</h3>
          <p className="body-text">
            Let's create something extraordinary together! Whether you need a brand overhaul, a high-converting website, or a full-scale marketing strategy — our team has you covered.
          </p>
        </motion.div>
      </div>

      {/* Work showcase strip */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-keyline">
        {[
          { src: "https://framerusercontent.com/images/UKGJ4gmkBLqWP9b5Vv956x2SBUE.jpg", alt: "Fragrance" },
          { src: "https://framerusercontent.com/images/ccp0pE8ilBYIbeVuKUhSOVV59A.jpg", alt: "Shoes" },
          { src: "https://framerusercontent.com/images/icTEZPIceOE8cIBqYuyzrKolpA.jpg", alt: "Bag" },
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
