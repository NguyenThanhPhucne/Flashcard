import { Heart } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import BackButton from "./BackButton";
import ProgressBar from "./ProgressBar";
import Flashcard from "./Flashcard";
import Navigation from "./Navigation";

export default function StudyView({
  activeDeck,
  currentIndex,
  currentCard,
  isFlipped,
  isDarkMode,
  onToggleTheme,
  onClose,
  onFlip,
  onPrev,
  onNext,
}) {
  if (!activeDeck || !currentCard) return null;

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Top Navigation Bar */}
      <div className="w-full flex justify-between items-center mb-3 xs:mb-4 sm:mb-6 md:mb-8 gap-2 xs:gap-3 sm:gap-4">
        <BackButton onClick={onClose} isDarkMode={isDarkMode} showText={true} />

        <div className="text-center flex-1 min-w-0">
          <div
            className={`text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mb-0.5 xs:mb-1 flex items-center justify-center gap-1 xs:gap-1.5 ${
              isDarkMode ? "text-blue-300" : "text-blue-400"
            }`}
          >
            <Heart
              size={10}
              className="xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 text-pink-400 opacity-60"
              fill="currentColor"
            />
            {activeDeck.skill} • {activeDeck.volume}
            <Heart
              size={10}
              className="xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 text-pink-400 opacity-60"
              fill="currentColor"
            />
          </div>
          <h2
            className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold truncate ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {activeDeck.topic}
          </h2>
        </div>

        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
      </div>

      {/* Progress Bar */}
      <ProgressBar
        current={currentIndex}
        total={activeDeck.cards.length}
        isDarkMode={isDarkMode}
      />

      {/* Flashcard */}
      <div className="w-full max-w-3xl mx-auto flex-shrink-0 mt-4 xs:mt-5 sm:mt-6">
        <Flashcard
          card={currentCard}
          isFlipped={isFlipped}
          onFlip={onFlip}
          isDarkMode={isDarkMode}
        />
      </div>

      {/* Hover Hint */}
      <div
        className={`hidden md:flex items-center justify-center gap-2 mt-3 xs:mt-4 sm:mt-5 text-xs sm:text-sm font-medium transition-opacity duration-300 ${
          isDarkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        <span className="opacity-70">
          💡 Click để lật • Space hoặc Enter • ← → để chuyển từ
        </span>
      </div>

      {/* Navigation Controls */}
      <Navigation
        onPrev={onPrev}
        onNext={onNext}
        onFlip={onFlip}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
