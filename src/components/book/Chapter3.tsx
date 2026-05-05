"use client";

import { Reveal, SectionTitle, SectionSubtitle, BodyText, BookQuote, InfoBox, StepCard } from "./shared";
import { MeditationTimer } from "./MeditationTimer";

const TAJALLI_STEPS = [
  { icon: "\ud83d\udd0d", label: "Choisissez un verset", duration: 60 },
  { icon: "\ud83d\udcd6", label: "Lisez lentement", duration: 180 },
  { icon: "\ud83e\uddd8", label: "Posez la question miroir", duration: 120 },
  { icon: "\u270d\ufe0f", label: "\u00c9crivez votre d\u00e9couverte", duration: 60 },
];

const IKHLAS_TABLE = [
  {
    attribute: "Al-A\u1e25ad (L\u2019Unique)",
    classic: "Allah est Un, sans associ\u00e9. Il n\u2019a ni enfant ni partenaire.",
    mirror: "\u00ab Qu\u2019est-ce qui, dans ma vie, me pousse \u00e0 chercher d\u2019autres sources de s\u00e9curit\u00e9 que Lui ? \u00bb",
  },
  {
    attribute: "Al-\u1e62amad (Le Suffisant)",
    classic: "Allah est Celui dont toute chose a besoin, et qui n\u2019a besoin de rien.",
    mirror: "\u00ab De quoi ai-je l\u2019impression d\u2019avoir d\u00e9sesp\u00e9r\u00e9ment besoin en ce moment ? Pourquoi ? \u00bb",
  },
  {
    attribute: "Lam yalid wa lam y\u016blad",
    classic: "Il n\u2019engendre pas et n\u2019est pas engendr\u00e9.",
    mirror: "\u00ab Qu\u2019est-ce que je cr\u00e9e dans ma vie qui devrait plut\u00f4t na\u00eetre de Lui ? \u00bb",
  },
  {
    attribute: "Wa lam yakul-lah\u016b kufuwan a\u1e25ad",
    classic: "Et nul ne Lui est \u00e9gal.",
    mirror: "\u00ab \u00c0 qui ou quoi est-ce que j\u2019accorde une importance \u00e9gale \u00e0 Allah dans ma vie ? \u00bb",
  },
];

