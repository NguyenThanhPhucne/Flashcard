import { useState, useRef, useEffect } from "react";
import { RotateCcw, Languages } from "lucide-react";

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
      className="w-full h-[400px] sm:h-[450px] md:h-96 cursor-pointer group perspective touch-manipulation"
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
          className={`absolute inset-0 w-full h-full rounded-2xl md:rounded-3xl border flex flex-col items-center justify-center p-6 md:p-8 text-center overflow-hidden ${isDarkMode ? "bg-gradient-to-br from-slate-800/95 via-slate-700/90 to-slate-800/95 border-sky-500/20 shadow-2xl shadow-sky-500/15" : "bg-gradient-to-br from-white/95 via-blue-50/40 to-pink-50/30 border-blue-200/40 shadow-2xl shadow-blue-200/30"}`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Glare/Shine Effect */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(circle 400px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3), transparent 50%)`,
            }}
          ></div>

          <div
            className={`absolute top-4 md:top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md border z-10 ${isDarkMode ? "bg-sky-400/20 border-sky-300/30 shadow-lg shadow-sky-400/20" : "bg-gradient-to-r from-blue-400/10 to-pink-400/10 border-blue-400/20 shadow-md shadow-blue-400/15"}`}
          >
            <Languages
              size={16}
              className={isDarkMode ? "text-sky-300" : "text-blue-500"}
            />
            <span
              className={`text-xs md:text-sm font-bold uppercase tracking-wider ${isDarkMode ? "text-sky-200" : "text-blue-500"}`}
            >
              English
            </span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight px-4 transition-colors z-10 relative ${isDarkMode ? "text-white drop-shadow-lg" : "text-slate-900"}`}
          >
            {card.word}
          </h2>
          {card.pronunciation && (
            <p
              className={`text-base sm:text-lg md:text-xl mt-3 md:mt-4 font-light transition-colors z-10 relative ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
            >
              {card.pronunciation}
            </p>
          )}
          <div
            className={`absolute bottom-4 md:bottom-6 flex items-center gap-2 text-xs md:text-sm animate-pulse transition-colors z-10 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
          >
            <RotateCcw size={16} className="animate-spin-slow" />
            <span className="hidden sm:inline">Nhấn để xem mặt sau</span>
            <span className="sm:hidden">Chạm để lật</span>
          </div>
        </div>

        {/* MẶT SAU */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-300/70 via-indigo-300/65 to-pink-300/70 rounded-2xl md:rounded-3xl shadow-2xl border border-pink-300/25 flex flex-col items-center justify-center p-6 md:p-8 text-center text-slate-800 overflow-hidden"
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
              background: `radial-gradient(circle 400px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.25), transparent 50%)`,
            }}
          ></div>

          <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-lg z-10">
            <Languages size={16} className="text-slate-700" />
            <span className="text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wider drop-shadow">
              Tiếng Việt
            </span>
          </div>

          <div className="w-full max-w-md mx-auto flex flex-col justify-center h-full pt-12 md:pt-8 pb-4 px-2 z-10 relative overflow-y-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight text-slate-800">
              {card.meaning}
            </h3>

            {card.example && (
              <div className="bg-white/30 backdrop-blur-md p-4 md:p-5 rounded-xl md:rounded-2xl mt-2 text-left border border-white/50 shadow-xl">
                <p className="text-slate-800 font-semibold italic mb-2 text-sm md:text-base leading-relaxed drop-shadow">
                  "{card.example}"
                </p>
                {card.exampleTranslation && (
                  <p className="text-xs md:text-sm text-slate-700 mt-2">
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
