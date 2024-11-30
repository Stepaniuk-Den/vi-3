import { ILinkToPage } from "@/helpers/interfaces";
import clsx from "clsx";
import Link from "next/link";

const LinkToPage: React.FC<ILinkToPage> = ({
  href,
  className,
  children,
  btnOffset,
}) => {
  return (
    <Link href={href} className={clsx(className, btnOffset, "LinkToPageCl")}>
      {children}
    </Link>
  );
};

export default LinkToPage;
