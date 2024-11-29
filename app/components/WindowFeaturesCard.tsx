import { windowSvgItems } from "@/data/svgWindows";
import React from "react";

export interface IWindowFeaturesProps {
  id?: string;
  title: string;
  ariaLabel: string;
  description: string;
  svgName:string;
}

const WindowFeaturesCard: React.FC<{ t: IWindowFeaturesProps }> = ({ t }) => {
  const { title, ariaLabel, description, svgName } = t;

  return (
    <li className="flex flex-col items-center  px-8 py-6 shadow-lg relative">
        {windowSvgItems.windows.map((item) =>
        item.name === svgName ? (
          <item.svg key={item.name} aria-label={ariaLabel} className=" absolute left-[43%] top-[10%] w-9 h-8  fill-white colo" />
        ) : null
      )}
      <span className="w-12 h-12 bg-customMarsala-accentLight flex-shrink-0 rounded-[18px_5px_10px_5px] mb-4"></span>
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-center">{description}</p>
    </li>
  );
};

export default WindowFeaturesCard;
