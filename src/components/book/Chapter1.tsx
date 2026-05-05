"use client";

import { useState } from "react";
import { Reveal, ParallaxSection, H1, H2, Body, Divider, Callout, Step, PremiumTable, JournalCard } from "./shared";

export function Chapter1() {
  const [checkedSpace, setCheckedSpace] = useState<Record<number, boolean>>({});

  const spaceItems = [
    "Un endroit calme, a l&rsquo;abri des distractions",
    "Votre mushaf (Coran en arabe) &mdash; de preference en papier",
    "Un carnet ou ce journal numerique pour vos ecrits",
    "Du parfum (non obligatoire mais recommande dans la Sunna)",
    "Un moment fixe dans la journee (de preference avant Fajr ou apres Maghrib)",
    "Les ablutions (wudu) &mdash; une condition de respect et de concentration",
  ];

  return (
    <ParallaxSection bg="cream" id="chapitre-1">
      <Reveal>
        <H1>Chapitre I</H1>
        <p
          className="text-center mb-8"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
            fontStyle: "italic",
            color: "#8B7340",
            marginTop: "0.5rem",
          }}
        >
          Les Fondations &amp; Garde-fous
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <Callout variant="rose" title="Garde-fou spirituel essentiel" icon="&#9888;&#65039;">
          <Body>
            La meditation coranique n&rsquo;est <strong>pas du soufisme devie</strong>, ni une
            innovation blamable (bid&rsquo;a). C&rsquo;est une practice authentiquement ancre
            dans le Coran et la Sunna, mais qui necessite des garde-fous.
          </Body>
          <Body className="!mb-2">
            <strong>Ne jamais :</strong>
          </Body>
          <ul className="list-disc pl-6 mb-4 space-y-1.5" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px", color: "#3D342D" }}>
            <li>Pretendre avoir des visions ou des revelations</li>
            <li>Considerer ses etats spirituels comme une preuve de superiorite</li>
            <li>Negliger les obligations religieuses (priere, jeune, etc.)</li>
            <li>Pratiquer sans guidance d&rsquo;un savant qualifie si vous etes debutant</li>
          </ul>
          <Body className="!mb-0">
            <strong>Objectif unique :</strong> rapprocher votre coeur de Dieu, pas de vous-meme.
          </Body>
        </Callout>
      </Reveal>

      <Divider />

      <Reveal delay={0.2}>
        <H2>Les 5 Regles d&rsquo;Or</H2>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="my-6 space-y-3.5">
          <Step number={1} title="L&rsquo;intention (Niyya)" description="Avant chaque session, formulez interieurement : &laquo; O Allah, je medite Ton Livre pour me rapprocher de Toi, pas pour paraitre ou pour eprouver des etats spirituels. &raquo;" />
          <Step number={2} title="L&rsquo;humilite (Tawadu&rsquo;)" description="Approchez le Coran comme un serviteur approche son maitre &mdash; avec la conscience de votre ignorance et de votre besoin. Le Coran n&rsquo;est pas un objet d&rsquo;etude, c&rsquo;est une rencontre." />
          <Step number={3} title="La patience (Sabr)" description="Les fruits de la meditation ne viennent pas immediatement. Parfois, pendant des semaines, vous ne ressentirez rien. C&rsquo;est normal. La transformation se fait en profondeur, pas en surface." />
          <Step number={4} title="L&rsquo;ancrage dans la Sunna" description="Ne separez jamais la meditation de la practice prophetique. La priere, le dhikr, la recherche de connaissance &mdash; tout doit rester connecte." />
          <Step number={5} title="Le retour a Dieu (Inaba)" description="Apres chaque session, prenez un moment pour demander pardon et renouveler votre engagement. La meditation n&rsquo;est pas une fin en soi &mdash; c&rsquo;est un moyen de revenir a Lui." />
        </div>
      </Reveal>

      <Divider />

      <Reveal delay={0.35}>
        <H2>Qui peut pratiquer ?</H2>
      </Reveal>

      <Reveal delay={0.4}>
        <PremiumTable
          headers={["Profil", "Prerequis", "Phase recommandee"]}
          rows={[
            [
              <span key="p1">Debutant absolu</span>,
              <span key="p2">Aucune experience de meditation</span>,
              <strong key="p3">Phase 1 (Fana) uniquement, 10 min/jour</strong>,
            ],
            [
              <span key="p4">Pratiquant regulier</span>,
              <span key="p5">Priere etablie, dhikr quotidien</span>,
              <strong key="p6">Phases 1-3, 20-30 min/jour</strong>,
            ],
            [
              <span key="p7">Avance</span>,
              <span key="p8">Sous guidance d&rsquo;un shaykh</span>,
              <strong key="p9">Toutes les phases, y compris la Beance</strong>,
            ],
            [
              <span key="p10">Personne en difficulte psychologique</span>,
              <span key="p11">Accompagnement therapeutique necessaire</span>,
              <strong key="p12">Phases 1-2 uniquement, avec supervision</strong>,
            ],
          ]}
        />
      </Reveal>

      <Divider />

      <Reveal delay={0.45}>
        <H2>Preparer votre espace</H2>
        <Body>
          Avant de commencer votre premiere meditation, preparez un espace physique dedie.
          Cela n&rsquo;a pas besoin d&rsquo;etre grandiose &mdash; un coin de votre chambre suffit.
        </Body>
      </Reveal>

      <Reveal delay={0.5}>
        <div className="space-y-2 my-5">
          {spaceItems.map((item, i) => (
            <label
              key={i}
              className="flex items-start gap-4 py-3 px-4 rounded-xl transition-all duration-300 cursor-pointer premium-card"
            >
              <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 shrink-0 cursor-pointer accent-[#C4A265]"
                checked={checkedSpace[i] || false}
                onChange={(e) => setCheckedSpace((prev) => ({ ...prev, [i]: e.target.checked }))}
              />
              <span
                className="flex-1 cursor-pointer"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "16px",
                  color: "#3D342D",
                }}
              >
                {item}
              </span>
            </label>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.55}>
        <JournalCard label="ENGAGEMENT INITIAL">
          <p className="mb-4 font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "17px" }}>
            Prenez un moment pour repondre sincerement a ces questions :
          </p>
          <textarea
            placeholder="Pourquoi souhaitez-vous mediter le Coran ? Quelle est votre intention profonde ?"
            className="mb-4"
          />
          <textarea
            placeholder="Quelle est votre plus grande difficulte dans votre relation actuelle avec le Coran ?"
            className="mb-4"
          />
          <textarea
            placeholder="Quel est votre engagement concret pour les 21 prochains jours ? (ex: 10 min chaque matin avant Fajr)"
          />
        </JournalCard>
      </Reveal>
    </ParallaxSection>
  );
}
