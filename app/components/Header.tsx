"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

import Logo from "@/public/window.svg";
import Navigation from "./Navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import SocialLinks from "./SocialLinks";
import FeedbackLinks from "./FeedbackLinks";

// import dynamic from "next/dynamic";

// const LocaleSwitcher = dynamic(() => import("./LocaleSwitcher"));
// const LocaleSwitcher = dynamic(() => import("./LocaleSwitcher"), {
//   ssr: false,
// });

const Header = () => {
  const [heightHeader, setHeightHeader] = useState(192);
  const [opacityTop, setOpacityTop] = useState(1);
  const [heightTop, setHeightTop] = useState(120);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023.98 });

  const pathname = usePathname();
  const is404 = pathname === "/404";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setHeightHeader(Math.max(72, 192 - scrollY));
      setOpacityTop(Math.max(0, 1 - scrollY / 30));
      setHeightTop(Math.max(0, 120 - scrollY));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (is404) {
    return null;
  }

  if (isTabletOrMobile) {
    return <>{/* <p>BURGER</p> */}</>;
  }

  return (
    <>
      <header
        style={{
          height: `${heightHeader}px`,
        }}
        className="hidden fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 lg:flex flex-col justify-center"
      >
        <div
          style={{
            opacity: opacityTop,
            height: `${heightTop}px`,
          }}
          className="container flex items-center justify-between w-full h-30"
        >
          <Link href="/" className="flex items-center justify-center w-34 h-20">
            <Logo className=" w-28 h-16" />
            {/* <Image priority src={Logo} alt="Logo" width={173} height={100} /> */}
          </Link>
          <FeedbackLinks />
          <SocialLinks />
        </div>
        <div className="flex w-full h-18 bg-customMarsala shadow-lg">
          <div className="relative container mx-auto flex items-center justify-between">
            <Navigation />
            <LocaleSwitcher />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
