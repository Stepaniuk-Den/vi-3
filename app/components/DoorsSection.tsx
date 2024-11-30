import { IItemCard } from "@/helpers/interfaces";
import ItemCard from "./ItemCard";

type Props = {
  t: {
    (key: string): string;
    raw: (key: string) => Record<string, IItemCard>;
  };
  tBtn: (key: string) => string;
};
const DoorsSection: React.FC<Props> = ({ t, tBtn }) => {
  const doorsTypesList = Object.values(t.raw("doorsTypesList")) as IItemCard[];

  return (
    <section className="sectionCl">
      <div className="container">
        <h2 className="titleCl mb-4">{t("title")}</h2>
        {/* <Line className="marsala-center" /> */}
        <p className="mb-8">{t("description")}</p>
        <ul className="flex flex-col lg:flex-row justify-between gap-20">
          {doorsTypesList.map((typeItem) => (
            <ItemCard
              key={typeItem.id}
              title={typeItem.title}
              description={typeItem.description}
              src={typeItem.src}
              alt={typeItem.alt}
              className={typeItem.id === "1" ? "max-w-3xl" : "max-w-[400px]"}
              tBtn={tBtn("see")}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DoorsSection;

// Вхідні та терасові двері
// Front and terrace doors
