"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "introduction", label: "Introduction" },
  { id: "chapitre-1", label: "Fondations" },
  { id: "chapitre-2", label: "Fana" },
  { id: "chapitre-3", label: "Tajalli" },
  { id: "chapitre-4", label: "Munajat" },
  { id: "chapitre-5", label: "Béance" },
  { id: "chapitre-6", label: "21 Jours" },
  { id: "annexes", label: "Annexes" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Detect active section
      const sections = NAV_ITEMS.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled ? "rgba(250,248,245,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px) saturate(180%)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(232,224,216,0.6)" : "1px solid transparent",
          boxShadow: isScrolled ? "0 1px 24px rgba(44,36,32,0.04)" : "none",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
          {/* Logo / Title */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-semibold text-sm tracking-wide transition-colors duration-200 cursor-pointer"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: isScrolled ? "var(--navy)" : "#FFF8E7",
              fontSize: "16px",
            }}
          >
            L&rsquo;Alchimie du Miroir
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="px-3 py-1.5 rounded-lg text-xs transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: isScrolled
                    ? activeSection === item.id
                      ? "var(--gold-dark)"
                      : "#6B5E52"
                    : activeSection === item.id
                      ? "#D4A853"
                      : "rgba(255,248,231,0.6)",
                  background: activeSection === item.id
                    ? isScrolled ? "rgba(184,146,62,0.08)" : "rgba(212,168,83,0.1)"
                    : "transparent",
                  fontWeight: activeSection === item.id ? 600 : 400,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: isScrolled ? "var(--navy)" : "#FFF8E7" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {isMobileMenuOpen ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden px-4 pb-4"
            style={{
              background: "rgba(250,248,245,0.98)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className="px-3 py-2.5 rounded-lg text-sm text-left transition-all duration-200 cursor-pointer"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    color: activeSection === item.id ? "var(--gold-dark)" : "#6B5E52",
                    background: activeSection === item.id ? "rgba(184,146,62,0.08)" : "transparent",
                    fontWeight: activeSection === item.id ? 600 : 400,
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
