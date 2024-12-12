import React, { ReactNode } from "react";

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
    <div className="bg-customMarsala-accentLight text-center text-white p-8 mb-8 rounded-md">
      {/* <h2 className={`${titleSize}`}>
        {title}
      </h2> */}
      {children}
    </div>
  );
};

export default TitleBanner;
