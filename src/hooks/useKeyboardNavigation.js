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

      // Không chặn keyboard khi đang gõ trong input/textarea
      const isTyping =
        e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA";

      if (e.key === "ArrowRight" && !isTyping) onNext();
      if (e.key === "ArrowLeft" && !isTyping) onPrev();
      if ((e.key === " " || e.key === "Spacebar") && !isTyping) {
        e.preventDefault();
        onFlip();
      }
    };

    globalThis.addEventListener("keydown", handleKeyDown);
    return () => globalThis.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, onFlip, isModalOpen]);
}
