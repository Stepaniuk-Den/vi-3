import { poppins, open_sans } from "../fonts";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import { clsx } from "clsx";
import Header from "./Header";

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body
        className={clsx(
          poppins.variable,
          open_sans.variable,
          "xl:container h-full text-s font-open_sans"
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