export function Chapter3() {
  return (
    <section id="chapitre-3" className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionTitle>Chapitre III</SectionTitle>
          <p className="text-center mb-4 italic text-xl" style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "var(--gold-dark)",
          }}>
            Phase 2 : L&rsquo;Inversion (Tajalli)
          </p>
          <div className="arabic-display text-center mb-8">تجلي</div>
        </Reveal>

        <Reveal delay={0.1}>
          <BookQuote
            text="La Règle du Miroir : tout ce que tu perçois dans le Coran te parle d\u2019abord de toi-même. Quand le verset dit \u00ab les injustes \u00bb, cherche d\u2019abord l\u2019injustice en toi. Quand il dit \u00ab les croyants \u00bb, cherche d\u2019abord la foi en toi. Le Coran est un miroir \u2014 et un miroir ne montre pas l\u2019autre, il montre toi."
            author="Ibn 'Arabī"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <SectionSubtitle>Le Paradigme du Miroir</SectionSubtitle>
          <BodyText>
            La plupart d&rsquo;entre nous lisent le Coran de manière &laquo; classique &raquo; : nous
            cherchons ce que le texte dit <em>sur le monde</em>, <em>sur les autres</em>,{" "}
            <em>sur l&rsquo;histoire</em>. C&rsquo;est une lecture légitime — mais incomplète.
          </BodyText>
          <BodyText>
            Le paradigme du miroir propose une <strong>inversion radicale</strong> : lire le Coran
            comme si chaque verset était adressé personnellement à vous, comme si chaque attribut
            divin révélait en miroir un attribut caché de votre propre âme.
          </BodyText>
        </Reveal>

        {/* Comparison */}
        <Reveal delay={0.2}>
          <div className="my-8 grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border" style={{ background: "rgba(176,132,140,0.05)", borderColor: "rgba(176,132,140,0.2)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--rose-muted)" }}>
                &#10060; Approche classique
              </div>
              <p className="italic text-sm" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#3D342D" }}>
                &laquo; Ce verset parle des hypocrites — ceux qui disent avec leur bouche ce
                qu&rsquo;ils n&rsquo;ont pas dans leur c\u0153ur. &raquo;
              </p>
            </div>
            <div className="p-5 rounded-xl border" style={{ background: "rgba(107,142,107,0.05)", borderColor: "rgba(107,142,107,0.2)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--sage)" }}>
                &#9989; Inversion en Miroir
              </div>
              <p className="italic text-sm" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#3D342D" }}>
                &laquo; En quoi mes paroles sont-elles parfois hypocrites ? Quand est-ce que je
                dis quelque chose que je ne ressens pas vraiment ? &raquo;
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <SectionSubtitle>Comment pratiquer l&rsquo;Inversion</SectionSubtitle>
          <div className="my-6 space-y-3.5">
            <StepCard number={1} title="Choisissez un verset court" description="Pour d\u00e9buter, choisissez un verset d\u2019une sourate que vous connaissez d\u00e9j\u00e0. La sourate Al-Ikhlas est un excellent point de d\u00e9part." />
            <StepCard number={2} title="Lisez le verset en arabe, puis en traduction" description="Laissez les mots r\u00e9sonner. Ne cherchez pas \u00e0 analyser intellectuellement. Laissez le verset descendre de la t\u00eate vers le c\u0153ur." />
            <StepCard number={3} title="Posez la question miroir" description="\u00ab Qu\u2019est-ce que ce verset r\u00e9v\u00e8le de moi ? Quelle part de mon \u00e2me est \u00e9clair\u00e9e \u2014 ou mise en lumi\u00e8re \u2014 par ce verset ? \u00bb" />
            <StepCard number={4} title="Accueillez ce qui vient" description="Ne jugez pas ce qui remonte. Si une \u00e9motion surgit \u2014 culpabilit\u00e9, joie, tristesse, surprise \u2014 accueillez-la. Elle est le miroir en train de fonctionner." />
            <StepCard number={5} title="\u00c9crivez votre d\u00e9couverte" description="Prenez votre carnet. \u00c9crivez ce que le verset vous a r\u00e9v\u00e9l\u00e9. Pas une interpr\u00e9tation savante \u2014 mais ce que votre c\u0153ur a entendu." />
          </div>
        </Reveal>

        {/* Al-Ikhlas analysis */}
        <Reveal delay={0.35}>
          <div className="arabic-display text-center mb-6">قُلْ هُوَ اللَّهُ أَحَدٌ</div>
          <p className="text-center italic mb-8" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#7A6E63", fontSize: "16px" }}>
            &laquo; Dis : Lui, Allah, est Un. &raquo; — Sourate Al-Ikhlas (112:1)
          </p>
          <div className="my-8 overflow-hidden rounded-xl shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(135deg, var(--navy), var(--navy-light))", color: "#FFF8E7" }}>
                    {["Attribut Divin", "Analyse Classique", "Inversion en Miroir"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left text-xs uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {IKHLAS_TABLE.map((row, i) => (
                    <tr key={i} className="transition-colors duration-200"
                      style={{ borderBottom: "1px solid rgba(184,146,62,0.1)", background: i % 2 === 1 ? "rgba(184,146,62,0.03)" : "transparent" }}
                    >
                      <td className="px-5 py-4 align-top font-semibold" style={{ color: "var(--gold-dark)" }}>{row.attribute}</td>
                      <td className="px-5 py-4 align-top" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "15px" }}>{row.classic}</td>
                      <td className="px-5 py-4 align-top italic" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "15px", color: "var(--sage)" }}>{row.mirror}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Timer */}
        <Reveal delay={0.45}>
          <MeditationTimer
            steps={TAJALLI_STEPS}
            title="M\u00e9ditation du Tajalli \u2014 L\u2019Inversion"
            subtitle="Choisissez un verset. Lisez-le lentement. Laissez le miroir op\u00e9rer."
            buttonText="D\u00e9marrer"
          />
        </Reveal>

        {/* Journal */}
        <Reveal delay={0.5}>
          <div className="relative rounded-2xl p-8 md:p-9 my-10" style={{ background: "linear-gradient(#FFFFFF 0%, #F5EDD8 100%)", border: "2px solid var(--gold)", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
            <span className="absolute -top-3.5 left-7 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif", background: "var(--gold)" }}>
              &#9999;\ufe0f JOURNAL DU TAJALLI
            </span>
            <p className="mb-4 italic text-sm" style={{ opacity: 0.65 }}>
              &#9997;\ufe0f Remplissez votre journal <strong>avant ou après</strong> la méditation — à votre rythme.
            </p>
            <textarea placeholder="Quel verset avez-vous choisi ? Qu\u2019est-ce qui vous a touch\u00e9 en premier ?" className="w-full rounded-xl p-5 outline-none transition-all duration-300 resize-y mb-4" style={{ minHeight: "100px", background: "white", border: "1px dashed var(--gold)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }} />
            <textarea placeholder="Que vous r\u00e9v\u00e8le ce verset \u00e0 propos de vous-m\u00eame ? Soyez honn\u00eate." className="w-full rounded-xl p-5 outline-none transition-all duration-300 resize-y mb-4" style={{ minHeight: "100px", background: "white", border: "1px dashed var(--gold)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }} />
            <textarea placeholder="Quelle action concr\u00eate pouvez-vous entreprendre suite \u00e0 cette d\u00e9couverte ?" className="w-full rounded-xl p-5 outline-none transition-all duration-300 resize-y" style={{ minHeight: "100px", background: "white", border: "1px dashed var(--gold)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
