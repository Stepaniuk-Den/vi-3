import React, { ReactNode } from "react";
import Line from "./Line";

interface ITitleBannerProps {
  // title: string;
  // size: "medium" | "large";
  children: ReactNode;
}

const TitleBanner: React.FC<ITitleBannerProps> = ({
  children,
  // title,
  // size = "large",
}) => {
  // const titleSize = size === "medium" ? "subTitleCl" : "titleCl";

  return (
    <div className="flex flex-col uppercase tracking-widest items-center pb-4 rounded-md text-customMarsala">
      {/* <h2 className={`${titleSize}`}>
        {title}
      </h2> */}
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
