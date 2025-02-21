import Line from "@/app/components/Line";
import HandlesDublinSection from "@/app/components/WindowsPages/HandlesDublinSection";
import HandlesSecusticSection from "@/app/components/WindowsPages/HandlesSecusticSection";
import WindowAccessoriesSection from "@/app/components/WindowsPages/WindowAccessoriesSection";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import { INestedCard } from "@/helpers/interfaces";
import Observer from "@/helpers/observer";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "WindowsPage",
    "windowsElementsList",
    5,
    "windows",
    true
  );
}

const WindowAccessoriesPage: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("WindowAccessoriesPage");
  const imgList = Object.values(t.raw("imgList")) as INestedCard[];
  const windowHandles = t.raw("WindowHandlesSections");
  const handlesDublin = windowHandles.WindowHandlesDublin;
  const handlesSecustic = windowHandles.WindowHandlesSecustic;

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
            <h1 className="titleCl mt-16" data-text={t("title")}>
              {t("title")}
            </h1>
          </Observer>
          <Observer animation="zoom-in-line" duration="0.8s">
            <Line className="marsala-center" color="marsala" />
          </Observer>
          <WindowAccessoriesSection imgList={imgList} />
        </div>
      </section>
      <section className="sectionCl">
        <div className="container">
          <Observer animation="slide-up">
            <h2 className="titleCl">{windowHandles.title}</h2>
          </Observer>
          <Observer animation="zoom-in">
            <Line className="marsala-center" color="marsala" />
          </Observer>
        </div>
      </section>
      <HandlesDublinSection t={handlesDublin} />
      <HandlesSecusticSection t={handlesSecustic} />
    </>
  );
};

export default WindowAccessoriesPage;
