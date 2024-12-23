import { IImgList, IParametersList } from "@/helpers/interfaces";
import React from "react";
import TitleBanner from "../TitleBanner";
import Image from "next/image";
import NestedParameterDescList from "../NestedParameterDescList";

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
  const parametersList = t.parametersList;
  const imgList = t.imgList ? Object.values(t.imgList) : [];

  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl">{t.title}</h2>
        </TitleBanner>
        <h3 className="subTitleCl xl:leading-none normal-case text-left mb-4">
          {t.subTitle}
        </h3>
        <ul className="flex">
          <li className="mr-4 w-1/3">
            <div className="relative border border-gray-300 rounded-md overflow-hidden w-full h-[39rem] mb-2">
              <Image
                className="object-cover"
                src={imgList[0].src}
                alt={imgList[0].alt}
                sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                fill
              />
            </div>
            <p>{imgList[0].description}</p>
          </li>

          <li className="flex flex-col w-2/3">
            <div className="relative border border-gray-300 rounded-md overflow-hidden w-full h-[18rem] mb-2">
              <Image
                className="object-contain"
                src={imgList[1].src}
                alt={imgList[1].alt}
                sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                fill
              />
            </div>
            <p className="mb-4">{imgList[1].description}</p>
            <div className="relative border border-gray-300 rounded-md overflow-hidden w-full h-[18rem] mb-2">
              <Image
                className="object-contain"
                src={imgList[2].src}
                alt={imgList[2].alt}
                sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                fill
              />
            </div>
            <p>{imgList[2].description}</p>
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
