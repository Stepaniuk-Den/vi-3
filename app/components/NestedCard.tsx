import { INestedCard } from "@/helpers/interfaces";
import Observer from "@/helpers/observer";
import clsx from "clsx";
import Image from "next/image";
// import TitleBanner from "./TitleBanner";

const NestedCard: React.FC<INestedCard> = ({
  title,
  description,
  src,
  alt,
  className,
  size = "w-full",
  imgH = "h-[460px]",
  isRow = true,
  // titleBannerCard,
  // background,
  // layout,
  imgFit,
  onClick,
}) => {
  return (
    <li
      className={clsx(
        "flex flex-col",
        className,
        size
        // {
        //   "bg-customMarsala-accentLight": background === "marsala",
        //   "bg-customElement": background === "blue",
        // },
        // sizesize,
        // {
        //   "w-1/4": size === "w-1/4",
        //   "w-1/2": size === "w-1/2",
        //   "w-full": size === "w-full",
        // }
      )}
    >
      {/* ======== TITLE ======== */}
      {title && (
        // <div className="mb-3">
        <Observer animation="slide-up" classNameObserver="mb-3">
          <h3 className="subTitleCl xl:leading-none normal-case">{title}</h3>
        </Observer>
        // </div>
      )}

      {/* <div
        className={clsx(
          "flex w-full",
          description ? "flex-row gap-8" : "flex-col"
        )}
      > */}
      <div
        className={clsx(
          "flex w-full",
          {
            "flex-col md:flex-row gap-4 md:gap-8": isRow,
            "flex-col gap-2": description && !isRow,
          }
          // description ? (isRow ? "flex-row gap-8" : "flex-col") : "flex-col"
        )}
      >
        {/* ======== IMAGE ======== */}
        <Observer
          threshold={0.5}
          animation="flip-in-vertical"
          classNameObserver="w-full"
        >
          <div
            className={clsx(
              "relative w-full border border-gray-300 rounded-md overflow-hidden cursor-zoom-in",
              imgH
            )}
            onClick={onClick}
          >
            <Image
              sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
              src={src || ""}
              alt={alt || ""}
              fill
              priority
              className={clsx(
                "hover:scale-105 transition-transform duration-500",
                {
                  "object-cover": imgFit === "cover",
                  "object-contain": imgFit === "contain",
                }
              )}
              // style={imgFit ? { objectFit: imgFit } : undefined}
              // placeholder="blur"
            />
          </div>
        </Observer>
        {/* ======== DESCRIPTION ======== */}
        {description && (
          <Observer
            threshold={1}
            animation="zoom-in"
            classNameObserver="w-full"
          >
            <p className="w-full">{description}</p>
          </Observer>
        )}
      </div>
    </li>
  );
};

export default NestedCard;
