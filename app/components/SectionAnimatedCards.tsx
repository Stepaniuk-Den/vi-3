"use client";
import { ISectionImgAndListProps } from "@/helpers/interfaces";
import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useClickOutside } from "@/helpers/useClickOutside";
import { useIsClient } from "@/helpers/useIsClient";
import TitleBanner from "./TitleBanner";
import Image from "next/image";
import NestedParameterDescList from "./NestedParameterDescList";

const SectionAnimatedCards: React.FC<ISectionImgAndListProps> = ({ t }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);


  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023.98 });

  const ref = useRef<HTMLUListElement | null>(null);
  useClickOutside<HTMLUListElement>(ref, () => setActiveCard(null));

  const toggleCard = (cardId: string) => {
    setActiveCard((prev) => (prev === cardId ? null : cardId));
  };

  const isClient = useIsClient()
  if (!isClient) return null;

  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl">{t.title}</h2>
        </TitleBanner>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-16 justify-items-center"
          ref={ref}
        >
          {Object.values(t.cards).map((card) => {
            const isActive = activeCard === card.id;
            return (
              <li key={card.id}>
                <div
                  className={`relative w-[232px] h-[420px] overflow-hidden shadow-lg group transition-colors duration-500 ease-in-out ${
                    isActive
                      ? "bg-customMarsala-accentLight text-white"
                      : "bg-white"
                  } 
      ${
        !isTabletOrMobile
          ? "hover:bg-customMarsala-accentLight hover:text-white"
          : ""
      } `}
                  onClick={() => isTabletOrMobile && toggleCard(card.id)}
                >
                  <div
                    className={`absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out  ${
                      isActive ? "-translate-y-2/3" : "translate-y-0"
                    } ${
                      !isTabletOrMobile ? "group-hover:-translate-y-2/3" : ""
                    }`}
                  >
                    <Image
                      src={card.src}
                      alt={card.alt || ""}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 60vw"
                      className="w-full h-full object-contain"
                    />
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out 
        ${isActive ? "translate-y-1/3" : "translate-y-0"} ${
                        !isTabletOrMobile ? "group-hover:translate-y-1/3" : ""
                      }
      `}
                    >
                      <h3 className="text-xl font-semibold text-white bg-black bg-opacity-50 px-4 py-2 rounded-md">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-x-0 bottom-24 w-full h-1/4 p-4 transition-opacity duration-300 ease-in-out 
      ${isActive ? "opacity-100" : "opacity-0"} 
      ${!isTabletOrMobile ? "group-hover:opacity-100" : ""}
    `}
                  >
                    {card.parametersList && (
                      <NestedParameterDescList
                        param={card.parametersList}
                        isWhite
                        className="-ml-4"
                      />
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionAnimatedCards;
