// "use client";

// import React, { useState, useEffect } from "react";
// import clsx from "clsx";
// import { images } from "@/data/slidesHero";
// import { useTranslations } from "next-intl";

// interface Slide {
//   title: string;
//   description: string;
// }

// export default function ImageSplitter() {
//   const t = useTranslations("Hero");
//   const slidesList = t.raw("slides");
//   const slides: Slide[] = Object.values(slidesList);
//   const [allImageParts, setAllImageParts] = useState<string[][]>([]);
//   const [renderedParts, setRenderedParts] = useState<number>(0);
//   const [resetKey, setResetKey] = useState<number>(0);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const partsAmount = 20;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const nextSlide = () => {
//     // setIsTransitioning(true);

//     // setPrevSlide(currentSlide);
//     if (currentSlide === slides.length - 1) {
//       setTimeout(() => {
//         setCurrentSlide(0);
//         // setVisibleSlide(null);
//         // setIsTransitioning(false);
//       }, 300);
//     } else {
//       setCurrentSlide((prev) => prev + 1);
//     }
//   };

//   useEffect(() => {

//     const loadAndSplitImages = async () => {
//       const imagePartsArray: string[][] = [];

//       for (const imgSrc of images) {
//         const img = new Image();
//         img.src = imgSrc;

//         await new Promise<void>((resolve, reject) => {
//           img.onload = () => {
//             const canvas = document.createElement("canvas");
//             const ctx = canvas.getContext("2d");

//             if (!ctx) {
//               console.error("Canvas context не вдалося отримати.");
//               reject();
//               return;
//             }

//             const width = window.innerWidth + partsAmount;
//             const height = window.innerHeight;

//             canvas.width = width;
//             canvas.height = height;

//             ctx.imageSmoothingEnabled = false;
//             ctx.drawImage(img, 0, 0, width, height);

//             const partWidth = width / partsAmount;
//             const parts: string[] = [];

//             for (let i = 0; i < partsAmount; i++) {
//               const partCanvas = document.createElement("canvas");
//               partCanvas.width = i === partsAmount - 1 ? width - i * partWidth : partWidth;
//               partCanvas.height = canvas.height;

//               const partCtx = partCanvas.getContext("2d");
//               if (!partCtx) {
//                 console.error("Canvas context для частини не вдалося отримати.");
//                 continue;
//               }

//               partCtx.imageSmoothingEnabled = false;
//               partCtx.drawImage(
//                 canvas,
//                 i * partWidth,
//                 0,
//                 partWidth,
//                 canvas.height,
//                 0,
//                 0,
//                 partWidth,
//                 canvas.height
//               );

//               parts.push(partCanvas.toDataURL());
//             }

//             imagePartsArray.push(parts);
//             resolve();
//           };

//           img.onerror = () => {
//             console.error("Неможливо завантажити зображення.");
//             reject();
//           };
//         });
//       }

//       setAllImageParts(imagePartsArray);
//     };

//     loadAndSplitImages();
//   }, [images, partsAmount]);

//   useEffect(() => {
//     setRenderedParts(0);
//     setResetKey((prev) => prev + 1);
//   }, [currentSlide]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRenderedParts((prev) => {
//         if (prev < allImageParts[currentSlide]?.length) {
//           return prev + 1;
//         } else {
//           clearInterval(interval);
//           return prev;
//         }
//       });
//     }, 100);

//     return () => clearInterval(interval);
//   }, [currentSlide, allImageParts, resetKey]);

//   if (allImageParts.length === 0) {
//     return (
//       <div className="flex items-center justify-center w-full h-full bg-gray-200  carousel-container">
//         Завантаження...
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-full flex justify-center items-center carousel-container">
//       <div
//         className={clsx(
//           "absolute top-0 left-0 w-full h-full flex min-w-max min-h-max z-20 bg-customMarsala-accent"
//         )}
//         style={{
//           // zIndex: partsAmount + 7 + currentSlide,
//         }}
//       >
//         {allImageParts[currentSlide].map((part, index) => (
//           <img
//             key={`${resetKey}-${index}`}
//             src={part}
//             alt={`Part ${index + 1}`}
//             className=" w-full h-full object-cover ml-[-1px]"
//             style={{
//               opacity: index < renderedParts ? 1 : 0,
//               visibility: index < renderedParts ? "visible" : "hidden",
//               transform:
//                 index < renderedParts
//                   ? "translateX(0) scaleY(1)"
//                   : "translateX(-100%) scaleY(0)",
//               transition: "opacity 0.2s ease, transform 0.2s ease",
//               transitionDelay: `${index * 0.05}s`,
//               zIndex: partsAmount + 1 - index,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

