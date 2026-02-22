import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WhatsappLogo, ArrowsOut } from '@phosphor-icons/react';

const screenshots = [
    { src: '/whatsapp-1.png', label: 'Sistema Personalizado & Dashboard' },
    { src: '/whatsapp-2.png', label: 'Desenvolvimento de Site' },
    { src: '/whatsapp-3.png', label: 'Site Institucional' },
];

const partners = [
    "CEU PSICOLOGIA",
    "CLINICPRO",
    "CLINICA TEAMPARAR",
    "PROTOCOLO PAC",
    "VITAFLOW",
];


export default function PartnersSection() {
    const [lightbox, setLightbox] = useState(null);

    return (
        <section id="resultados" className="section-padding" style={{ position: 'relative' }}>
            {/* Lightbox overlay */}
            {lightbox !== null && (
                <div
                    onClick={() => setLightbox(null)}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 9999,
                        background: 'rgba(0,0,0,0.92)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'zoom-out', padding: '1rem'
                    }}
                >
                    <img
                        src={screenshots[lightbox].src}
                        alt="Prova social"
                        style={{ maxHeight: '90vh', maxWidth: '90vw', borderRadius: '12px', boxShadow: '0 0 60px rgba(0,0,0,0.8)' }}
                    />
                </div>
            )}

            <div className="container">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37, 211, 102, 0.1)', border: '1px solid rgba(37, 211, 102, 0.3)', borderRadius: '20px', padding: '0.4rem 1rem', marginBottom: '1.5rem' }}>
                        <WhatsappLogo size={18} weight="fill" color="#25D366" />
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#25D366', letterSpacing: '0.1em' }}>DEPOIMENTOS REAIS DE CLIENTES</span>
                    </div>
                    <h2 className="heading-md">
                        O que nossos <span className="text-gradient">clientes dizem</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontWeight: 300 }}>
                        Mensagens reais recebidas pelo WhatsApp — sem edição.
                    </p>
                </motion.div>

                {/* Dual-row animated marquee */}
                <div style={{ marginBottom: '4rem' }}>
                    <style>{`
                        @keyframes marquee-ltr { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                        @keyframes marquee-rtl { from { transform: translateX(-50%); } to { transform: translateX(0); } }
                        .marquee-track { display: flex; width: max-content; }
                        .marquee-row { overflow: hidden; mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%); margin-bottom: 1rem; }
                        .marquee-row:hover .marquee-track { animation-play-state: paused; }
                        .marquee-ltr .marquee-track { animation: marquee-ltr 25s linear infinite; }
                        .marquee-rtl .marquee-track { animation: marquee-rtl 25s linear infinite; }
                    `}</style>

                    {/* Row 1: right to left */}
                    <div className="marquee-row marquee-ltr">
                        <div className="marquee-track">
                            {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
                                <span key={i} style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 800,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(255,140,0,0.6)',
                                    padding: '0 2.5rem',
                                    whiteSpace: 'nowrap',
                                    userSelect: 'none'
                                }}>
                                    {p} <span style={{ color: 'rgba(255,140,0,0.25)', margin: '0 0.5rem' }}>✦</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Row 2: left to right */}
                    <div className="marquee-row marquee-rtl">
                        <div className="marquee-track">
                            {[...partners, ...partners, ...partners, ...partners].map((p, i) => (
                                <span key={i} style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 800,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(255,140,0,0.6)',
                                    padding: '0 2.5rem',
                                    whiteSpace: 'nowrap',
                                    userSelect: 'none'
                                }}>
                                    {p} <span style={{ color: 'rgba(255,140,0,0.25)', margin: '0 0.5rem' }}>✦</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Screenshot cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    alignItems: 'start'
                }}>
                    {screenshots.map((ss, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            onClick={() => setLightbox(index)}
                            className="glass"
                            style={{
                                borderRadius: '16px',
                                border: '1px solid var(--border-color)',
                                overflow: 'hidden',
                                cursor: 'zoom-in',
                                position: 'relative',
                                transition: 'border-color 0.3s, transform 0.3s'
                            }}
                            whileHover={{ y: -6, borderColor: 'var(--accent-primary)' }}
                        >
                            {/* Image */}
                            <img
                                src={ss.src}
                                alt={`Depoimento - ${ss.label}`}
                                style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                            />

                            {/* Bottom label */}
                            <div style={{
                                padding: '0.875rem 1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderTop: '1px solid var(--border-color)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <WhatsappLogo size={14} weight="fill" color="#25D366" />
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{ss.label}</span>
                                </div>
                                <ArrowsOut size={14} color="var(--text-secondary)" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
