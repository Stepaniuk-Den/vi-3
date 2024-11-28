import { getRequestConfig } from "next-intl/server";
import { Locale, routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    // messages: await(
    //   locale === "uk"
    //     ? // When using Turbopack, this will enable HMR for `en`
    //       import("../messages/uk.json")
    //     : import(`../messages/${locale}.json`)).default,
  };
});
