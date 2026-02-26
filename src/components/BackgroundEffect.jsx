import React from 'react';

export default function BackgroundEffect() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, overflow: 'hidden', background: 'var(--bg-primary)' }}>
            <style>{`
                @keyframes glowPulse {
                    0%, 100% { transform: translate(-50%, -50%) scale(1);   opacity: 0.3; }
                    50%       { transform: translate(-50%, -50%) scale(1.1); opacity: 0.5; }
                }
            `}</style>

            {/* Grid Pattern */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    opacity: 0.5
                }}
            />

            {/* Orange Glow — CSS animation (GPU-accelerated, safe on Android) */}
            <div
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(255, 77, 0, 0.15) 0%, rgba(255, 77, 0, 0) 60%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    animation: 'glowPulse 10s ease-in-out infinite',
                    willChange: 'transform, opacity'
                }}
            />
        </div>
    );
}
