import { BookOpen, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ isDarkMode, onToggleDarkMode }) {
  return (
    <header className="w-full max-w-4xl flex justify-between items-center mb-6 md:mb-8 px-2">
      <div className="flex items-center gap-2 md:gap-3">
        <div
          className={`p-2.5 md:p-3 bg-gradient-to-br from-blue-400/80 via-indigo-400/75 to-pink-400/80 text-white rounded-xl md:rounded-2xl shadow-lg transition-all ${isDarkMode ? "shadow-sky-400/25" : "shadow-blue-400/25 hover:shadow-pink-400/30"}`}
        >
          <BookOpen size={20} className="md:w-6 md:h-6" />
        </div>
        <div>
          <h1
            className={`text-lg sm:text-xl md:text-2xl font-bold transition-colors flex items-center gap-2 ${isDarkMode ? "text-white drop-shadow-lg" : "text-slate-900"}`}
          >
            IELTS Flashcards
            <Sparkles
              size={16}
              className={`hidden sm:inline ${isDarkMode ? "text-sky-300" : "text-pink-500"}`}
            />
          </h1>
          <p
            className={`text-xs md:text-sm transition-colors hidden sm:block ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
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
