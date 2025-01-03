"use client";

import { IImgList } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
import clsx from "clsx";
import React from "react";
import NestedCard from "../NestedCard";
import ModalSwiperContent from "../ModalSwiperContent";

interface ISectionDescrAndCards {
  t: {
    title: string;
    subTitle?: string;
    subTitle2?: string;
    imgList: IImgList;
    raw: (key: string) => string;
  };
  columns?: number;
}

const SectionDescrAndCards: React.FC<ISectionDescrAndCards> = ({
  t,
  columns = 2,
}) => {
  const imgList = t.imgList ? Object.values(t.imgList) : [];
  const images = imgList.map((img) => ({
    id: img.id,
    src: img.src,
    alt: img.alt,
  }));

  const { openModal } = useModal();

  return (
    <section className="sectionCl">
      <div className="container">
        <h3 className="subTitleCl mt-6 text-left mb-4">{t.title}</h3>
        <div className="flex justify-between gap-16">
          <h3 className="subTitleCl xl:leading-none normal-case text-center mr-auto">
            {t.subTitle}
          </h3>
          <h3 className="subTitleCl xl:leading-none normal-case text-center mr-auto">
            {t.subTitle2}
          </h3>
        </div>
        <ul
          className={clsx("grid gap-7 pt-4", {
            "grid-cols-2": columns === 2,
            "grid-cols-4": columns === 4,
          })}
        >
          {imgList.map((card, index) => {
            return (
              <NestedCard
                key={card.id}
                title={card.title}
                src={card.src}
                alt={card.alt}
                size="w-full"
                description={card.description}
                isRow={false}
                onClick={() =>
                  openModal(
                    <ModalSwiperContent slides={images} initialSlide={index} />
                  )
                }
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionDescrAndCards;
