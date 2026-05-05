"use client";

import { Reveal, ParallaxSection, H1, H2, Body, Divider, PremiumTable, JournalCard } from "./shared";

const GLOSSARY = [
  { arabic: "\u062a\u062f\u0628\u0631", name: "Tadabbur", pronunciation: "(ta-dab-bour)", definition: "La rumination profonde \u2014 lire le Coran lentement en reflechissant a chaque mot, chaque sens, chaque implication pour sa propre vie." },
  { arabic: "\u062a\u0641\u0643\u0631", name: "Tafakkur", pronunciation: "(ta-fak-kour)", definition: "La reflexion meditative \u2014 le processus par lequel le coeur tourne un verset dans tous les sens pour en extraire la sagesse." },
  { arabic: "\u0641\u0646\u0627\u0621", name: "Fana", pronunciation: "(fa-na)", definition: "L'effacement \u2014 l'etat ou l'ego se dissout temporairement, laissant place a la conscience de la Presence divine." },
  { arabic: "\u062a\u062c\u0644\u064a", name: "Tajalli", pronunciation: "(ta-jal-li)", definition: "La theophanie \u2014 la manifestation de la lumiere divine a travers le texte coranique, percue par le coeur du lecteur." },
  { arabic: "\u0645\u0646\u0627\u062c\u0627\u0629", name: "Munajat", pronunciation: "(mou-na-ja)", definition: "Le dialogue intime \u2014 la conversation secrete entre le serviteur et son Seigneur, sans formulation prescrite." },
  { arabic: "\u0645\u0631\u0627\u0642\u0628\u0629", name: "Muraqaba", pronunciation: "(mou-ra-qa-ba)", definition: "La veille du coeur \u2014 la pratique de se sentir sous le regard divin en permanence, avec reverence et amour." },
  { arabic: "\u0642\u0628\u0636", name: "Qabdh", pronunciation: "(qab-dh)", definition: "La contraction \u2014 un etat de secheresse spirituelle ou le coeur ressent un resserrement et un eloignement apparent." },
  { arabic: "\u0628\u0633\u0637", name: "Bast", pronunciation: "(bast)", definition: "L'expansion \u2014 un etat d'ouverture spirituelle ou le coeur est inonde de lumiere, de joie et de facilite." },
];

export function Annexes() {
  return (
    <ParallaxSection bg="cream" id="annexes">
      <Reveal>
        <H1>Annexes</H1>
      </Reveal>

      <Reveal delay={0.1}>
        <H2>Glossaire</H2>
        <div className="space-y-6 my-8">
          {GLOSSARY.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0 w-16 text-center">
                <div
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-amiri), serif", color: "#8B7340" }}
                >
                  {item.arabic}
                </div>
              </div>
              <div>
                <h4
                  className="font-semibold"
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "17px",
                    color: "#2C3945",
                  }}
                >
                  {item.name}
                </h4>
                <p className="text-xs italic mb-1" style={{ color: "#8B7340" }}>
                  {item.pronunciation}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#5A4E42", fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {item.definition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Divider />

      <Reveal delay={0.2}>
        <JournalCard label="JOURNAL QUOTIDIEN TYPE">
          <p className="mb-6 text-sm" style={{ color: "#7A6E63" }}>
            Date : ____ / ____ / 20____
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#7A6E63" }}>
                Phase pratiquee
              </label>
              <input
                type="text"
                placeholder="Fana / Tajalli / Munajat / Beance"
                className="w-full px-4 py-3 rounded-xl outline-none"
                style={{
                  background: "white",
                  border: "1px dashed rgba(196,162,101,0.4)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                }}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#7A6E63" }}>
                Duree
              </label>
              <input
                type="text"
                placeholder="ex: 10 minutes"
                className="w-full px-4 py-3 rounded-xl outline-none"
                style={{
                  background: "white",
                  border: "1px dashed rgba(196,162,101,0.4)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-xs font-medium mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#7A6E63" }}>
              Observations
            </label>
            <textarea placeholder="Que s'est-il passe pendant la meditation ?" />
          </div>
        </JournalCard>
      </Reveal>

      <Divider />

      <Reveal delay={0.3}>
        <H2>Ressources</H2>
        <PremiumTable
          headers={["Ressource", "Auteur", "Description"]}
          rows={[
            [
              <strong key="r1">Ihya&rsquo; &lsquo;Ulum al-Din</strong>,
              <span key="r2" style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", fontWeight: 500, color: "#8B7340" }}>Al-Ghazali</span>,
              <span key="r3">L'oeuvre maitresse sur la spiritualite islamique. Le livre de la meditation (Kitab al-Muraqaba) est particulierement pertinent.</span>,
            ],
            [
              <strong key="r4">Madarij al-Salikin</strong>,
              <span key="r5" style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", fontWeight: 500, color: "#8B7340" }}>Ibn al-Qayyim</span>,
              <span key="r6">Un commentaire des stations spirituelles. Essentiel pour comprendre les etats de bast et qabdh.</span>,
            ],
            [
              <strong key="r7">Al-Futuhatal-Makkiyya</strong>,
              <span key="r8" style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", fontWeight: 500, color: "#8B7340" }}>Ibn &lsquo;Arabi</span>,
              <span key="r9">Les revelations de la Mecque. Un ouvrage dense, a aborder avec guidance. Le chapitre sur le Coran comme miroir est lumineux.</span>,
            ],
            [
              <strong key="r10">Al-Hikam</strong>,
              <span key="r11" style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", fontWeight: 500, color: "#8B7340" }}>Ibn &lsquo;Ata&rsquo; Allah</span>,
              <span key="r12">Sentences spirituelles breves et profondes. Un compagnon quotidien ideal pour la meditation.</span>,
            ],
            [
              <strong key="r13">La purification de l'ame</strong>,
              <span key="r14" style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", fontWeight: 500, color: "#8B7340" }}>Al-Ghazali (trad.)</span>,
              <span key="r15">Version accessible de l'Ihya, centree sur les maladies du coeur et leur traitement.</span>,
            ],
          ]}
        />
      </Reveal>
    </ParallaxSection>
  );
}
