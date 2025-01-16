import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
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
        />
      <SectionListAndCards
        t={t.raw("SchucoProfile82Section")}
        isShowSecondList
      />
      <NestedCardsSection
        tSectionItem={t.raw("PanelTypes")}
        size="w-1/2"
        titleBanner
        isRow={false}
        descReverse
        imgFit="cover"
      />
      <SectionListAndCards t={t.raw("DoorFillingsTypes")} />
      <SectionImagesAndCards t={t.raw("EntranceDoorSystem")} />
    </section>
  );
};

export default DoorsPvcSchuco;
