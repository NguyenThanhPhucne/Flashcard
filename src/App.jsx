import { useState, useCallback } from "react";
import { initialCards } from "./data/cards";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";
import Header from "./components/Header";
import Flashcard from "./components/Flashcard";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [cards, setCards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [flipDirection, setFlipDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentCard = cards[currentIndex];
  const nextCard = cards[(currentIndex + 1) % cards.length];
  const prevCard = cards[(currentIndex - 1 + cards.length) % cards.length];

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFlipDirection('next');
    setIsFlipped(false);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      setFlipDirection(null);
      setIsAnimating(false);
    }, 1000);
  }, [cards.length, isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFlipDirection('prev');
    setIsFlipped(false);
    
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + cards.length) % cards.length,
      );
      setFlipDirection(null);
      setIsAnimating(false);
    }, 1000);
  }, [cards.length, isAnimating]);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  // Sử dụng custom hook cho keyboard navigation
  useKeyboardNavigation(handleNext, handlePrev, handleFlip, false);

  return (
    <div
      className={`min-h-screen font-sans px-4 py-4 md:px-8 md:py-8 flex flex-col items-center transition-all duration-500 ${isDarkMode ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-50" : "bg-gradient-to-br from-blue-50/50 via-pink-50/40 to-rose-50/30 text-slate-900"}`}
    >
      {/* Decorative background elements */}
      <div
        className={`fixed inset-0 pointer-events-none overflow-hidden ${isDarkMode ? "opacity-20" : "opacity-20"}`}
      >
        <div
          className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? "bg-sky-400/15" : "bg-blue-200/30"}`}
        ></div>
        <div
          className={`absolute top-1/2 right-1/4 w-80 h-80 rounded-full blur-3xl ${isDarkMode ? "bg-blue-300/10" : "bg-pink-200/25"}`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? "bg-cyan-400/12" : "bg-rose-200/30"}`}
        ></div>
      </div>
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      <main className="w-full max-w-3xl flex flex-col items-center flex-grow justify-center gap-6 md:gap-8 relative z-10">
        <ProgressBar
          current={currentIndex}
          total={cards.length}
          isDarkMode={isDarkMode}
        />

        <div className="w-full flex-shrink-0">
          {/* Single Card with Page Turn Effect */}
          <div
            className="w-full relative"
            style={{
              perspective: '2500px',
            }}
          >
            <div
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: flipDirection === 'next' ? 'left center' : flipDirection === 'prev' ? 'right center' : 'center',
                transform: flipDirection === 'next' ? 'rotateY(-180deg)' : flipDirection === 'prev' ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transition: flipDirection ? 'transform 1s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.5s ease-in-out' : 'none',
                opacity: flipDirection ? 0.95 : 1,
                willChange: flipDirection ? 'transform, opacity' : 'auto',
              }}
            >
              {/* Front side - Current card */}
              <div
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
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
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                }}
              >
                <Flashcard
                  card={flipDirection === 'next' ? nextCard : prevCard}
                  isFlipped={false}
                  onFlip={() => {}}
                  isDarkMode={isDarkMode}
                />
              </div>
            </div>
          </div>

          {/* Hover Hint - Chỉ hiển thị trên desktop */}
          <div
            className={`hidden md:flex items-center justify-center gap-2 mt-4 text-xs font-medium animate-float ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
          >
            <span className="opacity-60">
              💡 Di chuột vào thẻ để xem hiệu ứng 3D
            </span>
          </div>
        </div>

        <Navigation
          onPrev={handlePrev}
          onNext={handleNext}
          onFlip={handleFlip}
          isDarkMode={isDarkMode}
        />
      </main>

    </div>
  );
}
