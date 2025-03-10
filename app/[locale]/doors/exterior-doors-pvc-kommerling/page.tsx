import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { imgHeight } from "@/helpers/imgHeight";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import SectionImagesAndCards from "@/app/components/DoorsPage/SectionImagesAndCards";
import SectionImgAndList from "@/app/components/DoorsPage/SectionImgAndList";
import NestedCardsSection from "@/app/components/NestedCardsSection";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "DoorsPage",
    "doorsList",
    2,
    "doors"
  );
}

const DoorsPvcKommerling: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("PVCDoorsKommerlingPage");

  return (
    <>
      <SectionCarouselAndDescr t={t} />
      <SectionImgAndList t={t.raw("FeaturesKommerling76Section")} />
      <NestedCardsSection
        tSectionItem={t.raw("OutwardDoors76Section")}
        titleBanner
        size="w-full"
        isRow={false}
        imgFit="cover"
        positioning="grid"
        imgH={imgHeight}
      />
      <NestedCardsSection
        tSectionItem={t.raw("InwardDoors76Section")}
        titleBanner
        size="w-full"
        isRow={false}
        imgFit="cover"
        positioning="grid"
        imgH={imgHeight}
      />
      <NestedCardsSection
        tSectionItem={t.raw("DoorSillFeatures")}
        titleBanner
        size="w-full"
        isRow={false}
        positioning="grid"
        imgFit="cover"
        imgH={imgHeight}
      />
      <SectionImagesAndCards t={t.raw("DoorSealsEPDM")} isCards={false} />
    </>
  );
};

export default DoorsPvcKommerling;
