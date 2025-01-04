"use client";

import { getImageDimensionValue } from "@/helpers/getImageDimensionValue";
import { IImage } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import NestedParameterDescList from "../NestedParameterDescList";
import ModalSwiperContent from "../ModalSwiperContent";

interface IList {
  list: IImage[];
  className?: string;
  objTypeImg?: string;
  children?: React.ReactNode;
  isRow?: boolean;
  width?:
    | {
        1?: string;
        2?: string;
        3?: string;
      }
    | string;
  height?:
    | {
        1?: string;
        2?: string;
        3?: string;
      }
    | string;
}

// const getImageDimensionValue = (
//   dimension: string | { [key: number]: string | undefined } | undefined,
//   idx: number,
//   defaultValue: string
// ): string => {
//   if (typeof dimension === "object" && dimension !== null) {
//     return dimension[idx + 1] || defaultValue;
//   }
//   return dimension || defaultValue;
// };

const ImagesComponent: React.FC<IList> = ({
  list,
  width,
  height,
  className,
  objTypeImg = "object-cover",
  children,
  isRow = false,
}) => {
  const { openModal } = useModal();

  return (
    <div
      className={clsx("flex", {
        container: children && !isRow,
        "flex-row justify-between": isRow,
        "flex-col gap-2": !isRow,
      })}
    >
      <div className={clsx("flex gap-6", className)}>
        {list.map((img, idx) => {
          const currentWidth = getImageDimensionValue(width, idx, "w-1/3");
          const currentHeight = getImageDimensionValue(
            height,
            idx,
            "h-[30rem]"
          );
          return (
            <div
              className={clsx(
                "flex flex-col gap-2 cursor-zoom-in",
                currentWidth
              )}
              // className={`flex flex-col gap-2 cursor-zoom-in  ${currentWidth} ${currentHeight}`}
              key={img.id}
              onClick={() =>
                openModal(
                  <ModalSwiperContent slides={list} initialSlide={idx} />
                )
              }
            >
              {img.title && img.title.trim().length > 0 && (
                <p className="mb-2 h-12">{img.title}</p>
              )}
              <div
                className={clsx(
                  "relative border border-gray-300 rounded-md overflow-hidden w-full",
                  currentHeight
                )}
              >
                <Image
                  className={objTypeImg}
                  sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority
                />
              </div>
              {img.description && !children && <p>{img.description}</p>}
              {img.params && !children && (
                <NestedParameterDescList param={img.params} />
              )}
            </div>
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default ImagesComponent;
