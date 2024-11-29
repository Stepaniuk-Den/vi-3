"use client";

import React, { useState, useTransition } from "react";
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
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const params = useParams();
  const ref = useClickOutside(() => setBtnLangVisible(false));

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
    <div className="flex flex-col lg:flex-row gap-1">
      {otherLanguages.map((lang) => (
        <button
          key={lang.lang}
          className={clsx("langBtnCl", {
            "opacity-100 translate-x-0": isBtnLangVisible,
            "opacity-0 translate-x-14": !isBtnLangVisible,
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

      <button
        ref={ref}
        className={clsx("langBtnCl z-10", {
          "shadow-md": isBtnLangVisible,
        })}
        type="button"
        onClick={() => setBtnLangVisible(!isBtnLangVisible)}
        aria-label="switch language"
      >
        {currentLanguage?.icon && renderIcon(currentLanguage.icon)}
        {languages.find((lang) => lang.lang === locale)?.label}
      </button>
    </div>
  );
};

export default LocaleSwitcher;
