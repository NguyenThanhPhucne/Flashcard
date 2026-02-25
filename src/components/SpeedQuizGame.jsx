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
              ? "bg-gradient-to-br from-indigo-600 to-indigo-700 border-indigo-800"
              : "bg-gradient-to-br from-indigo-400 to-indigo-500 border-indigo-600"
          }`}
        >
          <div className="flex flex-col items-center">
            <Trophy className="w-5 h-5 mb-0.5 text-amber-200 drop-shadow-lg group-hover:animate-tada" />
            <p className="text-xl font-black mb-0 animate-countUp text-white">
              {score}
            </p>
            <p className="text-[10px] font-bold text-white/90">Điểm</p>
          </div>
        </div>

        {/* Combo Card */}
        <div
          className={`minecraft-shadow-lg group p-2 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer relative overflow-hidden border-3 ${
            combo >= 3
              ? isDarkMode
                ? "bg-gradient-to-br from-rose-600 to-rose-700 border-rose-800"
                : "bg-gradient-to-br from-rose-400 to-rose-500 border-rose-600"
              : isDarkMode
                ? "bg-gradient-to-br from-slate-600 to-slate-700 border-slate-800"
                : "bg-gradient-to-br from-slate-400 to-slate-500 border-slate-600"
          }`}
        >
          <div className="flex flex-col items-center relative z-10">
            <Flame
              className={`w-5 h-5 mb-0.5 drop-shadow-lg transition-all ${
                combo >= 3 ? "text-amber-200 animate-wiggle" : "text-slate-300"
              }`}
            />
            <p
              className={`text-xl font-black mb-0 ${
                combo >= 3 ? "text-white" : "text-slate-300"
              }`}
            >
              {combo}x
            </p>
            <p className="text-[10px] font-bold text-white/90">Combo</p>
          </div>
          {combo >= 3 && (
            <Sparkles className="absolute top-1 right-1 w-2.5 h-2.5 text-amber-200 animate-pulse" />
          )}
        </div>

        {/* Timer Card with Circular Progress */}
        <div
          className={`minecraft-shadow-lg group p-2 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer border-3 ${
            timeLeft <= 5
              ? isDarkMode
                ? "bg-gradient-to-br from-amber-600 to-amber-700 border-amber-800 animate-pulseScale"
                : "bg-gradient-to-br from-amber-400 to-amber-500 border-amber-600 animate-pulseScale"
              : isDarkMode
                ? "bg-gradient-to-br from-emerald-600 to-emerald-700 border-emerald-800"
                : "bg-gradient-to-br from-emerald-400 to-emerald-500 border-emerald-600"
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
                    timeLeft <= 5 ? "text-amber-100" : "text-white"
                  }`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Clock
                  className={`w-4 h-4 ${timeLeft <= 5 ? "text-amber-100" : "text-white"}`}
                />
              </div>
            </div>
            <p className="text-xl font-black mb-0 text-white">{timeLeft}s</p>
            <p className="text-[10px] font-bold text-white/90">Thời gian</p>
          </div>
        </div>

        {/* Progress Card */}
        <div
          className={`minecraft-shadow-lg group p-2 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer border-3 ${
            isDarkMode
              ? "bg-gradient-to-br from-violet-600 to-violet-700 border-violet-800"
              : "bg-gradient-to-br from-violet-400 to-violet-500 border-violet-600"
          }`}
        >
          <div className="flex flex-col items-center">
            <Target className="w-5 h-5 mb-0.5 text-violet-100 drop-shadow-lg group-hover:animate-spin3d" />
            <p className={`text-xl font-black mb-0 text-white`}>
              {currentQuestionIndex + 1}/{questions.length}
            </p>
            <p className="text-[10px] font-bold text-white/90">Câu hỏi</p>
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
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 border-emerald-700 text-white"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500 border-emerald-600 text-white"
                  : isDarkMode
                    ? "bg-gradient-to-r from-slate-600 to-slate-700 border-slate-800 text-white"
                    : "bg-gradient-to-r from-slate-400 to-slate-500 border-slate-600 text-white"
              }`}
            >
              {isCorrect ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="minecraft-shadow p-1.5 bg-white/20 border-2 border-white/30 animate-tada">
                    <Trophy className="w-5 h-5 text-emerald-100" />
                  </div>
                  <span className="text-emerald-50">Chính xác!</span>
                  {combo >= 3 && (
                    <div className="flex items-center gap-1.5 ml-2 minecraft-shadow px-2.5 py-1 bg-rose-500/80 border-2 border-rose-600">
                      <Flame className="w-4 h-4 text-amber-200 animate-wiggle" />
                      <span className="text-white font-black text-sm">
                        {combo}x Combo
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-center gap-3 mb-2.5">
                    <div className="minecraft-shadow p-1.5 bg-white/10 border-2 border-white/20">
                      <Target className="w-5 h-5 text-slate-200" />
                    </div>
                    <span className="text-slate-100">Chưa chính xác</span>
                  </div>
                  <div className="minecraft-shadow p-2.5 bg-black/20 border-2 border-white/10">
                    <p className="text-sm font-semibold text-white/70 mb-1">
                      Đáp án đúng:
                    </p>
                    <p className="text-base font-black text-white">
                      {currentQuestion.correct}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mega Combo Streak Indicator */}
      {combo >= 5 && !showFeedback && (
        <div className="text-center mb-6 animate-slideDown">
          <div
            className={`minecraft-shadow-lg inline-flex items-center gap-4 px-8 py-3.5 backdrop-blur-sm border-4 ${
              isDarkMode
                ? "bg-gradient-to-r from-rose-600/90 to-pink-600/90 border-rose-700"
                : "bg-gradient-to-r from-rose-400/90 to-pink-400/90 border-rose-500"
            }`}
          >
            <div className="minecraft-shadow p-2 bg-white/20 border-2 border-white/30">
              <Flame className="w-6 h-6 text-amber-200 animate-wiggle" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-bold text-white/80 uppercase tracking-wider">
                Streak Bonus
              </p>
              <p className="text-2xl font-black text-white">{combo}x Combo</p>
            </div>
            <Sparkles className="w-5 h-5 text-amber-200 animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
}
