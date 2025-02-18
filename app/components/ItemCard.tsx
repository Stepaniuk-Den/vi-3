import { IItemCard } from "@/helpers/interfaces";
import Image from "next/image";
import LinkToPage from "./Buttons/LinkToPage";
import clsx from "clsx";
import Line from "./Line";
import Observer from "@/helpers/observer";

const ItemCard: React.FC<IItemCard> = ({
  title,
  description,
  src,
  alt,
  tBtn,
  className,
  btnOffset,
  layout = "vertical",
  reverse = false,
  background = "",
  alignment = "center",
  slug,
  path,
  imgH = "h-[360px]",
  offer,
  onClick,
  //   ...rest
}) => {
  // const router = useRouter();
  // const isHomePage = router.pathname === "/";

  const link = slug ? `/${path}/${slug}` : "#";

  return (
    <div
      className={clsx(
        "flex m-auto w-full shadow-lg rounded-md",
        // sm:max-md:max-w-[448px]
        // className,
        layout === "horizontal"
          ? "flex-col md:flex-row gap-8 p-3 sm:p-7"
          : "flex-col p-3",
        reverse && layout === "horizontal" ? "flex-row-reverse" : "",
        {
          "bg-customMarsala-accentLight text-white": background === "marsala",
          "bg-customElement text-white": background === "blue",
        }
      )}
    // style={{ backgroundColor: background }}
    >
      {layout !== "horizontal" && title && (
        <div>
          {/* className="flex-grow" */}
          <h3 className="subTitleCl max-md:text-center xl:leading-none">
            {title}
          </h3>
          <Observer animation="zoom-in">
            <Line className="marsala-left" color="marsala" />
          </Observer>
        </div>
      )}

      {/* ======== IMAGE ======== */}
      <Observer threshold={0.5} animation="flip-in-vertical" classNameObserver={clsx(
        "relative border border-gray-300 rounded-md overflow-hidden",
        // imgH,
        layout === "horizontal" ? "w-full md:w-1/2" : "mb-6 w-full"
      )}>
        <div
          className={clsx(
            "relative border border-gray-300 rounded-md overflow-hidden",
            imgH,
            // layout === "horizontal" ? "w-full md:w-1/2" : "mb-6 w-full"
          )}
          onClick={onClick}
        >
          <Image
            sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
            src={src || ""}
            alt={alt || ""}
            fill
            priority
            className="object-cover"
          // placeholder="blur"
          />
        </div>
      </Observer>

      {/* ======== DESCRIPTION ======== */}
      <div
        className={clsx(
          "flex flex-col justify-between",
          className,
          layout === "horizontal"
            ? "w-full md:w-1/2"
            : "w-full h-auto md:h-44 lg:h-48 xl:h-52"
        )}
      >
        <div>
          {layout === "horizontal" && (
            <div className="lg:pt-12">
              <h3 className="subTitleCl max-md:text-center xl:leading-none">
                {title}
              </h3>
              <Observer animation="zoom-in">
                <Line
                  className={offer ? "marsala-center" : "marsala-left"}
                  // className={clsx(
                  //   alignment === "center" ? "marsala-center" : "marsala-left"
                  // )}
                  color={background === "marsala" ? "blue" : "marsala"}
                />
              </Observer>
            </div>
          )}
          <p>{description}</p>
        </div>

        <LinkToPage
          href={link}
          className={clsx("mt-2 md:mt-0", {
            // "mt-2 md:mt-0": layout === "horizontal",
            "self-center md:self-end": alignment === "end",
            "self-center": alignment === "center",
            "self-start": alignment === "start",
          })}
          btnOffset={btnOffset}
        >
          {tBtn}
        </LinkToPage>
      </div>
    </div>
  );
};

export default ItemCard;
