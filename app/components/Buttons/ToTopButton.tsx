"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import IconArrowRounded from "@/public/icons/Arrow_rounded.svg";


// type Props = {
//   params: { locale: string };
// };

// const TotopButton: React.FC<{ toTop: IButtons }> = ({ toTop }) => {
// const ToTopButton: React.FC<Props> = ({ params: { locale } }) => {
// setRequestLocale(locale);

const ToTopButton = () => {
  // const t = useTranslations("Buttons");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClickTotop = () => {
    // if (isVisible) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // }
  };

  return (
    <>
      <button
        className={clsx(
          "fixed bottom-[14px] right-[14px] md:bottom-6 md:right-6 flex justify-center items-center z-10 w-[54px] h-[54px] md:w-[60px] md:h-[60px] rounded-full -rotate-90 fill-white bg-customMarsala-accent hover:bg-customMarsala opacity-0 transition-all duration-1000 ",
          isVisible ? "opacity-100" : ""
        )}
        type="button"
        title="Scroll to top"
        onClick={handleClickTotop}
        // aria-label={t.toTop}
      >
        <IconArrowRounded />
      </button>
    </>
  );
};

export default ToTopButton;
