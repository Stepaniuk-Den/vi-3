import React from "react";
import TitleBanner from "./TitleBanner";
import Image from "next/image";
import NestedParameterDescList from "./NestedParameterDescList";
import { ISectionImgAndListProps } from "@/helpers/interfaces";

const SectionAnimatedCards: React.FC<ISectionImgAndListProps> = ({ t }) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl">{t.title}</h2>
        </TitleBanner>
        <ul className="grid grid-cols-3 gap-7 pt-8">
          {Object.values(t.cards).map((card) => (
            <li key={card.id} className="">
              <div className="relative w-96 h-[720px] overflow-hidden  shadow-lg group hover:bg-customMarsala-accentLight">
                <div className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:-translate-y-2/3 ">
                  <Image
                    src={card.src}
                    alt={card.alt || ""}
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-y-1/3">
                    <h3 className="text-xl font-semibold text-white bg-black bg-opacity-50 px-4 py-2 rounded-md">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-24 w-full h-1/4 p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-white">
                  {card.parametersList && (
                    <NestedParameterDescList param={card.parametersList} isWhite />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionAnimatedCards;
