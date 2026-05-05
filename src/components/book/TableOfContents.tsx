"use client";

import { Reveal, Divider } from "./shared";

const CHAPTERS = [
  { id: "introduction", num: "01", title: "Introduction", desc: "Pourquoi ce livre" },
  { id: "chapitre-1", num: "02", title: "Les Fondations", desc: "Règles d'or & garde-fous" },
  { id: "chapitre-2", num: "03", title: "Fana", desc: "L'Effacement — apaiser les vagues" },
  { id: "chapitre-3", num: "04", title: "Tajalli", desc: "L'Inversion — le miroir coranique" },
  { id: "chapitre-4", num: "05", title: "Munajat", desc: "Le Dialogue intime avec Allah" },
  { id: "chapitre-5", num: "06", title: "La Béance", desc: "Le Désert — le silence sacré" },
  { id: "chapitre-6", num: "07", title: "21 Jours", desc: "Programme progressif" },
  { id: "annexes", num: "08", title: "Annexes", desc: "Glossaire & ressources" },
];

export function TableOfContents() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 section-warm">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <h2 className="font-bold text-center mb-2" style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            color: "#1a1a1a",
            letterSpacing: "-0.01em",
          }}>
            Sommaire
          </h2>
          <p className="text-center text-sm mb-14" style={{
            fontFamily: "var(--font-inter), sans-serif",
            color: "#A8A29E",
          }}>
            Votre parcours vers la lumière intérieure
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-0">
            {CHAPTERS.map((ch, i) => (
              <button
                key={ch.id}
                onClick={() => scrollTo(ch.id)}
                className="group w-full flex items-center gap-5 py-5 px-4 rounded-2xl transition-all duration-300 cursor-pointer text-left"
                style={{
                  borderBottom: i < CHAPTERS.length - 1 ? "1px solid rgba(231,229,228,0.5)" : "none",
                }}
              >
                <span className="text-[11px] font-semibold tabular-nums shrink-0 w-7" style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "#C4A265",
                  opacity: 0.7,
                  transition: "opacity 0.3s",
                }}>
                  {ch.num}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="block text-[17px] font-semibold transition-colors duration-200 group-hover:text-[#8B7340]" style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    color: "#1a1a1a",
                  }}>
                    {ch.title}
                  </span>
                  <span className="block text-[13px] mt-0.5" style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "#A8A29E",
                  }}>
                    {ch.desc}
                  </span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className="shrink-0 text-[#D6CEC4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1 group-hover:translate-x-0"
                  style={{ transform: "translateX(-4px)", transition: "all 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateX(0)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateX(-4px)")}
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <Divider symbol="◆" />
          <p className="text-center italic text-base" style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "#A8A29E",
          }}>
            &laquo; Celui qui se connaît soi-même connaît son Seigneur. &raquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
