"use client";

import { Reveal, SectionTitle, SectionSubtitle, BodyText, BookQuote, InfoBox, StepCard } from "./shared";
import { useState } from "react";

const RULES = [
  {
    title: "L\u2019intention (Niyya)",
    description: "Avant chaque session, formulez int\u00e9rieurement : \u00ab \u00d4 Allah, je m\u00e9dite Ton Livre pour me rapprocher de Toi, pas pour para\u00eetre ou pour \u00e9prouver des \u00e9tats spirituels. \u00bb",
  },
  {
    title: "L\u2019humilit\u00e9 (Taw\u0101\u1e0du\u2019)",
    description: "Approchez le Coran comme un serviteur approche son ma\u00eetre \u2014 avec la conscience de votre ignorance et de votre besoin. Le Coran n\u2019est pas un objet d\u2019\u00e9tude, c\u2019est une rencontre.",
  },
  {
    title: "La patience (\u1e62abr)",
    description: "Les fruits de la m\u00e9ditation ne viennent pas imm\u00e9diatement. Parfois, pendant des semaines, vous ne ressentirez rien. C\u2019est normal. La transformation se fait en profondeur, pas en surface.",
  },
  {
    title: "L\u2019ancrage dans la Sunna",
    description: "Ne s\u00e9parez jamais la m\u00e9ditation de la pratique proph\u00e9tique. La pri\u00e8re, le dhikr, la recherche de connaissance \u2014 tout doit rester connect\u00e9.",
  },
  {
    title: "Le retour \u00e0 Dieu (In\u0101ba)",
    description: "Apr\u00e8s chaque session, prenez un moment pour demander pardon et renouveler votre engagement. La m\u00e9ditation n\u2019est pas une fin en soi \u2014 c\u2019est un moyen de revenir \u00e0 Lui.",
  },
];

const PROFILES = [
  { profile: "\ud83d\udd25 D\u00e9butant absolu", prereq: "Aucune exp\u00e9rience de m\u00e9ditation", phase: "Phase 1 (Fana) uniquement, 10 min/jour" },
  { profile: "\ud83d\udcd6 Pratiquant r\u00e9gulier", prereq: "Pri\u00e8re \u00e9tablie, dhikr quotidien", phase: "Phases 1-3, 20-30 min/jour" },
  { profile: "\ud83c\udf93 Avanc\u00e9", prereq: "Sous guidance d\u2019un shaykh", phase: "Toutes les phases, y compris la B\u00e9ance" },
  { profile: "\u26a0\ufe0f Personne en difficult\u00e9 psychologique", prereq: "Accompagnement th\u00e9rapeutique n\u00e9cessaire", phase: "Phases 1-2 uniquement, avec supervision" },
];

const SPACE_ITEMS = [
  "Un endroit calme, \u00e0 l\u2019abri des distractions",
  "Votre mushaf (Coran en arabe) \u2014 de pr\u00e9f\u00e9rence en papier",
  "Un carnet ou ce journal num\u00e9rique pour vos \u00e9crits",
  "Du parfum (non obligatoire mais recommand\u00e9 dans la Sunna)",
  "Un moment fixe dans la journ\u00e9e (de pr\u00e9f\u00e9rence avant Fajr ou apr\u00e8s Maghrib)",
  "Les ablutions (wud\u016b) \u2014 une condition de respect et de concentration",
];

