import React, { ReactNode } from "react";
import Line from "./Line";

interface ITitleBannerProps {
  children: ReactNode;
}

const TitleBanner: React.FC<ITitleBannerProps> = ({
  children,
}) => {


  return (
    <div className="flex flex-col uppercase tracking-widest items-center pb-4 rounded-md text-customMarsala">
      {children}
      <div className="flex items-center gap-2 size-min">
        <Line className="marsala-center" color="marsala" />
        <div className="rounded-md size-4 bg-customMarsala"></div>
        <Line className="marsala-center" color="marsala" />
      </div>
    </div>
  );
};

export default TitleBanner;
