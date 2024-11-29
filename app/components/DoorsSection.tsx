import { IItemCard } from "@/helpers/interfaces";
import ItemCard from "./ItemCard";

type Props = {
  t: {
    (key: string): string;
    raw: (key: string) => Record<string, IItemCard>;
  };
};
const DoorsSection: React.FC<Props> = ({ t }) => {
  const doorsTypesList = Object.values(t.raw("doorsTypesList")) as IItemCard[];

  return (
    <section className="sectionCl">
      <div className="xl:container ">
        <h2 className="titleCl mb-4">{t("title")}</h2>
        {/* <Line className="marsala-center" /> */}
        <p className="mb-8">{t("description")}</p>
        <ul className="flex justify-between gap-20">
          {doorsTypesList.map((typeItem) => (
            <ItemCard
              key={typeItem.id}
              title={typeItem.title}
              description={typeItem.description}
              src={typeItem.src}
              alt={typeItem.alt}
              className={typeItem.id === "1" ? "max-w-3xl" : "max-w-[400px]"}
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
