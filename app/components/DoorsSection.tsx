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
  // console.log("🚀 ~ doorsTypesList:", doorsTypesList);

  return (
    <section className="sectionCl">
      <div className="xl:container ">
        <h2 className="titleCl">{t("title")}</h2>
        <p className="mb-6">{t("description")}</p>
        <ul className="flex justify-between">
          {doorsTypesList.map((typeItem, idx) => (
            <li key={typeItem.id}>
              <ItemCard
                title={typeItem.title}
                description={typeItem.description}
                src={typeItem.src}
                alt={typeItem.alt}
                className={idx === 0 ? "max-w-3xl" : "max-w-md"}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DoorsSection;

// Вхідні та терасові двері
// Front and terrace doors
