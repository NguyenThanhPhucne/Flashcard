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
      className="w-full h-[320px] xs:h-[340px] sm:h-[380px] md:h-[420px] lg:h-[460px] cursor-pointer group perspective touch-manipulation"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1200px",
        WebkitPerspective: "1200px",
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          transform: isFlipped
            ? `rotate${flipDirection.axis}(${flipDirection.angle}deg) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
            : `rotateY(${tilt.rotateY}deg) rotateX(${tilt.rotateX}deg)`,
          WebkitTransform: isFlipped
            ? `rotate${flipDirection.axis}(${flipDirection.angle}deg) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
            : `rotateY(${tilt.rotateY}deg) rotateX(${tilt.rotateX}deg)`,
          transition: isFlipping
            ? "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : "transform 0.08s ease-out",
          WebkitTransition: isFlipping
            ? "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : "transform 0.08s ease-out",
          willChange: "transform",
        }}
      >
        {/* MẶT TRƯỚC */}
        <div
          className={`absolute inset-0 w-full h-full rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl border-2 xs:border-[2.5px] sm:border-[3px] flex flex-col items-center justify-center p-4 xs:p-5 sm:p-6 md:p-7 text-center overflow-hidden transition-all duration-300 ${
            isDarkMode
              ? "bg-gradient-to-br from-slate-800/75 via-slate-700/70 to-blue-900/75 border-blue-400/50 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-400/20"
              : "bg-gradient-to-br from-white via-blue-50/30 via-pink-50/25 to-blue-50/20 border-blue-300/40 shadow-2xl shadow-blue-300/30 ring-1 ring-pink-200/20"
          }`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            MozBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
            WebkitTransform: "rotateY(0deg)",
            zIndex: isFlipped ? 1 : 2,
          }}
        >
          {/* Glare/Shine Effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle 400px at ${glarePosition.x}% ${glarePosition.y}%, rgba(${isDarkMode ? "96,165,250" : "59,130,246"},0.15), transparent 60%)`,
            }}
          />

          <div
            className={`absolute top-2.5 xs:top-3 sm:top-3.5 md:top-4 lg:top-5 left-1/2 -translate-x-1/2 flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2.5 xs:px-3 sm:px-3.5 md:px-4 py-0.5 xs:py-1 sm:py-1.5 rounded-full backdrop-blur-md border z-10 ${
              isDarkMode
                ? "bg-blue-400/15 border-blue-300/25 shadow-lg"
                : "bg-blue-100/80 border-blue-200/40 shadow-md"
            }`}
          >
            <Languages
              size={18}
              strokeWidth={2.5}
              style={{ minWidth: 18, minHeight: 18 }}
              className={`${isDarkMode ? "text-blue-300" : "text-blue-500"}`}
            />
            <span
              className={`text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider ${
                isDarkMode ? "text-blue-200" : "text-blue-600"
              }`}
            >
              English
            </span>
            <Heart
              size={14}
              strokeWidth={2}
              fill="currentColor"
              style={{ minWidth: 14, minHeight: 14 }}
              className={`ml-0.5 xs:ml-1 ${isDarkMode ? "text-pink-300" : "text-pink-400"} opacity-60`}
            />
          </div>
          <h2
            className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight px-2 xs:px-3 sm:px-4 transition-colors z-10 relative break-words ${
              isDarkMode ? "text-white drop-shadow-lg" : "text-slate-900"
            }`}
          >
            {card.word}
          </h2>
          {card.pronunciation && (
            <p
              className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mt-2 xs:mt-2.5 sm:mt-3 md:mt-4 font-light transition-colors z-10 relative break-words ${
                isDarkMode ? "text-sky-200" : "text-slate-600"
              }`}
            >
              {card.pronunciation}
            </p>
          )}
          <div
            className={`absolute bottom-2.5 xs:bottom-3 sm:bottom-3.5 md:bottom-4 lg:bottom-5 flex items-center gap-1 xs:gap-1.5 sm:gap-2 text-[9px] xs:text-[10px] sm:text-xs md:text-sm transition-opacity duration-300 z-10 ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            <Heart
              size={16}
              strokeWidth={2}
              fill="currentColor"
              style={{ minWidth: 16, minHeight: 16 }}
              className={`${isDarkMode ? "text-pink-300" : "text-pink-400"} opacity-50`}
            />
            <RotateCcw
              size={16}
              strokeWidth={2.5}
              style={{ minWidth: 16, minHeight: 16 }}
              className="animate-spin-slow"
            />
            <span className="hidden sm:inline font-medium">
              Nhấn để xem mặt sau
            </span>
            <span className="sm:hidden font-medium">Chạm để lật</span>
          </div>
        </div>

        {/* MẶT SAU */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-200/70 via-pink-200/65 to-sky-200/70 rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl shadow-2xl shadow-pink-300/40 border-2 xs:border-[2.5px] sm:border-[3px] border-pink-300/50 ring-1 ring-blue-200/30 flex flex-col items-center justify-center p-4 xs:p-5 sm:p-6 md:p-7 text-center text-slate-800 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            MozBackfaceVisibility: "hidden",
            transform:
              flipDirection.axis === "Y"
                ? "rotateY(180deg)"
                : "rotateX(180deg)",
            WebkitTransform:
              flipDirection.axis === "Y"
                ? "rotateY(180deg)"
                : "rotateX(180deg)",
            zIndex: isFlipped ? 2 : 1,
          }}
        >
          {/* Glare/Shine Effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle 400px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3), transparent 60%)`,
            }}
          />

          <div className="absolute top-2.5 xs:top-3 sm:top-3.5 md:top-4 lg:top-5 left-1/2 -translate-x-1/2 flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2.5 xs:px-3 sm:px-3.5 md:px-4 py-0.5 xs:py-1 sm:py-1.5 rounded-full bg-white/50 backdrop-blur-md border-2 border-white/60 shadow-lg z-10">
            <Languages
              size={18}
              strokeWidth={2.5}
              style={{ minWidth: 18, minHeight: 18 }}
              className="text-slate-700"
            />
            <span className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wider">
              Tiếng Việt
            </span>
          </div>

          <div className="w-full max-w-2xl mx-auto flex flex-col justify-start h-full pt-9 xs:pt-10 sm:pt-11 md:pt-12 pb-2.5 xs:pb-3 sm:pb-3.5 md:pb-4 px-2.5 xs:px-3 sm:px-4 md:px-5 z-10 relative overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-slate-400/60">
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-2.5 xs:mb-3 sm:mb-4 md:mb-5 leading-tight text-slate-900 break-words">
              {card.meaning}
            </h3>

            {card.note && (
              <div className="bg-gradient-to-r from-green-50/90 via-emerald-50/90 to-green-50/90 backdrop-blur-md p-2 xs:p-2.5 sm:p-3 md:p-3.5 rounded-lg xs:rounded-xl border-2 border-green-300/60 shadow-lg mb-2.5 xs:mb-3 sm:mb-3.5 md:mb-4 text-left relative group/note">
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 via-transparent to-emerald-200/20 opacity-0 group-hover/note:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg xs:rounded-xl"></div>

                <div className="flex items-start gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 relative z-10">
                  <div className="shrink-0 mt-px">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-1 xs:p-1.5 sm:p-2 rounded-lg shadow-md">
                      <Lightbulb
                        size={18}
                        strokeWidth={2.5}
                        fill="currentColor"
                        style={{ minWidth: 18, minHeight: 18 }}
                        className="text-white"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-1.5 mb-0.5 xs:mb-1 sm:mb-1.5 md:mb-2">
                      <span className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-bold text-green-700 uppercase tracking-wide">
                        💡 Lưu ý sử dụng
                      </span>
                    </div>
                    <p className="text-[11px] xs:text-xs sm:text-sm md:text-base text-slate-800 leading-relaxed font-medium break-words">
                      {card.note}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {card.example && (
              <div className="bg-white/40 backdrop-blur-md p-2 xs:p-2.5 sm:p-3 md:p-3.5 rounded-lg xs:rounded-xl mt-1.5 xs:mt-2 text-left border-2 border-white/60 shadow-xl">
                <p className="text-slate-800 font-semibold italic mb-1 xs:mb-1.5 sm:mb-2 text-[11px] xs:text-xs sm:text-sm md:text-base leading-relaxed break-words">
                  "{card.example}"
                </p>
                {card.exampleTranslation && (
                  <p className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm text-slate-700 mt-1 xs:mt-1.5 sm:mt-2 font-medium break-words">
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
