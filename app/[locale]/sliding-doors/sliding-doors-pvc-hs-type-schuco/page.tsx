import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { IImage } from "@/helpers/interfaces";
import PageTopDescription from "@/app/components/PageTopDescription";
import SchShEaseSlideSection from "@/app/components/SlidingDoorsPage/SchShEaseSlideSection";
import SchShLivingSlideSection from "@/app/components/SlidingDoorsPage/SchShLivingSlideSection";
import SchShTopSection from "@/app/components/SlidingDoorsPage/SchShTopSection";

type Props = {
  params: { locale: string };
};

interface IImgList {
  [key: string]: IImage;
}

interface Desc4 {
  [key: string]: string;
}

const SlidingDoorsHsSch: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsHsSchPage");
  const imgList = Object.values(t.raw("imgList") as IImgList);
  const cardsList = Object.values(t.raw("schSlide") as IImgList);
  const descList = t.raw("desc4") as Desc4;
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
