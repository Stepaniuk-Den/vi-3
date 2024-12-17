import { INestedCard, INestedCardsSectionItem } from "@/helpers/interfaces";
import NestedCard from "./NestedCard";
import NestedParameterDescList from "./NestedParameterDescList";
import TitleBanner from "./TitleBanner";

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
  sectionIdx?: number;
  size?: "small" | "large";
  titleBanner?: boolean;
  // titleBannerCard?: boolean;
};

const NestedCardsSection: React.FC<Props> = ({
  tSectionItem,
  size,
  titleBanner,
  // sectionIdx,
  // titleBannerCard,
}) => {
  // console.log("🚀 ~ tSectionItem:", tSectionItem);

  const nestedCardsList = Object.values(tSectionItem).filter(
    (item) => typeof item === "object" && "id" in item
  ) as INestedCard[];
  // console.log("🚀 ~ nestedCardsList:", nestedCardsList);
  // console.log(tSectionItem.parametersList);

  // const size = sectionIdx === 0 ? "small" : "large";

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

        <ul className="flex justify-center gap-6">
          {nestedCardsList.map((nestedCard) => (
            <NestedCard
              key={nestedCard.id}
              title={nestedCard.title}
              description={nestedCard.description}
              src={nestedCard.src}
              alt={nestedCard.alt}
              size={size}
              // titleBannerCard={titleBannerCard}
              // layout="horizontal"
              // background={idx % 2 === 0 ? `${background}` : ""}
            />
          ))}
        </ul>

        {tSectionItem.description && (
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
