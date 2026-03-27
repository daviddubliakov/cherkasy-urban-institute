'use client';

import { cn } from '@/utils';

import type { ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CarouselIndicators } from './carousel-indicators';
import { CarouselNavigation } from './carousel-navigation';

export type CarouselSlide = {
  background: string;
  title: string;
  description: string;
  children?: ReactNode;
  link?: string;
};

type Props = {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
};

export const Carousel = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 25000, // ms
  className,
}: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide, isPaused]);

  if (!slides.length) return null;

  return (
    <div className={cn('relative w-full overflow-hidden', className)}>
      <div className="relative h-[calc(100vh-74px)]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              'absolute inset-0 transition-all duration-700 ease-in-out',
              index === currentSlide && 'translate-x-0 opacity-100',
              index < currentSlide && '-translate-x-full opacity-0',
              index > currentSlide && 'translate-x-full opacity-0',
            )}
          >
            <Link href={slide.link || '#'}>
              <Image
                src={slide.background}
                width={1920}
                height={1080}
                alt={slide.title}
                className="absolute inset-0 z-[-1] h-full w-full object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 z-0 bg-black/40" />

              <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-4xl text-center">
                  <h2 className="h2-shadow animate-fade-in-up mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h2>
                  <p className="animate-fade-in-up animation-delay-300 mb-6 text-lg leading-relaxed sm:mb-8 sm:text-xl md:mb-10 md:text-2xl">
                    {slide.description}
                  </p>
                  {slide.children && <div className="animate-fade-in-up animation-delay-600">{slide.children}</div>}
                </div>
              </div>
            </Link>
          </div>
        ))}

        <CarouselIndicators
          totalSlides={slides.length}
          currentSlide={currentSlide}
          onSlideSelect={goToSlide}
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
        />
      </div>

      <CarouselNavigation
        onPrevious={prevSlide}
        onNext={nextSlide}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
      />
    </div>
  );
};
