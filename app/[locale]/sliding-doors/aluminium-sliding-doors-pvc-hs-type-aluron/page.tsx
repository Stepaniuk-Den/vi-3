import PageTopDescription from "@/app/components/PageTopDescription";
import AluGlideCustomSection from "@/app/components/SlidingDoorsPage/AluGlideCustomSection";
import ImagesComponent from "@/app/components/SlidingDoorsPage/ImagesComponent";
import { IAluSection, IImgList } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const SlidingDoorsAlumAluron: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsAluminumAluPage");
  const imgList = Object.values(t.raw("imgList") as IImgList);
  const tAluSection = t.raw("aluminumAlu") as IAluSection;

  return (
    <>
      <PageTopDescription t={t} />
      <ImagesComponent
        list={imgList.slice(0, 2)}
        width="w-1/2"
        className="container"
      />
      <AluGlideCustomSection tSection={tAluSection} withCarousel={false} />
    </>
  );
};

export default SlidingDoorsAlumAluron;
