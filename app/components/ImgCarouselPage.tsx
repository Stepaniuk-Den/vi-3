"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {
  EffectFade,
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
} from "swiper/modules";
import { IImage } from "@/helpers/interfaces";
import { useModal } from "./ModalProvider";
import Image from "next/image";
import SwiperCore from "swiper";
import ModalSwiperContent from "./ModalSwiperContent";
import clsx from "clsx";

interface IProps {
  imgList: IImage[];
  width?: string;
  height?: string;
}

const ImgCarouselPage = ({
  imgList,
  width = "max-w-md",
  height = "h-[480px]",
}: IProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  const { openModal } = useModal();

  return (
    <>
      <div className={clsx("mx-auto mb-4", width)}>
        <Swiper
          loop={true}
          spaceBetween={10}
          effect={"fade"}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[EffectFade, FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper2"
        >
          {imgList.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div
                className={clsx("relative w-full cursor-zoom-in", height)}
                onClick={() =>
                  openModal(
                    <ModalSwiperContent slides={imgList} initialSlide={index} />,
                    {
                      classNameBtn: "top-[-11px] right-[-108px]",
                      classNameModalContent: "w-[80vw] h-[90vh]",
                      classNameBackdrop: "bg-customMarsala-accentLight"
                    }
                  )
                }
              >
                <Image
                  sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-w-[360px] flex mx-auto">
        <Swiper
          onSwiper={setThumbsSwiper}
          // loop={true}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {imgList.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative w-[110px] h-[80px] rounded-md">
                <Image
                  sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default ImgCarouselPage;
