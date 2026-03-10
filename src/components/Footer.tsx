import logo from "@/assets/logo_digifrenzy_white.png";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-keyline px-8 md:px-12 lg:px-16 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#hero" className="font-heading text-lg font-extrabold uppercase tracking-tight text-foreground">
          VIPER<span className="text-accent">*</span>
        </a>
        <p className="text-xs text-text-dimmer font-body">© 2025 DigiFrenzy. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {["Twitter", "Dribbble", "LinkedIn"].map(s => (
            <a key={s} href="#" className="text-xs text-text-dim hover:text-foreground transition-colors duration-300 font-body uppercase tracking-widest">
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
