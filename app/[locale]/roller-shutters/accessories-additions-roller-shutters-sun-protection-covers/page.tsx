import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import React from "react";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import PageTopDescription from "@/app/components/PageTopDescription";
import SectionCardsFewDescr from "@/app/components/RollerShutterPage/SectionCardsFewDescr";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "RollerBlindsPage",
    "rollersList",
    4,
    "roller-shutters"
  );
}

const AccessoriesPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("AccessoriesRSPage");

  return (
    <>
      <PageTopDescription t={t} />
      <NestedCardsSection
        tSectionItem={t.raw("ExternalRS")}
        titleBanner
        size="w-full"
        isRow={false}
        imgFit="cover"
        classNameList="grid grid-cols-1 sm:grid-cols-3"
        imgH="h-[15rem] lg:h-[20rem]"
      />
      <SectionCardsFewDescr t={t.raw("RemoteControls")} />
    </>
  );
};

export default AccessoriesPage;
