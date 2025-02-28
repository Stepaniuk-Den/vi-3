"use client";

import { IImgList } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
import { imgHeight } from "@/helpers/imgHeight";
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
  mobileOrder?: string[];
  bigMobOrder?: string[];
}

const SectionDescrAndCards: React.FC<ISectionDescrAndCards> = ({
  t,
  columns = 2,
  mobileOrder = [],
  bigMobOrder = [],
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
        </div>
        <ul
          className={clsx(
            "grid gap-4 md:gap-7 pt-4",
            "grid-cols-1",
            columns === 2 && "sm:grid-cols-2",
            columns === 4 && "sm:grid-cols-2 lg:grid-cols-4"
          )}
        >
          {imgList.map((card, index) => {
            return (
              <NestedCard
                key={card.id}
                className={clsx(
                  mobileOrder[index] ?? "",
                  bigMobOrder[index] ? bigMobOrder[index] : ""
                )}
                title={card.title}
                src={card.src}
                alt={card.alt}
                size="w-full"
                description={card.description}
                isRow={false}
                imgH={imgHeight}
                onClick={() =>
                  openModal(
                    <ModalSwiperContent slides={images} initialSlide={index} />
                  )
                }
                imgFit="cover"
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionDescrAndCards;
