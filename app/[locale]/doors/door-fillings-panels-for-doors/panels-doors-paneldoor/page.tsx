import PageTopDescription from "@/app/components/PageTopDescription";
import SectionAnimatedCards from "@/app/components/SectionAnimatedCards";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

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
