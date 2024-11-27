import { IItemCard } from "@/helpers/interfaces";
import Image from "next/image";
import LinkToPage from "./Buttons/LinkToPage";

// type Props = {
//   t: IItemCard;
// };

const ItemCard: React.FC<IItemCard> = ({
  title,
  description,
  src,
  alt,
  //   ...rest
}) => {
  return (
    <div className="flex flex-col gap-3 max-w-xl w-full">
      <h2 className="font-poppins text-2xl font-semibold leading-7 uppercase">
        {title}
      </h2>
      <div className="relative max-w-xl w-full h-80  mb-5 border border-gray-300 rounded-md overflow-hidden">
        <Image
          //   className={clsx("imageFadeCl", isFading ? "imageHiddenCl" : "")}
          sizes="(max-width: 767.98px) 355px, (max-width: 1023.98px) 356px,  317px,"
          src={src || ""}
          alt={alt || ""}
          fill
          // placeholder="blur"
        />
      </div>

      <div className="flex flex-col justify-between h-[170px]">
        <p className="">{description}</p>
        <LinkToPage href="#" className="self-end">
          Переглянути все
        </LinkToPage>
      </div>
    </div>
  );
};

export default ItemCard;
