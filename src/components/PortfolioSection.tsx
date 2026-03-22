import { motion } from "framer-motion";

const projects = [
  { img: "/images/portfolio-soda.png", title: "Raven Claw", year: "2025", tags: ["Portfolio", "E-Commerce"] },
  { img: "/images/portfolio-car.png", title: "Willow Studio", year: "2024", tags: ["Photography", "Studio"] },
  { img: "/images/portfolio-runner.png", title: "Maison Law", year: "2024", tags: ["Branding", "Logo Design"] },
  { img: "/images/portfolio-lips.png", title: "Mystic Meadows", year: "2023", tags: ["Agency", "Marketing"] },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative z-10 py-20 md:py-32">
      <div className="px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-4 mb-2">
          <span className="section-label">Featured Works</span>
          <span className="section-tag">(CQ® — 03)</span>
        </div>
        <span className="section-tag">©2025</span>

        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="section-label text-accent mb-2 block">Portfolio</span>
            <h2 className="heading-section text-foreground">Featured Portfolio®</h2>
          </div>
          <div className="max-w-md">
            <p className="body-text mb-6">
              Showcasing our best client work — bold designs crafted to elevate brands and captivate audiences.
            </p>
            <a href="#" className="btn-outline text-xs">
              <span className="btn-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              View portfolio
            </a>
          </div>
        </div>
      </div>

      <LogoMarqueeInline />

      <div className="px-8 md:px-12 lg:px-16 mt-12 grid grid-cols-1 md:grid-cols-2 gap-0">
        {projects.map((project, i) => (
          <motion.div key={project.title}
            className="relative group overflow-hidden border border-keyline lens-flare-card cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
            }}>
            <div className="aspect-[4/3] overflow-hidden">
              <img src={project.img} alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">{project.title}</h3>
                <span className="text-xs text-text-dimmer">{project.year}</span>
              </div>
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 font-body glass-surface text-text-dim">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const LogoMarqueeInline = () => {
  const items = ["Trusted by brands worldwide:"];
  return (
    <div className="mt-10 py-4 border-t border-b border-keyline px-8 md:px-12">
      <p className="section-tag text-center">{items[0]}</p>
    </div>
  );
};

export default PortfolioSection;
