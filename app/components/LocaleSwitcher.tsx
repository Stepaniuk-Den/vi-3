"use client";

import React, { useRef, useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import clsx from "clsx";

import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useClickOutside } from "@/helpers/useClickOutside";
import { isAppleMobileDevice, isMobileDevice } from "@/helpers/detect-browser";
import FlagUA from "@/public/icons/FlagUa4x3.svg";
import FlagGB from "@/public/icons/FlagGb4x3.svg";
import { renderIcon } from "@/helpers/renderIcon";

// const SideBarLangSwitcher: React.FC<{ ariaLabel?: string }> = ({
//   ariaLabel,
// }) => {
const LocaleSwitcher = () => {
  const languages = [
    {
      lang: "en",
      label: "EN",
      icon: <FlagGB />,
    },
    {
      lang: "uk",
      label: "UA",
      icon: <FlagUA />,
    },
  ];

  const [isBtnLangVisible, setBtnLangVisible] = useState<boolean>(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const params = useParams();

  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside<HTMLDivElement>(ref, () => (setBtnLangVisible(false), setHoveredMenu(null)));

  const isMobile = isAppleMobileDevice || isMobileDevice;

  const handleMouseEnter = (key: string) => {
    if (!isMobile) {
      setHoveredMenu(key);
    } else {
      setHoveredMenu((prev) => (prev === key ? null : key));
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMobile) {
      if (ref.current && e.target !== ref.current) {
        setHoveredMenu(null);
      }
    }
  };

  function onSelectChange(lang: string) {
    const nextLocale = lang as Locale;
    startTransition(() => {
      router.replace(
        {
          pathname,
          // @ts-expect-error -- TypeScript will validate that only known `params`
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks.
          params,
        },
        { locale: nextLocale }
      );
    });
  }

  const currentLanguage = languages.find((lang) => lang.lang === locale);
  const otherLanguages = languages.filter((lang) => lang.lang !== locale);

  return (
    <div
      className={clsx("absolute flex flex-col z-10",
        {
          "right-4 top-2": !isMobile,
          "right-6 top-4": isMobile
        }
      )}
      ref={ref}
      onMouseEnter={() => !isMobile && handleMouseEnter("langBtn")}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => handleMouseEnter("langBtn")}
    >
      <button
        className={clsx("z-10",
          {
            "langBtnCl": !isMobile,
            "langBtnMobileCl": isMobile
          }
        )}
        type="button"
        aria-label="switch language"
      >
        {currentLanguage?.icon && renderIcon(currentLanguage.icon, 24, 18)}
        {languages.find((lang) => lang.lang === locale)?.label}
      </button>
      {hoveredMenu && (
        <div className={clsx("absolute flex flex-col rounded-md",
          {
            "top-full pt-2": !isMobile,
            "top-0 right-full": isMobile
          }
        )}>
          {otherLanguages.map((lang) => (
            <button
              key={lang.lang}
              className={clsx("opacity-0", {
                "opacity-100 translate-x-0 text-customMarsala bg-white shadow-md":
                  (isBtnLangVisible || hoveredMenu),
                "": !hoveredMenu,
                "": isMobile && !hoveredMenu,
                "langBtnCl": !isMobile,
                "langBtnMobileCl": isMobile
              })}
              type="button"
              onClick={() => onSelectChange(lang.lang)}
              aria-label="switch language"
              disabled={isPending}
            >
              {renderIcon(lang.icon, 24, 18)}
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
