import Line from "@/app/components/Line";
import NestedCard from "@/app/components/NestedCard";
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
  const tCardsList = t.raw("SchSlide") as IImgList;
  const imgList = Object.values(tImgList);
  const cardsList = Object.values(tCardsList);
  return (
    <>
      <section className="sectionCl pt-60">
        <div className="container">
          <h1 className="titleCl">{t("title")}</h1>
          <Line className="marsala-center" color="marsala" />
          <p className="mb-4">{t("description")}</p>
          <ImagesComponent
            list={imgList.slice(0, 2)}
            width={{ 1: "w-1/3", 2: "w-2/3" }}
          />
          <p>{t("desc2")}</p>
          <ImagesComponent list={imgList.slice(2, 3)} width={{ 1: "w-full" }} />
          <p>{t("desc3")}</p>
          <div className="flex gap-10">
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
          </div>
          <div>
            <TitleBanner>
              <h3 className="subTitleCl xl:leading-none normal-case">
                {t("bannerTitle")}
              </h3>
            </TitleBanner>
          </div>
        </div>
      </section>
    </>
  );
};

export default SlidingDoorsHsSch;
