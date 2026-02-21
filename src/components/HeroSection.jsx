import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticleGlobe from './ParticleGlobe';

// Words that will cycle with a typewriter effect in the highlighted span
const CYCLE_WORDS = ['IA', 'Tráfego', 'Resultados', 'Crescimento'];

function TypewriterWord() {
    const [index, setIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = CYCLE_WORDS[index];
        let timeout;

        if (!deleting && displayed.length < word.length) {
            // Typing
            timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100);
        } else if (!deleting && displayed.length === word.length) {
            // Pause before deleting
            timeout = setTimeout(() => setDeleting(true), 1800);
        } else if (deleting && displayed.length > 0) {
            // Deleting
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 60);
        } else if (deleting && displayed.length === 0) {
            // Move to next word
            setDeleting(false);
            setIndex((prev) => (prev + 1) % CYCLE_WORDS.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, index]);

    return (
        <span className="text-gradient" style={{ fontWeight: 600, display: 'inline-block', minWidth: '120px' }}>
            {displayed}
            <span style={{
                display: 'inline-block',
                width: '2px',
                height: '0.85em',
                background: 'var(--accent-primary)',
                marginLeft: '2px',
                verticalAlign: 'middle',
                animation: 'blink-cursor 0.8s step-end infinite'
            }} />
        </span>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, ease: 'easeOut' }
    })
};

export default function HeroSection() {
    return (
        <section
            id="inicio"
            className="section-padding"
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '120px', overflow: 'hidden' }}
        >
            <style>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

            <ParticleGlobe />
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ maxWidth: '820px' }}>

                    {/* Title - splits into two lines with typewriter on keyword */}
                    <motion.h1
                        className="heading-lg"
                        style={{ marginBottom: '1.5rem' }}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={0.1}
                    >
                        Lucas Ribeiro: Elevando Negócios Locais com{' '}
                        <TypewriterWord />{' '}
                        de Alta Performance
                    </motion.h1>

                    {/* Subtitle - simple fade-in */}
                    <motion.p
                        className="text-lead"
                        style={{ marginBottom: '2.5rem', maxWidth: '600px' }}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={0.55}
                    >
                        Na <strong style={{ fontWeight: 500, color: '#fff' }}>Elevon Labs</strong>, transformamos empresas
                        através da Inteligência de dados e automação avançada. Escale seu faturamento com estratégias validadas
                        de marketing digital.
                    </motion.p>

                    {/* Buttons - fade-in last */}
                    <motion.div
                        style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        custom={0.85}
                    >
                        <a
                            href="https://wa.me/5548988670105?text=Olá%20Lucas!%20Quero%20escalar%20meu%20negócio%20com%20tráfego%20e%20IA.%20Vi%20o%20seu%20site%20e%20gostaria%20de%20conversar!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ borderRadius: '50px' }}
                        >
                            QUERO ESCALAR MEU NEGÓCIO
                        </a>
                        <a
                            href="https://wa.me/5548988670105?text=Olá%20Lucas!%20Vi%20o%20seu%20site%20e%20gostaria%20de%20conhecer%20melhor%20os%20seus%20serviços!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ borderRadius: '50px' }}
                        >
                            VER SERVIÇOS
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
