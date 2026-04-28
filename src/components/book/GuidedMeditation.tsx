'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface GuidedStep {
  title: string;
  description: string;
  duration: number; // seconds
  icon?: string; // emoji
}

interface GuidedMeditationProps {
  id: string;
  title: string;
  subtitle?: string;
  steps: GuidedStep[];
  onComplete?: () => void;
}

type MeditationState = 'idle' | 'running' | 'paused' | 'complete';

/** Generate a gentle sine-wave beep via Web Audio API */
function playBeep(count: number = 1): void {
  try {
    const ctx = new AudioContext();
    const playSingleBeep = (delay: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 528;
      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + delay + 0.05);
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + delay + 0.45);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + delay + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + 0.5);
    };
    for (let i = 0; i < count; i++) {
      playSingleBeep(i * 0.8);
    }
    setTimeout(() => ctx.close(), count * 800 + 1000);
  } catch {
    // Web Audio API not available – silent fail
  }
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export default function GuidedMeditation({
  id,
  title,
  subtitle,
  steps,
  onComplete,
}: GuidedMeditationProps) {
  const totalDuration = steps.reduce((sum, s) => sum + s.duration, 0);

  const [state, setState] = useState<MeditationState>('idle');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stepRemaining, setStepRemaining] = useState(steps[0]?.duration ?? 0);

  // Refs for mutable state accessed inside intervals (avoids stale closures)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stateRef = useRef<MeditationState>('idle');
  const stepIndexRef = useRef(0);
  const stepRemainingRef = useRef(steps[0]?.duration ?? 0);
  const onCompleteRef = useRef(onComplete);
  const stepsRef = useRef(steps);

  // Sync prop refs when they change
  useEffect(() => {
    onCompleteRef.current = onComplete;
  });
  useEffect(() => {
    stepsRef.current = steps;
  });

  // Computed progress
  const elapsed = (() => {
    let e = 0;
    for (let i = 0; i < currentStepIndex; i++) {
      e += steps[i].duration;
    }
    if (state !== 'idle') {
      e += steps[currentStepIndex].duration - stepRemaining;
    }
    return e;
  })();

  const overallProgress = totalDuration > 0 ? (elapsed / totalDuration) * 100 : 0;
  const currentStep = steps[currentStepIndex];
  const isLowTime = stepRemaining <= 10 && stepRemaining > 0 && state === 'running';

  // ─── Tick handler (uses only refs for read, setState for write) ──
  const tick = useCallback(() => {
    if (stateRef.current !== 'running') return;

    const next = stepRemainingRef.current - 1;

    if (next <= 0) {
      // Current step finished
      const nextStepIdx = stepIndexRef.current + 1;

      if (nextStepIdx < stepsRef.current.length) {
        // Advance to next step
        playBeep(1);
        stepIndexRef.current = nextStepIdx;
        stepRemainingRef.current = stepsRef.current[nextStepIdx].duration;
        setCurrentStepIndex(nextStepIdx);
        setStepRemaining(stepsRef.current[nextStepIdx].duration);
      } else {
        // All steps done
        playBeep(3);
        stateRef.current = 'complete';
        stepRemainingRef.current = 0;
        setState('complete');
        setStepRemaining(0);
        onCompleteRef.current?.();
      }
    } else {
      stepRemainingRef.current = next;
      setStepRemaining(next);
    }
  }, []);

  // ─── Start/stop the interval based on state ──────────────
  useEffect(() => {
    if (state === 'running') {
      intervalRef.current = setInterval(tick, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [state, tick]);

  // ─── Controls ─────────────────────────────────────────────
  const handleStart = () => {
    // Reset to first step
    stepIndexRef.current = 0;
    stepRemainingRef.current = steps[0].duration;
    setCurrentStepIndex(0);
    setStepRemaining(steps[0].duration);
    stateRef.current = 'running';
    setState('running');
  };

  const handlePause = () => {
    stateRef.current = 'paused';
    setState('paused');
  };

  const handleResume = () => {
    stateRef.current = 'running';
    setState('running');
  };

  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    stateRef.current = 'idle';
    stepIndexRef.current = 0;
    stepRemainingRef.current = steps[0].duration;
    setState('idle');
    setCurrentStepIndex(0);
    setStepRemaining(steps[0].duration);
  };

  return (
    <div className="bg-navy-deep text-cream rounded-2xl p-8 md:p-10 text-center my-8">
      {/* Title */}
      <h3
        className="text-gold-light mb-1 text-lg font-semibold"
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {title}
      </h3>
      {subtitle && (
        <p className="opacity-70 text-sm mb-5">{subtitle}</p>
      )}

      {/* ─── Overall progress bar ─────────────────────────── */}
      <div className="w-full h-2 rounded-full bg-white/10 mb-8 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-linear"
          style={{
            width: `${overallProgress}%`,
            background: 'linear-gradient(90deg, #B8860B, #DAA520)',
          }}
        />
      </div>

      {/* ─── Current step display ─────────────────────────── */}
      {state !== 'complete' && (
        <div className="mb-8">
          {/* Step indicator */}
          <p
            className="text-sm opacity-60 mb-3 tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Étape {currentStepIndex + 1}/{steps.length}
          </p>

          {/* Icon */}
          {currentStep.icon && (
            <div className="text-4xl mb-3">{currentStep.icon}</div>
          )}

          {/* Step title */}
          <h4
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{
              fontFamily: 'var(--font-amiri)',
              color: '#DAA520',
              textShadow: '0 0 20px rgba(218, 165, 32, 0.2)',
            }}
          >
            {currentStep.title}
          </h4>

          {/* Step description */}
          <p className="opacity-80 text-sm md:text-base max-w-md mx-auto mb-6 leading-relaxed">
            {currentStep.description}
          </p>

          {/* Countdown timer */}
          <div
            className="timer-display transition-all duration-300"
            style={{
              fontFamily: 'var(--font-amiri)',
              fontSize: '72px',
              color: isLowTime
                ? stepRemaining % 2 === 0
                  ? '#DAA520'
                  : '#B8860B'
                : '#DAA520',
              textShadow: '0 0 30px rgba(218, 165, 32, 0.3)',
            }}
          >
            {formatTime(stepRemaining)}
          </div>
        </div>
      )}

      {/* ─── Completion message ────────────────────────────── */}
      {state === 'complete' && (
        <div className="mb-8" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
          <div className="text-5xl mb-4">✓</div>
          <p
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{
              fontFamily: 'var(--font-amiri)',
              color: '#6B8E6B',
              textShadow: '0 0 20px rgba(107, 142, 107, 0.3)',
            }}
          >
            Méditation terminée
          </p>
          <p className="opacity-60 text-sm">
            Vous avez complété les {steps.length} étapes
          </p>
        </div>
      )}

      {/* ─── Step list ────────────────────────────────────── */}
      <div className="max-w-sm mx-auto mb-8 text-left space-y-2">
        {steps.map((step, i) => {
          const isCompleted =
            i < currentStepIndex || (state === 'complete');
          const isCurrent =
            i === currentStepIndex && state !== 'complete';
          const isUpcoming =
            i > currentStepIndex && state !== 'complete';

          return (
            <div
              key={`${id}-step-${i}`}
              className="flex items-start gap-3 rounded-lg px-4 py-3 transition-all duration-300"
              style={{
                borderLeft: isCurrent
                  ? '3px solid #DAA520'
                  : '3px solid transparent',
                backgroundColor: isCurrent
                  ? 'rgba(218, 165, 32, 0.06)'
                  : 'transparent',
              }}
            >
              {/* Status icon */}
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-sm mt-0.5">
                {isCompleted ? (
                  <span style={{ color: '#6B8E6B' }}>✓</span>
                ) : isCurrent ? (
                  <span style={{ color: '#DAA520' }}>{step.icon || '●'}</span>
                ) : (
                  <span className="opacity-30">{step.icon || '○'}</span>
                )}
              </div>

              {/* Step info */}
              <div className="min-w-0 flex-1">
                <p
                  className={`text-sm font-medium truncate ${
                    isCompleted
                      ? 'opacity-50 line-through'
                      : isCurrent
                        ? ''
                        : isUpcoming
                          ? 'opacity-30'
                          : 'opacity-50'
                  }`}
                  style={{
                    fontFamily: 'var(--font-inter)',
                    color: isCurrent ? '#DAA520' : undefined,
                  }}
                >
                  {step.title}
                </p>
                <p
                  className={`text-xs ${
                    isUpcoming ? 'opacity-20' : 'opacity-40'
                  }`}
                >
                  {formatTime(step.duration)}
                </p>
              </div>

              {/* Mini timer for current step */}
              {isCurrent && state !== 'idle' && (
                <span
                  className="text-sm flex-shrink-0"
                  style={{
                    fontFamily: 'var(--font-amiri)',
                    color: '#DAA520',
                  }}
                >
                  {formatTime(stepRemaining)}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* ─── Controls ─────────────────────────────────────── */}
      <div className="flex gap-3 justify-center flex-wrap">
        {state === 'idle' && (
          <button
            onClick={handleStart}
            className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            style={{
              fontFamily: 'var(--font-inter)',
              background: 'linear-gradient(135deg, #B8860B, #DAA520)',
              color: '#1B2A4A',
              boxShadow: '0 4px 15px rgba(184, 134, 11, 0.3)',
            }}
          >
            ▶ Commencer
          </button>
        )}

        {state === 'running' && (
          <>
            <button
              onClick={handlePause}
              className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:border-gold-light hover:text-gold-light bg-transparent text-cream border-2 border-white/30 cursor-pointer"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              ⏸ Pause
            </button>
            <button
              onClick={handleReset}
              className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:border-gold-light hover:text-gold-light bg-transparent text-cream border-2 border-white/30 cursor-pointer"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              ↺ Réinitialiser
            </button>
          </>
        )}

        {state === 'paused' && (
          <>
            <button
              onClick={handleResume}
              className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              style={{
                fontFamily: 'var(--font-inter)',
                background: 'linear-gradient(135deg, #B8860B, #DAA520)',
                color: '#1B2A4A',
                boxShadow: '0 4px 15px rgba(184, 134, 11, 0.3)',
              }}
            >
              ▶ Reprendre
            </button>
            <button
              onClick={handleReset}
              className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:border-gold-light hover:text-gold-light bg-transparent text-cream border-2 border-white/30 cursor-pointer"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              ↺ Réinitialiser
            </button>
          </>
        )}

        {state === 'complete' && (
          <button
            onClick={handleStart}
            className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            style={{
              fontFamily: 'var(--font-inter)',
              background: 'linear-gradient(135deg, #B8860B, #DAA520)',
              color: '#1B2A4A',
              boxShadow: '0 4px 15px rgba(184, 134, 11, 0.3)',
            }}
          >
            ↻ Recommencer
          </button>
        )}
      </div>
    </div>
  );
}
