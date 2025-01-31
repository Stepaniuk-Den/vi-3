import { open_sans, roboto } from "../fonts";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import { clsx } from "clsx";
import { ModalProvider } from "./ModalProvider";
import Header from "./Header";
import dynamic from "next/dynamic";
import ToTopButton from "./Buttons/ToTopButton";
// const TotopButton = dynamic(() => import("./Buttons/ToTopButton"), {
//   ssr: false,
// });

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
          open_sans.variable,
          roboto.variable,
          "h-full xl:text-base text-s leading-5 font-open_sans text-neutral-950"
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ModalProvider>
            <Header />
            <main>{children}</main>
            <ToTopButton />
          </ModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
