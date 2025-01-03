import Line from "@/app/components/Line";
import NestedCard from "@/app/components/NestedCard";
import HandlesDublinSection from "@/app/components/WindowsPages/HandlesDublinSection";
import HandlesSecusticSection from "@/app/components/WindowsPages/HandlesSecusticSection";
import { INestedCard } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

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
          <h1 className="titleCl pt-16">{t("title")}</h1>
          <Line className="marsala-center" color="marsala" />

          <ul className="flex justify-center gap-6">
            {imgList.map((imgItem) => (
              <NestedCard
                key={imgItem.id}
                src={imgItem.src || ""}
                alt={imgItem.alt || ""}
                size="w-1/4"
                imgH="h-[354px]"
              />
            ))}
          </ul>
        </div>
      </section>
      <section className="sectionCl">
        <div className="container">
          <h2 className="titleCl">{windowHandles.title}</h2>
          <Line className="marsala-center" color="marsala" />
        </div>
      </section>
      <HandlesDublinSection t={handlesDublin} />
      <HandlesSecusticSection t={handlesSecustic} />
    </>
  );
};

export default WindowAccessoriesPage;
