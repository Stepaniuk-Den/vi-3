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
  tBtn,
  className,
  btnOffset,
  layout = "vertical",
  reverse = false,
  background = "",
  slug,
  path,
  //   ...rest
}) => {
  // const router = useRouter();
  // const isHomePage = router.pathname === "/";

  const link = slug ? `/${path}/${slug}` : "#";

  return (
    <li
      className={clsx(
        "flex w-full shadow-lg rounded-md",
        className,
        layout === "horizontal" ? "flex-row gap-8 p-7" : "flex-col p-3",
        reverse && layout === "horizontal" ? "flex-row-reverse" : "",
        {
          "bg-customMarsala-accentLight text-white": background === "marsala",
          "bg-customElement text-white": background === "blue",
        }
      )}
      // style={{ backgroundColor: background }}
    >
      {layout !== "horizontal" && (
        <div>
          {/* className="flex-grow" */}
          <h3 className="subTitleCl xl:leading-none">{title}</h3>
          <Line className="marsala-left" color="marsala" />
        </div>
      )}

      {/* ======== IMAGE ======== */}
      <div
        className={clsx(
          "relative h-[360px] border border-gray-300 rounded-md overflow-hidden",
          layout === "horizontal" ? "mb-0 w-1/2" : "mb-6 w-full"
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

      {/* ======== DESCRIPTION ======== */}
      <div
        className={clsx(
          "flex flex-col justify-between",
          layout === "horizontal" ? "w-1/2" : "w-full lg:h-52 h-36"
        )}
      >
        <div>
          {layout === "horizontal" && (
            <div className="pt-12">
              <h3 className="subTitleCl xl:leading-none">{title}</h3>
              <Line
                className="marsala-left"
                color={background === "marsala" ? "blue" : "marsala"}
              />
            </div>
          )}
          <p>{description}</p>
        </div>

        <LinkToPage href={link} className="self-end" btnOffset={btnOffset}>
          {tBtn}
        </LinkToPage>
      </div>
    </li>
  );
};

export default ItemCard;
