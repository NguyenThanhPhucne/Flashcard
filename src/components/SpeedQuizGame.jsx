import { useState, useEffect } from "react";
import {
  Clock,
  Flame,
  Trophy,
  Target,
  ArrowLeft,
  Zap,
  Sparkles,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import GameSummary from "./GameSummary";
import Confetti from "./Confetti";
import ParticleEffect from "./ParticleEffect";

export default function SpeedQuizGame({
  deck,
  isDarkMode,
  onToggleTheme,
  onClose,
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [particleTrigger, setParticleTrigger] = useState(0);

  // 🎉 Hàm bắn pháo hoa chuyên nghiệp (Canvas Confetti - Dynamic Loading)
  const triggerFireworks = (intensity = "normal") => {
    // Tải thư viện canvas-confetti từ CDN nếu chưa có
    if (!window.confetti) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js";
      script.onload = () => {
        fireConfetti(intensity);
      };
      document.head.appendChild(script);
    } else {
      fireConfetti(intensity);
    }
  };

  // Hàm thực thi pháo hoa với các cấp độ khác nhau
  const fireConfetti = (intensity) => {
    const confetti = window.confetti;
    if (!confetti) return;

    if (intensity === "mega") {
      // Pháo hoa cực mạnh khi hoàn thành game
      const duration = 3000;
      const end = Date.now() + duration;

      const colors = ["#FFD700", "#FF69B4", "#00CED1", "#FF6347", "#9370DB"];

      (function frame() {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 },
          colors: colors,
        });
        confetti({
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

      // Bắn pháo hoa lớn từ giữa màn hình
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 160,
          origin: { y: 0.6 },
          colors: colors,
        });
      }, 200);
    } else {
      // Pháo hoa nhỏ khi trả lời đúng
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FFD700", "#FF69B4", "#00CED1"],
      });
    }
  };

  // Generate quiz questions from deck
  useEffect(() => {
    if (!deck || !deck.cards) return;

    const quizQuestions = deck.cards.slice(0, 10).map((card, index) => {
      // Create multiple choice options
      const correctAnswer = card.meaning;
      const otherOptions = deck.cards
        .filter((c) => c.id !== card.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map((c) => c.meaning);

      const allOptions = [correctAnswer, ...otherOptions].sort(
        () => Math.random() - 0.5,
      );

      return {
        id: index,
        word: card.word,
        pronunciation: card.pronunciation,
        correct: correctAnswer,
        options: allOptions,
        example: card.example,
      };
    });

    setQuestions(quizQuestions);
  }, [deck]);

  // Timer countdown
  useEffect(() => {
    if (gameOver || showFeedback || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeout();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, gameOver, showFeedback, questions]);

  // 🎉 Trigger pháo hoa mega khi hoàn thành game
  useEffect(() => {
    if (gameOver && correctAnswers > 0) {
      // Delay một chút để UI render xong rồi mới bắn pháo hoa
      const timer = setTimeout(() => {
        triggerFireworks("mega");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [gameOver, correctAnswers]);

  const handleTimeout = () => {
    // Time's up - count as wrong answer
    setIsCorrect(false);
    setShowFeedback(true);
    setCombo(0);

    setTimeout(() => {
      nextQuestion();
    }, 1500);
  };

  const handleAnswer = (option) => {
    if (showFeedback || !questions[currentQuestionIndex]) return;

    const correct = option === questions[currentQuestionIndex].correct;
    setSelectedAnswer(option);
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      // 🎉 Bắn pháo hoa nhỏ khi trả lời đúng
      triggerFireworks("normal");

      const newCombo = combo + 1;
      setCombo(newCombo);
      setMaxCombo(Math.max(maxCombo, newCombo));

      // Trigger particle effect
      setParticleTrigger((prev) => prev + 1);

      // Show confetti for high combo
      if (newCombo >= 5) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }

      // Combo multiplier: 1x, 2x, 3x, 5x
      let multiplier = 1;
      if (newCombo >= 10) multiplier = 5;
      else if (newCombo >= 5) multiplier = 3;
      else if (newCombo >= 3) multiplier = 2;

      const points = 10 * multiplier;
      setScore((prev) => prev + points);
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setCombo(0);
    }

    // Move to next question after feedback
    setTimeout(() => {
      nextQuestion();
    }, 1500);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setTimeLeft(15);

    if (currentQuestionIndex + 1 >= questions.length) {
      setGameOver(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setTimeLeft(15);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setGameOver(false);
    setShowFeedback(false);
    setCorrectAnswers(0);

    // Regenerate questions
    if (deck && deck.cards) {
      const quizQuestions = deck.cards.slice(0, 10).map((card, index) => {
        const correctAnswer = card.meaning;
        const otherOptions = deck.cards
          .filter((c) => c.id !== card.id)
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map((c) => c.meaning);

        const allOptions = [correctAnswer, ...otherOptions].sort(
          () => Math.random() - 0.5,
        );

        return {
          id: index,
          word: card.word,
          pronunciation: card.pronunciation,
          correct: correctAnswer,
          options: allOptions,
        };
      });
      setQuestions(quizQuestions);
    }
  };

  if (!deck || questions.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl">Đang tải câu hỏi...</p>
      </div>
    );
  }

  if (gameOver) {
    return (
      <GameSummary
        score={score}
        correctAnswers={correctAnswers}
        totalQuestions={questions.length}
        maxCombo={maxCombo}
        isDarkMode={isDarkMode}
        onRestart={restartGame}
        onClose={onClose}
        onToggleTheme={onToggleTheme}
      />
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const timeProgress = (timeLeft / 15) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 relative">
      {/* Confetti Effect */}
      <Confetti isActive={showConfetti} />

      {/* Animated Background Orbs - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-15 ${
            isDarkMode ? "bg-blue-400" : "bg-blue-200"
          } animate-float`}
          style={{ animationDuration: "12s" }}
        />
        <div
          className={`absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-12 ${
            isDarkMode ? "bg-purple-400" : "bg-purple-200"
          } animate-float`}
          style={{ animationDuration: "15s", animationDelay: "3s" }}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            isDarkMode ? "bg-pink-400" : "bg-pink-200"
          } animate-float`}
          style={{ animationDuration: "18s", animationDelay: "5s" }}
        />
      </div>

      {/* Header - Glassmorphism */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <button
          onClick={onClose}
          className={`group p-2.5 rounded-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl ${
            isDarkMode
              ? "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
              : "bg-white/60 hover:bg-white/80 text-slate-700 border border-black/5 hover:border-black/10"
          }`}
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
      </div>

      {/* Game Stats - Professional Glassmorphism */}
      <div className="grid grid-cols-4 gap-2 mb-4 relative z-10">
        {/* Score Card */}
        <div
          className={`group p-2.5 rounded-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-md hover:shadow-lg border ${
            isDarkMode
              ? "bg-gradient-to-br from-blue-500/15 to-indigo-600/15 border-blue-400/25 hover:border-blue-400/40"
              : "bg-gradient-to-br from-blue-200/30 to-indigo-300/30 border-blue-300/40 hover:border-blue-400/50"
          }`}
        >
          <div className="flex flex-col items-center">
            <div
              className={`p-1.5 rounded-lg mb-1 transition-all duration-300 group-hover:scale-110 ${
                isDarkMode ? "bg-blue-400/15" : "bg-blue-200/30"
              }`}
            >
              <Trophy className="w-5 h-5 text-blue-300 drop-shadow-sm group-hover:animate-tada" />
            </div>
            <p className={`text-xl font-black mb-0.5 animate-countUp ${
              isDarkMode ? "text-slate-200" : "text-slate-700"
            }`}>
              {score}
            </p>
            <p
              className={`text-[10px] font-semibold ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Điểm
            </p>
          </div>
        </div>

        {/* Combo Card */}
        <div
          className={`group p-2.5 rounded-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer relative overflow-hidden shadow-md hover:shadow-lg border ${
            combo >= 3
              ? isDarkMode
                ? "bg-gradient-to-br from-amber-500/20 to-orange-600/20 border-amber-400/30 hover:border-amber-400/50"
                : "bg-gradient-to-br from-amber-200/35 to-orange-300/35 border-amber-300/45 hover:border-amber-400/60"
              : isDarkMode
                ? "bg-gradient-to-br from-slate-600/20 to-slate-700/20 border-slate-500/30"
                : "bg-gradient-to-br from-slate-300/30 to-slate-400/30 border-slate-400/40"
          }`}
        >
          <div className="flex flex-col items-center relative z-10">
            <div
              className={`p-1.5 rounded-lg mb-1 transition-all duration-300 ${
                combo >= 3
                  ? "bg-amber-400/20 group-hover:scale-110"
                  : "bg-slate-400/10"
              }`}
            >
              <Flame
                className={`w-5 h-5 drop-shadow-sm transition-all ${
                  combo >= 3
                    ? "text-amber-300 animate-wiggle"
                    : "text-slate-400"
                }`}
              />
            </div>
            <p
              className={`text-xl font-black mb-0.5 ${
                combo >= 3
                  ? "text-amber-300"
                  : isDarkMode
                    ? "text-slate-300"
                    : "text-slate-600"
              }`}
            >
              {combo}x
            </p>
            <p
              className={`text-[10px] font-semibold ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Combo
            </p>
          </div>
          {combo >= 3 && (
            <Sparkles className="absolute top-1.5 right-1.5 w-3 h-3 text-amber-300 animate-pulse" />
          )}
        </div>

        {/* Timer Card with Circular Progress */}
        <div
          className={`group p-2.5 rounded-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-md hover:shadow-lg border ${
            timeLeft <= 5
              ? isDarkMode
                ? "bg-gradient-to-br from-rose-500/20 to-red-600/20 border-rose-400/30 hover:border-rose-400/50 animate-pulseScale"
                : "bg-gradient-to-br from-rose-200/35 to-red-300/35 border-rose-300/45 hover:border-rose-400/60 animate-pulseScale"
              : isDarkMode
                ? "bg-gradient-to-br from-teal-500/15 to-cyan-600/15 border-teal-400/25 hover:border-teal-400/40"
                : "bg-gradient-to-br from-teal-200/30 to-cyan-300/30 border-teal-300/40 hover:border-teal-400/50"
          }`}
        >
          <div className="flex flex-col items-center relative">
            {/* Circular Timer */}
            <div className="relative w-12 h-12 mb-2">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className={isDarkMode ? "text-white/10" : "text-black/10"}
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset={`${2 * Math.PI * 20 * (1 - timeProgress / 100)}`}
                  className={`transition-all duration-1000 ${
                    timeLeft <= 5 ? "text-rose-300" : "text-teal-300"
                  }`}
                  style={{ filter: "drop-shadow(0 0 3px currentColor)" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Clock
                  className={`w-5 h-5 ${
                    timeLeft <= 5 ? "text-rose-300" : "text-teal-300"
                  }`}
                />
              </div>
            </div>
            <p
              className={`text-2xl font-black mb-1 ${
                timeLeft <= 5
                  ? "text-rose-300"
                  : "text-teal-300"
              }`}
            >
              {timeLeft}s
            </p>
            <p
              className={`text-xs font-semibold ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Thời gian
            </p>
          </div>
        </div>

        {/* Progress Card */}
        <div
          className={`group p-2.5 rounded-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-md hover:shadow-lg border ${
            isDarkMode
              ? "bg-gradient-to-br from-purple-500/15 to-violet-600/15 border-purple-400/25 hover:border-purple-400/40"
              : "bg-gradient-to-br from-purple-200/30 to-violet-300/30 border-purple-300/40 hover:border-purple-400/50"
          }`}
        >
          <div className="flex flex-col items-center">
            <div
              className={`p-1.5 rounded-lg mb-1 transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 ${
                isDarkMode ? "bg-purple-400/15" : "bg-purple-200/30"
              }`}
            >
              <Target className="w-5 h-5 text-purple-300 drop-shadow-sm" />
            </div>
            <p className={`text-xl font-black mb-0.5 text-purple-300`}>
              {currentQuestionIndex + 1}/{questions.length}
            </p>
            <p
              className={`text-[10px] font-semibold ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Câu hỏi
            </p>
          </div>
        </div>
      </div>

      {/* Animated Progress Bar - Modern Glassmorphism */}
      <div
        className={`h-3 mb-4 rounded-full overflow-hidden relative backdrop-blur-xl shadow-inner border ${
          isDarkMode
            ? "bg-white/5 border-white/10"
            : "bg-black/5 border-black/10"
        }`}
      >
        <div
          className="h-full transition-all duration-700 ease-out relative rounded-full"
          style={{
            width: `${progress}%`,
            background: isDarkMode
              ? "linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #f9a8d4 100%)"
              : "linear-gradient(90deg, #93c5fd 0%, #c4b5fd 50%, #fbcfe8 100%)",
            boxShadow: isDarkMode
              ? "0 0 15px rgba(167, 139, 250, 0.3)"
              : "0 0 15px rgba(196, 181, 253, 0.3)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
      </div>

      {/* Question Card - Premium Glassmorphism */}
      <div className="relative mb-4">
        <ParticleEffect
          trigger={particleTrigger}
          type={isCorrect ? "success" : "error"}
        />

        <div
          className={`backdrop-blur-2xl p-5 rounded-2xl transition-all duration-700 relative overflow-hidden shadow-xl border ${
            showFeedback && !isCorrect ? "animate-shake" : "animate-slideDown"
          } ${
            isDarkMode
              ? "bg-white/5 border-white/10"
              : "bg-white/60 border-black/5"
          }`}
          style={{
            boxShadow: isDarkMode
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              : "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.8)",
          }}
        >
          {/* Decorative gradient top accent */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(96, 165, 250, 0.3) 0%, rgba(167, 139, 250, 0.3) 50%, rgba(249, 168, 212, 0.3) 100%)",
            }}
          />

          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-2.5 mb-3">
              <div
                className={`p-2.5 rounded-xl backdrop-blur-xl shadow-lg transition-all duration-500 animate-popIn border ${
                  isDarkMode
                    ? "bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border-indigo-400/30"
                    : "bg-gradient-to-br from-indigo-200/40 to-purple-300/40 border-indigo-300/45"
                }`}
              >
                <Zap
                  className="w-6 h-6 text-indigo-300"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(165, 180, 252, 0.4))",
                  }}
                />
              </div>
              <h2
                className={`text-3xl md:text-4xl font-black tracking-tight ${
                  isDarkMode
                    ? "text-slate-100"
                    : "text-slate-800"
                }`}
              >
                {currentQuestion.word}
              </h2>
            </div>
            <p
              className={`text-base font-medium ${
                isDarkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {currentQuestion.pronunciation}
            </p>
          </div>

          {/* Answer Options - Premium Modern Style */}
          <div className="grid grid-cols-1 gap-3 mb-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCurrentCorrect = option === currentQuestion.correct;

              let buttonClass = "";
              let iconBgClass = "";

              if (showFeedback) {
                if (isCurrentCorrect) {
                  buttonClass = isDarkMode
                    ? "bg-gradient-to-r from-emerald-500/25 to-teal-500/25 text-white border-emerald-400/40 shadow-lg shadow-emerald-500/15"
                    : "bg-gradient-to-r from-emerald-200/40 to-teal-300/40 text-slate-900 border-emerald-300/50 shadow-lg shadow-emerald-500/20";
                  iconBgClass = isDarkMode
                    ? "bg-emerald-400/25"
                    : "bg-emerald-200/40";
                } else if (isSelected && !isCorrect) {
                  buttonClass = isDarkMode
                    ? "bg-gradient-to-r from-rose-500/25 to-red-500/25 text-white border-rose-400/40 shadow-lg shadow-rose-500/15"
                    : "bg-gradient-to-r from-rose-200/40 to-red-300/40 text-slate-900 border-rose-300/50 shadow-lg shadow-rose-500/20";
                  iconBgClass = isDarkMode ? "bg-rose-400/25" : "bg-rose-200/40";
                } else {
                  buttonClass = isDarkMode
                    ? "bg-white/5 border-white/10 opacity-50 text-slate-400"
                    : "bg-black/5 border-black/10 opacity-50 text-slate-500";
                  iconBgClass = isDarkMode ? "bg-white/5" : "bg-black/5";
                }
              } else {
                buttonClass = isDarkMode
                  ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-300/30 hover:-translate-y-1 hover:shadow-lg text-white"
                  : "bg-white/50 border-white/60 hover:bg-white/70 hover:border-blue-300/40 hover:-translate-y-1 hover:shadow-lg text-slate-900";
                iconBgClass = isDarkMode ? "bg-white/10" : "bg-white/50";
              }

              return (
                <button
                  key={`${currentQuestion.id}-${index}`}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                  className={`group p-4 text-left font-semibold text-base transition-all duration-300 relative backdrop-blur-xl rounded-xl border shadow-md ${buttonClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-9 h-9 flex items-center justify-center font-black text-sm rounded-lg transition-all duration-300 ${iconBgClass} ${
                        showFeedback ? "" : "group-hover:scale-110"
                      } ${isDarkMode ? "text-white" : "text-slate-900"}`}
                      style={{
                        boxShadow:
                          showFeedback && isCurrentCorrect
                            ? "0 0 15px rgba(52, 211, 153, 0.25)"
                            : showFeedback && isSelected && !isCorrect
                              ? "0 0 15px rgba(244, 63, 94, 0.25)"
                              : "none",
                      }}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showFeedback && isCurrentCorrect && (
                      <span className="text-xl animate-popIn bg-emerald-300/20 rounded-full w-7 h-7 flex items-center justify-center text-emerald-300">
                        ✓
                      </span>
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <span className="text-xl animate-popIn bg-rose-300/20 rounded-full w-7 h-7 flex items-center justify-center text-rose-300">
                        ✗
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback Message - Premium Style */}
          {showFeedback && (
            <div
              className={`backdrop-blur-xl p-4 rounded-xl text-center font-bold text-base animate-popIn shadow-lg border ${
                isCorrect
                  ? isDarkMode
                    ? "bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border-emerald-400/35 text-white"
                    : "bg-gradient-to-r from-emerald-200/40 to-teal-300/40 border-emerald-300/45 text-slate-900"
                  : isDarkMode
                    ? "bg-gradient-to-r from-slate-600/30 to-slate-700/30 border-slate-500/40 text-white"
                    : "bg-gradient-to-r from-slate-400/40 to-slate-500/40 border-slate-500/50 text-slate-900"
              }`}
              style={{
                boxShadow: isCorrect
                  ? "0 10px 25px -5px rgba(52, 211, 153, 0.2)"
                  : "0 10px 20px -5px rgba(71, 85, 105, 0.15)",
              }}
            >
              {isCorrect ? (
                <div className="flex items-center justify-center gap-3">
                  <div
                    className={`p-2 rounded-lg backdrop-blur-xl shadow-lg animate-tada border ${
                      isDarkMode
                        ? "bg-emerald-500/25 border-emerald-400/30"
                        : "bg-emerald-200/40 border-emerald-300/40"
                    }`}
                  >
                    <Trophy
                      className="w-5 h-5 text-emerald-300"
                      style={{
                        filter: "drop-shadow(0 0 4px rgba(52, 211, 153, 0.4))",
                      }}
                    />
                  </div>
                  <span
                    className={`text-lg ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Chính xác! 🎉
                  </span>
                  {combo >= 3 && (
                    <div
                      className={`flex items-center gap-1.5 ml-2 px-3 py-1.5 rounded-lg backdrop-blur-xl shadow-lg border ${
                        isDarkMode
                          ? "bg-amber-500/25 border-amber-400/35"
                          : "bg-amber-200/40 border-amber-300/45"
                      }`}
                    >
                      <Flame
                        className="w-4 h-4 text-amber-300 animate-wiggle"
                        style={{
                          filter:
                            "drop-shadow(0 0 4px rgba(251, 191, 36, 0.4))",
                        }}
                      />
                      <span
                        className={`font-black text-sm ${
                          isDarkMode ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {combo}x Combo
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div
                      className={`p-2 rounded-lg backdrop-blur-xl shadow-lg border ${
                        isDarkMode
                          ? "bg-white/10 border-white/20"
                          : "bg-white/40 border-white/60"
                      }`}
                    >
                      <Target
                        className={`w-5 h-5 ${
                          isDarkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-lg ${
                        isDarkMode ? "text-slate-200" : "text-slate-700"
                      }`}
                    >
                      Chưa chính xác
                    </span>
                  </div>
                  <div
                    className={`backdrop-blur-xl p-3 rounded-lg shadow-inner border ${
                      isDarkMode
                        ? "bg-black/20 border-white/10"
                        : "bg-white/30 border-white/40"
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold mb-1.5 ${
                        isDarkMode ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      Đáp án đúng:
                    </p>
                    <p
                      className={`text-base font-black ${
                        isDarkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {currentQuestion.correct}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mega Combo Streak Indicator - Premium Style */}
      {combo >= 5 && !showFeedback && (
        <div className="text-center mb-5 animate-slideDown">
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 backdrop-blur-2xl rounded-xl shadow-xl border ${
              isDarkMode
                ? "bg-gradient-to-r from-amber-500/25 to-orange-600/25 border-amber-400/35"
                : "bg-gradient-to-r from-amber-200/40 to-orange-300/40 border-amber-300/45"
            }`}
            style={{
              boxShadow:
                "0 15px 35px -8px rgba(251, 191, 36, 0.3), 0 0 0 1px rgba(251, 191, 36, 0.15)",
            }}
          >
            <div
              className={`p-2 rounded-lg backdrop-blur-xl shadow-lg border ${
                isDarkMode
                  ? "bg-amber-500/25 border-amber-400/30"
                  : "bg-amber-200/40 border-amber-300/40"
              }`}
            >
              <Flame
                className="w-6 h-6 text-amber-300 animate-wiggle"
                style={{
                  filter: "drop-shadow(0 0 6px rgba(251, 191, 36, 0.5))",
                }}
              />
            </div>
            <div className="flex flex-col items-start">
              <p
                className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                  isDarkMode ? "text-amber-200" : "text-amber-600"
                }`}
              >
                🔥 Streak Bonus
              </p>
              <p
                className={`text-2xl font-black ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
                style={{
                  textShadow: isDarkMode
                    ? "0 2px 10px rgba(251, 191, 36, 0.3)"
                    : "none",
                }}
              >
                {combo}x Combo!
              </p>
            </div>
            <Sparkles
              className="w-5 h-5 text-amber-300 animate-pulse"
              style={{ filter: "drop-shadow(0 0 4px rgba(251, 191, 36, 0.4))" }}
            />
            />
          </div>
        </div>
      )}
    </div>
  );
}
