import { INestedCard } from "@/helpers/interfaces";
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
  // sizesize,
  isRow = true,
  imageFit,
  // titleBannerCard,
  // background,
  // layout,
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
        <div className="mb-3">
          <h3 className="subTitleCl xl:leading-none normal-case">{title}</h3>
        </div>
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
            "flex-row gap-8": isRow,
            "flex-col gap-2": description && !isRow,
          }
          // description ? (isRow ? "flex-row gap-8" : "flex-col") : "flex-col"
        )}
      >
        {/* ======== IMAGE ======== */}
        <div className="relative w-full h-[460px] border border-gray-300 rounded-md overflow-hidden">
          <Image
            sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
            src={src || ""}
            alt={alt || ""}
            fill
            priority
            className={clsx({
              "object-cover": imageFit === "cover",
              "object-contain": imageFit === "contain",
            })}
            // style={imageFit ? { objectFit: imageFit } : undefined}
            // placeholder="blur"
          />
        </div>
        {/* ======== DESCRIPTION ======== */}
        {description && <p className="w-full">{description}</p>}
      </div>
    </li>
  );
};

export default NestedCard;
