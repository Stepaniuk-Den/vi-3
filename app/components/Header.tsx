"use client";

import { useState, useEffect } from "react";
import Logo from "@/public/window.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Navigation from "./Navigation";
// import { Link, usePathname } from "@/navigation";

// import { useMediaQuery } from "react-responsive";
// import { useAfterLoad } from "@/helpers/useAfterLoad";

// import dynamic from "next/dynamic";

// const BurgerMenu = dynamic(() => import("../BurgerMenu"), { ssr: false });
// const HeaderLinks = dynamic(() => import("../HeaderLinks"), { ssr: false });

const Header: React.FC<{ t: string }> = () => {
  const [heightHeader, setHeightHeader] = useState(192);
  const [opacityTop, setOpacityTop] = useState(1);
  const [heightTop, setHeightTop] = useState(120);

  // const isTabletOrMobile = useMediaQuery({ maxWidth: 1023.98 });
  // const isPageLoaded = useAfterLoad();
  const pathname = usePathname();
  const is404 = pathname === "/404";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setHeightHeader(Math.max(72, 192 - scrollY));
      setOpacityTop(Math.max(0, 1 - scrollY / 30));
      setHeightTop(Math.max(0, 120 - scrollY));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (is404) {
    return null;
  }

  // if (isTabletOrMobile) {
  if (window.innerWidth <= 1024) {
    return (
      <>
        {/* {isPageLoaded && ( */}
        <p>BURGER</p>
        {/* // <BurgerMenu navlink={t.navlink} t={t2} ariaLabel={ariaLabel} /> */}
        {/* )} */}
      </>
    );
  }

  return (
    <>
      {/* {isPageLoaded && ( */}
      <header
        style={{
          height: `${heightHeader}px`,
        }}
        className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 flex flex-col justify-center bg-transparent"
      >
        <div className="container mx-auto">
          <div
            style={{
              opacity: opacityTop,
              height: `${heightTop}px`,
            }}
            className="flex items-center justify-between w-full h-30"
          >
            <Link
              href="/"
              className="flex items-center justify-center w-34 h-20"
            >
              <Image
                priority
                src={Logo}
                alt="Envent Logo"
                width={173}
                height={100}
              />
            </Link>
            {/* <HeaderLinks t={t.topList} /> */}
          </div>
          <div className="flex justify-between w-full h-18 bg-white rounded-md shadow-lg">
            <Navigation translations={t.navlink} />
            {/* <SocialList className="header" ariaLabel={ariaLabel} /> */}
          </div>
        </div>
      </header>
      {/* )} */}
    </>
  );
};

export default Header;
