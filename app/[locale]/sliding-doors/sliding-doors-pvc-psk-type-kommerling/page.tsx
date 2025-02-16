import ImgCarouselPage from "@/app/components/ImgCarouselPage";
import PageTopDescription from "@/app/components/PageTopDescription";
import PskTiltSlideOptSection from "@/app/components/SlidingDoorsPage/PskTiltSlideOptSection";
import PskTiltSlideTypeSection from "@/app/components/SlidingDoorsPage/PskTiltSlideTypeSection";
import { IImgList } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const SlidingDoorsPskKom: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsPskKomPage");
  const imgList = Object.values(t.raw("imgList") as IImgList);
  const tOpt = useTranslations("SlidingDoorsPskSchPage");
  const cardListOpt = Object.values(tOpt.raw("pskTiltOpt") as IImgList);

  return (
    <>
      <PageTopDescription t={t} />
      <PskTiltSlideTypeSection
        cardList={imgList}
        menuItems={t.raw("menuItems")}
        paramsList={t.raw("parametersList")}
      />
      <div className="container">
        <ImgCarouselPage
          imgList={imgList.slice(5, 9)}
          width="w-full"
          height="h-[30rem] xl:h-[600px]"
        />
      </div>
      <PskTiltSlideOptSection
        cardList={cardListOpt}
        bannerTitle={tOpt.raw("pskTiltOpt")["title"]}
      />
    </>
  );
};

export default SlidingDoorsPskKom;
