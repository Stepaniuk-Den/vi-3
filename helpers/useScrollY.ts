import { useEffect, useState } from "react";

interface IProps {
  scrollY?: number;
  once?: boolean;
}

const useScrollY = ({ scrollY = 400, once = false }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > scrollY) {
        setIsVisible(true);
        if (once) {
          window.removeEventListener("scroll", toggleVisibility);
        }
      } else if (!once) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [scrollY, once]);

  return isVisible;
};

export default useScrollY;
