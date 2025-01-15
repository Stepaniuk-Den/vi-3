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
  openModal: (
    modalContent: ReactNode,
    options?: ModalOptions
  ) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [classNameBackdrop, setClassNameBackdrop] = useState<string | undefined>("");
  const [classNameModalContent, setClassNameModalContent] = useState<string>("w-full h-full");
  const [classNameBtn, setClassNameBtn] = useState<string | undefined>("");
  const [classNameAnimationIn, setClassNameAnimationIn] = useState<string>("animate-unfoldIn");
  const [classNameAnimationOut, setClassNameAnimationOut] = useState<string>("animate-unfoldOut");



  const openModal = (modalContent: ReactNode, options?: ModalOptions) => {
    const { classNameBackdrop, classNameModalContent, classNameBtn, classNameAnimationIn,
      classNameAnimationOut, } = options || {};
    setContent(modalContent);
    setIsOpen(true);
    setShowAnimation(true);
    setClassNameBackdrop(classNameBackdrop)
    setClassNameModalContent(classNameModalContent || "w-full h-full")
    setClassNameBtn(classNameBtn)
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
          className={clsx(`fixed top-0 left-0 w-full h-full  z-50 flex justify-center items-center transition-transform tra`, showAnimation ? classNameAnimationIn : classNameAnimationOut, classNameBackdrop)}
        >
          <div
            className={clsx("absolute rounded-md", classNameModalContent)}
            onClick={(e) => e.stopPropagation()}
          >
            {content}
            <button
              className={clsx(" absolute text-white p-2 rounded-full z-50 hover:text-customMarsala", classNameBtn)}
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

{/* По замовчуванню у ModalProvider стилі для Swiper-у в каруселі або зображення в модалці, якщо потрібно передати свої стилі, для кожного div-а(їх там два), а також кнопки є свій пропс для передачи стилю. Компонент треба огорнути в <ModalProvider> і передати потрібні пропси. Якщо Ваш стиль не збігається з дефолтним стилєм, просто його прописуєте, якщо потрібно перебити стандартний стиль, перед властивістю, поставте знак оклику(наприклад:"!bg-customMarsala" Приклад огорнення компонента ModalProvider-ом, знаходиться в doors/exterior-doors-pvc-schuco/page.tsx ) */ }


