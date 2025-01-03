"use client";

import { ICard } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
import Image from "next/image";
import React from "react";
import NestedParameterDescList from "../NestedParameterDescList";
import clsx from "clsx";
import ModalSwiperContent from "../ModalSwiperContent";

interface ISectionSectionListImgAndListProps {
  t: {
    cards: Record<string, ICard>;
  };
  isShowSecondList?: boolean;
  columns?: number;
}

const SectionListImgAndList: React.FC<ISectionSectionListImgAndListProps> = ({
  t,
  columns = 2,
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
        <ul
          className={clsx("grid gap-7", {
            "grid-cols-2": columns === 2,
            "grid-cols-3": columns === 3,
          })}
        >
          {Object.values(t.cards).map((card, index) => (
            <li key={card.id}>
              <h3 className="subTitleCl h-[4rem]">{card.title}</h3>
              {card.parametersList && (
                <NestedParameterDescList param={card.parametersList} />
              )}
              <div
                className="relative border border-gray-300 rounded-md overflow-hidden w-full h-[460px] mt-3 cursor-zoom-in"
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
              {card.parametersList2 && (
                <NestedParameterDescList param={card.parametersList2} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionListImgAndList;
