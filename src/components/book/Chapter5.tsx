"use client";

import { useState } from "react";
import { Reveal, ParallaxSection, H1, H2, Body, Divider, Quote, Callout, Step, PremiumTable, JournalCard, MeditationTimer, JournalTextarea } from "./shared";

const BEANCE_STEPS = [
  { icon: "\ud83d\ude36", label: "Asseyez-vous en silence", duration: 180 },
];

const OBSERVATIONS = [
  "J'ai ressenti une paix profonde",
  "J'ai ressenti une tristesse ou une secheresse",
  "Mon esprit etait tres agite (c'est normal)",
  "J'ai eu un moment de vide total \u2014 et ca m'a trouble",
  "Je ne sais pas ce que j'ai ressenti (c'est normal aussi)",
];

export function Chapter5() {
  const [checkedObs, setCheckedObs] = useState<Record<number, boolean>>({});

  return (
    <ParallaxSection bg="cream" id="chapitre-5">
      <Reveal>
        <H1>Chapitre V</H1>
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
          Phase 4 : La Beance (Le Desert)
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <Quote
          text="Le plus grand obstacle entre le serviteur et son Seigneur n'est pas le peche \u2014 c'est la certitude qu'il a de Lui. Car cette certitude elle-meme devient un voile entre lui et l'Inconnaissable."
          author="Attribue a Abu Yazid al-Bistami"
        />
      </Reveal>

      <Reveal delay={0.15}>
        <H2>Comprendre la Beance</H2>
        <Body>
          La Beance est la phase la plus paradoxale &mdash; et la plus difficile a decrire. Il ne
          s&rsquo;agit plus de faire quelque chose, mais de <strong>cesser de faire</strong>.
          Plus de meditation, plus de lecture, plus de dhikr, plus de munajat. Juste&hellip; le silence.
        </Body>
        <div className="my-8 text-center">
          <p
            className="text-2xl font-semibold"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "#2C3945",
            }}
          >
            Ne faites rien.
          </p>
          <p
            className="text-2xl font-semibold"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "#2C3945",
            }}
          >
            N&rsquo;attendez rien.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <H2>Le paradoxe de l&rsquo;emotion</H2>
        <Body>
          Voici ce qui arrive presque toujours pendant la Beance : l&rsquo;emotion. Des larmes
          qui viennent sans raison. Une tristesse profonde mais douce. Une joie inexplicable.
          Ou alors &mdash; et c&rsquo;est ce qui deroute le plus &mdash;{" "}
          <strong>absolument rien</strong>. Un vide total.
        </Body>
        <Body>
          Ibn al-Qayyim distingue deux etats spirituels fondamentaux :
        </Body>
      </Reveal>

      <Reveal delay={0.25}>
        <PremiumTable
          headers={["Etat", "Signification", "Ce que vous ressentez"]}
          rows={[
            [
              <span key="b1">
                <span className="arabic-inline block mb-1">{"\u0628\u0633\u0637"}</span>
                <strong>Bast (Expansion)</strong>
              </span>,
              <span key="b2">L'ame s'ouvre, la lumiere abonde, la joie spirituelle est intense.</span>,
              <em key="b3" style={{ color: "#8B7340" }}>Plenitude, gratitude, facilite dans l'adoration, amour d'Allah.</em>,
            ],
            [
              <span key="b4">
                <span className="arabic-inline block mb-1">{"\u0642\u0628\u0636"}</span>
                <strong>Qabdh (Contraction)</strong>
              </span>,
              <span key="b5">L'ame se resserre, la lumiere semble se retirer, la secheresse spirituelle s'installe.</span>,
              <em key="b6" style={{ color: "#8B7340" }}>Secheresse, difficulte dans la priere, sentiment d'abandon.</em>,
            ],
          ]}
        />
        <Body>
          Les deux etats sont <strong>egalement necessaires</strong>. Le bast sans le qabdh mene
          a l&rsquo;orgueil spirituel. Le qabdh sans le bast mene au desespoir. Le chemin
          veritable passe par les deux.
        </Body>
      </Reveal>

      <Divider />

      <Reveal delay={0.3}>
        <Quote
          text="Ne rejette pas la secheresse (qabdh), car elle est le berceau de la connaissance. Et ne t'enfuis pas de la tristesse, car elle est la monture de la certitude."
          author="Ibn 'Ata' Allah al-Iskandari"
          source="Al-Hikam"
        />
      </Reveal>

      <Divider />

      <Reveal delay={0.35}>
        <H2>Instructions de la Beance</H2>
        <div className="my-6 space-y-3.5">
          <Step number={1} title="Asseyez-vous en silence" description="Pas de Coran ouvert devant vous. Pas de dhikr sur les levres. Juste vous, assis dans le silence. Les yeux mi-clos ou ouverts sur un point fixe." />
          <Step number={2} title="Abandonnez toute attente" description="C'est la partie la plus difficile. Ne cherchez pas a ressentir quelque chose. Ne cherchez pas a recevoir une illumination. Ne cherchez meme pas &laquo; le silence &raquo;. Abandonnez le besoin de resultat." />
          <Step number={3} title="Observez le vide" description="Quand le vide se presente &mdash; ce sentiment de neant interieur &mdash; ne le fuyez pas. Asseyez-vous avec lui comme on s'assoit avec un hote silencieux. Ne demandez rien. Ne refusez rien." />
          <Step number={4} title="Restez 3 minutes (au debut)" description="Trois minutes de veritable silence interieur sont plus precieuses que trois heures de priere mecanique. Commencez petit. La duree viendra d'elle-meme." />
          <Step number={5} title="Terminez sans commentaire" description="Quand vous sortez de la Beance, ne cherchez pas a analyser ce qui s'est passe (ou n'est pas passe). Ne dites pas &laquo; ca n'a pas marche &raquo; ou &laquo; j'ai senti quelque chose &raquo;. Juste remerciez Allah et passez a votre journee." />
        </div>
      </Reveal>

      <Divider />

      <Reveal delay={0.4}>
        <MeditationTimer
          steps={BEANCE_STEPS}
          title="La Beance &mdash; Le Desert"
          subtitle="Asseyez-vous. Ne faites rien. N'attendez rien."
          buttonText="Commencer le Silence"
        />
      </Reveal>

      <Reveal delay={0.5}>
        <JournalCard label="JOURNAL DE LA BEANCE">
          <p className="mb-4 text-sm" style={{ color: "#7A6E63" }}>
            Apres la Beance, cochez ce que vous avez observe :
          </p>
          <div className="space-y-2 mb-6">
            {OBSERVATIONS.map((obs, i) => (
              <label
                key={i}
                className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer"
                style={{ background: "rgba(255,255,255,0.5)" }}
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer accent-[#C4A265]"
                  checked={checkedObs[i] || false}
                  onChange={(e) => setCheckedObs((prev) => ({ ...prev, [i]: e.target.checked }))}
                />
                <span
                  className="text-sm"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }}
                >
                  {obs}
                </span>
              </label>
            ))}
          </div>
          <JournalTextarea id="chapitre-5.observations" placeholder="Comment vous sentez-vous maintenant ? Notez librement vos observations." />
        </JournalCard>
      </Reveal>
    </ParallaxSection>
  );
}
