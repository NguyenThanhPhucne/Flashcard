import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

export default function Navigation({ onPrev, onNext, onFlip, isDarkMode }) {
  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-6 md:mt-10 w-full max-w-md px-4">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className={`p-3 md:p-4 rounded-full border-2 transition-all shadow-xl active:scale-90 hover:scale-105 touch-manipulation backdrop-blur-sm ${isDarkMode ? "bg-slate-800/95 border-slate-600 text-slate-200 hover:bg-sky-900/50 hover:border-sky-400 hover:text-sky-300 hover:shadow-sky-500/30" : "bg-white border-slate-300 text-slate-700 hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:border-pink-300/60 hover:text-pink-500 hover:shadow-pink-300/30"}`}
        aria-label="Previous card"
      >
        <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onFlip();
        }}
        className={`px-6 sm:px-8 py-3 md:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-xl active:scale-95 hover:scale-105 flex items-center gap-2 touch-manipulation ${isDarkMode ? "bg-gradient-to-r from-sky-500/70 via-blue-500/65 to-cyan-500/70 text-white hover:from-sky-400/80 hover:via-blue-400/75 hover:to-cyan-400/80 shadow-sky-500/35 hover:shadow-sky-400/45" : "bg-gradient-to-r from-blue-300/80 via-indigo-300/75 to-pink-300/80 text-white hover:from-blue-400/90 hover:via-indigo-400/85 hover:to-pink-400/90 shadow-blue-300/30 hover:shadow-pink-400/35"}`}
      >
        <RotateCcw size={18} className="sm:w-5 sm:h-5" />
        <span className="hidden sm:inline">Lật thẻ</span>
        <span className="sm:hidden">Lật</span>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className={`p-3 md:p-4 rounded-full border-2 transition-all shadow-xl active:scale-90 hover:scale-105 touch-manipulation backdrop-blur-sm ${isDarkMode ? "bg-slate-800/95 border-slate-600 text-slate-200 hover:bg-sky-900/50 hover:border-sky-400 hover:text-sky-300 hover:shadow-sky-500/30" : "bg-white border-slate-300 text-slate-700 hover:bg-gradient-to-br hover:from-blue-50 hover:to-pink-50 hover:border-blue-300/60 hover:text-blue-500 hover:shadow-blue-300/30"}`}
        aria-label="Next card"
      >
        <ChevronRight size={24} className="sm:w-7 sm:h-7" />
      </button>
    </div>
  );
}
