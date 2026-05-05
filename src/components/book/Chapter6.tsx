"use client";

import { Reveal, SectionTitle, SectionSubtitle, BodyText, InfoBox } from "./shared";
import { useState, useMemo } from "react";

const WEEKS = [
  {
    num: 1,
    title: "L\u2019Effacement",
    arabic: "\u0641\u0646\u0627\u0621",
    icon: "\ud83c\udf0a",
    description: "Apprendre \u00e0 calmer les vagues de l\u2019esprit. M\u00e9ditation de l\u2019Effacement quotidienne.",
    duration: "5 min/jour \u2014 7 jours",
    days: [
      { day: "Jour 1", practice: "M\u00e9ditation de l\u2019Oc\u00e9an (Fana)", duration: "5 min", focus: "Observer les vagues mentales" },
      { day: "Jour 2", practice: "M\u00e9ditation de l\u2019Oc\u00e9an + respiration profonde", duration: "5 min", focus: "Ralentir le rythme int\u00e9rieur" },
      { day: "Jour 3", practice: "Fana avec le nom \u201cAll\u0101h\u201d", duration: "5 min", focus: "Ancrer la conscience divine" },
      { day: "Jour 4", practice: "Fana avant la pri\u00e8re du Fajr", duration: "5 min", focus: "Lier m\u00e9ditation et pri\u00e8re" },
      { day: "Jour 5", practice: "Fana avec le verset \u201cL\u00e2 il\u00e2ha ill\u00e2 All\u0101h\u201d", duration: "5 min", focus: "Approfondir le sens" },
      { day: "Jour 6", practice: "Fana libre \u2014 votre rythme", duration: "5 min", focus: "Confiance dans la pratique" },
      { day: "Jour 7", practice: "Repos \u2014 journal de la semaine", duration: "10 min", focus: "Bilan et int\u00e9gration" },
    ],
  },
  {
    num: 2,
    title: "L\u2019Inversion",
    arabic: "\u062a\u062c\u0644\u064a",
    icon: "\ud83e\udd1e",
    description: "Lire le Coran comme un miroir. Pratiquer l\u2019Inversion sur des versets courts.",
    duration: "7 min/jour \u2014 7 jours",
    days: [
      { day: "Jour 8", practice: "Fana (rappel) + Al-Fatiha en miroir", duration: "7 min", focus: "Premi\u00e8re inversion douce" },
      { day: "Jour 9", practice: "Al-Ikhlas en miroir (al-A\u1e25ad)", duration: "7 min", focus: "L\u2019unicit\u00e9 et ses ramifications" },
      { day: "Jour 10", practice: "Al-Ikhlas en miroir (Al-\u1e62amad)", duration: "7 min", focus: "La suffisance divine" },
      { day: "Jour 11", practice: "Verset au choix \u2014 inversion libre", duration: "7 min", focus: "Autonomie dans la pratique" },
      { day: "Jour 12", practice: "Al-Mulk (1-5) en miroir", duration: "7 min", focus: "La grandeur et la d\u00e9pendance" },
      { day: "Jour 13", practice: "Deux versets en miroir", duration: "7 min", focus: "Approfondir la lecture" },
      { day: "Jour 14", practice: "Repos \u2014 journal de la semaine", duration: "10 min", focus: "Bilan et int\u00e9gration" },
    ],
  },
  {
    num: 3,
    title: "Le Dialogue",
    arabic: "\u0645\u0646\u0627\u062c\u0627\u0629",
    icon: "\ud83d\udcac",
    description: "Engager le dialogue intime avec Allah. \u00c9crire et vivre la Munajat.",
    duration: "10 min/jour \u2014 7 jours",
    days: [
      { day: "Jour 15", practice: "Munajat guid\u00e9e (invite)", duration: "10 min", focus: "Premier pas vers le dialogue" },
      { day: "Jour 16", practice: "Munajat libre + \u00e9criture", duration: "10 min", focus: "L\u00e2cher la formulation" },
      { day: "Jour 17", practice: "Fana + Tajalli + Munajat", duration: "15 min", focus: "Encha\u00eener les 3 phases" },
      { day: "Jour 18", practice: "Munajat de repentance", duration: "10 min", focus: "L\u00e2cher les fardeaux" },
      { day: "Jour 19", practice: "Munajat de gratitude", duration: "10 min", focus: "Reconna\u00eetre les bienfaits" },
      { day: "Jour 20", practice: "Munajat de demande (\u1e25\u0101ja)", duration: "10 min", focus: "Pr\u00e9senter ses besoins" },
      { day: "Jour 21", practice: "B\u00e9ance + Munajat finale", duration: "15 min", focus: "Le silence avant la parole" },
    ],
  },
];

