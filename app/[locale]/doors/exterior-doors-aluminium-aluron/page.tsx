import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";
import SectionDescImagesAndList from "@/app/components/DoorsPage/SectionDescImagesAndList";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const DoorsAlumAluron: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("ALUDoorsAluronPage");

  return (
    <section className="pageCl">
      <SectionCarouselAndDescr t={t} />
      <NestedCardsSection
        tSectionItem={t.raw("DoorProfilesSection")}
        titleBanner
        size="w-full"
        isRow={false}
      />
      <SectionDescImagesAndList t={t.raw("DoorSystemAS75")} />
      <SectionDescImagesAndList
        t={t.raw("DoorSystemAS75P")}
        isShowNext={false}
      />
    </section>
  );
};

export default DoorsAlumAluron;
