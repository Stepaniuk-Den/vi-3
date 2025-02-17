// import { MetadataRoute } from "next";
// import { host } from "@/config";
// import { Locale, routing } from "@/i18n/routing";
// // getPathname;

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [getEntry("/")];
//   // getEntry("/windows");
// }

// // type Href = Parameters<typeof getPathname>[0]["href"];
// type Href = string;

// function getEntry(href: Href) {
//   return {
//     url: getUrl(href, routing.defaultLocale),
//     alternates: {
//       languages: Object.fromEntries(
//         routing.locales.map((locale) => [locale, getUrl(href, locale)])
//       ),
//     },
//   };
// }

// function getUrl(href: Href, locale: Locale) {
//   // const pathname = getPathname({ locale, href });
//   const pathname = href;
//   // return host + pathname;
//   return `${host}/${locale}${pathname === "/" ? "" : pathname}`;
// }

import { MetadataRoute } from "next";
import { host } from "@/config";
import { Locale, routing } from "@/i18n/routing";
import messages_uk from "@/messages/uk.json";
import messages_en from "@/messages/en.json";

interface NavigationLink {
  title: string;
  slug: string;
}

interface NavigationPage {
  title: string;
  href: string;
  links?: Record<string, NavigationLink>;
}

interface Translations {
  Navigation: Record<string, NavigationPage>;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedMessages: Record<Locale, Translations> = {
    uk: messages_uk,
    en: messages_en,
  };

  return routing.locales.flatMap((locale) =>
    getLocalizedRoutes(localizedMessages[locale]).flatMap((route) => [
      getEntry(route.main, locale),
      ...route.subpages.map((subpage) => getEntry(subpage, locale)),
    ])
  );
}

function getLocalizedRoutes(translations: Translations) {
  return Object.values(translations.Navigation).map((page) => ({
    main: page.href,
    subpages: page.links
      ? Object.values(page.links).map((link) => `${page.href}/${link.slug}`)
      : [],
  }));
}

function getEntry(href: string, locale: Locale) {
  return {
    url: getUrl(href, locale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((loc) => [loc, getUrl(href, loc)])
      ),
    },
  };
}

function getUrl(href: string, locale: Locale) {
  return `${host}/${locale}${href === "/" ? "" : href}`;
}
