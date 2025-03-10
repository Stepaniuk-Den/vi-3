import { IImgList, IParameterItem } from "@/helpers/interfaces";
import { imgHeight } from "@/helpers/imgHeight";
import React from "react";
import TitleBanner from "../TitleBanner";
import ImagesComponent from "../SlidingDoorsPage/ImagesComponent";
import NestedParameterDescList from "../NestedParameterDescList";
import Observer from "@/helpers/observer";

interface ISectionTwoImgAndListProps {
  t: {
    title: string;
    description: string;
    imgList?: IImgList;
    parametersList?: IParameterItem;
  };
  isCards?: boolean;
}

const SectionTwoImgAndList: React.FC<ISectionTwoImgAndListProps> = ({ t }) => {
  const { title, description, imgList, parametersList } = t;
  const images = imgList ? Object.values(imgList) : [];

  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl">{title}</h2>
        </TitleBanner>
        <div className="flex flex-col lg:flex-row gap-4">
          <ImagesComponent
            className="lg:mb-7 justify-around"
            list={images.slice(0, 1)}
            width="w-full lg:w-[16rem]"
            height={imgHeight}
          />
          <div className="flex flex-col gap-5 lg:pt-5">
          <Observer threshold={1} animation="zoom-in">
            <p>{description}</p></Observer>
            {parametersList && (
              <NestedParameterDescList param={parametersList} />
            )}
          </div>
          <ImagesComponent
            className="lg:mb-7 justify-around"
            list={images.slice(1, 2)}
            width="w-full lg:w-[16rem]"
            height={imgHeight}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwoImgAndList;
