// import { getTranslations, setRequestLocale } from "next-intl/server";
// import PageLayout from "../components/PageLayout";
// import WindowsSection from "../components/WindowsSection";

// type Props = {
//   params: { locale: string };
//   // params: Promise<{ locale: string }>;
// };

// export default async function IndexPage({ params }: Props) {
//   // export default function IndexPage({ params: { locale } }: Props) {
//   const { locale } = await Promise.resolve(params);
//   // const { locale } = await params;

//   // Enable static rendering
//   setRequestLocale(locale);

//   const t = await getTranslations("IndexPage");

//   return (
//     <PageLayout title={t("title")}>
//       <p className="max-w-[590px] text-xl">{t("description")}</p>
//       <WindowsSection params={{ locale }} />
//     </PageLayout>
//   );
// }

// export default function Home({ params: { locale } }: Props) {
//   setRequestLocale(locale);

//   const t = useTranslations("HomePage");

//   return (
//     <section>
//       <div className="pt-48">
//         <h1>{t("title")}</h1>
//         <p>{t("description")}</p>
//       </div>
//     </section>
//   );
// }

// ========================================================

// import { getTranslations, setRequestLocale } from "next-intl/server";
// import PageLayout from "../components/PageLayout";
// import WindowsSection from "../components/WindowsSection";

// type Props = {
//   params: { locale: string };
// };

// export default async function IndexPage({ params }: Props) {
//   const { locale } = await Promise.resolve(params);

//   // Enable static rendering
//   setRequestLocale(locale);

//   const t = await getTranslations("IndexPage");
//   const tWindows = await getTranslations("Windows");

//   return (
//     <PageLayout title={t("title")}>
//       {/* <p className="max-w-[590px] text-xl">{t("description")}</p> */}
//       <WindowsSection t={tWindows} />
//     </PageLayout>
//   );
// }

// ==============================================================================

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

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  // const t = useTranslations("IndexPage");
  const tWindows = useTranslations("Windows");
  const tDoors = useTranslations("Doors");
  const tRollerShutters = useTranslations("RollerShutters");
  const tGuideElement = useTranslations("GuideElement");
  const tProjectsElement = useTranslations("ProjectsElement");
  const WindowFeaturesList = useTranslations("WindowFeatures");


  return (
    <PageLayout>
      {/* <p className="max-w-[590px] text-xl">{t("description")}</p> */}
      <Hero />
      <ManufacturerInfo />
      <WindowsSection t={tWindows} />
      <DoorsSection t={tDoors} />
      <RollerShuttersSection t={tRollerShutters} />
      <ProjectsSection t={tProjectsElement} />
      <WindowFeatures t={WindowFeaturesList}/>
      <GuideSection t={tGuideElement} />
    </PageLayout>
  );
}
