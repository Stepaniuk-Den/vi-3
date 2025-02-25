"use client";

import { useModal } from "../ModalProvider";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import Phone from "@/public/icons/F7PhoneCircleFill.svg";
import CallRequestForm from "../CallRequestForm";
import useScrollY from "@/helpers/useScrollY";


const CallButton = () => {
  const t = useTranslations("CallForm");

  //color bg-color in Chat #447991

  const { openModal } = useModal();

  const isVisible = useScrollY({ once: true })

  return (
    <>
      {isVisible && <button
        className={clsx(
          "fixed bottom-[82px] left-[14px] md:left-[24px] xl:left-[24px] xl:bottom-[86px] flex group/item justify-center items-center z-10 w-[54px] h-[54px] md:w-[60px] md:h-[60px] rounded-full fill-white text-white bg-customChat hover:bg-customMarsala-accent "
        )}
        type="button"
        aria-label={t("ariaLabel")}
        onClick={() =>
          openModal(
            <CallRequestForm />,
            {
              classNameBtn: "top-[4px] right-[2px] p-2    !text-customMarsala w-10 h-10 flex items-center",
              classNameBackdrop: "bg-black bg-opacity-40 backdrop-blur-md",
              // classNameModalContent: "w-[80%] sm:w-[60%] h-[78%] sm:h-[70%] bg-white p-8 sm:p-16 pt-6 sm:pt-12 items-center",
              classNameModalContent: "w-[80%] lg:w-[60%] xl:w-[50%] min-h-[70dvh] max-h-[95dvh] portrait:md:min-h-[50dvh] portrait:md:max-h-[65dvh] bg-white px-8 lg:px-16 pt-6 landscape:max-[1023.98px]:pt-9 portrait:md:pt-16 lg:pt-16 pb-6 items-center",
              isBtnCloseCarousel: false,
              isBtnClose: true,
            }
          )
        }
      >
        <Phone className="group-hover/item:animate-bounce " />
      </button>}
    </>
  );
};

export default CallButton;
