"use client";

import { Reveal, Divider, Quote, ScrollProgress, BackToTop } from "@/components/book/shared";
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

export default function Home() {
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
      <BackToTop />
    </div>
  );
}
