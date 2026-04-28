'use client';

import { useRef, useState, useCallback } from 'react';

import Timer from '@/components/book/Timer';
import GuidedMeditation from '@/components/book/GuidedMeditation';
import ExerciseBox, { WritingArea } from '@/components/book/ExerciseBox';
import QuoteBlock from '@/components/book/QuoteBlock';
import Callout from '@/components/book/Callout';
import NumberedSteps, { Step } from '@/components/book/NumberedSteps';
import PhaseCard from '@/components/book/PhaseCard';
import GlossaryCard from '@/components/book/GlossaryCard';
import OrnamentDivider from '@/components/book/OrnamentDivider';
import BookTable from '@/components/book/BookTable';
import { CheckboxItem } from '@/components/book/CheckboxItem';
import { PromptChip } from '@/components/book/MunajatWriter';
import ProgressTracker from '@/components/book/ProgressTracker';
import { useToast } from '@/hooks/use-toast';

export default function Home() {
  const munajatRef = useRef<HTMLTextAreaElement>(null);
  const [munajatText, setMunajatText] = useState('');
  const [startDate, setStartDate] = useState(() => {
    const d = new Date();
    return d.toISOString().split('T')[0];
  });
  const { toast } = useToast();

  const insertPrompt = useCallback((text: string) => {
    const textarea = munajatRef.current;
    if (textarea) {
      const current = textarea.value;
      const separator = current.length > 0 ? '\n' : '';
      const newValue = current + separator + text + ' ';
      setMunajatText(newValue);
      setTimeout(() => {
        textarea.focus();
        textarea.selectionStart = textarea.selectionEnd = newValue.length;
      }, 0);
    }
  }, []);

  const saveMunajat = useCallback(() => {
    if (!munajatText.trim()) {
      toast({
        title: 'Rien à sauvegarder',
        description: 'Écrivez quelque chose avant de sauvegarder.',
      });
      return;
    }
    const entry = {
      text: munajatText,
      date: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem('munajat-entries') || '[]');
    existing.push(entry);
    localStorage.setItem('munajat-entries', JSON.stringify(existing));
    toast({
      title: '✨ Munajat sauvegardé',
      description: 'Votre dialogue intime a été conservé dans votre journal.',
    });
  }, [munajatText, toast]);

  return (
    <div className="book-body">
      <div className="book-container">

        {/* ======================== 1. COVER PAGE ======================== */}
        <section
          className="relative flex flex-col items-center justify-center text-center px-8 py-20"
          style={{
            minHeight: '90vh',
            background: 'linear-gradient(180deg, #1B2A4A 0%, #0D1829 50%, #1B2A4A 100%)',
          }}
        >
          {/* Animated mirror emoji */}
          <div
            className="text-8xl md:text-9xl mb-10"
            style={{ animation: 'glow 3s ease-in-out infinite alternate' }}
          >
            🪞
          </div>

          {/* Title */}
          <h1
            className="mb-6"
            style={{
              fontFamily: 'var(--font-amiri)',
              fontSize: 'clamp(36px, 6vw, 56px)',
              color: '#DAA520',
              textShadow: '0 0 40px rgba(218, 165, 32, 0.3)',
              lineHeight: 1.2,
            }}
          >
            L&apos;Alchimie du Miroir
          </h1>

          {/* Subtitle */}
          <p
            className="mb-10"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(18px, 3vw, 24px)',
              color: '#FFF8E7',
              opacity: 0.8,
              fontStyle: 'italic',
            }}
          >
            Méditer le Coran avec l&apos;Âme
          </p>

          {/* Level badge */}
          <span
            className="inline-block mb-12"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#DAA520',
              border: '1.5px solid rgba(218, 165, 32, 0.5)',
              borderRadius: '999px',
              padding: '10px 28px',
            }}
          >
            ✦ Niveau 1 : Initiation ✦
          </span>

          {/* Author line */}
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '16px',
              color: '#FFF8E7',
              opacity: 0.5,
              fontStyle: 'italic',
              marginBottom: '8px',
            }}
          >
            Inspiré des enseignements de
          </p>
          <p
            style={{
              fontFamily: 'var(--font-amiri)',
              fontSize: '20px',
              color: '#DAA520',
              opacity: 0.7,
            }}
          >
            Al-Ghazālī • Ibn al-Qayyim • Ibn &apos;Arabī
          </p>

          {/* Footer */}
          <p
            className="absolute bottom-8"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#FFF8E7',
              opacity: 0.3,
            }}
          >
            Guide Pratique Interactif
          </p>
        </section>

        {/* ======================== 2. TABLE OF CONTENTS ======================== */}
        <section className="book-page">
          <h1 className="book-h1">Sommaire</h1>

          <div className="my-8 space-y-1">
            {[
              ['Introduction', '3', 'introduction'],
              ['Chapitre I — Les Fondations & Garde-fous', '5', 'chapitre-1'],
              ['Chapitre II — Phase 1 : L\'Effacement (Fana)', '9', 'chapitre-2'],
              ['Chapitre III — Phase 2 : L\'Inversion (Tajalli)', '13', 'chapitre-3'],
              ['Chapitre IV — Phase 3 : Le Dialogue (Munajat)', '17', 'chapitre-4'],
              ['Chapitre V — Phase 4 : La Béance (Le Désert)', '21', 'chapitre-5'],
              ['Chapitre VI — Programme sur 21 Jours', '25', 'chapitre-6'],
              ['Annexes', '29', 'annexes'],
            ].map(([title, page, anchor], i) => (
              <a
                key={i}
                href={`#${anchor}`}
                className="flex justify-between items-baseline py-3 px-4 rounded-lg transition-all duration-200 hover:bg-gold-primary/5"
                style={{
                  borderBottom: '1px dotted rgba(184, 134, 11, 0.25)',
                  fontFamily: 'var(--font-cormorant)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <span
                  style={{
                    fontSize: '17px',
                    color: '#2C2C2C',
                  }}
                >
                  {title}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    color: '#8B6914',
                    fontWeight: 500,
                  }}
                >
                  {page}
                </span>
              </a>
            ))}
          </div>

          <OrnamentDivider>❧ ❧ ❧</OrnamentDivider>

          <p
            className="text-center italic"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '16px',
              color: '#5A5A5A',
            }}
          >
            &laquo; Celui qui se connaît soi-même connaît son Seigneur. &raquo;
          </p>

          <span className="page-number">2</span>
        </section>

        {/* ======================== 3. INTRODUCTION ======================== */}
        <section id="introduction" className="book-page">
          <h1 className="book-h1">Introduction</h1>

          <h2 className="book-h2">Pourquoi ce livre ?</h2>

          <p className="book-p">
            Il existe un paradoxe troublant dans la manière dont nous lisons le Coran aujourd&apos;hui.
            Des millions de musulmans le récitent chaque jour, avec une ferveur sincère, et pourtant
            quelque chose semble manquer. La lecture est souvent rapide, mécanique, attrapée dans
            l&apos;urgence de &laquo; finir la sourate &raquo; avant la prière. Le Coran est traité
            comme un texte à consommer plutôt qu&apos; comme un miroir à contempler.
          </p>

          <p className="book-p">
            Les maîtres spirituels de l&apos;Islam — Al-Ghazālī, Ibn al-Qayyim, Ibn &apos;Arabī —
            n&apos;ont jamais envisagé la lecture du Coran de cette façon. Pour eux, le Coran
            n&apos;était pas simplement un livre à comprendre intellectuellement. C&apos;était un
            être vivant, une présence qui parlait directement à l&apos;âme du lecteur, à condition
            que celui-ci s&apos;approche avec les dispositions intérieures appropriées.
          </p>

          <p className="book-p">
            Ce livre vous propose de retrouver cette dimension perdue : la méditation coranique
            comme alchimie de l&apos;âme. Non pas une simple lecture pieuse, mais une pratique
            structurée qui transforme progressivement le lecteur en un miroir capable de refléter
            la lumière divine.
          </p>

          <QuoteBlock cite="— Ibn 'Arabī, Al-Futūḥāt al-Makkiyya">
            &laquo; Le Coran est un océan sans rivage. Celui qui y plonge avec son intellect seul
            en ressort épuisé. Mais celui qui y plonge avec son âme en ressort transformé. &raquo;
          </QuoteBlock>

          <h2 className="book-h2">Ce que disent les maîtres</h2>

          <BookTable
            headers={['Maître', 'Citation Clé', 'Concept Central']}
            rows={[
              [
                <strong key="m1">Al-Ghazālī</strong>,
                <span key="c1">&laquo; La méditation est le miroir du cœur. &raquo;</span>,
                <em key="k1">Murāqaba — la veille du cœur</em>,
              ],
              [
                <strong key="m2">Ibn al-Qayyim</strong>,
                <span key="c2">&laquo; Le Coran est la nourriture de l&apos;âme et sa médecine. &raquo;</span>,
                <em key="k2">Tadabbur — le rumination profonde</em>,
              ],
              [
                <strong key="m3">Ibn 'Arabī</strong>,
                <span key="c3">&laquo; Chaque verset est un miroir qui te révèle un aspect de ton Seigneur — et donc de toi-même. &raquo;</span>,
                <em key="k3">Tajallī — la théophanie du texte</em>,
              ],
            ]}
          />

          <Callout type="info" title="Ce que contient ce livre">
            <p className="book-p" style={{ marginBottom: 0 }}>
              Ce guide vous propose une méthode en <strong>4 phases progressives</strong>, inspirée
              directement des enseignements des maîtres soufis. Chaque phase est accompagnée
              d&apos;exercices pratiques, de méditations guidées avec minuteur, et d&apos;espaces
              d&apos;écriture pour votre journal personnel. Vous y trouverez également un programme
              de 21 jours pour intégrer la pratique dans votre quotidien.
            </p>
          </Callout>

          <OrnamentDivider />

          <span className="page-number">3</span>
        </section>

        {/* ======================== 4. CHAPTER I — FOUNDATIONS ======================== */}
        <section id="chapitre-1" className="book-page">
          <h1 className="book-h1">Chapitre I</h1>
          <p
            className="text-center mb-8"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '22px',
              color: '#8B6914',
              fontStyle: 'italic',
            }}
          >
            Les Fondations &amp; Garde-fous
          </p>

          <Callout type="danger" title="⚠️ Garde-fou spirituel essentiel">
            <p className="book-p" style={{ marginBottom: '12px' }}>
              La méditation coranique n&apos;est <strong>pas du soufisme dévié</strong>, ni une
              innovation blâmable (bid&apos;a). C&apos;est une pratique authentiquement ancrée
              dans le Coran et la Sunna, mais qui nécessite des garde-fous.
            </p>
            <p className="book-p" style={{ marginBottom: '12px' }}>
              <strong>Ne jamais :</strong>
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginBottom: '12px' }}>
              <li>Prétendre avoir des visions ou des révélations</li>
              <li>Considérer ses états spirituels comme une preuve de supériorité</li>
              <li>Négliger les obligations religieuses (prière, jeûne, etc.)</li>
              <li>Pratiquer sans guidance d&apos;un savant qualifié si vous êtes débutant</li>
            </ul>
            <p className="book-p" style={{ marginBottom: 0 }}>
              <strong>Objectif unique :</strong> rapprocher votre cœur de Dieu, pas de vous-même.
            </p>
          </Callout>

          <h2 className="book-h2">Les 5 Règles d&apos;Or</h2>

          <NumberedSteps>
            <Step title="L&apos;intention (Niyya)">
              Avant chaque session, formulez intérieurement : &laquo; Ô Allah, je médite Ton
              Livre pour me rapprocher de Toi, pas pour paraître ou pour éprouver des états
              spirituels. &raquo;
            </Step>
            <Step title="L&apos;humilité (Tawāḍu&apos;)">
              Approchez le Coran comme un serviteur approche son maître — avec la conscience de
              votre ignorance et de votre besoin. Le Coran n&apos;est pas un objet d&apos;étude,
              c&apos;est une rencontre.
            </Step>
            <Step title="La patience (Ṣabr)">
              Les fruits de la méditation ne viennent pas immédiatement. Parfois, pendant des
              semaines, vous ne ressentirez rien. C&apos;est normal. La transformation se fait
              en profondeur, pas en surface.
            </Step>
            <Step title="L&apos;ancrage dans la Sunna">
              Ne séparez jamais la méditation de la pratique prophétique. La prière, le dhikr,
              la recherche de connaissance — tout doit rester connecté.
            </Step>
            <Step title="Le retour à Dieu (Ināba)">
              Après chaque session, prenez un moment pour demander pardon et renouveler votre
              engagement. La méditation n&apos;est pas une fin en soi — c&apos;est un moyen
              de revenir à Lui.
            </Step>
          </NumberedSteps>

          <h2 className="book-h2">Qui peut pratiquer ?</h2>

          <BookTable
            headers={['Profil', 'Prérequis', 'Phase recommandée']}
            rows={[
              [
                <span key="p1">🔥 Débutant absolu</span>,
                <span key="r1">Aucune expérience de méditation</span>,
                <span key="a1"><strong>Phase 1 (Fana)</strong> uniquement, 10 min/jour</span>,
              ],
              [
                <span key="p2">📖 Pratiquant régulier</span>,
                <span key="r2">Prière établie, dhikr quotidien</span>,
                <span key="a2"><strong>Phases 1-3</strong>, 20-30 min/jour</span>,
              ],
              [
                <span key="p3">🎓 Avancé</span>,
                <span key="r3">Sous guidance d&apos;un shaykh</span>,
                <span key="a3"><strong>Toutes les phases</strong>, y compris la Béance</span>,
              ],
              [
                <span key="p4">⚠️ Personne en difficulté psychologique</span>,
                <span key="r4">Accompagnement thérapeutique nécessaire</span>,
                <span key="a4"><strong>Phases 1-2 uniquement</strong>, avec supervision</span>,
              ],
            ]}
          />

          <h2 className="book-h2">Préparer votre espace</h2>

          <p className="book-p">
            Avant de commencer votre première méditation, préparez un espace physique dédié.
            Cela n&apos;a pas besoin d&apos;être grandiose — un coin de votre chambre suffit.
          </p>

          <CheckboxItem id="chk-space">Un endroit calme, à l&apos;abri des distractions</CheckboxItem>
          <CheckboxItem id="chk-quran">Votre mushaf (Coran en arabe) — de préférence en papier</CheckboxItem>
          <CheckboxItem id="chk-journal">Un carnet ou ce journal numérique pour vos écrits</CheckboxItem>
          <CheckboxItem id="chk-perfume">Du parfum (non obligatoire mais recommandé dans la Sunna)</CheckboxItem>
          <CheckboxItem id="chk-time">Un moment fixe dans la journée (de préférence avant Fajr ou après Maghrib)</CheckboxItem>
          <CheckboxItem id="chk-wudu">Les ablutions (wudū) — une condition de respect et de concentration</CheckboxItem>

          <ExerciseBox title="Engagement initial">
            <p className="book-p" style={{ marginBottom: '16px', fontWeight: 600 }}>
              Prenez un moment pour répondre sincèrement à ces questions :
            </p>
            <WritingArea
              placeholder="Pourquoi souhaitez-vous méditer le Coran ? Quelle est votre intention profonde ?"
              minHeight="120px"
            />
            <div style={{ height: '16px' }} />
            <WritingArea
              placeholder="Quelle est votre plus grande difficulté dans votre relation actuelle avec le Coran ?"
              minHeight="120px"
            />
            <div style={{ height: '16px' }} />
            <WritingArea
              placeholder="Quel est votre engagement concret pour les 21 prochains jours ? (ex: 10 min chaque matin avant Fajr)"
              minHeight="120px"
            />
          </ExerciseBox>

          <span className="page-number">5</span>
        </section>

        {/* ======================== 5. CHAPTER II — PHASE 1: FANA ======================== */}
        <section id="chapitre-2" className="book-page">
          <h1 className="book-h1">Chapitre II</h1>
          <p
            className="text-center mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '22px',
              color: '#8B6914',
              fontStyle: 'italic',
            }}
          >
            Phase 1 : L&apos;Effacement (Fana)
          </p>

          <div className="arabic-text">فناء</div>

          <QuoteBlock cite="— Al-Ghazālī, Iḥyā' 'Ulūm al-Dīn">
            &laquo; L&apos;ego est le plus épais des voiles entre le serviteur et son Seigneur.
            Tant que tu te vois, tu ne Le vois pas. Quand tu t&apos;effaces, Lui seul demeure. &raquo;
          </QuoteBlock>

          <h2 className="book-h2">Comprendre le Fana</h2>

          <p className="book-p">
            Le mot <span className="arabic-inline">فناء</span> (fana) signifie littéralement
            &laquo; anéantissement &raquo; ou &laquo; effacement &raquo;. Dans la tradition
            spirituelle islamique, il désigne l&apos;état où le moi — avec ses pensées,
            ses désirs, ses peurs — se dissout suffisamment pour laisser place à la Présence
            divine.
          </p>

          <p className="book-p">
            Ne vous effrayez pas de ce terme. Il ne s&apos;agit pas de détruire votre personnalité
            ni de devenir un zombie spirituel. Le fana est un <strong>moment de silence
            intérieur</strong> — un instant où les chuchotements de l&apos;ego se taisent et où
            le cœur peut enfin entendre autre chose que lui-même.
          </p>

          <p className="book-p">
            Imaginez que vous êtes dans une pièce remplie de bruit — la radio, la télévision,
            des conversations. Vous entendez une voix à l&apos;extérieur, mais vous ne pouvez
            pas la distinguer. Le fana, c&apos;est le moment où tout s&apos;éteint. Et là,
            vous entendez enfin.
          </p>

          <Callout type="info" title="💡 L&apos;analogie du lac">
            <p className="book-p" style={{ marginBottom: 0 }}>
              Imaginez un lac agité par des vagues. Le reflet de la lune est déformé, fragmenté,
              invisible. Chaque vague est une pensée, une émotion, un désir. Quand le lac se
              calme — quand les vagues s&apos;apaisent — le reflet de la lune apparaît,
              clair et parfait. Le fana, c&apos;est l&apos;apaisement des vagues.
            </p>
          </Callout>

          <h2 className="book-h2">La Méthode de l&apos;Océan</h2>

          <p className="book-p">
            Voici une méditation guidée pour expérimenter le fana. Elle dure environ 5 minutes
            et se pratique idéalement le matin, après Fajr.
          </p>

          <NumberedSteps>
            <Step title="Asseyez-vous confortablement">
              Installez-vous dans une position détendue mais éveillée. Le dos droit, les mains
              sur les genoux. Fermez les yeux ou gardez le regard baissé vers le Coran ouvert
              devant vous.
            </Step>
            <Step title="Respirez profondément (30 secondes)">
              Inspirez lentement par le nez pendant 4 secondes. Retenez 4 secondes. Expirez
              lentement par la bouche pendant 6 secondes. Répétez 4 fois. Avec chaque expiration,
              imaginez que vous relâchez une couche de tension.
            </Step>
            <Step title="Nommez vos vagues (2 minutes)">
              Quand une pensée surgit, ne la combattez pas. Nommez-la simplement :
              &laquo; pensée &raquo;, &laquo; inquiétude &raquo;, &laquo; souvenir &raquo;,
              &laquo; désir &raquo;. Comme un surfeur qui observe les vagues sans se laisser
              emporter. Ne vous attachez à aucune.
            </Step>
            <Step title="Plongez dans l&apos;Océan (1 minute)">
              Quand les pensées se sont espacées, prononcez intérieurement, très doucement :
              &laquo; Allāh &raquo;. Pas comme un mot, mais comme un appel. Comme un naufragé
              qui appelle à l&apos;aide. Laissez ce nom résonner dans votre cœur.
            </Step>
            <Step title="Revenez doucement (30 secondes)">
              Ne vous précipitez pas pour ouvrir les yeux. Restez un instant dans ce silence.
              Puis, lentement, prenez conscience de votre corps, de la pièce autour de vous.
              Ouvrez les yeux. Remerciez Allah pour ce moment.
            </Step>
          </NumberedSteps>

          <ExerciseBox title="Journal du Fana">
            <p className="book-p" style={{ marginBottom: '12px', opacity: 0.7, fontStyle: 'italic', fontSize: '14px' }}>
              ✍️ Remplissez votre journal <strong>avant ou après</strong> la méditation — à votre rythme.
            </p>
            <WritingArea
              placeholder="Que s'est-il passé pendant la méditation ? Avez-vous ressenti un apaisement, ou au contraire plus d'agitation ? Soyez honnête."
              minHeight="120px"
            />
            <div style={{ height: '16px' }} />
            <WritingArea
              placeholder="Quelles 'vagues' (pensées, émotions) sont revenues le plus souvent ? Y a-t-il un thème récurrent ?"
              minHeight="120px"
            />
            <div style={{ height: '16px' }} />
            <WritingArea
              placeholder="Avez-vous eu un moment de silence intérieur, même bref ? Décrivez-le avec vos propres mots."
              minHeight="120px"
            />
          </ExerciseBox>

          <Callout type="warning" title="🔔 À savoir">
            <p className="book-p" style={{ marginBottom: '12px' }}>
              <strong>C&apos;est tout à fait normal de :</strong> ressentir de la somnolence,
              avoir l&apos;esprit qui vagabonde, s&apos;ennuyer, ou ne rien sentir du tout.
              La méditation est un entraînement — soyez indulgent avec vous-même.
            </p>
            <p className="book-p" style={{ marginBottom: 0 }}>
              <strong>Si quelque chose vous met mal à l&apos;aise :</strong> il est toujours bon
              de faire une pause, de faire ses ablutions, de réciter les sourates Al-Falaq et
              Al-Nas (les deux protectrices), et d&apos;en parler à une personne de confiance.
              Votre bien-être passe avant tout.
            </p>
          </Callout>

          <GuidedMeditation
            id="fana-guided"
            title="🪞 Méditation guidée du Fana — L'Effacement"
            subtitle="Trouvez un endroit calme. Allongez-vous ou asseyez-vous confortablement."
            steps={[
              {
                title: 'Installez-vous',
                description: 'Dos droit, mains sur les genoux. Fermez les yeux ou gardez le regard baissé vers le Coran.',
                duration: 15,
                icon: '🧘',
              },
              {
                title: 'Respirez profondément',
                description: 'Inspirez 4 sec par le nez. Retenez 4 sec. Expirez 6 sec par la bouche. Relâchez chaque couche de tension.',
                duration: 30,
                icon: '🌬️',
              },
              {
                title: 'Nommez vos vagues',
                description: 'Quand une pensée surgit, nommez-la : « pensée », « inquiétude », « souvenir ». Ne vous attachez à aucune.',
                duration: 120,
                icon: '🌊',
              },
              {
                title: 'Plongez dans l\'Océan',
                description: 'Prononcez intérieurement « Allāh » très doucement. Comme un appel. Laissez ce nom résonner dans votre cœur.',
                duration: 60,
                icon: '💧',
              },
              {
                title: 'Revenez doucement',
                description: 'Restez un instant dans le silence. Prenez conscience de votre corps. Ouvrez les yeux. Remerciez Allah.',
                duration: 30,
                icon: '🌅',
              },
            ]}
          />

          <span className="page-number">9</span>
        </section>

        {/* ======================== 6. CHAPTER III — PHASE 2: TAJALLI ======================== */}
        <section id="chapitre-3" className="book-page">
          <h1 className="book-h1">Chapitre III</h1>
          <p
            className="text-center mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '22px',
              color: '#8B6914',
              fontStyle: 'italic',
            }}
          >
            Phase 2 : L&apos;Inversion (Tajalli)
          </p>

          <div className="arabic-text">تجلي</div>

          <QuoteBlock cite="— Ibn 'Arabī">
            &laquo; La Règle du Miroir : tout ce que tu perçois dans le Coran te parle d&apos;abord
            de toi-même. Quand le verset dit &laquo; les injustes &raquo;, cherche d&apos;abord
            l&apos;injustice en toi. Quand il dit &laquo; les croyants &raquo;, cherche d&apos;abord
            la foi en toi. Le Coran est un miroir — et un miroir ne montre pas l&apos;autre, il
            montre toi. &raquo;
          </QuoteBlock>

          <h2 className="book-h2">Le Paradigme du Miroir</h2>

          <p className="book-p">
            La plupart d&apos;entre nous lisent le Coran de manière &laquo; classique &raquo; : nous
            cherchons ce que le texte dit <em>sur le monde</em>, <em>sur les autres</em>,
            <em> sur l&apos;histoire</em>. C&apos;est une lecture légitime — mais incomplète.
          </p>

          <p className="book-p">
            Le paradigme du miroir propose une <strong>inversion radicale</strong> : lire le Coran
            comme si chaque verset était adressé personnellement à vous, comme si chaque attribut
            divin révélait en miroir un attribut caché de votre propre âme.
          </p>

          <div
            className="my-8 p-6 md:p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(27, 42, 74, 0.04), rgba(184, 134, 11, 0.04))',
              border: '2px solid rgba(184, 134, 11, 0.2)',
            }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl" style={{ background: 'rgba(176, 132, 140, 0.06)', borderLeft: '4px solid #B0848C' }}>
                <h3 className="book-h3" style={{ marginTop: 0, marginBottom: '10px', fontSize: '16px' }}>
                  ❌ Approche classique
                </h3>
                <p style={{ fontSize: '15px', color: '#5A5A5A', margin: 0 }}>
                  &laquo; Ce verset parle des hypocrites — ceux qui disent avec leur bouche
                  ce qu&apos;ils n&apos;ont pas dans leur cœur. &raquo;
                </p>
              </div>
              <div className="p-5 rounded-xl" style={{ background: 'rgba(107, 142, 107, 0.06)', borderLeft: '4px solid #6B8E6B' }}>
                <h3 className="book-h3" style={{ marginTop: 0, marginBottom: '10px', fontSize: '16px' }}>
                  ✅ Inversion en Miroir
                </h3>
                <p style={{ fontSize: '15px', color: '#5A5A5A', margin: 0 }}>
                  &laquo; En quoi mes paroles sont-elles parfois hypocrites ? Quand est-ce que
                  je dis quelque chose que je ne ressens pas vraiment ? &raquo;
                </p>
              </div>
            </div>
          </div>

          <h2 className="book-h2">Comment pratiquer l&apos;Inversion</h2>

          <NumberedSteps>
            <Step title="Choisissez un verset court">
              Pour débuter, choisissez un verset d&apos;une sourate que vous connaissez
              déjà. La sourate Al-Ikhlas est un excellent point de départ.
            </Step>
            <Step title="Lisez le verset en arabe, puis en traduction">
              Laissez les mots résonner. Ne cherchez pas à analyser intellectuellement.
              Laissez le verset descendre de la tête vers le cœur.
            </Step>
            <Step title="Posez la question miroir">
              &laquo; Qu&apos;est-ce que ce verset révèle de moi ? Quelle part de mon âme
              est éclairée — ou mise en lumière — par ce verset ? &raquo;
            </Step>
            <Step title="Accueillez ce qui vient">
              Ne jugez pas ce qui remonte. Si une émotion surgit — culpabilité, joie, tristesse,
              surprise — accueillez-la. Elle est le miroir en train de fonctionner.
            </Step>
            <Step title="Écrivez votre découverte">
              Prenez votre carnet. Écrivez ce que le verset vous a révélé. Pas une
              interprétation savante — mais ce que <em>votre cœur</em> a entendu.
            </Step>
          </NumberedSteps>

          <div className="arabic-text">قُلْ هُوَ اللَّهُ أَحَدٌ</div>
          <p className="arabic-translation">
            &laquo; Dis : Lui, Allah, est Un. &raquo; — Sourate Al-Ikhlas (112:1)
          </p>

          <BookTable
            headers={['Attribut Divin', 'Analyse Classique', 'Inversion en Miroir']}
            rows={[
              [
                <strong key="a1">Al-Aḥad (L&apos;Unique)</strong>,
                <span key="c1">Allah est Un, sans associé. Il n&apos;a ni enfant ni partenaire.</span>,
                <span key="m1">&laquo; Qu&apos;est-ce qui, dans ma vie, me pousse à chercher d&apos;autres sources de sécurité que Lui ? &raquo;</span>,
              ],
              [
                <strong key="a2">Al-Ṣamad (Le Suffisant)</strong>,
                <span key="c2">Allah est Celui dont toute chose a besoin, et qui n&apos;a besoin de rien.</span>,
                <span key="m2">&laquo; De quoi ai-je l&apos;impression d&apos;avoir désespérément besoin en ce moment ? Pourquoi ? &raquo;</span>,
              ],
              [
                <strong key="a3">Lam yalid wa lam yūlad</strong>,
                <span key="c3">Il n&apos;engendre pas et n&apos;est pas engendré.</span>,
                <span key="m3">&laquo; Qu&apos;est-ce que je crée dans ma vie qui devrait plutôt naître de Lui ? &raquo;</span>,
              ],
              [
                <strong key="a4">Wa lam yakul-lahū kufuwan aḥad</strong>,
                <span key="c4">Et nul ne Lui est égal.</span>,
                <span key="m4">&laquo; À qui ou quoi est-ce que j&apos;accorde une importance égale à Allah dans ma vie ? &raquo;</span>,
              ],
            ]}
          />

          <ExerciseBox title="Journal du Tajalli">
            <p className="book-p" style={{ marginBottom: '12px', opacity: 0.7, fontStyle: 'italic', fontSize: '14px' }}>
              ✍️ Remplissez votre journal <strong>avant ou après</strong> la méditation — à votre rythme.
            </p>
            <WritingArea
              placeholder="Quel verset avez-vous choisi pour cette méditation ? Pourquoi celui-ci ?"
              minHeight="120px"
            />
            <div style={{ height: '16px' }} />
            <WritingArea
              placeholder="Qu'est-ce que le verset vous a révélé sur vous-même ? Soyez précis."
              minHeight="120px"
            />
            <div style={{ height: '16px' }} />
            <WritingArea
              placeholder="Quelle action concrète cette révélation vous invite-t-elle à prendre ?"
              minHeight="120px"
            />
          </ExerciseBox>

          <Timer
            id="tajalli"
            duration={420}
            label="🪞 Méditation du Tajalli — L'Inversion"
            subtitle="Choisissez un verset. Lisez-le lentement. Laissez le miroir opérer."
          />

          <span className="page-number">13</span>
        </section>

        {/* ======================== 7. CHAPTER IV — PHASE 3: MUNAJAT ======================== */}
        <section id="chapitre-4" className="book-page">
          <h1 className="book-h1">Chapitre IV</h1>
          <p
            className="text-center mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '22px',
              color: '#8B6914',
              fontStyle: 'italic',
            }}
          >
            Phase 3 : Le Dialogue (Munajat)
          </p>

          <div className="arabic-text">مناجاة</div>

          <QuoteBlock cite="— Ibn al-Qayyim, Madārij al-Sālikīn">
            &laquo; La munajat est la conversation secrète entre le serviteur et son Seigneur.
            C&apos;est le moment où le cœur dépose ses fardeaux et reçoit en échange la paix
            que seul Allah peut donner. &raquo;
          </QuoteBlock>

          <h2 className="book-h2">Comprendre la Munajat</h2>

          <p className="book-p">
            Le mot <span className="arabic-inline">مناجاة</span> (munajat) vient de la racine
            arabe qui signifie &laquo; converser intimement &raquo;. C&apos;est la forme la
            plus personnelle et la plus intime de la prière — un dialogue cœur à cœur avec
            votre Créateur, sans formulation prescrite, sans intermédiaire.
          </p>

          <p className="book-p">
            Contrairement à la duʿa&apos; formelle, qui a ses formulations traditionnelles,
            la munajat est <strong>votre parole à vous</strong>. C&apos;est le moment où vous
            parlez à Allah comme vous parleriez à votre plus proche confident — avec honnêteté,
            avec vulnérabilité, sans filtre.
          </p>

          <p className="book-p">
            Les prophètes pratiquaient la munajat. Le Prophète ﷺ se levait la nuit pour prier
            jusqu&apos;à ce que ses pieds enflent. Et quand on lui demandait pourquoi, alors
            qu&apos;Allah lui avait déjà pardonné tous ses péchés, il répondait :
            &laquo; Ne suis-je pas un serviteur reconnaissant ? &raquo;
          </p>

          <Callout type="info" title="💡 Règle d&apos;or : il n&apos;y a pas de mauvaise munajat">
            <p className="book-p" style={{ marginBottom: 0 }}>
              Vous pouvez vous plaindre. Vous pouvez douter. Vous pouvez poser des questions.
              Vous pouvez être en colère. Allah connaît déjà ce qu&apos;il y a dans votre cœur
              — la munajat ne lui apprend rien de nouveau. Elle vous apprend quelque chose
              sur <em>vous-même</em>. L&apos;important n&apos;est pas la beauté des mots,
              c&apos;est la sincérité de l&apos;intention.
            </p>
          </Callout>

          <h3 className="book-h3">Si vous ne savez pas comment commencer...</h3>

          <p className="book-p">
            Cliquez sur l&apos;un des invites ci-dessous pour commencer votre munajat.
            Le texte sera inséré dans la zone d&apos;écriture plus bas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
            <PromptChip text="Ô Allah, je me sens perdu en ce moment..." onClick={insertPrompt} />
            <PromptChip text="Seigneur, pardonne-moi pour ce que j'ai fait aujourd'hui..." onClick={insertPrompt} />
            <PromptChip text="Mon Dieu, je ne comprends pas ce que Tu me fais traverser..." onClick={insertPrompt} />
            <PromptChip text="Ô Allah, je Te demande la paix du cœur..." onClick={insertPrompt} />
            <PromptChip text="Seigneur, montre-moi ce qui est caché en moi..." onClick={insertPrompt} />
            <PromptChip text="Ô Allah, je veux me rapprocher de Toi mais je ne sais pas comment..." onClick={insertPrompt} />
          </div>

          <h3 className="book-h3">Exemples de Munajat</h3>

          <div className="space-y-4 my-6">
            <div
              className="p-5 rounded-xl"
              style={{
                background: 'rgba(107, 142, 107, 0.05)',
                borderLeft: '4px solid #6B8E6B',
              }}
            >
              <p style={{ fontStyle: 'italic', color: '#2C2C2C', margin: 0, fontSize: '16px' }}>
                &laquo; Ô Allah, Tu sais que je T&apos;aime, mais Tu sais aussi que mon amour
                est faible. Renforce-le. Tu sais que je veux me rapprocher de Toi, mais mes
                pieds glissent. Maintiens-les. Tu sais que je suis imparfait — mais Tu es Celui
                qui parfait ce qui est brisé. &raquo;
              </p>
            </div>
            <div
              className="p-5 rounded-xl"
              style={{
                background: 'rgba(107, 142, 107, 0.05)',
                borderLeft: '4px solid #6B8E6B',
              }}
            >
              <p style={{ fontStyle: 'italic', color: '#2C2C2C', margin: 0, fontSize: '16px' }}>
                &laquo; Seigneur, je suis fatigué de porter ce poids. Je ne sais pas si c&apos;est
                Ton épreuve ou ma propre faiblesse. Mais je sais que Tu es plus proche de moi
                que ma veine jugulaire. Alors je me confie à Toi. Non pas parce que je suis
                fort, mais parce que Tu es le Seul Fort. &raquo;
              </p>
            </div>
            <div
              className="p-5 rounded-xl"
              style={{
                background: 'rgba(107, 142, 107, 0.05)',
                borderLeft: '4px solid #6B8E6B',
              }}
            >
              <p style={{ fontStyle: 'italic', color: '#2C2C2C', margin: 0, fontSize: '16px' }}>
                &laquo; Ô Toi qui m&apos;as créé à partir de rien — qui me donnes la vie
                à chaque respiration — ouvre mon cœur à Ta lumière. Fais que je Te voie dans
                chaque verset. Fais que chaque prière soit une rencontre. &raquo;
              </p>
            </div>
          </div>

          <ExerciseBox title="Votre Munajat">
            <p className="book-p">
              Utilisez cet espace pour écrire votre dialogue intime avec Allah. Vous pouvez
              commencer par l&apos;un des invites ci-dessus, ou écrire librement. Soyez
              sincère — c&apos;est le seul critère qui compte.
            </p>
            <textarea
              ref={munajatRef}
              value={munajatText}
              onChange={(e) => setMunajatText(e.target.value)}
              placeholder="Ô Allah..."
              className="w-full rounded-xl p-5 outline-none transition-all duration-300 resize-y"
              style={{
                minHeight: '250px',
                background: 'white',
                border: '1px dashed #B8860B',
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '16px',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderStyle = 'solid';
                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184, 134, 11, 0.15)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderStyle = 'dashed';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <div className="mt-4 text-right">
              <button
                onClick={saveMunajat}
                className="px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  fontFamily: 'var(--font-inter)',
                  background: 'linear-gradient(135deg, #6B8E6B, #8FB88F)',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(107, 142, 107, 0.3)',
                }}
              >
                💾 Sauvegarder dans mon journal
              </button>
            </div>
          </ExerciseBox>

          <Timer
            id="munajat"
            duration={300}
            label="🪞 Méditation de la Munajat — Le Dialogue"
            subtitle="Parlez à Allah avec votre cœur. Pas besoin de beaux mots."
          />

          <span className="page-number">17</span>
        </section>

        {/* ======================== 8. CHAPTER V — PHASE 4: BEANCE ======================== */}
        <section id="chapitre-5" className="book-page">
          <h1 className="book-h1">Chapitre V</h1>
          <p
            className="text-center mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '22px',
              color: '#8B6914',
              fontStyle: 'italic',
            }}
          >
            Phase 4 : La Béance (Le Désert)
          </p>

          <QuoteBlock cite="— Attribué à Abū Yazīd al-Bistāmī">
            &laquo; Le plus grand obstacle entre le serviteur et son Seigneur n&apos;est pas
            le péché — c&apos;est la certitude qu&apos;il a de Lui. Car cette certitude
            elle-même devient un voile entre lui et l&apos;Inconnaissable. &raquo;
          </QuoteBlock>

          <h2 className="book-h2">Comprendre la Béance</h2>

          <p className="book-p">
            La Béance est la phase la plus paradoxale — et la plus difficile à décrire.
            Il ne s&apos;agit plus de faire quelque chose, mais de <strong>cesser de faire</strong>.
            Plus de méditation, plus de lecture, plus de dhikr, plus de munajat. Juste…
            le silence.
          </p>

          <div
            className="my-8 p-8 md:p-12 rounded-2xl text-center"
            style={{
              background: 'linear-gradient(180deg, #1B2A4A 0%, #0D1829 100%)',
              border: '2px solid rgba(218, 165, 32, 0.3)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-amiri)',
                fontSize: 'clamp(24px, 4vw, 32px)',
                color: '#DAA520',
                margin: 0,
                lineHeight: 1.6,
                textShadow: '0 0 20px rgba(218, 165, 32, 0.2)',
              }}
            >
              Ne faites rien.
              <br />
              N&apos;attendez rien.
            </p>
          </div>

          <h2 className="book-h2">Le paradoxe de l&apos;émotion</h2>

          <p className="book-p">
            Voici ce qui arrive presque toujours pendant la Béance : l&apos;émotion. Des larmes
            qui viennent sans raison. Une tristesse profonde mais douce. Une joie inexplicable.
            Ou alors — et c&apos;est ce qui déroute le plus — <strong>absolument rien</strong>.
            Un vide total.
          </p>

          <p className="book-p">
            Ibn al-Qayyim distingue deux états spirituels fondamentaux :
          </p>

          <BookTable
            headers={['État', 'Signification', 'Ce que vous ressentez']}
            rows={[
              [
                <strong key="s1"><span className="arabic-inline">بسط</span> Bast (Expansion)</strong>,
                <span key="d1">L&apos;âme s&apos;ouvre, la lumière abonde, la joie spirituelle est intense.</span>,
                <span key="f1">Plénitude, gratitude, facilité dans l&apos;adoration, amour d&apos;Allah.</span>,
              ],
              [
                <strong key="s2"><span className="arabic-inline">قبض</span> Qabdh (Contraction)</strong>,
                <span key="d2">L&apos;âme se resserre, la lumière semble se retirer, la sécheresse spirituelle s&apos;installe.</span>,
                <span key="f2">Sécheresse, difficulté dans la prière, sentiment d&apos;abandon.</span>,
              ],
            ]}
          />

          <p className="book-p">
            Les deux états sont <strong>également nécessaires</strong>. Le bast sans le qabdh
            mène à l&apos;orgueil spirituel. Le qabdh sans le bast mène au désespoir. Le
            chemin véritable passe par les deux.
          </p>

          <QuoteBlock cite="— Ibn 'Aṭā' Allāh al-Iskandarī, Al-Ḥikam">
            &laquo; Ne rejette pas la sécheresse (qabdh), car elle est le berceau de la
            connaissance. Et ne t&apos;enfuis pas de la tristesse, car elle est la monture
            de la certitude. &raquo;
          </QuoteBlock>

          <h2 className="book-h2">Instructions de la Béance</h2>

          <NumberedSteps>
            <Step title="Asseyez-vous en silence">
              Pas de Coran ouvert devant vous. Pas de dhikr sur les lèvres. Juste vous,
              assis dans le silence. Les yeux mi-clos ou ouverts sur un point fixe.
            </Step>
            <Step title="Abandonnez toute attente">
              C&apos;est la partie la plus difficile. Ne cherchez pas à ressentir quelque chose.
              Ne cherchez pas à recevoir une illumination. Ne cherchez même pas &laquo; le
              silence &raquo;. Abandonnez le besoin de résultat.
            </Step>
            <Step title="Observez le vide">
              Quand le vide se présente — ce sentiment de néant intérieur — ne le fuyez pas.
              Asseyez-vous avec lui comme on s&apos;assoit avec un hôte silencieux. Ne
              demandez rien. Ne refusez rien.
            </Step>
            <Step title="Restez 3 minutes (au début)">
              Trois minutes de véritable silence intérieur sont plus précieuses que trois
              heures de prière mécanique. Commencez petit. La durée viendra d&apos;elle-même.
            </Step>
            <Step title="Terminez sans commentaire">
              Quand vous sortez de la Béance, ne cherchez pas à analyser ce qui s&apos;est
              passé (ou n&apos;est pas passé). Ne dites pas &laquo; ça n&apos;a pas
              marché &raquo; ou &laquo; j&apos;ai senti quelque chose &raquo;. Juste
              remerciez Allah et passez à votre journée.
            </Step>
          </NumberedSteps>

          <Timer
            id="beance"
            duration={180}
            label="🪞 La Béance — Le Désert"
            subtitle="Asseyez-vous. Ne faites rien. N'attendez rien."
            startLabel="Démarrer le Silence"
          />

          <ExerciseBox title="Journal de la Béance">
            <p className="book-p" style={{ marginBottom: '16px', fontWeight: 600 }}>
              Après la Béance, cochez ce que vous avez observé :
            </p>

            <CheckboxItem id="chk-beance1">J&apos;ai ressenti une paix profonde</CheckboxItem>
            <CheckboxItem id="chk-beance2">J&apos;ai ressenti une tristesse ou une sécheresse</CheckboxItem>
            <CheckboxItem id="chk-beance3">Mon esprit était très agité (c&apos;est normal)</CheckboxItem>
            <CheckboxItem id="chk-beance4">J&apos;ai eu un moment de vide total — et ça m&apos;a troublé</CheckboxItem>
            <CheckboxItem id="chk-beance5">Je ne sais pas ce que j&apos;ai ressenti (c&apos;est normal aussi)</CheckboxItem>

            <div style={{ height: '20px' }} />

            <WritingArea
              placeholder="Décrivez avec vos propres mots ce que vous avez vécu pendant la Béance — ou ce que vous n'avez pas vécu. Les deux sont valables."
              minHeight="150px"
            />
          </ExerciseBox>

          <span className="page-number">21</span>
        </section>

        {/* ======================== 9. CHAPTER VI — 21-DAY PROGRAM ======================== */}
        <section id="chapitre-6" className="book-page">
          <h1 className="book-h1">Chapitre VI</h1>
          <p
            className="text-center mb-8"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '22px',
              color: '#8B6914',
              fontStyle: 'italic',
            }}
          >
            Programme sur 21 Jours
          </p>

          <p className="book-p">
            Ce programme progressif vous guide sur 21 jours, avec une nouvelle phase introduite
            chaque semaine. L&apos;objectif n&apos;est pas la perfection, mais la
            <strong> régularité</strong>. Même 5 minutes par jour valent mieux qu&apos;une
            heure par semaine.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            <PhaseCard
              icon="🌊"
              name="Semaine 1 : Fana"
              arabic="فناء"
              description="Apprendre à calmer les vagues de l'esprit. Méditation de l'Effacement quotidienne."
              duration="5 min/jour — 7 jours"
            />
            <PhaseCard
              icon="🪞"
              name="Semaine 2 : Tajalli"
              arabic="تجلي"
              description="Lire le Coran comme un miroir. Pratiquer l'Inversion sur des versets courts."
              duration="7 min/jour — 7 jours"
            />
            <PhaseCard
              icon="💬"
              name="Semaine 3 : Munajat"
              arabic="مناجاة"
              description="Engager le dialogue intime avec Allah. Écrire et vivre la Munajat."
              duration="10 min/jour — 7 jours"
            />
            <PhaseCard
              icon="🏜️"
              name="Jour 21+ : Béance"
              arabic="البيان"
              description="Le silence intérieur. Ne rien faire. Ne rien attendre. Juste être."
              duration="3 min — puis selon votre capacité"
            />
          </div>

          <h2 className="book-h2">Semaine 1 — L&apos;Effacement</h2>

          <BookTable
            headers={['Jour', 'Pratique', 'Durée', 'Focus']}
            rows={[
              ['Jour 1', 'Méditation de l\'Océan (Fana)', '5 min', 'Observer les vagues mentales'],
              ['Jour 2', 'Méditation de l\'Océan + respiration profonde', '5 min', 'Ralentir le rythme intérieur'],
              ['Jour 3', 'Fana avec le nom "Allāh"', '5 min', 'Ancrer la conscience divine'],
              ['Jour 4', 'Fana avant la prière du Fajr', '5 min', 'Lier méditation et prière'],
              ['Jour 5', 'Fana avec le verset "Lâ ilâha illâ Allâh"', '5 min', 'Approfondir le sens'],
              ['Jour 6', 'Fana libre — votre rythme', '5 min', 'Confiance dans la pratique'],
              ['Jour 7', 'Repos — journal de la semaine', '10 min', 'Bilan et intégration'],
            ]}
          />

          <h2 className="book-h2">Semaine 2 — L&apos;Inversion</h2>

          <BookTable
            headers={['Jour', 'Pratique', 'Durée', 'Focus']}
            rows={[
              ['Jour 8', 'Fana (rappel) + Al-Fatiha en miroir', '7 min', 'Première inversion douce'],
              ['Jour 9', 'Al-Ikhlas en miroir (al-Aḥad)', '7 min', 'L\'unicité et ses ramifications'],
              ['Jour 10', 'Al-Ikhlas en miroir (Al-Ṣamad)', '7 min', 'La suffisance divine'],
              ['Jour 11', 'Verset au choix — inversion libre', '7 min', 'Autonomie dans la pratique'],
              ['Jour 12', 'Al-Mulk (1-5) en miroir', '7 min', 'La grandeur et la dépendance'],
              ['Jour 13', 'Deux versets en miroir', '7 min', 'Approfondir la lecture'],
              ['Jour 14', 'Repos — journal de la semaine', '10 min', 'Bilan et intégration'],
            ]}
          />

          <h2 className="book-h2">Semaine 3 — Le Dialogue</h2>

          <BookTable
            headers={['Jour', 'Pratique', 'Durée', 'Focus']}
            rows={[
              ['Jour 15', 'Munajat guidée (invite)', '10 min', 'Premier pas vers le dialogue'],
              ['Jour 16', 'Munajat libre + écriture', '10 min', 'Lâcher la formulation'],
              ['Jour 17', 'Fana + Tajalli + Munajat', '15 min', 'Enchaîner les 3 phases'],
              ['Jour 18', 'Munajat de repentance', '10 min', 'Lâcher les fardeaux'],
              ['Jour 19', 'Munajat de gratitude', '10 min', 'Reconnaître les bienfaits'],
              ['Jour 20', 'Munajat de demande (ḥāja)', '10 min', 'Présenter ses besoins'],
              ['Jour 21', 'Béance + Munajat finale', '15 min', 'Le silence avant la parole'],
            ]}
          />

          <ExerciseBox title="Planification personnelle">
            <p className="book-p">
              Avant de commencer, notez votre plan :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#8B6914',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  📅 Date de début :
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full rounded-xl p-4 outline-none"
                  style={{
                    background: 'white',
                    border: '1px dashed #B8860B',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#8B6914',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  ⏰ Heure de pratique :
                </label>
                <WritingArea
                  placeholder="ex: tous les matins à 5h30"
                  minHeight="48px"
                />
              </div>
            </div>
            <div style={{ height: '16px' }} />
            <WritingArea
              placeholder="Mon engagement pour ces 21 jours :"
              minHeight="120px"
            />
            <div style={{ height: '16px' }} />
            <WritingArea
              placeholder="Quelles sont les 3 plus grandes distractions que je dois anticiper, et comment vais-je les gérer ?"
              minHeight="120px"
            />
          </ExerciseBox>

          <ProgressTracker />

          <span className="page-number">25</span>
        </section>

        {/* ======================== 10. ANNEXES ======================== */}
        <section id="annexes" className="book-page">
          <h1 className="book-h1">Annexes</h1>

          <h2 className="book-h2">Glossaire</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <GlossaryCard
              arabic="تدبر"
              term="Tadabbur"
              pronunciation="ta-dab-bour"
              definition="La rumination profonde — lire le Coran lentement en réfléchissant à chaque mot, chaque sens, chaque implication pour sa propre vie."
            />
            <GlossaryCard
              arabic="تفكر"
              term="Tafakkur"
              pronunciation="ta-fak-kour"
              definition="La réflexion méditative — le processus par lequel le cœur tourne un verset dans tous les sens pour en extraire la sagesse."
            />
            <GlossaryCard
              arabic="فناء"
              term="Fana"
              pronunciation="fa-nâ"
              definition="L'effacement — l'état où l'ego se dissout temporairement, laissant place à la conscience de la Présence divine."
            />
            <GlossaryCard
              arabic="تجلي"
              term="Tajalli"
              pronunciation="ta-jal-li"
              definition="La théophanie — la manifestation de la lumière divine à travers le texte coranique, perçue par le cœur du lecteur."
            />
            <GlossaryCard
              arabic="مناجاة"
              term="Munajat"
              pronunciation="mou-na-jâ"
              definition="Le dialogue intime — la conversation secrète entre le serviteur et son Seigneur, sans formulation prescrite."
            />
            <GlossaryCard
              arabic="مراقبة"
              term="Muraqaba"
              pronunciation="mou-ra-qâ-ba"
              definition="La veille du cœur — la pratique de se sentir sous le regard divin en permanence, avec révérence et amour."
            />
            <GlossaryCard
              arabic="قبض"
              term="Qabdh"
              pronunciation="qab-dh"
              definition="La contraction — un état de sécheresse spirituelle où le cœur ressent un resserrement et un éloignement apparent."
            />
            <GlossaryCard
              arabic="بسط"
              term="Bast"
              pronunciation="bast"
              definition="L'expansion — un état d'ouverture spirituelle où le cœur est inondé de lumière, de joie et de facilité."
            />
          </div>

          <h2 className="book-h2">Modèle de Journal</h2>

          <ExerciseBox title="Journal quotidien type">
            <p className="book-p" style={{ marginBottom: '12px', fontWeight: 600 }}>
              Date : ____ / ____ / 20____
            </p>
            <WritingArea
              placeholder="Quelle(s) phase(s) ai-je pratiquée(s) aujourd'hui ? Pendant combien de temps ?"
              minHeight="100px"
            />
            <div style={{ height: '12px' }} />
            <WritingArea
              placeholder="Qu'est-ce que j'ai ressenti pendant la pratique ? (émotions, pensées, états)"
              minHeight="100px"
            />
            <div style={{ height: '12px' }} />
            <WritingArea
              placeholder="Quelle est la chose la plus importante que j'ai apprise sur moi-même aujourd'hui ?"
              minHeight="100px"
            />
            <div style={{ height: '12px' }} />
            <WritingArea
              placeholder="Quelle est ma prière / mon intention pour demain ?"
              minHeight="100px"
            />
          </ExerciseBox>

          <h2 className="book-h2">Ressources</h2>

          <BookTable
            headers={['Ressource', 'Auteur', 'Description']}
            rows={[
              [
                <strong key="r1">Iḥyā&apos; &apos;Ulūm al-Dīn</strong>,
                <span key="a1">Al-Ghazālī</span>,
                <span key="d1">L&apos;œuvre maîtresse sur la spiritualité islamique. Le livre de la méditation (Kitāb al-Murāqaba) est particulièrement pertinent.</span>,
              ],
              [
                <strong key="r2">Madārij al-Sālikīn</strong>,
                <span key="a2">Ibn al-Qayyim</span>,
                <span key="d2">Un commentaire des stations spirituelles. Essentiel pour comprendre les états de bast et qabdh.</span>,
              ],
              [
                <strong key="r3">Al-Futūḥāt al-Makkiyya</strong>,
                <span key="a3">Ibn &apos;Arabī</span>,
                <span key="d3">Les révélations de la Mecque. Un ouvrage dense, à aborder avec guidance. Le chapitre sur le Coran comme miroir est lumineux.</span>,
              ],
              [
                <strong key="r4">Al-Ḥikam</strong>,
                <span key="a4">Ibn &apos;Aṭā&apos; Allāh</span>,
                <span key="d4">Sentences spirituelles brèves et profondes. Un compagnon quotidien idéal pour la méditation.</span>,
              ],
              [
                <strong key="r5">La purification de l&apos;âme</strong>,
                <span key="a5">Al-Ghazālī (trad.)</span>,
                <span key="d5">Version accessible de l&apos;Ihya, centrée sur les maladies du cœur et leur traitement.</span>,
              ],
            ]}
          />

          <span className="page-number">29</span>
        </section>

        {/* ======================== 11. BACK COVER ======================== */}
        <section
          className="relative flex flex-col items-center justify-center text-center px-8 py-20"
          style={{
            minHeight: '70vh',
            background: 'linear-gradient(180deg, #1B2A4A 0%, #0D1829 50%, #1B2A4A 100%)',
          }}
        >
          <h2
            className="mb-8"
            style={{
              fontFamily: 'var(--font-amiri)',
              fontSize: 'clamp(28px, 5vw, 40px)',
              color: '#DAA520',
              textShadow: '0 0 30px rgba(218, 165, 32, 0.3)',
            }}
          >
            Continuez le Chemin
          </h2>

          <p
            className="max-w-lg mb-8"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '18px',
              color: '#FFF8E7',
              opacity: 0.7,
              lineHeight: 1.8,
            }}
          >
            Ce livre n&apos;est que le premier pas. Les niveaux suivants approfondiront
            chaque phase et introduiront des pratiques avancées : la lecture symbolique du Coran,
            la méditation des Noms divins, et le cheminement vers la proximité spirituelle.
          </p>

          <div className="arabic-text" style={{ color: '#DAA520', fontSize: '28px', margin: '30px 0 10px' }}>
            رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
          </div>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '16px',
              color: '#FFF8E7',
              opacity: 0.5,
              fontStyle: 'italic',
            }}
          >
            &laquo; Seigneur, donne-nous le bien en ce monde et le bien dans l&apos;au-delà,
            et préserve-nous du châtiment du Feu. &raquo;
            <br />
            — Sourate Al-Baqarah (2:201)
          </p>

          <OrnamentDivider>✦ ✦ ✦</OrnamentDivider>

          <p
            className="mb-2"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '14px',
              color: '#FFF8E7',
              opacity: 0.35,
            }}
          >
            L&apos;Alchimie du Miroir — Niveau 1 : Initiation
          </p>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#FFF8E7',
              opacity: 0.2,
            }}
          >
            GUIDE PRATIQUE INTERACTIF
          </p>
        </section>

      </div>
    </div>
  );
}
