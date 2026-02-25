'use client';

import { ReactNode, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/utils';
import { CarouselNavigation } from './carousel-navigation';
import { CarouselIndicators } from './carousel-indicators';
import Link from 'next/link';

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
  autoPlayInterval = 25000,// ms
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
              index === currentSlide && 'opacity-100 translate-x-0',
              index < currentSlide && 'opacity-0 -translate-x-full',
              index > currentSlide && 'opacity-0 translate-x-full'
            )}
          >
            <Link href={slide.link || '#'}>
              <Image
                src={slide.background}
                width={1920}
                height={1080}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40 z-0" />
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="text-center max-w-4xl">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 h2-shadow animate-fade-in-up">
                    {slide.title}
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 leading-relaxed animate-fade-in-up animation-delay-300">
                    {slide.description}
                  </p>
                  {slide.children && (
                    <div className="animate-fade-in-up animation-delay-600">
                      {slide.children}
                    </div>
                  )}
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
