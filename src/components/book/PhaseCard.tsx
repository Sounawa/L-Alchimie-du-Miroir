interface PhaseCardProps {
  icon: string;
  name: string;
  arabic: string;
  description: string;
  duration: string;
}

export default function PhaseCard({ icon, name, arabic, description, duration }: PhaseCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default border border-transparent hover:border-gold-primary"
      style={{
        borderColor: 'rgba(184, 134, 11, 0.2)',
      }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div
        className="text-xl mb-1"
        style={{
          fontFamily: 'var(--font-amiri)',
          color: '#1B2A4A',
        }}
      >
        {name}
      </div>
      <div
        className="text-lg mb-3"
        style={{
          fontFamily: 'var(--font-noto-naskh)',
          direction: 'rtl',
          color: '#8B6914',
        }}
      >
        {arabic}
      </div>
      <p className="text-sm mb-3" style={{ color: '#5A5A5A' }}>
        {description}
      </p>
      <span
        className="inline-block px-4 py-1 rounded-full text-xs"
        style={{
          fontFamily: 'var(--font-inter)',
          color: '#5A5A5A',
          background: 'rgba(184, 134, 11, 0.08)',
        }}
      >
        {duration}
      </span>
    </div>
  );
}
