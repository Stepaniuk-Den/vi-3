"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { images } from "@/data/slidesHero";

interface Slide {
  title: string;
  description: string;
}

const ImageCarousel: React.FC = () => {
  const t = useTranslations("Hero");
  const slidesList = t.raw("slides");
  const slides: Slide[] = Object.values(slidesList);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlide, setVisibleSlide] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibleSlide(currentSlide); 
    }, 2000);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

 
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsTransitioning(true);

    if (currentSlide === slides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
        setVisibleSlide(null); 
      }, 300);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
    setVisibleSlide(null);
  };

  return (
    <section className="relative">
      <div className="relative w-full overflow-hidden rounded-md carousel-container">
        <div
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: isTransitioning ? "transform 0.3s ease-in-out" : "none",
          }}
          className="absolute flex h-full w-full"
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative h-full w-full flex-shrink-0">
              <Image
                priority
                src={images[index]}
                alt={slide.title}
                fill
                className="pointer-events-none object-cover"
                sizes="100vw"
              />
              <div
                className={`absolute top-20 left-0 bg-black/50 text-white p-8 rounded transition-opacity duration-500 ${
                  visibleSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <h1 className="mainTitleCl mb-4">{slide.title}</h1>
                <p className="text-lg font-open_sans">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-[10px]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[5px] w-[40px] cursor-pointer rounded-full bg-white transition-all duration-300 ${
              currentSlide === index ? "bg-white" : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute top-2/3 left-4 transform -translate-y-1/2 text-white p-2 rounded hover:bg-black/70"
      >
        ❮
      </button>
      <button
        onClick={() => nextSlide()}
        className="absolute top-2/3 right-4 transform -translate-y-1/2 text-white p-2 rounded hover:bg-black/70"
      >
        ❯
      </button>
    </section>
  );
};

export default ImageCarousel;



