import React from "react";
import ImagesComponent from "../SlidingDoorsPage/ImagesComponent";
import { IImgList } from "@/helpers/interfaces";
import TitleBanner from "../TitleBanner";
import NestedCard from "../NestedCard";

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

  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl">{t.title}</h2>
        </TitleBanner>
        <ImagesComponent
          className="mb-7 justify-around"
          list={imgList.slice(0, 3)}
          width="w-[16rem]"
          height="h-[16rem]"
        />
        {isCards && (
          <ul className="grid grid-cols-3 gap-6">
            {imgList.slice(3, 6).map((card) => {
              return (
                <NestedCard
                  key={card.id}
                  title={card.title}
                  src={card.src}
                  alt={card.alt}
                  size="w-full"
                  description={card.description}
                  isRow={false}
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
