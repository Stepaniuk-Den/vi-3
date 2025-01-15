"use client";

import clsx from "clsx";
import { useLocale, useMessages, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

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
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const locale = useLocale();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023.98 });
  const keys = Object.keys(messages.Navigation);
  const selectedLayoutSegment = pathname ? `${pathname.split("/")[1]}` : "home";

  const otherLinkRef = useRef<HTMLLIElement | null>(null);

  const handleMouseEnter = (key: string) => {
    setHoveredMenu(key);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLLIElement>) => {
    if (otherLinkRef.current && e.target !== otherLinkRef.current) {
      setHoveredMenu(null);
    }
  };

  return (
    <ul className="flex flex-col items-center justify-start h-full gap-x-1 py-3 uppercase lg:flex-row">
      {keys.map((key, index) => {
        const isActive = selectedLayoutSegment === key;
        const item = t.raw(key) as INavigationItem;
        const subKeys = item.links ? Object.values(item.links) : [];

        return (
          <li
            ref={otherLinkRef}
            key={index}
            className={clsx(
              "group/item relative flex items-center justify-center min-w-max h-full font-medium  cursor-pointer transition-all"
            )}
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={(e) => handleMouseLeave(e)}
          >
            <Link
              href={`/${locale}${item.href}`}
              className={clsx(
                "flex items-center justify-center w-full h-full py-3 px-5 rounded-md border border-transparent transition-all hover:border-white",
                {
                  "text-customMarsala bg-white": isActive,
                  "text-white": !isActive,
                }
              )}
            >
              {item.title}
            </Link>
            {subKeys.length > 0 && hoveredMenu === key && (
              <div className="absolute top-full pt-3 left-0 flex flex-col w-max items-start">
                <ul className=" p-2 flex flex-col items-start bg-white rounded-md shadow-md">
                  {subKeys.map((subItem, subIndex) => {
                    return (
                      <li
                        key={subIndex}
                        className="w-full rounded-md hover:bg-customMarsala-accent hover:text-white"
                      >
                        <Link
                          className="flex px-4 py-2"
                          href={`/${locale}${item.href}/${subItem.slug}`}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    );
                  })}
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
