"use client";

import { INestedCard } from "@/helpers/interfaces";
import NestedCard from "../NestedCard";
import TitleBanner from "../TitleBanner";
import { useModal } from "../ModalProvider";
import ModalSwiperContent from "../ModalSwiperContent";

type Props = {
  t: {
    title: string;
    description: string;
    [key: string]: string | INestedCard;
  };
};

const HandlesDublinSection: React.FC<Props> = ({ t }) => {
  const imgList = Object.values(t.imgList);

  const { openModal } = useModal();
  const images = imgList.map((img) => ({
    id: img.id || "",
    src: img.src || "",
    alt: img.alt || "",
  }));

  return (
    <section className="pt-4">
      <div className="container">
        <TitleBanner>
          <h3 className="titleCl">{t.title}</h3>
        </TitleBanner>
        <p className="mb-5">{t.description}</p>

        <ul className="flex justify-center flex-wrap gap-6">
          {imgList.map((imgItem, idx) => (
            <NestedCard
              key={imgItem.id}
              src={imgItem.src || ""}
              alt={imgItem.alt || ""}
              size="w-full sm:w-[380px] md:w-[354px] lg:w-[478px] xl:w-[606px]"
              imgH="h-[240px] sm:h-[288px] md:h-[268px] lg:h-[362px] xl:h-[460px]"
              imgFit="cover"
              onClick={() =>
                openModal(
                  <ModalSwiperContent slides={images} initialSlide={idx} />
                )
              }
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HandlesDublinSection;
