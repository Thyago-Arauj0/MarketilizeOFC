'use client';

import { useEffect, useState } from 'react';

type ParticleStyle = {
  width: string;
  height: string;
  top: string;
  left: string;
  animation: string;
  animationDelay: string;
  transform: string;
  opacity: string;
};

export function ParticleBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="absolute inset-0 overflow-hidden" />;
  }

  return <ClientParticleBackground />;
}

function ClientParticleBackground() {
  const [particles, setParticles] = useState<ParticleStyle[]>([]);

  useEffect(() => {
    setParticles(
      [...Array(24)].map(() => {
        const size = Math.random() * 8 + 3;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 3;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        return {
          width: `${size}px`,
          height: `${size}px`,
          top: `${startY}%`,
          left: `${startX}%`,
          animation: `float ${duration}s ease-in-out infinite alternate`,
          animationDelay: `${delay}s`,
          transform: 'translate(0, 0)',
          opacity: `${Math.random() * 0.4 + 0.2}`
        };
      })
    );
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
            opacity: 0.8;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0.8;
          }
        }
      `}</style>
      
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((style, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#2A7AFF] to-[#FF4D4D]"
            style={style}
          />
        ))}
      </div>
    </>
  );
}