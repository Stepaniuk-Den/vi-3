import { setRequestLocale } from "next-intl/server";
import PageLayout from "../components/PageLayout";
import WindowsSection from "../components/WindowsSection";
import { useTranslations } from "next-intl";
import DoorsSection from "../components/DoorsSection";
import RollerShuttersSection from "../components/RollerShuttersSection";
import Hero from "../components/Hero";
import GuideSection from "../components/GuideSection";
import ProjectsSection from "../components/ProjectsSection";
import ManufacturerInfo from "../components/ManufacturerInfo";
import WindowFeatures from "../components/WindowFeatures";
import MessageBanner from "../components/MessageBanner";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations();

  const tWindows = t.raw("Windows");
  const tDoors = t.raw("Doors");
  const tRollerShutters = t.raw("RollerShutters");
  const tGuideElement = t.raw("GuideElement");
  const tProjectsElement = t.raw("ProjectsElement");
  const tButtons = t.raw("Buttons");
  const WindowFeaturesList = t.raw("WindowFeatures");
  const MessageBannerT = t.raw("MessageBanner");
  const ManufacturerT = t.raw("ManufacturerInfo");

  return (
    <PageLayout>
      {/* <p className="max-w-[590px] text-xl">{t("description")}</p> */}
      <Hero />
      <ManufacturerInfo t={ManufacturerT} />
      <MessageBanner t={MessageBannerT} locale={locale} />
      <WindowsSection t={tWindows} tBtn={tButtons} />
      <DoorsSection t={tDoors} tBtn={tButtons} />
      <RollerShuttersSection t={tRollerShutters} tBtn={tButtons} />
      <ProjectsSection t={tProjectsElement} tBtn={tButtons} />
      <WindowFeatures t={WindowFeaturesList} />
      <GuideSection t={tGuideElement} tBtn={tButtons} />
    </PageLayout>
  );
}
