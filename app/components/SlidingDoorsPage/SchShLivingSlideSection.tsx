import ImagesComponent from "./ImagesComponent";
import { IImage } from "@/helpers/interfaces";
import TitleBanner from "../TitleBanner";

interface IProps {
  desc: {
    [key: string]: string;
  };
  bannerTitle: string;
  imgList: IImage[];
}

const SchShLivingSlideSection = ({ desc, bannerTitle, imgList }: IProps) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{bannerTitle}</h3>
        </TitleBanner>
        <ImagesComponent
          list={imgList.slice(3, 6)}
          width={{ 1: "w-1/4", 2: "w-2/4", 3: "w-1/4" }}
          height={{ 1: "h-[30rem]", 2: "h-[20rem]", 3: "h-[30rem]" }}
        />
        <div className="my-4">
          {Object.values(desc).map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
        <ImagesComponent
          list={imgList.slice(6, 9)}
          className="flex-col lg:flex-row"
          width="w-full lg:w-1/3"
          height="h-[20rem]"
        />
      </div>
    </section>
  );
};

export default SchShLivingSlideSection;