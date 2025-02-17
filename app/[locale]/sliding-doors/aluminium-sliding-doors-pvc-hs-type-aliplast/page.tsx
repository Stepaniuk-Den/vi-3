import PageTopDescription from "@/app/components/PageTopDescription";
import AluGlideCustomSection from "@/app/components/SlidingDoorsPage/AluGlideCustomSection";
import AluGlideOverviewSection from "@/app/components/SlidingDoorsPage/AluGlideOverviewSection";
import ImagesComponent from "@/app/components/SlidingDoorsPage/ImagesComponent";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import { IAluSection, IImgList } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  return generateMetadataSubPage(
    params.locale,
    "SlidingDoorsPage",
    "slidingDoorsList",
    5,
    "sliding-doors"
  );
}

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
        width="w-full sm:w-1/2"
        className="container sm:flex-nowrap mt-2 lg:mt-11"
      />
      <AluGlideOverviewSection imgList={imgList} desc2={t("desc")} />
      <AluGlideCustomSection tSection={tUltraSection} heightImages="h-[300px] md:h-[450px] lg:h-[550px] xl:h-[600px]" />
      <AluGlideCustomSection tSection={tVisoSection} heightImages="h-[300px] md:h-[450px] lg:h-[300px]" />
    </>
  );
};

export default SlidingDoorsAlumAli;
