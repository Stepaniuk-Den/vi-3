import { setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
// import NotFound from "./not-found";
import { routing } from "@/i18n/routing";
import BaseLayout from "../components/BaseLayout";

type Props = {
  children: ReactNode;
  //!!!!!!!!! params: Promise<{ locale: string }>;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// export async function generateMetadata({
//   params: { locale },
// }: Omit<Props, "children">) {
//   const t = await getTranslations({ locale, namespace: "LocaleLayout" });
//   return {
//     title: t("title"),
//     // description: t("description"),
//   };
// }

//!!!!!!!!! export default async function LocaleLayout({ children, params }: Props) {
//   // const { locale } = await Promise.resolve(params);
//!!!!!!!!!   const { locale } = await params;
export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // const { locale } = await Promise.resolve(params);
  // const { locale } = await params;

  // if (!routing.locales.includes(locale as Locale)) {
  //   return NotFound();
  // }
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  // const messages = await getMessages();

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
