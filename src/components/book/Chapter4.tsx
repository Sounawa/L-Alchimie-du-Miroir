"use client";

import { Reveal, SectionTitle, SectionSubtitle, BodyText, BookQuote, InfoBox } from "./shared";
import { MeditationTimer } from "./MeditationTimer";
import { useState } from "react";

const MUNAJAT_STEPS = [
  { icon: "\ud83d\udcdd", label: "Choisissez votre invite", duration: 60 },
  { icon: "\ud83d\udcde", label: "Parlez \u00e0 Allah", duration: 180 },
  { icon: "\ud83d\udcdd", label: "\u00c9crivez ce que vous avez dit", duration: 60 },
];

const PROMPTS = [
  "\u00d4 Allah, je me sens perdu en ce moment...",
  "Seigneur, pardonne-moi pour ce que j\u2019ai fait aujourd\u2019hui...",
  "Mon Dieu, je ne comprends pas ce que Tu me fais traverser...",
  "\u00d4 Allah, je Te demande la paix du c\u0153ur...",
  "Seigneur, montre-moi ce qui est cach\u00e9 en moi...",
  "\u00d4 Allah, je veux me rapprocher de Toi mais je ne sais pas comment...",
];

const EXAMPLES = [
  "\u00ab \u00d4 Allah, Tu sais que je T\u2019aime, mais Tu sais aussi que mon amour est faible. Renforce-le. Tu sais que je veux me rapprocher de Toi, mais mes pieds glissent. Maintiens-les. Tu sais que je suis imparfait \u2014 mais Tu es Celui qui parfait ce qui est bris\u00e9. \u00bb",
  "\u00ab Seigneur, je suis fatigu\u00e9 de porter ce poids. Je ne sais pas si c\u2019est Ton \u00e9preuve ou ma propre faiblesse. Mais je sais que Tu es plus proche de moi que ma veine jugulaire. Alors je me confie \u00e0 Toi. Non pas parce que je suis fort, mais parce que Tu es le Seul Fort. \u00bb",
  "\u00ab \u00d4 Toi qui m\u2019as cr\u00e9\u00e9 \u00e0 partir de rien \u2014 qui me donnes la vie \u00e0 chaque respiration \u2014 ouvre mon c\u0153ur \u00e0 Ta lumi\u00e8re. Fais que je Te voie dans chaque verset. Fais que chaque pri\u00e8re soit une rencontre. \u00bb",
];

