import PageTopDescription from "@/app/components/PageTopDescription";
import AluGlideCustomSection from "@/app/components/SlidingDoorsPage/AluGlideCustomSection";
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
    6,
    "sliding-doors"
  );
}

const SlidingDoorsAlumAluron: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsAluminumAluPage");
  const imgList = Object.values(t.raw("imgList") as IImgList);
  const tAluSection = t.raw("aluminumAlu") as IAluSection;

  return (
    <>
      <PageTopDescription t={t} descObj={t.raw("description")} />
      <ImagesComponent
        list={imgList.slice(0, 2)}
        width=" w-full sm:w-1/2"
        className="container mt-2 lg:mt-11 sm:flex-nowrap"
      />
      <AluGlideCustomSection tSection={tAluSection} withCarousel={false} widthImages="w-full" />
    </>
  );
};

export default SlidingDoorsAlumAluron;
