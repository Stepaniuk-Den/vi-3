"use client";

import React from "react";
import NestedCard from "../NestedCard";
import { INestedCard } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
import ModalSwiperContent from "../ModalSwiperContent";

type Props = {
  imgList: INestedCard[];
};

const WindowAccessoriesSection: React.FC<Props> = ({ imgList }) => {
  const { openModal } = useModal();
  const images = imgList.map((img) => ({
    id: img.id || "",
    src: img.src || "",
    alt: img.alt || "",
  }));

  return (
    <ul className="flex justify-center items-center flex-row flex-wrap xl:flex-nowrap gap-6">
      {imgList.map((imgItem, idx) => (
        <NestedCard
          key={imgItem.id}
          src={imgItem.src || ""}
          alt={imgItem.alt || ""}
          size="w-[292px]"
          imgH="h-[354px]"
          onClick={() =>
            openModal(<ModalSwiperContent slides={images} initialSlide={idx} />)
          }
        />
      ))}
    </ul>
  );
};

export default WindowAccessoriesSection;
