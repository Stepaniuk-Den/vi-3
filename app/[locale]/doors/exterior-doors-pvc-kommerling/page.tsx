import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import SectionImagesAndCards from "@/app/components/DoorsPage/SectionImagesAndCards";
import SectionImgAndList from "@/app/components/DoorsPage/SectionImgAndList";
import NestedCardsSection from "@/app/components/NestedCardsSection";

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
        size="w-full"
        isRow={false}
        imgFit="cover"
      />
      <NestedCardsSection
        tSectionItem={t.raw("InwardDoors76Section")}
        titleBanner
        size="w-full"
        isRow={false}
        imgFit="cover"
      />
      <NestedCardsSection
        tSectionItem={t.raw("DoorSillFeatures")}
        titleBanner
        size="w-full"
        isRow={false}
        positioning="grid"
        imgFit="cover"
      />
      <SectionImagesAndCards t={t.raw("DoorSealsEPDM")} isCards={false} />
    </section>
  );
};

export default DoorsPvcKommerling;
