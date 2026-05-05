"use client";

import { Reveal, SectionTitle, SectionSubtitle, BodyText, BookQuote, InfoBox, StepCard } from "./shared";
import { MeditationTimer } from "./MeditationTimer";

const FANA_STEPS = [
  { icon: "\ud83e\uddd8", label: "Installez-vous", duration: 15 },
  { icon: "\ud83c\udf2c\ufe0f", label: "Respirez profond\u00e9ment", duration: 30 },
  { icon: "\ud83c\udf0a", label: "Nommez vos vagues", duration: 120 },
  { icon: "\ud83d\udca7", label: "Plongez dans l\u2019Oc\u00e9an", duration: 60 },
  { icon: "\ud83c\udf05", label: "Revenez doucement", duration: 30 },
];

export function Chapter2() {
  return (
    <section id="chapitre-2" className="py-20 md:py-28 px-6 md:px-8" style={{ background: "var(--cream-dark)" }}>
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionTitle>Chapitre II</SectionTitle>
          <p className="text-center mb-4 italic text-xl" style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "var(--gold-dark)",
          }}>
            Phase 1 : L&rsquo;Effacement (Fana)
          </p>
          <div className="arabic-display text-center mb-8">فناء</div>
        </Reveal>

        <Reveal delay={0.1}>
          <BookQuote
            text="L\u2019ego est le plus \u00e9pais des voiles entre le serviteur et son Seigneur. Tant que tu te vois, tu ne Le vois pas. Quand tu t\u2019effaces, Lui seul demeure."
            author="Al-Ghaz\u0101l\u012b"
            source="I\u1e25y\u0101\u2019 \u2018Ul\u016bm al-D\u012bn"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <SectionSubtitle>Comprendre le Fana</SectionSubtitle>
          <BodyText>
            Le mot <span className="arabic-inline">فناء</span> (fana) signifie littéralement
            &laquo; anéantissement &raquo; ou &laquo; effacement &raquo;. Dans la tradition
            spirituelle islamique, il désigne l&rsquo;état où le moi — avec ses pensées, ses
            désirs, ses peurs — se dissout suffisamment pour laisser place à la Présence divine.
          </BodyText>
          <BodyText>
            Ne vous effrayez pas de ce terme. Il ne s&rsquo;agit pas de détruire votre
            personnalité ni de devenir un zombie spirituel. Le fana est un{" "}
            <strong>moment de silence intérieur</strong> — un instant où les chuchotements de
            l&rsquo;ego se taisent et où le c\u0153ur peut enfin entendre autre chose que lui-même.
          </BodyText>
          <BodyText>
            Imaginez que vous êtes dans une pièce remplie de bruit — la radio, la télévision,
            des conversations. Vous entendez une voix à l&rsquo;extérieur, mais vous ne pouvez
            pas la distinguer. Le fana, c&rsquo;est le moment où tout s&rsquo;éteint. Et là,
            vous entendez enfin.
          </BodyText>
        </Reveal>

        <Reveal delay={0.25}>
          <InfoBox title="L\u2019analogie du lac" variant="sage" icon="&#128161;">
            <BodyText className="!mb-0">
              Imaginez un lac agité par des vagues. Le reflet de la lune est déformé, fragmenté,
              invisible. Chaque vague est une pensée, une émotion, un désir. Quand le lac se
              calme — quand les vagues s&rsquo;apaisent — le reflet de la lune apparaît, clair et
              parfait. Le fana, c&rsquo;est l&rsquo;apaisement des vagues.
            </BodyText>
          </InfoBox>
        </Reveal>

        <Reveal delay={0.3}>
          <SectionSubtitle>La Méthode de l&rsquo;Océan</SectionSubtitle>
          <BodyText>
            Voici une méditation guidée pour expérimenter le fana. Elle dure environ 5 minutes
            et se pratique idéalement le matin, après Fajr.
          </BodyText>
          <div className="my-6 space-y-3.5">
            <StepCard number={1} title="Asseyez-vous confortablement" description="Installez-vous dans une position d\u00e9tendue mais \u00e9veill\u00e9e. Le dos droit, les mains sur les genoux. Fermez les yeux ou gardez le regard baiss\u00e9 vers le Coran ouvert devant vous." />
            <StepCard number={2} title="Respirez profond\u00e9ment (30 secondes)" description="Inspirez lentement par le nez pendant 4 secondes. Retenez 4 secondes. Expirez lentement par la bouche pendant 6 secondes. R\u00e9p\u00e9tez 4 fois. Avec chaque expiration, imaginez que vous rel\u00e2chez une couche de tension." />
            <StepCard number={3} title="Nommez vos vagues (2 minutes)" description="Quand une pens\u00e9e surgit, ne la combattez pas. Nommez-la simplement : \u00ab pens\u00e9e \u00bb, \u00ab inqui\u00e9tude \u00bb, \u00ab souvenir \u00bb, \u00ab d\u00e9sir \u00bb. Comme un surfeur qui observe les vagues sans se laisser emporter. Ne vous attachez \u00e0 aucune." />
            <StepCard number={4} title="Plongez dans l\u2019Oc\u00e9an (1 minute)" description="Quand les pens\u00e9es se sont espac\u00e9es, prononcez int\u00e9rieurement, tr\u00e8s doucement : \u00ab All\u0101h \u00bb. Pas comme un mot, mais comme un appel. Comme un naufrag\u00e9 qui appelle \u00e0 l\u2019aide. Laissez ce nom r\u00e9sonner dans votre c\u0153ur." />
            <StepCard number={5} title="Revenez doucement (30 secondes)" description="Ne vous pr\u00e9cipitez pas pour ouvrir les yeux. Restez un instant dans ce silence. Puis, lentement, prenez conscience de votre corps, de la pi\u00e8ce autour de vous. Ouvrez les yeux. Remerciez Allah pour ce moment." />
          </div>
        </Reveal>

        {/* Meditation timer */}
        <Reveal delay={0.4}>
          <MeditationTimer
            steps={FANA_STEPS}
            title="M\u00e9ditation du Fana \u2014 L\u2019Effacement"
            subtitle="Trouvez un endroit calme. Allongez-vous ou asseyez-vous confortablement."
            buttonText="Commencer"
          />
        </Reveal>

        {/* Journal */}
        <Reveal delay={0.5}>
          <div className="relative rounded-2xl p-8 md:p-9 my-10"
            style={{
              background: "linear-gradient(#FFFFFF 0%, #F5EDD8 100%)",
              border: "2px solid var(--gold)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          >
            <span
              className="absolute -top-3.5 left-7 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider"
              style={{ fontFamily: "var(--font-inter), sans-serif", background: "var(--gold)" }}
            >
              &#9999;\ufe0f JOURNAL DU FANA
            </span>
            <p className="mb-4 italic text-sm" style={{ opacity: 0.65 }}>
              &#9997;\ufe0f Remplissez votre journal <strong>avant ou après</strong> la méditation — à votre rythme.
            </p>
            <textarea placeholder="Que s\u2019est-il pass\u00e9 pendant la m\u00e9ditation ? Avez-vous ressenti un apaisement, ou au contraire plus d\u2019agitation ? Soyez honn\u00eate." className="w-full rounded-xl p-5 outline-none transition-all duration-300 resize-y mb-4" style={{ minHeight: "100px", background: "white", border: "1px dashed var(--gold)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }} />
            <textarea placeholder="Quelles \u2018vagues\u2019 (pens\u00e9es, \u00e9motions) sont revenues le plus souvent ? Y a-t-il un th\u00e8me r\u00e9current ?" className="w-full rounded-xl p-5 outline-none transition-all duration-300 resize-y mb-4" style={{ minHeight: "100px", background: "white", border: "1px dashed var(--gold)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }} />
            <textarea placeholder="Avez-vous eu un moment de silence int\u00e9rieur, m\u00eame bref ? D\u00e9crivez-le avec vos propres mots." className="w-full rounded-xl p-5 outline-none transition-all duration-300 resize-y" style={{ minHeight: "100px", background: "white", border: "1px dashed var(--gold)", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "16px" }} />
          </div>
        </Reveal>

        <Reveal delay={0.55}>
          <InfoBox title="\u00c0 savoir" variant="gold" icon="&#128276;">
            <BodyText>
              C&rsquo;est tout à fait normal de : ressentir de la somnolence, avoir l&rsquo;esprit
              qui vagabonde, s&rsquo;ennuyer, ou ne rien sentir du tout. La méditation est un
              entraînement — soyez indulgent avec vous-même.
            </BodyText>
            <BodyText className="!mb-0">
              Si quelque chose vous met mal à l&rsquo;aise : il est toujours bon de faire une pause,
              de faire ses ablutions, de réciter les sourates Al-Falaq et Al-Nas (les deux
              protectrices), et d&rsquo;en parler à une personne de confiance. Votre bien-être
              passe avant tout.
            </BodyText>
          </InfoBox>
        </Reveal>
      </div>
    </section>
  );
}
