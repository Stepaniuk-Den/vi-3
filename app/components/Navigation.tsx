"use client";

import clsx from "clsx";
import { useMessages, useTranslations } from "next-intl";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

interface INavigationItem {
  title: string;
  href: string;
  links?: { [key: string]: ILinkProps };
}

interface ILinkProps {
  title: string;
  slug: string;
}

const Navigation = () => {
  const t = useTranslations("Navigation");
  const messages = useMessages();
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mouseY, setMouseY] = useState<number | null>(null);
  const keys = Object.keys(messages.Navigation);
  const pathname = selectedLayoutSegment ? `${selectedLayoutSegment}` : "home";

  const handleMouseEnter = (key: string) => {
    setHoveredMenu(key);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>, key: string) => {
    if (mouseY !== null && e.clientY > mouseY) {
      setHoveredMenu(key);
    }
    setMouseY(e.clientY);
  };

  return (
    <ul className="flex flex-col items-center justify-start h-full gap-x-1 py-3 px-4 uppercase lg:flex-row">
      {keys.map((key, index) => {
        const isActive = pathname === key;
        const item = t.raw(key) as INavigationItem;
        const subKeys = item.links ? Object.values(item.links) : [];

        return (
          <li
            key={index}
            className={clsx(
              "group/item relative flex items-center justify-center min-w-max h-full font-medium  cursor-pointer transition-all"
            )}
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={(e) => handleMouseMove(e, key)}
          >
            <Link
              href={item.href}
              className={clsx(
                "flex items-center justify-center w-full h-full py-3 px-5 rounded-md text-white  border border-transparent transition-all hover:border-white",
                {
                  "text-inherit bg-white": isActive,
                }
              )}
            >
              {item.title}
            </Link>
            {subKeys.length > 0 && hoveredMenu === key && (
              <div className="absolute top-full pt-3 left-0 flex flex-col items-start">
                <ul className=" p-2 flex flex-col items-start bg-white rounded-md shadow-md">
                  {subKeys.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 w-full rounded-md hover:bg-customMarsala-accent hover:text-white"
                    >
                      <Link href={subItem.slug}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
