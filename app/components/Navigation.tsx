"use client";

import clsx from "clsx";
import { useLocale, useMessages, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { isAppleMobileDevice, isMobileDevice } from "@/helpers/detect-browser";
import IconPlus from "@/public/icons/MaterialSymbolsPlus.svg";
import { useModal } from "./ModalProvider";
import { useClickOutside } from "@/helpers/useClickOutside";
import { useHoveredMenuStore } from "@/store/hoveredMenuStore";
import useCurrentHeight from "@/helpers/useCurrentHeight";

interface INavigationItem {
  title: string;
  href: string;
  links?: { [key: string]: ILinkProps };
}
interface ILinkProps {
  title: string;
  slug: string;
}

interface NavigationProps {
  scrollY?: number;
}

const Navigation: React.FC<NavigationProps> = ({ scrollY }) => {
  const t = useTranslations("Navigation");
  const messages = useMessages();
  // const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [subMenuZIndex, setSubMenuZIndex] = useState<number | null>(null);

  const pathname = usePathname();
  const locale = useLocale();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023.98 });
  const subMenuRef = useRef<HTMLUListElement | null>(null)
  const { closeModal } = useModal();
  const height = useCurrentHeight();
  const hoveredMenu = useHoveredMenuStore((state) => state.hoveredMenu);
  const setHoveredMenu = useHoveredMenuStore((state) => state.setHoveredMenu);

  const keys = Object.keys(messages.Navigation);
  const pathnameHome = pathname.slice(3) === ""
  const selectedLayoutSegment = pathname && !pathnameHome ? `${pathname.split("/")[2]}` : "home";
  const isMobile = isAppleMobileDevice || isMobileDevice || isTabletOrMobile;

  const handleClickOutside = (e?: MouseEvent | TouchEvent) => {
    const currentSubMenu = subMenuRef.current && subMenuRef.current.contains(e?.target as Node)
    if (hoveredMenu && !currentSubMenu) {
      setHoveredMenu(null);
      setSubMenuZIndex((prev) => (prev === 100 ? null : prev));
    }
  }

  const activeLinkRef = useClickOutside<HTMLLIElement>(handleClickOutside);

  const handleMouseEnter = (key: string) => {
    if (!isMobile) {
      setHoveredMenu(key);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredMenu(null);
    }
  };

  const handleClickInMobile = (key: string) => {
    setHoveredMenu(hoveredMenu === key ? null : key);
    setSubMenuZIndex(prev => (prev === 100 ? null : 100));
  };
  const r = activeLinkRef.current?.clientHeight ?? 48

  return (
    <ul className="relative flex flex-col items-center justify-start max-h-min lg:h-full gap-x-1 lg:py-3 uppercase lg:flex-row">
      {keys.map((key, index) => {
        const item = t.raw(key) as INavigationItem;
        const subKeys = item.links ? Object.values(item.links) : [];
        const isActive = selectedLayoutSegment === key;
        const isActiveMobile = hoveredMenu === key && isMobile;
        const isSubMenu = subKeys.length > 0 && hoveredMenu === key;
        const y = scrollY && r ? index * r - scrollY : index * r;

        return (
          <li
            ref={activeLinkRef}
            key={index}
            className={clsx(
              "relative z-30 group/item flex items-center justify-center min-w-max h-12 font-medium  cursor-pointer transition-transform duration-300 ease-in-out", {
              "w-full items-start justify-between after:content-none": isMobile,
              "text-customMarsala bg-white rounded-md": isActive || isActiveMobile,
            }
            )}
            style={{
              transform: hoveredMenu === key && isMobile ?
                `translateY(-${y + 1}px)`
                : "translateY(0)",
              zIndex: subMenuZIndex && isSubMenu ? 100 : 'auto',
            }}
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
          >
            {isMobile && !hoveredMenu && !isActive && <div className="after-line" />}
            <Link
              href={`/${locale}${item.href}`}
              onClick={() => {
                if (!isMobile) return
                // setActiveMenu(index);
                setTimeout(closeModal, 500);
              }}
              className={clsx(
                "flex items-center h-full py-3 px-5 rounded-md border border-transparent  hover:lg:border-white",
                {
                  // "text-customMarsala bg-white lg:border-white": isActive || isActiveMobile || activeMenu === key,
                  "text-white": !isActive && !isActiveMobile,
                  "justify-start w-[85%]": isMobile,
                  "justify-center w-full": !isMobile,
                }
              )}
            >
              {item.title}
            </Link>
            {
              isMobile && subKeys.length > 0 && !hoveredMenu &&
              <div
                className={clsx("flex items-center justify-center w-10 h-10 cursor-pointer duration-300 ease-linear",
                  {
                    "text-customMarsala": isActive,
                    "rotate-0 duration-300 ease-linear text-white": !isActive
                  }
                )}
                onClick={() => handleClickInMobile(key)}>
                <IconPlus />
              </div>
            }
            {
              isSubMenu && (
                <div className={clsx("absolute z-20 top-full pt-1 lg:pt-3 left-0 flex flex-col w-full lg:w-max items-start rounded-md overflow-hidden", `h-[calc(${height}-128px)]`)}>
                  <ul
                    ref={subMenuRef}
                    className={clsx("p-2 z-20 flex flex-col w-full h-full lg:max-w-max lg:max-h-min items-start bg-white rounded-md shadow-md overflow-y-scroll lg:overflow-hidden",
                    )}
                  >
                    {subKeys.map((subItem, subIndex) => {
                      return (
                        <li
                          key={subIndex}
                          className="w-full rounded-md hover:bg-customMarsala-accent hover:text-white"
                        >
                          <Link
                            className="flex px-4 py-2"
                            href={`/${locale}${item.href}/${subItem.slug}`}
                            onClick={() => {
                              if (!isMobile) return
                              setTimeout(closeModal, 500);
                            }}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )
            }
          </li>
        );
      })}
    </ul >
  );
};

export default Navigation;
