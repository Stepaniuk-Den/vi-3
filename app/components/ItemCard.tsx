import { IItemCard } from "@/helpers/interfaces";
import Image from "next/image";
import LinkToPage from "./Buttons/LinkToPage";
import clsx from "clsx";

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
    <div className={clsx("flex flex-col max-w-xl w-full py-3", className)}>
      <h3 className="subTitleCl p-2">{title}</h3>
      <div
        className={clsx(
          "relative max-w-xl w-full h-80 mb-6 border border-gray-300 rounded-md overflow-hidden",
          className
        )}
      >
        <Image
          //   className={clsx("imageFadeCl", isFading ? "imageHiddenCl" : "")}
          sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
          src={src || ""}
          alt={alt || ""}
          fill
          priority
          // placeholder="blur"
        />
      </div>

      <div className="flex flex-col justify-between h-52">
        <p className="">{description}</p>
        <LinkToPage href="#" className="self-end">
          Переглянути все
        </LinkToPage>
      </div>
    </div>
  );
};

export default ItemCard;
