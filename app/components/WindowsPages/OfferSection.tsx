import { IItemCard } from "@/helpers/interfaces";
import TitleBanner from "../TitleBanner";
import ItemCard from "../ItemCard";

type Props = {
  t: {
    // (key: string): string;
    // (key: string): Record<string, IItemCard>;
    // raw: (key: string) => Record<string, IItemCard>;
    // raw: (key: string) => {
    //     windowsSlug?: string;
    //   title?: string;
    //     description?: string;
    //     src?: string;
    //     alt?: string;
    //   [key: string]: string | undefined;
    // };

    title: string;
    [key: string]: string | IItemCard;
  };
  tBtn: (key: string) => string;
};

const OfferSection: React.FC<Props> = ({ t, tBtn }) => {
  //   console.log("🚀 ~ t:", t);

  const cardItem = t.cardItem as IItemCard;
  //   console.log("🚀 ~ cardItem:", cardItem);
  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{t.title}</h3>
        </TitleBanner>

        <ItemCard
          title={cardItem.title}
          description={cardItem.description}
          src={cardItem.src}
          alt={cardItem.alt}
          tBtn={tBtn("see")}
          layout="horizontal"
          //   background={"marsala"}
          slug={cardItem.slug}
          className="text-center"
          alignment="center"
          //   path={path}
        />
      </div>
    </section>
  );
};

export default OfferSection;
