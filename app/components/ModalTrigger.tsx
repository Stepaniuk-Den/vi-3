"use client";

import Image, { StaticImageData } from "next/image";
import { useModal } from "./ModalProvider";
import ModalSwiperContent from "./ModalSwiperContent";
import clsx from "clsx";

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
    <div
      className={clsx(className, "cursor-zoom-in")}
      onClick={() => openModal(<ModalSwiperContent slides={img} />)}
    >
      <Image
        sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
        src={src || ""}
        alt={alt || ""}
        fill
        priority
        className="object-cover"
      />
    </div>
  );
};

export default ModalTrigger;
