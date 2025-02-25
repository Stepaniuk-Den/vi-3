import { open_sans, roboto } from "../fonts";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import { clsx } from "clsx";
import { ModalProvider } from "./ModalProvider";
// import Header from "./Header";
import ToTopButton from "./Buttons/ToTopButton";
import Footer from "./Footer";
// import Script from "next/script";
import dynamic from "next/dynamic";
// import Crisp from "./Crisp";
// import CallButton from "./Buttons/CallButton";
// const TotopButton = dynamic(() => import("./Buttons/ToTopButton"), {
//   ssr: false,
// });

const CallButton = dynamic(() => import("./Buttons/CallButton"), { ssr: false });
const Crisp = dynamic(() => import("./Crisp"), { ssr: false });

type Props = {
  children: ReactNode;
  locale: string;
};

// const CRISP_ENV = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID

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
            {/* <Header /> */}
            <main>{children}</main>
            <Footer />
            <CallButton />
            <ToTopButton />
          </ModalProvider>
        </NextIntlClientProvider>
        <Crisp />
        {/* <Script
          id="crisp-chat"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp = [];
              window.CRISP_WEBSITE_ID = "${CRISP_ENV}";
              (function () {
                var d = document;
                var s = d.createElement("script");
                s.src = "https://client.crisp.chat/l.js";
                s.async = 1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        /> */}
      </body>
    </html>
  );
}
