import React from "react";
import NestedParameterDescList from "../NestedParameterDescList";
import { IImgList, IParameterItem } from "@/helpers/interfaces";
import NestedCard from "../NestedCard";


interface ISectionListAndCardsProps {
  t: {
    title: string;
    description?: string;
    parametersList: IParameterItem;
    parametersList2?: IParameterItem;
    imgList?: IImgList;
    raw: (key: string) => string;
  };
  isShowSecondList?: boolean;
}

const SectionListAndCards: React.FC<ISectionListAndCardsProps> = ({ t,isShowSecondList = false, }) => {

  const parametersList = t.parametersList;
  const parametersList2 = t.parametersList2;
  const imgList = t.imgList ? Object.values(t.imgList) : [];

  return (
    <section className="sectionCl">
      <div className="container">
        {parametersList && (
          <NestedParameterDescList
            param={parametersList}
            titleBanner
            description
          />
        )}
        <ul className="grid grid-cols-2 gap-6 pt-4">
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
        {isShowSecondList && parametersList2 && (
          <NestedParameterDescList param={parametersList2} />
        )}
      </div>
    </section>
  );
};

export default SectionListAndCards;
