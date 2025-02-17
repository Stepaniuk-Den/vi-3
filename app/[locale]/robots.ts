import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { host } from "@/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: routing.locales.map((locale) => `${host}/${locale}/sitemap.xml`),
  };
}
