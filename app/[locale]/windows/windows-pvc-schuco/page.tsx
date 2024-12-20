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
    <>
      <section className="sectionCl pt-60">
        <div className="container">
          <h1 className="titleCl">{t("title")}</h1>
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
          size={idx === 0 ? "small" : "large"}
          // sectionIdx={idx}
        />
      ))}
    </>
  );
};

export default WindowsPVCSchucoPage;
