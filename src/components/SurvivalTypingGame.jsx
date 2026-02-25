import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowLeft,
  Heart,
  Keyboard,
  Bomb,
  Trophy,
  Skull,
  RotateCcw,
  Zap,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Confetti from "./Confetti";

export default function SurvivalTypingGame({
  deck,
  isDarkMode,
  onToggleTheme,
  onClose,
}) {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(150); // 15 giây = 150 phần mười
  const [gameStatus, setGameStatus] = useState("playing"); // playing, victory, gameover
  const [shake, setShake] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  // Khởi tạo game
  const initGame = useCallback(() => {
    const gameWords = deck.cards.map((card) => ({
      word: card.word.toLowerCase().trim(),
      meaning: card.meaning,
      pronunciation: card.pronunciation,
    }));
    setWords(gameWords);
    setCurrentIndex(0);
    setInput("");
    setLives(3);
    setScore(0);
    setTimeLeft(150);
    setGameStatus("playing");
    setShake(false);
    setShowConfetti(false);
  }, [deck.cards]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  // Focus input khi game bắt đầu
  useEffect(() => {
    if (gameStatus === "playing" && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameStatus, currentIndex]);

  // Pháo hoa chiến thắng - Phải định nghĩa TRƯỚC để dùng trong các hàm khác
  const fireVictoryConfetti = useCallback(() => {
    const duration = 2500;
    const end = Date.now() + duration;
    const colors = ["#f43f5e", "#ec4899", "#a855f7", "#06b6d4"];

    (function frame() {
      if (globalThis.confetti) {
        globalThis.confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors: colors,
        });
        globalThis.confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors: colors,
        });
      }

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  const loadConfettiScript = useCallback((callback) => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js";
    script.onload = callback;
    document.head.appendChild(script);
  }, []);

  const triggerVictoryFireworks = useCallback(() => {
    if (globalThis.confetti) {
      fireVictoryConfetti();
    } else {
      loadConfettiScript(() => {
        fireVictoryConfetti();
      });
    }
  }, [fireVictoryConfetti, loadConfettiScript]);

  // Xử lý khi hết giờ
  const handleTimeout = useCallback(() => {
    setShake(true);
    setTimeout(() => setShake(false), 500);

    setLives((prev) => {
      const newLives = prev - 1;
      if (newLives === 0) {
        // Game Over
        setGameStatus("gameover");
        return newLives;
      }

      // Còn mạng - chuyển sang từ tiếp theo
      if (currentIndex < words.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setInput("");
        setTimeLeft(150);
      } else {
        // Đã hết từ - Victory!
        setGameStatus("victory");
        setShowConfetti(true);
        triggerVictoryFireworks();
      }
      return newLives;
    });
  }, [currentIndex, words.length, triggerVictoryFireworks]);

  // Timer countdown
  useEffect(() => {
    if (gameStatus === "playing" && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 100); // 0.1 giây
    } else if (timeLeft === 0 && gameStatus === "playing") {
      // Hết giờ - mất mạng
      handleTimeout();
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [timeLeft, gameStatus, handleTimeout]);

  // Xử lý input thay đổi
  const handleInputChange = useCallback(
    (e) => {
      const rawValue = e.target.value.toLowerCase();
      setInput(rawValue);

      // Kiểm tra real-time (so sánh sau khi trim)
      const trimmedValue = rawValue.trim();
      if (trimmedValue && trimmedValue === words[currentIndex]?.word) {
        // Tính điểm bonus dựa trên thời gian còn lại
        const bonusScore = Math.floor(timeLeft / 10) * 5; // Bonus 5 điểm mỗi giây còn lại
        setScore((prev) => prev + 100 + bonusScore);

        // Clear input ngay lập tức
        setInput("");

        // Chuyển sang từ tiếp theo
        if (currentIndex < words.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          setTimeLeft(150);
        } else {
          // Hoàn thành tất cả từ - Victory!
          setGameStatus("victory");
          setShowConfetti(true);
          triggerVictoryFireworks();
        }
      }
    },
    [words, currentIndex, timeLeft, triggerVictoryFireworks],
  );

  // Format time
  const formatTime = (time) => {
    return (time / 10).toFixed(1);
  };

  if (!words[currentIndex]) return null;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8 py-4">
      {showConfetti && <Confetti />}

      {/* Header */}
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
              <Keyboard size={28} className="text-rose-500" />
              Gõ Từ Sinh Tồn
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

      {/* Game Container */}
      <div
        className={`w-full p-6 md:p-8 rounded-3xl shadow-xl border relative overflow-hidden transition-all ${
          isDarkMode
            ? "bg-slate-800/80 border-slate-700/50"
            : "bg-white border-slate-200"
        } ${shake ? "animate-shake border-red-500" : ""}`}
      >
        {/* Game Over Screen */}
        {gameStatus === "gameover" && (
          <div className="text-center py-10 animate-in zoom-in duration-500">
            <Skull
              size={80}
              className="mx-auto text-slate-500 mb-6 drop-shadow-2xl"
            />
            <h2 className="text-4xl font-black mb-2 text-red-500">Thất bại!</h2>
            <p
              className={`text-lg mb-8 font-medium ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Bom đã nổ! Bạn chỉ đạt{" "}
              <strong className="text-rose-500 text-3xl mx-2">{score}</strong>{" "}
              điểm
            </p>
            <button
              onClick={initGame}
              className="px-6 py-3 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition-colors shadow-lg active:scale-95 flex items-center gap-2 mx-auto"
            >
              <RotateCcw size={20} /> Chơi lại
            </button>
          </div>
        )}

        {/* Victory Screen */}
        {gameStatus === "victory" && (
          <div className="text-center py-10 animate-in zoom-in duration-500">
            <Trophy
              size={80}
              className="mx-auto text-amber-400 mb-6 drop-shadow-2xl animate-bounce"
            />
            <h2 className="text-4xl font-black mb-2 text-emerald-500">
              Sống sót thành công!
            </h2>
            <p
              className={`text-lg mb-8 font-medium ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Điểm kỹ năng gõ:{" "}
              <strong className="text-rose-500 text-3xl mx-2">{score}</strong>
            </p>
            <button
              onClick={initGame}
              className="px-6 py-3 bg-rose-600 text-white rounded-xl font-bold hover:bg-rose-700 transition-colors shadow-lg active:scale-95 flex items-center gap-2 mx-auto"
            >
              <RotateCcw size={20} /> Gõ lại
            </button>
          </div>
        )}

        {/* Playing Screen */}
        {gameStatus === "playing" && (
          <div className="flex flex-col h-full">
            {/* Lives & Score */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((heart) => (
                  <Heart
                    key={heart}
                    size={24}
                    className={`${
                      heart <= lives
                        ? "fill-rose-500 text-rose-500"
                        : isDarkMode
                          ? "fill-slate-700 text-slate-700"
                          : "fill-slate-200 text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <div className="text-2xl font-black text-rose-500">{score}</div>
            </div>

            {/* Meaning Prompt */}
            <div className="text-center mb-8">
              <p
                className={`text-sm font-bold uppercase tracking-widest mb-2 ${
                  isDarkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Gõ từ tiếng Anh có nghĩa là:
              </p>
              <h3
                className={`text-3xl md:text-4xl font-black tracking-tight ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                "{words[currentIndex]?.meaning}"
              </h3>
            </div>

            {/* Input Field */}
            <div className="relative mb-8">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Gõ đáp án vào đây..."
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                className={`w-full text-center text-3xl font-bold py-4 px-6 rounded-2xl border-4 outline-none transition-all shadow-inner focus:border-rose-400 ${
                  isDarkMode
                    ? "bg-slate-900 text-white border-slate-700"
                    : "bg-slate-50 text-slate-900 border-slate-200"
                }`}
              />
              <Keyboard
                size={24}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-slate-400 opacity-50"
              />
            </div>

            {/* Timer Bomb */}
            <div className="w-full relative mt-auto">
              <div className="flex justify-between items-end mb-2">
                <Bomb
                  size={24}
                  className={`text-rose-500 ${
                    timeLeft < 30 ? "animate-bounce text-red-600" : ""
                  }`}
                />
                <span
                  className={`font-mono font-bold ${
                    timeLeft < 30
                      ? "text-red-500 animate-pulse"
                      : isDarkMode
                        ? "text-slate-400"
                        : "text-slate-500"
                  }`}
                >
                  {formatTime(timeLeft)}s
                </span>
              </div>
              <div
                className={`w-full rounded-full h-3 overflow-hidden ${
                  isDarkMode ? "bg-slate-700" : "bg-slate-200"
                }`}
              >
                <div
                  className={`h-full transition-all duration-100 rounded-full ${
                    timeLeft > 100
                      ? "bg-emerald-500"
                      : timeLeft > 50
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }`}
                  style={{ width: `${(timeLeft / 150) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Progress Hint */}
            <div
              className={`mt-6 text-center text-sm font-medium ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              <Zap size={16} className="inline mr-1" />
              Câu {currentIndex + 1}/{words.length}
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
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
            transform: translateX(-8px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(8px);
          }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
