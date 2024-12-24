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

        <ul className="flex">
          <li className="mr-4 w-1/3">
            <div className="relative border border-gray-300 rounded-md overflow-hidden w-full h-[39rem] mb-2">
              <Image
                className="object-cover"
                src={images[0]?.src}
                alt={images[0]?.alt || ""}
                sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                fill
              />
            </div>
            {images[0]?.description && <p>{images[0]?.description}</p>}
          </li>

          <li className="flex flex-col w-2/3 gap-2">
            {images.slice(1, 3).map((img, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative border border-gray-300 rounded-md overflow-hidden w-full h-[18rem] mb-2">
                  <Image
                    className="object-contain"
                    src={img.src}
                    alt={img.alt || ""}
                    sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                    fill
                  />
                </div>
                {img.description && <p className="mb-2">{img.description}</p>}
              </div>
            ))}
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

