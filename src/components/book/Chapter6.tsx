"use client";

import { useState, useMemo } from "react";
import { Reveal, ParallaxSection, H1, H2, Body, Divider, PremiumTable, JournalCard } from "./shared";

const WEEKS = [
  {
    num: 1,
    title: "L'Effacement",
    arabic: "\u0641\u0646\u0627\u0621",
    icon: "\ud83c\udf0a",
    description: "Apprendre a calmer les vagues de l'esprit. Meditation de l'Effacement quotidienne.",
    duration: "5 min/jour \u2014 7 jours",
    days: [
      { day: "Jour 1", practice: "Meditation de l'Ocean (Fana)", duration: "5 min", focus: "Observer les vagues mentales" },
      { day: "Jour 2", practice: "Meditation de l'Ocean + respiration profonde", duration: "5 min", focus: "Ralentir le rythme interieur" },
      { day: "Jour 3", practice: "Fana avec le nom \u00ab Allah \u00bb", duration: "5 min", focus: "Ancrer la conscience divine" },
      { day: "Jour 4", practice: "Fana avant la priere du Fajr", duration: "5 min", focus: "Lier meditation et priere" },
      { day: "Jour 5", practice: "Fana avec le verset \u00ab La ilaha illa Allah \u00bb", duration: "5 min", focus: "Approfondir le sens" },
      { day: "Jour 6", practice: "Fana libre \u2014 votre rythme", duration: "5 min", focus: "Confiance dans la pratique" },
      { day: "Jour 7", practice: "Repos \u2014 journal de la semaine", duration: "10 min", focus: "Bilan et integration" },
    ],
  },
  {
    num: 2,
    title: "L'Inversion",
    arabic: "\u062a\u062c\u0644\u064a",
    icon: "\ud83e\udd1e",
    description: "Lire le Coran comme un miroir. Pratiquer l'Inversion sur des versets courts.",
    duration: "7 min/jour \u2014 7 jours",
    days: [
      { day: "Jour 8", practice: "Fana (rappel) + Al-Fatiha en miroir", duration: "7 min", focus: "Premiere inversion douce" },
      { day: "Jour 9", practice: "Al-Ikhlas en miroir (al-Ahad)", duration: "7 min", focus: "L'unicite et ses ramifications" },
      { day: "Jour 10", practice: "Al-Ikhlas en miroir (Al-Samad)", duration: "7 min", focus: "La suffisance divine" },
      { day: "Jour 11", practice: "Verset au choix \u2014 inversion libre", duration: "7 min", focus: "Autonomie dans la pratique" },
      { day: "Jour 12", practice: "Al-Mulk (1-5) en miroir", duration: "7 min", focus: "La grandeur et la dependance" },
      { day: "Jour 13", practice: "Deux versets en miroir", duration: "7 min", focus: "Approfondir la lecture" },
      { day: "Jour 14", practice: "Repos \u2014 journal de la semaine", duration: "10 min", focus: "Bilan et integration" },
    ],
  },
  {
    num: 3,
    title: "Le Dialogue",
    arabic: "\u0645\u0646\u0627\u062c\u0627\u0629",
    icon: "\ud83d\udcac",
    description: "Engager le dialogue intime avec Allah. Ecrire et vivre la Munajat.",
    duration: "10 min/jour \u2014 7 jours",
    days: [
      { day: "Jour 15", practice: "Munajat guidee (invite)", duration: "10 min", focus: "Premier pas vers le dialogue" },
      { day: "Jour 16", practice: "Munajat libre + ecriture", duration: "10 min", focus: "Lacher la formulation" },
      { day: "Jour 17", practice: "Fana + Tajalli + Munajat", duration: "15 min", focus: "Enchainer les 3 phases" },
      { day: "Jour 18", practice: "Munajat de repentance", duration: "10 min", focus: "Lacher les fardeaux" },
      { day: "Jour 19", practice: "Munajat de gratitude", duration: "10 min", focus: "Reconnaitre les bienfaits" },
      { day: "Jour 20", practice: "Munajat de demande (haja)", duration: "10 min", focus: "Presenter ses besoins" },
      { day: "Jour 21", practice: "Beance + Munajat finale", duration: "15 min", focus: "Le silence avant la parole" },
    ],
  },
];

