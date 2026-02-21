import React from 'react';
import { motion } from 'framer-motion';

export default function CtaSection() {
    return (
        <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass"
                    style={{
                        padding: '4rem 2rem',
                        borderRadius: '24px',
                        border: '1px solid var(--accent-primary)',
                        boxShadow: '0 0 50px rgba(255, 77, 0, 0.1)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}
                >
                    <h2 className="heading-md" style={{ marginBottom: '1rem' }}>
                        Pronto para <span className="text-gradient">escalar seu faturamento?</span>
                    </h2>
                    <p className="text-lead" style={{ marginBottom: '2.5rem' }}>
                        Solicite um diagnóstico gratuito do seu negócio hoje mesmo e descubra como a IA pode acelerar seus resultados.
                    </p>
                    <a
                        href="https://wa.me/5548988670105?text=Olá%20Lucas!%20Gostaria%20de%20solicitar%20um%20diagnóstico%20gratuito%20para%20o%20meu%20negócio.%20Vi%20o%20seu%20site%20e%20quero%20saber%20como%20a%20IA%20pode%20acelerar%20meus%20resultados!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ padding: '1rem 2rem', fontSize: '1rem', display: 'inline-flex' }}
                    >
                        QUERO MEU DIAGNÓSTICO GRATUITO
                    </a>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                        * Vagas limitadas para consultoria estratégica mensal.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
