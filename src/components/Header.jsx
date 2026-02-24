import { BookOpen, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ isDarkMode, onToggleDarkMode }) {
  return (
    <header className="w-full max-w-4xl flex justify-between items-center mb-4 xs:mb-5 sm:mb-6 md:mb-8 px-2 xs:px-3 sm:px-4">
      <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3">
        <div
          className={`p-2 xs:p-2.5 sm:p-2.5 md:p-3 bg-gradient-to-br from-blue-400/80 via-indigo-400/75 to-pink-400/80 text-white rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl shadow-lg transition-all ${isDarkMode ? "shadow-sky-400/25" : "shadow-blue-400/25 hover:shadow-pink-400/30"}`}
        >
          <BookOpen
            size={20}
            className="xs:w-5 xs:h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6"
          />
        </div>
        <div>
          <h1
            className={`text-base xs:text-lg sm:text-xl md:text-2xl font-bold transition-colors flex items-center gap-1.5 xs:gap-2 ${isDarkMode ? "text-white drop-shadow-lg" : "text-slate-900"}`}
          >
            IELTS Flashcards
            <Sparkles
              size={16}
              className={`hidden sm:inline xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 ${isDarkMode ? "text-sky-300" : "text-pink-500"}`}
            />
          </h1>
          <p
            className={`text-[10px] xs:text-xs sm:text-sm transition-colors hidden sm:block ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
          >
            ZIM IELTS Speaking Vol.9
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
      </div>
    </header>
  );
}
