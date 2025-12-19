'use client';

import { cn } from '@/utils';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { ScheduleCard } from './schedule-card';
import type { ScheduleCardPropsType } from '../ui/schedule-card';

type ScheduleCarouselProps = {
  schedules: ScheduleCardPropsType[];
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
};

export const ScheduleCarousel = ({
  schedules,
  itemsPerView = { mobile: 1, tablet: 1, desktop: 2 },
}: ScheduleCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(itemsPerView.desktop);

  const resolveVisibleItems = useMemo(() => {
    if (typeof window === 'undefined') {
      return () => itemsPerView.desktop;
    }

    return () => {
      if (window.innerWidth >= 1024) {
        return itemsPerView.desktop;
      }
      if (window.innerWidth >= 640) {
        return itemsPerView.tablet;
      }
      return itemsPerView.mobile;
    };
  }, [itemsPerView.desktop, itemsPerView.mobile, itemsPerView.tablet]);

  useEffect(() => {
    const updateVisibleItems = () => setVisibleItems(resolveVisibleItems());

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);

    return () => window.removeEventListener('resize', updateVisibleItems);
  }, [resolveVisibleItems]);

  useEffect(() => {
    setCurrentIndex((prev) => {
      const max = Math.max(0, schedules.length - visibleItems);
      return Math.min(prev, max);
    });
  }, [schedules.length, visibleItems]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, schedules.length - visibleItems);
      return prev < maxIndex ? prev + 1 : 0;
    });
  }, [schedules.length, visibleItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, schedules.length - visibleItems);
      return prev > 0 ? prev - 1 : maxIndex;
    });
  }, [schedules.length, visibleItems]);

  const maxIndex = Math.max(0, schedules.length - visibleItems);
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  return (
    <div className="relative w-full ">
      {canGoPrev && (
        <button
          onClick={prevSlide}
          className="group absolute top-1/2 left-0 z-20 flex -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2 shadow-md transition-all duration-300 hover:scale-110 hover:bg-blue-50"
          aria-label="Попередній слайд"
        >
          <ChevronLeftIcon className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
        </button>
      )}

      {canGoNext && (
        <button
          onClick={nextSlide}
          className="group absolute top-1/2 right-0 z-20 flex -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2 shadow-md transition-all duration-300 hover:scale-110 hover:bg-blue-50"
          aria-label="Наступний слайд"
        >
          <ChevronRightIcon className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
        </button>
      )}

      {/* Carousel Container */}
      <div className="overflow-hidden pr-12 pl-12 sm:pr-16 sm:pl-16">
        <div
          className="-mx-2 flex transition-transform duration-500 ease-in-out sm:-mx-3 lg:-mx-4"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {schedules.map((schedule) => (
            <div
              key={schedule.id}
              className={cn('flex-shrink-0 px-2 sm:px-3 lg:px-4')}
              style={{ width: `${100 / visibleItems}%`, flexBasis: `${100 / visibleItems}%` }}
            >
              <ScheduleCard {...schedule} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      {maxIndex > 0 && (
        <div className="mt-8 flex justify-center space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'h-1.5 w-1.5 cursor-pointer rounded-full transition-all duration-300',
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400',
              )}
              aria-label={`Перейти до слайда ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
