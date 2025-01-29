import ItemCard from "@/app/components/ItemCard";
import PageTopDescription from "@/app/components/PageTopDescription";
import { IItemCard } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const WindowsColoursPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("WindowsColoursPage");
  const tButtons = useTranslations("Buttons");
  const coloursList = Object.values(t.raw("coloursList")) as IItemCard[];

  return (
    <>
      <PageTopDescription t={t} />

      <section className="sectionCl">
        <div className="container">
          <ul className="flex justify-center items-center flex-row flex-wrap xl:flex-nowrap gap-6">
            {coloursList.map((colourItem) => (
              <li className="w-[292px]" key={colourItem.id}>
                <ItemCard
                  description={colourItem.description}
                  src={colourItem.src}
                  alt={colourItem.alt}
                  tBtn={tButtons("see")}
                  alignment="end"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default WindowsColoursPage;
