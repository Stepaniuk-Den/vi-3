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
    <section>
      <div className="container">
        <ImagesComponent
          list={imgList.slice(0, 2)}
          width={{ 1: "w-full sm:w-1/4 lg:w-1/3", 2: "w-full sm:w-3/4 lg:w-2/3" }}
          className="mt-11"
        />
        <p className="my-4">{desc2}</p>
        <ImagesComponent list={imgList.slice(2, 3)} width="w-full"
          height="max-sm:h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[30rem]" />
        <p className="my-4">{desc3}</p>
        <ul className="flex flex-col sm:flex-row gap-10">
          {cardsList.map((card) => {
            return (
              <NestedCard
                key={card.id}
                title={card.title}
                src={card.src}
                alt={card.alt}
                size={"w-full sm:w-1/2"}
                imgH="h-[15rem] md:h-[20rem] lg:h-[30rem]"
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SchShTopSection;
