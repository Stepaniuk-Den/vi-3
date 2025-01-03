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

const ImgCarouselPage = ({ imgList }: { imgList: IImage[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  const { openModal } = useModal();

  return (
    <>
      <div className="max-w-md mx-auto mb-4">
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
                className="relative w-full h-[480px] cursor-zoom-in"
                onClick={() =>
                  openModal(
                    <ModalSwiperContent slides={imgList} initialSlide={index} />
                  )
                }
              >
                <Image
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
      <div className=" max-w-xl flex gap-1 justify-between">
        <Swiper
          onSwiper={setThumbsSwiper}
          // loop={true}
          spaceBetween={4}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {imgList.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative w-[110px] h-[80px] rounded-md">
                <Image
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
