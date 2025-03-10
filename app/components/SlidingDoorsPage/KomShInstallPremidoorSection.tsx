import TitleBanner from "../TitleBanner";
import { IImage } from "@/helpers/interfaces";
import ImagesComponent from "./ImagesComponent";
import Observer from "@/helpers/observer";

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
        <Observer threshold={1} animation='zoom-in'>
          <p>{description}</p>
        </Observer>
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
