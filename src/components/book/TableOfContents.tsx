"use client";

import { Reveal } from "./shared";

interface NavItem {
  id: string;
  label: string;
  page?: number;
}

const NAV_ITEMS: NavItem[] = [
  { id: "introduction", label: "Introduction", page: 3 },
  { id: "chapitre-1", label: "Les Fondations & Garde-fous", page: 5 },
  { id: "chapitre-2", label: "L'Effacement (Fana)", page: 9 },
  { id: "chapitre-3", label: "L'Inversion (Tajalli)", page: 13 },
  { id: "chapitre-4", label: "Le Dialogue (Munajat)", page: 17 },
  { id: "chapitre-5", label: "La Béance (Le Désert)", page: 21 },
  { id: "chapitre-6", label: "Programme sur 21 Jours", page: 25 },
  { id: "annexes", label: "Annexes", page: 29 },
];

export function TableOfContents() {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <h1 className="font-bold mb-10 text-center"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 2.75rem)",
              color: "var(--navy)",
            }}
          >
            Sommaire
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-1">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="flex justify-between items-baseline w-full py-3.5 px-4 rounded-xl transition-all duration-200 hover:bg-amber-50 cursor-pointer text-left group"
                style={{
                  borderBottom: "1px dotted rgba(184,134,11,0.2)",
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                }}
              >
                <span className="text-[17px] text-foreground group-hover:text-[var(--gold-dark)] transition-colors">
                  {item.page && (
                    <span className="text-xs font-semibold mr-3" style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      color: "var(--gold)",
                    }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  )}
                  {item.label}
                </span>
                {item.page && (
                  <span className="text-xs font-medium shrink-0 ml-4" style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "var(--gold-dark)",
                  }}>
                    {item.page}
                  </span>
                )}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="text-center my-12 text-xl tracking-[0.5em]" style={{ color: "var(--gold)" }}>
            &#10086; &#10086; &#10086;
          </div>
          <p className="text-center italic" style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "16px",
            color: "#7A6E63",
          }}>
            &laquo; Celui qui se connaît soi-même connaît son Seigneur. &raquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
