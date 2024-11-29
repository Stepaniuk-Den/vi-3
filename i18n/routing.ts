// import { defineRouting } from "next-intl/routing";
// import { createNavigation } from "next-intl/navigation";

// export const routing = defineRouting({
//   locales: ["uk", "en"],
//   defaultLocale: "uk",
// });

// export type Locale = (typeof routing.locales)[number];

// export const { Link, redirect, usePathname, useRouter, getPathname } =
//   createNavigation(routing);

// ----------------------------------------------------------------

import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["uk", "en"],
  defaultLocale: "uk",
  pathnames: {
    "/": "/",
    // "/pathnames": {
    //   en: "/pathnames",
    //   uk: "/шляхи",
    // },
  },
});

// export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

// --------
// export const localePrefix: LocalePrefix<typeof locales> = "always";
// --------

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
