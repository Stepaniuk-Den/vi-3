import SectionListAndCards from "@/app/components/DoorsPage/SectionListAndCards";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import PageTopDescription from "@/app/components/PageTopDescription";
import SectionBannerAndDescr from "@/app/components/RollerShutterPage/SectionBannerAndDescr";
import SectionCardsFewDescr from "@/app/components/RollerShutterPage/SectionCardsFewDescr";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import React from "react";

type Props = {
  params: { locale: string };
};

const TopMountedRSPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("TopMountedPage");
  const tAccessories = useTranslations("AccessoriesRSPage");
  const tHousing = useTranslations("AdaptiveExternalPage.Housing");

  return (
    <>
      <PageTopDescription t={t} parametersList={t.raw("parametersList")} />
      <SectionListAndCards t={t.raw("RSBoxSection")} />
      <NestedCardsSection
        tSectionItem={t.raw("GuideRailsTypes")}
        size="w-full"
        titleBanner
        positioning={"grid"}
      />
      <SectionBannerAndDescr
        t={{
          ...tHousing,
          title: tHousing("title"),
        }}
      />
      <NestedCardsSection
        tSectionItem={t.raw("TechnicalSolutionsne")}
        titleBanner
        size="w-full"
        isRow={false}
      />
      <NestedCardsSection
        tSectionItem={tAccessories.raw("ExternalRS")}
        titleBanner
        size="w-full"
        isRow={false}
      />
      <SectionCardsFewDescr t={tAccessories.raw("RemoteControls")} />
    </>
  );
};

export default TopMountedRSPage;
