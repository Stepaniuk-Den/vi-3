import { IImage } from "@/helpers/interfaces";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface IList {
  list: IImage[];
  width: {
    1: string;
    2?: string;
    3?: string;
  };
  height?: string;
}
const ImagesComponent: React.FC<IList> = ({
  list,
  width,
  height = "h-[20rem]",
}) => {
  return (
    <div className="flex gap-10">
      {list.map((img, idx) => {
        const currentWidth = Object.values(width)[idx];
        return (
          <div
            key={img.id}
            className={clsx(
              `relative ${currentWidth} ${height} lg:h-[30rem] border border-gray-300 rounded-md overflow-hidden`,
              {}
            )}
          >
            <Image
              className="object-cover"
              sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
              src={img.src}
              alt={img.alt}
              fill
              priority
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImagesComponent;
