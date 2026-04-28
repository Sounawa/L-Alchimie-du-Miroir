'use client';

import { ReactNode, useRef, useCallback } from 'react';

interface PromptChipProps {
  text: string;
  onClick: (text: string) => void;
}

export function PromptChip({ text, onClick }: PromptChipProps) {
  return (
    <div
      className="px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
      style={{
        background: 'rgba(107, 142, 107, 0.08)',
        border: '1px solid rgba(107, 142, 107, 0.25)',
      }}
      onClick={() => onClick(text)}
    >
      {text}
    </div>
  );
}

interface MunajatWriterProps {
  prompts: string[];
}

export function MunajatWriter({ prompts }: MunajatWriterProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertPrompt = useCallback((text: string) => {
    if (textareaRef.current) {
      textareaRef.current.value = text + ' ';
      textareaRef.current.focus();
    }
  }, []);

  return { textareaRef, insertPrompt };
}
