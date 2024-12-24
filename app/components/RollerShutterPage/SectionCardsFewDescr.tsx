import { ISectionImgAndListProps } from "@/helpers/interfaces";
import React from "react";
import TitleBanner from "../TitleBanner";
import Image from "next/image";

const SectionCardsFewDescr: React.FC<ISectionImgAndListProps> = ({ t }) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl">{t.title}</h2>
        </TitleBanner>
        <ul className="grid grid-cols-4 gap-7 pt-8">
          {Object.values(t.cards).map((card) => (
            <li key={card.id} className="w-full flex flex-col gap-2">
              <h3 className="subTitleCl xl:leading-none normal-case">
                {card.title}
              </h3>
              <div className="relative border border-gray-300 rounded-md overflow-hidden w-full h-[260px]">
                <Image
                  className="object-cover"
                  src={card.src}
                  alt={card.alt || ""}
                  sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                  fill
                />
              </div>
              <div className="flex flex-col gap-1">
                {card.descrList &&
                  Object.values(card.descrList).map((descr, idx) => (
                    <p key={idx}>{descr.desc}</p>
                  ))}
              </div>
              <div className="flex flex-col gap-10 w-2/3"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionCardsFewDescr;
