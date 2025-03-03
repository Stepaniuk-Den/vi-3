import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { Locale, routing } from "@/i18n/routing";
import BaseLayout from "../components/BaseLayout";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import dynamic from "next/dynamic";
// import Loader from "../components/Loader";
const Loader = dynamic(() => import("../components/Loader"), { ssr: false });

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

  return (
    <BaseLayout locale={locale}>
      <Loader />
      {children}
    </BaseLayout>
  );
}

// ----------------------------------------------------------------
// import { routing } from "@/i18n/routing";
// import BaseLayout from "../components/BaseLayout";
// import Loader from "../components/Loader";

// const Loading = () => {
//   return (
//     <>
//       <BaseLayout locale={routing.defaultLocale}>
//         {/* <PageLayout> */}
//         <Loader />
//         {/* </PageLayout> */}
//       </BaseLayout>
//     </>
//   );
// };

// export default Loading;

// =================================

// <PageLayout>
//   {/* <section className="pageCl h-full">
//       <div className="container py-80 text-center h-full">
//         <p className="mainTitleCl pt-16 text-center">
//           LOADING........LOADING........
//         </p>
//       </div>
//       </section> */}
//   <div className="container py-80 text-center h-full"></div>
// </PageLayout>;

// ----------------------------------------------------------------------------

// import React from "react";
// // import { routing } from "@/i18n/routing";
// import Loader from "../components/Loader";
// import PageLayout from "../components/PageLayout";
// // import BaseLayout from "../components/BaseLayout";

// const Loading = () => {
//   return (
//     <>
//       {/* <BaseLayout locale={routing.defaultLocale}> */}
//       <PageLayout>
//         <Loader />
//       </PageLayout>
//       {/* </BaseLayout> */}
//     </>
//   );
// };

// export default Loading;

// --------------------------------------------

// export { default } from "../components/Loader";

// --------------------------------------------

// <PageLayout>
//   {/* <section className="pageCl h-full">
//       <div className="container py-80 text-center h-full">
//         <p className="mainTitleCl pt-16 text-center">
//           LOADING........LOADING........
//         </p>
//       </div>
//       </section> */}
//   <div className="container py-80 text-center h-full"></div>
// </PageLayout>;
