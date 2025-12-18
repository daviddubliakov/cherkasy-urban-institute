'use client';

import { forwardRef } from 'react';

import { SCHEDULES_LIST } from '../models/schedules-list';
import { ScheduleCarousel } from './schedule-carousel';

export const ScheduleSection = forwardRef<HTMLElement, unknown>(
  (_, ref) => {
    return (
      <section
        id="schedule-carousel"
        ref={ref}
        className="flex w-full max-w-7xl flex-col"
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="!text-[32px] leading-tight font-bold sm:!text-[48px] lg:!text-[59px]">
            Календар <span className="gradient-text">вишколів</span>
          </h2>
        </div>

        <div className="w-full">
          <ScheduleCarousel schedules={SCHEDULES_LIST} />
        </div>
      </section>
    );
  },
);

ScheduleSection.displayName = 'ScheduleSection';

