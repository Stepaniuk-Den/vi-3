import { INestedCard } from "@/helpers/interfaces";
import clsx from "clsx";
import Image from "next/image";
import TitleBanner from "./TitleBanner";

const NestedCard: React.FC<INestedCard> = ({
  title,
  description,
  src,
  alt,
  className,
  size,
  titleBannerCard,
  // background,
  // layout,
}) => {
  return (
    <li
      className={clsx(
        "flex flex-col p-3",
        className,
        // {
        //   "bg-customMarsala-accentLight": background === "marsala",
        //   "bg-customElement": background === "blue",
        // },
        {
          "w-1/4": size === "small",
          "w-full": size === "large",
        }
      )}
    >
      {/* ======== TITLE ======== */}
      {title &&
        (titleBannerCard ? (
          <TitleBanner>
            <h3 className="subTitleCl xl:leading-none normal-case">{title}</h3>
          </TitleBanner>
        ) : (
          <div className="mb-3">
            <h3 className="subTitleCl xl:leading-none normal-case">{title}</h3>
          </div>
        ))}

      <div
        className={clsx(
          "flex w-full",
          description ? "flex-row gap-8" : "flex-col"
        )}
      >
        {/* ======== IMAGE ======== */}
        <div className="relative h-[460px] border border-gray-300 rounded-md overflow-hidden w-full">
          <Image
            sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
            src={src || ""}
            alt={alt || ""}
            fill
            priority
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
