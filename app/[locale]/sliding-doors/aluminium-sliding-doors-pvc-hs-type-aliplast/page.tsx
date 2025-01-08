import PageTopDescription from "@/app/components/PageTopDescription";
import ImagesComponent from "@/app/components/SlidingDoorsPage/ImagesComponent";
import { IImgList } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

// interface IImgList {
//   [key: string]: IImage;
// }

const SlidingDoorsAlumAli: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsAluminumAliPage");
  const imgList = Object.values(t.raw("imgList") as IImgList);

  return (
    <>
      <PageTopDescription t={t} />
      <ImagesComponent
        list={imgList.slice(0, 2)}
        width={{ 1: "w-1/2", 2: "w-1/2" }}
        className=" container"
      />
    </>
  );
};

export default SlidingDoorsAlumAli;
