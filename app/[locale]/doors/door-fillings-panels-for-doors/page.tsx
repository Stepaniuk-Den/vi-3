import SectionPaletteCards from "@/app/components/DoorsPage/SectionPaletteCards";
import PageTopDescription from "@/app/components/PageTopDescription";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string }
};

const DoorsFillingsPanels: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("DoorPanelsPage");
  const tButtons = useTranslations("Buttons");
  

  return (
      <>
        <PageTopDescription t={t} />
        <SectionPaletteCards t={t} tBtn={tButtons}/>

      </>
  );
};

export default DoorsFillingsPanels;
