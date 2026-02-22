import React, { useMemo } from 'react';

export default function ParticleGlobe() {
    const particles = useMemo(() => {
        const numParticles = 300;
        const pts = [];
        const phi = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < numParticles; i++) {
            const y = 1 - (i / (numParticles - 1)) * 2;
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;
            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;
            const size = 350;
            pts.push({ x: x * size, y: y * size, z: z * size });
        }
        return pts;
    }, []);

    return (
        <>
            <style>{`
                @keyframes rotateGlobeAnim {
                    0%   { transform: rotateY(0deg)   rotateX(15deg) rotateZ(-10deg); }
                    100% { transform: rotateY(360deg) rotateX(15deg) rotateZ(-10deg); }
                }
                @media (max-width: 768px) {
                    .globe-wrapper { display: none !important; }
                }
            `}</style>
            <div className="globe-wrapper" style={{
                position: 'absolute',
                top: '50%',
                left: '70%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                perspective: '1200px',
                zIndex: -1,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                opacity: 0.8
            }}>
                <div style={{
                    position: 'relative',
                    width: '0',
                    height: '0',
                    transformStyle: 'preserve-3d',
                    animation: 'rotateGlobeAnim 50s linear infinite'
                }}>
                    {particles.map((p, i) => {
                        const depthOpacity = Math.max(0.1, (p.z + 350) / 700);
                        return (
                            <div
                                key={i}
                                style={{
                                    position: 'absolute',
                                    top: p.y,
                                    left: p.x,
                                    transform: `translate3d(0, 0, ${p.z}px)`,
                                    width: '3px',
                                    height: '3px',
                                    background: i % 3 === 0 ? '#ffffff' : 'var(--accent-primary)',
                                    borderRadius: '50%',
                                    opacity: depthOpacity,
                                    boxShadow: i % 3 !== 0 ? '0 0 8px var(--accent-primary)' : '0 0 5px #fff'
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}
