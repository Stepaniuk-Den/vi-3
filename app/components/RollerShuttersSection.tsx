import { IItemCard } from "@/helpers/interfaces";
import ItemCard from "./ItemCard";

type Props = {
  t: {
    (key: string): string;
    raw: (key: string) => Record<string, IItemCard>;
  };
};
const RollerShuttersSection: React.FC<Props> = ({ t }) => {
  const doorsTypesList = Object.values(
    t.raw("rollerShuttersTypesList")
  ) as IItemCard[];

  return (
    <section className="sectionCl">
      <div className="xl:container ">
        <h2 className="titleCl mb-4">{t("title")}</h2>
        {/* <Line className="marsala-center" /> */}
        <p className="mb-8">{t("description")}</p>
        <ul className="flex justify-between gap-4">
          {doorsTypesList.map((typeItem, idx) => (
            <ItemCard
              key={typeItem.id}
              title={typeItem.title}
              description={typeItem.description}
              src={typeItem.src}
              alt={typeItem.alt}
              btnOffset={idx === 0 ? "-mt-3" : ""}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RollerShuttersSection;
