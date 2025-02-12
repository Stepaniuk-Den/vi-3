"use client"

import Image from "next/image";
import TitleBanner from "../TitleBanner";
import NestedParameterDescList from "../NestedParameterDescList";
import { IImage, IParameterItem } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
import ModalSwiperContent from "../ModalSwiperContent";

interface IProps {
  tCardPremi: IImage;
  tCardPremiParams: IParameterItem;
}

const KomShPremidoorSection = ({ tCardPremi, tCardPremiParams }: IProps) => {

  const { openModal } = useModal();
  const { id, src, alt } = tCardPremi

  return (
    <div className="container">
      <TitleBanner>
        <h3 className="titleCl pt-8 lg:pt-16">{tCardPremi.title}</h3>
      </TitleBanner>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 lg:gap-40">
        <div className="relative w-1/2 xl:w-1/3 h-[15rem] lg:h-[30rem] lg:border border-gray-300 rounded-md overflow-hidden"
          onClick={() =>
            openModal(
              <ModalSwiperContent slides={[{ id: id, src: src, alt: alt }]} initialSlide={0} />
            )
          }
        >
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
        <div className="flex flex-col w-full lg:w-2/3">
          <p className="mb-6 lg:mb-20">{tCardPremi.description}</p>
          <NestedParameterDescList param={tCardPremiParams} />
        </div>
      </div>
    </div >
  );
};

export default KomShPremidoorSection;
