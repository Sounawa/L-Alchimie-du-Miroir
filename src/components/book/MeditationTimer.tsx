"use client";

import { useState, useEffect, useRef } from "react";

interface MeditationTimerProps {
  steps: { icon: string; label: string; duration: number }[];
  title: string;
  subtitle: string;
  buttonText: string;
}

export function MeditationTimer({ steps, title, subtitle, buttonText }: MeditationTimerProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalDuration = steps.reduce((sum, s) => sum + s.duration, 0);

  useEffect(() => {
    if (isActive && !isPaused && currentStep >= 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (currentStep < steps.length - 1) {
              setCurrentStep((s) => s + 1);
              return steps[currentStep + 1].duration;
            } else {
              clearInterval(intervalRef.current!);
              setIsActive(false);
              setIsFinished(true);
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, isPaused, currentStep, steps]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setIsFinished(false);
    setCurrentStep(0);
    setTimeLeft(steps[0].duration);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setIsFinished(false);
    setCurrentStep(-1);
    setTimeLeft(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  const progressPercent = isActive && !isFinished
    ? ((totalDuration - timeLeft) / totalDuration) * 100
    : isFinished ? 100 : 0;

  return (
    <div className="my-8 rounded-2xl overflow-hidden border"
      style={{
        background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
        borderColor: "rgba(184,146,62,0.2)",
      }}
    >
      {/* Header */}
      <div className="p-6 md:p-8 text-center">
        <h3 className="text-lg md:text-xl font-semibold mb-1"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            color: "#FFF8E7",
          }}
        >
          {title}
        </h3>
        <p className="text-sm italic" style={{ color: "rgba(255,248,231,0.6)" }}>
          {subtitle}
        </p>
      </div>

      {/* Timer display */}
      <div className="px-6 md:px-8 pb-6">
        <div className="flex items-center justify-center mb-6">
          <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
            {/* Progress ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,248,231,0.08)" strokeWidth="3" />
              <circle
                cx="60" cy="60" r="54"
                fill="none"
                stroke="#D4A853"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={339.292}
                strokeDashoffset={339.292 - (339.292 * progressPercent) / 100}
                className="transition-all duration-1000 ease-linear"
              />
            </svg>

            {isFinished ? (
              <div className="text-center z-10">
                <div className="text-3xl mb-1">&#10024;</div>
                <p className="text-sm font-medium" style={{ color: "#D4A853" }}>Terminé</p>
              </div>
            ) : isActive ? (
              <div className="text-center z-10">
                <div className="text-4xl md:text-5xl font-light tabular-nums" style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "#FFF8E7",
                }}>
                  {formatTime(timeLeft)}
                </div>
                <p className="text-xs mt-1" style={{ color: "rgba(255,248,231,0.5)" }}>
                  Étape {currentStep + 1}/{steps.length}
                </p>
              </div>
            ) : (
              <div className="text-center z-10">
                <p className="text-sm" style={{ color: "rgba(255,248,231,0.4)" }}>
                  {formatTime(totalDuration)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Current step indicator */}
        {isActive && currentStep >= 0 && !isFinished && (
          <div className="text-center mb-6">
            <span className="text-2xl mr-2">{steps[currentStep].icon}</span>
            <span className="text-base" style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              color: "#FFF8E7",
              fontStyle: "italic",
            }}>
              {steps[currentStep].label}
            </span>
          </div>
        )}

        {/* Step dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i < currentStep
                    ? "#D4A853"
                    : i === currentStep
                      ? "#D4A853"
                      : "rgba(255,248,231,0.15)",
                  boxShadow: i === currentStep ? "0 0 8px rgba(212,168,83,0.5)" : "none",
                  transform: i === currentStep ? "scale(1.4)" : "scale(1)",
                }}
              />
              {i < steps.length - 1 && (
                <div className="w-4 md:w-6 h-px" style={{
                  background: i < currentStep ? "rgba(212,168,83,0.4)" : "rgba(255,248,231,0.08)",
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3">
          {!isActive && !isFinished && (
            <button
              onClick={handleStart}
              className="px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                background: "linear-gradient(135deg, #B8923E, #D4A853)",
                color: "#1B2A4A",
                boxShadow: "0 4px 16px rgba(184,146,62,0.3)",
              }}
            >
              &#9654; {buttonText}
            </button>
          )}
          {isActive && !isPaused && (
            <button
              onClick={() => setIsPaused(true)}
              className="px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                borderColor: "rgba(255,248,231,0.2)",
                color: "#FFF8E7",
              }}
            >
              &#9208; Pause
            </button>
          )}
          {isActive && isPaused && (
            <button
              onClick={() => setIsPaused(false)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                background: "rgba(212,168,83,0.15)",
                color: "#D4A853",
              }}
            >
              &#9654; Reprendre
            </button>
          )}
          {(isActive || isFinished) && (
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                borderColor: "rgba(255,248,231,0.15)",
                color: "rgba(255,248,231,0.5)",
              }}
            >
              &#8634; Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
