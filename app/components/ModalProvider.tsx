"use client";

import clsx from "clsx";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslations } from "next-intl";
import Close from "@/public/icons/Close.svg";

interface ModalOptions {
  classNameBackdrop?: string;
  classNameModalContent?: string;
  classNameBtn?: string;
  classNameAnimationIn?: string;
  classNameAnimationOut?: string;
}
interface ModalContextType {
  isOpen: boolean;
  content: ReactNode | null;
  openModal: (modalContent: ReactNode, options?: ModalOptions) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [classNameBackdrop, setClassNameBackdrop] = useState<
    string>("bg-customMarsala-accentLight");
  const [classNameModalContent, setClassNameModalContent] =
    useState<string>("w-[80vw] h-[90vh]");
  const [classNameBtn, setClassNameBtn] = useState<string>(
    "top-[-10px] right-[-10%]"
  );
  const [classNameAnimationIn, setClassNameAnimationIn] =
    useState<string>("animate-unfoldIn");
  const [classNameAnimationOut, setClassNameAnimationOut] =
    useState<string>("animate-unfoldOut");

  const t = useTranslations("ModalWindow");
  const modalRef = useRef<HTMLDivElement>(null)


  const openModal = (modalContent: ReactNode, options?: ModalOptions) => {
    const {
      classNameBackdrop,
      classNameModalContent,
      classNameBtn,
      classNameAnimationIn,
      classNameAnimationOut,
    } = options || {};
    setContent(modalContent);
    setIsOpen(true);
    setShowAnimation(true);
    setClassNameBackdrop(classNameBackdrop || "bg-customMarsala-accentLight");
    setClassNameModalContent(
      classNameModalContent || "w-[80vw] h-[80vh] sm:h-[90vh] "
    );
    setClassNameBtn(classNameBtn || "top-[-10px] right-[-10%]");
    setClassNameAnimationIn(classNameAnimationIn || "animate-unfoldIn");
    setClassNameAnimationOut(classNameAnimationOut || "animate-unfoldOut");
  };

  const closeModal = () => {
    setShowAnimation(false);
    setTimeout(() => {
      setIsOpen(false);
      setContent(null);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const disableScroll = (e: TouchEvent) => {
      if (!modalRef.current || !modalRef.current.contains(e.target as Node)) {
        e.preventDefault();
      }
    };

    if (isOpen) {
      document.documentElement.style.overscrollBehavior = "none";
      document.addEventListener("touchmove", disableScroll, { passive: false });
    } else {
      document.documentElement.style.overscrollBehavior = "";
      document.removeEventListener("touchmove", disableScroll);
    }

    return () => {
      document.documentElement.style.overscrollBehavior = "";
      document.removeEventListener("touchmove", disableScroll);
    };
  }, [isOpen]);



  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}
      {isOpen && (
        <div
          ref={modalRef}
          className={clsx(`fixed top-0 left-0 w-full h-full z-30 flex justify-center items-center transition-transform`, showAnimation ? classNameAnimationIn : classNameAnimationOut, classNameBackdrop)}
        >
          <div
            className={clsx("absolute rounded-md", classNameModalContent)}
            onClick={(e) => e.stopPropagation()}
          >
            {content}
            <button
              className={clsx(" absolute text-white rounded-full z-50 lg:hover:text-customMarsala", classNameBtn)}
              onClick={closeModal}
              aria-label={t("ariaLabel")}
            >
              <Close />
            </button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
