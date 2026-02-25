import { useState } from "react";
import {
  Heart,
  Gamepad2,
  Zap,
  Keyboard,
  Lightbulb,
  ArrowLeft,
  ArrowRight,
  Dot,
  Space,
} from "lucide-react";
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
  onSwitchMode,
}) {
  const [showModeMenu, setShowModeMenu] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setShowModeMenu(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowModeMenu(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  const toggleModeMenu = () => {
    setShowModeMenu((prev) => !prev);
  };

  const handleModeSelect = (mode) => {
    setShowModeMenu(false);
    onSwitchMode(mode);
  };

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
              size={12}
              strokeWidth={2}
              fill="currentColor"
              style={{ minWidth: 12, minHeight: 12 }}
              className="text-pink-400 opacity-60"
            />
            {activeDeck.skill} <Dot size={8} className="inline" />{" "}
            {activeDeck.volume}
            <Heart
              size={12}
              strokeWidth={2}
              fill="currentColor"
              style={{ minWidth: 12, minHeight: 12 }}
              className="text-pink-400 opacity-60"
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

        {/* Mode Switcher Button - Mobile/Tablet (visible on xl: hidden) */}
        <div className="xl:hidden relative">
          <button
            onClick={toggleModeMenu}
            className={`relative p-2 xs:p-2.5 sm:p-3 rounded-xl border-2 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg ${
              showModeMenu
                ? isDarkMode
                  ? "bg-emerald-500/20 border-emerald-400/60 text-emerald-300"
                  : "bg-emerald-100 border-emerald-400 text-emerald-700"
                : isDarkMode
                  ? "bg-slate-800/80 border-slate-700/40 text-slate-300 hover:bg-slate-700/80 hover:border-emerald-400/60"
                  : "bg-white border-slate-300/60 text-slate-600 hover:bg-emerald-50 hover:border-emerald-300"
            }`}
          >
            <Gamepad2 size={18} strokeWidth={2.5} className="xs:w-5 xs:h-5" />

            {/* Badge indicator */}
            <span
              className={`absolute -top-1 -right-1 flex h-4 w-4 xs:h-5 xs:w-5 items-center justify-center rounded-full text-[9px] xs:text-[10px] font-bold ${
                isDarkMode
                  ? "bg-emerald-500 text-white"
                  : "bg-emerald-600 text-white"
              }`}
            >
              3
            </span>
          </button>

          {/* Dropdown Menu for Mobile/Tablet */}
          {showModeMenu && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowModeMenu(false)}
              />

              <div
                className={`absolute top-full right-0 mt-2 w-64 xs:w-72 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-2xl border-2 z-50 animate-in slide-in-from-top-2 duration-200 ${
                  isDarkMode
                    ? "bg-slate-800/98 border-slate-700/60"
                    : "bg-white/98 border-slate-200"
                }`}
              >
                {/* Menu Header */}
                <div
                  className={`px-4 py-3 border-b ${
                    isDarkMode ? "border-slate-700/50" : "border-slate-200"
                  }`}
                >
                  <h3
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Chọn chế độ chơi
                  </h3>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  <button
                    onClick={() => handleModeSelect("quiz")}
                    className={`w-full flex items-start gap-3 px-4 py-3.5 transition-all duration-200 ${
                      isDarkMode
                        ? "hover:bg-emerald-500/20 text-emerald-200 hover:text-emerald-100"
                        : "hover:bg-emerald-100/80 text-emerald-700 hover:text-emerald-800"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isDarkMode ? "bg-emerald-500/20" : "bg-emerald-100"
                      }`}
                    >
                      <Gamepad2 size={20} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-bold text-sm mb-0.5">
                        Quiz Sinh Tồn
                      </div>
                      <div
                        className={`text-xs ${
                          isDarkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        Trả lời câu hỏi trong thời gian giới hạn
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleModeSelect("match")}
                    className={`w-full flex items-start gap-3 px-4 py-3.5 transition-all duration-200 ${
                      isDarkMode
                        ? "hover:bg-purple-500/20 text-purple-200 hover:text-purple-100"
                        : "hover:bg-purple-100/80 text-purple-700 hover:text-purple-800"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isDarkMode ? "bg-purple-500/20" : "bg-purple-100"
                      }`}
                    >
                      <Zap size={20} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-bold text-sm mb-0.5">
                        Ghép Từ Siêu Tốc
                      </div>
                      <div
                        className={`text-xs ${
                          isDarkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        Ghép từ với nghĩa nhanh nhất có thể
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleModeSelect("typing")}
                    className={`w-full flex items-start gap-3 px-4 py-3.5 transition-all duration-200 ${
                      isDarkMode
                        ? "hover:bg-rose-500/20 text-rose-200 hover:text-rose-100"
                        : "hover:bg-rose-100/80 text-rose-700 hover:text-rose-800"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        isDarkMode ? "bg-rose-500/20" : "bg-rose-100"
                      }`}
                    >
                      <Keyboard size={20} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-bold text-sm mb-0.5">
                        Gõ Từ Sinh Tồn
                      </div>
                      <div
                        className={`text-xs ${
                          isDarkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        Gõ từ tiếng Anh trước khi bom nổ
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
      </div>

      {/* Progress Bar */}
      <ProgressBar
        current={currentIndex}
        total={activeDeck.cards.length}
        isDarkMode={isDarkMode}
      />

      {/* Flashcard Container - Centered with relative positioning for dropdown */}
      <div className="w-full relative mt-4 xs:mt-5 sm:mt-6">
        {/* Flashcard - Always Centered */}
        <div className="w-full max-w-3xl mx-auto">
          <Flashcard
            card={currentCard}
            isFlipped={isFlipped}
            onFlip={onFlip}
            isDarkMode={isDarkMode}
          />
        </div>

        {/* Mode Switcher Dropdown - Positioned outside max-w-3xl on large screens */}
        <div
          className="hidden xl:block absolute top-0 left-[calc(50%+400px+2rem)]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Floating Button with Label */}
          <div className="relative group">
            <button
              className={`relative p-3 rounded-2xl border-2 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-2xl ${
                showModeMenu
                  ? isDarkMode
                    ? "bg-emerald-500/20 border-emerald-400/60 text-emerald-300"
                    : "bg-emerald-100 border-emerald-400 text-emerald-700"
                  : isDarkMode
                    ? "bg-slate-800/80 border-slate-700/40 text-slate-300 hover:bg-slate-700/80 hover:border-emerald-400/60"
                    : "bg-white border-slate-300/60 text-slate-600 hover:bg-emerald-50 hover:border-emerald-300"
              }`}
            >
              <Gamepad2 size={22} strokeWidth={2.5} />

              {/* Badge indicator */}
              <span
                className={`absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
                  isDarkMode
                    ? "bg-emerald-500 text-white"
                    : "bg-emerald-600 text-white"
                }`}
              >
                3
              </span>
            </button>

            {/* Tooltip */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 right-full mr-3 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 ${
                isDarkMode
                  ? "bg-slate-800 text-slate-300 border border-slate-700"
                  : "bg-slate-900 text-white"
              }`}
            >
              Chế độ chơi
            </div>
          </div>

          {/* Dropdown Menu - Enhanced */}
          {showModeMenu && (
            <div
              className={`absolute top-full right-0 mt-3 w-64 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-2xl border-2 z-50 animate-in slide-in-from-top-2 duration-200 ${
                isDarkMode
                  ? "bg-slate-800/98 border-slate-700/60"
                  : "bg-white/98 border-slate-200"
              }`}
            >
              {/* Menu Header */}
              <div
                className={`px-4 py-3 border-b ${
                  isDarkMode ? "border-slate-700/50" : "border-slate-200"
                }`}
              >
                <h3
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Chọn chế độ chơi
                </h3>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <button
                  onClick={() => onSwitchMode("quiz")}
                  className={`w-full flex items-start gap-3 px-4 py-3.5 transition-all duration-200 ${
                    isDarkMode
                      ? "hover:bg-emerald-500/20 text-emerald-200 hover:text-emerald-100"
                      : "hover:bg-emerald-100/80 text-emerald-700 hover:text-emerald-800"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      isDarkMode ? "bg-emerald-500/20" : "bg-emerald-100"
                    }`}
                  >
                    <Gamepad2 size={20} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-sm mb-0.5">
                      Quiz Sinh Tồn
                    </div>
                    <div
                      className={`text-xs ${
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Trả lời câu hỏi trong thời gian giới hạn
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => onSwitchMode("match")}
                  className={`w-full flex items-start gap-3 px-4 py-3.5 transition-all duration-200 ${
                    isDarkMode
                      ? "hover:bg-purple-500/20 text-purple-200 hover:text-purple-100"
                      : "hover:bg-purple-100/80 text-purple-700 hover:text-purple-800"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      isDarkMode ? "bg-purple-500/20" : "bg-purple-100"
                    }`}
                  >
                    <Zap size={20} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-sm mb-0.5">
                      Ghép Từ Siêu Tốc
                    </div>
                    <div
                      className={`text-xs ${
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Ghép từ với nghĩa nhanh nhất có thể
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => onSwitchMode("typing")}
                  className={`w-full flex items-start gap-3 px-4 py-3.5 transition-all duration-200 ${
                    isDarkMode
                      ? "hover:bg-rose-500/20 text-rose-200 hover:text-rose-100"
                      : "hover:bg-rose-100/80 text-rose-700 hover:text-rose-800"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      isDarkMode ? "bg-rose-500/20" : "bg-rose-100"
                    }`}
                  >
                    <Keyboard size={20} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-bold text-sm mb-0.5">
                      Gõ Từ Sinh Tồn
                    </div>
                    <div
                      className={`text-xs ${
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Gõ từ tiếng Anh trước khi bom nổ
                    </div>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hover Hint */}
      <div
        className={`hidden md:flex items-center justify-center gap-2 mt-3 xs:mt-4 sm:mt-5 text-xs sm:text-sm font-medium transition-opacity duration-300 ${
          isDarkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        <span className="opacity-70 flex items-center gap-1.5">
          <Lightbulb size={14} className="inline" /> Click để lật{" "}
          <Dot size={6} className="inline" /> Space hoặc Enter{" "}
          <Dot size={6} className="inline" />{" "}
          <ArrowLeft size={14} className="inline" />{" "}
          <ArrowRight size={14} className="inline" /> để chuyển từ
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
