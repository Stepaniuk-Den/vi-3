"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Navigation: React.FC<{
  translations: HeaderT["navlink"];
  onClick?: () => void;
}> = ({ translations, onClick }) => {
  const navItems = Object.entries(translations);
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";

  return (
    <ul className="flex items-center justify-start max-w-min h-full gap-8 p-4 md:flex-col md:pb-8 md:pt-16 sm:gap-4 sm:pt-0 sm:mt-0 sm:grid sm:grid-cols-3 sm:grid-rows-auto sm:gap-y-5 sm:gap-x-12">
      {navItems.map(([key, { label, href }]) => {
        const isActive = pathname === href;

        return (
          <li
            onClick={onClick}
            key={key}
            className={clsx(
              "relative flex items-center justify-center min-w-max h-full font-semibold text-dark cursor-pointer transition-all after:absolute after:bottom-[-4px] after:left-1/2 after:w-0 after:h-1 after:bg-accent-yellow after:transform after:scale-x-0 hover:text-dark",
              {
                "text-accent-blue after:left-0 after:w-full after:scale-x-100":
                  isActive,
              }
            )}
          >
            <Link
              href={href}
              className="flex items-center justify-center w-full h-full sm:text-xl"
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
