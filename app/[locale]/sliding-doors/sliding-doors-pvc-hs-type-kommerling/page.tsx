import Line from "@/app/components/Line";
import NestedCardsSection from "@/app/components/NestedCardsSection";
import NestedParameterDescList from "@/app/components/NestedParameterDescList";
import ImagesComponent from "@/app/components/SlidingDoorsPage/ImagesComponent";
import TitleBanner from "@/app/components/TitleBanner";
import { IImage, IParameterItem } from "@/helpers/interfaces";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: { locale: string };
};

interface IImgList {
  [key: string]: IImage;
}

const SlidingDoorsHsKom: React.FC<Props> = ({ params: { locale } }) => {
  setRequestLocale(locale);

  const t = useTranslations("SlidingDoorsHsKomPage");
  const tImgList = t.raw("imgList") as IImgList;
  const tCardPremi = Object.values(t.raw("komPremi"))[0] as IImage;
  const tCardPremiParams = Object.values(
    t.raw("komPremi")
  )[1] as IParameterItem;
  const imgList = Object.values(tImgList);
  // const cardsList = Object.values(tCardsList);
  return (
    <>
      <section className="pageCl">
        <div className="container">
          <h1 className="titleCl pt-8">{t("title")}</h1>
          <Line className="marsala-center" color="marsala" />
          <p className="mb-4">{t("description")}</p>
        </div>
        <ImagesComponent
          list={imgList.slice(0, 2)}
          width={{ 1: "w-1/3", 2: "w-2/3" }}
        />
        <div className="container">
          <TitleBanner>
            <h3 className="titleCl pt-16">{tCardPremi.title}</h3>
          </TitleBanner>
          <div className="flex justify-between gap-40">
            <div className="relative w-1/3 h-[460px] border border-gray-300 rounded-md overflow-hidden">
              <Image
                className="object-cover"
                sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                src={tCardPremi.src}
                alt={tCardPremi.alt}
                fill
                priority
                // placeholder="blur"
              />
            </div>
            <div className="flex flex-col w-2/3">
              <p className="mb-20">{tCardPremi.description}</p>
              <NestedParameterDescList param={tCardPremiParams} />
            </div>
          </div>
        </div>
        <NestedCardsSection
          tSectionItem={t.raw("komPremiCross")}
          size="w-1/2"
          titleBanner
          isRow={false}
          descReverse
        />
      </section>
    </>
  );
};

export default SlidingDoorsHsKom;
