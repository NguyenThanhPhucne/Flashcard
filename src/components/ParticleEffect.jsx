import { useEffect, useState } from "react";

export default function ParticleEffect({ trigger, type = "success" }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (trigger) {
      const colors =
        type === "success"
          ? ["bg-green-400", "bg-emerald-400", "bg-teal-400"]
          : ["bg-red-400", "bg-rose-400", "bg-orange-400"];

      const newParticles = Array.from({ length: 12 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / 12;
        const velocity = 2 + Math.random();
        return {
          id: Date.now() + i,
          x: Math.cos(angle) * velocity * 30,
          y: Math.sin(angle) * velocity * 30,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 6 + Math.random() * 6,
          delay: Math.random() * 0.1,
        };
      });

      setParticles(newParticles);

      const timer = setTimeout(() => {
        setParticles([]);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [trigger, type]);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${particle.color} animate-particle`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: `translate(${particle.x}px, ${particle.y}px)`,
            animationDelay: `${particle.delay}s`,
            boxShadow: "2px 2px 0 rgba(0,0,0,0.4)",
          }}
        />
      ))}
    </div>
  );
}
