"use client";

import clsx from "clsx";
import { useMessages, useTranslations } from "next-intl";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Navigation = () => {
  const t = useTranslations("Navigation");
  const messages = useMessages();
  const keys = Object.keys(messages.Navigation);
  const subKeys = Object.values(messages.Navigation);

  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `${selectedLayoutSegment}` : "home";

  // console.log("subKeys - ", subKeys);
  return (
    <ul className="flex flex-col items-center justify-start h-full gap-x-1 py-3 px-4 uppercase lg:flex-row">
      {keys.map((key, index) => {
        const isActive = pathname === key;
        const currentLinks = Object.values(subKeys[index]);
        // console.log("key - ", key);
        console.log("currentLinks - ", currentLinks);
        // console.log("messages.Navigation - ", messages.Navigation);
        return (
          <li
            key={key}
            className={clsx(
              "relative flex items-center justify-center min-w-max h-full font-medium text-main-mainBG cursor-pointer transition-all border border-transparent rounded-md hover:border-white",
              {
                "text-main-mainColor bg-main-mainBG": isActive,
              }
            )}
          >
            <Link
              href={t(`${key}.href`)}
              className="flex items-center justify-center w-full h-full py-3 px-5 "
            >
              {t(`${key}.title`)}
            </Link>
            {t(`${key}.links`) && (
              <ul className="absolute top-full left-0 flex flex-col items-start bg-white shadow-md">
                {/* {currentLinks.map(item) => (
                  <li key={item} className="px-4 py-2 hover:bg-gray-100">
                    <Link href={t(`${key}.${subKey}.slug`)}>
                      {t(`${key}.${subKey}.title`)}
                    </Link>
                  </li>
                ))} */}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
