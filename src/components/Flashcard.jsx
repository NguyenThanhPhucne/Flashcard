import { useState, useRef, useEffect } from "react";
import { RotateCcw, Languages, Heart, Lightbulb } from "lucide-react";

export default function Flashcard({ card, isFlipped, onFlip, isDarkMode }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState({ axis: "Y", angle: 180 });
  const cardRef = useRef(null);

  // Reset tilt khi card thay đổi để tránh conflict với animation
  useEffect(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlarePosition({ x: 50, y: 50 });
  }, [card.id]);

  // Track flip animation để transition mượt mà cả 2 chiều
  useEffect(() => {
    setIsFlipping(true);
    setTilt({ rotateX: 0, rotateY: 0 }); // Reset tilt khi flip để animation mượt mà
    const timer = setTimeout(() => setIsFlipping(false), 1000);
    return () => clearTimeout(timer);
  }, [isFlipped]);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isFlipping) return; // Chỉ disable khi đang flipping, cho phép tilt cả 2 mặt

    const cardEl = cardRef.current;
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Card nghiêng theo hướng chuột (15 độ cho smooth)
    const rotateY = -((x - centerX) / centerX) * 15;
    const rotateX = -((centerY - y) / centerY) * 15;

    setTilt({ rotateX, rotateY });
    setGlarePosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlarePosition({ x: 50, y: 50 });
  };

  const handleClick = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tính khoảng cách từ center
    const deltaX = x - centerX;
    const deltaY = y - centerY;

    // Xác định hướng lật dựa trên vị trí click
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Lật ngang (trái/phải)
      setFlipDirection({
        axis: "Y",
        angle: deltaX > 0 ? 180 : -180,
      });
    } else {
      // Lật dọc (trên/dưới)
      setFlipDirection({
        axis: "X",
        angle: deltaY > 0 ? 180 : -180,
      });
    }

    onFlip();
  };

  return (
    <div
      ref={cardRef}
      className="w-full h-[420px] xs:h-[460px] sm:h-[500px] md:h-[540px] lg:h-[580px] xl:h-[620px] cursor-pointer group perspective touch-manipulation"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped
            ? `rotate${flipDirection.axis}(${flipDirection.angle}deg) rotateX(${flipDirection.axis === "Y" ? tilt.rotateX : 0}deg) rotateY(${flipDirection.axis === "X" ? tilt.rotateY : 0}deg)`
            : `rotateY(${tilt.rotateY}deg) rotateX(${tilt.rotateX}deg)`,
          transition: isFlipping
            ? "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : "transform 0.08s ease-out",
          willChange: "transform",
        }}
      >
        {/* MẶT TRƯỚC */}
        <div
          className={`absolute inset-0 w-full h-full rounded-xl xs:rounded-2xl sm:rounded-2xl md:rounded-3xl border-2 xs:border-[2.5px] sm:border-[3px] flex flex-col items-center justify-center p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 text-center overflow-hidden transition-all duration-300 ${
            isDarkMode
              ? "bg-gradient-to-br from-slate-800/95 via-slate-700/90 to-slate-800/95 border-sky-400/30 shadow-2xl shadow-sky-400/20 ring-1 ring-sky-300/10"
              : "bg-gradient-to-br from-white via-blue-50/25 via-pink-50/30 to-sky-50/20 border-blue-300/40 shadow-2xl shadow-blue-300/30 ring-1 ring-pink-200/20"
          }`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Glare/Shine Effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle 400px at ${glarePosition.x}% ${glarePosition.y}%, rgba(${isDarkMode ? "135,206,250" : "59,130,246"},0.15), transparent 60%)`,
            }}
          />

          <div
            className={`absolute top-3 xs:top-3.5 sm:top-4 md:top-5 lg:top-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 xs:gap-2 px-3 xs:px-3.5 sm:px-4 py-1 xs:py-1.5 rounded-full backdrop-blur-md border z-10 ${
              isDarkMode
                ? "bg-sky-400/15 border-sky-300/25 shadow-lg"
                : "bg-blue-50/80 border-blue-200/40 shadow-md"
            }`}
          >
            <Languages
              size={18}
              strokeWidth={2}
              className={`xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 ${isDarkMode ? "text-sky-300" : "text-blue-400"}`}
            />
            <span
              className={`text-[10px] xs:text-xs sm:text-sm font-bold uppercase tracking-wider ${
                isDarkMode ? "text-sky-200" : "text-blue-500"
              }`}
            >
              English
            </span>
            <Heart
              size={12}
              className={`ml-0.5 xs:ml-1 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 ${isDarkMode ? "text-pink-300" : "text-pink-400"} opacity-60`}
              fill="currentColor"
            />
          </div>
          <h2
            className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight px-2 xs:px-3 sm:px-4 transition-colors z-10 relative ${
              isDarkMode ? "text-white drop-shadow-lg" : "text-slate-900"
            }`}
          >
            {card.word}
          </h2>
          {card.pronunciation && (
            <p
              className={`text-sm xs:text-base sm:text-lg md:text-xl mt-2 xs:mt-2.5 sm:mt-3 md:mt-4 font-light transition-colors z-10 relative ${
                isDarkMode ? "text-sky-200" : "text-slate-600"
              }`}
            >
              {card.pronunciation}
            </p>
          )}
          <div
            className={`absolute bottom-3 xs:bottom-3.5 sm:bottom-4 md:bottom-5 lg:bottom-6 flex items-center gap-1.5 xs:gap-2 text-[10px] xs:text-xs sm:text-sm transition-opacity duration-300 z-10 ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            <Heart
              size={14}
              className={`xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 ${isDarkMode ? "text-pink-300" : "text-pink-400"} opacity-50`}
              fill="currentColor"
            />
            <RotateCcw
              size={16}
              strokeWidth={2}
              className="xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 animate-spin-slow"
            />
            <span className="hidden sm:inline font-medium">
              Nhấn để xem mặt sau
            </span>
            <span className="sm:hidden font-medium">Chạm để lật</span>
          </div>
        </div>

        {/* MẶT SAU */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-200/70 via-pink-200/65 to-sky-200/70 rounded-xl xs:rounded-2xl sm:rounded-2xl md:rounded-3xl shadow-2xl shadow-pink-300/40 border-2 xs:border-[2.5px] sm:border-[3px] border-pink-300/50 ring-1 ring-blue-200/30 flex flex-col items-center justify-center p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 text-center text-slate-800 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform:
              flipDirection.axis === "Y"
                ? "rotateY(180deg)"
                : "rotateX(180deg)",
          }}
        >
          {/* Glare/Shine Effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle 400px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3), transparent 60%)`,
            }}
          />

          <div className="absolute top-3 xs:top-3.5 sm:top-4 md:top-5 lg:top-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 xs:gap-2 px-3 xs:px-3.5 sm:px-4 py-1 xs:py-1.5 rounded-full bg-white/50 backdrop-blur-md border-2 border-white/60 shadow-lg z-10">
            <Languages
              size={18}
              strokeWidth={2}
              className="xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 text-slate-700"
            />
            <span className="text-[10px] xs:text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">
              Tiếng Việt
            </span>
          </div>

          <div className="w-full max-w-md mx-auto flex flex-col justify-center h-full pt-10 xs:pt-11 sm:pt-12 md:pt-10 lg:pt-8 pb-3 xs:pb-3.5 sm:pb-4 px-2 xs:px-2.5 sm:px-3 z-10 relative overflow-y-auto">
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-3 xs:mb-3.5 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-slate-900">
              {card.meaning}
            </h3>

            {card.note && (
              <div className="bg-gradient-to-r from-green-50/90 via-emerald-50/90 to-green-50/90 backdrop-blur-md p-3 xs:p-3.5 sm:p-4 rounded-lg xs:rounded-xl sm:rounded-xl border-2 border-green-300/60 shadow-lg mb-3 xs:mb-3.5 sm:mb-4 text-left relative overflow-hidden group/note">
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 via-transparent to-emerald-200/20 opacity-0 group-hover/note:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex items-start gap-2 xs:gap-2.5 sm:gap-3 relative z-10">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-1.5 xs:p-2 rounded-lg shadow-md">
                      <Lightbulb
                        size={16}
                        className="xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 text-white"
                        strokeWidth={2.5}
                        fill="currentColor"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1.5 xs:mb-2">
                      <span className="text-[10px] xs:text-xs font-bold text-green-700 uppercase tracking-wide">
                        💡 Lưu ý sử dụng
                      </span>
                    </div>
                    <p className="text-[11px] xs:text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                      {card.note}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {card.example && (
              <div className="bg-white/40 backdrop-blur-md p-3 xs:p-3.5 sm:p-4 md:p-5 rounded-lg xs:rounded-xl sm:rounded-xl md:rounded-2xl mt-2 text-left border-2 border-white/60 shadow-xl">
                <p className="text-slate-800 font-semibold italic mb-1.5 xs:mb-2 text-xs xs:text-sm sm:text-base leading-relaxed">
                  "{card.example}"
                </p>
                {card.exampleTranslation && (
                  <p className="text-[10px] xs:text-xs sm:text-sm text-slate-700 mt-1.5 xs:mt-2 font-medium">
                    ({card.exampleTranslation})
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
