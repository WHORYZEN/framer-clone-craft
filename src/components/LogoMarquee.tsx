const logos = [
  "/images/work-fragrance.jpeg",
  "/images/work-shoes.png",
  "/images/work-bag.png",
  "/images/service-coffee.png",
  "/images/service-cream.png",
];

const LogoMarquee = () => {
  return (
    <div className="relative overflow-hidden py-8 border-t border-b border-keyline">
      <div className="marquee-track">
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 mx-10 flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity duration-300"
            style={{ width: "80px", height: "40px" }}>
            <img src={logo} alt="Partner" className="w-full h-full object-contain grayscale brightness-200" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
