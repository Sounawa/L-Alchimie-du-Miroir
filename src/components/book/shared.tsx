"use client";

import { motion, useInView, useScroll, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, ReactNode, useCallback } from "react";

/* ═══════════════════════════════════════════════
   SCROLL PROGRESS BAR
   ═══════════════════════════════════════════════ */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="scroll-progress"
      style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
    />
  );
}

/* ═══════════════════════════════════════════════
   BACK TO TOP
   ═══════════════════════════════════════════════ */
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer shadow-lg border"
          style={{
            background: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(12px)",
            borderColor: "rgba(231,229,228,0.8)",
            color: "#78716C",
          }}
          whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════
   REVEAL ON SCROLL
   ═══════════════════════════════════════════════ */
interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
}

export function Reveal({ children, delay = 0, className = "", direction = "up", once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const variants = {
    up: { y: 36, x: 0 },
    left: { y: 0, x: -28 },
    right: { y: 0, x: 28 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...variants[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...variants[direction] }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   PARALLAX SECTION
   ═══════════════════════════════════════════════ */
interface ParallaxSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bg?: "warm" | "cream";
}

export function ParallaxSection({ children, id, className = "", bg = "warm" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 md:py-32 px-6 md:px-8 ${bg === "cream" ? "section-cream" : "section-warm"} ${className}`}
    >
      <motion.div style={{ y }} className="max-w-3xl mx-auto">
        {children}
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION TITLE / SUBTITLE / BODY
   ═══════════════════════════════════════════════ */
export function H1({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h1 className={`font-bold tracking-tight ${className}`} style={{
      fontFamily: "var(--font-cormorant), Georgia, serif",
      fontSize: "clamp(2.2rem, 5vw, 3rem)",
      color: "#1a1a1a",
      lineHeight: 1.15,
      letterSpacing: "-0.01em",
    }}>
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-bold tracking-tight mt-14 mb-6 ${className}`} style={{
      fontFamily: "var(--font-cormorant), Georgia, serif",
      fontSize: "clamp(1.5rem, 3.5vw, 1.85rem)",
      color: "#1a1a1a",
      lineHeight: 1.25,
      letterSpacing: "-0.005em",
    }}>
      {children}
    </h2>
  );
}

export function Body({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`leading-[1.85] mb-6 ${className}`} style={{
      fontFamily: "var(--font-cormorant), Georgia, serif",
      fontSize: "17.5px",
      color: "#44403C",
    }}>
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════
   ORNAMENT DIVIDER
   ═══════════════════════════════════════════════ */
export function Divider({ symbol }: { symbol?: string }) {
  return (
    <div className="divider-ornament my-14">
      <span style={{ color: "#C4A265", fontSize: "14px", letterSpacing: "0.3em" }}>
        {symbol || "◆"}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   BLOCKQUOTE
   ═══════════════════════════════════════════════ */
export function Quote({ text, author, source }: { text: string; author?: string; source?: string }) {
  return (
    <blockquote className="my-10 md:my-12 pl-0 md:pl-2">
      <div className="relative py-6 px-8 md:px-10 rounded-2xl" style={{
        background: "linear-gradient(135deg, rgba(196,162,101,0.04) 0%, rgba(244,241,236,0.6) 100%)",
      }}>
        <div className="absolute top-4 left-6 text-5xl leading-none select-none" style={{
          fontFamily: "Georgia, serif",
          color: "rgba(196,162,101,0.2)",
        }}>
          &ldquo;
        </div>
        <p className="relative z-10 italic text-lg md:text-xl leading-relaxed" style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          color: "#2C3945",
          padding: "4px 0",
        }}>
          {text}
        </p>
        {(author || source) && (
          <cite className="relative z-10 block mt-5 not-italic" style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "#8B7340",
            letterSpacing: "0.01em",
          }}>
            {author && `— ${author}`}{source && `, ${source}`}
          </cite>
        )}
      </div>
    </blockquote>
  );
}

/* ═══════════════════════════════════════════════
   CALLOUT BOX
   ═══════════════════════════════════════════════ */
interface CalloutProps {
  variant: "gold" | "sage" | "rose";
  title: string;
  children: ReactNode;
  icon?: string;
}

export function Callout({ variant, title, children, icon }: CalloutProps) {
  const colors = {
    gold: { color: "#8B7340", cls: "callout-gold" },
    sage: { color: "#5F8A6B", cls: "callout-sage" },
    rose: { color: "#A67B8A", cls: "callout-rose" },
  };
  const c = colors[variant];
  return (
    <div className={`callout ${c.cls} my-8`}>
      <div className="callout-title" style={{ color: c.color }}>
        {icon && `${icon} `}{title}
      </div>
      <div className="prose-book">{children}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   STEP CARD
   ═══════════════════════════════════════════════ */
export function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <motion.div
      className="relative py-5 px-6 pl-[68px] rounded-2xl premium-card"
      whileHover={{ y: -2 }}
    >
      <div className="step-badge">{number}</div>
      <h4 className="font-semibold mb-1" style={{
        fontFamily: "var(--font-cormorant), Georgia, serif",
        fontSize: "18px",
        color: "#1a1a1a",
      }}>
        {title}
      </h4>
      <p className="text-sm leading-relaxed" style={{
        fontFamily: "var(--font-cormorant), Georgia, serif",
        color: "#78716C",
        fontSize: "15.5px",
      }}>
        {description}
      </p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   PREMIUM TABLE
   ═══════════════════════════════════════════════ */
export function PremiumTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl premium-card !p-0">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse premium-table">
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h} className="text-left">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   JOURNAL CARD
   ═══════════════════════════════════════════════ */
export function JournalCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="journal-card my-10">
      <div className="journal-label">{label}</div>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MEDIDATION TIMER
   ═══════════════════════════════════════════════ */
interface TimerStep { icon: string; label: string; duration: number; }

export function MeditationTimer({
  steps,
  title,
  subtitle,
  buttonText,
}: {
  steps: TimerStep[];
  title: string;
  subtitle: string;
  buttonText: string;
}) {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const totalDuration = steps.reduce((s, st) => s + st.duration, 0);

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
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isActive, isPaused, currentStep, steps]);

  const start = useCallback(() => {
    setIsActive(true);
    setIsPaused(false);
    setIsFinished(false);
    setCurrentStep(0);
    setTimeLeft(steps[0].duration);
  }, [steps]);

  const reset = useCallback(() => {
    setIsActive(false);
    setIsPaused(false);
    setIsFinished(false);
    setCurrentStep(-1);
    setTimeLeft(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const pct = isActive && !isFinished ? ((totalDuration - timeLeft) / totalDuration) * 100 : isFinished ? 100 : 0;
  const radius = 56;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div
      className="my-10 rounded-3xl overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #2C3945 0%, #1E2A35 50%, #2C3945 100%)",
        boxShadow: "0 8px 40px rgba(44, 57, 69, 0.2)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Header */}
      <div className="px-8 pt-8 pb-2 text-center">
        <h3 className="font-semibold text-lg" style={{ fontFamily: "var(--font-cormorant), Georgia, serif", color: "#FAF5ED" }}>
          {title}
        </h3>
        <p className="text-sm mt-1" style={{ color: "rgba(250,245,237,0.45)", fontStyle: "italic" }}>
          {subtitle}
        </p>
      </div>

      {/* Timer */}
      <div className="flex flex-col items-center px-8 py-6">
        <div className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mb-6">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(250,245,237,0.06)" strokeWidth="2.5" />
            <motion.circle
              cx="60" cy="60" r={radius}
              fill="none"
              stroke="url(#timerGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset: circumference - (circumference * pct) / 100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4A265" />
                <stop offset="100%" stopColor="#D4B87C" />
              </linearGradient>
            </defs>
          </svg>

          {isFinished ? (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
              <div className="text-3xl mb-1">&#10024;</div>
              <p className="text-xs font-medium" style={{ color: "#D4B87C" }}>Complété</p>
            </motion.div>
          ) : isActive ? (
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extralight tabular-nums" style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "#FAF5ED",
                letterSpacing: "0.02em",
              }}>
                {fmt(timeLeft)}
              </div>
              <p className="text-[10px] mt-1 tracking-wider uppercase" style={{ color: "rgba(250,245,237,0.35)" }}>
                Étape {currentStep + 1}/{steps.length}
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-sm font-light" style={{ color: "rgba(250,245,237,0.35)", fontFamily: "var(--font-inter), sans-serif" }}>
                {fmt(totalDuration)}
              </p>
            </div>
          )}
        </div>

        {/* Step indicator */}
        {isActive && currentStep >= 0 && !isFinished && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="text-center mb-6"
            >
              <span className="text-xl mr-2">{steps[currentStep].icon}</span>
              <span className="text-base italic" style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                color: "#FAF5ED",
              }}>
                {steps[currentStep].label}
              </span>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Progress dots */}
        <div className="flex items-center gap-1.5 mb-8">
          {steps.map((_, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                animate={{
                  background: i < currentStep ? "#C4A265" : i === currentStep ? "#D4B87C" : "rgba(250,245,237,0.1)",
                  scale: i === currentStep ? 1.6 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              {i < steps.length - 1 && (
                <div className="w-3 h-px" style={{
                  background: i < currentStep ? "rgba(196,162,101,0.3)" : "rgba(250,245,237,0.06)",
                }} />
              )}
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {!isActive && !isFinished && (
            <motion.button
              onClick={start}
              className="px-8 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                background: "linear-gradient(135deg, #C4A265, #D4B87C)",
                color: "#1E2A35",
                boxShadow: "0 4px 20px rgba(196,162,101,0.3)",
                letterSpacing: "0.02em",
              }}
              whileHover={{ scale: 1.03, boxShadow: "0 6px 28px rgba(196,162,101,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              &#9654; {buttonText}
            </motion.button>
          )}
          {isActive && !isPaused && (
            <motion.button
              onClick={() => setIsPaused(true)}
              className="px-6 py-2 rounded-full text-xs font-medium border cursor-pointer"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                borderColor: "rgba(250,245,237,0.15)",
                color: "#FAF5ED",
              }}
              whileTap={{ scale: 0.95 }}
            >
              &#9208; Pause
            </motion.button>
          )}
          {isActive && isPaused && (
            <motion.button
              onClick={() => setIsPaused(false)}
              className="px-6 py-2 rounded-full text-xs font-medium cursor-pointer"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                background: "rgba(196,162,101,0.15)",
                color: "#D4B87C",
              }}
              whileTap={{ scale: 0.95 }}
            >
              &#9654; Reprendre
            </motion.button>
          )}
          {(isActive || isFinished) && (
            <motion.button
              onClick={reset}
              className="px-6 py-2 rounded-full text-xs font-medium border cursor-pointer"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                borderColor: "rgba(250,245,237,0.1)",
                color: "rgba(250,245,237,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              &#8634; Reset
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
