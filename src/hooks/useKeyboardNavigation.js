import { useEffect } from "react";

/**
 * Custom hook để xử lý keyboard navigation
 * @param {Function} onNext - Callback khi nhấn mũi tên phải
 * @param {Function} onPrev - Callback khi nhấn mũi tên trái
 * @param {Function} onFlip - Callback khi nhấn Space
 * @param {boolean} isModalOpen - Disable keyboard khi modal mở
 */
export function useKeyboardNavigation(
  onNext,
  onPrev,
  onFlip,
  isModalOpen = false,
) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) return;

      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        onFlip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, onFlip, isModalOpen]);
}
