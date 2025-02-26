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
    1,
    "doors",
    "door-fillings-panels-for-doors",
  );
}

const PanelsDoorsPaneldoor: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("DoorFillingPanelDoorPage");

  return (
    <>
    <PageTopDescription t={t} />
    <SectionAnimatedCards t={t.raw("PanelDoorCards")} />
  </>
  );
};

export default PanelsDoorsPaneldoor;
