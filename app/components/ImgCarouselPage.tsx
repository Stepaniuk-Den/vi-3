// "use client";

// import { IImage } from "@/helpers/interfaces";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import Arrow from "@/public/icons/Arrow_rounded.svg";


// const ImgCarouselPage = ({ imgList }: { imgList: IImage[] }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % imgList.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [imgList.length]);

//   const handleThumbnailClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % imgList.length);
//   };

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? imgList.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="max-w-4xl mx-auto ">
//       <div className="relative w-2/3 h-[480px] mb-4 mx-auto ">
//         <Image
//           src={imgList[activeIndex].src}
//           alt={imgList[activeIndex].alt}
//           width={700}
//           height={400}
//           className="w-full h-full object-cover rounded-md"
//         />
//         <button
//           onClick={handlePrev}
//           className="absolute top-1/2 -left-24 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 bg-transparent"
//         >
//           <Arrow className="rotate-180 fill-customMarsala"/>
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute top-1/2 -right-24 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 bg-transparent"
//         >
//            <Arrow className="fill-customMarsala"/>
//         </button>
//       </div>
//       <div className="flex gap-1">
//         {imgList.map((image, index) => (
//           <button
//             key={index}
//             onClick={() => handleThumbnailClick(index)}
//             className={`w-28 h-20 rounded-md overflow-hidden border-2 ${
//               index === activeIndex
//                 ? "border-blue-500"
//                 : "border-transparent hover:border-gray-300"
//             }`}
//           >
//             <Image
//               src={image.src}
//               alt={image.alt}
//               width={110}
//               height={110}
//               className="w-full h-full object-cover "
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImgCarouselPage;

"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import {
  EffectFade,
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
} from "swiper/modules";
import { IImage } from "@/helpers/interfaces";
import Image from "next/image";
import SwiperCore from "swiper";
import ModalCarousel from "./ModalCarousel";
import { useModal } from "@/helpers/useModal";

const ImgCarouselPage = ({ imgList }: { imgList: IImage[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useModal(isModalOpen, setIsModalOpen);

  const handleOpenModal = (index: number) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
                onClick={() => handleOpenModal(index)}
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
          loop={true}
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
      {isModalOpen && (
        <ModalCarousel onClose={handleCloseModal}>
          <Swiper
            loop={true}
            initialSlide={activeIndex}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="myModalSwiper"
          >
            {imgList.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative w-full h-[80vh] pointer-events-none rounded-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="rounded-md object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ModalCarousel>
      )}
    </>
  );
};
export default ImgCarouselPage;
