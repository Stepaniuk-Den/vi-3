import NestedParameterDescList from "@/app/components/NestedParameterDescList";
import PageTopDescription from "@/app/components/PageTopDescription";
import ImagesComponent from "@/app/components/SlidingDoorsPage/ImagesComponent";
import SchShEaseSlideSection from "@/app/components/SlidingDoorsPage/SchShEaseSlideSection";
import SchShLivingSlideSection from "@/app/components/SlidingDoorsPage/SchShLivingSlideSection";
import SchShTopSection from "@/app/components/SlidingDoorsPage/SchShTopSection";
import TitleBanner from "@/app/components/TitleBanner";
import { IImage } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

interface IImgList {
  [key: string]: IImage;
}

const SlidingDoorsHsSch: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsHsSchPage");
  const tImgList = t.raw("imgList") as IImgList;
  const tCardsList = t.raw("schSlide") as IImgList;
  const imgList = Object.values(tImgList);
  const cardsList = Object.values(tCardsList);
  const descList = Object.values(t.raw("desc4")) as {};
  const paramList = t.raw("params");
  return (
    <>
      <PageTopDescription t={t} />
      <SchShTopSection
        desc2={t("desc2")}
        desc3={t("desc3")}
        imgList={imgList}
        cardsList={cardsList}
      />
      <SchShLivingSlideSection
        desc={descList}
        bannerTitle={t("bannerTitle")}
        imgList={imgList}
      />
      <SchShEaseSlideSection
        bannerTitle={t("bannerTitle2")}
        imgList={imgList}
        params={paramList}
      />
    </>
  );
};

export default SlidingDoorsHsSch;
