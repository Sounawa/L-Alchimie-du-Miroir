"use client";

import { Reveal, ParallaxSection, H1, H2, Body, Divider, Quote, Step, PremiumTable, JournalCard, MeditationTimer } from "./shared";

const TAJALLI_STEPS = [
  { icon: "\ud83d\udd0d", label: "Choisissez un verset", duration: 60 },
  { icon: "\ud83d\udcd6", label: "Lisez lentement", duration: 180 },
  { icon: "\ud83e\uddd8", label: "Posez la question miroir", duration: 120 },
  { icon: "\u270d\ufe0f", label: "Ecrivez votre decouverte", duration: 60 },
];

export function Chapter3() {
  return (
    <ParallaxSection bg="cream" id="chapitre-3">
      <Reveal>
        <H1>Chapitre III</H1>
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
          Phase 2 : L&rsquo;Inversion (Tajalli)
        </p>
        <div className="arabic-display text-center mb-8">{"\u062a\u062c\u0644\u064a"}</div>
      </Reveal>

      <Reveal delay={0.1}>
        <Quote
          text="La Regle du Miroir : tout ce que tu percois dans le Coran te parle d'abord de toi-meme. Quand le verset dit &laquo; les injustes &raquo;, cherche d'abord l'injustice en toi. Quand il dit &laquo; les croyants &raquo;, cherche d'abord la foi en toi. Le Coran est un miroir &mdash; et un miroir ne montre pas l'autre, il montre toi."
          author="Ibn 'Arabi"
        />
      </Reveal>

      <Reveal delay={0.15}>
        <H2>Le Paradigme du Miroir</H2>
        <Body>
          La plupart d&rsquo;entre nous lisent le Coran de maniere &laquo; classique &raquo; : nous
          cherchons ce que le texte dit <em>sur le monde</em>, <em>sur les autres</em>,{" "}
          <em>sur l&rsquo;histoire</em>. C&rsquo;est une lecture legitime &mdash; mais incomplete.
        </Body>
        <Body>
          Le paradigme du miroir propose une <strong>inversion radicale</strong> : lire le Coran
          comme si chaque verset etait adresse personnellement a vous, comme si chaque attribut
          divin revele en miroir un attribut cache de votre propre ame.
        </Body>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="my-8 grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border" style={{ background: "rgba(166,123,138,0.05)", borderColor: "rgba(166,123,138,0.2)" }}>
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#A67B8A" }}>
              Approche classique
            </div>
            <p className="italic text-sm" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#3D342D" }}>
              &laquo; Ce verset parle des hypocrites &mdash; ceux qui disent avec leur bouche ce
              qu&rsquo;ils n&rsquo;ont pas dans leur coeur. &raquo;
            </p>
          </div>
          <div className="p-5 rounded-xl border" style={{ background: "rgba(95,138,107,0.05)", borderColor: "rgba(95,138,107,0.2)" }}>
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#5F8A6B" }}>
              Inversion en Miroir
            </div>
            <p className="italic text-sm" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#3D342D" }}>
              &laquo; En quoi mes paroles sont-elles parfois hypocrites ? Quand est-ce que je
              dis quelque chose que je ne ressens pas vraiment ? &raquo;
            </p>
          </div>
        </div>
      </Reveal>

      <Divider />

      <Reveal delay={0.25}>
        <H2>Comment pratiquer l&rsquo;Inversion</H2>
        <div className="my-6 space-y-3.5">
          <Step number={1} title="Choisissez un verset court" description="Pour debuter, choisissez un verset d'une sourate que vous connaissez deja. La sourate Al-Ikhlas est un excellent point de depart." />
          <Step number={2} title="Lisez le verset en arabe, puis en traduction" description="Laissez les mots resonner. Ne cherchez pas a analyser intellectuellement. Laissez le verset descendre de la tete vers le coeur." />
          <Step number={3} title="Posez la question miroir" description="&laquo; Qu'est-ce que ce verset revele de moi ? Quelle part de mon ame est eclairee &mdash; ou mise en lumiere &mdash; par ce verset ? &raquo;" />
          <Step number={4} title="Accueillez ce qui vient" description="Ne jugez pas ce qui remonte. Si une emotion surgit &mdash; culpabilite, joie, tristesse, surprise &mdash; accueillez-la. Elle est le miroir en train de fonctionner." />
          <Step number={5} title="Ecrivez votre decouverte" description="Prenez votre carnet. Ecrivez ce que le verset vous a revele. Pas une interpretation savante &mdash; mais ce que votre coeur a entendu." />
        </div>
      </Reveal>

      <Divider />

      <Reveal delay={0.35}>
        <div className="arabic-display text-center mb-6">{"\u0642\u064f\u0644\u0652 \u0647\u064f\u0648\u064e \u0627\u0644\u0644\u0651\u064e\u0647\u064f \u0623\u064e\u062d\u064e\u062f\u064c"}</div>
        <p className="text-center italic mb-8" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#7A6E63", fontSize: "16px" }}>
          &laquo; Dis : Lui, Allah, est Un. &raquo; &mdash; Sourate Al-Ikhlas (112:1)
        </p>
        <PremiumTable
          headers={["Attribut Divin", "Analyse Classique", "Inversion en Miroir"]}
          rows={[
            [
              <strong key="t1" style={{ color: "#8B7340" }}>Al-Ahad (L&rsquo;Unique)</strong>,
              <span key="t2">Allah est Un, sans associe. Il n&rsquo;a ni enfant ni partenaire.</span>,
              <em key="t3" style={{ color: "#5F8A6B" }}>&laquo; Qu&rsquo;est-ce qui, dans ma vie, me pousse a chercher d&rsquo;autres sources de securite que Lui ? &raquo;</em>,
            ],
            [
              <strong key="t4" style={{ color: "#8B7340" }}>Al-Samad (Le Suffisant)</strong>,
              <span key="t5">Allah est Celui dont toute chose a besoin, et qui n&rsquo;a besoin de rien.</span>,
              <em key="t6" style={{ color: "#5F8A6B" }}>&laquo; De quoi ai-je l&rsquo;impression d&rsquo;avoir desesperement besoin en ce moment ? Pourquoi ? &raquo;</em>,
            ],
            [
              <strong key="t7" style={{ color: "#8B7340" }}>Lam yalid wa lam yulad</strong>,
              <span key="t8">Il n&rsquo;engendre pas et n&rsquo;est pas engendre.</span>,
              <em key="t9" style={{ color: "#5F8A6B" }}>&laquo; Qu&rsquo;est-ce que je cree dans ma vie qui devrait plutot naitre de Lui ? &raquo;</em>,
            ],
            [
              <strong key="t10" style={{ color: "#8B7340" }}>Wa lam yakul-lahu kufuwan ahad</strong>,
              <span key="t11">Et nul ne Lui est egal.</span>,
              <em key="t12" style={{ color: "#5F8A6B" }}>&laquo; A qui ou quoi est-ce que j&rsquo;accorde une importance egale a Allah dans ma vie ? &raquo;</em>,
            ],
          ]}
        />
      </Reveal>

      <Reveal delay={0.45}>
        <MeditationTimer
          steps={TAJALLI_STEPS}
          title="Meditation du Tajalli &mdash; L'Inversion"
          subtitle="Choisissez un verset. Lisez-le lentement. Laissez le miroir operer."
          buttonText="Demarrer"
        />
      </Reveal>

      <Reveal delay={0.5}>
        <JournalCard label="JOURNAL DU TAJALLI">
          <p className="mb-4 text-sm" style={{ color: "#7A6E63", fontStyle: "italic" }}>
            Remplissez votre journal <strong>avant ou apres</strong> la meditation &mdash; a votre rythme.
          </p>
          <textarea
            placeholder="Quel verset avez-vous choisi ? Qu'est-ce qui vous a touche en premier ?"
            className="mb-4"
          />
          <textarea
            placeholder="Que vous revele ce verset a propos de vous-meme ? Soyez honnete."
            className="mb-4"
          />
          <textarea
            placeholder="Quelle action concrete pouvez-vous entreprendre suite a cette decouverte ?"
          />
        </JournalCard>
      </Reveal>
    </ParallaxSection>
  );
}
