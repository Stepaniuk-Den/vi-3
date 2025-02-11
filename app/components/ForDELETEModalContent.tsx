import React from "react";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";

interface ModalProps {
  slide: { id: string; src: string | StaticImageData; alt: string };
  // initialSlide?: number;
}

const ModalContent: React.FC<ModalProps> = ({
  slide,
  // initialSlide = 0,
}) => {
  return (
    <div className="relative w-full h-[80vh] sm:h-[90vh] pointer-events-none rounded-md ">
      <Image
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 60vw"
        src={slide.src}
        alt={slide.alt}
        fill
        className="rounded-md object-contain"
      />
    </div>
  );
};

export default ModalContent;
