const logos = [
  "https://framerusercontent.com/images/UKGJ4gmkBLqWP9b5Vv956x2SBUE.jpg",
  "https://framerusercontent.com/images/ccp0pE8ilBYIbeVuKUhSOVV59A.jpg",
  "https://framerusercontent.com/images/icTEZPIceOE8cIBqYuyzrKolpA.jpg",
  "https://framerusercontent.com/images/h2AhWtN9l4FSdpd8rdbtk5KLWk.jpg",
  "https://framerusercontent.com/images/wSSi5QqI6FKfkpunJ76YhUf14.jpg",
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
