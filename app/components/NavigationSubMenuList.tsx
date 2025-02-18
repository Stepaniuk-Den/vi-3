"use client"

import { Link } from '@/i18n/routing';
import clsx from 'clsx';
import React, { useEffect, useMemo, useState } from 'react'
import { useModal } from './ModalProvider';
import { useHoveredMenuStore } from '@/store/hoveredMenuStore';
import { useIsMobileStore } from '@/store/isMobileStore';
import { useIsBigTabletStore } from '@/store/isBigTabletStore';
interface ILinkProps {
  title: string;
  slug: string;
}

interface INavigationItem {
  title: string;
  href: string;
  links?: { [key: string]: ILinkProps };
}

interface NavigationSubMenuListProps {
  subMenuRef?: React.RefObject<HTMLUListElement>;
  heightViewport: number,
  item: INavigationItem,
  selectedSubMenuSegment: string,
}

const NavigationSubMenuList: React.FC<NavigationSubMenuListProps> = ({ subMenuRef, heightViewport, item, selectedSubMenuSegment }) => {

  const [nextSubMenu, setNextSubMenu] = useState<number | null>(null);
  const [isActiveSubMenuItem, setIsActiveSubMenuItem] = useState<number | null>(null);

  const { closeModal } = useModal();

  const hoveredMenu = useHoveredMenuStore((state) => state.hoveredMenu);
  const setHoveredMenu = useHoveredMenuStore((state) => state.setHoveredMenu);

  const isMobile = useIsMobileStore((state) => state.isMobile);
  const isBigTablet = useIsBigTabletStore((state) => state.isBigTablet);

  const subKeys = useMemo(() => (item.links ? Object.values(item.links) : []), [item.links]);


  useEffect(() => {
    const activeIndex = subKeys.findIndex(
      (subItem) => subItem.slug === selectedSubMenuSegment
    );

    if (activeIndex !== -1) {
      setNextSubMenu(activeIndex + 1);
      setIsActiveSubMenuItem(activeIndex)
    }
  }, [selectedSubMenuSegment, subKeys]);


  return (
    <div
      style={{
        height: `calc(${heightViewport}px - 130px)`,
      }}
      className={clsx("absolute z-20 top-full pt-1 lg:pt-3 left-0 flex flex-col w-full lg:w-max items-start rounded-md overflow-hidden",
      )}>
      <ul
        ref={subMenuRef}
        className={clsx("p-2 z-20 flex flex-col w-full h-full bg-white lg:max-w-max lg:max-h-min items-start transform rounded-md shadow-md overflow-y-scroll lg:overflow-hidden",
          {
            "animate-submenu-enter": hoveredMenu && isMobile,
            "animate-submenu-leave": !hoveredMenu && isMobile,
          }
        )}
      >
        {subKeys.map((subItem, subIndex) => {

          const isFirstItem = subIndex === 0

          return (
            <li
              key={subIndex}
              className={clsx("relative w-full rounded-md opacity-0",
                {
                  "bg-customMarsala-accent text-white": isActiveSubMenuItem === subIndex,
                  "bg-white": isActiveSubMenuItem !== subIndex,
                }
              )}
              style={{
                animation: isBigTablet ? `fadeIn 0.2s ease-in-out forwards` : `fadeIn 0.1s ease-in-out forwards`,
                animationDelay: isBigTablet ? `${0.1 + subIndex * 0.1}s` : `${0.2 + subIndex * 0.2}s`,
              }}
            >
              <Link
                className={clsx("flex lg:px-4 pl-8 pr-2 py-2 rounded-md transform transition-transform duration-300",
                  {
                    "hover:scale-x-95 hover:text-customMarsala-accent active:scale-x-105 active:text-customElement": isActiveSubMenuItem !== subIndex && !isMobile
                  }
                )}
                href={`${item.href}/${subItem.slug}`}
                onClick={() => {
                  setHoveredMenu(null)
                  if (!isMobile) return
                  setTimeout(closeModal, 500);
                }}
              >
                {subItem.title}
              </Link>
              {!isFirstItem && nextSubMenu !== subIndex && (<div className="after-line marsala" />)}
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default NavigationSubMenuList