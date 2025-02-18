import Footer from "@/app/components/Footer";
import Line from "@/app/components/Line";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import FittingComponentsSection from "@/app/components/WindowsPages/FittingComponentsSection";
import GasketsFittingsSection from "@/app/components/WindowsPages/GasketsFittingsSection";
import { INestedCardsSectionItem } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const WindowsFittingsSealsPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("WindowsFittingsSealsPage");
  const gasketsFittingsSection = t.raw("GasketsFittingsSection");
  const fittingsFeaturesSection = t.raw("FittingsFeaturesSection");
  const fittingComponentsSection = t.raw("FittingComponentsSection");

  return (
    <>
      <section className="pageCl">
        <div className="container">
          <h1 className="titleCl pt-16">{t("title")}</h1>
          <Line className="marsala-center" color="marsala" />
        </div>
      </section>
      <GasketsFittingsSection t={gasketsFittingsSection} />
      <NestedCardsSection
        tSectionItem={fittingsFeaturesSection as INestedCardsSectionItem}
        titleBanner={true}
        size="w-full sm:w-[396px] md:w-[356px] lg:w-[396px]"
        imgH="h-[240px] sm:h-[460px] md:h-[414px] lg:h-[460px]"
        imgFit="cover"
        positioning="flexWrap"
        isRow={false}
      />
      <FittingComponentsSection t={fittingComponentsSection} />
      <Footer />
    </>
  );
};

export default WindowsFittingsSealsPage;
