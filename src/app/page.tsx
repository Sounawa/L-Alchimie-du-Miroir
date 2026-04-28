'use client';

import dynamic from 'next/dynamic';
import ErrorCatch from '@/components/ErrorCatch';

// Load the ENTIRE page content client-side only — zero SSR, zero hydration issues
const HomePage = dynamic(() => import('./HomePage'), {
  ssr: false,
  loading: () => (
    <div className="book-body">
      <div className="book-container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🪞</div>
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '20px', color: '#8B6914' }}>
            Chargement…
          </p>
        </div>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <ErrorCatch>
      <HomePage />
    </ErrorCatch>
  );
}
