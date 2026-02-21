import React from 'react';
import './index.css';
import BackgroundEffect from './components/BackgroundEffect';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PartnersSection from './components/PartnersSection';
import CtaSection from './components/CtaSection';

function Navbar() {
  return (
    <header className="glass" style={{ position: 'fixed', width: '100%', zIndex: 50, top: 0, borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo-elevon.png" alt="Elevon Labs" style={{ height: '68px', objectFit: 'contain', mixBlendMode: 'lighten' }} />
        </a>
        <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
          <a href="#inicio" style={{ color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--accent-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}>INÍCIO</a>
          <a href="#sobre" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>SOBRE</a>
          <a href="#servicos" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>SERVIÇOS</a>
          <a href="#resultados" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>RESULTADOS</a>
        </nav>
        <a
          href="https://wa.me/5548988670105?text=Olá%20Lucas!%20Entrei%20em%20contato%20pelo%20site%20da%20Elevon%20Labs%20e%20gostaria%20de%20conversar!"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem', borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
        >
          CONTATO
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="/logo-elevon.png" alt="Elevon Labs" style={{ height: '44px', objectFit: 'contain', mixBlendMode: 'lighten', opacity: 0.85 }} />
          © 2024 Lucas Ribeiro. Todos os direitos reservados.
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', fontWeight: 500 }}>
          <a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>Instagram</a>
          <a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>LinkedIn</a>
          <a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>YouTube</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app-wrapper">
      <BackgroundEffect />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PartnersSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
