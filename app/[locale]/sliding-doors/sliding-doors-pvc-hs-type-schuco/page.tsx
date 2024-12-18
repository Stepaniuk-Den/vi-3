import Line from "@/app/components/Line";
import NestedCard from "@/app/components/NestedCard";
import NestedParameterDescList from "@/app/components/NestedParameterDescList";
import ImagesComponent from "@/app/components/SlidingDoorsPage/ImagesComponent";
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
  return (
    <>
      <section className="pageCl">
        <div className="container">
          <h1 className="titleCl pt-8">{t("title")}</h1>
          <Line className="marsala-center" color="marsala" />
          <p className="mb-4">{t("description")}</p>
          <ImagesComponent
            list={imgList.slice(0, 2)}
            width={{ 1: "w-1/3", 2: "w-2/3" }}
          />
          <p className="my-4">{t("desc2")}</p>
          <ImagesComponent list={imgList.slice(2, 3)} width="w-full" />
          <p className="my-4">{t("desc3")}</p>
          <ul className="flex gap-10">
            {cardsList.map((card) => {
              return (
                <NestedCard
                  key={card.id}
                  title={card.title}
                  src={card.src}
                  alt={card.alt}
                  size={"w-1/2"}
                />
              );
            })}
          </ul>
          <div>
            <TitleBanner>
              <h3 className="subTitleCl xl:leading-none normal-case">
                {t("bannerTitle")}
              </h3>
            </TitleBanner>
            <ImagesComponent
              list={imgList.slice(3, 6)}
              width={{ 1: "w-1/4", 2: "w-2/4", 3: "w-1/4" }}
              height={{ 1: "h-[30rem]", 2: "h-[20rem]", 3: "h-[30rem]" }}
            />
            <div className="my-4">
              {Object.values(t.raw("desc4") as []).map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
            <ImagesComponent
              list={imgList.slice(6, 9)}
              className="flex flex-col lg:flex-row"
              width="w-full lg:w-1/3"
              height="h-[20rem]"
            />
          </div>
          <div>
            <TitleBanner>
              <h3 className="subTitleCl xl:leading-none normal-case">
                {t("bannerTitle2")}
              </h3>
            </TitleBanner>
            <ImagesComponent
              list={imgList.slice(9, 11)}
              className="flex flex-col lg:flex-row"
              width="w-full lg:w-1/2"
              height="h-[20rem]"
            />
            <NestedParameterDescList param={t.raw("params")} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SlidingDoorsHsSch;
