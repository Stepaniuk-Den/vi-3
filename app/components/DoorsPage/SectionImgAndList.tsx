"use client";

import { ISectionImgAndListProps } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
import Image from "next/image";
import React from "react";
import TitleBanner from "../TitleBanner";
import NestedParameterDescList from "../NestedParameterDescList";
import ModalSwiperContent from "../ModalSwiperContent";

const SectionImgAndList: React.FC<ISectionImgAndListProps> = ({
  t,
  isShowSecondList = false,
}) => {
  const images = Object.values(t.cards).map((card) => ({
    id: card.id,
    src: card.src,
    alt: card.alt || "",
  }));

  const { openModal } = useModal();

  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl">{t.title}</h2>
        </TitleBanner>
        <ul className="flex flex-col gap-10">
          {Object.values(t.cards).map((card, index) => (
            <li key={card.id} className="flex flex-col sm:flex-row lg:gap-24">
              <div
                className="relative border border-gray-300 rounded-md overflow-hidden w-full sm:w-1/3 h-[300px] md:h-[380px] lg:h-[460px] cursor-zoom-in"
                onClick={() =>
                  openModal(
                    <ModalSwiperContent slides={images} initialSlide={index} />
                  )
                }
              >
                <Image
                  className="object-cover"
                  sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                  src={card.src}
                  alt={card.alt || ""}
                  fill
                />
              </div>
              <div className="flex flex-col lg:gap-10 w-full sm:w-2/3 md:w-2/3">
                {card.parametersList && (
                  <NestedParameterDescList param={card.parametersList} />
                )}
                {isShowSecondList && card.parametersList2 && (
                  <NestedParameterDescList param={card.parametersList2} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionImgAndList;
