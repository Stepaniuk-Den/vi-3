import { IImgList, IParametersList } from "@/helpers/interfaces";
import React from "react";
import TitleBanner from "../TitleBanner";
import NestedParameterDescList from "../NestedParameterDescList";
import ImagesComponent from "../SlidingDoorsPage/ImagesComponent";

interface ISectionCardsAndListProps {
  t: {
    title?: string;
    subTitle?: string;
    parametersList: IParametersList;
    imgList?: IImgList;
    raw: (key: string) => string;
  };
}

const SectionCardsAndList: React.FC<ISectionCardsAndListProps> = ({ t }) => {
  const { title, subTitle, parametersList, imgList } = t;
  const images = imgList ? Object.values(imgList) : [];

  return (
    <section className="sectionCl">
      <div className="container">
        {title && (
          <TitleBanner>
            <h2 className="titleCl">{title}</h2>
          </TitleBanner>
        )}
        {subTitle && (
          <h3 className="subTitleCl xl:leading-none normal-case text-left mb-4">
            {subTitle}
          </h3>
        )}

        <ul className="flex flex-col sm:flex-row gap-4">
          <li className="w-full sm:w-1/3">
            <ImagesComponent
              className="flex flex-col relative"
              list={images.slice(0, 1)}
              width="w-full"
              height="h-[40rem]"
            />
          </li>
          <li className="w-full sm:w-2/3">
            <ImagesComponent
              className="flex flex-col relative sm:!gap-5 xl:!gap-4"
              list={images.slice(1, 3)}
              width="w-full"
              height="h-[18.5rem]"
              objTypeImg="object-contain"
            />
          </li>
        </ul>
        {Object.entries(parametersList).map(([key, param]) => (
          <NestedParameterDescList param={param} key={key} />
        ))}
      </div>
    </section>
  );
};

export default SectionCardsAndList;
