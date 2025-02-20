"use client";

import React, { useEffect, useRef, useState } from "react";

const Observer = ({
  children,
  threshold,
  duration,
  x,
  y,
  z,
  opacity,
  scale,
  once = true,
  type = false,
  classNameObserver,
  classNameChild,
  rootMargin,
  animation,
}: {
  children: React.ReactNode;
  threshold?: number;
  duration?: string;
  x?: number;
  y?: number;
  z?: number;
  opacity?: number;
  scale?: number;
  once?: boolean;
  type?: boolean;
  classNameObserver?: string;
  classNameChild?: string;
  rootMargin?: string;
  animation?: string | null;

}) => {
  threshold = threshold || 1;
  x = x || 0;
  y = y || 0;
  z = z || 0;
  opacity = opacity || 0;
  scale = scale || 0.5;
  rootMargin = rootMargin || "0px";
  duration = duration || "500ms";


  const ref = useRef<HTMLDivElement | null>(null);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true);
            if (once) {
              observer.unobserve(ref.current!);
            }
          } else {
            if (!once) {
              setIntersecting(false);
            }
          }
        },
        {
          threshold,
          rootMargin,
        }
      );
      observer.observe(element);

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }
  }, [once, rootMargin, threshold]);

  let styles: React.CSSProperties = {};

  switch (animation) {
    //animation create in styles.css 
    case "zoom-in":
      styles = {
        transition: `all ${duration} ease-in-out`,
        transform: intersecting ? "scale(1)" : "scale(0.5)",
        opacity: intersecting ? 1 : 0,
      };
      break;
    case "zoom-in-line":
      styles = {
        animation: intersecting ? `zoomInLine ${duration} ease-in-out 0.5s forwards` : "none",
        opacity: 0,
      };
      break;
    case "slide-up":
      styles = {
        transition: `all ${duration} ease-in-out`,
        transform: intersecting ? "translateY(0)" : "translateY(50px)",
        opacity: intersecting ? 1 : 0,
      };
      break;
    case "zoom-in-line-left":
      styles = {
        transition: `all ${duration} ease-in-out`,
        transitionDelay: "0.5s",
        transform: intersecting ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "right",
      };
      break;
    case "zoom-in-line-right":
      styles = {
        transition: `all ${duration} ease-in-out`,
        transitionDelay: "0.5s",
        transform: intersecting ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
      };
      break;
    case "flip-in-vertical":
      styles = {
        transition: `all ${duration} ease-in-out`,
        transform: intersecting ? "rotateY(0)" : "rotateY(-120deg)",
        opacity: intersecting ? 1 : 0,
      };
      break;
    case "flip-in-vertical-card":
      styles = {
        animation: intersecting ? `flipInYCard ${duration} ease-in-out forwards` : "none",
        opacity: 0,
      };
      break;
    default:
      styles = {
        transitionDuration: duration,
        transform: intersecting ? "translate(0px, 0px, 0px)" : `translate(${x}px, ${y}px, ${z}px)`,
        opacity: intersecting ? 1 : opacity,
        scale: intersecting ? 1 : scale,
      };
      break;
  }

  useEffect(() => {
    if (intersecting && ref.current) {
      const firstChild = ref.current.firstElementChild;
      if (firstChild && firstChild instanceof HTMLElement && classNameChild) {
        firstChild.classList.add(classNameChild);
      }
    }
  }, [intersecting, classNameChild]);

  if (!type) {
    return (
      <div
        style={styles}
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`${classNameObserver}`}
      >
        {children}
      </div>
    );
  }

  return (
    <li
      style={styles}
      ref={ref as React.RefObject<HTMLLIElement>}
      className={classNameObserver}
    >
      {children}
    </li>
  );
};

export default Observer;
