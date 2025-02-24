"use client";
import { ISectionImgAndListProps } from "@/helpers/interfaces";
import { useModal } from "../ModalProvider";
import React from "react";
import TitleBanner from "../TitleBanner";
import Image from "next/image";
import ModalSwiperContent from "../ModalSwiperContent";
import Observer from "@/helpers/observer";

const SectionCardsFewDescr: React.FC<ISectionImgAndListProps> = ({ t }) => {
  const images = Object.values(t.cards).map((card) => ({
    id: card.id,
    src: card.src,
    alt: card.alt || "",
  }));

  const { openModal } = useModal();

  return (
    <section className="sectionCl">
      <div className="container">
        <TitleBanner>
          <h2 className="titleCl">{t.title}</h2>
        </TitleBanner>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 pt-8">
          {Object.values(t.cards).map((card, index) => (
            <li key={card.id} className="w-full flex flex-col gap-2">
              <h3 className="subTitleCl xl:leading-none normal-case">
                {card.title}
              </h3>
              <Observer
          threshold={0.5}
          animation="flip-in-vertical"
          classNameObserver="w-full"
        >
              <div
                className="relative border border-gray-300 rounded-md overflow-hidden w-full h-[15rem] sm:h-[260px] cursor-zoom-in"
                onClick={() =>
                  openModal(
                    <ModalSwiperContent slides={images} initialSlide={index} />
                  )
                }
              >
                <Image
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  src={card.src}
                  alt={card.alt || ""}
                  sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
                  fill
                />
              </div></Observer>
              <div className="flex flex-col gap-1">
                {card.descrList &&
                  Object.values(card.descrList).map((descr, idx) => (
                    <Observer key={idx} threshold={1} animation="zoom-in">
                    <p key={idx}>{descr.desc}</p></Observer>
                  ))}
              </div>
              <div className="flex flex-col gap-10 w-2/3"></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionCardsFewDescr;
