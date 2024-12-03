import { IItemCard } from "@/helpers/interfaces";
import ItemCard from "../ItemCard";
import Line from "../Line";

type Props = {
  t: {
    (key: string): string;
    raw: (key: string) => Record<string, IItemCard>;
  };
  tBtn: (key: string) => string;
};

const ElementsSection: React.FC<Props> = ({ t, tBtn }) => {
  const profilesList = Object.values(
    t.raw("windowsElementsList")
  ) as IItemCard[];

  return (
    <section className="sectionCl">
      <div className="container">
        <h2 className="titleCl mb-4">{t("elementsTitle")}</h2>
        <Line className="marsala-center" color="marsala" />
        <p className="mb-8">{t("elementsDesc")}</p>
        <ul className="flex flex-col justify-between gap-6">
          {profilesList.map((profileItem, idx) => (
            <ItemCard
              key={profileItem.id}
              title={profileItem.title}
              description={profileItem.description}
              src={profileItem.src}
              alt={profileItem.alt}
              tBtn={tBtn("see")}
              layout="horizontal"
              reverse={idx % 2 !== 0}
              background={idx % 2 === 0 ? "marsala" : ""}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ElementsSection;
