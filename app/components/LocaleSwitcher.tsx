"use client";

import { useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { Locale, usePathname, useRouter } from "@/i18n/routing";

import { useClickOutside } from "@/helpers/useClickOutside";

const SideBarLangSwitcher: React.FC<{ ariaLabel?: string }> = ({
  ariaLabel,
}) => {
  const languages = [
    {
      lang: "en",
      label: "EN",
    },
    {
      lang: "uk",
      label: "UA",
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

  return (
    <div className="flex flex-col-reverse md:flex-row md:items-end md:justify-end gap-2">
      {languages
        .filter((lang) => lang.lang !== locale)
        .map((lang) => (
          <button
            key={lang.lang}
            className={`${
              isBtnLangVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2"
            } transition-all duration-300 ease-in-out px-4 py-2 w-14 h-14 flex items-center justify-center bg-white text-dark border border-gray-200 hover:bg-gray-100 rounded`}
            type="button"
            onClick={() => onSelectChange(lang.lang)}
            aria-label="switch language"
            disabled={isPending}
          >
            {lang.label}
          </button>
        ))}

      <button
        ref={ref}
        className={`relative flex items-center justify-center px-4 py-2 w-14 h-14 bg-white text-dark border border-gray-200 hover:bg-gray-100 rounded ${
          isBtnLangVisible ? "shadow-md" : ""
        } transition-shadow duration-200`}
        type="button"
        onClick={() => setBtnLangVisible(!isBtnLangVisible)}
        aria-label="switch language"
      >
        {languages.find((lang) => lang.lang === locale)?.label}
      </button>
    </div>
  );
};

export default SideBarLangSwitcher;
