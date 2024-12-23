import Image from "next/image";
import TitleBanner from "../TitleBanner";
import NestedParameterDescList from "../NestedParameterDescList";
import { IImage, IParameterItem } from "@/helpers/interfaces";

interface IProps {
  tCardPremi: IImage;
  tCardPremiParams: IParameterItem;
}

const KomShPremidoorSection = ({ tCardPremi, tCardPremiParams }: IProps) => {
  return (
    <div className="container">
      <TitleBanner>
        <h3 className="titleCl pt-16">{tCardPremi.title}</h3>
      </TitleBanner>
      <div className="flex justify-between gap-40">
        <div className="relative w-1/3 h-[460px] border border-gray-300 rounded-md overflow-hidden">
          <Image
            className="object-cover"
            sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
            src={tCardPremi.src}
            alt={tCardPremi.alt}
            fill
            priority
            // placeholder="blur"
          />
        </div>
        <div className="flex flex-col w-2/3">
          <p className="mb-20">{tCardPremi.description}</p>
          <NestedParameterDescList param={tCardPremiParams} />
        </div>
      </div>
    </div>
  );
};

export default KomShPremidoorSection;
