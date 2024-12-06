import { setRequestLocale } from "next-intl/server";
import { IDesc } from "@/helpers/interfaces";
import Line from "@/app/components/Line";
import ProfilesSection from "@/app/components/WindowsPage/ProfilesSection";
import ElementsSection from "@/app/components/WindowsPage/ElementsSection";
import WindowsillsSection from "@/app/components/WindowsPage/WindowsillsSection";
import { useTranslations } from "next-intl";

type Props = {
  params: { locale: string };
};

const WindowsPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("WindowsPage");
  const tButtons = useTranslations("Buttons");
  const pageDescList = Object.values(t.raw("pageDesc3")) as [IDesc];

  return (
    <>
      <section className="sectionCl pt-60">
        <div className="container">
          <h1 className="titleCl">{t("pageTitle")}</h1>
          <Line className="marsala-center" color="marsala" />
          <h2 className="subTitleCl text-center">{t("pageSubtitle")}</h2>
          <Line className="marsala-center" color="marsala" />
          <p className="mb-4">{t("pageDesc1")}</p>
          <p className="mb-4">{t("pageDesc2")}</p>
          <ol className="list-disc list-inside">
            {pageDescList.map((desc, idx) => (
              <li key={idx}>{desc.desc}</li>
            ))}
          </ol>
        </div>
      </section>
      <ProfilesSection t={t} tBtn={tButtons} />
      <ElementsSection t={t} tBtn={tButtons} />
      <WindowsillsSection t={t} tBtn={tButtons} />
    </>
  );
};

export default WindowsPage;
