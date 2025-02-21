import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Line from "@/app/components/Line";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import {
  INestedCardsSectionItem,
  INestedCardsSectionsList,
} from "@/helpers/interfaces";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import Observer from "@/helpers/observer";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "WindowsPage",
    "windowsProfilesList",
    1,
    "windows",
    true
  );
}

const WindowsPVCSchucoPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("WindowsPVCSchucoPage");

  const tSectionsList = t.raw("SectionsList") as INestedCardsSectionsList;

  return (
    <>
      <section className="pageCl">
        <div className="container">
          <Observer
            animation="zoom-in"
            duration="0.8s"
            classNameObserver="flex justify-center"
            classNameChild="laser-text"
          >
            <h1 className="titleCl mt-16" data-text={t("title")}>
              {t("title")}
            </h1>
          </Observer>
          <Observer
            animation="zoom-in"
            duration="0.8s"
            classNameObserver="flex justify-center"
            classNameChild="laser-text"
          >
            <h2
              className="subTitleCl mt-5 text-center"
              data-text={t("subtitle")}
            >
              {t("subtitle")}
            </h2>
          </Observer>
          <Observer animation="zoom-in-line" duration="0.8s">
            <Line className="marsala-center" color="marsala" />
          </Observer>
          <Observer animation="zoom-in">
            <p>{t("description")}</p>
          </Observer>
        </div>
      </section>
      {Object.values(tSectionsList).map((tSectionItem, idx) => (
        <NestedCardsSection
          key={idx}
          tSectionItem={tSectionItem as INestedCardsSectionItem}
          titleBanner={true}
          // titleBannerCard={idx === 0}
          size={idx === 0 ? "w-full sm:w-1/4" : "w-full sm:w-[380px] md:flex-1"}
          imgH={
            idx === 0
              ? "h-[240px] sm:h-[155px] md:h-[184px] lg:h-[246px] xl:h-[310px]"
              : "h-[240px] md:h-[360px] lg:h-[368px] xl:h-[460px]"
          }
          positioning="flexWrap"
          imgFit="cover"
          // isRow={false}
          // sectionIdx={idx}
        />
      ))}
    </>
  );
};

export default WindowsPVCSchucoPage;
