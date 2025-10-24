import { Link } from '@/components/ui/link';

import { TrainingCard } from './training-card';
import { TRAININGS_LIST } from './trainings-list';

export default function Trainings() {
  return (
    <main className="mt-4 flex flex-col items-center overflow-hidden px-4 sm:mt-8">
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
              <span>Ком&apos;юніті.</span>
              <span>Вплив.</span>
            </div>
          </h2>
          <h3 className="max-w-4xl text-center !text-[16px] leading-relaxed text-gray-600 sm:!text-[18px] lg:!text-[22px]">
            Вишколи — це інтенсивна робота над реальними задачами міста з підтримкою менторів і спільноти. Ми
            допомогаємо з ідеї перейти до втілення.
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
    </main>
  );
}