//ніби працює але миготить
// "use client";

// import React, { useState, useEffect } from "react";
// import clsx from "clsx";
// import { images } from "@/data/slidesHero";
// import { useTranslations } from "next-intl";

// // interface ImageSplitterProps {
// //   images: string[];
// //   partsAmount: number;
// //   currentSlide: number;
// // }
// interface Slide {
//   title: string;
//   description: string;
// }

// export default function ImageSplitter() {

//   const t = useTranslations("Hero");
//   const slidesList = t.raw("slides");
//   const slides: Slide[] = Object.values(slidesList);

//   const [allImageParts, setAllImageParts] = useState<string[][]>([]);
//   const [renderedParts, setRenderedParts] = useState<number>(0);
//   const [prevSlide, setPrevSlide] = useState<number | null>(null);
//   const [resetKey, setResetKey] = useState<number>(0);

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [visibleSlide, setVisibleSlide] = useState<number | null>(null);
//   const [isTransitioning, setIsTransitioning] = useState(true);

//   const partsAmount = 10

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setVisibleSlide(currentSlide);
//     }, 2000);

//     return () => clearTimeout(timeout);
//   }, [currentSlide]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const nextSlide = () => {
//     setIsTransitioning(true);

//     if (currentSlide === slides.length - 1) {
//       setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentSlide(0);
//         setVisibleSlide(null);
//       }, 300);
//     } else {
//       setCurrentSlide((prev) => prev + 1);
//     }
//   };

//   const goToSlide = (index: number) => {
//     setIsTransitioning(true);
//     setCurrentSlide(index);
//     setVisibleSlide(null);
//   };

//   useEffect(() => {
//     const loadAndSplitImages = async () => {
//       const imagePartsArray: string[][] = [];

//       for (const imgSrc of images) {
//         const img = new Image();
//         img.src = imgSrc;

//         await new Promise<void>((resolve, reject) => {
//           img.onload = () => {
//             const canvas = document.createElement("canvas");
//             const ctx = canvas.getContext("2d");

//             if (!ctx) {
//               console.error("Canvas context не вдалося отримати.");
//               reject();
//               return;
//             }

//             const width = window.innerWidth + partsAmount;
//             const height = window.innerHeight;

//             canvas.width = width;
//             canvas.height = height;

//             ctx.imageSmoothingEnabled = false;
//             ctx.drawImage(img, 0, 0, width, height);

//             const partWidth = width / partsAmount;
//             const parts: string[] = [];

//             for (let i = 0; i < partsAmount; i++) {
//               const partCanvas = document.createElement("canvas");
//               partCanvas.width =
//                 i === partsAmount - 1 ? width - i * partWidth : partWidth;
//               partCanvas.height = canvas.height;

//               const partCtx = partCanvas.getContext("2d");
//               if (!partCtx) {
//                 console.error("Canvas context для частини не вдалося отримати.");
//                 continue;
//               }

//               partCtx.imageSmoothingEnabled = false;
//               partCtx.drawImage(
//                 canvas,
//                 i * partWidth,
//                 0,
//                 partWidth,
//                 canvas.height,
//                 0,
//                 0,
//                 partWidth,
//                 canvas.height
//               );

//               parts.push(partCanvas.toDataURL());
//             }

//             imagePartsArray.push(parts);
//             resolve();
//           };

//           img.onerror = () => {
//             console.error("Неможливо завантажити зображення.");
//             reject();
//           };
//         });
//       }

//       setAllImageParts(imagePartsArray);
//     };

