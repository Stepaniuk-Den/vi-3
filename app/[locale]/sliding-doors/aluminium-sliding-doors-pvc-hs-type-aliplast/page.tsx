import PageTopDescription from "@/app/components/PageTopDescription";
import AluGlideCustomSection from "@/app/components/SlidingDoorsPage/AluGlideCustomSection";
import AluGlideOverviewSection from "@/app/components/SlidingDoorsPage/AluGlideOverviewSection";
import ImagesComponent from "@/app/components/SlidingDoorsPage/ImagesComponent";
import { IAluSection, IImgList } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const SlidingDoorsAlumAli: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsAluminumAliPage");
  const imgList = Object.values(t.raw("imgList") as IImgList);
  const tUltraSection = t.raw("aluminumAliUltra") as IAluSection;
  const tVisoSection = t.raw("aluminumAliViso") as IAluSection;

  return (
    <>
      <PageTopDescription t={t} />
      <ImagesComponent
        list={imgList.slice(0, 2)}
        width={{ 1: "w-1/2", 2: "w-1/2" }}
        className="container"
      />
      <AluGlideOverviewSection imgList={imgList} desc2={t("description2")} />
      <AluGlideCustomSection tSection={tUltraSection} heightImages="h-[600px]" />
      <AluGlideCustomSection tSection={tVisoSection} heightImages="h-[300px]" />
    </>
  );
};

export default SlidingDoorsAlumAli;
