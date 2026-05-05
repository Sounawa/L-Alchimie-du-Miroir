"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { id: "introduction", label: "Intro" },
  { id: "chapitre-1", label: "Fondations" },
  { id: "chapitre-2", label: "Fana" },
  { id: "chapitre-3", label: "Tajalli" },
  { id: "chapitre-4", label: "Munajat" },
  { id: "chapitre-5", label: "Béance" },
  { id: "chapitre-6", label: "21 Jours" },
  { id: "annexes", label: "Annexes" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setHeroVisible(y < window.innerHeight * 0.8);

      let current = "";
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop - 200 <= y) { current = NAV_ITEMS[i].id; break; }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
        animate={{
          backgroundColor: scrolled ? "rgba(250,250,248,0.88)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(0px)",
          borderBottomColor: scrolled ? "rgba(231,229,228,0.5)" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.4 }}
        style={{ borderBottom: "1px solid transparent" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative z-10 cursor-pointer"
            whileTap={{ scale: 0.97 }}
          >
            <span className="font-semibold tracking-tight text-[15px]" style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: scrolled ? "#1a1a1a" : "rgba(250,245,237,0.9)",
              transition: "color 0.4s",
            }}>
              L&rsquo;Alchimie du Miroir
            </span>
          </motion.button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className="relative px-3 py-1.5 rounded-lg text-[12px] font-medium tracking-wide transition-all duration-300 cursor-pointer"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    color: scrolled
                      ? isActive ? "#8B7340" : "#78716C"
                      : isActive ? "#D4B87C" : "rgba(250,245,237,0.5)",
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full"
                      style={{ background: scrolled ? "#C4A265" : "#D4B87C" }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile button */}
          <motion.button
            className="md:hidden relative z-10 p-2 rounded-lg cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            animate={{ color: scrolled ? "#1a1a1a" : "rgba(250,245,237,0.85)" }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              {menuOpen ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              )}
            </svg>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-14 z-40 md:hidden"
            style={{
              background: "rgba(250,250,248,0.96)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(231,229,228,0.5)",
            }}
          >
            <nav className="px-4 py-3 space-y-0.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm transition-colors duration-200 cursor-pointer"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    color: active === item.id ? "#8B7340" : "#57534E",
                    background: active === item.id ? "rgba(196,162,101,0.08)" : "transparent",
                    fontWeight: active === item.id ? 600 : 400,
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
