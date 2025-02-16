"use client";
import { IDesc } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
import React from "react";
import Line from "../Line";
import Image from "next/image";
import ModalSwiperContent from "../ModalSwiperContent";

interface ITopDescrAndImgProps {
  t: {
    title: string;
    id: string;
    src: string;
    alt: string;
    descrList?: {
      [key: string]: IDesc;
    };
  };
}

const TopDescrAndImg: React.FC<ITopDescrAndImgProps> = ({ t }) => {
  const { title, id, src, alt, descrList } = t;
  const { openModal } = useModal();

  return (
    <section className="pageCl">
      <div className="container">
        <h1 className="titleCl pt-16 lg:pt-0">{title}</h1>
        <Line className="marsala-center" color="marsala" />
        <div className="flex flex-col sm:flex-row gap-5">
          <div
            className="relative border border-gray-300 rounded-md overflow-hidden w-full sm:w-2/3 h-[15rem] sm:h-[460px] cursor-zoom-in"
            onClick={() =>
              openModal(
                <ModalSwiperContent
                  slides={[{ id: id, src: src, alt: alt }]}
                  initialSlide={0}
                />
              )
            }
          >
            <Image
              className="object-cover"
              //   sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              src={src}
              alt={alt}
              fill
            />
          </div>
          <div className="flex flex-col gap-1 sm:pt-5 w-full sm:w-1/3">
            {descrList &&
              Object.values(descrList).map((descr, idx) => (
                <p key={idx}>{descr.desc}</p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDescrAndImg;
