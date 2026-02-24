import { useState, useCallback, useEffect, useMemo } from "react";
import { flashcardDecks } from "./data/decks";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";
import {
  BookOpen,
  Mic,
  BookText,
  ArrowLeft,
  Library,
  Sparkles,
  Heart,
} from "lucide-react";
import Flashcard from "./components/Flashcard";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  // Library state
  const [decks] = useState(flashcardDecks);
  const [activeTab, setActiveTab] = useState("Speaking"); // 'Speaking' | 'Writing'
  const [activeDeckId, setActiveDeckId] = useState(null); // null = Library view

  // Study state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Generate heart positions once on mount
  const floatingHearts = useMemo(() => {
    const positions = [
      { size: 18, left: 15, top: 20, type: "float" },
      { size: 22, left: 85, top: 15, type: "beat" },
      { size: 16, left: 25, top: 70, type: "float" },
      { size: 20, left: 75, top: 60, type: "beat" },
      { size: 19, left: 45, top: 30, type: "float" },
      { size: 17, left: 60, top: 80, type: "float" },
      { size: 21, left: 10, top: 50, type: "beat" },
      { size: 18, left: 90, top: 45, type: "float" },
      { size: 14, left: 35, top: 10, type: "float" },
      { size: 16, left: 50, top: 55, type: "beat" },
      { size: 15, left: 5, top: 75, type: "float" },
      { size: 19, left: 95, top: 70, type: "float" },
      { size: 17, left: 70, top: 25, type: "beat" },
      { size: 14, left: 20, top: 45, type: "float" },
      { size: 16, left: 80, top: 35, type: "float" },
    ];
    return positions.map((pos, i) => ({
      id: i,
      ...pos,
      delay: i * 1.5,
      duration: 10 + (i % 4) * 2,
    }));
  }, []);

  const activeDeck = decks.find((d) => d.id === activeDeckId);
  const currentCard = activeDeck?.cards[currentIndex];
  const nextCard = activeDeck
    ? activeDeck.cards[(currentIndex + 1) % activeDeck.cards.length]
    : null;
  const prevCard = activeDeck
    ? activeDeck.cards[
        (currentIndex - 1 + activeDeck.cards.length) % activeDeck.cards.length
      ]
    : null;

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (isAnimating || !activeDeck) return;
    setIsAnimating(true);
    setFlipDirection("next");
    setIsFlipped(false);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activeDeck.cards.length);
      setFlipDirection(null);
      setIsAnimating(false);
    }, 1000);
  }, [activeDeck, isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating || !activeDeck) return;
    setIsAnimating(true);
    setFlipDirection("prev");
    setIsFlipped(false);

    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + activeDeck.cards.length) % activeDeck.cards.length,
      );
      setFlipDirection(null);
      setIsAnimating(false);
    }, 1000);
  }, [activeDeck, isAnimating]);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  // Deck management
  const openDeck = (deckId) => {
    setActiveDeckId(deckId);
    setCurrentIndex(0);
    setIsFlipped(false);
    setFlipDirection(null);
  };

  const closeDeck = () => {
    setActiveDeckId(null);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Keyboard navigation - chỉ hoạt động trong study mode
  useKeyboardNavigation(
    activeDeck ? handleNext : () => {},
    activeDeck ? handlePrev : () => {},
    activeDeck ? handleFlip : () => {},
    false,
  );

  // ESC key to go back to library
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && activeDeck) {
        closeDeck();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeDeck]);

  // ==========================================
  // LIBRARY VIEW (Dashboard)
  // ==========================================
  const renderLibrary = () => {
    const currentDecks = decks.filter((d) => d.skill === activeTab);

    // Group by volume
    const groupedDecks = currentDecks.reduce((acc, deck) => {
      if (!acc[deck.volume]) acc[deck.volume] = [];
      acc[deck.volume].push(deck);
      return acc;
    }, {});

    return (
      <div className="w-full max-w-6xl mx-auto px-3 xs:px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 md:mb-12 gap-4 sm:gap-6">
          <div className="space-y-2">
            <h1
              className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold flex items-center gap-2 xs:gap-3 sm:gap-4 ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              <div
                className={`p-2 xs:p-2.5 sm:p-3 rounded-xl sm:rounded-2xl ${isDarkMode ? "bg-sky-400/10" : "bg-blue-100"}`}
              >
                <Library
                  className={`w-7 xs:w-8 sm:w-9 md:w-10 h-7 xs:h-8 sm:h-9 md:h-10 ${isDarkMode ? "text-sky-300" : "text-blue-400"}`}
                  strokeWidth={2}
                />
              </div>
              Thư viện IELTS
            </h1>
            <p
              className={`text-xs xs:text-sm sm:text-base md:text-lg flex items-center gap-1.5 xs:gap-2 ml-1 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              <Sparkles
                size={16}
                className={`w-4 xs:w-4.5 sm:w-5 md:w-5.5 ${isDarkMode ? "text-sky-300" : "text-blue-300"}`}
                strokeWidth={2}
              />
              Chọn chủ đề để bắt đầu học
            </p>
          </div>

          <ThemeToggle
            isDarkMode={isDarkMode}
            onToggle={() => setIsDarkMode(!isDarkMode)}
          />
        </div>

        {/* Tabs */}
        <div
          className={`flex gap-1.5 xs:gap-2 p-1 xs:p-1.5 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 md:mb-10 w-full max-w-md mx-auto md:mx-0 shadow-md transition-all ${isDarkMode ? "bg-slate-800/90" : "bg-white"}`}
        >
          <button
            onClick={() => setActiveTab("Speaking")}
            className={`flex-1 flex items-center justify-center gap-2 xs:gap-2.5 py-2.5 xs:py-3 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold text-xs xs:text-sm md:text-base transition-all duration-300 ${
              activeTab === "Speaking"
                ? isDarkMode
                  ? "bg-sky-400/20 text-sky-300 shadow-lg shadow-sky-500/20"
                  : "bg-blue-50 text-blue-500 shadow-md"
                : isDarkMode
                  ? "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <Mic size={18} className="xs:w-5 xs:h-5" strokeWidth={2} />{" "}
            <span className="hidden xs:inline">Speaking</span>
            <span className="xs:hidden">Nói</span>
          </button>
          <button
            onClick={() => setActiveTab("Writing")}
            className={`flex-1 flex items-center justify-center gap-2 xs:gap-2.5 py-2.5 xs:py-3 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold text-xs xs:text-sm md:text-base transition-all duration-300 ${
              activeTab === "Writing"
                ? isDarkMode
                  ? "bg-sky-400/20 text-sky-300 shadow-lg shadow-sky-500/20"
                  : "bg-blue-50 text-blue-500 shadow-md"
                : isDarkMode
                  ? "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <BookText size={18} className="xs:w-5 xs:h-5" strokeWidth={2} />{" "}
            <span className="hidden xs:inline">Writing</span>
            <span className="xs:hidden">Viết</span>
          </button>
        </div>

        {/* Deck Grid */}
        {Object.keys(groupedDecks)
          .sort()
          .reverse()
          .map((volume) => (
            <div key={volume} className="mb-8 xs:mb-10 sm:mb-12">
              <div className="flex items-center gap-2 xs:gap-3 mb-4 xs:mb-5 sm:mb-6">
                <div
                  className={`h-0.5 xs:h-1 w-8 xs:w-10 sm:w-12 rounded-full ${isDarkMode ? "bg-sky-400/30" : "bg-blue-200"}`}
                />
                <h2
                  className={`text-lg xs:text-xl sm:text-2xl font-bold ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}
                >
                  {activeTab} {volume}
                </h2>
                <div
                  className={`h-0.5 xs:h-1 flex-1 rounded-full ${isDarkMode ? "bg-sky-400/10" : "bg-blue-100"}`}
                />
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
                {groupedDecks[volume].map((deck) => (
                  <button
                    key={deck.id}
                    onClick={() => openDeck(deck.id)}
                    className={`group text-left rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7 border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] ${
                      isDarkMode
                        ? "bg-slate-800/90 border-slate-700 hover:border-sky-400/50 hover:bg-slate-800"
                        : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-blue-100/50"
                    }`}
                  >
                    <div
                      className={`w-12 xs:w-13 sm:w-14 md:w-16 h-12 xs:h-13 sm:h-14 md:h-16 rounded-2xl flex items-center justify-center mb-3 xs:mb-4 sm:mb-5 transition-all duration-300 group-hover:scale-110 ${
                        isDarkMode
                          ? "bg-sky-400/10 text-sky-300"
                          : "bg-blue-50 text-blue-400"
                      }`}
                    >
                      <BookOpen
                        size={28}
                        className="xs:w-7 xs:h-7 sm:w-7 sm:h-7 md:w-8 md:h-8"
                        strokeWidth={2}
                      />
                    </div>
                    <h3
                      className={`text-base xs:text-lg sm:text-xl md:text-xl font-bold mb-2 xs:mb-2.5 sm:mb-3 transition-colors duration-300 ${
                        isDarkMode
                          ? "text-white group-hover:text-sky-300"
                          : "text-slate-900 group-hover:text-blue-500"
                      }`}
                    >
                      {deck.topic}
                    </h3>
                    <div
                      className={`inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-1 xs:py-1.5 rounded-lg text-[10px] xs:text-xs sm:text-sm font-semibold ${
                        isDarkMode
                          ? "bg-slate-700/50 text-sky-300"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {deck.cards.length} từ vựng
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        {currentDecks.length === 0 && (
          <div
            className={`text-center py-12 xs:py-16 sm:py-20 text-xs xs:text-sm sm:text-base ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}
          >
            Chưa có dữ liệu cho phần {activeTab}.
          </div>
        )}
      </div>
    );
  };

  // ==========================================
  // STUDY VIEW (Flashcard Learning)
  // ==========================================
  const renderStudyRoom = () => {
    if (!activeDeck || !currentCard) return null;

    return (
      <div className="w-full max-w-4xl mx-auto flex flex-col px-3 xs:px-4 sm:px-6">
        {/* Top Navigation Bar */}
        <div className="w-full flex justify-between items-center mb-4 xs:mb-6 sm:mb-8 gap-2 xs:gap-3 sm:gap-4">
          <button
            onClick={closeDeck}
            className={`flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 rounded-xl text-xs xs:text-sm sm:text-base font-semibold transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 ${
              isDarkMode
                ? "bg-slate-800 border-2 border-slate-700 hover:border-sky-400/50 text-slate-200 hover:text-sky-300"
                : "bg-white border-2 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600"
            }`}
          >
            <ArrowLeft size={20} className="xs:w-5 xs:h-5" strokeWidth={2} />{" "}
            <span className="hidden xs:inline">Thư viện</span>
          </button>

          <div className="text-center flex-1 min-w-0">
            <div
              className={`text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5 xs:mb-1 flex items-center justify-center gap-1 xs:gap-1.5 ${
                isDarkMode ? "text-sky-300" : "text-blue-400"
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
              className={`text-sm xs:text-base sm:text-lg md:text-xl font-bold truncate ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              {activeDeck.topic}
            </h2>
          </div>

          <ThemeToggle
            isDarkMode={isDarkMode}
            onToggle={() => setIsDarkMode(!isDarkMode)}
          />
        </div>

        {/* Progress Bar */}
        <ProgressBar
          current={currentIndex}
          total={activeDeck.cards.length}
          isDarkMode={isDarkMode}
        />

        {/* Flashcard with Page Turn Effect */}
        <div className="w-full flex-shrink-0 mt-6">
          <div
            className="w-full relative"
            style={{
              perspective: "2500px",
            }}
          >
            <div
              style={{
                transformStyle: "preserve-3d",
                transformOrigin:
                  flipDirection === "next"
                    ? "left center"
                    : flipDirection === "prev"
                      ? "right center"
                      : "center",
                transform:
                  flipDirection === "next"
                    ? "rotateY(-180deg)"
                    : flipDirection === "prev"
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                transition: flipDirection
                  ? "transform 1s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.5s ease-in-out"
                  : "none",
                opacity: flipDirection ? 0.95 : 1,
                willChange: flipDirection ? "transform, opacity" : "auto",
              }}
            >
              {/* Front side - Current card */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <Flashcard
                  card={currentCard}
                  isFlipped={isFlipped}
                  onFlip={handleFlip}
                  isDarkMode={isDarkMode}
                />
              </div>

              {/* Back side - Next/Prev card (shows when page turns) */}
              <div
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                }}
              >
                <Flashcard
                  card={flipDirection === "next" ? nextCard : prevCard}
                  isFlipped={false}
                  onFlip={() => {}}
                  isDarkMode={isDarkMode}
                />
              </div>
            </div>
          </div>

          {/* Hover Hint */}
          <div
            className={`hidden md:flex items-center justify-center gap-2 mt-4 xs:mt-5 sm:mt-6 text-xs xs:text-sm font-medium transition-opacity duration-300 ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            <span className="opacity-70">
              💡 Click để lật • Space hoặc Enter • ← → để chuyển từ
            </span>
          </div>
        </div>

        {/* Navigation Controls */}
        <Navigation
          onPrev={handlePrev}
          onNext={handleNext}
          onFlip={handleFlip}
          isDarkMode={isDarkMode}
        />
      </div>
    );
  };

  // ==========================================
  // MAIN RENDER
  // ==========================================
  return (
    <div
      className={`min-h-screen font-sans px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-4 xs:py-5 sm:py-6 md:py-8 lg:py-10 flex flex-col transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-50"
          : "bg-gradient-to-br from-blue-50/25 via-pink-50/30 to-sky-50/25 text-slate-900"
      }`}
    >
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <div
          className={`absolute top-0 left-0 w-64 xs:w-72 sm:w-80 md:w-96 h-64 xs:h-72 sm:h-80 md:h-96 rounded-full blur-3xl transition-colors duration-500 ${
            isDarkMode ? "bg-sky-400/10" : "bg-blue-200/25"
          }`}
        />
        <div
          className={`absolute top-1/2 right-1/4 w-56 xs:w-64 sm:w-72 md:w-80 h-56 xs:h-64 sm:h-72 md:h-80 rounded-full blur-3xl transition-colors duration-500 ${
            isDarkMode ? "bg-blue-300/8" : "bg-sky-200/20"
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 w-64 xs:w-72 sm:w-80 md:w-96 h-64 xs:h-72 sm:h-80 md:h-96 rounded-full blur-3xl transition-colors duration-500 ${
            isDarkMode ? "bg-cyan-400/8" : "bg-blue-100/25"
          }`}
        />
        <div
          className={`absolute top-1/4 left-1/3 w-48 xs:w-56 sm:w-64 md:w-72 h-48 xs:h-56 sm:h-64 md:h-72 rounded-full blur-3xl transition-colors duration-500 ${
            isDarkMode ? "bg-pink-400/8" : "bg-pink-200/30"
          }`}
        />
      </div>

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((heart) => (
          <Heart
            key={heart.id}
            size={heart.size}
            className={`absolute opacity-20 ${
              heart.type === "beat"
                ? "animate-heartbeat"
                : "animate-float-heart"
            } ${isDarkMode ? "text-pink-300" : "text-pink-400"}`}
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Small Heart Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
        {Array.from({ length: 20 }).map((_, i) => (
          <Heart
            key={`particle-${i}`}
            size={8 + (i % 4)}
            className={`absolute animate-float-heart ${
              isDarkMode ? "text-pink-200" : "text-pink-300"
            }`}
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${15 + (i % 5) * 2}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Sparkles Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        {Array.from({ length: 15 }).map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            size={12 + (i % 3) * 2}
            className={`absolute animate-sparkle ${
              isDarkMode ? "text-pink-200" : "text-pink-300"
            }`}
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Pulsing Heart Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <Heart
            key={`pulse-${i}`}
            size={24 + (i % 3) * 4}
            className={`absolute animate-pulse-soft opacity-10 ${
              isDarkMode ? "text-pink-300" : "text-pink-400"
            }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 2) * 35}%`,
              animationDelay: `${i * 0.7}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Conditional Render: Library or Study View */}
      <main className="relative z-10 flex-grow flex items-center justify-center">
        {activeDeckId === null ? renderLibrary() : renderStudyRoom()}
      </main>
    </div>
  );
}
