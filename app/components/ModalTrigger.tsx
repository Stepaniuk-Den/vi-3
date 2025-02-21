"use client";

import Image, { StaticImageData } from "next/image";
import { useModal } from "./ModalProvider";
import ModalSwiperContent from "./ModalSwiperContent";
import Observer from "@/helpers/observer";

type Props = {
  className: string;
  src: string | StaticImageData;
  alt: string;
  img: {
    id: string;
    src: string | StaticImageData;
    alt: string;
  }[];
  idx?: number;
};

const ModalTrigger: React.FC<Props> = ({ className, src, alt, img }) => {
  const { openModal } = useModal();

  return (
    <Observer
      threshold={0.5}
      animation="flip-in-vertical"
      classNameObserver={className}
    >
      <div
        //  className={clsx(className, "cursor-zoom-in")}
        className="cursor-zoom-in"
        onClick={() => openModal(<ModalSwiperContent slides={img} />)}
      >
        <Image
          sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
          src={src || ""}
          alt={alt || ""}
          fill
          priority
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </Observer>
  );
};

export default ModalTrigger;
