import TitleBanner from "../TitleBanner";
import { IImage } from "@/helpers/interfaces";
import ImagesComponent from "./ImagesComponent";

interface IProps {
  bannerTitle: string;
  description: string;
  imgList: IImage[];
}

const KomShInstallPremidoorSection = ({
  bannerTitle,
  imgList,
  description,
}: IProps) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{bannerTitle}</h3>
        </TitleBanner>
        <p>{description}</p>
        <ImagesComponent
          list={imgList.slice(10, 11)}
          width="w-full"
          className="mt-11"
          objTypeImg="object-contain"
        />
      </div>
    </section>
  );
};

export default KomShInstallPremidoorSection;
