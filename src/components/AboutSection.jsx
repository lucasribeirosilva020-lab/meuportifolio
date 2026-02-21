import React from 'react';
import { motion } from 'framer-motion';
import { InstagramLogo } from '@phosphor-icons/react';

export default function AboutSection() {
    return (
        <section id="sobre" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ flex: '1 1 380px', position: 'relative', display: 'flex', justifyContent: 'center' }}
                    >
                        {/* Glow behind image */}
                        <div style={{
                            position: 'absolute', inset: -10, borderRadius: '16px', boxShadow: '0 0 60px var(--glow-color)', zIndex: -1
                        }} />
                        <img
                            src="/lucas_portrait.png"
                            alt="Lucas Ribeiro"
                            style={{
                                width: '100%',
                                maxWidth: '420px',
                                maxHeight: '540px',
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                borderRadius: '16px',
                                border: '1px solid var(--border-color)',
                                display: 'block'
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ flex: '1 1 500px' }}
                    >
                        <span style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            Fundador da Elevon Labs
                        </span>
                        <h2 className="heading-md" style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                            Estrategista Digital focado em <span className="text-gradient">Resultados Reais</span>
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-secondary)' }}>
                            <p>
                                Olá, eu sou <strong>Lucas Ribeiro</strong>. Minha missão é simples: utilizar a tecnologia de ponta para colocar negócios locais no topo do mercado.
                            </p>
                            <p>
                                Com vasta experiência em <strong>Inteligência Artificial aplicada ao marketing</strong> e gestão de tráfego pago, fundei a Elevon Labs para ser o motor de crescimento de empresas que buscam eficiência e escala agressiva.
                            </p>
                            <p>
                                Acredito que o marketing moderno não é apenas sobre anúncios, mas sobre a criação de ecossistemas inteligentes que convertem curiosos em clientes fiéis.
                            </p>
                        </div>

                        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                            <InstagramLogo size={24} color="var(--accent-primary)" weight="bold" />
                            <span style={{ fontWeight: 600 }}>@lucasribeiro.ia</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
