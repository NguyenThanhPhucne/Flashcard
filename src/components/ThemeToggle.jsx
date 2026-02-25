import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ isDarkMode, onToggle }) {
  return (
    <div style={{ perspective: "1000px" }}>
      <button
        onClick={onToggle}
        onMouseMove={(e) => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -12;
          const rotateY = ((x - centerX) / centerX) * 12;
          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "rotateX(0deg) rotateY(0deg) scale(1)";
        }}
        className={`p-2 xs:p-2.5 sm:p-2.5 md:p-3 lg:p-3.5 rounded-lg xs:rounded-xl shadow-md hover:shadow-lg active:scale-95 border-2 touch-manipulation ${
          isDarkMode
            ? "bg-slate-800/70 border-slate-600/40 hover:bg-slate-700/70 hover:border-amber-400/60 text-amber-300 hover:text-amber-400 hover:shadow-amber-400/15"
            : "bg-white border-blue-200/60 hover:bg-pink-50 hover:border-pink-300 text-slate-600 hover:text-pink-500 hover:shadow-pink-300/25"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transition:
            "transform 0.1s ease-out, box-shadow 0.3s, background-color 0.3s, border-color 0.3s",
        }}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? (
          <Sun
            size={16}
            className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-transform duration-300 hover:rotate-90"
          />
        ) : (
          <Moon
            size={16}
            className="xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-transform duration-300 hover:-rotate-12"
          />
        )}
      </button>
    </div>
  );
}
