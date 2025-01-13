import NestedCardsSection from "@/app/components/NestedCardsSection";
import NestedParameterDescList from "@/app/components/NestedParameterDescList";
import PageTopDescription from "@/app/components/PageTopDescription";
import ImagesComponent from "@/app/components/SlidingDoorsPage/ImagesComponent";
import PskTiltFittSection from "@/app/components/SlidingDoorsPage/PskTiltFittSection";
import PskTiltSlideSection from "@/app/components/SlidingDoorsPage/PskTiltSlideOptSection";
import { IImgList } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const SlidingDoorsPskSch: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsPskSchPage");
  const imgList = Object.values(t.raw("imgList") as IImgList);
  const cardListOpt = Object.values(t.raw("pskTiltOpt") as IImgList);
  const cardListFit = Object.values(t.raw("pskTiltFit")["list"] as IImgList);
  return (
    <>
      <PageTopDescription t={t} />
      <ImagesComponent
        list={imgList.slice(0, 2)}
        width={{ 1: "w-1/2", 2: "w-1/2" }}
        className=" container mt-11"
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
      <NestedParameterDescList
        param={t.raw("pskTiltFit")["parametersList"]}
        className="container mt-6"
      />
    </>
  );
};

export default SlidingDoorsPskSch;
