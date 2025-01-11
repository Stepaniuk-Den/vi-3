import Line from "@/app/components/Line";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import { INestedCardsSectionItem } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: { locale: string };
};
const WindowMullionsPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("WindowMullionsPage");
  const cardMullions = t.raw("card");
  const muntinTypesSection = t.raw("MuntinTypesSection");

  return (
    <>
      <section className="pageCl">
        <div className="container">
          <h1 className="titleCl pt-16">{t("title")}</h1>
          <Line className="marsala-center" color="marsala" />

          <div className="flex justify-between">
            <div className="relative w-1/2 h-[520px] border border-gray-300 rounded-md overflow-hidden">
              <Image
                sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                src={cardMullions.src || ""}
                alt={cardMullions.alt || ""}
                fill
                priority
              />
            </div>
            <div className="w-1/2">
              <p className="mb-2 pl-6">{cardMullions.description}</p>
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
