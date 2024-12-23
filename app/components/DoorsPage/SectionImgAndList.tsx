import Image from "next/image";
import React from "react";
import TitleBanner from "../TitleBanner";
import NestedParameterDescList from "../NestedParameterDescList";
import { ICard, IParameterItem } from "@/helpers/interfaces";

interface ISectionImgAndListProps {
  t: {
    title: string;
    cards: Record<string, ICard>;
  };
  isShowSecondList?: boolean;
}

const SectionImgAndList: React.FC<ISectionImgAndListProps> = ({
  t,
  isShowSecondList = false,
}) => {
  const renderParameterList = (parametersList: IParameterItem | undefined) => {
    if (!parametersList) return null;

    const { title, list } = parametersList;

    
    const formattedList = Object.fromEntries(
      Object.entries(list).map(([key, value]) => [
        key,
        { title: value.title, desc: value.desc },
      ])
    );

    return <NestedParameterDescList param={{ title, list: formattedList }} />;
  };

  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl">{t.title}</h2>
        </TitleBanner>
        {Object.values(t.cards).map((card) => (
          <div key={card.id} className="flex gap-24 mb-10">
            <div className="relative border border-gray-300 rounded-md overflow-hidden w-1/3 h-[460px]">
              <Image
                className="object-cover"
                sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                src={card.src}
                alt={card.alt || ""}
                fill
              />
            </div>
            <div className="flex flex-col gap-10 w-2/3">
              {renderParameterList(card.parametersList)}
              {isShowSecondList && renderParameterList(card.parametersList2)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionImgAndList;
