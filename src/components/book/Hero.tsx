"use client";

import { motion } from "framer-motion";
import { Reveal, Ornament } from "./shared";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-8 py-24 md:py-32 min-h-[92vh]"
      style={{
        background: "linear-gradient(170deg, #1B2A4A 0%, #0F1829 40%, #1B2A4A 100%)",
      }}
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(184,146,62,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Floating mirror icon */}
      <motion.div
        className="text-7xl md:text-8xl mb-10 animate-float"
        style={{
          filter: "drop-shadow(0 0 30px rgba(184,146,62,0.3))",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        &#x1FA9E;
      </motion.div>

      {/* Title */}
      <motion.h1
        className="mb-4 font-bold"
        style={{
          fontFamily: "var(--font-amiri), Georgia, serif",
          fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
          color: "#D4A853",
          textShadow: "0 0 60px rgba(218,165,32,0.25)",
          lineHeight: 1.2,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        L&rsquo;Alchimie du Miroir
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mb-10 italic"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
          color: "#FFF8E7",
          opacity: 0.85,
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Méditer le Coran avec l&rsquo;Âme
      </motion.p>

      {/* Badge */}
      <motion.span
        className="inline-block mb-12 px-7 py-2.5 rounded-full border font-semibold tracking-widest uppercase text-xs"
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          color: "#D4A853",
          borderColor: "rgba(218,165,32,0.35)",
          background: "rgba(218,165,32,0.06)",
        }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        &#10022; Niveau 1 : Initiation &#10022;
      </motion.span>

      {/* Masters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p className="mb-2 italic text-sm" style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          color: "#FFF8E7",
          opacity: 0.5,
        }}>
          Inspiré des enseignements de
        </p>
        <p className="text-lg" style={{
          fontFamily: "var(--font-amiri), Georgia, serif",
          color: "#D4A853",
          opacity: 0.7,
        }}>
          Al-Ghazālī &bull; Ibn al-Qayyim &bull; Ibn &lsquo;Arabī
        </p>
      </motion.div>

      {/* Bottom label */}
      <motion.p
        className="absolute bottom-8"
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#FFF8E7",
          opacity: 0.25,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Guide Pratique Interactif
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-14 animate-pulse-soft"
        style={{ opacity: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" stroke="#FFF8E7" strokeWidth="1.5">
          <rect x="1" y="1" width="18" height="30" rx="9" />
          <motion.circle
            cx="10"
            cy="10"
            r="3"
            fill="#FFF8E7"
            animate={{ cy: [10, 20, 10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
