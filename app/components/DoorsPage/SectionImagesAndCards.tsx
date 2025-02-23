"use client";
import { IImgList } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
import { imgHeight } from "@/helpers/imgHeight";
import React from "react";
import ImagesComponent from "../SlidingDoorsPage/ImagesComponent";
import TitleBanner from "../TitleBanner";
import NestedCard from "../NestedCard";
import ModalSwiperContent from "../ModalSwiperContent";

interface ISectionImagesAndCards {
  t: {
    title: string;
    imgList?: IImgList;
  };
  isCards?: boolean;
}

const SectionImagesAndCards: React.FC<ISectionImagesAndCards> = ({
  t,
  isCards = true,
}) => {
  const imgList = t.imgList ? Object.values(t.imgList) : [];
  const cardSlides = imgList.slice(3, 6).map((img) => ({
    id: img.id,
    src: img.src,
    alt: img.alt,
  }));

  const { openModal } = useModal();

  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{t.title}</h3>
        </TitleBanner>
        <ImagesComponent
          className="justify-around"
          list={imgList.slice(0, 3)}
          width="w-[10rem] sm:w-[16rem]"
          height="h-[6rem] sm:h-[16rem]"
        />
        {isCards && (
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {imgList.slice(3, 6).map((card, index) => {
              return (
                <NestedCard
                  key={card.id}
                  title={card.title}
                  src={card.src}
                  alt={card.alt}
                  size="w-full"
                  description={card.description}
                  isRow={false}
                  imgH={imgHeight}
                  onClick={() =>
                    openModal(
                      <ModalSwiperContent
                        slides={cardSlides}
                        initialSlide={index}
                      />
                    )
                  }
                  imgFit="cover"
                />
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default SectionImagesAndCards;
