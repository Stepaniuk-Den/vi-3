import { IParameterItem } from "@/helpers/interfaces";
import { renderNestedParameterLists } from "@/helpers/renderNestedParameterLists";
import Image from "next/image";
import React from "react";
import TitleBanner from "../TitleBanner";

interface ISectionImgAndListProps {
  t: {
    img: string;
    title: string;
    parametersList?: Record<string, IParameterItem>;
  };
  t2: {
    raw: (key: string) => unknown;
  };
  source: string;
  isTitleBanner: boolean;
  isDescription: boolean;
}

const SectionImgAndList: React.FC<ISectionImgAndListProps> = ({
  t,
  t2,
  source,
  isTitleBanner,
  isDescription,
}) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl">{t.title}</h2>
        </TitleBanner>
        <div className="flex flex-row gap-7 justify-between">
          <div className="relative border border-gray-300 rounded-md overflow-hidden w-1/3 h-[320px]">
            <Image
              className="object-cover"
              src={t.img}
              alt={source}
              fill
              priority
            />
          </div>
          {renderNestedParameterLists(t2, source, isTitleBanner, isDescription)}
        </div>
      </div>
    </section>
  );
};

export default SectionImgAndList;
