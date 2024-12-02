import { IItemCard } from "@/helpers/interfaces";
import Image from "next/image";
import LinkToPage from "./Buttons/LinkToPage";
import clsx from "clsx";
import Line from "./Line";

// type Props = {
//   t: IItemCard;
//   // tBtn: (key: string) => string;
// };

const ItemCard: React.FC<IItemCard> = ({
  title,
  description,
  src,
  alt,
  className,
  btnOffset,
  tBtn,
  //   ...rest
}) => {
  return (
    <li className={clsx("flex flex-col w-full pt-3", className)}>
      {/* max-w-xl */}
      <div className="shadow-lg rounded-md p-3">
        <div className="flex-grow">
          <h3 className="subTitleCl xl:leading-none">{title}</h3>
          <Line className="marsala-left" color="marsala" />
          {/* min-h-[64px] */}
        </div>
        {/* <div className="border border-customMarsala-accentLight rounded-md overflow-hidden"> */}
        <div
          // className={clsx(
          //   "relative w-full h-[360px] mb-6 border-b border-customMarsala-accentLight overflow-hidden"
          // )}
          className={clsx(
            "relative w-full h-[360px] mb-6 border border-gray-300 rounded-md overflow-hidden"
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
          <p className="">{description}</p>
          <LinkToPage href="#" className="self-end" btnOffset={btnOffset}>
            {tBtn}
          </LinkToPage>
        </div>
      </div>
      {/* </div> */}
    </li>
  );
};

export default ItemCard;
