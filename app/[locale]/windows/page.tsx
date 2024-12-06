import { setRequestLocale } from "next-intl/server";
import { IDesc } from "@/helpers/interfaces";
import Line from "@/app/components/Line";
// import ProfilesSection from "@/app/components/WindowsPage/ProfilesSection";
// import ElementsSection from "@/app/components/WindowsPage/ElementsSection";
// import WindowsillsSection from "@/app/components/WindowsPage/WindowsillsSection";
import { useTranslations } from "next-intl";
import CardsSection from "@/app/components/CardsSection";

// import ElementsSection from "@/app/components/WindowsPage/ElementsSection";
// import WindowsillsSection from "@/app/components/WindowsPage/WindowsillsSection";

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
      <CardsSection
        t={t}
        tBtn={tButtons}
        source="windowsProfilesList"
        wrapper={false}
        path="windows"
        background="blue"
      />
      <CardsSection
        t={t}
        tBtn={tButtons}
        source="windowsElementsList"
        wrapper={true}
        path="windows"
        background="marsala"
      />
      <CardsSection
        t={t}
        tBtn={tButtons}
        source="windowsillsList"
        wrapper={true}
        path="windows"
        background="blue"
      />
      {/* <ElementsSection t={t} tBtn={tButtons} />
      <WindowsillsSection t={t} tBtn={tButtons} /> */}
    </>
  );
};

export default WindowsPage;
