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

        {/* Action Buttons */}
        <div
          className="flex gap-2 mt-1 -ml-3"
          style={{ transform: "translateZ(10px)" }}
        >
          <button
            onClick={() => onOpen(deck.id, false)}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
              isDarkMode
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            <BookOpen size={16} />
            Học
          </button>

          <button
            onClick={() => onOpen(deck.id, true)}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
              isDarkMode
                ? "bg-emerald-400 hover:bg-emerald-500 text-slate-900"
                : "bg-emerald-300 hover:bg-emerald-400 text-slate-800"
            }`}
          >
            <Gamepad2 size={16} />
            Chơi
          </button>
        </div>
      </div>
    </div>
  );
}
