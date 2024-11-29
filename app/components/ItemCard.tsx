import { IItemCard } from "@/helpers/interfaces";
import Image from "next/image";
import LinkToPage from "./Buttons/LinkToPage";
import clsx from "clsx";
import Line from "./Line";

// type Props = {
//   t: IItemCard;
// };

const ItemCard: React.FC<IItemCard> = ({
  title,
  description,
  src,
  alt,
  className,
  //   ...rest
}) => {
  return (
    <li className={clsx("flex flex-col w-full pt-3", className)}>
      {/* max-w-xl */}
      <div className="flex-grow">
        <h3 className="subTitleCl xl:leading-none">{title}</h3>
        <Line className="marsala-left" color="marsala" />
        {/* min-h-[64px] */}
      </div>
      <div className="border border-customMarsala-accentLight rounded-md overflow-hidden">
        <div
          className={clsx(
            "relative w-full h-[360px] mb-6 border-b border-customMarsala-accentLight overflow-hidden"
          )}
          // className={clsx(
          //   "relative w-full h-[360px] mb-6 border border-t-0 border-gray-300 rounded-md overflow-hidden"
          // )}
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
        <div className="flex flex-col justify-between h-52">
          <p className="px-4">{description}</p>
          <LinkToPage href="#" className="self-end -mb-[1px] -mr-[1px]">
            Переглянути все
          </LinkToPage>
        </div>
      </div>
    </li>
  );
};

export default ItemCard;
