import { ReactNode } from 'react';

interface ExerciseBoxProps {
  title: string;
  children: ReactNode;
}

export default function ExerciseBox({ title, children }: ExerciseBoxProps) {
  return (
    <div
      className="relative rounded-2xl p-8 md:p-9 my-8"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F5EDD0 100%)',
        border: '2px solid #B8860B',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <span
        className="absolute -top-3.5 left-7 text-white px-5 py-1.5 rounded-full"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '1.5px',
          background: '#B8860B',
        }}
      >
        ✏️ {title.toUpperCase()}
      </span>
      {children}
    </div>
  );
}

interface WritingAreaProps {
  placeholder?: string;
  minHeight?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function WritingArea({
  placeholder = 'Écrivez ici...',
  minHeight = '150px',
  value,
  onChange,
}: WritingAreaProps) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-xl p-5 outline-none transition-all duration-300 resize-y"
      style={{
        minHeight,
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
  );
}
