import { IImage, IDesc } from "@/helpers/interfaces";
import ImagesComponent from "./ImagesComponent";
import NestedParameterDescList from "../NestedParameterDescList";

interface IProps {
  cardList: IImage[];
  menuItems: {
    [key: string]: string;
  };
  paramsList: {
    list: {
      [key: string]: IDesc;
    };
  };
}
const PskTiltSlideTypeSection = ({
  cardList,
  paramsList,
  menuItems,
}: IProps) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <p className="subTitleCl mb-4">{menuItems[1]}</p>
        <ImagesComponent
          list={cardList.slice(0, 3)}
          width="w-1/3"
          height="h-[25rem]"
          className="mb-7"
        />
        <p className="subTitleCl mb-4">{menuItems[2]}</p>
        <ImagesComponent
          list={cardList.slice(3, 5)}
          width="w-1/2"
          height="h-[60rem]"
          className="mb-7"
        />
        <p className="subTitleCl mb-4">{menuItems[3]}</p>
        <NestedParameterDescList param={paramsList} className="mb-4" />
      </div>
    </section>
  );
};

export default PskTiltSlideTypeSection;
