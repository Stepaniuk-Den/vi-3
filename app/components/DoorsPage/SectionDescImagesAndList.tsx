import { IParameterItem } from "@/helpers/interfaces";
import React from "react";
import TitleBanner from "../TitleBanner";
import NestedParameterDescList from "../NestedParameterDescList";
import TitleDescrAndCardsImg, { IItemsProps } from "./TitleDescrAndCardsImg";

interface ISectionDescImagesAndListProps {
  t: {
    title: string;
    description?: string;
    items: Record<string, IItemsProps>;
    parametersList?: IParameterItem;
    raw: (key: string) => string;
  };
  isShowNext?: boolean;
}

const SectionDescImagesAndList: React.FC<ISectionDescImagesAndListProps> = ({
  t,
  isShowNext = true,
}) => {
  const parametersList = t.parametersList;

  const firstItem = t.items["1"];
  const secondItem = t.items["2"];
  const thirdItem = t.items["3"];

  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl">{t.title}</h2>
        </TitleBanner>
        <p>{t.description}</p>
        <TitleDescrAndCardsImg t={firstItem} />
        {parametersList && <NestedParameterDescList param={parametersList} />}
        {isShowNext && (
          <>
            <TitleDescrAndCardsImg t={secondItem} columns={4} />
            <TitleDescrAndCardsImg t={thirdItem} columns={1} />
          </>
        )}
      </div>
    </section>
  );
};

export default SectionDescImagesAndList;
