import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

export default function Navigation({ onPrev, onNext, onFlip, isDarkMode }) {
  const handle3DTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-4 xs:mt-5 sm:mt-6 md:mt-8 w-full px-2 xs:px-3 sm:px-4">
      <div style={{ perspective: "1000px" }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          onMouseMove={handle3DTilt}
          onMouseLeave={resetTilt}
          className={`p-2.5 xs:p-3 sm:p-3 md:p-3.5 lg:p-4 rounded-lg xs:rounded-xl border-2 shadow-md active:scale-90 touch-manipulation ${
            isDarkMode
              ? "bg-slate-800/70 border-slate-700/40 text-slate-300 hover:bg-slate-700/70 hover:border-blue-400/60 hover:text-blue-300 hover:shadow-blue-400/15"
              : "bg-white border-blue-200/60 text-slate-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-500 hover:shadow-blue-300/30"
          }`}
          style={{
            transformStyle: "preserve-3d",
            transition:
              "transform 0.1s ease-out, box-shadow 0.3s, background-color 0.3s, border-color 0.3s",
          }}
          aria-label="Previous card"
        >
          <ChevronLeft
            size={24}
            strokeWidth={2.5}
            style={{ minWidth: 24, minHeight: 24 }}
          />
        </button>
      </div>

      <div style={{ perspective: "1000px" }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFlip();
          }}
          onMouseMove={handle3DTilt}
          onMouseLeave={resetTilt}
          className={`px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 py-2 xs:py-2.5 sm:py-3 md:py-3.5 rounded-lg xs:rounded-xl font-semibold text-xs xs:text-sm sm:text-base shadow-lg active:scale-95 flex items-center gap-1.5 xs:gap-2 touch-manipulation ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-400 via-pink-300 to-blue-400 text-slate-900 hover:from-blue-300 hover:via-pink-200 hover:to-blue-300 shadow-pink-400/25"
              : "bg-gradient-to-r from-blue-300 via-pink-300 to-blue-300 text-white hover:from-blue-400 hover:via-pink-400 hover:to-blue-400 shadow-pink-300/30"
          }`}
          style={{
            transformStyle: "preserve-3d",
            transition:
              "transform 0.1s ease-out, box-shadow 0.3s, background 0.3s",
          }}
        >
          <RotateCcw
            size={18}
            strokeWidth={2.5}
            style={{ minWidth: 18, minHeight: 18 }}
          />
          <span className="hidden sm:inline">Lật thẻ</span>
          <span className="sm:hidden">Lật</span>
        </button>
      </div>

      <div style={{ perspective: "1000px" }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          onMouseMove={handle3DTilt}
          onMouseLeave={resetTilt}
          className={`p-2.5 xs:p-3 sm:p-3 md:p-3.5 lg:p-4 rounded-lg xs:rounded-xl border-2 shadow-md active:scale-90 touch-manipulation ${
            isDarkMode
              ? "bg-slate-800/70 border-slate-700/40 text-slate-300 hover:bg-slate-700/70 hover:border-blue-400/60 hover:text-blue-300 hover:shadow-blue-400/15"
              : "bg-white border-blue-200/60 text-slate-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-500 hover:shadow-blue-300/30"
          }`}
          style={{
            transformStyle: "preserve-3d",
            transition:
              "transform 0.1s ease-out, box-shadow 0.3s, background-color 0.3s, border-color 0.3s",
          }}
          aria-label="Next card"
        >
          <ChevronRight
            size={24}
            strokeWidth={2.5}
            style={{ minWidth: 24, minHeight: 24 }}
          />
        </button>
            className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7"
            strokeWidth={2.5}
          />
        </button>
      </div>
    </div>
  );
}
