import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProgressBar({ current, total, isDarkMode }) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="w-full max-w-2xl mb-4 sm:mb-6 md:mb-8">
      {/* Progress indicator */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4 px-1">
        <span
          className={`text-sm xs:text-base md:text-lg font-bold tracking-wide transition-colors ${
            isDarkMode ? "text-slate-200" : "text-slate-800"
          }`}
        >
          <span className={`${isDarkMode ? "text-sky-300" : "text-blue-400"}`}>
            {current + 1}
          </span>
          <span
            className={`mx-2 ${
              isDarkMode ? "text-slate-600" : "text-slate-400"
            }`}
          >
            /
          </span>
          <span
            className={`${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
          >
            {total}
          </span>
        </span>
        <div
          className={`hidden md:flex items-center gap-3 text-sm transition-colors ${
            isDarkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          <div className="flex items-center gap-1.5">
            <ArrowLeft size={16} strokeWidth={2} />
            <ArrowRight size={16} strokeWidth={2} />
          </div>
          <span className="font-medium">Chuyển</span>
          <span className="opacity-50">•</span>
          <div className="flex items-center gap-1.5">
            <kbd
              className={`px-2 py-0.5 rounded text-xs font-semibold ${isDarkMode ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-700"}`}
            >
              Space
            </kbd>
            <span className="font-medium">Lật</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className={`w-full rounded-full h-2 xs:h-2.5 sm:h-3 overflow-hidden shadow-inner transition-all duration-300 ${
          isDarkMode
            ? "bg-slate-800/60 shadow-slate-900/50"
            : "bg-slate-100 shadow-slate-200/50"
        }`}
      >
        <div
          className={`h-2 xs:h-2.5 sm:h-3 rounded-full transition-all duration-700 ease-out ${
            isDarkMode
              ? "bg-gradient-to-r from-sky-300 via-pink-300 to-blue-300"
              : "bg-gradient-to-r from-blue-300 via-pink-300 to-sky-300"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
