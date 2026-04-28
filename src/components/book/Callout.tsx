import { ReactNode } from 'react';

type CalloutType = 'info' | 'warning' | 'danger';

interface CalloutProps {
  type: CalloutType;
  title: string;
  children: ReactNode;
}

const calloutStyles: Record<CalloutType, { bg: string; border: string; titleColor: string }> = {
  info: {
    bg: 'rgba(107, 142, 107, 0.08)',
    border: 'rgba(107, 142, 107, 0.25)',
    titleColor: '#6B8E6B',
  },
  warning: {
    bg: 'rgba(184, 134, 11, 0.06)',
    border: 'rgba(184, 134, 11, 0.25)',
    titleColor: '#8B6914',
  },
  danger: {
    bg: 'rgba(176, 132, 140, 0.06)',
    border: 'rgba(176, 132, 140, 0.25)',
    titleColor: '#B0848C',
  },
};

export default function Callout({ type, title, children }: CalloutProps) {
  const styles = calloutStyles[type];

  return (
    <div
      className="my-7 p-6 md:p-7 rounded-xl border"
      style={{
        background: styles.bg,
        borderColor: styles.border,
      }}
    >
      <div
        className="uppercase tracking-wider font-semibold text-sm mb-3"
        style={{
          fontFamily: 'var(--font-inter)',
          color: styles.titleColor,
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
