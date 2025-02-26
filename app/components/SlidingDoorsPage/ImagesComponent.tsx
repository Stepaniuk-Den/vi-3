"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { getImageDimensionValue } from "@/helpers/getImageDimensionValue";
import { IImage } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
import NestedParameterDescList from "../NestedParameterDescList";
import ModalSwiperContent from "../ModalSwiperContent";
import Observer from "@/helpers/observer";

interface IList {
  list: IImage[];
  className?: string;
  classNameComponent?: string;
  classNameWrapperImage?: string;
  classNameObserver?: string;
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

const ImagesComponent: React.FC<IList> = ({
  list,
  width,
  height,
  className,
  classNameComponent,
  classNameWrapperImage,
  classNameObserver,
  objTypeImg = "object-cover",
  children,
  isRow = false,
}) => {
  const { openModal } = useModal();

  const [titleHeightClass, setTitleHeightClass] = useState<string>("h-auto");
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getFont = () => {
      if (!containerRef.current) return "16px Arial";
      const style = window.getComputedStyle(containerRef.current);
      return `${style.fontSize} ${style.fontFamily}`;
    };

    const getTextWidth = (text: string, font: string) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) return 8;
      context.font = font;
      return context.measureText(text).width;
    };

    const calculateTitleHeight = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const font = getFont();

        const maxRows = list.reduce((max, img) => {
          const title = img.title?.trim() ?? "";
          const titleWidth = getTextWidth(title, font);
          const estimatedRows = Math.ceil(titleWidth / containerWidth);

          return Math.max(max, estimatedRows);
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
        "flex-col gap-2 sm:flex-row sm:justify-between": isRow,
        "flex-col gap-2": !isRow,
      }, classNameComponent)}
    >
      <div className={clsx("flex flex-wrap justify-between gap-y-6 sm:flex-nowrap lg:flex-row sm:gap-6 w-full", className)}>
        {list.map((img, idx) => {
          const currentWidth = getImageDimensionValue(width, idx, "w-full lg:w-1/3");
          const currentHeight = getImageDimensionValue(
            height,
            idx,
            "h-[15rem] sm:h-[20rem] lg:h-[30rem]"
          );

          return (
            <div
              ref={containerRef}
              className={clsx("flex flex-col gap-2", currentWidth)}
              key={img.id}
            >
              {img.title && img.title.trim().length > 0 && (
                <Observer animation='slide-up'>
                  <p className={clsx("mb-2 max-sm:text-center", titleHeightClass)}>{img.title}</p>
                </Observer>
              )}
              <Observer threshold={0.5} animation='flip-in-vertical'>
                <div
                  className={clsx(
                    "relative border border-gray-300 rounded-md overflow-hidden w-full cursor-zoom-in",
                    currentHeight, classNameWrapperImage
                  )}
                  onClick={() =>
                    openModal(
                      <ModalSwiperContent slides={list} initialSlide={idx} />
                    )
                  }
                >
                  <Image
                    className={`${objTypeImg} hover:scale-105 transition-transform duration-500`}
                    sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                    src={img.src}
                    alt={img.alt}
                    fill
                  />
                </div>
              </Observer>
              {img.description && !children &&
                <Observer animation='slide-up'>
                  <p className="text-center">{img.description}</p>
                </Observer>
              }
              {img.params && !children && (
                <NestedParameterDescList param={img.params} />
              )}
            </div>
          );
        })}
      </div>
      <Observer
        threshold={0.7}
        animation='zoom-in'
        classNameObserver={classNameObserver}>
        {children}
      </Observer>
    </div>
  );
};

export default ImagesComponent;
