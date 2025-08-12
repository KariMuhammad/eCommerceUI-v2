import useModal from "@/hooks/use-modal";
import { useEffect } from "react";
import { createPortal } from "react-dom";


export default function ModalCard() {
  const { isOpen, size, title, children, closeModal } = useModal();

  const handleClosingCard = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return;

    closeModal();
  };

  useEffect(() => {
    const handleEscape = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") closeModal();
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent Body Scroll when Modal is Open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    }
  }, [isOpen])

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-full mx-4"
  };


  return createPortal(
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClosingCard}
        >
          <div className={`bg-white p-6 rounded shadow-lg ${sizeClasses[size]}`}>
            <h4 className="mb-4 border-b-2 border-b-gray-200">{title}</h4>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root") || document.body
  );
}
