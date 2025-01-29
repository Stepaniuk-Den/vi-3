import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Line from "@/app/components/Line";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import {
  INestedCardsSectionItem,
  INestedCardsSectionsList,
} from "@/helpers/interfaces";

type Props = {
  params: { locale: string };
};

const WindowsPVCSchucoPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("WindowsPVCSchucoPage");

  const tSectionsList = t.raw("SectionsList") as INestedCardsSectionsList;

  return (
    <div className="pb-24">
      <section className="pageCl">
        <div className="container">
          <h1 className="titleCl pt-16">{t("title")}</h1>
          <h2 className="subTitleCl mt-5 text-center">{t("subtitle")}</h2>
          <Line className="marsala-center" color="marsala" />
          <p className="mb-4">{t("description")}</p>
        </div>
      </section>
      {Object.values(tSectionsList).map((tSectionItem, idx) => (
        <NestedCardsSection
          key={idx}
          tSectionItem={tSectionItem as INestedCardsSectionItem}
          titleBanner={true}
          // titleBannerCard={idx === 0}
          size={idx === 0 ? "w-[212px] md:w-1/4" : "w-[380px] md:flex-1"}
          imgH={
            idx === 0
              ? "h-[288px] md:h-[290px] lg:h-[360px] xl:h-[460px]"
              : "h-[360px] lg:h-[368px] xl:h-[460px]"
          }
          positioning="flexWrap"
          // isRow={false}
          // sectionIdx={idx}
        />
      ))}
    </div>
  );
};

export default WindowsPVCSchucoPage;
