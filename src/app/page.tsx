'use client';

export default function Home() {
  return (
    <div className="book-body">
      <div className="book-container">
        <section
          className="relative flex flex-col items-center justify-center text-center px-8 py-20"
          style={{
            minHeight: '90vh',
            background: 'linear-gradient(180deg, #1B2A4A 0%, #0D1829 50%, #1B2A4A 100%)',
          }}
        >
          <div
            className="text-8xl md:text-9xl mb-10"
            style={{ animation: 'glow 3s ease-in-out infinite alternate' }}
          >
            🪞
          </div>
          <h1
            className="mb-6"
            style={{
              fontFamily: 'var(--font-amiri)',
              fontSize: 'clamp(36px, 6vw, 56px)',
              color: '#DAA520',
              textShadow: '0 0 40px rgba(218, 165, 32, 0.3)',
              lineHeight: 1.2,
            }}
          >
            L&apos;Alchimie du Miroir
          </h1>
          <p
            className="mb-10"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(18px, 3vw, 24px)',
              color: '#FFF8E7',
              opacity: 0.8,
              fontStyle: 'italic',
            }}
          >
            Méditer le Coran avec l&apos;Âme
          </p>
          <span
            className="inline-block mb-12"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#DAA520',
              border: '1.5px solid rgba(218, 165, 32, 0.5)',
              borderRadius: '999px',
              padding: '10px 28px',
            }}
          >
            ✦ Niveau 1 : Initiation ✦
          </span>
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '16px',
              color: '#FFF8E7',
              opacity: 0.5,
              fontStyle: 'italic',
              marginBottom: '8px',
            }}
          >
            Inspiré des enseignements de
          </p>
          <p
            style={{
              fontFamily: 'var(--font-amiri)',
              fontSize: '20px',
              color: '#DAA520',
              opacity: 0.7,
            }}
          >
            Al-Ghazālī • Ibn al-Qayyim • Ibn &apos;Arabī
          </p>
          <p
            className="absolute bottom-8"
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#FFF8E7',
              opacity: 0.3,
            }}
          >
            Guide Pratique Interactif
          </p>
        </section>

        <section className="book-page">
          <h1 className="book-h1">Sommaire</h1>
          <p className="book-p">Chargement du contenu en cours…</p>
          <span className="page-number">2</span>
        </section>
      </div>
    </div>
  );
}
