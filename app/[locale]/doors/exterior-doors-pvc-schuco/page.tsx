import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { imgHeight } from "@/helpers/imgHeight";
import { bigMobOrderFourItems, mobileOrderFourItems } from "@/data/MobileAndDesktopOrder";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import SectionImagesAndCards from "@/app/components/DoorsPage/SectionImagesAndCards";
import SectionListAndCards from "@/app/components/DoorsPage/SectionListAndCards";
import NestedCardsSection from "@/app/components/NestedCardsSection";

type Props = {
  params: { locale: string };
};

const DoorsPvcSchuco: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("PVCDoorsSchucoPage");

  return (
    <section className="pageCl">
      <SectionCarouselAndDescr t={t} />
      <NestedCardsSection
        tSectionItem={t.raw("SchucoProfilesSection")}
        titleBanner
        size="w-full"
        isRow={false}
        imgFit="cover"
        positioning="grid"
        imgH={imgHeight}
      />
      <SectionListAndCards
        t={t.raw("SchucoProfile82Section")}
        isShowSecondList
        mobileOrder={mobileOrderFourItems}
        bigMobOrder={bigMobOrderFourItems}
      />
      <NestedCardsSection
        tSectionItem={t.raw("PanelTypes")}
        size="w-full"
        titleBanner
        isRow={false}
        descReverse
        imgFit="cover"
        positioning="grid"
        imgH={imgHeight}
      />
      <SectionListAndCards
        t={t.raw("DoorFillingsTypes")}
        mobileOrder={mobileOrderFourItems}
        bigMobOrder={bigMobOrderFourItems}
      />
      <SectionImagesAndCards t={t.raw("EntranceDoorSystem")} />
    </section>
  );
};

export default DoorsPvcSchuco;
