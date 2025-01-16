"use client";

import clsx from "clsx";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
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
    string | undefined
  >("");
  const [classNameModalContent, setClassNameModalContent] =
    useState<string>("w-[80vw] h-[90vh]");
  const [classNameBtn, setClassNameBtn] = useState<string>(
    "top-[-11px] right-[-10%]"
  );
  const [classNameAnimationIn, setClassNameAnimationIn] =
    useState<string>("animate-unfoldIn");
  const [classNameAnimationOut, setClassNameAnimationOut] =
    useState<string>("animate-unfoldOut");

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
    setClassNameBackdrop(classNameBackdrop);
    setClassNameModalContent(
      classNameModalContent || "w-[80vw] h-[80vh] sm:h-[90vh] "
    );
    setClassNameBtn(classNameBtn || "top-[-10%] sm:top-[-2%] right-[-10%]");
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

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}
      {isOpen && (
        <div
          className={clsx(
            `fixed bg-customMarsala-accentLight top-0 left-0 w-full h-full z-30 flex justify-center items-center transition-transform tra`,
            showAnimation ? classNameAnimationIn : classNameAnimationOut,
            classNameBackdrop
          )}
        >
          <div
            className={clsx("absolute rounded-md", classNameModalContent)}
            onClick={(e) => e.stopPropagation()}
          >
            {content}
            <button
              className={clsx(
                " absolute text-white p-2 rounded-full z-30 hover:text-customMarsala",
                classNameBtn
              )}
              onClick={closeModal}
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
