import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

export default function Navigation({ onPrev, onNext, onFlip, isDarkMode }) {
  return (
    <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 w-full px-2 xs:px-4">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className={`p-3 md:p-3.5 rounded-xl border-2 transition-all duration-300 shadow-md active:scale-90 hover:scale-105 touch-manipulation ${
          isDarkMode
            ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-sky-400/50 hover:text-sky-300 hover:shadow-sky-500/20"
            : "bg-white border-slate-200 text-slate-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-500 hover:shadow-blue-200/50"
        }`}
        aria-label="Previous card"
      >
        <ChevronLeft
          size={20}
          className="w-5 xs:w-5.5 sm:w-6 md:w-6.5"
          strokeWidth={2.5}
        />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onFlip();
        }}
        className={`px-4 xs:px-5 sm:px-6 md:px-7 py-2 xs:py-2.5 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-semibold text-xs xs:text-sm sm:text-base transition-all duration-300 shadow-lg active:scale-95 hover:scale-105 flex items-center gap-1.5 xs:gap-2 touch-manipulation ${
          isDarkMode
            ? "bg-gradient-to-r from-sky-300 via-pink-300 to-blue-300 text-slate-900 hover:from-sky-200 hover:via-pink-200 hover:to-blue-200 shadow-pink-300/20"
            : "bg-gradient-to-r from-blue-300 via-pink-300 to-sky-300 text-white hover:from-blue-200 hover:via-pink-200 hover:to-sky-200 shadow-pink-200/25"
        }`}
      >
        <RotateCcw
          size={16}
          className="w-4 xs:w-4.5 sm:w-5 md:w-5.5"
          strokeWidth={2.5}
        />
        <span className="hidden xs:hidden sm:inline">Lật thẻ</span>
        <span className="xs:inline sm:hidden">Lật</span>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className={`p-2 xs:p-2.5 sm:p-3 md:p-3.5 lg:p-4 rounded-lg xs:rounded-xl border-2 transition-all duration-300 shadow-md active:scale-90 hover:scale-105 touch-manipulation ${
          isDarkMode
            ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-sky-400/50 hover:text-sky-300 hover:shadow-sky-500/20"
            : "bg-white border-slate-200 text-slate-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-500 hover:shadow-blue-200/50"
        }`}
        aria-label="Next card"
      >
        <ChevronRight
          size={20}
          className="w-5 xs:w-5.5 sm:w-6 md:w-6.5"
          strokeWidth={2.5}
        />
      </button>
    </div>
  );
}
