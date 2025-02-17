import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import React from "react";
import TopDescrAndImg from "@/app/components/RollerShutterPage/TopDescrAndImg";
import SectionTwoImgAndList from "@/app/components/RollerShutterPage/SectionTwoImgAndList";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "RollerBlindsPage",
    "rollersList",
    3,
    "roller-shutters"
  );
}

const ScreenCoversPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("ScreenPage");

  return (
    <>
      <TopDescrAndImg t={t.raw("ScreenCovers")} />
      <SectionTwoImgAndList t={t.raw("ScreensList")} />
    </>
  );
};

export default ScreenCoversPage;
