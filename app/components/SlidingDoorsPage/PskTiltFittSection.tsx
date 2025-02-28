import { IImage } from "@/helpers/interfaces";
import ImagesComponent from "./ImagesComponent";
import TitleBanner from "../TitleBanner";

interface IProps {
  bannerTitle: string;
  cardList: IImage[];
}
const PskTiltFittSection = ({ cardList, bannerTitle }: IProps) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{bannerTitle}</h3>
        </TitleBanner>
        <ImagesComponent
          list={cardList}
          width="w-full lg:w-1/4"
          height="h-[15rem]"
          className="mb-7 sm:max-lg:grid sm:max-lg:grid-cols-2"
          classNameWrapperImage="max-sm:max-w-[25rem] max-sm:ml-auto max-sm:mr-auto"
          objTypeImg="object-contain"
        />
      </div>
    </section>
  );
};

export default PskTiltFittSection;
