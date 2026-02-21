import React from 'react';
import { motion } from 'framer-motion';
import { TrendUp, HardDrives, Desktop, Users, Robot, ArrowRight } from '@phosphor-icons/react';

const WA = '5548988670105';

const services = [
    {
        icon: <TrendUp size={32} weight="duotone" color="var(--accent-primary)" />,
        title: "Tráfego Pago Local",
        desc: "Estratégias de Google e Meta Ads otimizadas para atrair clientes prontos para comprar no seu estabelecimento.",
        waMsg: "Olá Lucas! Tenho interesse em Tráfego Pago Local para o meu negócio. Gostaria de saber mais!"
    },
    {
        icon: <HardDrives size={32} weight="duotone" color="var(--accent-primary)" />,
        title: "Sistemas Personalizados e Dashboard",
        desc: "Desenvolvimento de sistemas sob medida e dashboards inteligentes para visualizar métricas, tomar decisões e escalar com dados.",
        waMsg: "Olá Lucas! Tenho interesse em um Sistema Personalizado e Dashboard para minha empresa. Pode me ajudar?"
    },
    {
        icon: <Desktop size={32} weight="duotone" color="var(--accent-primary)" />,
        title: "Landings de Alta Conversão",
        desc: "Websites e Landing Pages ultra velozes projetadas com foco total em experiência do usuário e conversão de vendas.",
        waMsg: "Olá Lucas! Tenho interesse em uma Landing Page de Alta Conversão. Gostaria de saber mais sobre o serviço!"
    },
    {
        icon: <Users size={32} weight="duotone" color="var(--accent-primary)" />,
        title: "Treinamento de Vendas",
        desc: "Capacitação do seu time comercial para lidar com o volume de leads e fechar contratos com a alta eficiência.",
        waMsg: "Olá Lucas! Tenho interesse no Treinamento de Vendas para o meu time. Pode me contar mais detalhes?"
    },
    {
        icon: <Robot size={32} weight="duotone" color="var(--accent-primary)" />,
        title: "Automações com Agentes de IA",
        desc: "Agentes de Inteligência Artificial autônomos que executam tarefas, respondem clientes e tomam decisões 24/7, sem intervenção humana.",
        waMsg: "Olá Lucas! Tenho interesse em Automações com Agentes de IA para o meu negócio. Como funciona?"
    }
];

export default function ServicesSection() {
    return (
        <section id="servicos" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="heading-md"
                        style={{ marginBottom: '1rem' }}
                    >
                        Soluções da <span className="text-gradient">Elevon Labs</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Frameworks exclusivos desenvolvidos para maximizar sua lucratividade através de tecnologia e vendas.
                    </motion.p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                            className="glass"
                            style={{
                                padding: '2rem',
                                borderRadius: '12px',
                                border: '1px solid var(--border-color)',
                                transition: 'border-color 0.3s',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                        >
                            <div style={{
                                width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(255,77,0,0.1)', display: 'grid', placeItems: 'center'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', flex: 1 }}>{service.desc}</p>

                            {/* Saiba Mais button */}
                            <a
                                href={`https://wa.me/${WA}?text=${encodeURIComponent(service.waMsg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    color: 'var(--accent-primary)',
                                    fontWeight: 600,
                                    fontSize: '0.875rem',
                                    marginTop: '0.25rem',
                                    transition: 'gap 0.2s'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.gap = '0.75rem'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.gap = '0.4rem'; }}
                            >
                                Saiba mais <ArrowRight size={16} weight="bold" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


