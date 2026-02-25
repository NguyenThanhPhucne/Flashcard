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
    <div className="w-full max-w-5xl mx-auto px-4 relative">
      {/* Confetti Effect */}
      <Confetti isActive={showConfetti} />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 -left-20 w-72 h-72 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          } animate-float`}
          style={{ animationDuration: "8s" }}
        />
        <div
          className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-300"
          } animate-float`}
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <button
          onClick={onClose}
          className={`p-3 rounded-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 ${
            isDarkMode
              ? "bg-white/10 hover:bg-white/20 text-white border border-white/20"
              : "bg-black/5 hover:bg-black/10 text-slate-700 border border-black/10"
          }`}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
      </div>

      {/* Game Stats - Minecraft Blocky Style */}
      <div className="grid grid-cols-4 gap-2 mb-6 relative z-10">
        {/* Score Card */}
        <div
          className={`minecraft-shadow-lg group p-2 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer border-3 ${
            isDarkMode
              ? "bg-blue-600 border-blue-700"
              : "bg-blue-400 border-blue-500"
          }`}
        >
          <div className="flex flex-col items-center">
            <Trophy className="w-5 h-5 mb-0.5 text-yellow-300 drop-shadow-lg group-hover:animate-tada" />
            <p
              className={`text-xl font-black mb-0 animate-countUp ${
                isDarkMode ? "text-yellow-300" : "text-yellow-100"
              }`}
            >
              {score}
            </p>
            <p className="text-[10px] font-bold text-white/80">Điểm</p>
          </div>
        </div>

        {/* Combo Card */}
        <div
          className={`minecraft-shadow-lg group p-2 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer relative overflow-hidden border-3 ${
            combo >= 3
              ? isDarkMode
                ? "bg-orange-600 border-orange-700 animate-fireGlow"
                : "bg-orange-500 border-orange-600 animate-fireGlow"
              : isDarkMode
                ? "bg-gray-700 border-gray-800"
                : "bg-gray-400 border-gray-500"
          }`}
        >
          <div className="flex flex-col items-center relative z-10">
            <Flame
              className={`w-5 h-5 mb-0.5 drop-shadow-lg ${
                combo >= 3 ? "text-yellow-300 animate-wiggle" : "text-gray-500"
              }`}
            />
            <p
              className={`text-xl font-black mb-0 ${
                combo >= 3
                  ? isDarkMode
                    ? "text-yellow-300"
                    : "text-yellow-100"
                  : "text-gray-500"
              }`}
            >
              {combo}x
            </p>
            <p className="text-[10px] font-bold text-white/80">Combo</p>
          </div>
          {combo >= 3 && (
            <Sparkles className="absolute top-1 right-1 w-2.5 h-2.5 text-yellow-300 animate-pulse" />
          )}
        </div>

        {/* Timer Card with Circular Progress */}
        <div
          className={`minecraft-shadow-lg group p-2 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer border-3 ${
            timeLeft <= 5
              ? isDarkMode
                ? "bg-red-600 border-red-700 animate-pulseScale"
                : "bg-red-500 border-red-600 animate-pulseScale"
              : isDarkMode
                ? "bg-emerald-600 border-emerald-700"
                : "bg-emerald-500 border-emerald-600"
          }`}
        >
          <div className="flex flex-col items-center relative">
            {/* Circular Timer */}
            <div className="relative w-10 h-10 mb-0.5">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-black/30"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 16}`}
                  strokeDashoffset={`${2 * Math.PI * 16 * (1 - timeProgress / 100)}`}
                  className={`transition-all duration-1000 ${
                    timeLeft <= 5 ? "text-yellow-300" : "text-white"
                  }`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Clock
                  className={`w-4 h-4 ${timeLeft <= 5 ? "text-yellow-300" : "text-white"}`}
                />
              </div>
            </div>
            <p
              className={`text-xl font-black mb-0 ${
                timeLeft <= 5 ? "text-yellow-300" : "text-white"
              }`}
            >
              {timeLeft}s
            </p>
            <p className="text-[10px] font-bold text-white/80">Thời gian</p>
          </div>
        </div>

        {/* Progress Card */}
        <div
          className={`minecraft-shadow-lg group p-2 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer border-3 ${
            isDarkMode
              ? "bg-purple-600 border-purple-700"
              : "bg-purple-500 border-purple-600"
          }`}
        >
          <div className="flex flex-col items-center">
            <Target className="w-5 h-5 mb-0.5 text-yellow-300 drop-shadow-lg group-hover:animate-spin3d" />
            <p
              className={`text-xl font-black mb-0 ${
                isDarkMode ? "text-yellow-300" : "text-yellow-100"
              }`}
            >
              {currentQuestionIndex + 1}/{questions.length}
            </p>
            <p className="text-[10px] font-bold text-white/80">Câu hỏi</p>
          </div>
        </div>
      </div>

      {/* Animated Progress Bar - Minecraft Style */}
      <div
        className={`h-3 mb-6 overflow-hidden relative border-3 minecraft-shadow ${
          isDarkMode
            ? "bg-gray-800 border-gray-900"
            : "bg-gray-200 border-gray-300"
        }`}
      >
        <div
          className={`h-full transition-all duration-500 relative minecraft-highlight ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question Card - Minecraft Blocky Style */}
      <div className="relative mb-6">
        <ParticleEffect
          trigger={particleTrigger}
          type={isCorrect ? "success" : "error"}
        />

        <div
          className={`minecraft-shadow-lg p-6 transition-all duration-500 relative overflow-hidden border-4 ${
            showFeedback && !isCorrect ? "animate-shake" : "animate-slideDown"
          } ${
            isDarkMode
              ? "bg-slate-800 border-slate-900"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Decorative gradient top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="minecraft-shadow p-2 bg-gradient-to-br from-yellow-400 to-orange-500 animate-popIn border-3 border-yellow-600">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2
                className={`text-3xl font-black tracking-tight ${
                  isDarkMode
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                }`}
              >
                {currentQuestion.word}
              </h2>
            </div>
            <p
              className={`text-base font-medium ${
                isDarkMode ? "text-slate-400" : "text-gray-600"
              }`}
            >
              {currentQuestion.pronunciation}
            </p>
          </div>

          {/* Answer Options - Minecraft Blocky Style */}
          <div className="grid grid-cols-1 gap-3 mb-4">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCurrentCorrect = option === currentQuestion.correct;

              let buttonClass = "";

              if (showFeedback) {
                if (isCurrentCorrect) {
                  buttonClass = isDarkMode
                    ? "minecraft-shadow-lg bg-emerald-600 text-white border-4 border-emerald-700"
                    : "minecraft-shadow-lg bg-emerald-500 text-white border-4 border-emerald-600";
                } else if (isSelected && !isCorrect) {
                  buttonClass = isDarkMode
                    ? "minecraft-shadow-lg bg-red-600 text-white border-4 border-red-700"
                    : "minecraft-shadow-lg bg-red-500 text-white border-4 border-red-600";
                } else {
                  buttonClass = isDarkMode
                    ? "minecraft-inset bg-gray-800 border-4 border-gray-900 opacity-40"
                    : "minecraft-inset bg-gray-300 border-4 border-gray-400 opacity-40";
                }
              } else {
                buttonClass = isDarkMode
                  ? "minecraft-shadow bg-slate-700 border-4 border-slate-800 hover:bg-slate-600 hover:border-blue-500 hover:translate-y-[-2px]"
                  : "minecraft-shadow bg-white border-4 border-gray-300 hover:bg-blue-50 hover:border-blue-400 hover:translate-y-[-2px]";
              }

              return (
                <button
                  key={`${currentQuestion.id}-${index}`}
                  onClick={() => handleAnswer(option)}
                  disabled={showFeedback}
                  className={`p-4 text-left font-bold text-base transition-all duration-200 relative group ${buttonClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 flex items-center justify-center font-black text-base border-2 minecraft-shadow ${
                        showFeedback && isCurrentCorrect
                          ? "bg-white/30 border-white/50"
                          : showFeedback && isSelected && !isCorrect
                            ? "bg-white/30 border-white/50"
                            : isDarkMode
                              ? "bg-slate-600 border-slate-700"
                              : "bg-gray-200 border-gray-300"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showFeedback && isCurrentCorrect && (
                      <span className="text-xl animate-popIn">✓</span>
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <span className="text-xl animate-popIn">✗</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback Message - Minecraft Style */}
          {showFeedback && (
            <div
              className={`minecraft-shadow-lg p-4 text-center font-bold text-lg animate-popIn border-4 ${
                isCorrect
                  ? isDarkMode
                    ? "bg-emerald-600 border-emerald-700 text-white"
                    : "bg-emerald-500 border-emerald-600 text-white"
                  : isDarkMode
                    ? "bg-red-600 border-red-700 text-white"
                    : "bg-red-500 border-red-600 text-white"
              }`}
            >
              {isCorrect ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl animate-tada">🎉</span>
                  <span>Chính xác!</span>
                  {combo >= 3 && (
                    <>
                      <Flame className="w-6 h-6 text-yellow-300 animate-wiggle" />
                      <span className="text-yellow-300 font-black">
                        x{combo} COMBO!
                      </span>
                    </>
                  )}
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl">😔</span>
                    <span>Sai rồi!</span>
                  </div>
                  <p className="text-base font-medium opacity-90">
                    Đáp án đúng:{" "}
                    <span className="font-black">
                      {currentQuestion.correct}
                    </span>
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mega Combo Streak Indicator */}
      {combo >= 5 && !showFeedback && (
        <div className="text-center mb-6 animate-tada">
          <div
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-xl border-2 ${
              isDarkMode
                ? "bg-gradient-to-r from-orange-600/40 to-red-600/40 border-orange-400/60 shadow-2xl shadow-orange-500/50"
                : "bg-gradient-to-r from-orange-200 to-red-200 border-orange-400 shadow-2xl shadow-orange-400/60"
            }`}
          >
            <Flame className="w-10 h-10 text-orange-500 animate-wiggle" />
            <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
              FIRE STREAK! x{combo}
            </p>
            <Flame className="w-10 h-10 text-orange-500 animate-wiggle" />
          </div>
        </div>
      )}
    </div>
  );
}
