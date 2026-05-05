"use client";

import { Reveal, SectionTitle, SectionSubtitle, BodyText, BookQuote, InfoBox, StepCard } from "./shared";
import { MeditationTimer } from "./MeditationTimer";
import { useState } from "react";

const BEANCE_STEPS = [
  { icon: "\ud83d\ude36", label: "Asseyez-vous en silence", duration: 180 },
];

const STATES = [
  { arabic: "بسط", name: "Bast (Expansion)", meaning: "L\u2019\u00e2me s\u2019ouvre, la lumi\u00e8re abonde, la joie spirituelle est intense.", feeling: "Pl\u00e9nitude, gratitude, facilit\u00e9 dans l\u2019adoration, amour d\u2019Allah." },
  { arabic: "قبض", name: "Qabdh (Contraction)", meaning: "L\u2019\u00e2me se resserre, la lumi\u00e8re semble se retirer, la s\u00e9cheresse spirituelle s\u2019installe.", feeling: "S\u00e9cheresse, difficult\u00e9 dans la pri\u00e8re, sentiment d\u2019abandon." },
];

const OBSERVATIONS = [
  "J\u2019ai ressenti une paix profonde",
  "J\u2019ai ressenti une tristesse ou une s\u00e9cheresse",
  "Mon esprit \u00e9tait tr\u00e8s agit\u00e9 (c\u2019est normal)",
  "J\u2019ai eu un moment de vide total \u2014 et \u00e7a m\u2019a troubl\u00e9",
  "Je ne sais pas ce que j\u2019ai ressenti (c\u2019est normal aussi)",
];

