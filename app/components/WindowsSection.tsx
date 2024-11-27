import { IItemCard } from "@/helpers/interfaces";
import ItemCard from "./ItemCard";

type Props = {
  t: {
    (key: string): string;
    raw: (key: string) => Record<string, IItemCard>;
  };
  // t: (key: string) => string | Record<string, IItemCard>;
};
const WindowsSection: React.FC<Props> = ({ t }) => {
  //   setRequestLocale(locale);
  //   const typesList = t("types") as Record<string, IItemCard>;

  const typesList = Object.values(t.raw("typesList")) as IItemCard[];

  return (
    <section>
      <div className="xl:container ">
        <h2 className="sr-only">{t("title")}</h2>
        <ul className="flex justify-between">
          {typesList.map((typeItem) => (
            <li key={typeItem.id} className="">
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

export default WindowsSection;

// "description": "Опис та ціни на Windows PVC в Укра��ні."

// import { setRequestLocale } from "next-intl/server";
// // import ItemCard from "./ItemCard";
// import { useTranslations } from "next-intl";

// type Props = {
//   params: { locale: string };
// };
// const WindowsSection: React.FC<Props> = ({ params: { locale } }) => {
//   //   setRequestLocale(this.props.params.locale)
//   setRequestLocale(locale);

//   const t = useTranslations("Windows");

//   return (
//     <div>
//       <h2>{t("title")}</h2>
//       {/* <ItemCard t={t} /> */}
//     </div>
//   );
// };

// export default WindowsSection;
