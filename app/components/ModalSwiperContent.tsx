// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import ModalCarousel from "./ModalCarousel";
// import Image from "next/image";

// interface ModalSwiperProps {
//   isOpen: boolean;
//   onClose: () => void;
//   slides: { id: string; src: string; alt: string }[];
//   initialSlide?: number;
// }

// const ModalSwiper: React.FC<ModalSwiperProps> = ({
//   isOpen,
//   onClose,
//   slides,
//   initialSlide = 0,
// }) => {
//   if (!isOpen) return null;

//   return (
//     <ModalCarousel onClose={onClose}>
//       <Swiper
//         // loop={true}
//         slidesPerView={1}
//         slidesPerGroup={1}
//         initialSlide={initialSlide}
//         spaceBetween={10}
//         navigation={true}
//         modules={[Navigation]}
//         className="myModalSwiper"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="relative w-full h-[80vh] pointer-events-none rounded-md">
//               <Image
//                 src={slide.src}
//                 alt={slide.alt}
//                 fill
//                 className="rounded-md object-contain"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </ModalCarousel>
//   );
// };

// export default ModalSwiper;

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import ModalCarousel from "./ModalCarousel";
import Image from "next/image";

interface ModalSwiperProps {
  slides: { id: string; src: string; alt: string }[];
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
            <div className="relative w-full h-[90vh] pointer-events-none rounded-md ">
              <Image
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
