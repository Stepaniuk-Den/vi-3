import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { IImage, IImgList, IParameterItem } from "@/helpers/interfaces";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import PageTopDescription from "@/app/components/PageTopDescription";
import ImagesComponent from "@/app/components/SlidingDoorsPage/ImagesComponent";
import KomShInstallPremidoorSection from "@/app/components/SlidingDoorsPage/KomShInstallPremidoorSection";
import KomShOpeningPremidoorSection from "@/app/components/SlidingDoorsPage/KomShOpeningPremidoorSection";
import KomShPremidoorSection from "@/app/components/SlidingDoorsPage/KomShPremidoorSection";

type Props = {
  params: { locale: string };
};

const SlidingDoorsHsKom: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsHsKomPage");
  const tCardPremi = Object.values(t.raw("komPremi"))[0] as IImage;
  const tCardPremiParams = Object.values(
    t.raw("komPremi")
  )[1] as IParameterItem;
  const imgList = Object.values(t.raw("imgList") as IImgList);
  return (
    <>
      <PageTopDescription t={t} />
      <ImagesComponent
        list={imgList.slice(0, 2)}
        width={{ 1: "w-full sm:w-1/3", 2: "w-full sm:w-2/3" }}
        height='h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem]'
        className="mt-2 lg:mt-11 container"
      />
      <KomShPremidoorSection
        tCardPremi={tCardPremi}
        tCardPremiParams={tCardPremiParams}
      />
      <ImagesComponent
        list={imgList.slice(2, 4)}
        width={{ 1: "w-full sm:w-2/3", 2: "w-full sm:w-1/3" }}
        height='h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem]'
        className="mt-6 lg:mt-11 container"
      />
      <NestedCardsSection
        tSectionItem={t.raw("komPremiCross")}
        size="w-1/2"
        imgH="h-[12rem] sm:h-[17rem] md:h-[25rem] lg:h-[30rem]"
        titleBanner
        isRow={false}
        descReverse
      />
      <ImagesComponent
        list={imgList.slice(4, 6)}
        width="w-1/2"
        height='h-[10rem] sm:h-[17rem] lg:h-[25rem]'
        className="mt-11 flex-row flex-nowrap gap-6"
        objTypeImg="cover"
      >
        <p className="max-sm:text-center">{t.raw("komPremiCross")["description2"]}</p>
      </ImagesComponent>
      <KomShOpeningPremidoorSection
        imgList={imgList}
        bannerTitle={t("bannerTitle")}
      />
      <KomShInstallPremidoorSection
        imgList={imgList}
        bannerTitle={t.raw("installation")["title"]}
        description={t.raw("installation")["description"]}
      />
    </>
  );
};

export default SlidingDoorsHsKom;
