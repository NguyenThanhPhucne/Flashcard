import { ArrowLeft } from "lucide-react";

export default function BackButton({ onClick, isDarkMode, showText = false }) {
  return (
    <div style={{ perspective: "1000px" }}>
      <button
        onClick={onClick}
        onMouseMove={(e) => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -10;
          const rotateY = ((x - centerX) / centerX) * 10;
          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${showText ? "" : "scale(1.1)"}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "rotateX(0deg) rotateY(0deg) scale(1)";
        }}
        className={`${showText ? "flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 px-2.5 xs:px-3 sm:px-4 md:px-5 py-1.5 xs:py-2 sm:py-2.5" : "p-2 sm:p-2.5 md:p-3"} rounded-lg sm:rounded-xl hover:shadow-lg active:scale-95 ${
          isDarkMode
            ? "bg-slate-800/70 text-blue-300 hover:bg-slate-700/70 border border-slate-700/40"
            : "bg-white text-blue-600 hover:bg-blue-50 shadow-md"
        } ${showText ? "text-xs xs:text-sm sm:text-base font-semibold shadow-md border-2" : ""} ${
          isDarkMode && showText
            ? "border-slate-700 hover:border-blue-400/40 text-slate-200 hover:text-blue-300"
            : showText
              ? "border-blue-200/60 hover:border-blue-300 text-slate-700 hover:text-blue-600"
              : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transition:
            "transform 0.1s ease-out, box-shadow 0.3s, background-color 0.3s, border-color 0.3s",
        }}
      >
        <ArrowLeft
          size={showText ? 20 : 24}
          strokeWidth={2.5}
          style={{
            minWidth: showText ? 20 : 24,
            minHeight: showText ? 20 : 24,
          }}
        />
        {showText && <span className="hidden xs:inline">Quay lại</span>}
      </button>
    </div>
  );
}
