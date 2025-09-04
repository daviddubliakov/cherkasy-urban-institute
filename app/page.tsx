import { Banner } from '@/components/banner';
import { Section } from '@/components/section';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import { Link } from '@/components/ui';

import { BANNER_LIST, SECTION_ELEMENTS } from '@/constants/home-content';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <section className='relative'>
        {BANNER_LIST.map((bannerProps, i) => (
          <div key={i} className={i > 0 ? 'mt-2 sm:mt-4 md:mt-8 lg:mt-16' : ''}>
            <Banner {...bannerProps}>
              <Link
                href={bannerProps.link}
                variant='button'
                fontWeight='semibold'
                className='group inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white hover:text-blue-800 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base border border-blue-500/20'
              >
                Ознайомитись
                <ArrowRightIcon className='size-3 sm:size-4 md:size-5 group-hover:translate-x-1 transition-transform duration-300' />
              </Link>
            </Banner>
          </div>
        ))}
      </section>
      <Section elements={SECTION_ELEMENTS} />
    </main>
  );
}
