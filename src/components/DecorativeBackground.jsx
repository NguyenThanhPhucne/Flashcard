import { Heart, Sparkles } from "lucide-react";

export default function DecorativeBackground({ isDarkMode, floatingHearts }) {
  return (
    <>
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <div
          className={`absolute top-0 left-0 w-64 xs:w-72 sm:w-80 md:w-96 h-64 xs:h-72 sm:h-80 md:h-96 rounded-full blur-3xl transition-colors duration-500 ${
            isDarkMode ? "bg-sky-400/10" : "bg-blue-200/25"
          }`}
        />
        <div
          className={`absolute top-1/2 right-1/4 w-56 xs:w-64 sm:w-72 md:w-80 h-56 xs:h-64 sm:h-72 md:h-80 rounded-full blur-3xl transition-colors duration-500 ${
            isDarkMode ? "bg-blue-300/8" : "bg-sky-200/20"
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-64 xs:w-72 sm:w-80 md:w-96 h-64 xs:h-72 sm:h-80 md:h-96 rounded-full blur-3xl transition-colors duration-500 ${
            isDarkMode ? "bg-cyan-400/8" : "bg-blue-100/25"
          }`}
        />
        <div
          className={`absolute top-1/4 left-1/3 w-48 xs:w-56 sm:w-64 md:w-72 h-48 xs:h-56 sm:h-64 md:h-72 rounded-full blur-3xl transition-colors duration-500 ${
            isDarkMode ? "bg-pink-400/8" : "bg-pink-200/30"
          }`}
        />
      </div>

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((heart) => (
          <Heart
            key={heart.id}
            size={heart.size}
            className={`absolute opacity-20 ${
              heart.type === "beat"
                ? "animate-heartbeat"
                : "animate-float-heart"
            } ${isDarkMode ? "text-pink-300" : "text-pink-400"}`}
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Small Heart Particles - Optimized */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
        {Array.from({ length: 10 }).map((_, i) => (
          <Heart
            key={`particle-${i}`}
            size={8 + (i % 4)}
            className={`absolute animate-float-heart ${
              isDarkMode ? "text-pink-200" : "text-pink-300"
            }`}
            style={{
              left: `${(i * 10) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${15 + (i % 5) * 2}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Sparkles Effect - Optimized */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-25">
        {Array.from({ length: 8 }).map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            size={12 + (i % 3) * 2}
            className={`absolute animate-sparkle ${
              isDarkMode ? "text-blue-200" : "text-blue-300"
            }`}
            style={{
              left: `${(i * 12) % 100}%`,
              top: `${(i * 13) % 100}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      {/* Pulsing Heart Decorations - Optimized */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <Heart
            key={`pulse-${i}`}
            size={24 + (i % 3) * 4}
            className={`absolute animate-pulse-soft opacity-10 ${
              isDarkMode ? "text-pink-300" : "text-pink-400"
            }`}
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.9}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>
    </>
  );
}
