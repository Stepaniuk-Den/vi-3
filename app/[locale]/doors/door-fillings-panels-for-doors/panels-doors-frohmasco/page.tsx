import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import PageTopDescription from "@/app/components/PageTopDescription";
import SectionAnimatedCards from "@/app/components/SectionAnimatedCards";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "DoorPanelsPage",
    "cards",
    2,
    "doors",
    "door-fillings-panels-for-doors"
  );
}

const PanelsDoorsFrohmasco: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("DoorFillingFrohMaskoPage");

  return (
    <>
      <PageTopDescription t={t} />
      <SectionAnimatedCards t={t.raw("FrohmaskoCards")} />
    </>
  );
};

export default PanelsDoorsFrohmasco;
