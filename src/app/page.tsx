"use client";

import { Reveal, BookQuote } from "@/components/book/shared";
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

export function Footer() {
  return (
    <footer className="py-20 px-6 md:px-8 text-center" style={{ background: "var(--cream-dark)" }}>
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <h2 className="font-bold mb-6" style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            color: "var(--navy)",
          }}>
            Continuez le Chemin
          </h2>
          <p className="mb-8 leading-relaxed" style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "17px",
            color: "#5A4E42",
          }}>
            Ce livre n&rsquo;est que le premier pas. Les niveaux suivants approfondiront chaque phase
            et introduiront des pratiques avancées : la lecture symbolique du Coran, la méditation
            des Noms divins, et le cheminement vers la proximité spirituelle.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="arabic-display text-center mb-8" style={{ fontSize: "1.5rem" }}>
            رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
          </div>
          <BookQuote
            text="Seigneur, donne-nous le bien en ce monde et le bien dans l\u2019au-del\u00e0, et pr\u00e9serve-nous du ch\u00e2timent du Feu."
            author="Sourate Al-Baqarah"
            source="2:201"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 text-xl tracking-[0.5em]" style={{ color: "var(--gold)" }}>
            &#10022; &#10022; &#10022;
          </div>

          <div className="mt-8 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
            <p className="text-sm font-semibold mb-1" style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "var(--navy)",
            }}>
              L&rsquo;Alchimie du Miroir — Niveau 1 : Initiation
            </p>
            <p className="text-xs" style={{
              fontFamily: "var(--font-inter), sans-serif",
              color: "#8C7A6B",
            }}>
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
      <Navigation />
      <main>
        <Hero />
        <div style={{ background: "var(--cream)" }}>
          <TableOfContents />
          <Introduction />
          <Chapter1 />
          <Chapter2 />
          <Chapter3 />
          <Chapter4 />
          <Chapter5 />
          <Chapter6 />
          <Annexes />
        </div>
      </main>
      <Footer />
    </div>
  );
}
