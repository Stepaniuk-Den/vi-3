import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import IconArrowRounded from "@/public/icons/Arrow_rounded.svg";
import useCurrentViewportHeight from '@/helpers/useCurrentViewportHeight';


interface ScrollButtonProps {
  menuRef: React.RefObject<HTMLElement | null>;
  topIndent?: number;
  className?: string;
  variant: "menuBtn" | "subMenuBtn";
  dataId: string

}

const ScrollButton: React.FC<ScrollButtonProps> = ({ menuRef, topIndent = 0, className, variant, dataId }) => {
  const heightViewport = useCurrentViewportHeight();
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [hasMenuScroll, setHasMenuScroll] = useState(false);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const variantStyles = clsx({
    "bottom-6 right-6 fill-customMarsala bg-white": variant === "menuBtn",
    "bottom-6 right-6 fill-white bg-customMarsala-accent": variant === "subMenuBtn",
  });

  const handleScroll = () => {
    if (menuRef.current) {
      isScrollingRef.current = true;
      if (scrollDirection === "down") {
        menuRef.current.scrollTo({
          top: menuRef.current.scrollHeight,
          behavior: "smooth",
        });
        setScrollDirection("up");
      } else {
        menuRef.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setScrollDirection("down");
      }

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        scrollTimeoutRef.current = null;
      }, 300);
    }
  };

  useEffect(() => {
    if (menuRef.current) {
      const menuElement = menuRef.current;
      const menuHeight = menuElement.scrollHeight;
      const maxHeight = heightViewport - topIndent;

      setHasMenuScroll(menuHeight > maxHeight);

      const updateScrollDirection = () => {
        if (menuRef.current && !isScrollingRef.current) {
          const scrollTop = menuRef.current.scrollTop;
          const scrollHeight = menuRef.current.scrollHeight;
          const clientHeight = menuRef.current.clientHeight;

          if (scrollTop + clientHeight >= scrollHeight) {
            setScrollDirection("up");
          } else if (scrollTop <= 0) {
            setScrollDirection("down");
          }
        }
      };

      menuElement.addEventListener("scroll", updateScrollDirection);

      return () => {
        menuElement.removeEventListener("scroll", updateScrollDirection);

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [heightViewport, menuRef, topIndent]);

  return (
    <>
      {hasMenuScroll && <div
        className={clsx(
          "flex justify-center items-center absolute z-30 w-10 h-10 rounded-full transition-all duration-300",
          className, variantStyles,
          {
            "-rotate-90": scrollDirection === "up",
            "rotate-90": scrollDirection === "down"
          }
        )}
        onClick={handleScroll}
        data-id={dataId}
      >
        <IconArrowRounded />
      </div>}
    </>
  );
};

export default ScrollButton;
