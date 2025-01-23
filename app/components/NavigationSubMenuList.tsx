"use client"

import { Link } from '@/i18n/routing';
import clsx from 'clsx';
import React, { useState } from 'react'
import { useModal } from './ModalProvider';
import { useHoveredMenuStore } from '@/store/hoveredMenuStore';
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
  isMobile: boolean
}

const NavigationSubMenuList: React.FC<NavigationSubMenuListProps> = ({ subMenuRef, heightViewport, item, selectedSubMenuSegment, isMobile }) => {

  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [previousSubMenu, setPreviousSubMenu] = useState<number | null>(null);

  const { closeModal } = useModal();

  // const hoveredMenu = useHoveredMenuStore((state) => state.hoveredMenu);
  const setHoveredMenu = useHoveredMenuStore((state) => state.setHoveredMenu);

  const subKeys = item.links ? Object.values(item.links) : [];
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
            // "animate-submenu-enter": subMenuPosition && isMobile,
            // "animate-submenu-leave": !subMenuPosition && isMobile,
          }
        )}
      >
        {subKeys.map((subItem, subIndex) => {
          const isActiveSubMenuItem = selectedSubMenuSegment === subItem.slug;
          const isPreviousSubMenuItem = previousSubMenu === subIndex;


          const isLastItem = subKeys.length === subIndex + 1

          return (
            <li
              key={subIndex}
              className={clsx("relative w-full rounded-md opacity-0 bg-white transform",
              )}
              style={{
                animation: `fadeIn 0.2s ease-in-out forwards`,
                animationDelay: `${0.2 + subIndex * 0.2}s`,
              }}
              onMouseEnter={() => (setActiveSubMenu(subIndex),
                setPreviousSubMenu(activeSubMenu))}
              onMouseLeave={() => (setPreviousSubMenu(activeSubMenu),
                setActiveSubMenu(null))}
            // onAnimationEnd={(e) => {
            //   if (e.currentTarget) {
            //     console.log("animation end - ", e.currentTarget.textContent)
            //   }
            // }}
            >
              <Link
                className={clsx("flex lg:px-4 pl-8 pr-2 py-2 rounded-md hover:bg-customMarsala-accent hover:text-white hover:before:content-none",
                  {
                    "bg-customMarsala-accent text-white before:content-none": isActiveSubMenuItem,
                    "before:content-none": isLastItem || isPreviousSubMenuItem,
                    "before:content-[''] before:absolute before:right-1/2 before:bottom-0 before:w-[95%] before:h-px before:translate-x-1/2 before:bg-customMarsala": activeSubMenu !== subIndex + 1
                  }
                )}
                href={`/${item.href}/${subItem.slug}`}
                onTouchStart={() => {
                  if (!isMobile) return
                  setHoveredMenu(null)
                  setTimeout(closeModal, 500);
                }}
              >
                {subItem.title}
              </Link>
              {/* {idxSub !== activeSubMenu && !isLastItem && <div className="after-line marsala" />} */}
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default NavigationSubMenuList