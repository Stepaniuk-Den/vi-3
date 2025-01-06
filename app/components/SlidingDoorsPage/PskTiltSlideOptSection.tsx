import { IImage } from "@/helpers/interfaces";
import ImagesComponent from "./ImagesComponent";
import TitleBanner from "../TitleBanner";

interface IProps {
  cardList: IImage[];
  bannerTitle: string;
}
const PskTiltSlideOptSection = ({ cardList, bannerTitle }: IProps) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{bannerTitle}</h3>
        </TitleBanner>
        <ImagesComponent
          list={cardList.slice(0, 2)}
          width={{ 1: "w-2/5", 2: "w-3/5" }}
          height="h-[20rem]"
          className="mb-7"
          objTypeImg="object-contain"
        />
        <ImagesComponent
          list={cardList.slice(2, 3)}
          width="w-full"
          height="h-[25.4rem]"
          objTypeImg="object-contain"
          className="mb-7"
        />
        <ImagesComponent
          list={cardList.slice(3, 4)}
          width="w-full"
          height="h-[25.4rem]"
          objTypeImg="object-contain"
          className="mb-7 w-1/2"
          isRow
        >
          <p className="w-[47%]">{cardList[3]?.description}</p>
        </ImagesComponent>
      </div>
    </section>
  );
};

export default PskTiltSlideOptSection;
