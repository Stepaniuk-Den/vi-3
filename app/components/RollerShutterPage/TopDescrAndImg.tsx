import React from "react";
import Line from "../Line";
import { IDesc } from "@/helpers/interfaces";
import Image from "next/image";

interface ITopDescrAndImgProps {
  t: (key: string) => string;
  descrList?: {
    [key: string]: IDesc;
  };
}

const TopDescrAndImg: React.FC<ITopDescrAndImgProps> = ({ t, descrList }) => {
  return (
    <section className="pageCl">
      <div className="container">
        <h1 className="titleCl pt-16">{t("title")}</h1>
        <Line className="marsala-center" color="marsala" />
        <div className="flex gap-5">
          <div className="relative border border-gray-300 rounded-md overflow-hidden w-2/3 h-[460px]">
            <Image
              className="object-cover"
              //   sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              src={t("src")}
              alt={t("alt")}
              fill
            />
          </div>
          <div className="flex flex-col gap-1 pt-5 w-1/3">
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
