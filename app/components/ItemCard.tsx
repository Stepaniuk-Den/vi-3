import { IItemCard } from "@/helpers/interfaces";
import Image from "next/image";
import LinkToPage from "./Buttons/LinkToPage";
import clsx from "clsx";
import Line from "./Line";
import { useRouter } from "next/router";

// type Props = {
//   t: IItemCard;
//   // tBtn: (key: string) => string;
// };

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
  //   ...rest
}) => {
  // const router = useRouter();
  // const isHomePage = router.pathname === "/";

  return (
    <li
      className={clsx(
        "flex w-full shadow-lg rounded-md p-3",
        className,
        layout === "horizontal" ? "flex-row items-center" : "flex-col",
        reverse && layout === "horizontal" ? "flex-row-reverse" : ""
      )}
    >
      {/* max-w-xl */}
      {/* <div className="shadow-lg rounded-md p-3"> */}
      {layout !== "horizontal" && (
        <div className="flex-grow">
          <h3 className="subTitleCl xl:leading-none">{title}</h3>
          <Line className="marsala-left" color="marsala" />
          {/* min-h-[64px] */}
        </div>
      )}

      {/* <div className="border border-customMarsala-accentLight rounded-md overflow-hidden"> */}
      <div
        // className={clsx(
        //   "relative w-full h-[360px] mb-6 border-b border-customMarsala-accentLight overflow-hidden"
        // )}
        className={clsx(
          "relative w-full h-[360px] border border-gray-300 rounded-md overflow-hidden",
          layout === "horizontal" ? "lg:w-1/2 h-80 lg:h-full" : "mb-6"
        )}
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
      <div className="flex flex-col justify-between lg:h-52 h-36">
        {layout === "horizontal" && (
          <div className="flex-grow">
            <h3 className="subTitleCl xl:leading-none">{title}</h3>
            <Line className="marsala-left" color="marsala" />
            {/* min-h-[64px] */}
          </div>
        )}
        <p className="">{description}</p>
        <LinkToPage href="#" className="self-end" btnOffset={btnOffset}>
          {tBtn}
        </LinkToPage>
      </div>
      {/* </div> */}
      {/* </div> */}
    </li>
  );
};

export default ItemCard;
