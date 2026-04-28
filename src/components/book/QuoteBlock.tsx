import { ReactNode } from 'react';

interface QuoteBlockProps {
  children: ReactNode;
  cite?: string;
}

export default function QuoteBlock({ children, cite }: QuoteBlockProps) {
  return (
    <blockquote
      className="my-7 rounded-r-xl p-6 md:p-7 italic text-lg"
      style={{
        background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.05) 0%, rgba(218, 165, 32, 0.03) 100%)',
        borderLeft: '4px solid #B8860B',
        color: '#2C2C2C',
      }}
    >
      {children}
      {cite && (
        <cite
          className="block mt-3 not-italic font-semibold text-sm"
          style={{
            color: '#8B6914',
            fontFamily: 'var(--font-inter)',
          }}
        >
          {cite}
        </cite>
      )}
    </blockquote>
  );
}
