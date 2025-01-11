import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import React from "react";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import PageTopDescription from "@/app/components/PageTopDescription";
import SectionBannerAndDescr from "@/app/components/RollerShutterPage/SectionBannerAndDescr";
import SectionCardsFewDescr from "@/app/components/RollerShutterPage/SectionCardsFewDescr";
import SectionListImgAndList from "@/app/components/RollerShutterPage/SectionListImgAndList";

type Props = {
  params: { locale: string };
};

const AdaptiveRSPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("AdaptiveExternalPage");
  const tAccessories = useTranslations("AccessoriesRSPage");
  const tHousing = useTranslations("AdaptiveExternalPage.Housing");

  return (
    <>
      <PageTopDescription t={t} />
      <SectionListImgAndList t={t.raw("AdaptiveExternalCards")} />
      <NestedCardsSection
        tSectionItem={t.raw("GuideChannels")}
        size="w-1/2"
        titleBanner
      />
      <SectionBannerAndDescr
        t={{
          ...tHousing,
          title: tHousing("title"),
        }}
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

export default AdaptiveRSPage;
