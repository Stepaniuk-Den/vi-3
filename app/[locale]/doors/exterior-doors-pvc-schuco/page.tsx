import SectionBannerAndList from "@/app/components/DoorsPage/SectionBannerAndList";
import SectionCardsAndBanner from "@/app/components/DoorsPage/SectionCardsAndBanner";
import SinglePageDescription from "@/app/components/DoorsPage/SinglePageDescription";
// import NestedCardsSection from "@/app/components/NestedCardsSection";
import NestedParameterDescList from "@/app/components/NestedParameterDescList";
import { IParameterItem } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";



type Props = {
  params: { locale: string };
};

const DoorsPvcSchuco: React.FC<Props> =({ params: { locale } })=>{
  setRequestLocale(locale);

  // const descriptionT = useTranslations("PVCDoorsSchuco");
  const t = useTranslations("PVCDoorsSchucoPage");
  // const bannerT = useTranslations("SchucoProfile82");
  // const cardsT = useTranslations("CardsSchuco82");

  // const parametersList = t.raw("CardsSchuco82Section.parametersList");
  const parametersList = t.raw("CardsSchuco82Section.parametersList") as Record<string, IParameterItem>;

  return (
      <section className="sectionCl pt-60">
       <SinglePageDescription t={t}/>
       {/* <SectionBannerAndList t={bannerT}/> */}
       <SectionCardsAndBanner t={t.raw("SchucoProfilesSection")} isShowtitle={true} isShowNested={false}/>
       <SectionBannerAndList t={t.raw("SchucoProfile82Section")} />
       <SectionCardsAndBanner t={t.raw("CardsSchuco82Section")} isShowtitle={false} isShowNested={true}/>
       <section>
        <div className="container">
       {Object.entries(parametersList).map(([key, param]) => (
        <NestedParameterDescList key={key} param={param} titleBanner={true} description={true} />
      ))}</div></section>
      </section>
  );
};

export default DoorsPvcSchuco;

