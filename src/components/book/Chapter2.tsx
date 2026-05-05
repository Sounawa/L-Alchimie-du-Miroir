"use client";

import { Reveal, ParallaxSection, H1, H2, Body, Divider, Quote, Callout, Step, JournalCard, MeditationTimer } from "./shared";

const FANA_STEPS = [
  { icon: "\ud83e\uddd8", label: "Installez-vous", duration: 15 },
  { icon: "\ud83c\udf2c\ufe0f", label: "Respirez profondement", duration: 30 },
  { icon: "\ud83c\udf0a", label: "Nommez vos vagues", duration: 120 },
  { icon: "\ud83d\udca7", label: "Plongez dans l'Ocean", duration: 60 },
  { icon: "\ud83c\udf05", label: "Revenez doucement", duration: 30 },
];

export function Chapter2() {
  return (
    <ParallaxSection bg="warm" id="chapitre-2">
      <Reveal>
        <H1>Chapitre II</H1>
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
          Phase 1 : L&rsquo;Effacement (Fana)
        </p>
        <div className="arabic-display text-center mb-8">{"\u0641\u0646\u0627\u0621"}</div>
      </Reveal>

      <Reveal delay={0.1}>
        <Quote
          text="L&rsquo;ego est le plus epais des voiles entre le serviteur et son Seigneur. Tant que tu te vois, tu ne Le vois pas. Quand tu t&rsquo;effaces, Lui seul demeure."
          author="Al-Ghazali"
          source="Ihya' 'Ulum al-Din"
        />
      </Reveal>

      <Reveal delay={0.15}>
        <H2>Comprendre le Fana</H2>
        <Body>
          Le mot <span className="arabic-inline">{"\u0641\u0646\u0627\u0621"}</span> (fana) signifie litteralement
          &laquo; aneantissement &raquo; ou &laquo; effacement &raquo;. Dans la tradition
          spirituelle islamique, il designe l&rsquo;etat ou le moi &mdash; avec ses pensees, ses
          desirs, ses peurs &mdash; se dissout suffisamment pour laisser place a la Presence divine.
        </Body>
        <Body>
          Ne vous effrayez pas de ce terme. Il ne s&rsquo;agit pas de detruire votre
          personnalite ni de devenir un zombie spirituel. Le fana est un{" "}
          <strong>moment de silence interieur</strong> &mdash; un instant ou les chuchotements de
          l&rsquo;ego se taisent et ou le coeur peut enfin entendre autre chose que lui-meme.
        </Body>
        <Body>
          Imaginez que vous etes dans une piece remplie de bruit &mdash; la radio, la television,
          des conversations. Vous entendez une voix a l&rsquo;exterieur, mais vous ne pouvez
          pas la distinguer. Le fana, c&rsquo;est le moment ou tout s&rsquo;eteint. Et la,
          vous entendez enfin.
        </Body>
      </Reveal>

      <Reveal delay={0.25}>
        <Callout variant="sage" title="L'analogie du lac" icon="&#128161;">
          <Body className="!mb-0">
            Imaginez un lac agite par des vagues. Le reflet de la lune est deforme, fragmente,
            invisible. Chaque vague est une pensee, une emotion, un desir. Quand le lac se
            calme &mdash; quand les vagues s&rsquo;apaisent &mdash; le reflet de la lune apparait, clair et
            parfait. Le fana, c&rsquo;est l&rsquo;apaisement des vagues.
          </Body>
        </Callout>
      </Reveal>

      <Divider />

      <Reveal delay={0.3}>
        <H2>La Methode de l'Ocean</H2>
        <Body>
          Voici une meditation guidee pour experimenter le fana. Elle dure environ 5 minutes
          et se pratique idealement le matin, apres Fajr.
        </Body>
        <div className="my-6 space-y-3.5">
          <Step number={1} title="Asseyez-vous confortablement" description="Installez-vous dans une position detendue mais eveillee. Le dos droit, les mains sur les genoux. Fermez les yeux ou gardez le regarde baisse vers le Coran ouvert devant vous." />
          <Step number={2} title="Respirez profondement (30 secondes)" description="Inspirez lentement par le nez pendant 4 secondes. Retenez 4 secondes. Expirez lentement par la bouche pendant 6 secondes. Repetez 4 fois. Avec chaque expiration, imaginez que vous relachez une couche de tension." />
          <Step number={3} title="Nommez vos vagues (2 minutes)" description="Quand une pensee surgit, ne la combattez pas. Nommez-la simplement : &laquo; pensee &raquo;, &laquo; inquietude &raquo;, &laquo; souvenir &raquo;, &laquo; desir &raquo;. Comme un surfeur qui observe les vagues sans se laisser emporter. Ne vous attachez a aucune." />
          <Step number={4} title="Plongez dans l'Ocean (1 minute)" description="Quand les pensees se sont espacees, prononcez interieurement, tres doucement : &laquo; Allah &raquo;. Pas comme un mot, mais comme un appel. Comme un naufrage qui appelle a l&rsquo;aide. Laissez ce nom resonner dans votre coeur." />
          <Step number={5} title="Revenez doucement (30 secondes)" description="Ne vous precipitez pas pour ouvrir les yeux. Restez un instant dans ce silence. Puis, lentement, prenez conscience de votre corps, de la piece autour de vous. Ouvrez les yeux. Remerciez Allah pour ce moment." />
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <MeditationTimer
          steps={FANA_STEPS}
          title="Meditation du Fana &mdash; L'Effacement"
          subtitle="Trouvez un endroit calme. Allongez-vous ou asseyez-vous confortablement."
          buttonText="Commencer"
        />
      </Reveal>

      <Reveal delay={0.5}>
        <JournalCard label="JOURNAL DU FANA">
          <p className="mb-4 text-sm" style={{ color: "#7A6E63", fontStyle: "italic" }}>
            Remplissez votre journal <strong>avant ou apres</strong> la meditation &mdash; a votre rythme.
          </p>
          <textarea
            placeholder="Que s'est-il passe pendant la meditation ? Avez-vous ressenti un apaisement, ou au contraire plus d'agitation ? Soyez honnete."
            className="mb-4"
          />
          <textarea
            placeholder="Quelles 'vagues' (pensees, emotions) sont revenues le plus souvent ? Y a-t-il un theme recurrent ?"
            className="mb-4"
          />
          <textarea
            placeholder="Avez-vous eu un moment de silence interieur, meme bref ? Decrivez-le avec vos propres mots."
          />
        </JournalCard>
      </Reveal>

      <Reveal delay={0.55}>
        <Callout variant="gold" title="A savoir" icon="&#128276;">
          <Body>
            C&rsquo;est tout a fait normal de : ressentir de la somnolence, avoir l&rsquo;esprit
            qui vagabonde, s&rsquo;ennuyer, ou ne rien sentir du tout. La meditation est un
            entrainement &mdash; soyez indulgent avec vous-meme.
          </Body>
          <Body className="!mb-0">
            Si quelque chose vous met mal a l&rsquo;aise : il est toujours bon de faire une pause,
            de faire ses ablutions, de reciter les sourates Al-Falaq et Al-Nas (les deux
            protectrices), et d&rsquo;en parler a une personne de confiance. Votre bien-etre
            passe avant tout.
          </Body>
        </Callout>
      </Reveal>
    </ParallaxSection>
  );
}
