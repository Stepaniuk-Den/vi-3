import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import SectionCardsAndList from "@/app/components/DoorsPage/SectionCardsAndList";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";

type Props = {
  params: { locale: string };
};

const DoorsFolding: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("FoldingDoorsPage");

  return (
    <section className="pageCl">
      <SectionCarouselAndDescr t={t} />
      <SectionCardsAndList t={t.raw("PanoramaAliplast")} />
    </section>
  );
};

export default DoorsFolding;
