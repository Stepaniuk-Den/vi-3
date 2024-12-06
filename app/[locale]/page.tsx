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

  const tWindows = useTranslations("Windows");
  const tDoors = useTranslations("Doors");
  const tRollerShutters = useTranslations("RollerShutters");
  const tGuideElement = useTranslations("GuideElement");
  const tProjectsElement = useTranslations("ProjectsElement");
  const tButtons = useTranslations("Buttons");
  const WindowFeaturesList = useTranslations("WindowFeatures");
  const MessageBannerT = useTranslations("MessageBanner");

  return (
    <PageLayout>
      {/* <p className="max-w-[590px] text-xl">{t("description")}</p> */}
      <Hero />
      <ManufacturerInfo />
      <MessageBanner t={MessageBannerT} />
      <WindowsSection t={tWindows} tBtn={tButtons} />
      <DoorsSection t={tDoors} tBtn={tButtons} />
      <RollerShuttersSection t={tRollerShutters} tBtn={tButtons} />
      <ProjectsSection t={tProjectsElement} tBtn={tButtons} />
      <WindowFeatures t={WindowFeaturesList} />
      <GuideSection t={tGuideElement} tBtn={tButtons} />
    </PageLayout>
  );
}