export function Chapter4() {
  const [selectedPrompt, setSelectedPrompt] = useState<string>("");

  return (
    <section id="chapitre-4" className="py-20 md:py-28 px-6 md:px-8" style={{ background: "var(--cream-dark)" }}>
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionTitle>Chapitre IV</SectionTitle>
          <p className="text-center mb-4 italic text-xl" style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "var(--gold-dark)",
          }}>
            Phase 3 : Le Dialogue (Munajat)
          </p>
          <div className="arabic-display text-center mb-8">مناجاة</div>
        </Reveal>

        <Reveal delay={0.1}>
          <BookQuote
            text="La munajat est la conversation secrète entre le serviteur et son Seigneur. C\u2019est le moment o\u00f9 le c\u0153ur d\u00e9pose ses fardeaux et re\u00e7oit en \u00e9change la paix que seul Allah peut donner."
            author="Ibn al-Qayyim"
            source="Mad\u0101rij al-S\u0101lik\u012bn"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <SectionSubtitle>Comprendre la Munajat</SectionSubtitle>
          <BodyText>
            Le mot <span className="arabic-inline">مناجاة</span> (munajat) vient de la racine
            arabe qui signifie &laquo; converser intimement &raquo;. C&rsquo;est la forme la plus
            personnelle et la plus intime de la prière — un dialogue c\u0153ur à c\u0153ur avec votre
            Créateur, sans formulation prescrite, sans intermédiaire.
          </BodyText>
          <BodyText>
            Contrairement à la duʿa&rsquo; formelle, qui a ses formulations traditionnelles, la
            munajat est <strong>votre parole à vous</strong>. C&rsquo;est le moment où vous parlez
            à Allah comme vous parleriez à votre plus proche confident — avec honnêteté, avec
            vulnérabilité, sans filtre.
          </BodyText>
          <BodyText>
            Les prophètes pratiquaient la munajat. Le Prophète &#xFDFA; se levait la nuit pour
            prier jusqu&rsquo;à ce que ses pieds enflent. Et quand on lui demandait pourquoi,
            alors qu&rsquo;Allah lui avait déjà pardonné tous ses péchés, il répondait : &laquo; Ne
            suis-je pas un serviteur reconnaissant ? &raquo;
          </BodyText>
        </Reveal>

        <Reveal delay={0.25}>
          <InfoBox title="Règle d&rsquo;or : il n&rsquo;y a pas de mauvaise munajat" variant="sage" icon="&#128161;">
            <BodyText className="!mb-0">
              Vous pouvez vous plaindre. Vous pouvez douter. Vous pouvez poser des questions. Vous
              pouvez être en colère. Allah connaît déjà ce qu&rsquo;il y a dans votre c\u0153ur —
              la munajat ne lui apprend rien de nouveau. Elle vous apprend quelque chose sur{" "}
              <strong>vous-même</strong>. L&rsquo;important n&rsquo;est pas la beauté des mots,
              c&rsquo;est la sincérité de l&rsquo;intention.
            </BodyText>
          </InfoBox>
        </Reveal>

        {/* Prompts */}
        <Reveal delay={0.3}>
          <SectionSubtitle>Si vous ne savez pas comment commencer...</SectionSubtitle>
          <p className="mb-4 text-sm italic" style={{ color: "#7A6E63" }}>
            Cliquez sur l&rsquo;un des invites ci-dessous pour commencer votre munajat.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {PROMPTS.map((prompt, i) => (
              <button
                key={i}
                onClick={() => setSelectedPrompt(prompt)}
                className="px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  border: selectedPrompt === prompt ? "1px solid var(--gold)" : "1px solid var(--border)",
                  background: selectedPrompt === prompt ? "rgba(184,146,62,0.1)" : "white",
                  color: selectedPrompt === prompt ? "var(--gold-dark)" : "#6B5E52",
                }}
              >
                {prompt}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Examples */}
        <Reveal delay={0.35}>
          <SectionSubtitle>Exemples de Munajat</SectionSubtitle>
          <div className="space-y-5 my-6">
            {EXAMPLES.map((example, i) => (
              <div key={i} className="p-5 rounded-xl italic" style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "16px",
                color: "#3D342D",
                background: "rgba(255,255,255,0.5)",
                borderLeft: "3px solid var(--gold)",
              }}>
                {example}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Timer */}
        <Reveal delay={0.4}>
          <MeditationTimer
            steps={MUNAJAT_STEPS}
            title="M\u00e9ditation de la Munajat \u2014 Le Dialogue"
            subtitle="Parlez \u00e0 Allah avec votre c\u0153ur. Pas besoin de beaux mots."
            buttonText="D\u00e9marrer"
          />
        </Reveal>

        {/* Journal */}
        <Reveal delay={0.5}>
          <div className="relative rounded-2xl p-8 md:p-9 my-10" style={{ background: "linear-gradient(#FFFFFF 0%, #F5EDD8 100%)", border: "2px solid var(--gold)", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
            <span className="absolute -top-3.5 left-7 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif", background: "var(--gold)" }}>
              &#9999;\ufe0f VOTRE MUNAJAT
            </span>
            <p className="mb-4 text-sm" style={{ color: "#7A6E63" }}>
              Utilisez cet espace pour écrire votre dialogue intime avec Allah. Vous pouvez
              commencer par l&rsquo;un des invites ci-dessus, ou écrire librement.{" "}
              <strong>Soyez sincère</strong> — c&rsquo;est le seul critère qui compte.
            </p>
            <textarea
              placeholder={selectedPrompt || "\u00c9crivez votre dialogue avec Allah ici..."}
              className="w-full rounded-xl p-5 outline-none transition-all duration-300 resize-y"
              style={{
                minHeight: "180px",
                background: "white",
                border: "1px dashed var(--gold)",
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "16px",
              }}
              defaultValue={selectedPrompt}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
