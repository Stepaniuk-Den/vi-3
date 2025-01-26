"use client";

import { socialItems } from "@/data/socialItems";
import { isMobileDevice } from "@/helpers/detect-browser";
import { renderIcon } from "@/helpers/renderIcon";
import { Link } from "@/i18n/routing";
import { useHoveredMenuStore } from "@/store/hoveredMenuStore";

const SocialLinks = () => {
  const hoveredMenu = useHoveredMenuStore((state) => state.hoveredMenu);
  return (
    <div className={`flex ${hoveredMenu && isMobileDevice ? "hidden" : "landscape:absolute"} top-4 left-auto landscape:xl:static gap-3 w-full max-w-min justify-center self-center portrait:mt-8 xl:mt-0`}>
      {socialItems.map((item) => (
        <Link
          className="xl:grayscale hover:grayscale-0 hover:scale-125 transition-all duration-300"
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
