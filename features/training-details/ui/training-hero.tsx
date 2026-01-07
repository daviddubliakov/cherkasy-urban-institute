'use client';

import { useCallback } from 'react';
import Image from 'next/image';
import type { TrainingDetailsType } from '../models/training-details';

type TrainingHeroProps = {
  training: TrainingDetailsType;
};

export function TrainingHero({ training }: TrainingHeroProps) {
  const hasAvailableDates = training.schedules.some((s) => s.spotsAvailable > 0);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section className="relative w-full max-w-7xl overflow-hidden rounded-2xl sm:rounded-3xl">
      <div className="absolute inset-0 z-0">
        <Image
          src={training.image || '/images/training-hero-placeholder.jpg'}
          alt={training.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/30" />
      </div>

      <div className="relative z-10 flex flex-col gap-6 p-6 sm:p-10 lg:p-16">
        <div className="mt-auto flex flex-col gap-4 pt-32 sm:pt-48 lg:pt-64">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white">
              {training.category}
            </span>
            <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              {training.duration}
            </span>
            {!hasAvailableDates && (
              <span className="rounded-full bg-amber-500 px-4 py-1.5 text-sm font-semibold text-white">
                Немає доступних дат
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {training.title}
          </h1>

          <p className="max-w-2xl text-lg text-white/80 sm:text-xl">
            {training.shortDescription}
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('registration')}
              className="inline-flex cursor-pointer rounded-xl bg-blue-600 px-6 py-3 text-[16px] font-bold text-white transition-colors hover:bg-blue-700 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-[18px]"
            >
              {hasAvailableDates ? 'Записатися на вишкіл' : 'Залишити заявку'}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('instructors')}
              className="inline-flex cursor-pointer rounded-xl border-2 border-white/30 bg-transparent px-6 py-3 text-[16px] font-bold text-white transition-colors hover:bg-white/10 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-[18px]"
            >
              Про інструкторів
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

