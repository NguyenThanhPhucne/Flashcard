import { useEffect, useState } from "react";

export default function Confetti({ isActive }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (isActive) {
      // Generate confetti particles
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random(),
        color: [
          "bg-yellow-400",
          "bg-blue-400",
          "bg-green-400",
          "bg-red-400",
          "bg-purple-400",
          "bg-pink-400",
          "bg-orange-400",
        ][Math.floor(Math.random() * 7)],
        size: 8 + Math.random() * 8,
      }));
      setParticles(newParticles);

      // Clear after animation
      const timer = setTimeout(() => {
        setParticles([]);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute top-0 ${particle.color} animate-confetti`}
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            boxShadow: "2px 2px 0 rgba(0,0,0,0.3)",
          }}
        />
      ))}
    </div>
  );
}
