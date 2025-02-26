import { ILinkToPage } from "@/helpers/interfaces";
import { Link } from "@/i18n/routing";
import clsx from "clsx";
// import Link from "next/link";

const LinkToPage: React.FC<ILinkToPage> = ({
  href,
  className,
  children,
  btnOffset,
}) => {
  return (
    <Link href={href} className={clsx(className, btnOffset, "linkToPageCl")}>
      <span>{children}</span>
      <i></i>
    </Link>
  );
};

export default LinkToPage;
