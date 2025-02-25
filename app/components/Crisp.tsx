"use client";

import useScrollY from '@/helpers/useScrollY';
import Script from 'next/script'

const Crisp = () => {

  const CRISP_ENV = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID

  const isVisible = useScrollY({})

  return (
    <>
      {isVisible && <Script
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
      />}
    </>
  )
}

export default Crisp