"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient" style={{
        background: "linear-gradient(135deg, #1E2A35 0%, #151D27 30%, #2C3945 60%, #1E2A35 100%)",
      }} />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            top: "10%",
            left: "15%",
            background: "radial-gradient(circle, rgba(196,162,101,0.06) 0%, transparent 70%)",
          }}
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.05, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: "5%",
            right: "10%",
            background: "radial-gradient(circle, rgba(196,162,101,0.04) 0%, transparent 70%)",
          }}
          animate={{ x: [0, -30, 25, 0], y: [0, 20, -15, 0], scale: [1, 0.95, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 200,
            height: 200,
            top: "50%",
            right: "30%",
            background: "radial-gradient(circle, rgba(212,184,124,0.05) 0%, transparent 70%)",
          }}
          animate={{ x: [0, 20, -30, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(rgba(250,245,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,245,237,1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Mirror emoji */}
        <motion.div
          className="text-7xl md:text-8xl mb-12 select-none"
          style={{ filter: "drop-shadow(0 0 40px rgba(196,162,101,0.25))" }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            &#x1FA9E;
          </motion.span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-bold mb-5"
          style={{
            fontFamily: "var(--font-amiri), Georgia, serif",
            fontSize: "clamp(2.5rem, 7vw, 4rem)",
            color: "#D4B87C",
            lineHeight: 1.1,
            textShadow: "0 0 80px rgba(212,184,124,0.15)",
            letterSpacing: "0.01em",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          L&rsquo;Alchimie du Miroir
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mb-10 italic"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "rgba(250,245,237,0.7)",
            letterSpacing: "0.01em",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Méditer le Coran avec l&rsquo;Âme
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-block px-8 py-2.5 rounded-full text-xs tracking-[0.18em] uppercase font-medium"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "#D4B87C",
              border: "1px solid rgba(212,184,124,0.25)",
              background: "rgba(212,184,124,0.06)",
            }}
          >
            Niveau 1 &middot; Initiation
          </span>
        </motion.div>

        {/* Masters */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <p className="mb-2 italic text-xs tracking-wider uppercase" style={{
            fontFamily: "var(--font-inter), sans-serif",
            color: "rgba(250,245,237,0.3)",
          }}>
            Inspiré des enseignements de
          </p>
          <p className="text-base tracking-wide" style={{
            fontFamily: "var(--font-amiri), Georgia, serif",
            color: "rgba(212,184,124,0.55)",
          }}>
            Al-Ghazālī &ensp;&middot;&ensp; Ibn al-Qayyim &ensp;&middot;&ensp; Ibn &lsquo;Arabī
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-inter), sans-serif", color: "rgba(250,245,237,0.2)" }}
        >
          Explorer
        </motion.span>
        <motion.svg
          width="16" height="24" viewBox="0 0 16 24" fill="none"
          stroke="rgba(250,245,237,0.2)" strokeWidth="1.2"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="1" y="1" width="14" height="22" rx="7" />
          <circle cx="8" cy="8" r="2" fill="rgba(250,245,237,0.25)" />
        </motion.svg>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        background: "linear-gradient(to top, #FAFAF8, transparent)",
      }} />
    </section>
  );
}
