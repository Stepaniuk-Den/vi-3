"use client";

import React, { useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useMessages, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import IconPlus from "@/public/icons/MaterialSymbolsPlus.svg";
import { useModal } from "./ModalProvider";
import { useClickOutside } from "@/helpers/useClickOutside";
import { useHoveredMenuStore } from "@/store/hoveredMenuStore";
import useCurrentViewportHeight from "@/helpers/useCurrentViewportHeight";
import { useDebouncedCallback } from "@/helpers/useDebouncedCallback";
import NavigationSubMenuList from "./NavigationSubMenuList";
import { Link } from "@/i18n/routing";
import { useIsBigTabletStore } from "@/store/isBigTabletStore";
import { useIsMobileStore } from "@/store/isMobileStore";

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
  subMenuRef?: React.RefObject<HTMLUListElement>;
}

const Navigation: React.FC<NavigationProps> = ({ scrollY, subMenuRef }) => {
  const t = useTranslations("Navigation");
  const messages = useMessages();
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const [subMenuZIndex, setSubMenuZIndex] = useState<number | null>(null);
  const [showListItems, setShowListItems] = useState<string>("relative");
  const [showSubMenuWithDelay, setShowSubMenuWithDelay] = useState(false);

  const pathname = usePathname();

  const menuRef = useRef<HTMLUListElement | null>(null);

  const { closeModal } = useModal();
  const heightViewport = useCurrentViewportHeight();

  const hoveredMenu = useHoveredMenuStore((state) => state.hoveredMenu);
  const isBigTablet = useIsBigTabletStore((state) => state.isBigTablet);
  const isMobile = useIsMobileStore((state) => state.isMobile);
  const setHoveredMenu = useHoveredMenuStore((state) => state.setHoveredMenu);

  const keys = Object.keys(messages.Navigation);
  const pathnameHome = pathname.slice(3) === ""
  const selectedLayoutSegment = pathname && !pathnameHome ? `${pathname.split("/")[2]}` : "home";
  const selectedSubMenuSegment = selectedLayoutSegment !== "home" ? `${pathname.split("/")[3]}` : "topMenu";

  const refsMemo = useMemo(() => keys.map(() => React.createRef<HTMLLIElement>()), [keys]);

  const handleDebouncedMenu = useDebouncedCallback(
    (key: string) => {
      if (key === "") {
        setHoveredMenu(null);
        setShowSubMenuWithDelay(false);
      } else {
        setShowSubMenuWithDelay(true);
      }
    },
    300
  );


  const handleClickOutside = (e?: MouseEvent | TouchEvent) => {
    if (!isMobile && !isBigTablet) return
    const isScrollButton = (e?.target as HTMLElement)?.closest('div[data-id="subMenuBtn"]');

    if (isScrollButton) {
      return;
    }

    const currentSubMenu = subMenuRef && subMenuRef.current && subMenuRef.current.contains(e?.target as Node)

    if (hoveredMenu && !currentSubMenu && !isBigTablet) {
      handleSetStateCallback()
      handleDebouncedMenu("", true);
    }

    if (hoveredMenu && !currentSubMenu && isBigTablet) {
      setHoveredMenu(null);
      setShowSubMenuWithDelay(false);
    }
  }

  useClickOutside<HTMLLIElement>(refsMemo, handleClickOutside);

  const handleMouseEnter = (key: string) => {
    if (!isMobile && !isBigTablet) {
      setHoveredMenu(key)
      handleDebouncedMenu(key);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && !isBigTablet) {
      handleDebouncedMenu("", true);
    }
  };

  function handleSetStateCallback() {
    setSubMenuZIndex(prev => (prev === 100 ? null : 100));
    setShowListItems(prev => (prev === "relative" ? "hidden" : "relative"));
  }

  const handleClickInMobile = (key: string) => {
    const isClosing = hoveredMenu === key;
    setHoveredMenu(isClosing ? null : key);

    if (!isBigTablet) {
      handleSetStateCallback()
    }

    if (isClosing) {
      handleDebouncedMenu("");
    } else {
      handleDebouncedMenu(key);
    }
  };

  return (
    <ul ref={menuRef} className={clsx("relative flex flex-col items-center justify-start gap-x-1 pb-3 uppercase w-full landscape:w-11/12 lg:py-3 lg:h-full lg:flex-row")}>
      {keys.map((key, index) => {
        const item = t.raw(key) as INavigationItem;
        const subKeys = item.links ? Object.values(item.links) : [];
        const isActive = selectedLayoutSegment === key;
        const isActiveMobile = hoveredMenu === key && isMobile;
        const isActiveTablet = hoveredMenu === key && isBigTablet;
        const isSubMenu = subKeys.length > 0 && hoveredMenu === key;

        if (isActive && activeMenu !== index) {
          setActiveMenu(index);
        }

        const idx = isActive ? index : index - 1

        return (
          <li
            ref={refsMemo[index]}
            key={index}
            className={clsx(
              "group/item flex items-center justify-center min-w-max h-12 font-medium  cursor-pointer transition-transform duration-300 ease-in-out", {
              "w-full items-start justify-between active:text-customMarsala active:bg-white rounded-md": isMobile && !isBigTablet,
              "relative": showListItems === "relative",
              "hidden": showListItems === "hidden" && !isActiveMobile && !isBigTablet
            }
            )}
            style={{
              transform: isActiveMobile ? `translateY(${scrollY}px)` : `translateY(0)`,
              zIndex: subMenuZIndex && isSubMenu ? 100 : 10,
            }}
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
          >
            {isMobile && !hoveredMenu && idx !== activeMenu && <div className="after-line" />}
            {isMobile && !hoveredMenu && idx !== activeMenu && keys.length - 1 === index && <div className="after-line bottom" />}
            <Link
              href={`/${item.href}`}
              onClick={(e) => {
                // setShowSubMenuWithDelay(false)
                if (!isMobile) {
                  if (isBigTablet) {
                    // setTimeout(() => {
                    //   setHoveredMenu(key)
                    //   handleDebouncedMenu(key)
                    // }, 500);
                    setHoveredMenu(key)
                    handleDebouncedMenu(key)
                    e.preventDefault();
                  }
                  return;
                }
                setTimeout(() => {
                  closeModal();
                  setHoveredMenu(null);
                  setSubMenuZIndex(null);
                }, 500);
              }}
              className={clsx(
                "flex items-center h-full py-3 px-5 rounded-md border border-transparent w-full",
                {
                  "text-white": !isActive && !isActiveMobile,
                  "text-customMarsala bg-white rounded-md": isActive || isActiveMobile,
                  "justify-start": isMobile,
                  "justify-center": !isMobile,
                  "bg-white": isActiveMobile,
                  "hover:lg:border-white": !isBigTablet,
                  "opacity-0": isActiveTablet && showSubMenuWithDelay,
                }
              )}
            >
              {item.title}
            </Link>
            {
              isMobile && isSubMenu &&
              <div
                className={clsx("absolute right-4 flex items-center justify-center w-10 h-10 cursor-pointer duration-300 ease-linear",
                  {
                    "rotate-45 duration-300 ease-linear text-customMarsala": isActiveMobile,
                    "rotate-0 duration-300 ease-linear text-white": !isActiveMobile
                  }
                )}
                onClick={() => handleClickInMobile(key)}>
                <IconPlus />
              </div>
            }
            {
              isBigTablet && showSubMenuWithDelay && (isSubMenu || hoveredMenu === key) &&
              <div
                className={clsx("absolute top-0 left-0 flex items-center justify-center cursor-pointer duration-300 ease-linear rounded-md",
                )}
                onClick={() => handleClickInMobile(key)}
              >
                <Link
                  href={`/${item.href}`}
                  className={clsx(
                    "flex items-center h-full py-3 px-5 rounded-md border border-white w-full text-white",
                  )}
                >
                  {item.title}
                </Link>
              </div>
            }
            {
              isMobile && subKeys.length > 0 && !hoveredMenu &&
              <div
                className={clsx("absolute right-4 flex items-center justify-center w-10 h-10 cursor-pointer",
                  {
                    "text-customMarsala": isActive,
                    "text-white": !isActive
                  }
                )}
                onClick={() => handleClickInMobile(key)}>
                <IconPlus />
              </div>
            }
            {
              isSubMenu && showSubMenuWithDelay && (
                <NavigationSubMenuList
                  heightViewport={heightViewport}
                  subMenuRef={subMenuRef}
                  item={item}
                  selectedSubMenuSegment={selectedSubMenuSegment}
                />
              )
            }
          </li>
        );
      })}
    </ul >
  );
};

export default Navigation;
