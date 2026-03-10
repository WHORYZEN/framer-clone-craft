import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", num: "01", href: "#hero" },
  { label: "About", num: "02", href: "#approach" },
  { label: "Work", num: "03", href: "#portfolio" },
  { label: "Blog", num: "04", href: "#blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between"
      style={{ backdropFilter: "blur(12px)", background: "hsl(0 0% 6.7% / 0.8)" }}>
      <a href="#hero" className="font-heading text-xl font-extrabold uppercase tracking-tight text-foreground">
        VIPER<span className="text-accent">*</span>
      </a>

      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}
            className="group relative text-sm font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300">
            {item.label}
            <sup className="text-[10px] text-accent ml-0.5">{item.num}</sup>
          </a>
        ))}
        <a href="#contact" className="btn-primary text-xs py-3 px-6 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full border border-foreground/30 flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M5 2l2 2-2 2" stroke="currentColor" strokeWidth="1.5"/></svg>
          </span>
          Get in touch
        </a>
      </div>

      <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>}
        </svg>
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-6 flex flex-col gap-4 md:hidden"
            style={{ background: "hsl(0 0% 6.7% / 0.95)", backdropFilter: "blur(16px)" }}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                className="text-lg font-heading font-semibold text-foreground/80 hover:text-foreground">
                {item.label}<sup className="text-accent text-xs ml-1">{item.num}</sup>
              </a>
            ))}
            <a href="#contact" className="btn-primary text-xs py-3 px-6 mt-2 text-center">Get in touch</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
