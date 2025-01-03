import NestedCardsSection from "@/app/components/NestedCardsSection";
import PageTopDescription from "@/app/components/PageTopDescription";
import ImagesComponent from "@/app/components/SlidingDoorsPage/ImagesComponent";
import PskTiltFittSection from "@/app/components/SlidingDoorsPage/PskTiltFittSection";
import PskTiltSlideSection from "@/app/components/SlidingDoorsPage/PskTiltSlideSection";
import { IImage } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

interface IImgList {
  [key: string]: IImage;
}

const SlidingDoorsPskSch: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsPskSchPage");
  const imgList = Object.values(t.raw("imgList") as IImgList);
  const cardListOpt = Object.values(t.raw("pskTiltOpt") as IImgList);
  const cardListFit = Object.values(t.raw("pskTiltFit")["list"] as IImgList);
  // console.log("cardListFit - ", cardListFit);
  return (
    <>
      <PageTopDescription t={t} />
      <ImagesComponent
        list={imgList.slice(0, 2)}
        width={{ 1: "w-1/2", 2: "w-1/2" }}
        className=" container"
      />
      <NestedCardsSection
        tSectionItem={t.raw("pskTiltSys")}
        size="w-1/2"
        titleBanner
        isRow={false}
        descReverse
      />
      <PskTiltSlideSection
        cardList={cardListOpt}
        bannerTitle={t.raw("pskTiltOpt")["title"]}
      />
      <PskTiltFittSection
        cardList={cardListFit}
        bannerTitle={t.raw("pskTiltFit")["title"]}
      />
    </>
  );
};

export default SlidingDoorsPskSch;
