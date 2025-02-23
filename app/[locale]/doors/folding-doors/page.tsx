import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import SectionCardsAndList from "@/app/components/DoorsPage/SectionCardsAndList";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "DoorsPage",
    "doorsList",
    6,
    "doors"
  );
}

const DoorsFolding: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("FoldingDoorsPage");

  return (
    <>
      <SectionCarouselAndDescr t={t} />
      <SectionCardsAndList t={t.raw("PanoramaAliplast")} />
    </>
  );
};

export default DoorsFolding;
