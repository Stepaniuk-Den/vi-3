import NestedCardsSection from "@/app/components/NestedCardsSection";
import NestedParameterDescList from "@/app/components/NestedParameterDescList";
import PageTopDescription from "@/app/components/PageTopDescription";
import ImagesComponent from "@/app/components/SlidingDoorsPage/ImagesComponent";
import PskTiltFittSection from "@/app/components/SlidingDoorsPage/PskTiltFittSection";
import PskTiltSlideSection from "@/app/components/SlidingDoorsPage/PskTiltSlideOptSection";
import { generateMetadataSubPage } from "@/helpers/generateMetadata";
import { IImgList } from "@/helpers/interfaces";
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
    3,
    "sliding-doors"
  );
}

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
        width={{ 1: "w-full sm:w-1/2", 2: "w-full sm:w-1/2" }}
        className=" container sm:flex-nowrap mt-2 lg:mt-11"
      />
      <NestedCardsSection
        tSectionItem={t.raw("pskTiltSys")}
        size="w-full sm:w-1/2"
        imgH="h-[20rem] lg:h-[30rem]"
        titleBanner
        isRow={false}
        descReverse
        classNameList="flex-wrap sm:flex-nowrap max-sm:text-center"
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
