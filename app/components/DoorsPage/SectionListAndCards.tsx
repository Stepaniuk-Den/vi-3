"use client";
import { IImgList, IParameterItem } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
import React from "react";
import NestedParameterDescList from "../NestedParameterDescList";
import NestedCard from "../NestedCard";
import TitleBanner from "../TitleBanner";
import clsx from "clsx";
import ModalSwiperContent from "../ModalSwiperContent";

interface ISectionListAndCardsProps {
  t: {
    title?: string;
    subTitle?: string;
    description?: string;
    description2?: string;
    parametersList: IParameterItem;
    parametersList2?: IParameterItem;
    imgList?: IImgList;
    raw: (key: string) => string;
  };
  isShowSecondList?: boolean;
  columns?: number;
}

const SectionListAndCards: React.FC<ISectionListAndCardsProps> = ({
  t,
  isShowSecondList = false,
  columns = 2,
}) => {
  const parametersList = t.parametersList;
  const parametersList2 = t.parametersList2;
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
        <TitleBanner>
          <h2 className="titleCl">{t.title}</h2>
        </TitleBanner>
        {t.description && (
          <p className="w-full font-bold pl-6 mb-2">{t.description}</p>
        )}
        {t.description2 && <p className=" pl-6 mb-2">{t.description2}</p>}
        {parametersList && <NestedParameterDescList param={parametersList} />}
        {t.subTitle && (
          <h3 className="subTitleCl mt-6 text-left">{t.subTitle}</h3>
        )}
        <ul
          className={clsx("grid gap-4 md:gap-7 pt-8","grid-cols-1",
          columns === 2 && "sm:grid-cols-2", 
          // columns >= 4 && "lg:grid-cols-4",
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
                    <ModalSwiperContent slides={images} initialSlide={index} />
                  )
                }
                imgFit="cover"
              />
            );
          })}
        </ul>
        {isShowSecondList && parametersList2 && (
          <NestedParameterDescList param={parametersList2} />
        )}
      </div>
    </section>
  );
};

export default SectionListAndCards;
