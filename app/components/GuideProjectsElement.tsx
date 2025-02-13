import clsx from "clsx";
import Image from "next/image";
import LinkToPage from "./Buttons/LinkToPage";
import { IGuideProjectElement } from "@/helpers/interfaces";
import Line from "./Line";

const GuideProjectsElement: React.FC<IGuideProjectElement> = ({
  subtitle,
  title,
  description,
  src,
  alt,
  className,
  sectionId,
  tBtn,
  //   ...rest
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 w-full p-8 lg:p-14 rounded-md",
        className
      )}
    >
      <div
        className={
          "relative w-full h-[380px] lg:h-[508px] border border-gray-300 rounded-md overflow-hidden"
        }
      >
        <Image
          sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
          src={src || ""}
          alt={alt || ""}
          fill
        />
      </div>
      <div className="flex flex-col justify-center items-center max-w-80 w-full">
        <h2 className="subTitleCl text-center">{subtitle}</h2>
        {/* mb-8 */}
        <Line
          className="marsala-center"
          color={sectionId === "guide" ? "blue" : "marsala"}
        />
        <h3 className="titleCl">{title}</h3>
        {/* mb-8 */}
        <Line
          className="marsala-center"
          color={sectionId === "guide" ? "blue" : "marsala"}
        />
        <p className="mb-8 lg:mb-20 text-center xl:leading-7">{description}</p>
        <LinkToPage href="#" className="self-center">
          {tBtn}
        </LinkToPage>
      </div>
    </div>
  );
};

export default GuideProjectsElement;