export function Chapter6() {
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());

  const stats = useMemo(() => {
    const total = 21;
    const completed = completedDays.size;
    const percent = Math.round((completed / total) * 100);
    let streak = 0;
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
    // Current streak from end
    for (let i = 21; i >= 1; i--) {
      if (completedDays.has(i)) streak++;
      else break;
    }
    return { total, completed, percent, streak, bestStreak };
  }, [completedDays]);

  const toggleDay = (dayNum: number) => {
    setCompletedDays(prev => {
      const next = new Set(prev);
      if (next.has(dayNum)) next.delete(dayNum);
      else next.add(dayNum);
      return next;
    });
  };

  return (
    <section id="chapitre-6" className="py-20 md:py-28 px-6 md:px-8" style={{ background: "var(--cream-dark)" }}>
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionTitle>Programme sur 21 Jours</SectionTitle>
          <BodyText>
            Ce programme progressif vous guide sur 21 jours, avec une nouvelle phase introduite
            chaque semaine. L&rsquo;objectif n&rsquo;est pas la perfection, mais la{" "}
            <strong>régularité</strong>. Même 5 minutes par jour valent mieux qu&rsquo;une heure
            par semaine.
          </BodyText>
        </Reveal>

        {/* Week cards */}
        <Reveal delay={0.1}>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {WEEKS.map((week) => (
              <div key={week.num} className="p-5 rounded-xl border transition-all duration-300 hover:shadow-md" style={{
                background: "white",
                borderColor: "rgba(184,146,62,0.15)",
              }}>
                <div className="text-3xl mb-3">{week.icon}</div>
                <h3 className="font-semibold mb-1" style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "18px",
                  color: "var(--navy)",
                }}>
                  Semaine {week.num} : {week.title}
                </h3>
                <div className="arabic-inline text-sm mb-2">{week.arabic}</div>
                <p className="text-xs mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#6B5E52" }}>
                  {week.description}
                </p>
                <p className="text-xs font-medium" style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--gold-dark)" }}>
                  {week.duration}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Day 21+ */}
        <Reveal delay={0.15}>
          <div className="p-5 rounded-xl border mb-10" style={{
            background: "linear-gradient(135deg, var(--navy), var(--navy-light))",
            borderColor: "rgba(184,146,62,0.2)",
          }}>
            <div className="text-3xl mb-3">{"\ud83c\udfdc\ufe0f"}</div>
            <h3 className="font-semibold mb-1" style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "18px",
              color: "#FFF8E7",
            }}>
              Jour 21+ : Béance
            </h3>
            <div className="arabic-inline text-sm mb-2" style={{ color: "#D4A853" }}>{"\u0627\u0644\u0628\u064a\u0627\u0646"}</div>
            <p className="text-xs mb-2" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "rgba(255,248,231,0.7)" }}>
              Le silence intérieur. Ne rien faire. Ne rien attendre. Juste être.
            </p>
            <p className="text-xs font-medium" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#D4A853" }}>
              3 min — puis selon votre capacité
            </p>
          </div>
        </Reveal>

        {/* Progress tracker */}
        <Reveal delay={0.2}>
          <SectionSubtitle>Suivi de Progression</SectionSubtitle>
          <p className="mb-6 text-sm" style={{ color: "#7A6E63" }}>
            Cliquez sur un jour pour enregistrer votre pratique
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { label: "Jours complétés", value: `${stats.completed}/${stats.total}` },
              { label: "Progression", value: `${stats.percent}%` },
              { label: "Série actuelle", value: `${stats.streak}` },
              { label: "Meilleure série", value: `${stats.bestStreak}` },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl text-center border" style={{
                background: "white",
                borderColor: "rgba(184,146,62,0.1)",
              }}>
                <div className="text-xl font-bold" style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--navy)" }}>
                  {stat.value}
                </div>
                <div className="text-xs mt-1" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#8C7A6B" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
              <div className="h-full rounded-full transition-all duration-500" style={{
                width: `${stats.percent}%`,
                background: "linear-gradient(90deg, var(--gold-dark), var(--gold))",
              }} />
            </div>
          </div>

          {/* Day grid */}
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
                    background: isCompleted ? "rgba(107,142,107,0.1)" : "white",
                    borderColor: isCompleted ? "rgba(107,142,107,0.3)" : "var(--border)",
                  }}
                  title={`Jour ${dayNum}`}
                >
                  <span className="text-sm mb-0.5">{icon}</span>
                  <span className="text-xs font-medium" style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    color: isCompleted ? "var(--sage)" : "#8C7A6B",
                  }}>
                    {dayNum}
                  </span>
                  {isCompleted && (
                    <span className="text-xs mt-0.5" style={{ color: "var(--sage)" }}>&#10003;</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 justify-center text-xs" style={{ color: "#8C7A6B", fontFamily: "var(--font-inter), sans-serif" }}>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm border" style={{ borderColor: "var(--border)", background: "white" }} />
              Non commencé
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm" style={{ background: "rgba(107,142,107,0.2)", borderColor: "rgba(107,142,107,0.4)", borderWidth: 1 }} />
              Complété
            </span>
          </div>
        </Reveal>

        {/* Weekly schedules */}
        {WEEKS.map((week, weekIndex) => (
          <Reveal key={week.num} delay={0.3 + weekIndex * 0.1}>
            <div className="mt-12">
              <h3 className="font-semibold mb-4" style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "20px",
                color: "var(--navy)",
              }}>
                Semaine {week.num} — {week.title}
              </h3>
              <div className="overflow-hidden rounded-xl shadow-sm border" style={{ borderColor: "rgba(184,146,62,0.08)" }}>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr style={{ background: "linear-gradient(135deg, var(--navy), var(--navy-light))", color: "#FFF8E7" }}>
                        {["Jour", "Pratique", "Dur\u00e9e", "Focus"].map((h) => (
                          <th key={h} className="px-4 py-3 text-left text-xs uppercase tracking-wider font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {week.days.map((d, i) => (
                        <tr key={i} className="transition-colors duration-200"
                          style={{
                            borderBottom: "1px solid rgba(184,146,62,0.08)",
                            background: i % 2 === 1 ? "rgba(184,146,62,0.02)" : "transparent",
                          }}
                        >
                          <td className="px-4 py-3 align-top font-medium text-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>{d.day}</td>
                          <td className="px-4 py-3 align-top" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "15px" }}>{d.practice}</td>
                          <td className="px-4 py-3 align-top text-xs font-medium" style={{ fontFamily: "var(--font-inter), sans-serif", color: "var(--gold-dark)" }}>{d.duration}</td>
                          <td className="px-4 py-3 align-top italic" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "14px", color: "#7A6E63" }}>{d.focus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        {/* Planning */}
        <Reveal delay={0.6}>
          <div className="relative rounded-2xl p-8 md:p-9 mt-12" style={{ background: "linear-gradient(#FFFFFF 0%, #F5EDD8 100%)", border: "2px solid var(--gold)", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
            <span className="absolute -top-3.5 left-7 text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif", background: "var(--gold)" }}>
              &#128197; PLANIFICATION PERSONNELLE
            </span>
            <p className="mb-4 font-semibold" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "17px" }}>
              Avant de commencer, notez votre plan :
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#7A6E63" }}>
                  &#128197; Date de début
                </label>
                <input
                  type="text"
                  placeholder="JJ / MM / AAAA"
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                  style={{ background: "white", border: "1px dashed var(--gold)", fontFamily: "var(--font-inter), sans-serif", fontSize: "14px" }}
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-2" style={{ fontFamily: "var(--font-inter), sans-serif", color: "#7A6E63" }}>
                  &#9200; Heure de pratique
                </label>
                <input
                  type="text"
                  placeholder="ex: 05h30 (avant Fajr)"
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300"
                  style={{ background: "white", border: "1px dashed var(--gold)", fontFamily: "var(--font-inter), sans-serif", fontSize: "14px" }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
