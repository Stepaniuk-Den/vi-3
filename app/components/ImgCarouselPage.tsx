"use client";

import { IImage } from "@/helpers/interfaces";
import Image from "next/image";
import { useEffect, useState } from "react";
import Arrow from "@/public/icons/Arrow_rounded.svg";


const ImgCarouselPage = ({ imgList }: { imgList: IImage[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imgList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imgList.length]);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imgList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? imgList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <div className="relative w-2/3 h-[480px] mb-4 mx-auto ">
        <Image
          src={imgList[activeIndex].src}
          alt={imgList[activeIndex].alt}
          width={700}
          height={400}
          className="w-full h-full object-cover rounded-md"
        />
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-24 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 bg-transparent"
        >
          <Arrow className="rotate-180 fill-customMarsala"/>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-24 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 bg-transparent"
        >
           <Arrow className="fill-customMarsala"/>
        </button>
      </div>
      <div className="flex justify-between">
        {imgList.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-28 h-20 rounded-md overflow-hidden border-2 ${
              index === activeIndex
                ? "border-blue-500"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={110}
              height={110}
              className="w-full h-full object-cover "
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImgCarouselPage;


// interface ImgCarouselPageProps {
//   t: {
//     (key: string): string;
//     // raw: (key: string) => Record<string, IItemCard>;
//     raw: (key: string) => {
//       [key: string]: IImage | string | undefined;
//     };
//   }; 
// }