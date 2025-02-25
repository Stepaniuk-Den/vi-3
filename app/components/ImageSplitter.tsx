"use client";

import { useRef, useEffect, useState } from "react";
import { images } from "@/data/slidesHero";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import Arrow from "@/public/icons/Arrow_rounded.svg";
import { useIsMobileStore } from "@/store/isMobileStore";

interface Slide {
  title: string;
  description: string;
}
const CanvasComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const newCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRefs = useRef<HTMLImageElement[]>([]);

  const t = useTranslations("Hero");
  const slidesList = t.raw("slides");
  const slides: Slide[] = Object.values(slidesList);

  const [currentItem, setCurrentItem] = useState(1);
  const [textVisible, setTextVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const isMobile = useIsMobileStore((state) => state.isMobile);

  const nbItems = images.length;
  const cols = !isMobile ? 16 : 8;
  const displayDuration = 4500;
  const animationDuration = 1800;

  const setCanvasSize = (canvas: HTMLCanvasElement) => {
    const container = canvas.parentElement;
    if (container) {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = container.offsetWidth;
      canvas.height = (container.offsetWidth * 10.7) / 16;
      canvas.width = canvas.width * dpr;
      canvas.height = canvas.height * dpr;
    }
  };

  const clamp = (value: number, min: number, max: number) => {
    return Math.max(min, Math.min(max, value));
  };

  const startAnimation = (nextItem: number) => {
    const canvas = canvasRef.current;
    const newCanvas = newCanvasRef.current;
    const imagesArray = imgRefs.current;

    if (!canvas || !newCanvas || imagesArray.some((img) => img === null))
      return;

    const context = canvas.getContext("2d");
    const newContext = newCanvas.getContext("2d");

    if (!context || !newContext) return;

    setCanvasSize(canvas);
    setCanvasSize(newCanvas);

    const currentImage = imagesArray[currentItem - 1]!;
    const nextImage = imagesArray[nextItem - 1]!;

    const renderStaticImage = (image: HTMLImageElement) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };

    const renderTempCanvas = (currentImage: HTMLImageElement, pos: number) => {
      newContext.clearRect(0, 0, canvas.width, canvas.height);
      newContext.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
      const colWidth = canvas.width / cols;

      for (let i = 0; i <= cols; i++) {
        const delay = i / cols;
        const progress = clamp(pos - delay, 0, 1);
        newContext.clearRect(
          i * colWidth,
          0,
          colWidth * progress,
          canvas.height
        );
      }
    };

    const render = (
      currentImage: HTMLImageElement,
      nextImage: HTMLImageElement,
      pos: number
    ) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(nextImage, 0, 0, canvas.width, canvas.height);
      renderTempCanvas(currentImage, pos);
      context.drawImage(newCanvas, 0, 0, canvas.width, canvas.height);
    };

    setIsAnimating(true);

    const startTime = performance.now();

    const animate = () => {
      const elapsed = performance.now() - startTime;

      if (elapsed < animationDuration) {
        const progress = (elapsed / animationDuration) * 2;
        render(currentImage, nextImage, progress);
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
        renderStaticImage(nextImage);

        setTimeout(() => {
          setTextVisible(true);
        }, 500);
        setCurrentItem(nextItem);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const imagesArray = imgRefs.current;
    const currentImage = imagesArray[currentItem - 1];

    if (canvas && context && currentImage) {
      setCanvasSize(canvas);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
    }

    const interval = setInterval(() => {
      if (!isAnimating) {
        const nextItem = currentItem < nbItems ? currentItem + 1 : 1;
        startAnimation(nextItem);
      }
    }, displayDuration);

    return () => clearInterval(interval);
  }, [currentItem, isAnimating]);

  const handleNext = () => {
    const nextItem = currentItem < nbItems ? currentItem + 1 : 1;
    startAnimation(nextItem);
  };

  const handlePrev = () => {
    const prevItem = currentItem > 1 ? currentItem - 1 : nbItems;
    startAnimation(prevItem);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      const nextItem = currentItem < nbItems ? currentItem + 1 : 1;
      startAnimation(nextItem);
    } else if (distance < -swipeThreshold) {
      const prevItem = currentItem > 1 ? currentItem - 1 : nbItems;
      startAnimation(prevItem);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="relative w-full flex justify-center items-start carousel-container overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <canvas
        ref={canvasRef}
        id="canvas"
        style={{ zIndex: isAnimating ? 1 : 0 }}
      ></canvas>
      <canvas ref={newCanvasRef} style={{ display: "none" }}></canvas>

      {textVisible && (
        <div className="absolute top-0 left-0 w-full h-full pl-3 sm:pl-5 md:pl-3 lg:pl-0">
          <div
            className={clsx(
              "absolute top-24 md:top-14 landscape:max-[767.98px]:top-10 portrait:md:top-36 left-0 bg-black/50 rounded-r-md transition-opacity duration-500 ease-out w-[85%] sm:w-[55%] md:w-1/2 xl:w-[45%] portrait:md:w-[65%] h-28 portrait:md:h-36 lg:h-36 ",
              {
                "opacity-100": textVisible,
                "opacity-0": !textVisible,
              }
            )}
          ></div>
          <div
            key={currentItem}
            className=" relative top-28 md:top-[4.5rem] landscape:max-[767.98px]:top-14 portrait:md:top-40 container text-white"
          >
            <h1 className="mainTitleCl portrait:md:text-4xl mb-4 lg:text-4xl uppercase portrait:md:normal-case lg:normal-case animate-textFocusIn ">
              {slides[currentItem - 1]?.title}
            </h1>
            <p className="animate-textFocusInDelayed text-base xl:text-lg font-open_sans w-[280px] landscape:max-[767.98px]:w-[320px] portrait:md:w-[360px] lg:w-[440px] xl:w-[490px]">
              {slides[currentItem - 1]?.description}
            </p>
          </div>
        </div>
      )}

      <button
        onClick={handlePrev}
        className="absolute flex justify-center items-center left-1 md:left-4 bottom-1/3 landscape:max-[1023.98px]:bottom-4 fill-white p-2 rounded-md rotate-180 z-10 hover:bg-black/50"
        aria-label={t("prevArrowAriaLabel")}
      >
        <Arrow className="w-9 h-9 sm:w-11 sm:h-11" />
      </button>
      <button
        onClick={handleNext}
        className="absolute flex justify-center items-center right-1 md:right-4 bottom-1/3 landscape:max-[1023.98px]:bottom-4 fill-white p-2 rounded-md z-10 hover:bg-black/50"
        aria-label={t("nextArrowAriaLabel")}
      >
        <Arrow className="w-9 h-9 sm:w-11 sm:h-11" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-[10px] z-10">
        {Array.from({ length: nbItems }).map((_, index) => {
          const isActive = currentItem === index + 1;
          return (
            <button
              key={index}
              onClick={() => startAnimation(index + 1)}
              className={clsx(
                "h-[5px] w-[40px] cursor-pointer rounded-md bg-white transition-all duration-300",
                currentItem === index + 1 ? "bg-white" : "bg-white opacity-50"
              )}
              // aria-label={`${t("slideAriaLabel")} ${index + 1}`}
              aria-label={isActive ? `${t("activeSlideAriaLabel")} ${index + 1}` : `${t("slideAriaLabel")} ${index + 1}`}
            />
          )

        })}
      </div>
      {images.map((src, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={index}
          ref={(el) => {
            if (el) imgRefs.current[index] = el;
          }}
          src={src}
          className="hidden"
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CanvasComponent;
