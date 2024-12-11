import SectionBannerAndList from "@/app/components/DoorsPage/SectionBannerAndList";
import SectionCardsAndBanner from "@/app/components/DoorsPage/SectionCardsAndBanner";
import SinglePageDescription from "@/app/components/DoorsPage/SinglePageDescription";
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




  return (
      <section className="sectionCl pt-60">
       <SinglePageDescription t={t}/>
       {/* <SectionBannerAndList t={bannerT}/> */}
       <SectionBannerAndList t={t.raw("SchucoProfile82Section")} />
       <SectionCardsAndBanner t={t.raw("CardsSchuco82Section")}/>
      </section>
  );
};

export default DoorsPvcSchuco;