export function Chapter6() {
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());

  const stats = useMemo(() => {
    const total = 21;
    const completed = completedDays.size;
    const percent = Math.round((completed / total) * 100);
    let bestStreak = 0;
    let currentStreak = 0;
    for (let i = 1; i <= 21; i++) {
      if (completedDays.has(i)) {
        currentStreak++;
        if (currentStreak > bestStreak) bestStreak = currentStreak;
      } else {
        currentStreak = 0;
      }
    }
    let streak = 0;
    for (let i = 21; i >= 1; i--) {
      if (completedDays.has(i)) streak++;
      else break;
    }
    return { total, completed, percent, streak, bestStreak };
  }, [completedDays]);

  const toggleDay = (dayNum: number) => {
    setCompletedDays((prev) => {
      const next = new Set(prev);
      if (next.has(dayNum)) next.delete(dayNum);
      else next.add(dayNum);
      return next;
    });
  };

  return (
    <ParallaxSection bg="warm" id="chapitre-6">
      <Reveal>
        <H1>Programme sur 21 Jours</H1>
      </Reveal>

      <Reveal delay={0.1}>
        <Body>
          Ce programme progressif vous guide sur 21 jours, avec une nouvelle phase introduite
          chaque semaine. L&rsquo;objectif n&rsquo;est pas la perfection, mais la{" "}
          <strong>regularite</strong>. Meme 5 minutes par jour valent mieux qu&rsquo;une heure
          par semaine.
        </Body>
      </Reveal>

      <Divider />

      <Reveal delay={0.15}>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {WEEKS.map((week) => (
            <div
              key={week.num}
              className="p-5 rounded-2xl premium-card"
            >
              <div className="text-3xl mb-3">{week.icon}</div>
              <h3
                className="font-semibold mb-1"
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "18px",
                  color: "#2C3945",
                }}
              >
                Semaine {week.num} : {week.title}
              </h3>
              <div className="arabic-inline text-sm mb-2">{week.arabic}</div>
              <p
                className="text-xs mb-2"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#6B5E52" }}
              >
                {week.description}
              </p>
              <p
                className="text-xs font-medium"
                style={{ fontFamily: "var(--font-inter), sans-serif", color: "#8B7340" }}
              >
                {week.duration}
              </p>
            </div>
          ))}
        </div>

        <div
          className="p-5 rounded-2xl mb-10"
          style={{
            background: "linear-gradient(145deg, #2C3945 0%, #1E2A35 50%, #2C3945 100%)",
            boxShadow: "0 4px 24px rgba(44,57,69,0.2)",
          }}
        >
          <div className="text-3xl mb-3">{"\ud83c\udfdc\ufe0f"}</div>
          <h3
            className="font-semibold mb-1"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "18px",
              color: "#FAF5ED",
            }}
          >
            Jour 21+ : Beance
          </h3>
          <div className="arabic-inline text-sm mb-2" style={{ color: "#D4A853" }}>{"\u0627\u0644\u0628\u064a\u0627\u0646"}</div>
          <p
            className="text-xs mb-2"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "rgba(250,245,237,0.7)" }}
          >
            Le silence interieur. Ne rien faire. Ne rien attendre. Juste etre.
          </p>
          <p
            className="text-xs font-medium"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "#D4A853" }}
          >
            3 min &mdash; puis selon votre capacite
          </p>
        </div>
      </Reveal>

      <Divider />

      <Reveal delay={0.2}>
        <H2>Suivi de Progression</H2>
        <p className="mb-6 text-sm" style={{ color: "#7A6E63", fontFamily: "var(--font-cormorant), Georgia, serif" }}>
          Cliquez sur un jour pour enregistrer votre pratique
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { label: "Jours completes", value: `${stats.completed}/${stats.total}` },
            { label: "Progression", value: `${stats.percent}%` },
            { label: "Serie actuelle", value: `${stats.streak}` },
            { label: "Meilleure serie", value: `${stats.bestStreak}` },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl text-center premium-card"
            >
              <div
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-inter), sans-serif", color: "#2C3945" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs mt-1"
                style={{ fontFamily: "var(--font-inter), sans-serif", color: "#8C7A6B" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "#E7E5E4" }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${stats.percent}%`,
                background: "linear-gradient(90deg, #8B7340, #C4A265)",
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {Array.from({ length: 21 }, (_, i) => {
            const dayNum = i + 1;
            const isCompleted = completedDays.has(dayNum);
            const weekIndex = Math.floor(i / 7);
            const weekIcons = ["\ud83c\udf0a", "\ud83e\udd1e", "\ud83d\udcac"];
            const icon = weekIndex < 3 ? weekIcons[weekIndex] : "\ud83c\udfdc\ufe0f";

            return (
              <button
                key={dayNum}
                onClick={() => toggleDay(dayNum)}
                className="flex flex-col items-center justify-center py-2.5 rounded-xl border transition-all duration-200 cursor-pointer"
                style={{
                  background: isCompleted ? "rgba(95,138,107,0.1)" : "white",
                  borderColor: isCompleted ? "rgba(95,138,107,0.3)" : "#E7E5E4",
                }}
                title={`Jour ${dayNum}`}
              >
                <span className="text-sm mb-0.5">{icon}</span>
                <span
                  className="text-xs font-medium"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    color: isCompleted ? "#5F8A6B" : "#8C7A6B",
                  }}
                >
                  {dayNum}
                </span>
                {isCompleted && (
                  <span className="text-xs mt-0.5" style={{ color: "#5F8A6B" }}>&#10003;</span>
                )}
              </button>
            );
          })}
        </div>

        <div
          className="flex items-center gap-4 justify-center text-xs"
          style={{ color: "#8C7A6B", fontFamily: "var(--font-inter), sans-serif" }}
        >
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm border" style={{ borderColor: "#E7E5E4", background: "white" }} />
            Non commence
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: "rgba(95,138,107,0.2)", borderColor: "rgba(95,138,107,0.4)", borderWidth: 1 }} />
            Complete
          </span>
        </div>
      </Reveal>

      <Divider />

      {WEEKS.map((week, weekIndex) => (
        <Reveal key={week.num} delay={0.3 + weekIndex * 0.1}>
          <h3
            className="font-semibold mb-4"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "20px",
              color: "#2C3945",
            }}
          >
            Semaine {week.num} &mdash; {week.title}
          </h3>
          <PremiumTable
            headers={["Jour", "Pratique", "Duree", "Focus"]}
            rows={week.days.map((d) => [
              <span key={`d-${d.day}-1`} style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", fontWeight: 500 }}>{d.day}</span>,
              <span key={`d-${d.day}-2`}>{d.practice}</span>,
              <span key={`d-${d.day}-3`} style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", fontWeight: 500, color: "#8B7340" }}>{d.duration}</span>,
              <em key={`d-${d.day}-4`} style={{ fontSize: "14px", color: "#7A6E63" }}>{d.focus}</em>,
            ])}
          />
        </Reveal>
      ))}

      <Divider />

      <Reveal delay={0.6}>
        <JournalCard label="PLANIFICATION PERSONNELLE">
          <p className="mb-4 font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "17px" }}>
            Avant de commencer, notez votre plan :
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#7A6E63" }}>
                Date de debut
              </label>
              <input
                type="text"
                placeholder="JJ / MM / AAAA"
                className="w-full px-4 py-3 rounded-xl outline-none"
                style={{
                  background: "white",
                  border: "1px dashed rgba(196,162,101,0.4)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                }}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#7A6E63" }}>
                Heure de pratique
              </label>
              <input
                type="text"
                placeholder="ex: 05h30 (avant Fajr)"
                className="w-full px-4 py-3 rounded-xl outline-none"
                style={{
                  background: "white",
                  border: "1px dashed rgba(196,162,101,0.4)",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>
        </JournalCard>
      </Reveal>
    </ParallaxSection>
  );
}
