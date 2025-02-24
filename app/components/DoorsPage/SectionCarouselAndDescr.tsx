import { IImage } from "@/helpers/interfaces";
import React from "react";
import Line from "../Line";
import ImgCarouselPage from "../ImgCarouselPage";
import Observer from "@/helpers/observer";

interface ISectionCarouselAndDescrProps {
  t: {
    (key: string): string;
    raw: (key: string) => Record<string, string> | IImage[];
  };
}

const SectionCarouselAndDescr: React.FC<ISectionCarouselAndDescrProps> = ({
  t,
}) => {
  const images = t.raw("imgList");
  const imgList: IImage[] = Object.values(images);

  const descriptions = t.raw("description");
  const descriptionList = Object.values(descriptions) as string[];

  return (
    <section className="pageCl">
      <div className="container">
      <Observer
          animation="zoom-in"
          duration="0.8s"
          classNameObserver="flex justify-center"
          classNameChild="laser-text"
        >
        <h1 data-text={t("title")} className="titleCl mt-16 inline-block">{t("title")}</h1></Observer>
        <Observer animation="zoom-in-line" duration="0.8s">
        <Line className="marsala-center" color="marsala" /></Observer>
        <div className="flex flex-col lg:flex-row lg:gap-8 items-center lg:items-start pt-6">
          <div className="flex-grow flex-[2]">
            <ImgCarouselPage imgList={imgList} />
          </div>
          <div className="flex flex-col flex-grow flex-[1] pt-8 gap-2">
            {descriptionList.map((text, idx) => (
              <Observer key={idx} threshold={1} animation="zoom-in">
              <p >{text}</p></Observer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCarouselAndDescr;
