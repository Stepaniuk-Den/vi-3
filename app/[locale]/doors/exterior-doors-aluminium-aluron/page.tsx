import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { imgHeight } from "@/helpers/imgHeight";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import SectionDescImagesAndList from "@/app/components/DoorsPage/SectionDescImagesAndList";
import NestedCardsSection from "@/app/components/NestedCardsSection";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "DoorsPage",
    "doorsList",
    4,
    "doors"
  );
}

const DoorsAlumAluron: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("ALUDoorsAluronPage");

  return (
    <>
      <SectionCarouselAndDescr t={t} />
      <NestedCardsSection
        tSectionItem={t.raw("DoorProfilesSection")}
        titleBanner
        size="w-full"
        isRow={false}
        imgFit="cover"
        positioning="grid"
        imgH={imgHeight}
      />
      <SectionDescImagesAndList t={t.raw("DoorSystemAS75")} />
      <SectionDescImagesAndList
        t={t.raw("DoorSystemAS75P")}
        isShowNext={false}
      />
    </>
  );
};

export default DoorsAlumAluron;
