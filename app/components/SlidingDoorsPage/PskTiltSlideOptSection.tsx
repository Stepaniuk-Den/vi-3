import { IImage } from "@/helpers/interfaces";
import ImagesComponent from "./ImagesComponent";
import TitleBanner from "../TitleBanner";

interface IProps {
  bannerTitle: string;
  cardList: IImage[];
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
          width={{ 1: "w-full sm:w-2/5", 2: "w-full sm:w-3/5" }}
          height={{ 1: "h-[10rem] sm:h-[11rem] md:h-[13rem] lg:h-[16rem] xl:h-[20rem]", 2: "h-[10rem] sm:h-[11rem] md:h-[13rem] lg:h-[16rem] xl:h-[20rem]" }}
          className="mb-7 sm:flex-nowrap"
          objTypeImg="object-contain"
          classNameWrapperImage="border-none"
        />
        <ImagesComponent
          list={cardList.slice(2, 3)}
          width="w-full"
          height="h-[8rem] sm:h-[11rem] md:h-[15rem] lg:h-[20rem] xl:h-[25.4rem]"
          className="mb-7 w-full"
          objTypeImg="object-contain"
          classNameWrapperImage="border-none"
        />
        <ImagesComponent
          list={cardList.slice(3, 4)}
          width="w-full"
          height="h-[10rem] sm:h-[11rem] md:h-[15rem] lg:h-[20rem] xl:h-[25.4rem]"
          objTypeImg="object-contain"
          className="sm:mb-7 sm:w-1/2"
          classNameWrapperImage="border-none"
          classNameObserver="w-full sm:w-[47%]"
          isRow
        >
          <p className="">{cardList[3]?.description}</p>
        </ImagesComponent>
      </div>
    </section>
  );
};

export default PskTiltSlideOptSection;
