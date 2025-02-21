import clsx from "clsx";
import Image from "next/image";
import LinkToPage from "./Buttons/LinkToPage";
import { IGuideProjectElement } from "@/helpers/interfaces";
import Line from "./Line";
import Observer from "@/helpers/observer";

const GuideProjectsElement: React.FC<IGuideProjectElement> = ({
  subtitle,
  title,
  description,
  src,
  alt,
  className,
  sectionId,
  tBtn,
  path,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 w-full p-8 lg:p-14 rounded-md",
        className
      )}
    >
      <Observer
        threshold={0.5}
        animation="flip-in-vertical"
        classNameObserver={
          "relative w-full h-[380px] lg:h-[508px] border border-gray-300 rounded-md overflow-hidden"
        }
      >
        <Image
          sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
          src={src || ""}
          alt={alt || ""}
          fill
          className="object-cover"
        />
      </Observer>
      <div className="flex flex-col justify-center items-center max-w-80 w-full">
        <Observer animation="slide-up">
          <h2 className="subTitleCl text-center">{subtitle}</h2>
        </Observer>
        <Observer animation="zoom-in">
          <Line
            className="marsala-center"
            color={sectionId === "guide" ? "blue" : "marsala"}
          />
        </Observer>
        <Observer animation="slide-up">
          <h3 className="titleCl">{title}</h3>
        </Observer>
        <Observer animation="zoom-in">
          <Line
            className="marsala-center"
            color={sectionId === "guide" ? "blue" : "marsala"}
          />
        </Observer>
        <Observer threshold={1} animation="zoom-in">
          <p className="mb-8 lg:mb-20 text-center xl:leading-7">
            {description}
          </p>
        </Observer>
        <LinkToPage href={`/${path}`} className="self-center">
          {tBtn}
        </LinkToPage>
      </div>
    </div>
  );
};

export default GuideProjectsElement;
