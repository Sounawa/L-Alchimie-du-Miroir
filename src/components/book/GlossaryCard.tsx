interface GlossaryCardProps {
  arabic: string;
  term: string;
  pronunciation: string;
  definition: string;
}

export default function GlossaryCard({
  arabic,
  term,
  pronunciation,
  definition,
}: GlossaryCardProps) {
  return (
    <div
      className="bg-white p-5 rounded-xl border"
      style={{ borderColor: 'rgba(184, 134, 11, 0.2)' }}
    >
      <div
        className="text-xl mb-1"
        style={{
          fontFamily: 'var(--font-noto-naskh)',
          direction: 'rtl',
          color: '#8B6914',
        }}
      >
        {arabic}
      </div>
      <div className="font-semibold my-1">{term}</div>
      <div className="text-sm" style={{ color: '#5A5A5A' }}>
        ({pronunciation}) — {definition}
      </div>
    </div>
  );
}
