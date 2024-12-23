import TitleBanner from "../TitleBanner";
import { IImage } from "@/helpers/interfaces";
import ImagesComponent from "./ImagesComponent";

interface IProps {
  bannerTitle: string;
  imgList: IImage[];
}

const KomShOpeningPremidoorSection = ({ bannerTitle, imgList }: IProps) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{bannerTitle}</h3>
        </TitleBanner>
        <ImagesComponent
          list={imgList.slice(6, 8)}
          width={{ 1: "w-1/3", 2: "w-2/3" }}
          objTypeImg="object-contain"
        />
        <ImagesComponent
          list={imgList.slice(8, 10)}
          width={{ 1: "w-1/2", 2: "w-1/2" }}
          className="mt-11"
        />
      </div>
    </section>
  );
};

export default KomShOpeningPremidoorSection;
