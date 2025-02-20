import Line from "@/app/components/Line";
import ModalTrigger from "@/app/components/ModalTrigger";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import { INestedCardsSectionItem } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "WindowsPage",
    "windowsElementsList",
    3,
    "windows",
    true
  );
}

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

          <div className="flex max-md:flex-col max-md:items-center gap-6 justify-between">
            <ModalTrigger
              className="relative w-full sm:max-md:max-w-[396px] md:w-1/2 h-[240px] sm:h-[332px] md:h-[312px] lg:h-[414px] xl:h-[520px] border border-gray-300 rounded-md overflow-hidden"
              src={cardMullions.src || ""}
              alt={cardMullions.alt || ""}
              img={[img]}
            />
            <div className="w-full sm:max-md:max-w-[396px] md:w-1/2">
              <p className="mb-2">{cardMullions.description}</p>
            </div>
          </div>
        </div>
      </section>

      <NestedCardsSection
        tSectionItem={muntinTypesSection as INestedCardsSectionItem}
        titleBanner={true}
        // size="max-w-[396px]"
        size="w-full sm:w-[396px] md:w-[356px] lg:w-[396px]"
        imgH="h-[240px] sm:h-[460px] md:h-[414px] lg:h-[460px]"
        imgFit="cover"
        positioning={"flexWrap"}
        isRow={false}
      />
    </>
  );
};

export default WindowMullionsPage;
