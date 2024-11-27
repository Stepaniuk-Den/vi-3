import { ILinkToPage } from "@/helpers/interfaces";
import clsx from "clsx";
import Link from "next/link";

const LinkToPage: React.FC<ILinkToPage> = ({ href, className, children }) => {
  return (
    <Link href={href} className={clsx(className, "LinkToPageCl")}>
      {children}
    </Link>
  );
};

export default LinkToPage;
