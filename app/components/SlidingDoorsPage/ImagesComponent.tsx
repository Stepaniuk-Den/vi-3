"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { getImageDimensionValue } from "@/helpers/getImageDimensionValue";
import { IImage } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
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

  const [titleHeightClass, setTitleHeightClass] = useState<string>("h-auto");
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const calculateTitleHeight = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;

        const maxRows = list.reduce((max, img) => {
          const titleLength = img.title ? img.title.length : 0;

          const charsPerRow = Math.floor(containerWidth / 8);
          const rows = Math.ceil(titleLength / charsPerRow);

          return Math.max(max, rows);
        }, 0);

        if (maxRows <= 1) {
          setTitleHeightClass("h-6");
        } else if (maxRows <= 2) {
          setTitleHeightClass("h-12");
        } else {
          setTitleHeightClass("h-18");
        }
      }
    };

    calculateTitleHeight();

    window.addEventListener("resize", calculateTitleHeight);
    return () => {
      window.removeEventListener("resize", calculateTitleHeight);
    };
  }, [list]);

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
              ref={containerRef}
              className={clsx("flex flex-col gap-2", currentWidth)}
              key={img.id}
            >
              {img.title && img.title.trim().length > 0 && (
                <p className={clsx("mb-2", titleHeightClass)}>{img.title}</p>
              )}
              <div
                className={clsx(
                  "relative border border-gray-300 rounded-md overflow-hidden w-full cursor-zoom-in",
                  currentHeight
                )}
                onClick={() =>
                  openModal(
                    <ModalSwiperContent slides={list} initialSlide={idx} />
                  )
                }
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
