import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Roblox", href: "#roblox" },
    { name: "Docs", href: "#" }, // Placeholder
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#24272F]/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src="/clawdblox-logo.png" alt="ClawdBlox" className="size-10 rounded-xl group-hover:scale-105 transition-transform" />
          <span className="font-heading font-bold text-lg leading-tight text-white group-hover:text-[#05b6f8] transition-colors">
            ClawdBlox
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-[#05b6f8] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#05b6f8] transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/clawdblox"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://clawdblox.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#05b6f8] to-[#037db0] text-white text-sm font-semibold shadow-lg shadow-[#05b6f8]/25 hover:shadow-[#05b6f8]/40 hover:scale-105 transition-all active:scale-95"
          >
            Launch App
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#24272F]/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/80 hover:text-[#05b6f8] py-2 border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://clawdblox.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-[#05b6f8] to-[#037db0] text-white font-semibold shadow-lg shadow-[#05b6f8]/20"
              onClick={() => setIsOpen(false)}
            >
              Launch App
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
