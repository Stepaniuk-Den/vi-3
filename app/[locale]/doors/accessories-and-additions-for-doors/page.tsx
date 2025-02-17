import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import SectionCarouselAndDescr from "@/app/components/DoorsPage/SectionCarouselAndDescr";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "DoorsPage",
    "doorsFeatures",
    2,
    "doors"
  );
}

const DoorsAccessories: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("AccessoriesPage");

  return <SectionCarouselAndDescr t={t} />;
};

export default DoorsAccessories;
