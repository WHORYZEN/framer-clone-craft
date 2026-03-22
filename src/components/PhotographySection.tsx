import { motion } from "framer-motion";

const photos = [
  { src: "/images/photo-water.png", alt: "Woman in water" },
  { src: "/images/photo-car.png", alt: "Car" },
  { src: "/images/photo-spray.png", alt: "Spray bottle" },
  { src: "/images/photo-glass.png", alt: "Glass corridor" },
];

const PhotographySection = () => {
  return (
    <section className="relative z-10 py-20 md:py-32">
      <div className="px-8 md:px-12 lg:px-16 mb-12">
        <div className="flex items-center gap-4 mb-2">
          <span className="section-label">Visual Showcase</span>
          <span className="section-tag">(CQ® — 08)</span>
        </div>
        <span className="section-tag mb-8 block">©2025</span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="section-label text-accent mb-2 block">Creative Visuals</span>
            <h2 className="heading-section text-foreground">Every Pixel Crafted.</h2>
          </div>
          <div className="max-w-md">
            <p className="body-text mb-6">
              Our creative team produces stunning visuals that bring your brand to life and captivate your audience.
            </p>
            <a href="#contact" className="btn-outline text-xs">
              <span className="btn-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Book an appointment
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {photos.map((photo, i) => (
          <motion.div key={photo.alt}
            className="photo-grid-item aspect-[3/4] overflow-hidden border border-keyline"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}>
            <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PhotographySection;
