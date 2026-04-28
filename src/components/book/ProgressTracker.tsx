'use client';

import { useState, useCallback, useMemo, useSyncExternalStore } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import {
  Check,
  BookOpen,
  Flame,
  Trophy,
  Calendar,
  ChevronRight,
} from 'lucide-react';

// ==================== TYPES ====================

export interface DayEntry {
  date: string; // ISO date string when the day was practiced
  phase: 'fana' | 'tajalli' | 'munajat' | 'beance';
  completed: boolean;
  journal: string;
  mood: 'great' | 'good' | 'neutral' | 'difficult' | '';
  notes: string;
}

interface ProgressTrackerProps {
  programId?: string;
}

// ==================== CONSTANTS ====================

const TOTAL_DAYS = 21;

const PHASE_CONFIG: Record<
  'fana' | 'tajalli' | 'munajat' | 'beance',
  { label: string; arabic: string; icon: string; color: string }
> = {
  fana: {
    label: "Fana — L'Effacement",
    arabic: 'فناء',
    icon: '🌊',
    color: '#4A90A4',
  },
  tajalli: {
    label: "Tajalli — L'Inversion",
    arabic: 'تجلي',
    icon: '🪞',
    color: '#8B6914',
  },
  munajat: {
    label: 'Munajat — Le Dialogue',
    arabic: 'مناجاة',
    icon: '💬',
    color: '#6B8E6B',
  },
  beance: {
    label: 'Béance — La Béance',
    arabic: 'البيان',
    icon: '🏜️',
    color: '#1B2A4A',
  },
};

const MOOD_OPTIONS: {
  value: 'great' | 'good' | 'neutral' | 'difficult';
  emoji: string;
  label: string;
}[] = [
  { value: 'great', emoji: '😊', label: 'Excellent' },
  { value: 'good', emoji: '🙂', label: 'Bien' },
  { value: 'neutral', emoji: '😐', label: 'Neutre' },
  { value: 'difficult', emoji: '😔', label: 'Difficile' },
];

function getRecommendedPhase(day: number): DayEntry['phase'] {
  if (day <= 7) return 'fana';
  if (day <= 14) return 'tajalli';
  if (day <= 18) return 'munajat';
  return 'beance';
}

function getWeekLabel(day: number): string {
  if (day <= 7) return 'Semaine 1';
  if (day <= 14) return 'Semaine 2';
  return 'Semaine 3';
}

function createEmptyEntry(day: number): DayEntry {
  return {
    date: '',
    phase: getRecommendedPhase(day),
    completed: false,
    journal: '',
    mood: '',
    notes: '',
  };
}

// ==================== STORAGE ====================

function buildStorageKey(programId: string) {
  return `miracle-progress-${programId}`;
}

function readFromStorage(programId: string): Record<number, DayEntry> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(buildStorageKey(programId));
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function writeToStorage(
  programId: string,
  entries: Record<number, DayEntry>,
) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(buildStorageKey(programId), JSON.stringify(entries));
  } catch {
    // localStorage full — silently ignore
  }
}

// ==================== EXTERNAL STORE (for useSyncExternalStore) ====================

// Global listener registry so useSyncExternalStore works correctly
const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

// ==================== HELPERS ====================

function calculateStreaks(entries: Record<number, DayEntry>): {
  current: number;
  longest: number;
} {
  const completedDays = Object.entries(entries)
    .filter(([, e]) => e.completed)
    .map(([d]) => parseInt(d, 10))
    .sort((a, b) => a - b);

  if (completedDays.length === 0) return { current: 0, longest: 0 };

  let longest = 1;
  let tempStreak = 1;

  for (let i = 1; i < completedDays.length; i++) {
    if (completedDays[i] === completedDays[i - 1] + 1) {
      tempStreak++;
    } else {
      longest = Math.max(longest, tempStreak);
      tempStreak = 1;
    }
  }
  longest = Math.max(longest, tempStreak);

  // Current streak: count backwards from the latest completed day
  let current = 1;
  for (let i = completedDays.length - 2; i >= 0; i--) {
    if (completedDays[i] === completedDays[i + 1] - 1) {
      current++;
    } else {
      break;
    }
  }

  return { current, longest };
}

// ==================== COMPONENT ====================