//     loadAndSplitImages();
//   }, [images, partsAmount]);

//   useEffect(() => {
//     setPrevSlide(currentSlide - 1 < 0 ? images.length - 1 : currentSlide - 1);
//     setRenderedParts(0);
//     setResetKey((prev) => prev + 1);
//   }, [currentSlide]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRenderedParts((prev) => {
//         if (prev < partsAmount) {
//           return prev + 1;
//         } else {
//           clearInterval(interval);
//           return prev;
//         }
//       });
//     }, 100);

//     return () => clearInterval(interval);
//   }, [resetKey]);

//   if (allImageParts.length === 0) {
//     return (
//       <div className="flex items-center justify-center w-full h-full bg-gray-200">
//         Завантаження...
//       </div>
//     );
//   }

//   return (
//     <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//       {prevSlide !== null && (
//         <div
//           key={`prev-${resetKey}`}
//           className="absolute w-full h-full flex"
//           style={{ zIndex: 1 }}
//         >
//           {allImageParts[prevSlide]?.map((part, index) => (
//             <img
//               key={`prev-part-${index}`}
//               src={part}
//               alt={`Prev part ${index + 1}`}
//               className="w-full h-full object-cover ml-[-1px]"
//               style={{
//                 opacity: index < renderedParts ? 0 : 1,
//                 transform: "translateX(0) scaleY(1)",
//                 transition: "opacity 0.3s ease",
//                 transitionDelay: `${0.2 + index * 0.05}s`,
//               }}
//             />
//           ))}
//         </div>
//       )}

//       <div
//         key={`current-${resetKey}`}
//         className="absolute w-full h-full flex"
//         style={{
//           zIndex: 2,
//           opacity: partsAmount < renderedParts ? 0 : 1,
//         }}
//       >
//         {allImageParts[currentSlide]?.map((part, index) => (
//           <img
//             key={`current-part-${index}`}
//             src={part}
//             alt={`Current part ${index + 1}`}
//             className="w-full h-full object-cover ml-[-1px] opacity-0"
//             style={{
//               opacity: index < renderedParts ? 1 : 0,
//               transform: "translateX(0) scaleY(1)",
//               transition: "opacity 0.3s ease",
//               transitionDelay: `${0.2 + index * 0.05}s`,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useState, useEffect, useRef } from "react";

// const slides: string[] = [
//   "/images/hero/1.jpg",
//   "/images/hero/2.jpg",
//   "/images/hero/3.jpg",

// ];

// interface State {
//   pos: number;
// }

// export default function CanvasSlider(): JSX.Element {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const newCanvasRef = useRef<HTMLCanvasElement>(null);

//   const [currentSlide, setCurrentSlide] = useState<number>(0);
//   const [state, setState] = useState<State>({ pos: 0 });
//   const cols = 20;
//   const delayPerCol = 0.05;

//   useEffect(() => {
//     if (!canvasRef.current || !newCanvasRef.current) return;

//     const canvas = canvasRef.current;
//     const newCanvas = newCanvasRef.current;

//     const context = canvas.getContext("2d");
//     const newContext = newCanvas.getContext("2d");

//     if (!context || !newContext) return;

//     const setCanvasSize = (canvas: HTMLCanvasElement) => {
//       canvas.width = window.innerWidth / 2;
//       canvas.height = window.innerHeight / 2;
//     };

//     const renderTempCanvas = () => {
//       newContext.clearRect(0, 0, canvas.width, canvas.height);
//       const img = new Image();
//       img.src = slides[currentSlide];

//       img.onload = () => {
//         newContext.drawImage(img, 0, 0, canvas.width, canvas.height);
//         const colWidth = canvas.width / cols;

//         for (let i = 0; i <= cols; i++) {
//           const delay = i * delayPerCol;
//           const clampPos = Math.min(1, Math.max(0, state.pos - delay));
//           newContext.clearRect(
//             i * colWidth,
//             0,
//             colWidth * clampPos,
//             canvas.height
//           );
//         }
//       };
//     };

//     const render = () => {
//       context.clearRect(0, 0, canvas.width, canvas.height);

