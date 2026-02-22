import React, { useState } from 'react';
import './index.css';
import BackgroundEffect from './components/BackgroundEffect';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PartnersSection from './components/PartnersSection';
import CtaSection from './components/CtaSection';

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#inicio', label: 'INÍCIO' },
    { href: '#sobre', label: 'SOBRE' },
    { href: '#servicos', label: 'SERVIÇOS' },
    { href: '#resultados', label: 'RESULTADOS' },
  ];

  return (
    <header className="glass" style={{ position: 'fixed', width: '100%', zIndex: 50, top: 0, borderBottom: '1px solid var(--border-color)' }}>
      <style>{`
        @media (min-width: 769px) { .nav-hamburger { display: none !important; } }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
        }
        .nav-drawer {
          position: fixed; inset: 0; top: 80px;
          background: rgba(10,10,10,0.97);
          backdrop-filter: blur(16px);
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 2rem;
          z-index: 49;
        }
        .nav-drawer a {
          font-size: 1.5rem; font-weight: 700;
          color: var(--text-secondary); transition: color 0.2s;
          text-transform: uppercase; letter-spacing: 0.1em;
        }
        .nav-drawer a:hover { color: var(--accent-primary); }
        .hamburger-btn {
          background: none; border: none; cursor: pointer;
          display: flex; flex-direction: column; gap: 5px; padding: 8px;
        }
        .hamburger-btn span {
          display: block; width: 24px; height: 2px;
          background: #fff; transition: all 0.3s;
          transform-origin: center;
        }
        .hamburger-btn.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger-btn.active span:nth-child(2) { opacity: 0; }
        .hamburger-btn.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
      `}</style>

      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo-elevon.png" alt="Elevon Labs" style={{ height: '68px', objectFit: 'contain', mixBlendMode: 'lighten' }} />
        </a>

        {/* Desktop nav */}
        <nav className="nav-links-desktop" style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >{l.label}</a>
          ))}
        </nav>

        <a
          href="https://wa.me/5548988670105?text=Olá%20Lucas!%20Entrei%20em%20contato%20pelo%20site%20da%20Elevon%20Labs%20e%20gostaria%20de%20conversar!"
          target="_blank" rel="noopener noreferrer"
          className="btn btn-outline nav-cta-desktop"
          style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem', borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
        >
          CONTATO
        </a>

        {/* Hamburger */}
        <button className={`hamburger-btn nav-hamburger ${open ? 'active' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-drawer">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a
            href="https://wa.me/5548988670105?text=Olá%20Lucas!%20Entrei%20em%20contato%20pelo%20site%20da%20Elevon%20Labs%20e%20gostaria%20de%20conversar!"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
            style={{ marginTop: '1rem', borderRadius: '50px', fontSize: '0.875rem' }}
          >
            CONTATO VIA WHATSAPP
          </a>
        </div>
      )}
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
