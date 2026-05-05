"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export function BookSection({
  id,
  children,
  className = "",
  narrow = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-6 md:px-8 ${className}`}
    >
      <div className={narrow ? "max-w-2xl mx-auto" : "max-w-3xl mx-auto"}>
        {children}
      </div>
    </section>
  );
}

interface QuoteProps {
  text: string;
  author?: string;
  source?: string;
}

export function BookQuote({ text, author, source }: QuoteProps) {
  return (
    <blockquote className="my-10 rounded-r-2xl p-6 md:p-8 italic text-lg leading-relaxed border-l-4"
      style={{
        background: "linear-gradient(135deg, rgba(184,146,62,0.05) 0%, rgba(218,165,32,0.03) 100%)",
        borderLeftColor: "var(--gold)",
        color: "var(--navy)",
        fontFamily: "var(--font-cormorant), Georgia, serif",
      }}
    >
      &ldquo;{text}&rdquo;
      {(author || source) && (
        <cite className="block mt-4 not-italic font-semibold text-sm"
          style={{
            color: "var(--gold-dark)",
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          {author && `— ${author}`}
          {source && `, ${source}`}
        </cite>
      )}
    </blockquote>
  );
}

interface InfoBoxProps {
  title: string;
  children: ReactNode;
  variant?: "gold" | "sage" | "rose";
  icon?: string;
}

export function InfoBox({
  title,
  children,
  variant = "gold",
  icon = "",
}: InfoBoxProps) {
  const colors = {
    gold: {
      bg: "rgba(184,146,62,0.06)",
      border: "rgba(184,146,62,0.2)",
      text: "var(--gold-dark)",
    },
    sage: {
      bg: "rgba(107,142,107,0.08)",
      border: "rgba(107,142,107,0.22)",
      text: "var(--sage)",
    },
    rose: {
      bg: "rgba(176,132,140,0.06)",
      border: "rgba(176,132,140,0.22)",
      text: "var(--rose-muted)",
    },
  };

  const c = colors[variant];

  return (
    <div
      className="my-8 p-6 md:p-7 rounded-xl border"
      style={{
        background: c.bg,
        borderColor: c.border,
      }}
    >
      <div
        className="uppercase tracking-wider font-semibold text-sm mb-3"
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          color: c.text,
        }}
      >
        {icon} {title}
      </div>
      {children}
    </div>
  );
}

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative py-4 px-5 pl-16 rounded-xl border transition-all duration-300 hover:shadow-md"
      style={{
        background: "rgba(255,255,255,0.5)",
        borderColor: "rgba(184,146,62,0.12)",
      }}
    >
      <span
        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-base"
        style={{
          background: "linear-gradient(135deg, #8B6914, #B8923E)",
          fontFamily: "var(--font-inter), sans-serif",
          boxShadow: "0 2px 8px rgba(184,146,62,0.3)",
        }}
      >
        {number}
      </span>
      <strong className="block" style={{ color: "var(--navy)", fontSize: "17px" }}>
        {title}
      </strong>
      <span className="text-sm" style={{ color: "#6B5E52" }}>
        {description}
      </span>
    </div>
  );
}

export function Ornament({ symbol = "❧ ❧ ❧" }) {
  return (
    <div className="text-center my-12 text-xl tracking-[0.5em]" style={{ color: "var(--gold)" }}>
      {symbol}
    </div>
  );
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h1
      className={`font-bold mb-2 ${className}`}
      style={{
        fontFamily: "var(--font-cormorant), Georgia, serif",
        fontSize: "clamp(2rem, 5vw, 2.75rem)",
        color: "var(--navy)",
        lineHeight: 1.2,
      }}
    >
      {children}
    </h1>
  );
}

export function SectionSubtitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-bold mt-10 mb-5 ${className}`}
      style={{
        fontFamily: "var(--font-cormorant), Georgia, serif",
        fontSize: "clamp(1.4rem, 3vw, 1.7rem)",
        color: "var(--navy)",
        lineHeight: 1.3,
      }}
    >
      {children}
    </h2>
  );
}

export function BodyText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`leading-relaxed mb-5 ${className}`}
      style={{
        fontFamily: "var(--font-cormorant), Georgia, serif",
        fontSize: "17px",
        color: "#3D342D",
      }}
    >
      {children}
    </p>
  );
}
