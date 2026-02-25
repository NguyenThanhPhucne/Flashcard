import { useState, useEffect, useCallback, useRef } from "react";
import {
  ArrowLeft,
  Trophy,
  Timer,
  Zap,
  RotateCcw,
  Sparkles,
  Flame,
  Award,
  Star,
  PartyPopper,
  Lightbulb,
  Target,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Confetti from "./Confetti";

export default function SpeedMatchGame({
  deck,
  isDarkMode,
  onToggleTheme,
  onClose,
}) {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [personalBest, setPersonalBest] = useState(null);
  const [shakeCards, setShakeCards] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isNewRecord, setIsNewRecord] = useState(false);
  const [comboStreak, setComboStreak] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [showComboMessage, setShowComboMessage] = useState(false);
  const [comboMessage, setComboMessage] = useState({ text: "", icon: null });
  const [pulseCards, setPulseCards] = useState([]);
  const timerRef = useRef(null);

  // Khởi tạo game - tạo các thẻ từ deck
  const initializeGame = useCallback(() => {
    // Lấy tối đa 6 cặp từ (12 thẻ) để không quá khó
    const selectedWords = deck.cards.slice(0, 6);

    // Tạo mảng thẻ: một nửa là từ tiếng Anh, một nửa là nghĩa
    const gameCards = [];
    selectedWords.forEach((card, index) => {
      // Thẻ tiếng Anh
      gameCards.push({
        id: `word-${index}`,
        pairId: index,
        type: "word",
        content: card.word,
        pronunciation: card.pronunciation,
      });
      // Thẻ nghĩa tiếng Việt
      gameCards.push({
        id: `meaning-${index}`,
        pairId: index,
        type: "meaning",
        content: card.meaning,
      });
    });

    // Shuffle cards
    const shuffled = gameCards.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setSelectedCards([]);
    setMatchedPairs([]);
    setTimer(0);
    setIsRunning(true);
    setGameComplete(false);
    setShakeCards([]);
    setIsNewRecord(false);
    setShowConfetti(false);
    setComboStreak(0);
    setMaxCombo(0);
    setShowComboMessage(false);
    setPulseCards([]);
  }, [deck.cards]);

  // Load personal best từ localStorage
  useEffect(() => {
    const savedBest = localStorage.getItem(`speed-match-best-${deck.id}`);
    if (savedBest) {
      setPersonalBest(parseFloat(savedBest));
    }
  }, [deck.id]);

  // Khởi tạo game khi component mount
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  // Timer countdown với độ chính cao (10ms interval)
  useEffect(() => {
    if (isRunning && !gameComplete) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => prev + 0.01);
      }, 10);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, gameComplete]);

  // Xử lý khi chọn thẻ
  const handleCardClick = (card) => {
    // Không cho chọn nếu game chưa chạy hoặc đã hoàn thành
    if (!isRunning || gameComplete) return;

    // Không cho chọn thẻ đã matched
    if (matchedPairs.includes(card.pairId)) return;

    // Không cho chọn thẻ đang được chọn
    if (selectedCards.find((c) => c.id === card.id)) return;

    // Không cho chọn quá 2 thẻ
    if (selectedCards.length >= 2) return;

    const newSelected = [...selectedCards, card];
    setSelectedCards(newSelected);

    // Nếu đã chọn 2 thẻ, kiểm tra match
    if (newSelected.length === 2) {
      checkMatch(newSelected);
    }
  };

  // Kiểm tra 2 thẻ có khớp nhau không
  const checkMatch = (selected) => {
    const [card1, card2] = selected;

    setTimeout(() => {
      if (card1.pairId === card2.pairId) {
        // ĐÚNG - Nổ tung thẻ!
        const newMatched = [...matchedPairs, card1.pairId];
        setMatchedPairs(newMatched);
        setSelectedCards([]);

        // Tăng combo streak
        const newStreak = comboStreak + 1;
        setComboStreak(newStreak);
        if (newStreak > maxCombo) {
          setMaxCombo(newStreak);
        }

        // Hiển thị combo message
        showComboFeedback(newStreak);

        // Pulse effect cho cards vừa match
        setPulseCards([card1.id, card2.id]);
        setTimeout(() => setPulseCards([]), 600);

        // Trigger confetti nhỏ
        triggerMiniConfetti();

        // Kiểm tra xem đã hoàn thành game chưa
        if (newMatched.length === cards.length / 2) {
          completeGame();
        }
      } else {
        // ❌ SAI - Rung và báo đỏ, reset combo
        setComboStreak(0);
        setShakeCards([card1.id, card2.id]);
        setTimeout(() => {
          setShakeCards([]);
          setSelectedCards([]);
        }, 500);
      }
    }, 300);
  };

  // Hiển thị combo feedback
  const showComboFeedback = (streak) => {
    const messages = {
      2: "Nice!",
      3: "Great!",
      4: "Amazing!",
      5: "Unstoppable!",
      6: "PERFECT!",
    };

    const icons = {
      2: <Flame size={32} className="inline" />,
      3: <Zap size={32} className="inline" />,
      4: <Sparkles size={32} className="inline" />,
      5: <Star size={32} className="inline" />,
      6: <Target size={32} className="inline" />,
    };

    if (messages[streak]) {
      setComboMessage({
        text: messages[streak],
        icon: icons[streak],
      });
      setShowComboMessage(true);
      setTimeout(() => setShowComboMessage(false), 1500);
    }
  };

  // Hoàn thành game
  const completeGame = () => {
    setIsRunning(false);
    setGameComplete(true);

    // Kiểm tra kỷ lục cá nhân
    const currentTime = timer;
    const savedBest = localStorage.getItem(`speed-match-best-${deck.id}`);

    if (!savedBest || currentTime < parseFloat(savedBest)) {
      // PHÁ KỶ LỤC!
      localStorage.setItem(
        `speed-match-best-${deck.id}`,
        currentTime.toFixed(2),
      );
      setPersonalBest(currentTime);
      setIsNewRecord(true);
      setShowConfetti(true);
      triggerMegaFireworks();
    } else {
      setShowConfetti(true);
      triggerNormalFireworks();
    }
  };

  // Pháo hoa nhỏ khi ghép đúng
  const triggerMiniConfetti = () => {
    if (!window.confetti) {
      loadConfettiScript(() => {
        window.confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.6 },
          colors: ["#FFD700", "#FF69B4", "#00CED1"],
        });
      });
    } else {
      window.confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.6 },
        colors: ["#FFD700", "#FF69B4", "#00CED1"],
      });
    }
  };

  // Pháo hoa bình thường khi hoàn thành
  const triggerNormalFireworks = () => {
    if (!window.confetti) {
      loadConfettiScript(() => {
        window.confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FFD700", "#FF69B4", "#00CED1"],
        });
      });
    } else {
      window.confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FFD700", "#FF69B4", "#00CED1"],
      });
    }
  };

  // Pháo hoa MEGA khi phá kỷ lục
  const triggerMegaFireworks = () => {
    if (!window.confetti) {
      loadConfettiScript(() => {
        fireMegaConfetti();
      });
    } else {
      fireMegaConfetti();
    }
  };

  const fireMegaConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;
    const colors = ["#FFD700", "#FF69B4", "#00CED1", "#FF6347", "#9370DB"];

    (function frame() {
      window.confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: colors,
      });
      window.confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    setTimeout(() => {
      window.confetti({
        particleCount: 150,
        spread: 160,
        origin: { y: 0.6 },
        colors: colors,
      });
    }, 200);
  };

  // Load confetti script
  const loadConfettiScript = (callback) => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js";
    script.onload = callback;
    document.head.appendChild(script);
  };

  // Format timer
  const formatTime = (time) => {
    return time.toFixed(2);
  };

  // Chơi lại
  const handleRestart = () => {
    setShowConfetti(false);
    initializeGame();
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4">
      {showConfetti && <Confetti />}

      {/* Header - Cleaner Design */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onClose}
            className={`group p-2.5 sm:p-3 rounded-xl border transition-all duration-200 hover:scale-110 active:scale-95 ${
              isDarkMode
                ? "bg-slate-800/80 border-slate-700/50 text-slate-300 hover:bg-slate-700 hover:border-slate-600"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:shadow"
            }`}
          >
            <ArrowLeft
              size={20}
              strokeWidth={2.5}
              className="transition-transform group-hover:-translate-x-0.5"
            />
          </button>
          <div>
            <h2
              className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              <Zap size={28} className="text-amber-400" />
              Ghép Từ Siêu Tốc
            </h2>
            <p
              className={`text-xs sm:text-sm mt-0.5 ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {deck.topic}
            </p>
          </div>
        </div>
        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
      </div>

      {/* Stats Bar - Cleaner Layout */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {/* Timer */}
        <div
          className={`p-4 sm:p-5 rounded-2xl border relative overflow-hidden backdrop-blur-sm transition-all duration-200 ${
            isDarkMode
              ? "bg-slate-800/60 border-slate-700/50 hover:bg-slate-800/80"
              : "bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Timer
              size={18}
              className={isDarkMode ? "text-blue-400" : "text-blue-600"}
            />
            <span
              className={`text-xs font-medium uppercase tracking-wider ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Thời gian
            </span>
          </div>
          <div
            className={`text-2xl sm:text-3xl font-bold font-mono tabular-nums ${
              isDarkMode ? "text-blue-300" : "text-blue-600"
            }`}
          >
            {formatTime(timer)}s
          </div>
        </div>

        {/* Progress */}
        <div
          className={`p-4 sm:p-5 rounded-2xl border relative overflow-hidden backdrop-blur-sm transition-all duration-200 ${
            isDarkMode
              ? "bg-slate-800/60 border-slate-700/50 hover:bg-slate-800/80"
              : "bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Zap
              size={18}
              className={isDarkMode ? "text-amber-400" : "text-amber-600"}
            />
            <span
              className={`text-xs font-medium uppercase tracking-wider ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Tiến độ
            </span>
          </div>
          <div
            className={`text-2xl sm:text-3xl font-bold tabular-nums ${
              isDarkMode ? "text-amber-300" : "text-amber-600"
            }`}
          >
            {matchedPairs.length}/{cards.length / 2}
          </div>
          {/* Progress bar - Smoother */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 ${
              isDarkMode ? "bg-slate-700/30" : "bg-slate-200/50"
            }`}
          >
            <div
              className={`h-full transition-all duration-700 ease-out ${
                isDarkMode
                  ? "bg-gradient-to-r from-amber-400 to-amber-500"
                  : "bg-gradient-to-r from-amber-500 to-amber-600"
              }`}
              style={{
                width: `${(matchedPairs.length / (cards.length / 2)) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Combo Streak */}
        <div
          className={`p-4 sm:p-5 rounded-2xl border relative overflow-hidden backdrop-blur-sm transition-all duration-300 ${
            comboStreak >= 3
              ? isDarkMode
                ? "bg-orange-900/40 border-orange-500/60 shadow-lg shadow-orange-500/20 scale-105"
                : "bg-gradient-to-br from-orange-50 to-red-50 border-orange-400/60 shadow-lg shadow-orange-300/30 scale-105"
              : isDarkMode
                ? "bg-slate-800/60 border-slate-700/50 hover:bg-slate-800/80"
                : "bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Flame
              size={18}
              className={
                comboStreak >= 3
                  ? isDarkMode
                    ? "text-orange-400 animate-bounce-slow"
                    : "text-orange-600 animate-bounce-slow"
                  : isDarkMode
                    ? "text-orange-400"
                    : "text-orange-600"
              }
            />
            <span
              className={`text-xs font-medium uppercase tracking-wider ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Combo
            </span>
          </div>
          <div
            className={`text-2xl sm:text-3xl font-bold tabular-nums ${
              comboStreak >= 3
                ? isDarkMode
                  ? "text-orange-300"
                  : "text-orange-700"
                : isDarkMode
                  ? "text-orange-400"
                  : "text-orange-600"
            }`}
          >
            {comboStreak}x
          </div>
        </div>

        {/* Personal Best */}
        <div
          className={`p-4 sm:p-5 rounded-2xl border relative overflow-hidden backdrop-blur-sm transition-all duration-200 ${
            isDarkMode
              ? "bg-slate-800/60 border-slate-700/50 hover:bg-slate-800/80"
              : "bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Trophy
              size={18}
              className={isDarkMode ? "text-purple-400" : "text-purple-600"}
            />
            <span
              className={`text-xs font-medium uppercase tracking-wider ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Kỷ lục
            </span>
          </div>
          <div
            className={`text-2xl sm:text-3xl font-bold font-mono tabular-nums ${
              isDarkMode ? "text-purple-300" : "text-purple-600"
            }`}
          >
            {personalBest ? `${personalBest.toFixed(2)}s` : "--"}
          </div>
        </div>
      </div>

      {/* Combo Message Popup - More Subtle */}
      {showComboMessage && (
        <div
          className={`fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-2xl sm:text-3xl md:text-4xl font-black animate-bounce-in shadow-2xl backdrop-blur-xl border-2 ${
            isDarkMode
              ? "bg-gradient-to-r from-orange-500/90 to-red-500/90 border-orange-300/50 text-white"
              : "bg-gradient-to-r from-orange-500/95 to-red-500/95 border-orange-300/80 text-white"
          }`}
          style={{
            textShadow: "0 2px 12px rgba(0,0,0,0.2)",
          }}
        >
          <span className="inline-flex items-center gap-3">
            {comboMessage.icon}
            {comboMessage.text}
          </span>
        </div>
      )}

      {/* Game Complete Screen - Cleaner Design */}
      {gameComplete && (
        <div
          className={`mb-6 sm:mb-8 p-8 sm:p-10 rounded-3xl border text-center relative overflow-hidden backdrop-blur-sm ${
            isDarkMode
              ? "bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/40"
              : "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200"
          }`}
        >
          {/* Subtle background particles */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className="absolute rounded-full bg-current animate-float"
                  style={{
                    width: Math.random() * 8 + 4 + "px",
                    height: Math.random() * 8 + 4 + "px",
                    left: Math.random() * 100 + "%",
                    top: Math.random() * 100 + "%",
                    animationDelay: Math.random() * 4 + "s",
                    animationDuration: Math.random() * 4 + 3 + "s",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="mb-5 animate-bounce-in inline-block">
              {isNewRecord ? (
                <Trophy size={64} className="text-amber-400" strokeWidth={2} />
              ) : (
                <PartyPopper
                  size={64}
                  className="text-purple-400"
                  strokeWidth={2}
                />
              )}
            </div>
            <h3
              className={`text-3xl sm:text-4xl font-black mb-6 tracking-tight flex items-center justify-center gap-3 ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}
            >
              {isNewRecord ? (
                <>
                  Phá Kỷ Lục!
                  <Sparkles size={32} className="text-amber-400" />
                </>
              ) : (
                "Hoàn Thành!"
              )}
            </h3>

            {/* Stats Grid - Better Design */}
            <div className="grid grid-cols-2 gap-4 my-8 max-w-sm mx-auto">
              <div
                className={`p-5 rounded-2xl backdrop-blur-sm border transition-all duration-200 hover:scale-105 ${
                  isDarkMode
                    ? "bg-slate-800/60 border-slate-700/40"
                    : "bg-white/90 border-purple-200/60 shadow-sm"
                }`}
              >
                <div
                  className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Thời gian
                </div>
                <div
                  className={`text-3xl font-bold font-mono tabular-nums ${
                    isDarkMode ? "text-purple-300" : "text-purple-700"
                  }`}
                >
                  {formatTime(timer)}s
                </div>
              </div>

              <div
                className={`p-5 rounded-2xl backdrop-blur-sm border transition-all duration-200 hover:scale-105 ${
                  isDarkMode
                    ? "bg-slate-800/60 border-slate-700/40"
                    : "bg-white/90 border-purple-200/60 shadow-sm"
                }`}
              >
                <div
                  className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Max Combo
                </div>
                <div
                  className={`text-3xl font-bold flex items-center justify-center gap-2 ${
                    isDarkMode ? "text-orange-300" : "text-orange-600"
                  }`}
                >
                  <Flame size={22} />
                  {maxCombo}x
                </div>
              </div>
            </div>

            {/* Star Rating - Cleaner */}
            <div className="flex justify-center gap-3 mb-6">
              {[1, 2, 3].map((star) => (
                <Star
                  key={star}
                  size={36}
                  className={`transition-all duration-300 ${
                    timer <= 15
                      ? "text-yellow-400 fill-yellow-400 drop-shadow-lg"
                      : timer <= 25 && star <= 2
                        ? "text-yellow-400 fill-yellow-400 drop-shadow-lg"
                        : timer <= 40 && star === 1
                          ? "text-yellow-400 fill-yellow-400 drop-shadow-lg"
                          : isDarkMode
                            ? "text-slate-600/50"
                            : "text-slate-300"
                  } animate-pulse-stars`}
                  style={{ animationDelay: `${star * 150}ms` }}
                />
              ))}
            </div>

            {isNewRecord && (
              <div
                className={`flex items-center justify-center gap-3 mb-6 py-3 px-5 rounded-xl inline-flex backdrop-blur-sm ${
                  isDarkMode
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "bg-yellow-100/80 text-yellow-700"
                }`}
              >
                <Sparkles size={20} />
                <span className="font-bold text-base">Kỷ lục mới của bạn!</span>
                <Sparkles size={20} />
              </div>
            )}

            {maxCombo === 6 && (
              <div
                className={`mb-6 px-5 py-2.5 rounded-xl inline-flex items-center gap-2 backdrop-blur-sm ${
                  isDarkMode
                    ? "bg-orange-500/20 text-orange-300"
                    : "bg-orange-100/80 text-orange-700"
                }`}
              >
                <Award size={18} />
                <span className="font-bold text-sm">Perfect Combo!</span>
                <Flame size={18} className="text-orange-500" />
              </div>
            )}

            <button
              onClick={handleRestart}
              className={`inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl ${
                isDarkMode
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-400 hover:to-pink-400"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500"
              }`}
            >
              <RotateCcw size={20} />
              Chơi lại ngay
            </button>
          </div>
        </div>
      )}

      {/* Cards Grid - Cleaner Design */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {cards.map((card) => {
          const isSelected = selectedCards.find((c) => c.id === card.id);
          const isMatched = matchedPairs.includes(card.pairId);
          const shouldShake = shakeCards.includes(card.id);
          const shouldPulse = pulseCards.includes(card.id);
          const isWord = card.type === "word";

          return (
            <button
              key={card.id}
              onClick={() => handleCardClick(card)}
              disabled={isMatched}
              className={`relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 min-h-[100px] sm:min-h-[120px] flex flex-col items-center justify-center group backdrop-blur-sm ${
                isMatched
                  ? "opacity-0 cursor-not-allowed transform scale-75 pointer-events-none"
                  : isSelected
                    ? isDarkMode
                      ? "bg-purple-600/20 border-purple-400 shadow-xl shadow-purple-500/40 scale-105 -translate-y-1 ring-2 ring-purple-400/40"
                      : "bg-gradient-to-br from-purple-100 to-pink-100 border-purple-400 shadow-xl shadow-purple-300/40 scale-105 -translate-y-1 ring-2 ring-purple-300/40"
                    : shouldShake
                      ? isDarkMode
                        ? "bg-red-900/30 border-red-500 animate-shake ring-2 ring-red-500/40"
                        : "bg-red-100 border-red-400 animate-shake ring-2 ring-red-400/40"
                      : shouldPulse
                        ? isDarkMode
                          ? "bg-emerald-900/30 border-emerald-400 animate-pulse-success"
                          : "bg-emerald-100 border-emerald-400 animate-pulse-success"
                        : isDarkMode
                          ? "bg-slate-800/50 border-slate-700/40 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 hover:bg-slate-800/70 hover:scale-102 active:scale-98"
                          : "bg-white/60 border-slate-200 hover:border-purple-300 hover:shadow-lg hover:shadow-slate-200/50 hover:bg-white/80 hover:scale-102 active:scale-98"
              } ${isMatched ? "" : "cursor-pointer"}`}
            >
              {/* Subtle glow for selected cards */}
              {isSelected && (
                <div
                  className={`absolute inset-0 rounded-2xl blur-2xl opacity-40 -z-10 ${
                    isDarkMode
                      ? "bg-gradient-to-br from-purple-500 to-pink-500"
                      : "bg-gradient-to-br from-purple-400 to-pink-400"
                  }`}
                />
              )}

              {/* Card content - Better Typography */}
              {isWord ? (
                <>
                  <div
                    className={`text-base sm:text-lg font-bold mb-1.5 text-center transition-all duration-200 leading-tight ${
                      isSelected
                        ? isDarkMode
                          ? "text-purple-200"
                          : "text-purple-800"
                        : shouldShake
                          ? "text-red-400"
                          : isDarkMode
                            ? "text-blue-300 group-hover:text-blue-200"
                            : "text-blue-700 group-hover:text-blue-800"
                    }`}
                  >
                    {card.content}
                  </div>
                  <div
                    className={`text-xs transition-all duration-200 ${
                      isSelected
                        ? isDarkMode
                          ? "text-purple-300/80"
                          : "text-purple-600/80"
                        : isDarkMode
                          ? "text-slate-400 group-hover:text-slate-300"
                          : "text-slate-500 group-hover:text-slate-600"
                    }`}
                  >
                    {card.pronunciation}
                  </div>
                </>
              ) : (
                <div
                  className={`text-sm sm:text-base font-semibold text-center transition-all duration-200 leading-snug px-2 ${
                    isSelected
                      ? isDarkMode
                        ? "text-pink-200"
                        : "text-pink-800"
                      : shouldShake
                        ? "text-red-400"
                        : isDarkMode
                          ? "text-slate-200 group-hover:text-slate-100"
                          : "text-slate-700 group-hover:text-slate-900"
                  }`}
                >
                  {card.content}
                </div>
              )}

              {/* Subtle hover overlay */}
              {!isSelected && !isMatched && (
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                    isDarkMode
                      ? "bg-gradient-to-br from-purple-500/5 to-pink-500/5"
                      : "bg-gradient-to-br from-purple-100/30 to-pink-100/30"
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Instructions - More Subtle */}
      {!gameComplete && matchedPairs.length === 0 && (
        <div
          className={`mt-6 sm:mt-8 p-4 rounded-xl text-center text-sm border backdrop-blur-sm ${
            isDarkMode
              ? "bg-slate-800/40 border-slate-700/30 text-slate-400"
              : "bg-slate-50/60 border-slate-200/60 text-slate-600"
          }`}
        >
          <span className="inline-flex items-center gap-2">
            <Lightbulb
              size={18}
              className={isDarkMode ? "text-amber-400" : "text-amber-500"}
            />
            <span>
              <span className="font-semibold">Hướng dẫn:</span> Chọn từ tiếng
              Anh và nghĩa tương ứng để ghép cặp. Nhanh nhất có thể!
            </span>
          </span>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        .scale-102 {
          transform: scale(1.02);
        }
        .scale-98 {
          transform: scale(0.98);
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-4px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(4px);
          }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0) rotate(-10deg);
            opacity: 0;
          }
          60% {
            transform: scale(1.1) rotate(5deg);
          }
          100% {
            transform: scale(1) rotate(0);
            opacity: 1;
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes pulse-subtle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.01);
          }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 1.2s ease-in-out infinite;
        }

        @keyframes pulse-success {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(34, 197, 94, 0);
            transform: scale(1.02);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
            transform: scale(1);
          }
        }
        .animate-pulse-success {
          animation: pulse-success 0.6s ease-out;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-120px) translateX(30px);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }

        @keyframes pulse-stars {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.85;
          }
        }
        .animate-pulse-stars {
          animation: pulse-stars 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
