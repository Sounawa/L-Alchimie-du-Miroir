'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface TimerProps {
  id: string;
  duration: number; // in seconds
  label: string;
  subtitle?: string;
  startLabel?: string;
}

export default function Timer({
  id,
  duration,
  label,
  subtitle,
  startLabel = 'Démarrer',
}: TimerProps) {
  const [remaining, setRemaining] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isRunningRef = useRef(false);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    isRunningRef.current = false;
    setIsRunning(false);
  }, []);

  useEffect(() => {
    if (isRunning) {
      isRunningRef.current = true;
      intervalRef.current = setInterval(() => {
        if (!isRunningRef.current) return;
        setRemaining((prev) => {
          if (prev <= 1) {
            // Clear interval and stop via ref to avoid setState in effect
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            isRunningRef.current = false;
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      isRunningRef.current = false;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    if (!isRunning) {
      if (remaining === 0 || remaining === duration) {
        setRemaining(duration);
      }
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    stopTimer();
  };

  const handleReset = () => {
    stopTimer();
    setRemaining(duration);
  };

  const isComplete = remaining === 0 && !isRunning;
  const isLowTime = remaining <= 10 && remaining > 0 && isRunning;

  return (
    <div className="bg-navy-deep text-cream rounded-2xl p-8 md:p-10 text-center my-8">
      <h3
        className="text-gold-light mb-2 text-lg font-semibold"
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {label}
      </h3>
      {subtitle && <p className="opacity-70 text-sm mb-5">{subtitle}</p>}
      <div
        className="timer-display my-6 transition-all duration-300"
        style={{
          fontFamily: 'var(--font-amiri)',
          fontSize: '72px',
          color: isComplete
            ? '#6B8E6B'
            : isLowTime
              ? remaining % 2 === 0
                ? '#DAA520'
                : '#B8860B'
              : '#DAA520',
          textShadow: '0 0 30px rgba(218, 165, 32, 0.3)',
        }}
      >
        {isComplete ? '✓' : formatTime(remaining)}
      </div>
      <div className="flex gap-3 justify-center flex-wrap">
        <button
          onClick={handleStart}
          disabled={isComplete}
          className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            fontFamily: 'var(--font-inter)',
            background: 'linear-gradient(135deg, #B8860B, #DAA520)',
            color: '#1B2A4A',
            boxShadow: '0 4px 15px rgba(184, 134, 11, 0.3)',
          }}
        >
          ▶ {isComplete ? 'Terminé' : startLabel}
        </button>
        <button
          onClick={handlePause}
          disabled={!isRunning}
          className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:border-gold-light hover:text-gold-light bg-transparent text-cream border-2 border-white/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          ⏸ Pause
        </button>
        <button
          onClick={handleReset}
          className="px-7 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:border-gold-light hover:text-gold-light bg-transparent text-cream border-2 border-white/30 cursor-pointer"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          ↺ Reset
        </button>
      </div>
    </div>
  );
}
