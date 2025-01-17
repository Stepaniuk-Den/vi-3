import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import SectionImgAndList from "@/app/components/DoorsPage/SectionImgAndList";
import NestedCardsSection from "@/app/components/NestedCardsSection";

type Props = {
  params: { locale: string };
};

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
      />
      <SectionImgAndList t={t.raw("Superial800Card")} isShowSecondList />
      <SectionImgAndList t={t.raw("Imperial800Card")} isShowSecondList />
    </section>
  );
};

export default DoorsAlumAliplast;
