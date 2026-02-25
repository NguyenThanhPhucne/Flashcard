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
  const [selectedVolume, setSelectedVolume] = useState(null); // null = Library, {skill, volume} = Volume detail
  const [activeDeckId, setActiveDeckId] = useState(null); // null = Library/Volume view

  // Study state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Generate heart positions once on mount - optimized count
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
    ];
    return positions.map((pos, i) => ({
      id: i,
      ...pos,
      delay: i * 1.8,
      duration: 10 + (i % 4) * 2,
    }));
  }, []);

  const activeDeck = decks.find((d) => d.id === activeDeckId);
  const currentCard = activeDeck?.cards[currentIndex];

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (isAnimating || !activeDeck) return;
    setIsAnimating(true);
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activeDeck.cards.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 100);
  }, [activeDeck, isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating || !activeDeck) return;
    setIsAnimating(true);
    setIsFlipped(false);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + activeDeck.cards.length) % activeDeck.cards.length,
    );
    setTimeout(() => {
      setIsAnimating(false);
    }, 100);
  }, [activeDeck, isAnimating]);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  // Volume & Deck management
  const openVolume = (skill, volume) => {
    setSelectedVolume({ skill, volume });
  };

  const closeVolume = () => {
    setSelectedVolume(null);
  };

  const openDeck = (deckId) => {
    setActiveDeckId(deckId);
    setCurrentIndex(0);
    setIsFlipped(false);
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

  // ESC key to go back
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (activeDeck) {
          closeDeck(); // Study → Volume Detail
        } else if (selectedVolume) {
          closeVolume(); // Volume Detail → Library
        }
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeDeck, selectedVolume]);

  // ==========================================
  // LIBRARY VIEW - Show Volumes (Books)
  // ==========================================
  const renderLibrary = () => {
    // Group decks by skill and volume to create volume cards
    const volumes = decks.reduce((acc, deck) => {
      const key = `${deck.skill}-${deck.volume}`;
      if (!acc[key]) {
        acc[key] = {
          skill: deck.skill,
          volume: deck.volume,
          topics: [],
          totalCards: 0,
        };
      }
      acc[key].topics.push(deck.topic);
      acc[key].totalCards += deck.cards.length;
      return acc;
    }, {});

    const volumeList = Object.values(volumes).sort((a, b) => {
      // Sort by skill first, then by volume number
      if (a.skill !== b.skill) return a.skill.localeCompare(b.skill);
      return Number(a.volume) - Number(b.volume);
    });

    return (
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-3 sm:gap-4 md:gap-6">
          <div className="space-y-2">
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex items-center gap-2 sm:gap-3 md:gap-4 ${isDarkMode ? "text-white" : "text-slate-900"}`}
            >
              <div
                className={`p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl ${isDarkMode ? "bg-blue-400/10" : "bg-blue-100/80"}`}
              >
                <Library
                  className={`w-6 sm:w-8 md:w-9 lg:w-10 h-6 sm:h-8 md:h-9 lg:h-10 ${isDarkMode ? "text-blue-300" : "text-blue-500"}`}
                  strokeWidth={2}
                />
              </div>
              Thư viện IELTS
            </h1>
            <p
              className={`text-sm sm:text-sm md:text-base lg:text-lg flex items-center gap-1.5 sm:gap-2 ml-0.5 sm:ml-1 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
            >
              <Sparkles
                size={16}
                className={`w-4 sm:w-5 md:w-5 ${isDarkMode ? "text-blue-300" : "text-blue-400"}`}
                strokeWidth={2}
              />
              Chọn sách để xem chủ đề
            </p>
          </div>

          <ThemeToggle
            isDarkMode={isDarkMode}
            onToggle={() => setIsDarkMode(!isDarkMode)}
          />
        </div>

        {/* Volume Cards - Books */}
        {volumeList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-4 md:gap-5 lg:gap-6">
            {volumeList.map((vol) => {
              const Icon = vol.skill === "Speaking" ? Mic : BookText;
              const volumeNum = vol.volume.replace(/\D/g, "");

              return (
                <div
                  key={`${vol.skill}-${vol.volume}`}
                  className="perspective-1000"
                  style={{ perspective: "1000px" }}
                >
                  <button
                    onClick={() => openVolume(vol.skill, vol.volume)}
                    onMouseMove={(e) => {
                      const card = e.currentTarget;
                      const rect = card.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateX = ((y - centerY) / centerY) * -15;
                      const rotateY = ((x - centerX) / centerX) * 15;
                      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "rotateX(0deg) rotateY(0deg) scale(1)";
                    }}
                    className={`group w-full text-left rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 transition-all duration-300 hover:shadow-2xl active:scale-[0.98] ${
                      isDarkMode
                        ? "bg-slate-800/90 border-slate-700 hover:border-blue-400/40 hover:bg-slate-800"
                        : "bg-white border-blue-200/60 hover:border-blue-300 hover:shadow-blue-200/40"
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      transition:
                        "transform 0.1s ease-out, box-shadow 0.3s, border-color 0.3s",
                    }}
                  >
                    {/* Book Icon */}
                    <div className="flex items-center justify-between mb-4 sm:mb-4">
                      <div
                        className={`w-14 sm:w-14 md:w-16 lg:w-16 h-14 sm:h-14 md:h-16 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                          isDarkMode
                            ? "bg-gradient-to-br from-blue-400/15 to-pink-400/15 text-blue-300"
                            : "bg-gradient-to-br from-blue-100 to-pink-100 text-blue-600"
                        }`}
                        style={{ transform: "translateZ(20px)" }}
                      >
                        <BookOpen
                          size={28}
                          className="w-7 sm:w-8 md:w-9"
                          strokeWidth={2}
                        />
                      </div>
                      {/* Skill badge - top right */}
                      <div
                        className={`flex items-center gap-1.5 sm:gap-2 px-2.5 md:px-3 py-1 sm:py-1.5 rounded-md text-xs md:text-sm font-bold ${
                          isDarkMode
                            ? "bg-pink-400/10 text-pink-300"
                            : "bg-pink-100 text-pink-600"
                        }`}
                        style={{ transform: "translateZ(15px)" }}
                      >
                        <Icon
                          size={14}
                          className="w-3.5 h-3.5"
                          strokeWidth={2.5}
                        />
                        {vol.skill}
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-2xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 transition-colors duration-300 ${
                        isDarkMode
                          ? "text-white group-hover:text-blue-300"
                          : "text-slate-900 group-hover:text-blue-600"
                      }`}
                      style={{ transform: "translateZ(30px)" }}
                    >
                      Vol {volumeNum}
                    </h3>

                    {/* Stats - Compact */}
                    <div
                      className="flex items-center gap-2 sm:gap-3 flex-wrap"
                      style={{ transform: "translateZ(10px)" }}
                    >
                      <div
                        className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-xs sm:text-xs font-semibold ${
                          isDarkMode
                            ? "bg-slate-700/50 text-blue-300"
                            : "bg-blue-100/80 text-blue-600"
                        }`}
                      >
                        {vol.topics.length} chủ đề
                      </div>
                      <div
                        className={`text-xs sm:text-xs font-medium ${
                          isDarkMode ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {vol.totalCards} từ
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className={`text-center py-16 sm:py-20 text-sm sm:text-base ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}
          >
            Chưa có dữ liệu.
          </div>
        )}
      </div>
    );
  };

  // ==========================================
  // VOLUME DETAIL VIEW - Show Topics
  // ==========================================
  const renderVolumeDetail = () => {
    const volumeDecks = decks
      .filter(
        (d) =>
          d.skill === selectedVolume.skill &&
          d.volume === selectedVolume.volume,
      )
      .sort((a, b) => a.topic.localeCompare(b.topic));

    const Icon = selectedVolume.skill === "Speaking" ? Mic : BookText;
    const volumeNum = selectedVolume.volume.replace(/\D/g, "");

    return (
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header with Back Button */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-6 md:mb-8">
          <div style={{ perspective: "1000px" }}>
            <button
              onClick={closeVolume}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "rotateX(0deg) rotateY(0deg) scale(1)";
              }}
              className={`p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl hover:shadow-lg active:scale-95 ${
                isDarkMode
                  ? "bg-slate-800 text-blue-300 hover:bg-slate-700"
                  : "bg-white text-blue-600 hover:bg-blue-50 shadow-md"
              }`}
              style={{
                transformStyle: "preserve-3d",
                transition:
                  "transform 0.1s ease-out, box-shadow 0.3s, background-color 0.3s",
              }}
            >
              <ArrowLeft size={24} className="w-6 sm:w-6" strokeWidth={2} />
            </button>
          </div>
          <div className="flex-1 min-w-0">
            <div
              className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold mb-1 ${
                isDarkMode ? "text-pink-300" : "text-pink-600"
              }`}
            >
              <Icon size={16} className="w-4 h-4" strokeWidth={2} />
              {selectedVolume.skill}
            </div>
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl font-bold truncate ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Vol {volumeNum}
            </h1>
          </div>
          <ThemeToggle
            isDarkMode={isDarkMode}
            onToggle={() => setIsDarkMode(!isDarkMode)}
          />
        </div>

        {/* Topics Grid */}
        {volumeDecks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-4 md:gap-5 lg:gap-6">
            {volumeDecks.map((deck) => (
              <div key={deck.id} style={{ perspective: "1000px" }}>
                <button
                  onClick={() => openDeck(deck.id)}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -12;
                    const rotateY = ((x - centerX) / centerX) * 12;
                    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "rotateX(0deg) rotateY(0deg) scale(1)";
                  }}
                  className={`group w-full text-left rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 hover:shadow-2xl active:scale-[0.98] ${
                    isDarkMode
                      ? "bg-slate-800/90 border-slate-700 hover:border-blue-400/40 hover:bg-slate-800"
                      : "bg-white border-blue-200/60 hover:border-blue-300 hover:shadow-blue-200/40"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    transition:
                      "transform 0.1s ease-out, box-shadow 0.3s, border-color 0.3s",
                  }}
                >
                  <div
                    className={`w-12 sm:w-12 md:w-14 lg:w-14 h-12 sm:h-12 md:h-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110 ${
                      isDarkMode
                        ? "bg-blue-400/10 text-blue-300"
                        : "bg-blue-100/80 text-blue-500"
                    }`}
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <BookOpen
                      size={24}
                      className="w-6 sm:w-6 md:w-7"
                      strokeWidth={2}
                    />
                  </div>
                  <h3
                    className={`text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-2.5 transition-colors duration-300 line-clamp-2 ${
                      isDarkMode
                        ? "text-white group-hover:text-blue-300"
                        : "text-slate-900 group-hover:text-blue-500"
                    }`}
                    style={{ transform: "translateZ(25px)" }}
                  >
                    {deck.topic}
                  </h3>
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-xs sm:text-xs font-semibold ${
                      isDarkMode
                        ? "bg-slate-700/50 text-blue-300"
                        : "bg-blue-100/80 text-blue-600"
                    }`}
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {deck.cards.length} từ vựng
                  </div>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`text-center py-16 sm:py-20 text-sm sm:text-base ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}
          >
            Không có chủ đề nào.
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
      <div className="w-full max-w-5xl mx-auto flex flex-col px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Top Navigation Bar */}
        <div className="w-full flex justify-between items-center mb-3 xs:mb-4 sm:mb-6 md:mb-8 gap-2 xs:gap-3 sm:gap-4">
          <div style={{ perspective: "1000px" }}>
            <button
              onClick={closeDeck}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
              }}
              className={`flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 px-2.5 xs:px-3 sm:px-4 md:px-5 py-1.5 xs:py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs xs:text-sm sm:text-base font-semibold shadow-md hover:shadow-lg active:scale-95 ${
                isDarkMode
                  ? "bg-slate-800 border-2 border-slate-700 hover:border-blue-400/40 text-slate-200 hover:text-blue-300"
                  : "bg-white border-2 border-blue-200/60 hover:border-blue-300 text-slate-700 hover:text-blue-600"
              }`}
              style={{
                transformStyle: "preserve-3d",
                transition:
                  "transform 0.1s ease-out, box-shadow 0.3s, border-color 0.3s",
              }}
            >
              <ArrowLeft
                size={18}
                className="xs:w-5 xs:h-5 sm:w-5 sm:h-5"
                strokeWidth={2}
              />{" "}
              <span className="hidden xs:inline">Quay lại</span>
            </button>
          </div>

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

        {/* Flashcard */}
        <div className="w-full flex-shrink-0 mt-4 xs:mt-5 sm:mt-6">
          <Flashcard
            card={currentCard}
            isFlipped={isFlipped}
            onFlip={handleFlip}
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

      {/* Small Heart Particles - Optimized */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
        {Array.from({ length: 10 }).map((_, i) => (
          <Heart
            key={`particle-${i}`}
            size={8 + (i % 4)}
            className={`absolute animate-float-heart ${
              isDarkMode ? "text-pink-200" : "text-pink-300"
            }`}
            style={{
              left: `${(i * 10) % 100}%`,
              top: `${(i * 11) % 100}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${15 + (i % 5) * 2}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Sparkles Effect - Optimized */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-25">
        {Array.from({ length: 8 }).map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            size={12 + (i % 3) * 2}
            className={`absolute animate-sparkle ${
              isDarkMode ? "text-blue-200" : "text-blue-300"
            }`}
            style={{
              left: `${(i * 12) % 100}%`,
              top: `${(i * 13) % 100}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      {/* Pulsing Heart Decorations - Optimized */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <Heart
            key={`pulse-${i}`}
            size={24 + (i % 3) * 4}
            className={`absolute animate-pulse-soft opacity-10 ${
              isDarkMode ? "text-pink-300" : "text-pink-400"
            }`}
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.9}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Conditional Render: Library → Volume Detail → Study Room */}
      <main className="relative z-10 flex-grow flex items-center justify-center">
        {activeDeckId !== null
          ? renderStudyRoom()
          : selectedVolume !== null
            ? renderVolumeDetail()
            : renderLibrary()}
      </main>
    </div>
  );
}
