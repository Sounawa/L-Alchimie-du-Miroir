"use client";

import { Reveal, SectionTitle, SectionSubtitle, BodyText, BookQuote, InfoBox } from "./shared";

const MASTERS_TABLE = [
  {
    name: "Al-Ghazālī",
    quote: "\u00ab La méditation est le miroir du c\u0153ur. \u00bb",
    concept: "Murāqaba — la veille du c\u0153ur",
  },
  {
    name: "Ibn al-Qayyim",
    quote: "\u00ab Le Coran est la nourriture de l\u2019âme et sa médecine. \u00bb",
    concept: "Tadabbur — la rumination profonde",
  },
  {
    name: "Ibn \u2018Arabī",
    quote: "\u00ab Chaque verset est un miroir qui te révèle un aspect de ton Seigneur \u2014 et donc de toi-même. \u00bb",
    concept: "Tajallī \u2014 la théophanie du texte",
  },
];

export function Introduction() {
  return (
    <section id="introduction" className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionTitle>Introduction</SectionTitle>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionSubtitle>Pourquoi ce livre ?</SectionSubtitle>
        </Reveal>

        <Reveal delay={0.15}>
          <BodyText>
            Il existe un paradoxe troublant dans la manière dont nous lisons le Coran
            aujourd&rsquo;hui. Des millions de musulmans le récitent chaque jour, avec une ferveur
            sincère, et pourtant quelque chose semble manquer. La lecture est souvent rapide,
            mécanique, attrapée dans l&rsquo;urgence de &laquo; finir la sourate &raquo; avant la
            prière. Le Coran est traité comme un texte à consommer plutôt qu&rsquo; comme un miroir
            à contempler.
          </BodyText>
        </Reveal>

        <Reveal delay={0.2}>
          <BodyText>
            Les maîtres spirituels de l&rsquo;Islam — Al-Ghazālī, Ibn al-Qayyim, Ibn &lsquo;Arabī —
            n&rsquo;ont jamais envisagé la lecture du Coran de cette façon. Pour eux, le Coran
            n&rsquo;était pas simplement un livre à comprendre intellectuellement. C&rsquo;était un
            être vivant, une présence qui parlait directement à l&rsquo;âme du lecteur, à condition
            que celui-ci s&rsquo;approche avec les dispositions intérieures appropriées.
          </BodyText>
        </Reveal>

        <Reveal delay={0.25}>
          <BodyText>
            Ce livre vous propose de retrouver cette dimension perdue : la méditation coranique
            comme alchimie de l&rsquo;âme. Non pas une simple lecture pieuse, mais une pratique
            structurée qui transforme progressivement le lecteur en un miroir capable de refléter
            la lumière divine.
          </BodyText>
        </Reveal>

        <Reveal delay={0.3}>
          <BookQuote
            text="Le Coran est un océan sans rivage. Celui qui y plonge avec son intellect seul en ressort épuisé. Mais celui qui y plonge avec son âme en ressort transformé."
            author="Ibn 'Arabī"
            source="Al-Futūḥāt al-Makkiyya"
          />
        </Reveal>

        <Reveal delay={0.35}>
          <SectionSubtitle>Ce que disent les maîtres</SectionSubtitle>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="my-8 overflow-hidden rounded-xl shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr style={{
                    background: "linear-gradient(135deg, var(--navy), var(--navy-light))",
                    color: "#FFF8E7",
                  }}>
                    {["Maître", "Citation Clé", "Concept Central"].map((h) => (
                      <th key={h} className="px-5 py-4 text-left text-xs uppercase tracking-wider font-semibold"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MASTERS_TABLE.map((row, i) => (
                    <tr key={row.name} className="transition-colors duration-200"
                      style={{
                        borderBottom: "1px solid rgba(184,146,62,0.1)",
                        background: i % 2 === 1 ? "rgba(184,146,62,0.03)" : "transparent",
                      }}
                    >
                      <td className="px-5 py-4 align-top font-semibold">{row.name}</td>
                      <td className="px-5 py-4 align-top italic" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "15px" }}>
                        {row.quote}
                      </td>
                      <td className="px-5 py-4 align-top italic" style={{ color: "var(--gold-dark)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "15px" }}>
                        {row.concept}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <InfoBox title="Ce que contient ce livre" variant="sage" icon="&#128214;">
            <BodyText className="!mb-0">
              Ce guide vous propose une méthode en <strong>4 phases progressives</strong>, inspirée
              directement des enseignements des maîtres soufis. Chaque phase est accompagnée
              d&rsquo;exercices pratiques, de méditations guidées avec minuteur, et d&rsquo;espaces
              d&rsquo;écriture pour votre journal personnel. Vous y trouverez également un programme
              de 21 jours pour intégrer la pratique dans votre quotidien.
            </BodyText>
          </InfoBox>
        </Reveal>
      </div>
    </section>
  );
}
