"use client";
import { IDesc } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
import React from "react";
import Line from "../Line";
import Image from "next/image";
import ModalSwiperContent from "../ModalSwiperContent";
import Observer from "@/helpers/observer";

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
      <Observer
          animation="zoom-in"
          duration="0.8s"
          classNameObserver="flex justify-center"
          classNameChild="laser-text"
        >
        <h1 data-text={title} className="titleCl mt-16 inline-block">{title}</h1></Observer>
        <Observer animation="zoom-in-line" duration="0.8s">
        <Line className="marsala-center" color="marsala" /></Observer>
        <div className="flex flex-col sm:flex-row gap-5">
        <Observer
          threshold={0.5}
          animation="flip-in-vertical"
          classNameObserver="w-full sm:w-2/3"
        >
          <div
            className="relative border border-gray-300 rounded-md overflow-hidden  h-[15rem] sm:h-[460px] cursor-zoom-in"
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
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              src={src}
              alt={alt}
              fill
              priority
            />
          </div></Observer>
          <div className="flex flex-col gap-1 sm:pt-5 w-full sm:w-1/3">
            {descrList &&
              Object.values(descrList).map((descr, idx) => (
                <Observer key={idx} threshold={1} animation="zoom-in">
                <p >{descr.desc}</p></Observer>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDescrAndImg;
