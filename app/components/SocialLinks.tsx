"use client";

import { socialItems } from "@/data/socialItems";
import { renderIcon } from "@/helpers/renderIcon";
import { Link } from "@/i18n/routing";
import { useHoveredMenuStore } from "@/store/hoveredMenuStore";
import { useIsBigTabletStore } from "@/store/isBigTabletStore";
import { useIsMobileStore } from "@/store/isMobileStore";
import clsx from "clsx";
import { useEffect, useState } from "react";

const SocialLinks = () => {
  const hoveredMenu = useHoveredMenuStore((state) => state.hoveredMenu);
  const [isVisible, setIsVisible] = useState(true);

  const isBigTablet = useIsBigTabletStore((state) => state.isBigTablet);
  const isMobile = useIsMobileStore((state) => state.isMobile);

  useEffect(() => {
    if (hoveredMenu && isMobile) {
      setIsVisible(false);
    } else if (isMobile) {
      const timeout = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timeout);
    } else {
      setIsVisible(true)
    }
  }, [hoveredMenu, isMobile]);
  return (
    <div
      className={clsx("flex opacity-0 pointer-events-none top-4 left-auto landscape:lg:static gap-3 w-full max-w-min justify-center self-center portrait:mt-8 xl:mt-0",
        {
          "opacity-100 pointer-events-auto transition-opacity duration-500": isVisible,
          "landscape:absolute": isMobile
        }
      )}
    >
      {socialItems.map((item) => (
        <Link
          className={clsx("hover:grayscale-0 hover:scale-125 transition-all duration-300",
            {
              "grayscale": !isBigTablet && !isMobile
            }
          )}
          href={item.href}
          aria-label={item.title}
          key={item.id}
        >
          {renderIcon(item.svg, 32, 32)}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
