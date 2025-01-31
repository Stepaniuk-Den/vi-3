import Line from "@/app/components/Line";
import ModalTrigger from "@/app/components/ModalTrigger";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import { INestedCardsSectionItem } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};
const WindowMullionsPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("WindowMullionsPage");
  const cardMullions = t.raw("card");
  const muntinTypesSection = t.raw("MuntinTypesSection");

  const img = {
    id: cardMullions.id || "",
    src: cardMullions.src || "",
    alt: cardMullions.alt || "",
  };

  return (
    <>
      <section className="pageCl">
        <div className="container">
          <h1 className="titleCl pt-16">{t("title")}</h1>
          <Line className="marsala-center" color="marsala" />

          <div className="flex max-md:flex-col max-md:items-center max-md:gap-6 justify-between">
            <ModalTrigger
              className="relative max-md:max-w-[396px] w-full md:w-1/2 h-[332px] md:h-[312px] lg:h-[414px] xl:h-[520px] border border-gray-300 rounded-md overflow-hidden"
              src={cardMullions.src || ""}
              alt={cardMullions.alt || ""}
              img={img}
            />
            <div className="max-md:max-w-[396px] w-full md:w-1/2">
              <p className="mb-2 md:pl-6">{cardMullions.description}</p>
            </div>
          </div>
        </div>
      </section>

      <NestedCardsSection
        tSectionItem={muntinTypesSection as INestedCardsSectionItem}
        titleBanner={true}
        size={"max-w-[396px]"}
        positioning={"flexWrap"}
        isRow={false}
      />
    </>
  );
};

export default WindowMullionsPage;
