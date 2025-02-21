import { IItemCard } from "@/helpers/interfaces";
import ItemCard from "./ItemCard";

type Props = {
  t: {
    (key: string): string;
    raw: (key: string) => Record<string, IItemCard>;
  };
  tBtn: (key: string) => string;
  // t: (key: string) => string | Record<string, IItemCard>;
};
const WindowsSection: React.FC<Props> = ({ t, tBtn }) => {
  //   setRequestLocale(locale);
  //   const typesList = t("types") as Record<string, IItemCard>;

  const windowsTypesList = Object.values(
    t.raw("windowsTypesList")
  ) as IItemCard[];

  return (
    <section className="sectionCl">
      <div className="container">
        <h2 className="sr-only">{t("title")}</h2>
        <ul className="flex flex-col md:flex-row justify-between md:gap-4 lg:gap-20">
          {windowsTypesList.map((typeItem) => (
            <li className="flex-1" key={typeItem.id}>
              <ItemCard
                title={typeItem.title}
                description={typeItem.description}
                src={typeItem.src}
                alt={typeItem.alt}
                tBtn={tBtn("see")}
                alignment="end"
                slug={typeItem.slug}
                path="windows"
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
