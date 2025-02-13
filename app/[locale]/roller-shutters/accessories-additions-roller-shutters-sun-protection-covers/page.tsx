import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { imgHeight } from "@/helpers/imgHeight";
import React from "react";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import PageTopDescription from "@/app/components/PageTopDescription";
import SectionCardsFewDescr from "@/app/components/RollerShutterPage/SectionCardsFewDescr";

type Props = {
  params: { locale: string };
};

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
        imgH={imgHeight}
      />
      <SectionCardsFewDescr t={t.raw("RemoteControls")} />
    </>
  );
};

export default AccessoriesPage;
