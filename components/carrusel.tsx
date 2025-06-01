"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = Array.from({ length: 10 }, (_, i) => `car${i + 1}`);
  const maxIndex = images.length - 3;

  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === maxIndex ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [maxIndex, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(translateX) > 100) {
      if (translateX > 0) {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
      } else {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
      }
    }
    setTranslateX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div
          className="relative h-48 overflow-hidden cursor-grab active:cursor-grabbing"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex gap-4 h-full">
            {images
              .slice(currentIndex, currentIndex + 3)
              .map((imageName, index) => (
                <div
                  key={currentIndex + index}
                  className="flex-1 relative rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={`/images/${imageName}.webp`}
                    alt={`Imagen ${currentIndex + index + 1}`}
                    fill
                    className="object-cover transition-all duration-500 ease-out"
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={95}
                    priority={index === 0}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
