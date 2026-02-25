import { Mic, BookText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import BackButton from "./BackButton";
import TopicCard from "./TopicCard";

export default function VolumeDetailView({
  selectedVolume,
  decks,
  isDarkMode,
  onToggleTheme,
  onClose,
  onOpenDeck,
}) {
  const volumeDecks = decks
    .filter(
      (d) =>
        d.skill === selectedVolume.skill && d.volume === selectedVolume.volume,
    )
    .sort((a, b) => a.topic.localeCompare(b.topic));

  const Icon = selectedVolume.skill === "Speaking" ? Mic : BookText;
  const volumeNum = selectedVolume.volume.replace(/\D/g, "");

  return (
    <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
      {/* Header with Back Button */}
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-6 md:mb-8">
        <BackButton onClick={onClose} isDarkMode={isDarkMode} />
        <div className="flex-1 min-w-0">
          <div
            className={`flex items-center gap-1.5 text-xs sm:text-sm font-semibold mb-1 ${
              isDarkMode ? "text-pink-300" : "text-pink-600"
            }`}
          >
            <Icon size={16} className="w-4 h-4" strokeWidth={2} />
            {selectedVolume.skill}
          </div>
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl font-bold truncate ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Vol {volumeNum}
          </h1>
        </div>
        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
      </div>

      {/* Topics Grid */}
      {volumeDecks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-4 md:gap-5 lg:gap-6">
          {volumeDecks.map((deck) => (
            <TopicCard
              key={deck.id}
              deck={deck}
              isDarkMode={isDarkMode}
              onOpen={onOpenDeck}
            />
          ))}
        </div>
      ) : (
        <div
          className={`text-center py-16 sm:py-20 text-sm sm:text-base ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}
        >
          Không có chủ đề nào.
        </div>
      )}
    </div>
  );
}
