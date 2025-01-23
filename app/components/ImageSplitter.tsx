
"use client";

import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { images } from "@/data/slidesHero";
import { useTranslations } from "next-intl";

interface Slide {
  title: string;
  description: string;
}


export default function ImageSplitter() {
  const t = useTranslations("Hero");
  const slidesList = t.raw("slides");
  const slides: Slide[] = Object.values(slidesList);
  const [allImageParts, setAllImageParts] = useState<string[][]>([]);
  const [renderedParts, setRenderedParts] = useState<number>(0);
  const [resetKey, setResetKey] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const partsAmount = 20;


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    // setIsTransitioning(true);

    // setPrevSlide(currentSlide);
    if (currentSlide === slides.length - 1) {
      setTimeout(() => {
        setCurrentSlide(0);
        // setVisibleSlide(null);
        // setIsTransitioning(false);
      }, 300);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };


  useEffect(() => {

    const loadAndSplitImages = async () => {
      const imagePartsArray: string[][] = [];

      for (const imgSrc of images) {
        const img = new Image();
        img.src = imgSrc;

        await new Promise<void>((resolve, reject) => {
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            if (!ctx) {
              console.error("Canvas context не вдалося отримати.");
              reject();
              return;
            }

            const width = window.innerWidth + partsAmount;
            const height = window.innerHeight;

            canvas.width = width;
            canvas.height = height;

            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(img, 0, 0, width, height);

            const partWidth = width / partsAmount;
            const parts: string[] = [];

            for (let i = 0; i < partsAmount; i++) {
              const partCanvas = document.createElement("canvas");
              partCanvas.width = i === partsAmount - 1 ? width - i * partWidth : partWidth;
              partCanvas.height = canvas.height;

              const partCtx = partCanvas.getContext("2d");
              if (!partCtx) {
                console.error("Canvas context для частини не вдалося отримати.");
                continue;
              }

              partCtx.imageSmoothingEnabled = false;
              partCtx.drawImage(
                canvas,
                i * partWidth,
                0,
                partWidth,
                canvas.height,
                0,
                0,
                partWidth,
                canvas.height
              );

              parts.push(partCanvas.toDataURL());
            }

            imagePartsArray.push(parts);
            resolve();
          };

          img.onerror = () => {
            console.error("Неможливо завантажити зображення.");
            reject();
          };
        });
      }

      setAllImageParts(imagePartsArray);
    };

    loadAndSplitImages();
  }, [images, partsAmount]);

  useEffect(() => {
    setRenderedParts(0);
    setResetKey((prev) => prev + 1);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRenderedParts((prev) => {
        if (prev < allImageParts[currentSlide]?.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentSlide, allImageParts, resetKey]);

  if (allImageParts.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-200  carousel-container">
        Завантаження...
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex justify-center items-center carousel-container">
      <div
        className={clsx(
          "absolute top-0 left-0 w-full h-full flex min-w-max min-h-max z-20 bg-customMarsala-accent"
        )}
        style={{
          // zIndex: partsAmount + 7 + currentSlide,
        }}
      >
        {allImageParts[currentSlide].map((part, index) => (
          <img
            key={`${resetKey}-${index}`}
            src={part}
            alt={`Part ${index + 1}`}
            className=" w-full h-full object-cover ml-[-1px]"
            style={{
              opacity: index < renderedParts ? 1 : 0,
              visibility: index < renderedParts ? "visible" : "hidden",
              transform:
                index < renderedParts
                  ? "translateX(0) scaleY(1)"
                  : "translateX(-100%) scaleY(0)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
              transitionDelay: `${index * 0.05}s`,
              zIndex: partsAmount + 1 - index,
            }}
          />
        ))}
      </div>
    </div>
  );
}

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
