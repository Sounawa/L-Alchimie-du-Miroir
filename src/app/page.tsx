"use client";

import { useState } from "react";
import { Reveal, Divider, Quote, ScrollProgress, BackToTop, RecapPanel } from "@/components/book/shared";
import { Navigation } from "@/components/book/Navigation";
import { Hero } from "@/components/book/Hero";
import { TableOfContents } from "@/components/book/TableOfContents";
import { Introduction } from "@/components/book/Introduction";
import { Chapter1 } from "@/components/book/Chapter1";
import { Chapter2 } from "@/components/book/Chapter2";
import { Chapter3 } from "@/components/book/Chapter3";
import { Chapter4 } from "@/components/book/Chapter4";
import { Chapter5 } from "@/components/book/Chapter5";
import { Chapter6 } from "@/components/book/Chapter6";
import { Annexes } from "@/components/book/Annexes";
import { useJournalStore } from "@/lib/journal-store";
import { motion, AnimatePresence } from "framer-motion";

function Footer() {
  return (
    <footer
      className="py-20 px-6 md:px-8 text-center"
      style={{ background: "#F4F1EC" }}
    >
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <h2
            className="font-bold mb-6"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              color: "#2C3945",
            }}
          >
            Continuez le Chemin
          </h2>
          <p
            className="mb-8 leading-relaxed"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "17px",
              color: "#5A4E42",
            }}
          >
            Ce livre n&rsquo;est que le premier pas. Les niveaux suivants approfondiront chaque phase
            et introduiront des pratiques avancees : la lecture symbolique du Coran, la meditation
            des Noms divins, et le cheminement vers la proximite spirituelle.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="arabic-display text-center mb-8" style={{ fontSize: "1.5rem" }}>
            {"\u0631\u064e\u0628\u0651\u064e\u0646\u064e\u0627 \u0622\u062a\u0650\u0646\u064e\u0627 \u0641\u0650\u064a \u0627\u0644\u062f\u0651\u064f\u0646\u0652\u064a\u064e\u0627 \u062d\u064e\u0633\u064e\u0646\u064e\u0629\u064b \u0648\u064e\u0641\u0650\u064a \u0627\u0644\u0652\u0622\u062e\u0650\u0631\u064e\u0629\u0650 \u062d\u064e\u0633\u064e\u0646\u064e\u0629\u064b \u0648\u064e\u0642\u0650\u0646\u064e\u0627 \u0639\u064e\u0630\u064e\u0627\u0628\u064e \u0627\u0644\u0646\u0651\u064e\u0627\u0631\u0650"}
          </div>
          <Quote
            text="Seigneur, donne-nous le bien en ce monde et le bien dans l'au-dela, et preserve-nous du chatiment du Feu."
            author="Sourate Al-Baqarah"
            source="2:201"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <Divider symbol="&#10022;" />

          <div className="mt-8 pt-8" style={{ borderTop: "1px solid #E7E5E4" }}>
            <p
              className="text-sm font-semibold mb-1"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                color: "#2C3945",
              }}
            >
              L&rsquo;Alchimie du Miroir &mdash; Niveau 1 : Initiation
            </p>
            <p
              className="text-xs"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "#8C7A6B",
              }}
            >
              GUIDE PRATIQUE INTERACTIF
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

function RecapButton({ onClick }: { onClick: () => void }) {
  const count = useJournalStore((s) => s.getFilledCount());
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="fixed bottom-8 left-8 z-50 cursor-pointer rounded-2xl flex items-center gap-2.5 pl-4 pr-3 py-3 shadow-lg border"
      style={{
        background: hovered ? "white" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        borderColor: hovered ? "rgba(196,162,101,0.3)" : "rgba(231,229,228,0.7)",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.1)" : "0 2px 12px rgba(0,0,0,0.06)",
        transition: "all 0.3s",
      }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 rounded-xl flex items-center justify-center" style={{
          background: "linear-gradient(135deg, #2C3945, #3A4D5C)",
          boxShadow: "0 2px 8px rgba(44,57,69,0.25)",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FAF5ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          {count > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{
              fontFamily: "var(--font-inter), sans-serif",
              background: "#C4A265",
              color: "white",
              boxShadow: "0 1px 4px rgba(196,162,101,0.4)",
            }}>
              {count}
            </span>
          )}
        </div>
        <AnimatePresence mode="wait">
          {hovered && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="text-xs font-medium whitespace-nowrap overflow-hidden"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "#57534E",
              }}
            >
              Mon journal
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}

export default function Home() {
  const [recapOpen, setRecapOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <TableOfContents />
        <Introduction />
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Chapter4 />
        <Chapter5 />
        <Chapter6 />
        <Annexes />
      </main>
      <Footer />
      <RecapButton onClick={() => setRecapOpen(true)} />
      <RecapPanel open={recapOpen} onClose={() => setRecapOpen(false)} />
      <BackToTop />
    </div>
  );
}