export function Chapter1() {
  const [checkedSpace, setCheckedSpace] = useState<Record<number, boolean>>({});

  return (
    <section id="chapitre-1" className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionTitle>Chapitre I</SectionTitle>
          <p className="text-center mb-8 italic text-xl" style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "var(--gold-dark)",
          }}>
            Les Fondations &amp; Garde-fous
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <InfoBox title="Garde-fou spirituel essentiel" variant="rose" icon="&#9888;\ufe0f;">
            <BodyText>
              La méditation coranique n&rsquo;est <strong>pas du soufisme dévié</strong>, ni une
              innovation blâmable (bid&rsquo;a). C&rsquo;est une pratique authentiquement ancrée
              dans le Coran et la Sunna, mais qui nécessite des garde-fous.
            </BodyText>
            <BodyText>
              <strong>Ne jamais :</strong>
            </BodyText>
            <ul className="list-disc pl-6 mb-4 space-y-1.5 text-sm" style={{ color: "#3D342D", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }}>
              <li>Prétendre avoir des visions ou des révélations</li>
              <li>Considérer ses états spirituels comme une preuve de supériorité</li>
              <li>Négliger les obligations religieuses (prière, jeûne, etc.)</li>
              <li>Pratiquer sans guidance d&rsquo;un savant qualifié si vous êtes débutant</li>
            </ul>
            <BodyText className="!mb-0">
              <strong>Objectif unique :</strong> rapprocher votre c\u0153ur de Dieu, pas de vous-même.
            </BodyText>
          </InfoBox>
        </Reveal>

        <Reveal delay={0.2}>
          <SectionSubtitle>Les 5 Règles d&rsquo;Or</SectionSubtitle>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="my-6 space-y-3.5">
            {RULES.map((rule, i) => (
              <StepCard key={i} number={i + 1} title={rule.title} description={rule.description} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <SectionSubtitle>Qui peut pratiquer ?</SectionSubtitle>
          <div className="my-8 overflow-hidden rounded-xl shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr style={{
                    background: "linear-gradient(135deg, var(--navy), var(--navy-light))",
                    color: "#FFF8E7",
                  }}>
                    {["Profil", "Pr\u00e9requis", "Phase recommand\u00e9e"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left text-xs uppercase tracking-wider font-semibold"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PROFILES.map((row, i) => (
                    <tr key={i} className="transition-colors duration-200"
                      style={{
                        borderBottom: "1px solid rgba(184,146,62,0.1)",
                        background: i % 2 === 1 ? "rgba(184,146,62,0.03)" : "transparent",
                      }}
                    >
                      <td className="px-5 py-4 align-top">{row.profile}</td>
                      <td className="px-5 py-4 align-top">{row.prereq}</td>
                      <td className="px-5 py-4 align-top"><strong>{row.phase}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <SectionSubtitle>Préparer votre espace</SectionSubtitle>
          <BodyText>
            Avant de commencer votre première méditation, préparez un espace physique dédié.
            Cela n&rsquo;a pas besoin d&rsquo;être grandiose — un coin de votre chambre suffit.
          </BodyText>
          <div className="space-y-2 my-5">
            {SPACE_ITEMS.map((item, i) => (
              <label
                key={i}
                className="flex items-start gap-4 py-3 px-4 rounded-xl transition-all duration-300 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.5)" }}
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 mt-0.5 shrink-0 cursor-pointer accent-[var(--gold)]"
                  checked={checkedSpace[i] || false}
                  onChange={(e) => setCheckedSpace(prev => ({ ...prev, [i]: e.target.checked }))}
                />
                <span className="flex-1 cursor-pointer text-sm" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px", color: "#3D342D" }}>
                  {item}
                </span>
              </label>
            ))}
          </div>
        </Reveal>

        {/* Engagement initial */}
        <Reveal delay={0.5}>
          <div className="relative rounded-2xl p-8 md:p-9 my-10"
            style={{
              background: "linear-gradient(#FFFFFF 0%, #F5EDD8 100%)",
              border: "2px solid var(--gold)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            <span
              className="absolute -top-3.5 left-7 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                background: "var(--gold)",
              }}
            >
              &#9999;\ufe0f ENGAGEMENT INITIAL
            </span>
            <p className="mb-4 font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "17px" }}>
              Prenez un moment pour répondre sincèrement à ces questions :
            </p>
            <textarea
              placeholder="Pourquoi souhaitez-vous m\u00e9diter le Coran ? Quelle est votre intention profonde ?"
              className="w-full rounded-xl p-5 outline-none transition-all duration-300 resize-y mb-4"
              style={{
                minHeight: "110px",
                background: "white",
                border: "1px dashed var(--gold)",
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "16px",
              }}
            />
            <textarea
              placeholder="Quelle est votre plus grande difficult\u00e9 dans votre relation actuelle avec le Coran ?"
              className="w-full rounded-xl p-5 outline-none transition-all duration-300 resize-y mb-4"
              style={{
                minHeight: "110px",
                background: "white",
                border: "1px dashed var(--gold)",
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "16px",
              }}
            />
            <textarea
              placeholder="Quel est votre engagement concret pour les 21 prochains jours ? (ex: 10 min chaque matin avant Fajr)"
              className="w-full rounded-xl p-5 outline-none transition-all duration-300 resize-y"
              style={{
                minHeight: "110px",
                background: "white",
                border: "1px dashed var(--gold)",
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "16px",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
