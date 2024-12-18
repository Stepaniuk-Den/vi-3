import { IItemCard } from "@/helpers/interfaces";
import ItemCard from "./ItemCard";

type Props = {
  t: {
    (key: string): string;
    raw: (key: string) => Record<string, IItemCard>;
  };
  tBtn: (key: string) => string;
};
const RollerShuttersSection: React.FC<Props> = ({ t, tBtn }) => {
  const doorsTypesList = Object.values(
    t.raw("rollerShuttersTypesList")
  ) as IItemCard[];

  return (
    <section className="sectionCl">
      <div className="container">
        <h2 className="titleCl mb-4">{t("title")}</h2>
        {/* <Line className="marsala-center" /> */}
        <p className="mb-8">{t("description")}</p>
        <ul className="flex flex-col lg:flex-row justify-between gap-4">
          {doorsTypesList.map((typeItem, idx) => (
            <li key={typeItem.id}>
              <ItemCard
                title={typeItem.title}
                description={typeItem.description}
                src={typeItem.src}
                alt={typeItem.alt}
                btnOffset={idx === 0 ? "-mt-3" : ""}
                tBtn={tBtn("see")}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RollerShuttersSection;
