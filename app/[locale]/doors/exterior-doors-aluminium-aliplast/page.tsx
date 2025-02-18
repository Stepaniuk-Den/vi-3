import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { imgHeight } from "@/helpers/imgHeight";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
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
    3,
    "doors"
  );
}

const DoorsAlumAliplast: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("ALUDoorsAliplastPage");

  return (
    <section className="pageCl">
      <SectionCarouselAndDescr t={t} />
      <NestedCardsSection
        tSectionItem={t.raw("AluminiumProfilesSection")}
        titleBanner
        size="w-full"
        isRow={false}
        imgFit="cover"
        positioning="grid"
        imgH={imgHeight}
      />
      <SectionImgAndList t={t.raw("Superial800Card")} isShowSecondList />
      <SectionImgAndList t={t.raw("Imperial800Card")} isShowSecondList />
    </section>
  );
};

export default DoorsAlumAliplast;