export function Chapter5() {
  const [checkedObs, setCheckedObs] = useState<Record<number, boolean>>({});

  return (
    <section id="chapitre-5" className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionTitle>Chapitre V</SectionTitle>
          <p className="text-center mb-4 italic text-xl" style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "var(--gold-dark)",
          }}>
            Phase 4 : La Béance (Le Désert)
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <BookQuote
            text="Le plus grand obstacle entre le serviteur et son Seigneur n\u2019est pas le p\u00e9ch\u00e9 \u2014 c\u2019est la certitude qu\u2019il a de Lui. Car cette certitude elle-m\u00eame devient un voile entre lui et l\u2019Inconnaissable."
            author="Attribué à Ab\u016b Yaz\u012bd al-Bist\u0101m\u012b"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <SectionSubtitle>Comprendre la Béance</SectionSubtitle>
          <BodyText>
            La Béance est la phase la plus paradoxale — et la plus difficile à décrire. Il ne
            s&rsquo;agit plus de faire quelque chose, mais de <strong>cesser de faire</strong>.
            Plus de méditation, plus de lecture, plus de dhikr, plus de munajat. Juste… le silence.
          </BodyText>
          <div className="my-8 text-center">
            <p className="text-2xl font-semibold" style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "var(--navy)",
            }}>
              Ne faites rien.
            </p>
            <p className="text-2xl font-semibold" style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "var(--navy)",
            }}>
              N&rsquo;attendez rien.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <SectionSubtitle>Le paradoxe de l&rsquo;émotion</SectionSubtitle>
          <BodyText>
            Voici ce qui arrive presque toujours pendant la Béance : l&rsquo;émotion. Des larmes
            qui viennent sans raison. Une tristesse profonde mais douce. Une joie inexplicable.
            Ou alors — et c&rsquo;est ce qui déroute le plus —{" "}
            <strong>absolument rien</strong>. Un vide total.
          </BodyText>
          <BodyText>
            Ibn al-Qayyim distingue deux états spirituels fondamentaux :
          </BodyText>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="my-8 overflow-hidden rounded-xl shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(135deg, var(--navy), var(--navy-light))", color: "#FFF8E7" }}>
                    {["\u00c9tat", "Signification", "Ce que vous ressentez"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left text-xs uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {STATES.map((row, i) => (
                    <tr key={i} className="transition-colors duration-200"
                      style={{ borderBottom: "1px solid rgba(184,146,62,0.1)", background: i % 2 === 1 ? "rgba(184,146,62,0.03)" : "transparent" }}
                    >
                      <td className="px-5 py-4 align-top">
                        <span className="arabic-inline block mb-1">{row.arabic}</span>
                        <strong>{row.name}</strong>
                      </td>
                      <td className="px-5 py-4 align-top" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "15px" }}>{row.meaning}</td>
                      <td className="px-5 py-4 align-top italic" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "15px", color: "var(--gold-dark)" }}>{row.feeling}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <BodyText>
            Les deux états sont <strong>également nécessaires</strong>. Le bast sans le qabdh mène
            à l&rsquo;orgueil spirituel. Le qabdh sans le bast mène au désespoir. Le chemin
            véritable passe par les deux.
          </BodyText>
        </Reveal>

        <Reveal delay={0.3}>
          <BookQuote
            text="Ne rejette pas la sécheresse (qabdh), car elle est le berceau de la connaissance. Et ne t\u2019enfuis pas de la tristesse, car elle est la monture de la certitude."
            author="Ibn 'A\u1e6d\u0101' All\u0101h al-Iskandar\u012b"
            source="Al-\u1e24ikam"
          />
        </Reveal>

        <Reveal delay={0.35}>
          <SectionSubtitle>Instructions de la Béance</SectionSubtitle>
          <div className="my-6 space-y-3.5">
            <StepCard number={1} title="Asseyez-vous en silence" description="Pas de Coran ouvert devant vous. Pas de dhikr sur les l\u00e8vres. Juste vous, assis dans le silence. Les yeux mi-clos ou ouverts sur un point fixe." />
            <StepCard number={2} title="Abandonnez toute attente" description="C\u2019est la partie la plus difficile. Ne cherchez pas \u00e0 ressentir quelque chose. Ne cherchez pas \u00e0 recevoir une illumination. Ne cherchez m\u00eame pas \u00ab le silence \u00bb. Abandonnez le besoin de r\u00e9sultat." />
            <StepCard number={3} title="Observez le vide" description="Quand le vide se pr\u00e9sente \u2014 ce sentiment de n\u00e9ant int\u00e9rieur \u2014 ne le fuyez pas. Asseyez-vous avec lui comme on s\u2019assoit avec un h\u00f4te silencieux. Ne demandez rien. Ne refusez rien." />
            <StepCard number={4} title="Restez 3 minutes (au début)" description="Trois minutes de v\u00e9ritable silence int\u00e9rieur sont plus pr\u00e9cieuses que trois heures de pri\u00e8re m\u00e9canique. Commencez petit. La dur\u00e9e viendra d\u2019elle-m\u00eame." />
            <StepCard number={5} title="Terminez sans commentaire" description="Quand vous sortez de la B\u00e9ance, ne cherchez pas \u00e0 analyser ce qui s\u2019est pass\u00e9 (ou n\u2019est pas pass\u00e9). Ne dites pas \u00ab \u00e7a n\u2019a pas march\u00e9 \u00bb ou \u00ab j\u2019ai senti quelque chose \u00bb. Juste remerciez Allah et passez \u00e0 votre journ\u00e9e." />
          </div>
        </Reveal>

        {/* Timer */}
        <Reveal delay={0.4}>
          <MeditationTimer
            steps={BEANCE_STEPS}
            title="La Béance \u2014 Le Désert"
            subtitle="Asseyez-vous. Ne faites rien. N\u2019attendez rien."
            buttonText="Commencer le Silence"
          />
        </Reveal>

        {/* Journal */}
        <Reveal delay={0.5}>
          <div className="relative rounded-2xl p-8 md:p-9 my-10" style={{ background: "linear-gradient(#FFFFFF 0%, #F5EDD8 100%)", border: "2px solid var(--gold)", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
            <span className="absolute -top-3.5 left-7 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif", background: "var(--gold)" }}>
              &#9999;\ufe0f JOURNAL DE LA BÉANCE
            </span>
            <p className="mb-4 text-sm" style={{ color: "#7A6E63" }}>
              Après la Béance, cochez ce que vous avez observé :
            </p>
            <div className="space-y-2 mb-6">
              {OBSERVATIONS.map((obs, i) => (
                <label key={i} className="flex items-center gap-3 py-2 px-3 rounded-lg cursor-pointer" style={{ background: "rgba(255,255,255,0.5)" }}>
                  <input
                    type="checkbox"
                    className="w-5 h-5 cursor-pointer accent-[var(--gold)]"
                    checked={checkedObs[i] || false}
                    onChange={(e) => setCheckedObs(prev => ({ ...prev, [i]: e.target.checked }))}
                  />
                  <span className="text-sm" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }}>{obs}</span>
                </label>
              ))}
            </div>
            <textarea placeholder="Comment vous sentez-vous maintenant ? Notez librement vos observations." className="w-full rounded-xl p-5 outline-none transition-all duration-300 resize-y" style={{ minHeight: "100px", background: "white", border: "1px dashed var(--gold)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
