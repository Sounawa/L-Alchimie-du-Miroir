"use client";

import { useState } from "react";
import { Reveal, ParallaxSection, H1, H2, Body, Divider, Quote, Callout, JournalCard, MeditationTimer } from "./shared";

const MUNAJAT_STEPS = [
  { icon: "\ud83d\udcdd", label: "Choisissez votre invite", duration: 60 },
  { icon: "\ud83d\udcde", label: "Parlez a Allah", duration: 180 },
  { icon: "\ud83d\udcdd", label: "Ecrivez ce que vous avez dit", duration: 60 },
];

const PROMPTS = [
  "O Allah, je me sens perdu en ce moment...",
  "Seigneur, pardonne-moi pour ce que j'ai fait aujourd'hui...",
  "Mon Dieu, je ne comprends pas ce que Tu me fais traverser...",
  "O Allah, je Te demande la paix du coeur...",
  "Seigneur, montre-moi ce qui est cache en moi...",
  "O Allah, je veux me rapprocher de Toi mais je ne sais pas comment...",
];

const EXAMPLES = [
  "\u00ab O Allah, Tu sais que je T'aime, mais Tu sais aussi que mon amour est faible. Renforce-le. Tu sais que je veux me rapprocher de Toi, mais mes pieds glissent. Maintiens-les. Tu sais que je suis imparfait \u2014 mais Tu es Celui qui parfait ce qui est brise. \u00bb",
  "\u00ab Seigneur, je suis fatigue de porter ce poids. Je ne sais pas si c'est Ton epreuve ou ma propre faiblesse. Mais je sais que Tu es plus proche de moi que ma veine jugulaire. Alors je me confie a Toi. Non pas parce que je suis fort, mais parce que Tu es le Seul Fort. \u00bb",
  "\u00ab O Toi qui m'as cree a partir de rien \u2014 qui me donnes la vie a chaque respiration \u2014 ouvre mon coeur a Ta lumiere. Fais que je Te voie dans chaque verset. Fais que chaque priere soit une rencontre. \u00bb",
];

export function Chapter4() {
  const [selectedPrompt, setSelectedPrompt] = useState<string>("");

  return (
    <ParallaxSection bg="warm" id="chapitre-4">
      <Reveal>
        <H1>Chapitre IV</H1>
        <p
          className="text-center mb-4"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
            fontStyle: "italic",
            color: "#8B7340",
            marginTop: "0.5rem",
          }}
        >
          Phase 3 : Le Dialogue (Munajat)
        </p>
        <div className="arabic-display text-center mb-8">{"\u0645\u0646\u0627\u062c\u0627\u0629"}</div>
      </Reveal>

      <Reveal delay={0.1}>
        <Quote
          text="La munajat est la conversation secrete entre le serviteur et son Seigneur. C'est le moment ou le coeur depose ses fardeaux et recoit en echange la paix que seul Allah peut donner."
          author="Ibn al-Qayyim"
          source="Madarij al-Salikin"
        />
      </Reveal>

      <Reveal delay={0.15}>
        <H2>Comprendre la Munajat</H2>
        <Body>
          Le mot <span className="arabic-inline">{"\u0645\u0646\u0627\u062c\u0627\u0629"}</span> (munajat) vient de la racine
          arabe qui signifie &laquo; converser intimement &raquo;. C&rsquo;est la forme la plus
          personnelle et la plus intime de la priere &mdash; un dialogue coeur a coeur avec votre
          Createur, sans formulation prescrite, sans intermediaire.
        </Body>
        <Body>
          Contrairement a la du&rsquo;a formelle, qui a ses formulations traditionnelles, la
          munajat est <strong>votre parole a vous</strong>. C&rsquo;est le moment ou vous parlez
          a Allah comme vous parleriez a votre plus proche confident &mdash; avec honnetete, avec
          vulnerabilite, sans filtre.
        </Body>
        <Body>
          Les prophetes pratiquaient la munajat. Le Prophete &#xFDFA; se levait la nuit pour
          prier jusqu&rsquo;a ce que ses pieds enflent. Et quand on lui demandait pourquoi,
          alors qu&rsquo;Allah lui avait deja pardonne tous ses peches, il repondait : &laquo; Ne
          suis-je pas un serviteur reconnaissant ? &raquo;
        </Body>
      </Reveal>

      <Reveal delay={0.25}>
        <Callout variant="sage" title="Regle d'or : il n'y a pas de mauvaise munajat" icon="&#128161;">
          <Body className="!mb-0">
            Vous pouvez vous plaindre. Vous pouvez douter. Vous pouvez poser des questions. Vous
            pouvez etre en colere. Allah connait deja ce qu&rsquo;il y a dans votre coeur &mdash;
            la munajat ne lui apprend rien de nouveau. Elle vous apprend quelque chose sur{" "}
            <strong>vous-meme</strong>. L&rsquo;important n&rsquo;est pas la beaute des mots,
            c&rsquo;est la sincerite de l&rsquo;intention.
          </Body>
        </Callout>
      </Reveal>

      <Divider />

      <Reveal delay={0.3}>
        <H2>Si vous ne savez pas comment commencer...</H2>
        <p className="mb-4 text-sm" style={{ color: "#7A6E63", fontFamily: "var(--font-cormorant), Georgia, serif", fontStyle: "italic" }}>
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
                border: selectedPrompt === prompt ? "1px solid #C4A265" : "1px solid #E7E5E4",
                background: selectedPrompt === prompt ? "rgba(196,162,101,0.1)" : "white",
                color: selectedPrompt === prompt ? "#8B7340" : "#6B5E52",
              }}
            >
              {prompt}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.35}>
        <H2>Exemples de Munajat</H2>
        <div className="space-y-5 my-6">
          {EXAMPLES.map((example, i) => (
            <div
              key={i}
              className="p-5 rounded-xl italic"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "16px",
                color: "#3D342D",
                background: "rgba(255,255,255,0.5)",
                borderLeft: "3px solid #C4A265",
              }}
            >
              {example}
            </div>
          ))}
        </div>
      </Reveal>

      <Divider />

      <Reveal delay={0.4}>
        <MeditationTimer
          steps={MUNAJAT_STEPS}
          title="Meditation de la Munajat &mdash; Le Dialogue"
          subtitle="Parlez a Allah avec votre coeur. Pas besoin de beaux mots."
          buttonText="Demarrer"
        />
      </Reveal>

      <Reveal delay={0.5}>
        <JournalCard label="VOTRE MUNAJAT">
          <p className="mb-4 text-sm" style={{ color: "#7A6E63" }}>
            Utilisez cet espace pour ecrire votre dialogue intime avec Allah. Vous pouvez
            commencer par l&rsquo;un des invites ci-dessus, ou ecrire librement.{" "}
            <strong>Soyez sincere</strong> &mdash; c&rsquo;est le seul critere qui compte.
          </p>
          <textarea
            placeholder={selectedPrompt || "Ecrivez votre dialogue avec Allah ici..."}
            defaultValue={selectedPrompt}
            style={{ minHeight: "180px" }}
          />
        </JournalCard>
      </Reveal>
    </ParallaxSection>
  );
}
