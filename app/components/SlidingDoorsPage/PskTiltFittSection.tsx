import { IImage } from "@/helpers/interfaces";
import ImagesComponent from "./ImagesComponent";
import TitleBanner from "../TitleBanner";

interface IProps {
  cardList: IImage[];
  bannerTitle: string;
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
          width="w-1/4"
          height="h-[15rem]"
          className="mb-7"
          // objTypeImg="object-contain"
        />
      </div>
    </section>
  );
};

export default PskTiltFittSection;
