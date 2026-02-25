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
    title: "Cần cố gắng hơn!",
    emoji: "😅",
    color: "from-gray-400 to-gray-600",
    bgGradient: isDarkMode
      ? "from-gray-700/30 to-gray-800/30"
      : "from-gray-100 to-gray-200",
    message: "Đừng bỏ cuộc! Thử lại lần nữa nhé!",
    rank: "Novice",
  };

  if (accuracy >= 90) {
    performance = {
      title: "XUẤT SẮC!",
      emoji: "🏆",
      color: "from-yellow-400 via-orange-400 to-red-500",
      bgGradient: isDarkMode
        ? "from-yellow-600/30 to-orange-600/30"
        : "from-yellow-100 to-orange-100",
      message: "Bạn đã làm chủ chủ đề này! Thật tuyệt vời!",
      rank: "Master",
    };
  } else if (accuracy >= 70) {
    performance = {
      title: "Rất tốt!",
      emoji: "🌟",
      color: "from-blue-400 via-cyan-400 to-teal-500",
      bgGradient: isDarkMode
        ? "from-blue-600/30 to-cyan-600/30"
        : "from-blue-100 to-cyan-100",
      message: "Bạn đang tiến bộ đấy! Tiếp tục phấn đấu!",
      rank: "Expert",
    };
  } else if (accuracy >= 50) {
    performance = {
      title: "Tốt lắm!",
      emoji: "👍",
      color: "from-green-400 via-emerald-400 to-teal-500",
      bgGradient: isDarkMode
        ? "from-green-600/30 to-emerald-600/30"
        : "from-green-100 to-emerald-100",
      message: "Bạn đang trên đúng hướng! Cố lên!",
      rank: "Advanced",
    };
  }

  // Fun facts based on performance
  const getMotivationalMessage = () => {
    if (maxCombo >= 10) return "🔥 Combo Master! Bạn thật tập trung!";
    if (maxCombo >= 5) return "⚡ Streaking! Bạn đang làm rất tốt!";
    if (accuracy === 100) return "💯 Perfect! Không có gì cản được bạn!";
    if (correctAnswers >= 8)
      return "🎯 Sharpshooter! Độ chính xác đáng kinh ngạc!";
    return "💪 Keep going! Bạn sẽ làm được!";
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
              className={`absolute inset-0 blur-2xl opacity-60 bg-gradient-to-r ${performance.color}`}
            />

            {/* Trophy */}
            <div className="relative">
              <Trophy
                className={`w-24 h-24 mx-auto drop-shadow-2xl animate-tada bg-gradient-to-br ${performance.color} bg-clip-text text-transparent`}
                style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))" }}
              />
            </div>

            {/* Sparkles */}
            <Star
              className="absolute -top-3 -right-3 w-6 h-6 text-yellow-400 animate-spin3d"
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
          {performance.emoji} {performance.title}
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
                ? "bg-yellow-600 border-yellow-700"
                : "bg-yellow-400 border-yellow-500"
            }`}
          >
            <div>
              <Star className="w-8 h-8 mx-auto mb-2 text-yellow-200 drop-shadow-lg group-hover:animate-spin3d" />
              <p
                className={`text-3xl font-black mb-1 animate-countUp ${
                  isDarkMode ? "text-yellow-200" : "text-yellow-50"
                }`}
              >
                {score}
              </p>
              <p className="text-sm font-bold text-white/80">Tổng điểm</p>
            </div>
          </div>

          {/* Accuracy */}
          <div
            className={`minecraft-shadow-lg group p-5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-4 ${
              isDarkMode
                ? "bg-blue-600 border-blue-700"
                : "bg-blue-500 border-blue-600"
            }`}
          >
            <div>
              <Target className="w-8 h-8 mx-auto mb-2 text-blue-200 drop-shadow-lg group-hover:animate-spin3d" />
              <p
                className={`text-3xl font-black mb-1 animate-countUp ${
                  isDarkMode ? "text-blue-200" : "text-blue-50"
                }`}
              >
                {accuracy}%
              </p>
              <p className="text-sm font-bold text-white/80">Độ chính xác</p>
            </div>
          </div>

          {/* Correct Answers */}
          <div
            className={`minecraft-shadow-lg group p-5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-4 ${
              isDarkMode
                ? "bg-emerald-600 border-emerald-700"
                : "bg-emerald-500 border-emerald-600"
            }`}
          >
            <div>
              <Trophy className="w-8 h-8 mx-auto mb-2 text-emerald-200 drop-shadow-lg group-hover:animate-tada" />
              <p
                className={`text-2xl font-black mb-1 animate-countUp ${
                  isDarkMode ? "text-emerald-200" : "text-emerald-50"
                }`}
              >
                {correctAnswers}/{totalQuestions}
              </p>
              <p className="text-sm font-bold text-white/80">Đúng/Tổng</p>
            </div>
          </div>

          {/* Max Combo */}
          <div
            className={`minecraft-shadow-lg group p-5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border-4 relative overflow-hidden ${
              maxCombo >= 5
                ? isDarkMode
                  ? "bg-orange-600 border-orange-700 animate-glow"
                  : "bg-orange-500 border-orange-600 animate-glow"
                : isDarkMode
                  ? "bg-orange-600 border-orange-700"
                  : "bg-orange-500 border-orange-600"
            }`}
          >
            <div>
              <Flame
                className={`w-8 h-8 mx-auto mb-2 drop-shadow-lg ${
                  maxCombo >= 5
                    ? "text-yellow-300 animate-wiggle"
                    : "text-orange-200 group-hover:animate-wiggle"
                }`}
              />
              <p
                className={`text-5xl font-black mb-2 animate-countUp ${
                  isDarkMode ? "text-yellow-200" : "text-yellow-50"
                }`}
              >
                {maxCombo}x
              </p>
              <p className="text-sm font-bold text-white/80">Combo cao nhất</p>
            </div>
            {maxCombo >= 5 && (
              <Zap className="absolute top-2 right-2 w-5 h-5 text-yellow-300 animate-pulse" />
            )}
          </div>
        </div>

        {/* Motivational Badge - Minecraft Style */}
        <div
          className={`minecraft-shadow p-5 mb-8 border-4 animate-slideUp ${
            isDarkMode
              ? `bg-gradient-to-r ${performance.bgGradient} border-purple-700`
              : `bg-gradient-to-r ${performance.bgGradient} border-purple-400`
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            <Award
              className={`w-6 h-6 bg-gradient-to-r ${performance.color} bg-clip-text text-transparent`}
            />
            <p className="text-lg font-black">{getMotivationalMessage()}</p>
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
          <p
            className={`text-base font-medium ${isDarkMode ? "text-slate-400" : "text-gray-600"}`}
          >
            💡 <span className="font-bold">Pro Tip:</span> Chơi mỗi ngày 10-15
            phút để ghi nhớ từ vựng hiệu quả gấp 3 lần!
          </p>
        </div>
      </div>

      {/* Achievement Unlocked (Perfect Score) */}
      {accuracy === 100 && (
        <div className="mt-6 relative">
          <div
            className={`p-8 rounded-3xl backdrop-blur-xl text-center border-2 animate-bounceIn ${
              isDarkMode
                ? "bg-gradient-to-r from-yellow-600/30 to-orange-600/30 border-yellow-400/60 shadow-2xl shadow-yellow-500/50"
                : "bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-400/60 shadow-2xl shadow-yellow-400/50"
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Trophy className="w-12 h-12 text-yellow-500 animate-spin3d" />
              <p className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                🎉 Thành tích mở khóa! 🎉
              </p>
              <Trophy
                className="w-12 h-12 text-yellow-500 animate-spin3d"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
            <p
              className={`text-xl font-bold ${isDarkMode ? "text-yellow-300" : "text-yellow-700"}`}
            >
              Perfect Score Master
            </p>
            <p
              className={`text-base mt-2 ${isDarkMode ? "text-slate-300" : "text-gray-700"}`}
            >
              Hoàn thành quiz với 100% chính xác! Bạn là thiên tài!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
