"use client";

import { IItemCard } from "@/helpers/interfaces";
import React from "react";
import ItemCard from "../ItemCard";
import { useModal } from "../ModalProvider";
import ModalSwiperContent from "../ModalSwiperContent";

type Props = {
  tButtons: string;
  coloursList: IItemCard[];
};

const ColourPalettesSection: React.FC<Props> = ({ tButtons, coloursList }) => {
  const { openModal } = useModal();
  const images = coloursList.map((img) => ({
    id: img.id || "",
    src: img.src || "",
    alt: img.alt || "",
  }));

  return (
    <section className="sectionCl">
      <div className="container">
        <ul className="flex justify-center items-center flex-row flex-wrap xl:flex-nowrap gap-6">
          {coloursList.map((colourItem, idx) => (
            <li
              className="w-full sm:w-[292px] md:w-[350px] lg:w-[310px] xl:w-[292px]"
              key={colourItem.id}
            >
              <ItemCard
                description={colourItem.description}
                src={colourItem.src}
                alt={colourItem.alt}
                tBtn={tButtons}
                alignment="end"
                imgH="h-[240px] sm:h-[360px]"
                onClick={() =>
                  openModal(
                    <ModalSwiperContent slides={images} initialSlide={idx} />
                  )
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ColourPalettesSection;
