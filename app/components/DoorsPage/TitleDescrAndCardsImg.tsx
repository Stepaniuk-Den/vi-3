"use client";

import { useModal } from "../ModalProvider";
import { IImgList } from "@/helpers/interfaces";
import React from "react";
import NestedCard from "../NestedCard";
import clsx from "clsx";
import ModalSwiperContent from "../ModalSwiperContent";

export interface IItemsProps {
  id: string;
  title: string;
  description?: string;
  imgList: IImgList;
}

const TitleDescrAndCardsImg: React.FC<{ t: IItemsProps; columns?: number }> = ({
  t,
  columns = 3,
}) => {
  const imgList = t.imgList ? Object.values(t.imgList) : [];

  const { openModal } = useModal();

  return (
    <div className="mt-10">
      <h3 className="subTitleCl font-bold">{t.title}</h3>
      {t.description && <p className="mt-2">{t.description}</p>}
      <ul
        className={clsx("grid gap-7 pt-8","grid-cols-1", 
        //   {
        //   "grid-cols-1": columns === 1,
        //   "grid-cols-3": columns === 3,
        //   "grid-cols-4": columns === 4,
        // }
        columns >= 2 && "sm:grid-cols-2", 
          columns >= 4 && "lg:grid-cols-4",
          columns === 3 && "sm:grid-cols-3"
      )}
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
                  <ModalSwiperContent slides={imgList} initialSlide={index} />
                )
              }
              imgFit="cover"
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TitleDescrAndCardsImg;
