"use client"
import { useEffect, useRef, useState } from "react";
import LocaleSwitcher from "./LocaleSwitcher"
import Navigation from "./Navigation"
import SocialLinks from "./SocialLinks"
import clsx from "clsx";
import { useHoveredMenuStore } from "@/store/hoveredMenuStore";
import useCurrentViewportHeight from "@/helpers/useCurrentViewportHeight";
import ScrollButton from "./Buttons/ScrollButton";

const BurgerMenu = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isSubMenuReady, setIsSubMenuReady] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const subMenuRef = useRef<HTMLUListElement | null>(null);
  const hoveredMenu = useHoveredMenuStore((state) => state.hoveredMenu);
  const height = useCurrentViewportHeight();

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

  useEffect(() => {
    if (hoveredMenu) {
      const timeout = setTimeout(() => {
        setIsSubMenuReady(!!subMenuRef.current);
      }, 300);

      return () => clearTimeout(timeout);
    } else {
      setIsSubMenuReady(false);
    }
  }, [hoveredMenu]);

  return (
    <div className="w-full h-full bg-customMarsala flex items-start justify-center mt-16">
      <div
        ref={containerRef}
        style={{ height: `calc(${height}px - 80px)` }}
        className={clsx('flex flex-col container',
          {
            "landscape:overflow-hidden": hoveredMenu !== null,
            "landscape:overflow-y-scroll": hoveredMenu === null,
          }
        )}>
        {!hoveredMenu && <ScrollButton menuRef={containerRef} topIndent={64} variant="menuBtn" dataId="menuBtn" />}
        {hoveredMenu && isSubMenuReady && <ScrollButton menuRef={subMenuRef} topIndent={130} variant="subMenuBtn" dataId="subMenuBtn" />}
        <LocaleSwitcher classNameBurger="right-6 top-3" />
        <Navigation
          subMenuRef={subMenuRef}
          scrollY={scrollY} />
        <SocialLinks />
      </div>
    </div>
  )
}

export default BurgerMenu
