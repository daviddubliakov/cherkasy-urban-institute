import { Link } from '@/components/ui/link';

import { TrainingCard } from './training-card';
import { TRAININGS_LIST, TRAINING_CATEGORIES } from './trainings-list';

export default function Trainings() {
  return (
    <main className="my-8 flex flex-col items-center gap-12 overflow-hidden px-4 sm:mt-8">
      <section
        className="relative flex w-full max-w-7xl flex-col items-center rounded-2xl py-6 sm:rounded-3xl sm:py-8"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(243,248,254,1) 0%, rgba(243,248,254,0.4) 20%, rgba(255,255,255,0) 50%),
            radial-gradient(circle at bottom right, rgba(243,248,254,1) 0%, rgba(243,248,254,0.4) 20%, rgba(255,255,255,0) 50%),
            white
          `,
        }}
      >
        <div className="flex flex-col items-center gap-3 px-4 py-4 sm:gap-4 sm:px-8 sm:py-12">
          <h2 className="text-center !text-[32px] leading-tight font-bold sm:!text-[48px] lg:!text-[59px]">
            <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-2 lg:gap-4">
              <span>Практика.</span>
              <span>Спільнота.</span>
              <span>Дієвість.</span>
            </div>
          </h2>
          <h3 className="max-w-4xl text-center !text-[16px] leading-relaxed text-gray-600 sm:!text-[18px] lg:!text-[22px]">
            Вишколи - це інтенсивні тренінги з підготовки цивільних містян до викликів воєнного часу. Разом із
            інструкторами з добровольчого формування боремо страх, вчимо рятувати життя та діяти в критичних ситуаціях.
          </h3>
        </div>
        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 px-4 sm:grid-cols-3 sm:gap-6 sm:px-8">
          {TRAININGS_LIST.map((training) => (
            <TrainingCard key={training.id} {...training} />
          ))}
        </div>
        <div className="mt-8 sm:mt-12">
          <Link href="#" variant="buttonLink" backgroundColor="blue-600" fontWeight="bold" fontSize="sm">
            Перейти до вишколів
          </Link>
        </div>
      </section>

      {/* Training Categories Section */}
      <section className="w-full max-w-7xl space-y-8 sm:space-y-12">
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
            className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 sm:flex-row sm:rounded-3xl sm:p-8 lg:p-12"
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
    </main>
  );
}
