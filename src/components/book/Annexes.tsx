"use client";

import { Reveal, SectionTitle, SectionSubtitle, BodyText, BookQuote } from "./shared";

const GLOSSARY = [
  { arabic: "\u062a\u062f\u0628\u0631", name: "Tadabbur", pronunciation: "(ta-dab-bour)", definition: "La rumination profonde \u2014 lire le Coran lentement en r\u00e9fl\u00e9chissant \u00e0 chaque mot, chaque sens, chaque implication pour sa propre vie." },
  { arabic: "\u062a\u0641\u0643\u0631", name: "Tafakkur", pronunciation: "(ta-fak-kour)", definition: "La r\u00e9flexion m\u00e9ditative \u2014 le processus par lequel le c\u0153ur tourne un verset dans tous les sens pour en extraire la sagesse." },
  { arabic: "\u0641\u0646\u0627\u0621", name: "Fana", pronunciation: "(fa-n\u00e2)", definition: "L\u2019effacement \u2014 l\u2019\u00e9tat o\u00f9 l\u2019ego se dissout temporairement, laissant place \u00e0 la conscience de la Pr\u00e9sence divine." },
  { arabic: "\u062a\u062c\u0644\u064a", name: "Tajalli", pronunciation: "(ta-jal-li)", definition: "La th\u00e9ophanie \u2014 la manifestation de la lumi\u00e8re divine \u00e0 travers le texte coranique, per\u00e7ue par le c\u0153ur du lecteur." },
  { arabic: "\u0645\u0646\u0627\u062c\u0627\u0629", name: "Munajat", pronunciation: "(mou-na-j\u00e2)", definition: "Le dialogue intime \u2014 la conversation secr\u00e8te entre le serviteur et son Seigneur, sans formulation prescrite." },
  { arabic: "\u0645\u0631\u0627\u0642\u0628\u0629", name: "Muraqaba", pronunciation: "(mou-ra-q\u00e2-ba)", definition: "La veille du c\u0153ur \u2014 la pratique de se sentir sous le regard divin en permanence, avec r\u00e9v\u00e9rence et amour." },
  { arabic: "\u0642\u0628\u0636", name: "Qabdh", pronunciation: "(qab-dh)", definition: "La contraction \u2014 un \u00e9tat de s\u00e9cheresse spirituelle o\u00f9 le c\u0153ur ressent un resserrement et un \u00e9loignement apparent." },
  { arabic: "\u0628\u0633\u0637", name: "Bast", pronunciation: "(bast)", definition: "L\u2019expansion \u2014 un \u00e9tat d\u2019ouverture spirituelle o\u00f9 le c\u0153ur est inond\u00e9 de lumi\u00e8re, de joie et de facilit\u00e9." },
];

const RESOURCES = [
  { title: "I\u1e25y\u0101\u2019 \u2018Ul\u016bm al-D\u012bn", author: "Al-Ghaz\u0101l\u012b", description: "L\u2019\u0153uvre ma\u00eetresse sur la spiritualit\u00e9 islamique. Le livre de la m\u00e9ditation (Kit\u0101b al-Mur\u0101qaba) est particuli\u00e8rement pertinent." },
  { title: "Mad\u0101rij al-S\u0101lik\u012bn", author: "Ibn al-Qayyim", description: "Un commentaire des stations spirituelles. Essentiel pour comprendre les \u00e9tats de bast et qabdh." },
  { title: "Al-Fut\u016bh\u0101t al-Makkiyya", author: "Ibn \u2018Arab\u012b", description: "Les r\u00e9v\u00e9lations de la Mecque. Un ouvrage dense, \u00e0 aborder avec guidance. Le chapitre sur le Coran comme miroir est lumineux." },
  { title: "Al-\u1e24ikam", author: "Ibn \u2018A\u1e6d\u0101\u2019 All\u0101h", description: "Sentences spirituelles br\u00e8ves et profondes. Un compagnon quotidien id\u00e9al pour la m\u00e9ditation." },
  { title: "La purification de l\u2019\u00e2me", author: "Al-Ghaz\u0101l\u012b (trad.)", description: "Version accessible de l\u2019Ihya, centr\u00e9e sur les maladies du c\u0153ur et leur traitement." },
];

export function Annexes() {
  return (
    <section id="annexes" className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionTitle>Annexes</SectionTitle>
        </Reveal>

        {/* Glossary */}
        <Reveal delay={0.1}>
          <SectionSubtitle>Glossaire</SectionSubtitle>
          <div className="space-y-6 my-8">
            {GLOSSARY.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-16 text-center">
                  <div className="text-2xl" style={{ fontFamily: "var(--font-amiri), serif", color: "var(--gold-dark)" }}>
                    {item.arabic}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "17px", color: "var(--navy)" }}>
                    {item.name}
                  </h4>
                  <p className="text-xs italic mb-1" style={{ color: "var(--gold-dark)" }}>
                    {item.pronunciation}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#5A4E42", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    {item.definition}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Journal template */}
        <Reveal delay={0.2}>
          <div className="relative rounded-2xl p-8 md:p-9 my-10" style={{ background: "linear-gradient(#FFFFFF 0%, #F5EDD8 100%)", border: "2px solid var(--gold)", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
            <span className="absolute -top-3.5 left-7 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif", background: "var(--gold)" }}>
              &#9999;\ufe0f JOURNAL QUOTIDIEN TYPE
            </span>
            <p className="mb-6 text-sm" style={{ color: "#7A6E63" }}>
              Date : ____ / ____ / 20____
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#7A6E63" }}>
                  Phase pratiqu\u00e9e
                </label>
                <input type="text" placeholder="Fana / Tajalli / Munajat / B\u00e9ance" className="w-full px-4 py-3 rounded-xl outline-none" style={{ background: "white", border: "1px dashed var(--gold)", fontFamily: "var(--font-inter), sans-serif", fontSize: "14px" }} />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#7A6E63" }}>
                  Dur\u00e9e
                </label>
                <input type="text" placeholder="ex: 10 minutes" className="w-full px-4 py-3 rounded-xl outline-none" style={{ background: "white", border: "1px dashed var(--gold)", fontFamily: "var(--font-inter), sans-serif", fontSize: "14px" }} />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#7A6E63" }}>
                Observations
              </label>
              <textarea placeholder="Que s\u2019est-il pass\u00e9 pendant la m\u00e9ditation ?" className="w-full rounded-xl p-4 outline-none resize-y" style={{ minHeight: "100px", background: "white", border: "1px dashed var(--gold)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }} />
            </div>
          </div>
        </Reveal>

        {/* Resources */}
        <Reveal delay={0.3}>
          <SectionSubtitle>Ressources</SectionSubtitle>
          <div className="my-8 overflow-hidden rounded-xl shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(135deg, var(--navy), var(--navy-light))", color: "#FFF8E7" }}>
                    {["Ressource", "Auteur", "Description"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left text-xs uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RESOURCES.map((row, i) => (
                    <tr key={i} className="transition-colors duration-200"
                      style={{ borderBottom: "1px solid rgba(184,146,62,0.08)", background: i % 2 === 1 ? "rgba(184,146,62,0.02)" : "transparent" }}
                    >
                      <td className="px-5 py-4 align-top font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>{row.title}</td>
                      <td className="px-5 py-4 align-top text-xs font-medium" style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--gold-dark)" }}>{row.author}</td>
                      <td className="px-5 py-4 align-top text-sm" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#5A4E42" }}>{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
