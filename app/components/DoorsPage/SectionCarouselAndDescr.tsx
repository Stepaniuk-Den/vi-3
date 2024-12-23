import React from "react";
import Line from "../Line";
import ImgCarouselPage from "../ImgCarouselPage";
import { IImage } from "@/helpers/interfaces";

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
    <section className="sectionCl">
      <div className="container">
        <h1 className="titleCl">{t("title")}</h1>
        <Line className="marsala-center" color="marsala" />
        <div className="flex flex-row gap-8 items-start pt-6">
          <div className="flex-grow flex-[2]">
            <ImgCarouselPage imgList={imgList} />
          </div>
          <div className="flex flex-col flex-grow flex-[1] pt-8 gap-2">
            {descriptionList.map((text, idx) => (
              <p key={idx}>
                {text}
              </p>
            ))}
          </div>
        </div></div>
    </section>
  );
};

export default SectionCarouselAndDescr;
