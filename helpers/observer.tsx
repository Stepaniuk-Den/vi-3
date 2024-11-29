"use client";

import React, { useEffect, useRef, useState } from "react";

const Observer = ({
  children,
  threshold,
  duration,
  x,
  y,
  opacity,
  scale,
  once = true,
  type = false,
  className,
  rootMargin,
}: {
  children: React.ReactNode;
  threshold: number;
  duration?: string;
  x?: number;
  y?: number;
  opacity?: number;
  scale?: number;
  once?: boolean;
  type?: boolean;
  className?: string;
  rootMargin?: string;
}) => {
  x = x || 0;
  y = y || 0;
  opacity = opacity || 0;
  scale = scale || 0.5;
  rootMargin = rootMargin || "0px";
  duration = duration || "300ms";

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

  if (!type) {
    return (
      <div
        style={{
          transitionDuration: duration,
          transform: !intersecting
            ? `translate(${x}px, ${y}px)`
            : `translate(0px, 0px)`,
          opacity: !intersecting ? opacity : 1,
          scale: !intersecting ? scale : 1,
        }}
        ref={ref as React.RefObject<HTMLDivElement>}
        // className={`transition ${intersecting ? "opacity-100" : "opacity-0"}`}  // for tailwind css
        className={className}
      >
        {children}
      </div>
    );
  }

  return (
    <li
      style={{
        transitionDuration: duration,
        transform: !intersecting
          ? `translate(${x}px, ${y}px)`
          : `translate(0px, 0px)`,
        opacity: !intersecting ? opacity : 1,
        scale: !intersecting ? scale : 1,
      }}
      ref={ref as React.RefObject<HTMLLIElement>}
      className={className}
    >
      {children}
    </li>
  );
};

export default Observer;
