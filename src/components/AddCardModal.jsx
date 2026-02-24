import { useState } from "react";
import { X, Check, Type, Languages, BookText, FileText } from "lucide-react";

export default function AddCardModal({
  isOpen,
  onClose,
  onAddCard,
  isDarkMode,
}) {
  const [formData, setFormData] = useState({
    word: "",
    pronunciation: "",
    meaning: "",
    example: "",
    exampleTranslation: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.word.trim() || !formData.meaning.trim()) return;

    onAddCard(formData);
    setFormData({
      word: "",
      pronunciation: "",
      meaning: "",
      example: "",
      exampleTranslation: "",
    });
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-200 ${isDarkMode ? "bg-black/80" : "bg-slate-900/60"}`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 border backdrop-blur-sm ${isDarkMode ? "bg-slate-800/95 border-slate-700/50 shadow-slate-950/50" : "bg-white/95 border-slate-200 shadow-slate-300/50"}`}
      >
        <div
          className={`sticky top-0 z-10 flex justify-between items-center p-5 md:p-6 border-b backdrop-blur-md ${isDarkMode ? "border-slate-700/50 bg-slate-800/98" : "border-slate-200 bg-white/98"}`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg backdrop-blur-sm border ${isDarkMode ? "bg-sky-400/20 border-sky-300/30 shadow-lg shadow-sky-400/20" : "bg-gradient-to-br from-blue-400/10 to-pink-400/8 border-blue-400/20 shadow-md"}`}
            >
              <BookText
                size={20}
                className={isDarkMode ? "text-sky-300" : "text-blue-500"}
              />
            </div>
            <h3
              className={`text-xl font-bold transition-colors ${isDarkMode ? "text-white drop-shadow" : "text-slate-900"}`}
            >
              Thêm từ vựng mới
            </h3>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-all hover:rotate-90 touch-manipulation shadow-md hover:shadow-lg ${isDarkMode ? "text-slate-400 hover:text-slate-200 hover:bg-slate-700 border border-slate-700/50 hover:border-slate-600" : "text-slate-500 hover:text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300"}`}
          >
            <X size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-5">
          <div>
            <label
              className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}
            >
              <Type size={16} />
              <span>
                Từ vựng (Tiếng Anh) <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              required
              type="text"
              value={formData.word}
              onChange={(e) => handleChange("word", e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium shadow-sm hover:shadow-md ${isDarkMode ? "bg-slate-700/70 border-slate-600 text-white placeholder-slate-400 hover:bg-slate-700 hover:border-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 hover:bg-white hover:border-slate-400"}`}
              placeholder="VD: Broaden one's horizons"
            />
          </div>

          <div>
            <label
              className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}
            >
              <FileText size={16} />
              <span>Phát âm</span>
            </label>
            <input
              type="text"
              value={formData.pronunciation}
              onChange={(e) => handleChange("pronunciation", e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm hover:shadow-md ${isDarkMode ? "bg-slate-700/70 border-slate-600 text-white placeholder-slate-400 hover:bg-slate-700 hover:border-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 hover:bg-white hover:border-slate-400"}`}
              placeholder="VD: /ˈbrɔːdn wʌnz həˈraɪzənz/"
            />
          </div>

          <div>
            <label
              className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}
            >
              <Languages size={16} />
              <span>
                Nghĩa (Tiếng Việt) <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              required
              type="text"
              value={formData.meaning}
              onChange={(e) => handleChange("meaning", e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-2 focus:ring-pink-400 focus:border-pink-500 outline-none transition-all font-medium shadow-sm hover:shadow-md ${isDarkMode ? "bg-slate-700/70 border-slate-600 text-white placeholder-slate-400 hover:bg-slate-700 hover:border-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 hover:bg-white hover:border-slate-400"}`}
              placeholder="VD: mở rộng tầm nhìn"
            />
          </div>

          <div>
            <label
              className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}
            >
              <BookText size={16} />
              <span>Ví dụ (Tiếng Anh)</span>
            </label>
            <textarea
              value={formData.example}
              onChange={(e) => handleChange("example", e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[100px] resize-none shadow-sm hover:shadow-md ${isDarkMode ? "bg-slate-700/70 border-slate-600 text-white placeholder-slate-400 hover:bg-slate-700 hover:border-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 hover:bg-white hover:border-slate-400"}`}
              placeholder="VD: Traveling helps broaden your horizons."
            />
          </div>

          <div>
            <label
              className={`flex items-center gap-2 text-sm font-semibold mb-2 transition-colors ${isDarkMode ? "text-slate-200" : "text-slate-700"}`}
            >
              <Languages size={16} />
              <span>Dịch nghĩa ví dụ</span>
            </label>
            <textarea
              value={formData.exampleTranslation}
              onChange={(e) =>
                handleChange("exampleTranslation", e.target.value)
              }
              className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all min-h-[100px] resize-none shadow-sm hover:shadow-md ${isDarkMode ? "bg-slate-700/70 border-slate-600 text-white placeholder-slate-400 hover:bg-slate-700 hover:border-slate-500" : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 hover:bg-white hover:border-slate-400"}`}
              placeholder="VD: Đi du lịch giúp mở rộng tầm nhìn của bạn."
            />
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className={`flex-1 px-5 py-3 rounded-xl border-2 font-bold text-base transition-all hover:scale-105 active:scale-95 touch-manipulation shadow-lg hover:shadow-xl ${isDarkMode ? "border-slate-600 text-slate-200 hover:bg-slate-700 hover:border-slate-500 bg-slate-800/50 backdrop-blur-sm" : "border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 bg-white"}`}
            >
              Hủy
            </button>
            <button
              type="submit"
              className={`flex-1 px-5 py-3 rounded-xl font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 touch-manipulation ${isDarkMode ? "bg-gradient-to-r from-sky-500/70 via-blue-500/65 to-cyan-500/70 hover:from-sky-400/80 hover:via-blue-400/75 hover:to-cyan-400/80 text-white shadow-sky-500/35 hover:shadow-sky-500/45" : "bg-gradient-to-r from-blue-400/80 via-indigo-400/75 to-pink-400/80 hover:from-blue-500/90 hover:via-indigo-500/85 hover:to-pink-500/90 text-white shadow-blue-400/30 hover:shadow-pink-400/40"}`}
            >
              <Check size={20} />
              Thêm thẻ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
