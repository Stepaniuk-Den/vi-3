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
        <h2 className="titleCl">{t("title")}</h2>
        <p className="mb-6">{t("description")}</p>
        <ul className="flex justify-between gap-5">
          {doorsTypesList.map((typeItem) => (
            <li key={typeItem.id}>
              <ItemCard
                title={typeItem.title}
                description={typeItem.description}
                src={typeItem.src}
                alt={typeItem.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RollerShuttersSection;