import { useEffect } from "react";

export const useModal = (
  isOpen: boolean,
  setIsOpen: (open: boolean) => void
) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen, setIsOpen]);
};
