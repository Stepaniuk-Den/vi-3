import { IItemCard } from "@/helpers/interfaces";
import React from "react";
import ItemCard from "../ItemCard";
import TitleBanner from "../TitleBanner";

interface ISectionPaletteCardsProps {
  t: {
    (key: string): string;
    raw: (key: string) => Record<string, IItemCard>;
  };
  tBtn: (key: string) => string;
}

const SectionPaletteCards: React.FC<ISectionPaletteCardsProps> = ({
  t,
  tBtn,
}) => {
  const cards = Object.values(t.raw("cards")) as IItemCard[];

  return (
    <section>
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl pt-16">{t("subTitle")}</h2>
        </TitleBanner>
        <ul className="flex flex-col lg:flex-row justify-between gap-20">
          {cards.map((card) => (
            <ItemCard
              key={card.id}
              title={card.title}
              description={card.description}
              src={card.src}
              alt={card.alt}
              path="doors/door-fillings-panels-for-doors"
              slug={card.slug}
              tBtn={tBtn("see")}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionPaletteCards;