//       // Load next image
//       const nextImage = new Image();
//       nextImage.src = slides[(currentSlide + 1) % slides.length];

//       nextImage.onload = () => {
//         context.drawImage(nextImage, 0, 0, canvas.width, canvas.height);
//         renderTempCanvas();
//         context.drawImage(newCanvas, 0, 0, canvas.width, canvas.height);
//       };
//     };

//     const animate = () => {
//       setState((prevState) => ({ pos: prevState.pos + 0.02 }));
//       render();

//       if (state.pos < 2) {
//         requestAnimationFrame(animate);
//       } else {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//         setState({ pos: 0 });
//       }
//     };

//     setCanvasSize(canvas);
//     setCanvasSize(newCanvas);

//     animate();
//   }, [currentSlide, state.pos]);

//   return (
//     <div>
//       <canvas ref={canvasRef} className="relative w-full h-full carousel-container"></canvas>
//       <canvas ref={newCanvasRef} style={{ display: "none" }}></canvas>
//     </div>
//   );
// }

"use client";

interface Slide {
  title: string;
  description: string;
}

import { useRef, useEffect, useState } from "react";
import { images } from "@/data/slidesHero";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import Arrow from "@/public/icons/Arrow_rounded.svg";

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

  const nbItems = 5;
  const cols = 20;
  const displayDuration = 4000;
  const animationDuration = 1800;

  const setCanvasSize = (canvas: HTMLCanvasElement) => {
    const container = canvas.parentElement;
    if (container) {
      canvas.width = container.offsetWidth;
      canvas.height = (container.offsetWidth * 10.7) / 16;
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

  const handleNext = () => {
    const nextItem = currentItem < nbItems ? currentItem + 1 : 1;
    startAnimation(nextItem);
  };

  const handlePrev = () => {
    const prevItem = currentItem > 1 ? currentItem - 1 : nbItems;
    startAnimation(prevItem);
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

  return (
    <div className="relative w-full flex justify-center items-center carousel-container overflow-hidden">
      <canvas
        ref={canvasRef}
        id="canvas"
        style={{ zIndex: isAnimating ? 1 : 0 }}
      ></canvas>
      <canvas ref={newCanvasRef} style={{ display: "none" }}></canvas>

      {textVisible && (
        <div
          className={clsx(
            "absolute top-20 left-0 bg-black/50 text-white pt-8 pr-8 pb-8 rounded-r-md transition-opacity duration-500",
            {
              "opacity-100": textVisible,
              "opacity-0": !textVisible,
            }
          )}
        >
          <div className=" relative xl:pl-[calc((100vw-1280px)/2+20px)] ">
            {/* <h1 className="mainTitleCl mb-4">{texts[currentItem - 1]}</h1> */}
            <h1 className="mainTitleCl mb-4">
              {slides[currentItem - 1]?.title}
            </h1>
            <p className="text-lg font-open_sans">
              {slides[currentItem - 1]?.description}
            </p>
          </div>
        </div>
      )}

      <button
        onClick={handlePrev}
        className="absolute left-4 top-2/3 transform -translate-y-1/2  fill-white p-2 rounded-md rotate-180 z-30 hover:bg-black/50"
      >
        <Arrow className="w-11 h-11" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-2/3 transform -translate-y-1/2  fill-white p-2 rounded-md z-30 hover:bg-black/50"
      >
        <Arrow className="w-11 h-11" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-[10px] z-30">
        {Array.from({ length: nbItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => startAnimation(index + 1)}
            className={clsx(
              "h-[5px] w-[40px] cursor-pointer rounded-md bg-white transition-all duration-300",
              currentItem === index + 1 ? "bg-white" : "bg-white opacity-50"
            )}
          />
        ))}
      </div>

      {/* <img ref={img1Ref} src="/images/hero/1.jpg" className="hidden" alt="Image 1" />
      <img ref={img2Ref} src="/images/hero/2.jpg" className="hidden" alt="Image 2" />
      <img ref={img3Ref} src="/images/hero/3.jpg" className="hidden" alt="Image 3" /> */}
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
