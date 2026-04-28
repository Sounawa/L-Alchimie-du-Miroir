'use client';

import { useState } from 'react';

interface CheckboxItemProps {
  id: string;
  children: React.ReactNode;
}

export function CheckboxItem({ id, children }: CheckboxItemProps) {
  const [checked, setChecked] = useState(false);

  return (
    <label
      htmlFor={id}
      className="flex items-start gap-4 py-3 px-4 my-2.5 rounded-xl transition-all duration-300 cursor-pointer"
      style={{
        background: checked ? 'rgba(184, 134, 11, 0.08)' : 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="w-5 h-5 mt-1 flex-shrink-0 cursor-pointer"
        style={{ accentColor: '#B8860B' }}
      />
      <span className="flex-1 cursor-pointer">{children}</span>
    </label>
  );
}
