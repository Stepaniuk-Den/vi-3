import ImagesComponent from "./ImagesComponent";
import { IImage, IParameterItem } from "@/helpers/interfaces";
import TitleBanner from "../TitleBanner";
import NestedParameterDescList from "../NestedParameterDescList";

interface IProps {
  params: IParameterItem;
  bannerTitle: string;
  imgList: IImage[];
}

const SchShEaseSlideSection = ({ params, bannerTitle, imgList }: IProps) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{bannerTitle}</h3>
        </TitleBanner>
        <ImagesComponent
          list={imgList.slice(9, 11)}
          className="flex flex-col sm:flex-row"
          width="w-full sm:w-1/2"
          height="h-[13rem] sm:h-[10rem] lg:h-[20rem]"
        />
        <NestedParameterDescList param={params} />
      </div>
    </section>
  );
};

export default SchShEaseSlideSection;
