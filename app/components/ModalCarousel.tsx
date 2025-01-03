import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Close from "@/public/icons/F7Clear.svg";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const ModalCarousel = ({ children, onClose }: ModalProps) => {
  const [showAnimation, setShowAnimation] = useState(true);

  const handleClose = () => {
    setShowAnimation(false);
    setTimeout(onClose, 500);
  };

  useEffect(() => {
    return () => {
      setShowAnimation(true); 
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className={`fixed top-0 left-0 w-full h-full bg-customMarsala-accentLight z-50 flex justify-center items-center transition-transform ${
        showAnimation ? "animate-unfoldIn" : "animate-unfoldOut"
      }`}
    >
      <div
        className="absolute w-[80vw] h-[90%] first-line:rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={handleClose}
          className="absolute top-[-11px] right-[-2px] text-white p-2 rounded-full z-50 hover:text-customMarsala"
        >
         <Close />
        </button>
      </div>
    </div>,
    document.body
  );
};

export default ModalCarousel;