export default function ProgressTracker({
  programId = 'default-21-days',
}: ProgressTrackerProps) {
  const { toast } = useToast();

  // Read from localStorage via useSyncExternalStore (SSR-safe)
  const entries = useSyncExternalStore(
    subscribe,
    () => readFromStorage(programId),
    () => ({}) as Record<number, DayEntry>, // server snapshot
  );

  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  // ==================== COMPUTED VALUES ====================

  const completedCount = useMemo(
    () => Object.values(entries).filter((e) => e.completed).length,
    [entries],
  );

  const progressPercent = useMemo(
    () => Math.round((completedCount / TOTAL_DAYS) * 100),
    [completedCount],
  );

  const { current: currentStreak, longest: longestStreak } = useMemo(
    () => calculateStreaks(entries),
    [entries],
  );

  // ==================== HANDLERS ====================

  const handleOpenDay = useCallback((day: number) => {
    setSelectedDay(day);
  }, []);

  const handleCloseDay = useCallback(() => {
    setSelectedDay(null);
  }, []);

  const handleUpdateEntry = useCallback(
    (day: number, updates: Partial<DayEntry>) => {
      const current = entries[day] || createEmptyEntry(day);
      const updated: DayEntry = {
        ...current,
        ...updates,
        date:
          updates.completed && !current.date
            ? new Date().toISOString()
            : current.date,
      };
      writeToStorage(programId, { ...entries, [day]: updated });
      emitChange(); // trigger re-render via useSyncExternalStore
    },
    [entries, programId],
  );

  const handleToggleComplete = useCallback(
    (day: number) => {
      const current = entries[day] || createEmptyEntry(day);
      const newCompleted = !current.completed;
      handleUpdateEntry(day, {
        completed: newCompleted,
        date: newCompleted ? new Date().toISOString() : '',
      });
      if (newCompleted) {
        toast({
          title: `Jour ${day} complété ! ✨`,
          description: 'Continuez sur cette lancée !',
        });
      }
    },
    [entries, handleUpdateEntry, toast],
  );

  const handleResetProgram = useCallback(() => {
    writeToStorage(programId, {});
    emitChange();
    toast({
      title: 'Programme réinitialisé',
      description: 'Toutes vos entrées ont été effacées.',
    });
  }, [programId, toast]);

  // ==================== RENDER ====================

  const selectedEntry =
    selectedDay !== null
      ? entries[selectedDay] || createEmptyEntry(selectedDay)
      : null;
  const selectedPhase = selectedEntry
    ? PHASE_CONFIG[selectedEntry.phase]
    : null;

  return (
    <>
      {/* ==================== MAIN CARD ==================== */}
      <div
        className="rounded-2xl p-5 sm:p-8 my-8"
        style={{
          background: 'white',
          border: '1px solid rgba(184, 134, 11, 0.2)',
          boxShadow: '0 2px 12px rgba(184, 134, 11, 0.08)',
        }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div>
            <h3
              className="flex items-center gap-2 mb-1"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '24px',
                fontWeight: 700,
                color: '#8B6914',
              }}
            >
              <Calendar size={22} strokeWidth={2} color="#B8860B" />
              Suivi de Progression
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                color: '#5A5A5A',
              }}
            >
              Cliquez sur un jour pour enregistrer votre pratique
            </p>
          </div>
          <button
            onClick={handleResetProgram}
            className="text-xs px-3 py-1.5 rounded-lg transition-colors hover:bg-red-50 self-start sm:self-auto cursor-pointer"
            style={{
              fontFamily: 'var(--font-inter)',
              color: '#B0848C',
              border: '1px solid rgba(176, 132, 140, 0.3)',
            }}
          >
            Réinitialiser
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                fontWeight: 600,
                color: '#1B2A4A',
              }}
            >
              Jours complétés : {completedCount}/{TOTAL_DAYS}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                fontWeight: 700,
                color: '#8B6914',
              }}
            >
              {progressPercent}%
            </span>
          </div>
          <div
            className="relative h-3 rounded-full overflow-hidden"
            style={{ background: 'rgba(184, 134, 11, 0.1)' }}
          >
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${progressPercent}%`,
                background: 'linear-gradient(90deg, #B8860B, #DAA520)',
              }}
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div
            className="text-center p-3 rounded-xl"
            style={{
              background: 'rgba(184, 134, 11, 0.05)',
              border: '1px solid rgba(184, 134, 11, 0.1)',
            }}
          >
            <BookOpen
              size={18}
              color="#8B6914"
              className="mx-auto mb-1"
            />
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '20px',
                fontWeight: 700,
                color: '#1B2A4A',
                lineHeight: 1.2,
              }}
            >
              {completedCount}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                color: '#5A5A5A',
              }}
            >
              Sessions
            </p>
          </div>
          <div
            className="text-center p-3 rounded-xl"
            style={{
              background: 'rgba(184, 134, 11, 0.05)',
              border: '1px solid rgba(184, 134, 11, 0.1)',
            }}
          >
            <Flame
              size={18}
              color="#DAA520"
              className="mx-auto mb-1"
            />
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '20px',
                fontWeight: 700,
                color: '#1B2A4A',
                lineHeight: 1.2,
              }}
            >
              {currentStreak}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                color: '#5A5A5A',
              }}
            >
              Série actuelle
            </p>
          </div>
          <div
            className="text-center p-3 rounded-xl"
            style={{
              background: 'rgba(184, 134, 11, 0.05)',
              border: '1px solid rgba(184, 134, 11, 0.1)',
            }}
          >
            <Trophy
              size={18}
              color="#B8860B"
              className="mx-auto mb-1"
            />
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '20px',
                fontWeight: 700,
                color: '#1B2A4A',
                lineHeight: 1.2,
              }}
            >
              {longestStreak}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                color: '#5A5A5A',
              }}
            >
              Meilleure série
            </p>
          </div>
        </div>

        {/* ==================== 21-DAY GRID ==================== */}
        <div className="mb-4">
          {/* Week Labels */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-3">
            {['S1', '', '', '', '', '', ''].map((label, i) => (
              <div
                key={i}
                className="text-center"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '10px',
                  fontWeight: 600,
                  color: '#B8860B',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {label}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1.5 sm:gap-2.5">
            {Array.from({ length: TOTAL_DAYS }).map((_, i) => {
              const day = i + 1;
              const entry = entries[day];
              const isCompleted = entry?.completed === true;
              const hasEntry =
                entry && (entry.journal || entry.mood || entry.notes);

              return (
                <button
                  key={day}
                  onClick={() => handleOpenDay(day)}
                  className="relative flex flex-col items-center justify-center rounded-xl sm:rounded-2xl aspect-square transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer group"
                  style={{
                    background: isCompleted
                      ? 'linear-gradient(135deg, #B8860B, #DAA520)'
                      : hasEntry
                        ? 'rgba(184, 134, 11, 0.12)'
                        : 'rgba(184, 134, 11, 0.04)',
                    border: isCompleted
                      ? '2px solid #DAA520'
                      : '1px solid rgba(184, 134, 11, 0.15)',
                    boxShadow: isCompleted
                      ? '0 2px 8px rgba(184, 134, 11, 0.25)'
                      : 'none',
                  }}
                  aria-label={`Jour ${day}${isCompleted ? ' - complété' : hasEntry ? ' - en cours' : ''}`}
                >
                  {/* Day Number */}
                  <span
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: isCompleted ? 'white' : '#1B2A4A',
                      lineHeight: 1,
                    }}
                  >
                    {day}
                  </span>

                  {/* Completion check */}
                  {isCompleted && (
                    <Check
                      size={12}
                      color="white"
                      strokeWidth={3}
                      className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5"
                    />
                  )}

                  {/* Partial indicator */}
                  {!isCompleted && hasEntry && (
                    <span
                      className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-2 h-2 rounded-full"
                      style={{ background: '#B8860B' }}
                    />
                  )}

                  {/* Hover arrow on mobile */}
                  <ChevronRight
                    size={10}
                    color={
                      isCompleted
                        ? 'rgba(255,255,255,0.6)'
                        : '#B8860B'
                    }
                    className="absolute bottom-0.5 opacity-0 group-hover:opacity-100 transition-opacity sm:hidden"
                  />

                  {/* Phase mini icon on desktop */}
                  <span
                    className="hidden sm:block mt-0.5"
                    style={{ fontSize: '10px', lineHeight: 1 }}
                  >
                    {PHASE_CONFIG[getRecommendedPhase(day)].icon}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-between mt-4 px-1 gap-y-1">
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              color: '#5A5A5A',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span
              className="inline-block w-3 h-3 rounded-sm shrink-0"
              style={{
                background: 'linear-gradient(135deg, #B8860B, #DAA520)',
              }}
            />
            Complété
          </span>
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              color: '#5A5A5A',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span
              className="inline-block w-3 h-3 rounded-sm shrink-0"
              style={{
                background: 'rgba(184, 134, 11, 0.12)',
                border: '1px solid rgba(184, 134, 11, 0.15)',
              }}
            />
            En cours
          </span>
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              color: '#5A5A5A',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span
              className="inline-block w-3 h-3 rounded-sm shrink-0"
              style={{
                background: 'rgba(184, 134, 11, 0.04)',
                border: '1px solid rgba(184, 134, 11, 0.15)',
              }}
            />
            Non commencé
          </span>
        </div>

        {/* Completion celebration */}
        {completedCount === TOTAL_DAYS && (
          <div
            className="mt-6 p-4 rounded-xl text-center"
            style={{
              background:
                'linear-gradient(135deg, rgba(184, 134, 11, 0.08), rgba(218, 165, 32, 0.08))',
              border: '1px solid rgba(184, 134, 11, 0.3)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '20px',
                fontWeight: 700,
                color: '#8B6914',
              }}
            >
              🌟 Félicitations ! Vous avez terminé les 21 jours !
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                color: '#5A5A5A',
              }}
            >
              La transformation intérieure continue au-delà du programme.
              Poursuivez votre pratique quotidienne.
            </p>
          </div>
        )}
      </div>

      {/* ==================== DAY DETAIL DIALOG ==================== */}
      <Dialog
        open={selectedDay !== null}
        onOpenChange={(open) => {
          if (!open) handleCloseDay();
        }}
      >
        {selectedDay !== null && selectedEntry && selectedPhase && (
          <DialogContent
            className="max-w-[calc(100%-1rem)] sm:max-w-lg max-h-[90vh] overflow-y-auto"
            style={{
              background: '#FFFEF9',
              border: '1px solid rgba(184, 134, 11, 0.3)',
              borderRadius: '16px',
            }}
          >
            <DialogHeader>
              <DialogTitle
                className="flex items-center gap-3"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#8B6914',
                }}
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold shrink-0"
                  style={{
                    background: selectedEntry.completed
                      ? 'linear-gradient(135deg, #B8860B, #DAA520)'
                      : 'rgba(184, 134, 11, 0.15)',
                    color: selectedEntry.completed ? 'white' : '#8B6914',
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {selectedDay}
                </span>
                <div className="text-left">
                  <div>Jour {selectedDay}</div>
                  <DialogDescription
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '13px',
                    }}
                  >
                    {getWeekLabel(selectedDay)} · {selectedPhase.icon}{' '}
                    {selectedPhase.label}
                  </DialogDescription>
                </div>
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-5 mt-2">
              {/* Phase Selector */}
              <div>
                <label
                  className="block mb-2"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#1B2A4A',
                  }}
                >
                  Phase pratiquée
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    Object.keys(PHASE_CONFIG) as Array<
                      keyof typeof PHASE_CONFIG
                    >
                  ).map((phase) => {
                    const cfg = PHASE_CONFIG[phase];
                    const isActive = selectedEntry.phase === phase;
                    return (
                      <button
                        key={phase}
                        onClick={() =>
                          handleUpdateEntry(selectedDay, { phase })
                        }
                        className="flex items-center gap-2 p-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer"
                        style={{
                          background: isActive
                            ? `${cfg.color}12`
                            : 'transparent',
                          border: `1.5px solid ${isActive ? cfg.color : 'rgba(184, 134, 11, 0.1)'}`,
                        }}
                      >
                        <span style={{ fontSize: '16px' }}>
                          {cfg.icon}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-inter)',
                            fontSize: '12px',
                            fontWeight: isActive ? 600 : 400,
                            color: isActive ? cfg.color : '#5A5A5A',
                          }}
                        >
                          {cfg.label.split(' — ')[1]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mood Selector */}
              <div>
                <label
                  className="block mb-2"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#1B2A4A',
                  }}
                >
                  Comment vous sentez-vous ?
                </label>
                <div className="flex gap-2">
                  {MOOD_OPTIONS.map((mood) => (
                    <button
                      key={mood.value}
                      onClick={() =>
                        handleUpdateEntry(selectedDay, {
                          mood:
                            selectedEntry.mood === mood.value
                              ? ''
                              : mood.value,
                        })
                      }
                      className="flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-200 flex-1 cursor-pointer"
                      style={{
                        background:
                          selectedEntry.mood === mood.value
                            ? 'rgba(184, 134, 11, 0.1)'
                            : 'transparent',
                        border: `1.5px solid ${
                          selectedEntry.mood === mood.value
                            ? '#B8860B'
                            : 'rgba(184, 134, 11, 0.1)'
                        }`,
                        transform:
                          selectedEntry.mood === mood.value
                            ? 'scale(1.05)'
                            : 'scale(1)',
                      }}
                    >
                      <span style={{ fontSize: '22px' }}>
                        {mood.emoji}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '10px',
                          color:
                            selectedEntry.mood === mood.value
                              ? '#8B6914'
                              : '#5A5A5A',
                          fontWeight:
                            selectedEntry.mood === mood.value
                              ? 600
                              : 400,
                        }}
                      >
                        {mood.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Journal Textarea */}
              <div>
                <label
                  className="block mb-2"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#1B2A4A',
                  }}
                >
                  📝 Journal de méditation
                </label>
                <textarea
                  value={selectedEntry.journal}
                  onChange={(e) =>
                    handleUpdateEntry(selectedDay, {
                      journal: e.target.value,
                    })
                  }
                  placeholder="Qu'avez-vous expérimenté pendant votre méditation ? Quels pensées ou sentiments sont apparus ?"
                  rows={5}
                  className="w-full rounded-xl p-4 resize-none outline-none transition-all focus:ring-2 focus:ring-gold-primary/30"
                  style={{
                    background: 'white',
                    border: '1px dashed rgba(184, 134, 11, 0.3)',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    color: '#1A1A1A',
                    lineHeight: 1.6,
                  }}
                />
              </div>

              {/* Notes */}
              <div>
                <label
                  className="block mb-2"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#1B2A4A',
                  }}
                >
                  💭 Notes personnelles
                </label>
                <textarea
                  value={selectedEntry.notes}
                  onChange={(e) =>
                    handleUpdateEntry(selectedDay, {
                      notes: e.target.value,
                    })
                  }
                  placeholder="Observations, questions, intentions..."
                  rows={3}
                  className="w-full rounded-xl p-4 resize-none outline-none transition-all focus:ring-2 focus:ring-gold-primary/30"
                  style={{
                    background: 'white',
                    border: '1px dashed rgba(184, 134, 11, 0.3)',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    color: '#1A1A1A',
                    lineHeight: 1.6,
                  }}
                />
              </div>

              {/* Completed Date */}
              {selectedEntry.date && (
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '11px',
                    color: '#5A5A5A',
                    textAlign: 'center',
                  }}
                >
                  Dernière activité :{' '}
                  {new Date(
                    selectedEntry.date,
                  ).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              )}

              {/* Mark Complete Button */}
              <button
                onClick={() => handleToggleComplete(selectedDay)}
                className="w-full py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  background: selectedEntry.completed
                    ? 'linear-gradient(135deg, #B8860B, #DAA520)'
                    : 'transparent',
                  color: selectedEntry.completed ? 'white' : '#8B6914',
                  border: selectedEntry.completed
                    ? 'none'
                    : '2px solid #B8860B',
                  boxShadow: selectedEntry.completed
                    ? '0 4px 12px rgba(184, 134, 11, 0.3)'
                    : 'none',
                }}
              >
                {selectedEntry.completed ? (
                  <>
                    <Check size={18} strokeWidth={3} />
                    Jour complété ✓
                  </>
                ) : (
                  <>
                    <span
                      className="w-5 h-5 rounded-md border-2"
                      style={{ borderColor: '#B8860B' }}
                    />
                    Marquer comme complété
                  </>
                )}
              </button>

              {/* Navigation */}
              {selectedDay < TOTAL_DAYS && (
                <button
                  onClick={() => setSelectedDay(selectedDay + 1)}
                  className="w-full py-2.5 rounded-xl text-center transition-colors hover:bg-cream cursor-pointer flex items-center justify-center gap-1"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    color: '#8B6914',
                  }}
                >
                  Jour suivant
                  <ChevronRight size={16} />
                </button>
              )}
              {selectedDay > 1 && (
                <button
                  onClick={() => setSelectedDay(selectedDay - 1)}
                  className="w-full py-2 rounded-xl text-center transition-colors hover:bg-cream cursor-pointer"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '12px',
                    color: '#5A5A5A',
                  }}
                >
                  ← Jour précédent
                </button>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
