import React, { ReactNode } from "react";
import Line from "./Line";
import Observer from "@/helpers/observer";

interface ITitleBannerProps {
  children: ReactNode;
}

const TitleBanner: React.FC<ITitleBannerProps> = ({
  children,
}) => {


  return (
    <div className="flex flex-col uppercase tracking-widest items-center pb-4 rounded-md text-customMarsala">
      <Observer animation="zoom-in">
        {children}
      </Observer>
      <div className="flex items-center gap-2 size-min">
        <Observer animation="zoom-in-line-left">
          <Line className="marsala-center" color="marsala" />
        </Observer>
        <Observer animation="zoom-in">
          <div className="rounded-md size-4 bg-customMarsala"></div>
        </Observer>
        <Observer animation="zoom-in-line-right">
          <Line className="marsala-center" color="marsala" />
        </Observer>
      </div>
    </div>
  );
};

export default TitleBanner;
