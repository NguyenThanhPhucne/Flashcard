import { useState, useCallback, useEffect, useMemo } from "react";
import { flashcardDecks } from "./data/decks";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";
import LibraryView from "./components/LibraryView";
import VolumeDetailView from "./components/VolumeDetailView";
import StudyView from "./components/StudyView";
import SpeedQuizGame from "./components/SpeedQuizGame";
import DecorativeBackground from "./components/DecorativeBackground";

export default function App() {
  // Library state
  const [decks] = useState(flashcardDecks);
  const [selectedVolume, setSelectedVolume] = useState(null); // null = Library, {skill, volume} = Volume detail
  const [activeDeckId, setActiveDeckId] = useState(null); // null = Library/Volume view
  const [isGameMode, setIsGameMode] = useState(false); // false = Study mode, true = Game mode

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

  const openDeck = (deckId, gameMode = false) => {
    setActiveDeckId(deckId);
    setIsGameMode(gameMode);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const closeDeck = () => {
    setActiveDeckId(null);
    setIsGameMode(false);
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
  // MAIN RENDER
  // ==========================================
  return (
    <div
      className={`min-h-screen font-sans px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-4 xs:py-5 sm:py-6 md:py-8 lg:py-10 flex flex-col transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-800/90 via-blue-950/85 to-slate-800/90 text-slate-50"
          : "bg-gradient-to-br from-blue-50/25 via-pink-50/30 to-sky-50/25 text-slate-900"
      }`}
    >
      <DecorativeBackground
        isDarkMode={isDarkMode}
        floatingHearts={floatingHearts}
      />

      {/* Conditional Render: Library → Volume Detail → Study Room / Game Mode */}
      <main className="relative z-10 flex-grow flex items-center justify-center">
        {activeDeckId !== null ? (
          isGameMode ? (
            <SpeedQuizGame
              deck={activeDeck}
              isDarkMode={isDarkMode}
              onToggleTheme={() => setIsDarkMode(!isDarkMode)}
              onClose={closeDeck}
            />
          ) : (
            <StudyView
              activeDeck={activeDeck}
              currentIndex={currentIndex}
              currentCard={currentCard}
              isFlipped={isFlipped}
              isDarkMode={isDarkMode}
              onToggleTheme={() => setIsDarkMode(!isDarkMode)}
              onClose={closeDeck}
              onFlip={handleFlip}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )
        ) : selectedVolume !== null ? (
          <VolumeDetailView
            selectedVolume={selectedVolume}
            decks={decks}
            isDarkMode={isDarkMode}
            onToggleTheme={() => setIsDarkMode(!isDarkMode)}
            onClose={closeVolume}
            onOpenDeck={openDeck}
          />
        ) : (
          <LibraryView
            decks={decks}
            isDarkMode={isDarkMode}
            onToggleTheme={() => setIsDarkMode(!isDarkMode)}
            onOpenVolume={openVolume}
          />
        )}
      </main>
    </div>
  );
}
