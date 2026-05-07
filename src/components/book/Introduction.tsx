"use client";

import { Reveal, ParallaxSection, H1, H2, Body, Divider, Quote, Callout, PremiumTable, JournalCard } from "./shared";

export function Introduction() {
  return (
    <ParallaxSection bg="warm" id="introduction">
      <Reveal>
        <H1>Introduction</H1>
      </Reveal>

      <Reveal delay={0.1}>
        <H2>Pourquoi ce livre ?</H2>
      </Reveal>

      <Reveal delay={0.15}>
        <Body>
          Il existe un paradoxe troublant dans la maniere dont nous lisons le Coran
          aujourd&rsquo;hui. Des millions de musulmans le recitent chaque jour, avec une ferveur
          sincere, et pourtant quelque chose semble manquer. La lecture est souvent rapide,
          mecanique, attrapee dans l&rsquo;urgence de &laquo; finir la sourate &raquo; avant la
          priere. Le Coran est traite comme un texte a consommer plutot que comme un miroir
          a contempler.
        </Body>
      </Reveal>

      <Reveal delay={0.2}>
        <Body>
          Les maitres spirituels de l&rsquo;Islam &mdash; Al-Ghazali, Ibn al-Qayyim, Ibn &lsquo;Arabi &mdash;
          n&rsquo;ont jamais envisage la lecture du Coran de cette facon. Pour eux, le Coran
          n&rsquo;etait pas simplement un livre a comprendre intellectuellement. C&rsquo;etait un
          etre vivant, une presence qui parlait directement a l&rsquo;ame du lecteur, a condition
          que celui-ci s&rsquo;approche avec les dispositions interieures appropriees.
        </Body>
      </Reveal>

      <Reveal delay={0.25}>
        <Body>
          Ce livre vous propose de retrouver cette dimension perdue : la meditation coranique
          comme alchimie de l&rsquo;ame. Non pas une simple lecture pieuse, mais une pratique
          structuree qui transforme progressivement le lecteur en un miroir capable de reflechir
          la lumiere divine.
        </Body>
      </Reveal>

      <Divider />

      <Reveal delay={0.3}>
        <Quote
          text="Le Coran est un ocean sans rivage. Celui qui y plonge avec son intellect seul en ressort epuise. Mais celui qui y plonge avec son ame en ressort transforme."
          author="Ibn 'Arabi"
          source="Al-Futuhatal-Makkiyya"
        />
      </Reveal>

      <Reveal delay={0.35}>
        <H2>Ce que disent les maitres</H2>
      </Reveal>

      <Reveal delay={0.4}>
        <PremiumTable
          headers={["Maitre", "Citation Cle", "Concept Central"]}
          rows={[
            [
              <strong key="m1">Al-Ghazali</strong>,
              <span key="m2">&laquo; La meditation est le miroir du coeur. &raquo;</span>,
              <em key="m3" style={{ color: "#8B7340" }}>Murqaba &mdash; la veille du coeur</em>,
            ],
            [
              <strong key="m4">Ibn al-Qayyim</strong>,
              <span key="m5">&laquo; Le Coran est la nourriture de l&rsquo;ame et sa medecine. &raquo;</span>,
              <em key="m6" style={{ color: "#8B7340" }}>Tadabbur &mdash; la rumination profonde</em>,
            ],
            [
              <strong key="m7">Ibn &lsquo;Arabi</strong>,
              <span key="m8">&laquo; Chaque verset est un miroir qui te revele un aspect de ton Seigneur &mdash; et donc de toi-meme. &raquo;</span>,
              <em key="m9" style={{ color: "#8B7340" }}>Tajalli &mdash; la theophanie du texte</em>,
            ],
          ]}
        />
      </Reveal>

      <Divider />

      <Reveal delay={0.45}>
        <Callout variant="sage" title="Ce que contient ce livre" icon="&#128214;">
          <Body className="!mb-0">
            Ce guide vous propose une methode en <strong>4 phases progressives</strong>, inspiree
            directement des enseignements des maitres soufis. Chaque phase est accompagnee
            d&rsquo;exercices pratiques, de meditations guidees avec minuteur, et d&rsquo;espaces
            d&rsquo;ecriture pour votre journal personnel. Vous y trouverez egalement un programme
            de 21 jours pour integrer la pratique dans votre quotidien.
          </Body>
        </Callout>
      </Reveal>
    </ParallaxSection>
  );
}
