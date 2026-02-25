import React from "react";
import {
  Trophy,
  Flame,
  Target,
  Star,
  RefreshCw,
  Home,
  Award,
  Zap,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Confetti from "./Confetti";

export default function GameSummary({
  score,
  correctAnswers,
  totalQuestions,
  maxCombo,
  isDarkMode,
  onRestart,
  onClose,
  onToggleTheme,
}) {
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);

  // Determine performance level
  let performance = {
    title: "Cần cố gắng thêm",
    icon: Target,
    color: "from-slate-400 to-slate-600",
    bgGradient: isDarkMode
      ? "from-slate-700/30 to-slate-800/30"
      : "from-slate-100 to-slate-200",
    message: "Đừng nản lòng! Mỗi lần thử là một bước tiến.",
    rank: "Novice",
  };

  if (accuracy >= 90) {
    performance = {
      title: "XUẤT SẮC",
      icon: Trophy,
      color: "from-amber-500 via-amber-600 to-orange-600",
      bgGradient: isDarkMode
        ? "from-amber-600/30 to-orange-600/30"
        : "from-amber-100 to-orange-100",
      message: "Kỹ năng của bạn thực sự ấn tượng!",
      rank: "Master",
    };
  } else if (accuracy >= 70) {
    performance = {
      title: "Rất tốt",
      icon: Star,
      color: "from-blue-400 via-cyan-400 to-teal-500",
      bgGradient: isDarkMode
        ? "from-blue-600/30 to-cyan-600/30"
        : "from-blue-100 to-cyan-100",
      message: "Bạn đang tiến bộ rõ rệt. Tiếp tục phát huy!",
      rank: "Expert",
    };
  } else if (accuracy >= 50) {
    performance = {
      title: "Khá tốt",
      icon: Zap,
      color: "from-emerald-400 via-emerald-500 to-teal-500",
      bgGradient: isDarkMode
        ? "from-emerald-600/30 to-teal-600/30"
        : "from-emerald-100 to-teal-100",
      message: "Bạn đang đi đúng hướng. Cố gắng thêm nhé!",
      rank: "Advanced",
    };
  }

  // Fun facts based on performance
  const getMotivationalMessage = () => {
    if (maxCombo >= 10)
      return {
        icon: Flame,
        text: "Combo Master! Khả năng tập trung xuất sắc.",
      };
    if (maxCombo >= 5)
      return { icon: Zap, text: "Streak nhất quán! Bạn đang làm rất tốt." };
    if (accuracy === 100)
      return { icon: Trophy, text: "Hoàn hảo! Thành tích đáng ngưỡng mộ." };
    if (correctAnswers >= 8)
      return { icon: Target, text: "Độ chính xác cao! Kỹ năng vững vàng." };
    return {
      icon: Award,
      text: "Tiếp tục phát huy! Bạn đang trên đà tiến bộ.",
    };
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 relative">
      {/* Confetti for high scores */}
      <Confetti isActive={accuracy >= 80} />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-to-r ${performance.color} animate-float`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 bg-gradient-to-l ${performance.color} animate-float`}
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Theme Toggle */}
      <div className="flex justify-end mb-6 relative z-10">
        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
      </div>

      {/* Main Result Card - Minecraft Style */}
      <div
        className={`minecraft-shadow-lg p-8 text-center relative overflow-hidden border-4 animate-slideDown ${
          isDarkMode
            ? `bg-slate-800 border-slate-900`
            : `bg-white border-gray-200`
        }`}
      >
        {/* Rank Badge */}
        <div className="absolute top-4 right-4">
          <div
            className={`minecraft-shadow px-4 py-1 border-3 bg-gradient-to-r ${performance.bgGradient} ${
              isDarkMode ? "border-white/20" : "border-gray-300/50"
            }`}
          >
            <p
              className={`text-xs font-black bg-gradient-to-r ${performance.color} bg-clip-text text-transparent`}
            >
              {performance.rank}
            </p>
          </div>
        </div>

        {/* Trophy Animation - Minecraft Style */}
        <div className="mb-6 relative">
          <div className="relative inline-block animate-float">
            {/* Glow effect */}
            <div
              className={`absolute inset-0 blur-2xl opacity-40 bg-gradient-to-r ${performance.color}`}
            />

            {/* Trophy */}
            <div className="relative minecraft-shadow-lg p-5 bg-white/5 border-4 border-white/10">
              {React.createElement(performance.icon, {
                className: `w-20 h-20 mx-auto drop-shadow-2xl bg-gradient-to-br ${performance.color} bg-clip-text text-transparent`,
                style: { filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))" },
              })}
            </div>

            {/* Sparkles */}
            <Star
              className="absolute -top-3 -right-3 w-6 h-6 text-amber-400 animate-spin3d"
              style={{ animationDuration: "3s" }}
            />
            <Zap
              className="absolute -bottom-3 -left-3 w-6 h-6 text-blue-400 animate-spin3d"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            />
          </div>
        </div>

        {/* Performance Title */}
        <h1
          className={`text-4xl font-black mb-2 bg-gradient-to-r ${performance.color} bg-clip-text text-transparent animate-popIn`}
        >
          {performance.title}
        </h1>
        <p
          className={`text-lg mb-8 font-medium ${isDarkMode ? "text-slate-300" : "text-gray-600"}`}
        >
          {performance.message}
        </p>

        {/* Stats Grid - Minecraft Blocky Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {/* Score */}
          <div
            className={`minecraft-shadow-lg group p-5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-4 ${
              isDarkMode
                ? "bg-gradient-to-br from-amber-600 to-amber-700 border-amber-800"
                : "bg-gradient-to-br from-amber-400 to-amber-500 border-amber-600"
            }`}
          >
            <div>
              <Star className="w-8 h-8 mx-auto mb-2 text-amber-100 drop-shadow-lg group-hover:animate-spin3d" />
              <p
                className={`text-3xl font-black mb-1 animate-countUp text-white`}
              >
                {score}
              </p>
              <p className="text-sm font-bold text-white/90">Tổng điểm</p>
            </div>
          </div>

          {/* Accuracy */}
          <div
            className={`minecraft-shadow-lg group p-5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-4 ${
              isDarkMode
                ? "bg-gradient-to-br from-blue-600 to-blue-700 border-blue-800"
                : "bg-gradient-to-br from-blue-500 to-blue-600 border-blue-700"
            }`}
          >
            <div>
              <Target className="w-8 h-8 mx-auto mb-2 text-blue-100 drop-shadow-lg group-hover:animate-spin3d" />
              <p
                className={`text-3xl font-black mb-1 animate-countUp text-white`}
              >
                {accuracy}%
              </p>
              <p className="text-sm font-bold text-white/90">Độ chính xác</p>
            </div>
          </div>

          {/* Correct Answers */}
          <div
            className={`minecraft-shadow-lg group p-5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-4 ${
              isDarkMode
                ? "bg-gradient-to-br from-emerald-600 to-emerald-700 border-emerald-800"
                : "bg-gradient-to-br from-emerald-500 to-emerald-600 border-emerald-700"
            }`}
          >
            <div>
              <Trophy className="w-8 h-8 mx-auto mb-2 text-emerald-100 drop-shadow-lg group-hover:animate-tada" />
              <p
                className={`text-2xl font-black mb-1 animate-countUp text-white`}
              >
                {correctAnswers}/{totalQuestions}
              </p>
              <p className="text-sm font-bold text-white/90">Đúng/Tổng</p>
            </div>
          </div>

          {/* Max Combo */}
          <div
            className={`minecraft-shadow-lg group p-5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-4 relative overflow-hidden ${
              maxCombo >= 5
                ? isDarkMode
                  ? "bg-gradient-to-br from-rose-600 to-rose-700 border-rose-800"
                  : "bg-gradient-to-br from-rose-500 to-rose-600 border-rose-700"
                : isDarkMode
                  ? "bg-gradient-to-br from-rose-600 to-rose-700 border-rose-800"
                  : "bg-gradient-to-br from-rose-500 to-rose-600 border-rose-700"
            }`}
          >
            <div>
              <Flame
                className={`w-8 h-8 mx-auto mb-2 drop-shadow-lg ${
                  maxCombo >= 5
                    ? "text-amber-200 animate-wiggle"
                    : "text-rose-100 group-hover:animate-wiggle"
                }`}
              />
              <p
                className={`text-5xl font-black mb-2 animate-countUp text-white`}
              >
                {maxCombo}x
              </p>
              <p className="text-sm font-bold text-white/90">Combo cao nhất</p>
            </div>
            {maxCombo >= 5 && (
              <Zap className="absolute top-2 right-2 w-5 h-5 text-amber-200 animate-pulse" />
            )}
          </div>
        </div>

        {/* Motivational Badge - Minecraft Style */}
        <div
          className={`minecraft-shadow p-5 mb-8 border-4 animate-slideUp ${
            isDarkMode
              ? `bg-gradient-to-r ${performance.bgGradient} border-indigo-700`
              : `bg-gradient-to-r ${performance.bgGradient} border-indigo-400`
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            {React.createElement(getMotivationalMessage().icon, {
              className: `w-6 h-6 bg-gradient-to-r ${performance.color} bg-clip-text text-transparent`,
            })}
            <p className="text-lg font-black">
              {getMotivationalMessage().text}
            </p>
          </div>
        </div>

        {/* Action Buttons - Minecraft Style */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className={`minecraft-shadow-lg group flex items-center justify-center gap-3 px-8 py-4 font-black text-lg transition-all duration-300 hover:translate-y-[-2px] active:minecraft-inset border-4 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-blue-700"
                : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white border-blue-600"
            }`}
          >
            <RefreshCw className="w-6 h-6 group-hover:animate-spin3d" />
            Chơi lại
          </button>

          <button
            onClick={onClose}
            className={`minecraft-shadow-lg group flex items-center justify-center gap-3 px-8 py-4 font-black text-lg transition-all duration-300 hover:translate-y-[-2px] active:minecraft-inset border-4 ${
              isDarkMode
                ? "bg-slate-700 hover:bg-slate-600 text-white border-slate-800"
                : "bg-gray-300 hover:bg-gray-400 text-gray-800 border-gray-400"
            }`}
          >
            <Home className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Về Thư viện
          </button>
        </div>

        {/* Tips Section */}
        <div
          className={`mt-10 pt-8 border-t-2 ${
            isDarkMode ? "border-slate-700/50" : "border-gray-200/50"
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="minecraft-shadow p-2 bg-blue-500/20 border-2 border-blue-500/40">
              <Zap className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p
                className={`text-sm font-bold mb-1 ${isDarkMode ? "text-slate-300" : "text-gray-700"}`}
              >
                Mẹo học tập
              </p>
              <p
                className={`text-base font-medium ${isDarkMode ? "text-slate-400" : "text-gray-600"}`}
              >
                Luyện tập 10-15 phút mỗi ngày giúp ghi nhớ từ vựng hiệu quả và
                bền vững hơn.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Unlocked (Perfect Score) */}
      {accuracy === 100 && (
        <div className="mt-6 relative">
          <div
            className={`minecraft-shadow-lg p-8 text-center border-4 animate-bounceIn ${
              isDarkMode
                ? "bg-gradient-to-r from-amber-600/30 to-orange-600/30 border-amber-700"
                : "bg-gradient-to-r from-amber-100 to-orange-100 border-amber-500"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="minecraft-shadow p-3 bg-amber-500/30 border-3 border-amber-600">
                <Trophy className="w-10 h-10 text-amber-400 animate-spin3d" />
              </div>
              <p className="text-3xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Thành tích đặc biệt!
              </p>
              <div className="minecraft-shadow p-3 bg-amber-500/30 border-3 border-amber-600">
                <Trophy
                  className="w-10 h-10 text-amber-400 animate-spin3d"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>
            <p
              className={`text-xl font-bold mb-2 ${isDarkMode ? "text-amber-300" : "text-amber-700"}`}
            >
              Perfect Score Master
            </p>
            <p
              className={`text-base ${isDarkMode ? "text-slate-300" : "text-gray-700"}`}
            >
              Hoàn thành với 100% độ chính xác. Xuất sắc!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
