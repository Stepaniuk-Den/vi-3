"use client"
import { useEffect, useRef, useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher"
import Navigation from "./Navigation"
import SocialLinks from "./SocialLinks"
import clsx from "clsx";
import { useHoveredMenuStore } from "@/store/hoveredMenuStore";

const BurgerMenu = () => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hoveredMenu = useHoveredMenuStore((state) => state.hoveredMenu);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(hoveredMenu)
  return (
    <div className="w-full h-full bg-customMarsala flex items-start justify-center mt-16">
      <div
        ref={containerRef}
        className={clsx('flex flex-col container h-dvh landscape:overflow-y-scroll',
          {
            "landscape:overflow-hidden": hoveredMenu !== null,
            // "landscape:overflow-y-scroll": hoveredMenu === null,
          }
        )}>
        <LocaleSwitcher />
        <Navigation
          scrollY={scrollY} />
        <SocialLinks />
      </div>
    </div>
  )
}

export default BurgerMenu
