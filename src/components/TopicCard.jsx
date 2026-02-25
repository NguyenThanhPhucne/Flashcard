import { BookOpen, Gamepad2 } from "lucide-react";

export default function TopicCard({ deck, isDarkMode, onOpen }) {
  return (
    <div style={{ perspective: "1000px" }}>
      <div
        onMouseMove={(e) => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -12;
          const rotateY = ((x - centerX) / centerX) * 12;
          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "rotateX(0deg) rotateY(0deg) scale(1)";
        }}
        className={`group w-full text-left rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 hover:shadow-2xl ${
          isDarkMode
            ? "bg-slate-800/60 border-slate-700/50 hover:border-blue-400/60 hover:bg-slate-800/70"
            : "bg-white border-blue-200/60 hover:border-blue-300 hover:shadow-blue-200/40"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transition:
            "transform 0.1s ease-out, box-shadow 0.3s, border-color 0.3s",
        }}
      >
        <div
          className={`w-12 sm:w-12 md:w-14 lg:w-14 h-12 sm:h-12 md:h-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110 ${
            isDarkMode
              ? "bg-blue-400/10 text-blue-300"
              : "bg-blue-100/80 text-blue-500"
          }`}
          style={{ transform: "translateZ(20px)" }}
        >
          <BookOpen
            size={28}
            strokeWidth={2.5}
            style={{ minWidth: 28, minHeight: 28 }}
          />
        </div>
        <h3
          className={`text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-2.5 transition-colors duration-300 line-clamp-2 ${
            isDarkMode
              ? "text-white group-hover:text-blue-300"
              : "text-slate-900 group-hover:text-blue-500"
          }`}
          style={{ transform: "translateZ(25px)" }}
        >
          {deck.topic}
        </h3>
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-xs sm:text-xs font-semibold mb-4 ${
            isDarkMode
              ? "bg-slate-700/35 text-blue-300"
              : "bg-blue-100/80 text-blue-600"
          }`}
          style={{ transform: "translateZ(10px)" }}
        >
          {deck.cards.length} từ vựng
        </div>

        {/* Action Buttons - Professional Glassmorphism */}
        <div
          className="flex gap-2.5 mt-1 -ml-3"
          style={{ transform: "translateZ(10px)" }}
        >
          <button
            onClick={() => onOpen(deck.id, false)}
            className={`group/btn flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-lg ${
              isDarkMode
                ? "bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border-blue-400/30 hover:border-blue-300/50 text-blue-200 hover:text-blue-100"
                : "bg-gradient-to-br from-blue-200/40 to-indigo-300/40 border-blue-300/50 hover:border-blue-400/70 text-blue-700 hover:text-blue-800"
            }`}
          >
            <BookOpen
              size={18}
              className="transition-transform duration-300 group-hover/btn:scale-110"
              strokeWidth={2.5}
            />
            <span>Học</span>
          </button>

          <button
            onClick={() => onOpen(deck.id, true)}
            className={`group/btn flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-lg ${
              isDarkMode
                ? "bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border-emerald-400/30 hover:border-emerald-300/50 text-emerald-200 hover:text-emerald-100"
                : "bg-gradient-to-br from-emerald-200/40 to-teal-300/40 border-emerald-300/50 hover:border-emerald-400/70 text-emerald-700 hover:text-emerald-800"
            }`}
          >
            <Gamepad2
              size={18}
              className="transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:scale-110"
              strokeWidth={2.5}
            />
            <span>Chơi</span>
          </button>
        </div>
      </div>
    </div>
  );
}
