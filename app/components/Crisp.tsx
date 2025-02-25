"use client";

import Script from 'next/script'
import React, { useEffect, useState } from 'react'

const Crisp = () => {

  const CRISP_ENV = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
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