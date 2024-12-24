import { IImgList } from "@/helpers/interfaces";
import clsx from "clsx";
import React from "react";
import NestedCard from "../NestedCard";

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
          {imgList.map((card) => {
            return (
              <NestedCard
                key={card.id}
                title={card.title}
                src={card.src}
                alt={card.alt}
                size="large"
                description={card.description}
                isRow={false}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionDescrAndCards;
