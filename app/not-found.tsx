import { Link } from '../components/ui/link';

import { BOOK } from '@/utils/book';

export default function Custom404() {
  return (
    <section className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-2xl font-semibold text-slate-900'>404</p>
        <h1 className='mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl'>
          Сторінку не знайдено
        </h1>
        <p className='mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
          Упс! В нас немає такої сторінки, яку ви шукаєте.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link href={BOOK.home} variant='button' fontWeight='semibold'>
            Повернутися на головну
          </Link>
          <Link href={BOOK.contacts} fontWeight='semibold'>
            Контакти <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
