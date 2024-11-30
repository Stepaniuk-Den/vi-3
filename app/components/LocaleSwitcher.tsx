"use client";

import React, { useRef, useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import clsx from "clsx";

import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useClickOutside } from "@/helpers/useClickOutside";
import FlagUA from "@/public/icons/FlagUa4x3.svg";
import FlagGB from "@/public/icons/FlagGb4x3.svg";

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
  const [isBtnLangVisible, setBtnLangVisible] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<boolean>(false);
  // const [mouseY, setMouseY] = useState<number | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const params = useParams();
  const ref = useClickOutside(() => setBtnLangVisible(false));
  const otherLanguagesRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    setHoveredMenu(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (otherLanguagesRef.current && e.target !== otherLanguagesRef.current) {
      setHoveredMenu(false);
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
  const renderIcon = (icon: React.ReactNode) => {
    return React.cloneElement(icon as React.ReactElement, {
      width: 24,
      height: 18,
    });
  };
  const currentLanguage = languages.find((lang) => lang.lang === locale);
  const otherLanguages = languages.filter((lang) => lang.lang !== locale);

  return (
    <div
      className="absolute right-4 top-2 flex flex-col"
      ref={otherLanguagesRef}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={ref}
        className="langBtnCl z-10"
        type="button"
        aria-label="switch language"
      >
        {currentLanguage?.icon && renderIcon(currentLanguage.icon)}
        {languages.find((lang) => lang.lang === locale)?.label}
      </button>
      {hoveredMenu && (
        <div className="absolute top-full flex flex-col pt-3 rounded-md">
          {otherLanguages.map((lang) => (
            <button
              key={lang.lang}
              className={clsx("langBtnCl", {
                "opacity-100 translate-x-0 text-customMarsala bg-white shadow-md":
                  isBtnLangVisible || hoveredMenu,
                // "opacity-0 translate-x-14": !isBtnLangVisible,
                "opacity-0": !hoveredMenu,
              })}
              type="button"
              onClick={() => onSelectChange(lang.lang)}
              aria-label="switch language"
              disabled={isPending}
            >
              {renderIcon(lang.icon)}
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
