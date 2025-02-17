import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import SectionPaletteCards from "@/app/components/DoorsPage/SectionPaletteCards";
import PageTopDescription from "@/app/components/PageTopDescription";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "DoorsPage",
    "doorsFeatures",
    1,
    "doors"
  );
}

const DoorsFillingsPanels: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("DoorPanelsPage");
  const tButtons = useTranslations("Buttons");

  return (
    <>
      <PageTopDescription t={t} />
      <SectionPaletteCards t={t} tBtn={tButtons} />
    </>
  );
};

export default DoorsFillingsPanels;
