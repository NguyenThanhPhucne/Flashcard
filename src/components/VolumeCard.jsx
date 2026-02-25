import { BookOpen, BookText, Mic, Sparkles, ArrowLeft } from "lucide-react";

export default function VolumeCard({ volume, isDarkMode, onOpen }) {
  const Icon = volume.skill === "Speaking" ? Mic : BookText;
  const volumeNum = volume.volume.replace(/\D/g, "");

  return (
    <div className="perspective-1000" style={{ perspective: "1200px" }}>
      <button
        onClick={() => onOpen(volume.skill, volume.volume)}
        onMouseMove={(e) => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -8;
          const rotateY = ((x - centerX) / centerX) * 8;
          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "rotateX(0deg) rotateY(0deg) scale(1)";
        }}
        className={`group relative w-full text-left rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 lg:p-9 border-2 transition-all duration-500 hover:shadow-2xl active:scale-[0.97] overflow-hidden ${
          isDarkMode
            ? "bg-gradient-to-br from-slate-800/90 via-slate-800/80 to-slate-900/90 border-slate-700/60 hover:border-blue-400/70 hover:shadow-blue-500/30"
            : "bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-blue-200 hover:border-blue-400 hover:shadow-blue-300/50"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transition:
            "transform 0.2s ease-out, box-shadow 0.4s, border-color 0.4s, background 0.4s",
        }}
      >
        {/* Background Gradient Overlay */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            isDarkMode
              ? "bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"
              : "bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-pink-100/50"
          }`}
        />

        {/* Content Container */}
        <div className="relative">
          {/* Top Section: Icon and Badge */}
          <div className="flex items-center justify-between mb-6 sm:mb-7">
            <div
              className={`w-16 sm:w-18 md:w-20 lg:w-20 h-16 sm:h-18 md:h-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg ${
                isDarkMode
                  ? "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 shadow-blue-500/20 text-blue-300"
                  : "bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 shadow-blue-300/40 text-blue-600"
              }`}
              style={{ transform: "translateZ(30px)" }}
            >
              <BookOpen
                size={36}
                className="w-8 sm:w-9 md:w-10"
                strokeWidth={2.5}
              />
            </div>
            {/* Skill badge - top right */}
            <div
              className={`flex items-center gap-2 px-3 md:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-sm md:text-base font-extrabold shadow-md transition-all duration-300 group-hover:scale-105 ${
                isDarkMode
                  ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 shadow-pink-500/20"
                  : "bg-gradient-to-r from-pink-200 to-purple-200 text-pink-700 shadow-pink-300/40"
              }`}
              style={{ transform: "translateZ(20px)" }}
            >
              <Icon size={16} className="w-4 h-4" strokeWidth={3} />
              {volume.skill}
            </div>
          </div>

          {/* Title - More Prominent */}
          <h3
            className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black mb-5 sm:mb-6 transition-all duration-300 tracking-tight ${
              isDarkMode
                ? "text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 group-hover:bg-clip-text"
                : "text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text"
            }`}
            style={{ transform: "translateZ(40px)" }}
          >
            Vol {volumeNum}
          </h3>

          {/* Divider */}
          <div
            className={`h-0.5 w-16 mb-5 rounded-full transition-all duration-300 group-hover:w-24 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-400 to-purple-400"
                : "bg-gradient-to-r from-blue-500 to-purple-500"
            }`}
            style={{ transform: "translateZ(15px)" }}
          />

          {/* Stats - Enhanced */}
          <div className="space-y-3" style={{ transform: "translateZ(20px)" }}>
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-lg sm:rounded-xl text-sm sm:text-base font-bold transition-all duration-300 group-hover:scale-105 ${
                  isDarkMode
                    ? "bg-slate-700/50 text-blue-300"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                <BookText size={18} strokeWidth={2.5} />
                {volume.topics.length} chủ đề
              </div>
            </div>
            <div
              className={`text-base sm:text-lg font-semibold flex items-center gap-2 ${
                isDarkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <Sparkles size={16} className="opacity-70" />
              {volume.totalCards} từ vựng
            </div>
          </div>

          {/* Hover Indicator */}
          <div
            className={`mt-6 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 ${
              isDarkMode ? "text-blue-300" : "text-blue-600"
            }`}
          >
            <span>Nhấn để mở</span>
            <ArrowLeft
              size={16}
              className="rotate-180 group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </button>
    </div>
  );
}
