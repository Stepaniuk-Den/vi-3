"use client";

import { windowSvgItems } from "@/data/svgWindows";
import { useMediaQuery } from "react-responsive";
import { useClickOutside } from "@/helpers/useClickOutside";
import React, { useState, useRef } from "react";

export interface IWindowFeaturesProps {
  id: string;
  title: string;
  ariaLabel: string;
  description: string;
  svgName: string;
}

const WindowFeaturesCard: React.FC<{ t: IWindowFeaturesProps }> = ({ t }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  // const [isClient, setIsClient] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023.98 });

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  const { id, title, ariaLabel, description, svgName } = t;

  const ref = useRef<HTMLLIElement | null>(null);
  useClickOutside<HTMLLIElement>(ref, () => setActiveCard(null));

  const toggleCard = (cardId: string) => {
    setActiveCard((prev) => (prev === cardId ? null : cardId));
  };

  const isActive = activeCard === id;

  // if (!isClient) {
  //   return null;
  // }

  return (
    <li
      ref={ref}
      className={`group relative flex flex-col items-center justify-center py-6 shadow-lg transition-all duration-700 ease-in-out overflow-hidden min-w-72 sm:min-w-64 md:min-w-72 lg:min-w-80 xl:min-w-64 min-h-[340px] rounded-md 
        ${
          isActive
            ? "bg-customMarsala-accentLight text-white"
            : "bg-white text-black"
        } 
      ${
        !isTabletOrMobile
          ? "hover:bg-customMarsala-accentLight hover:text-white"
          : ""
      }
      `}
      onClick={() => isTabletOrMobile && toggleCard(id)}
    >
      {windowSvgItems.windows.map((item) =>
        item.name === svgName ? (
          <span
            key={item.name}
            className={`absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 flex items-center justify-center rounded-[18px_5px_10px_5px] transition-all duration-700 ease-in-out 
            ${
              isActive
                ? "translate-y-[-150%] opacity-0"
                : "bg-customMarsala-accentLight opacity-100"
            }
            ${
              !isTabletOrMobile
                ? "group-hover:translate-y-[-150%] group-hover:opacity-0"
                : ""
            }`}
          >
            <item.svg aria-label={ariaLabel} className="w-12 h-12 fill-white" />
          </span>
        ) : null
      )}

      <h3
        className={`relative z-10 text-xl font-semibold mt-44 text-center transition-all duration-700 ease-in-out h-14 
          ${isActive ? "translate-y-[-330%] text-white" : "text-black"} 
          ${
            !isTabletOrMobile
              ? "group-hover:translate-y-[-330%] group-hover:text-white"
              : ""
          }`}
      >
        {title}
      </h3>

      <p
        className={`absolute text-center w-[90%] transition-all duration-500 ease-in-out 
          ${isActive ? "opacity-100 text-white" : "opacity-0 text-black"} 
          ${
            !isTabletOrMobile
              ? "group-hover:opacity-100 group-hover:text-white"
              : ""
          }`}
      >
        {description}
      </p>
    </li>
  );
};

export default WindowFeaturesCard;
