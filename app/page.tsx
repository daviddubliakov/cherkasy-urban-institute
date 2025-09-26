import { Carousel } from '@/components/carousel';
import { Section } from '@/components/section';

import { CAROUSEL_SLIDES, SECTION_ELEMENTS } from '@/constants/home-content';

export default function Home() {
  return (
    <>
      <section className='relative w-full h-screen'>
        <Carousel slides={CAROUSEL_SLIDES} className='absolute inset-0' />
      </section>
      <main className='min-h-screen'>
        <Section elements={SECTION_ELEMENTS} />
      </main>
    </>
  );
}
