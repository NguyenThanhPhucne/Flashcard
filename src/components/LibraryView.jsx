import { Library, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import VolumeCard from "./VolumeCard";

export default function LibraryView({
  decks,
  isDarkMode,
  onToggleTheme,
  onOpenVolume,
}) {
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
    <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
      {/* Header - Enhanced */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 md:mb-14 lg:mb-16 gap-4 sm:gap-5 md:gap-6">
        <div className="space-y-3 sm:space-y-4">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold flex items-center gap-3 sm:gap-4 md:gap-5 ${isDarkMode ? "text-white" : "text-slate-900"}`}
          >
            <div
              className={`p-3 sm:p-3.5 md:p-4 lg:p-5 rounded-2xl sm:rounded-2xl shadow-lg ${isDarkMode ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 shadow-blue-500/20" : "bg-gradient-to-br from-blue-200 to-purple-200 shadow-blue-300/50"}`}
            >
              <Library
                className={`w-8 sm:w-9 md:w-11 lg:w-12 h-8 sm:h-9 md:h-11 lg:h-12 ${isDarkMode ? "text-blue-300" : "text-blue-600"}`}
                strokeWidth={2.5}
              />
            </div>
            <span
              className={`bg-gradient-to-r ${isDarkMode ? "from-blue-300 to-purple-300" : "from-blue-600 to-purple-600"} bg-clip-text text-transparent`}
            >
              Thư viện IELTS
            </span>
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl flex items-center gap-2 sm:gap-2.5 ml-1 font-medium ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            <Sparkles
              size={20}
              className={`w-5 sm:w-6 md:w-6 ${isDarkMode ? "text-purple-300" : "text-purple-500"}`}
              strokeWidth={2.5}
            />
            Chọn sách để xem chủ đề
          </p>
        </div>

        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
      </div>

      {/* Volume Cards - Books Enhanced */}
      {volumeList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-6 md:gap-7 lg:gap-8">
          {volumeList.map((vol) => (
            <VolumeCard
              key={`${vol.skill}-${vol.volume}`}
              volume={vol}
              isDarkMode={isDarkMode}
              onOpen={onOpenVolume}
            />
          ))}
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
}
