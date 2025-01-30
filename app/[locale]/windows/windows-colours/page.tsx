import ItemCard from "@/app/components/ItemCard";
import PageTopDescription from "@/app/components/PageTopDescription";
import ColourPalettesSection from "@/app/components/WindowsPages/ColourPalettesSection";
import { IItemCard } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const WindowsColoursPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("WindowsColoursPage");
  const tButtons = useTranslations("Buttons");
  const coloursList = Object.values(t.raw("coloursList")) as IItemCard[];

  return (
    <>
      <PageTopDescription t={t} />
      <ColourPalettesSection
        tButtons={tButtons("see")}
        coloursList={coloursList}
      />
    </>
  );
};

export default WindowsColoursPage;
