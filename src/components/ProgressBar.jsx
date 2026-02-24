import { ArrowLeft, ArrowRight, Space } from "lucide-react";

export default function ProgressBar({ current, total, isDarkMode }) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="w-full max-w-2xl mb-6">
      {/* Progress indicator */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 px-2">
        <span
          className={`text-sm md:text-base font-bold tracking-wide transition-colors ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}
        >
          <span className={`${isDarkMode ? "text-sky-300" : "text-pink-600"}`}>
            {current + 1}
          </span>
          <span
            className={`mx-1 ${isDarkMode ? "text-slate-600" : "text-slate-400"}`}
          >
            /
          </span>
          <span
            className={`${isDarkMode ? "text-slate-500" : "text-slate-500"}`}
          >
            {total}
          </span>
        </span>
        <div
          className={`hidden md:flex items-center gap-2 text-xs transition-colors ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
        >
          <div className="flex items-center gap-1">
            <ArrowLeft size={14} />
            <ArrowRight size={14} />
          </div>
          <span>Chuyển thẻ</span>
          <span className="mx-1">•</span>
          <div className="flex items-center gap-1">
            <Space size={14} />
            <span>Lật thẻ</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className={`w-full rounded-full h-2 overflow-hidden shadow-inner backdrop-blur-sm border ${isDarkMode ? "bg-slate-800/80 border-slate-700/50" : "bg-slate-200 border-slate-300/50"}`}
      >
        <div
          className={`h-2 rounded-full transition-all duration-500 ease-out shadow-lg ${isDarkMode ? "bg-gradient-to-r from-sky-400/65 via-blue-400/60 to-cyan-400/65 shadow-sky-500/35" : "bg-gradient-to-r from-blue-300/70 via-indigo-300/65 to-pink-300/70 shadow-pink-300/30"}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
