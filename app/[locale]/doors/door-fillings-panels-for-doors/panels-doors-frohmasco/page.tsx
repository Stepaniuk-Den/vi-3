import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import PageTopDescription from "@/app/components/PageTopDescription";
import SectionAnimatedCards from "@/app/components/SectionAnimatedCards";

type Props = {
  params: { locale: string };
};

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
