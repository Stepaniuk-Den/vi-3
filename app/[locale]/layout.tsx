import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { Locale, routing } from "@/i18n/routing";
import BaseLayout from "../components/BaseLayout";
// import NotFoundPage from "../components/NotFoundPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  children: ReactNode;
  //!!!!!!!!! params: Promise<{ locale: string }>;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });
  return {
    metadataBase: new URL("https://vi-3.vercel.app"),
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: "uk_UA,en_US",
      url: `https://vi-3.vercel.app/${locale}`,
      siteName: "VI-3",
    },
  };
}

//!!!!!!!!! export default async function LocaleLayout({ children, params }: Props) {
//   // const { locale } = await Promise.resolve(params);
//!!!!!!!!!   const { locale } = await params;

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // const { locale } = await Promise.resolve(params);
  // const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    // return NotFoundPage();
    return notFound();
  }
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  // const messages = await getMessages();

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
