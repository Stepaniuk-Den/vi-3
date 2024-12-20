import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import SectionImagesAndCards from "@/app/components/DoorsPage/SectionImagesAndCards";
import SectionImgAndList from "@/app/components/DoorsPage/SectionImgAndList";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const DoorsPvcKommerling: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("PVCDoorsKommerlingPage");

  return (
      <section className="pageCl">
        <SectionCarouselAndDescr t={t} />
        <SectionImgAndList t={t.raw("FeaturesKommerling76Section")} />
        <NestedCardsSection
          tSectionItem={t.raw("OutwardDoors76Section")}
          titleBanner
          size="large"
          isRow={false}
        />
        <NestedCardsSection
          tSectionItem={t.raw("InwardDoors76Section")}
          titleBanner
          size="large"
          isRow={false}
        />
        <NestedCardsSection
          tSectionItem={t.raw("DoorSillFeatures")}
          titleBanner
          size="large"
          isRow={false}
          isGrid
        />
         <SectionImagesAndCards t={t.raw("DoorSealsEPDM")} isCards={false}/>
      </section>
  );
};

export default DoorsPvcKommerling;
