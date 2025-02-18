"use client";

import { INestedCard, INestedCardsSectionItem } from "@/helpers/interfaces";
import { useModal } from "./ModalProvider";
import NestedCard from "./NestedCard";
import NestedParameterDescList from "./NestedParameterDescList";
import TitleBanner from "./TitleBanner";
import clsx from "clsx";
import ModalSwiperContent from "./ModalSwiperContent";
// import { getImageDimensionValue } from "@/helpers/getImageDimensionValue";

type Props = {
  // tSectionItem: {
  //   title?: string;
  //   description?: string;
  //   [key: string]: string | INestedCard | IParametersList | undefined;
  //   // (key: string): string;
  //   // nestedCard?: INestedCard;

  //   parametersList?: IParametersList;
  // };

  tSectionItem: INestedCardsSectionItem;
  // sectionIdx: number;
  // titleBannerCard?: boolean;
  titleBanner?: boolean;
  width?: string;
  height?: string;
  size?: string;
  imgH?: string;
  classNameList?: string;
  // size?: "w-1/2" | "w-1/4" | "w-full";
  // isGrid?: boolean;
  // positioning?: "flex" | "grid2" | "grid3";
  positioning?: "flexWrap" | "grid";
  imgFit?: "cover" | "contain";
  isRow?: boolean;
  descReverse?: boolean;
};

const NestedCardsSection: React.FC<Props> = ({
  // sectionIdx,
  // titleBannerCard,
  tSectionItem,
  // width,
  // height,
  size,
  imgH,
  titleBanner,
  // isGrid = false,
  positioning,
  imgFit,
  isRow,
  descReverse = false,
  classNameList,
}) => {
  const nestedCardsList = Object.values(tSectionItem).filter(
    (item) => typeof item === "object" && "id" in item
  ) as INestedCard[];

  const slides = nestedCardsList.map((nestedCard) => ({
    id: nestedCard.id || "default-id",
    src:
      typeof nestedCard.src === "string"
        ? nestedCard.src
        : nestedCard.src?.src || "",
    alt: nestedCard.alt || "",
  }));

  const { openModal } = useModal();

  return (
    <section className="sectionCl">
      <div className="container">
        {titleBanner && (
          <TitleBanner>
            <h3 className="titleCl">{tSectionItem.title}</h3>
          </TitleBanner>
          // ) : (
          //       <>
          //         <h3 className="titleCl text-start">{tSectionItem.title}</h3>
          //         <Line className="marsala-left" color="marsala" />
          //       </>
        )}

        {tSectionItem.description && descReverse && (
          <p className="mb-5">{tSectionItem.description}</p>
        )}

        <ul
          className={clsx("flex justify-center gap-6", classNameList, {
            "flex-wrap": positioning === "flexWrap",
            "grid grid-cols-1 sm:grid-cols-2": positioning === "grid",
            // "flex justify-center": positioning === "flex",
            // "grid grid-cols-3": positioning === "grid3",
          })}
        >
          {nestedCardsList.map((nestedCard, idx) => {
            // const currentWidth = getImageDimensionValue(width, idx, "w-full");
            // const currentHeight = getImageDimensionValue(
            //   height,
            //   idx,
            //   "h-[460px]"
            // );
            return (
              <NestedCard
                key={nestedCard.id}
                title={nestedCard.title}
                description={nestedCard.description}
                src={nestedCard.src || ""}
                alt={nestedCard.alt || ""}
                size={size}
                imgH={imgH}
                isRow={isRow}
                imgFit={imgFit}
                onClick={() =>
                  openModal(
                    <ModalSwiperContent slides={slides} initialSlide={idx} />
                  )
                }
              // titleBannerCard={titleBannerCard}
              // layout="horizontal"
              // background={idx % 2 === 0 ? `${background}` : ""}
              />
            );
          })}
        </ul>

        {tSectionItem.description && !descReverse && (
          <p className="mt-5">{tSectionItem.description}</p>
        )}

        {tSectionItem.parametersList && (
          <ul>
            {Object.entries(tSectionItem.parametersList).map(([key, param]) => (
              <li key={key}>
                <NestedParameterDescList param={param} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default NestedCardsSection;
