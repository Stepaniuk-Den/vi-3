import NestedCard from "../NestedCard";
import ImagesComponent from "./ImagesComponent";
import { IImage } from "@/helpers/interfaces";

interface IProps {
  desc2: string;
  desc3: string;
  imgList: IImage[];
  cardsList: IImage[];
}

const SchShTopSection = ({ desc2, desc3, imgList, cardsList }: IProps) => {
  return (
    <section className="sectionCl">
      <div className="container">
        <ImagesComponent
          list={imgList.slice(0, 2)}
          width={{ 1: "w-1/3", 2: "w-2/3" }}
          className="mt-7"
        />
        <p className="my-4">{desc2}</p>
        <ImagesComponent list={imgList.slice(2, 3)} width="w-full" />
        <p className="my-4">{desc3}</p>
        <ul className="flex gap-10">
          {cardsList.map((card) => {
            return (
              <NestedCard
                key={card.id}
                title={card.title}
                src={card.src}
                alt={card.alt}
                size={"w-1/2"}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SchShTopSection;
