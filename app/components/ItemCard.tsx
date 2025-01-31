import { IItemCard } from "@/helpers/interfaces";
import Image from "next/image";
import LinkToPage from "./Buttons/LinkToPage";
import clsx from "clsx";
import Line from "./Line";

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
  onClick,
  //   ...rest
}) => {
  // const router = useRouter();
  // const isHomePage = router.pathname === "/";

  const link = slug ? `/${path}/${slug}` : "#";

  return (
    <div
      className={clsx(
        "flex m-auto max-md:max-w-[448px] w-full shadow-lg rounded-md",
        // className,
        layout === "horizontal"
          ? "flex-col md:flex-row gap-8 p-7"
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
          <h3 className="subTitleCl xl:leading-none">{title}</h3>
          <Line className="marsala-left" color="marsala" />
        </div>
      )}

      {/* ======== IMAGE ======== */}
      <div
        className={clsx(
          "relative border border-gray-300 rounded-md overflow-hidden",
          imgH,
          layout === "horizontal" ? "w-full md:w-1/2" : "mb-6 w-full"
        )}
        onClick={onClick}
      >
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
              <h3 className="subTitleCl xl:leading-none">{title}</h3>
              <Line
                className="marsala-left"
                // className={clsx(
                //   alignment === "center" ? "marsala-center" : "marsala-left"
                // )}
                color={background === "marsala" ? "blue" : "marsala"}
              />
            </div>
          )}
          <p>{description}</p>
        </div>

        <LinkToPage
          href={link}
          className={clsx("mt-2 md:mt-0", {
            // "mt-2 md:mt-0": layout === "horizontal",
            "self-end": alignment === "end",
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
