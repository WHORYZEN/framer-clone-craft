import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo_digifrenzy_white.png";

const navItems = [
  { label: "Home", num: "01", href: "/#hero" },
  { label: "About", num: "02", href: "/#approach" },
  { label: "Services", num: "03", href: "/services", isRoute: true },
  { label: "Work", num: "04", href: "/#portfolio" },
  { label: "Blog", num: "05", href: "/#blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between"
      style={{ backdropFilter: "blur(12px)", background: "hsl(0 0% 6.7% / 0.8)" }}>
      <a href="#hero">
        <img src={logo} alt="DigiFrenzy" className="h-14" />
      </a>

      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) =>
          item.isRoute ? (
            <Link key={item.label} to={item.href}
              className="group relative text-sm font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300">
              {item.label}
              <sup className="text-[10px] text-accent ml-0.5">{item.num}</sup>
            </Link>
          ) : (
            <a key={item.label} href={item.href}
              className="group relative text-sm font-medium tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300">
              {item.label}
              <sup className="text-[10px] text-accent ml-0.5">{item.num}</sup>
            </a>
          )
        )}
        <a href="#contact" className="btn-primary text-xs py-2 px-6 flex items-center gap-3">
          <span className="btn-icon w-8 h-8">
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          Get in touch with us
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
            {navItems.map((item) =>
              item.isRoute ? (
                <Link key={item.label} to={item.href} onClick={() => setMobileOpen(false)}
                  className="text-lg font-heading font-semibold text-foreground/80 hover:text-foreground">
                  {item.label}<sup className="text-accent text-xs ml-1">{item.num}</sup>
                </Link>
              ) : (
                <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                  className="text-lg font-heading font-semibold text-foreground/80 hover:text-foreground">
                  {item.label}<sup className="text-accent text-xs ml-1">{item.num}</sup>
                </a>
              )
            )}
            <a href="#contact" className="btn-primary text-xs py-2 px-6 mt-2 text-center">
              <span className="btn-icon w-8 h-8">
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
