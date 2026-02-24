import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ isDarkMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`p-2 xs:p-2.5 sm:p-2.5 md:p-3 rounded-lg xs:rounded-xl font-medium transition-all shadow-lg hover:shadow-xl active:scale-95 border-2 touch-manipulation backdrop-blur-sm ${isDarkMode ? "bg-slate-800/90 border-slate-600 hover:bg-amber-900/60 hover:border-amber-400 text-amber-400 hover:shadow-amber-500/30" : "bg-white border-slate-300 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:border-pink-400 text-slate-700 hover:shadow-pink-400/30"}`}
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <Sun
          size={18}
          className="xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 transition-transform hover:rotate-90"
        />
      ) : (
        <Moon
          size={18}
          className="xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 transition-transform hover:-rotate-12"
        />
      )}
    </button>
  );
}
