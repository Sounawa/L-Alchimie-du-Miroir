import { ReactNode, Children, isValidElement, cloneElement } from 'react';

interface NumberedStepsProps {
  children: ReactNode;
}

export default function NumberedSteps({ children }: NumberedStepsProps) {
  return (
    <div className="my-5 space-y-3.5">
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child as React.ReactElement<{ stepNumber: number }>, {
            stepNumber: index + 1,
          });
        }
        return child;
      })}
    </div>
  );
}

interface StepProps {
  stepNumber?: number;
  title: string;
  children: ReactNode;
}

export function Step({ stepNumber, title, children }: StepProps) {
  return (
    <div
      className="relative py-4 px-5 pl-16 rounded-xl border transition-all duration-300 hover:shadow-md"
      style={{
        background: 'rgba(255, 255, 255, 0.5)',
        borderColor: 'rgba(184, 134, 11, 0.12)',
      }}
    >
      <span
        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-base"
        style={{
          background: 'linear-gradient(135deg, #B8860B, #DAA520)',
          fontFamily: 'var(--font-inter)',
          boxShadow: '0 2px 8px rgba(184, 134, 11, 0.3)',
        }}
      >
        {stepNumber}
      </span>
      <strong className="block" style={{ color: '#1B2A4A', fontSize: '17px' }}>
        {title}
      </strong>
      <span className="text-sm" style={{ color: '#5A5A5A' }}>
        {children}
      </span>
    </div>
  );
}
