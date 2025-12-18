
import { TRAINING_CATEGORIES } from '../models/trainings-list';
import { TrainingCard } from './training-card';

export const CategoriesSection = () => {
  return (
    <section className="flex w-full max-w-7xl flex-col gap-6 sm:gap-10">
      <div className="flex flex-col items-center gap-3">
        <p className="text-center !text-[32px] leading-tight font-bold sm:!text-[48px] lg:!text-[59px]">
          Напрямки вишколів
        </p>
        <p className="max-w-4xl text-center !text-[16px] leading-relaxed text-gray-600 sm:!text-[18px] lg:!text-[22px]">
          Оберіть напрямок, перегляьте короткий опис і перейдіть до конкретного вишколу.
        </p>
      </div>
      {TRAINING_CATEGORIES.map((category) => (
        <div
          key={category.id}
          className="flex flex-col rounded-2xl border border-gray-200 bg-white p-4 sm:flex-row sm:rounded-3xl sm:p-8 lg:p-12"
        >
          <div className="w-full sm:mb-0 sm:w-1/3">
            <p className="mb-3 text-[22px] leading-tight font-bold text-gray-900 sm:mb-4 sm:text-[28px] lg:text-[32px]">
              {category.title}
            </p>
            <p className="text-[14px] leading-relaxed text-gray-600 sm:text-[16px] lg:text-[18px]">
              {category.description}
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-2 sm:w-2/3 sm:grid-cols-2 sm:gap-4">
            {category.trainings.map((training) => (
              <TrainingCard key={training.id} {...training} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

