import { setRequestLocale } from "next-intl/server";
import { IDesc } from "@/helpers/interfaces";
import Line from "@/app/components/Line";
import { useTranslations } from "next-intl";
import CardsSection from "@/app/components/CardsSection";
import ContactForm from "@/app/components/ContactForm";
import { generateMetadataPage } from "@/helpers/generateMetadata";
import Observer from "@/helpers/observer";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataPage(params.locale, "WindowsPage");
}

const WindowsPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("WindowsPage");
  const tButtons = useTranslations("Buttons");
  const pageDescList = Object.values(t.raw("pageDesc3")) as [IDesc];

  return (
    <>
      <section className="pageCl">
        <div className="container">
          <Observer
            animation="zoom-in"
            duration="0.8s"
            classNameObserver="flex justify-center"
            classNameChild="laser-text"
          >
            <h1 className="titleCl mt-16 inline-block" data-text={t("title")}>
              {t("title")}
            </h1>
          </Observer>
          <Observer
            animation="zoom-in"
            duration="0.8s"
            classNameObserver="flex justify-center"
            classNameChild="laser-text"
          >
            <h2
              className="titleCl mt-5 text-center inline-block"
              data-text={t("subtitle")}
            >
              {t("subtitle")}
            </h2>
          </Observer>

          <Observer animation="zoom-in-line" duration="0.8s">
            <Line className="marsala-center" color="marsala" />
          </Observer>
          <Observer animation="zoom-in">
            <p className="mb-4">{t("pageDesc1")}</p>
            <p className="mb-4">{t("pageDesc2")}</p>
            <ol className="list-disc list-inside">
              {pageDescList.map((desc, idx) => (
                <li key={idx}>{desc.desc}</li>
              ))}
            </ol>
          </Observer>
        </div>
      </section>
      <CardsSection
        t={t}
        tBtn={tButtons}
        source="windowsProfilesList"
        wrapper={false}
        path="windows"
        background="blue"
        imgH={"h-[360px] md:h-[280px] lg:h-[360px]"}
      />
      <CardsSection
        t={t}
        tBtn={tButtons}
        source="windowsElementsList"
        wrapper={true}
        path="windows"
        background="marsala"
        imgH={"h-[360px] md:h-[280px] lg:h-[360px]"}
      />
      <CardsSection
        t={t}
        tBtn={tButtons}
        source="windowsillsList"
        wrapper={true}
        path="windows"
        background="blue"
        imgH={"h-[360px] md:h-[280px] lg:h-[360px]"}
      />
      {/* <ElementsSection t={t} tBtn={tButtons} />
      <WindowsillsSection t={t} tBtn={tButtons} /> */}

      <ContactForm />
    </>
  );
};

export default WindowsPage;
