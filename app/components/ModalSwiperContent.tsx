"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import React from "react";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";

interface ModalSwiperProps {
  slides: { id: string; src: string | StaticImageData; alt: string }[];
  initialSlide?: number;
}

const ModalSwiperContent: React.FC<ModalSwiperProps> = ({
  slides,
  initialSlide = 0,
}) => {
  return (
    <Swiper
      slidesPerView={1}
      slidesPerGroup={1}
      initialSlide={initialSlide}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      className="myModalSwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-[80vh] sm:h-[90vh] pointer-events-none rounded-md ">
            <Image
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 60vw"
              src={slide.src}
              alt={slide.alt}
              fill
              className="rounded-md object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ModalSwiperContent;
