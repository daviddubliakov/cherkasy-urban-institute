'use client';

import { useEffect, useMemo, useState } from 'react';

import Image from 'next/image';

const testimonials = [
  {
    id: '1',
    imageSrc: '/images/trainings/testimonials/feedback-01.jpeg',
    alt: 'Скріншот відгуку: «Супер. Всі щасливі, всі довольні. Хочемо ще»',
    summary: '«Супер. Всі щасливі, всі довольні. Хочемо ще»',
  },
  {
    id: '2',
    imageSrc: '/images/trainings/testimonials/feedback-02.jpeg',
    alt: 'Скріншот відгуку від Тетяни про те, що все доступно та важливо знати',
    summary: '«Все доступно. Інструктор молодець. Це має знати кожен»',
  },
  {
    id: '3',
    imageSrc: '/images/trainings/testimonials/feedback-03.jpeg',
    alt: 'Скріншот відгуку про супер вишкіл та бажання продовжити навчання',
    summary: '«Вишкіл просто супер! Хочемо продовження від пана Кучума»',
  },
  {
    id: '4',
    imageSrc: '/images/trainings/testimonials/feedback-04.jpeg',
    alt: 'Скріншот повідомлення із проханням організувати наступне заняття',
    summary: '«Попросили організувати наступне тактичне заняття зі зброєю»',
  },
  {
    id: '5',
    imageSrc: '/images/trainings/testimonials/feedback-05.jpeg',
    alt: 'Скріншот відгуку про пізнавальне та цікаве навчання',
    summary: '«Було дуже пізнавально. Гарно провели, мені сподобалося»',
  },
  {
    id: '6',
    imageSrc: '/images/trainings/testimonials/feedback-06.jpeg',
    alt: 'Скріншот повідомлення «Оці навчання - топчик. Корисно»',
    summary: '«Оці навчання — топчик. Корисно»',
  },
  {
    id: '7',
    imageSrc: '/images/trainings/testimonials/feedback-07.jpeg',
    alt: 'Скріншот подяки за живе спілкування та практику на тренінгу',
    summary: '«Ніякі презентації не замінять живе спілкування та практику»',
  },
  {
    id: '8',
    imageSrc: '/images/trainings/testimonials/feedback-08.jpeg',
    alt: 'Скріншот відгуку з текстом «Все, я вже дома. Дуже круто»',
    summary: '«Все, я вже дома. Дуже круто»',
  },
  {
    id: '9',
    imageSrc: '/images/trainings/testimonials/feedback-09.jpeg',
    alt: 'Скріншот коментаря з Instagram із подякою за вишколи',
    summary: '«Дякуємо за вишколи. Дуже цікаво та корисно»',
  },
  {
    id: '10',
    imageSrc: '/images/trainings/testimonials/feedback-10.jpeg',
    alt: 'Скріншот повідомлення про доступну та важливу інформацію тренінгу',
    summary: '«Все доступно та цікаво. Інформація, якою мають володіти всі»',
  },
  {
    id: '11',
    imageSrc: '/images/trainings/testimonials/feedback-11.jpeg',
    alt: 'Скріншот відгуку Дениса з подякою за тренінг зі зброєю',
    summary: '«Дуже корисно, тепер почуваю себе не нульовим зі зброєю»',
  },
  {
    id: '12',
    imageSrc: '/images/trainings/testimonials/feedback-12.jpeg',
    alt: 'Скріншот повідомлення про пізнавальну та необхідну інформацію з емодзі',
    summary: '«Отримала пізнавальну та необхідну інформацію»',
  },
];

export const TestimonialsSection = () => {
  const [itemsPerView, setItemsPerView] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openSlide, setOpenSlide] = useState<number | null>(null);

  useEffect(() => {
    const calculateItemsPerView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    calculateItemsPerView();
    window.addEventListener('resize', calculateItemsPerView);

    return () => window.removeEventListener('resize', calculateItemsPerView);
  }, []);

  const slides = useMemo(() => {
    const chunks: (typeof testimonials)[] = [];

    for (let i = 0; i < testimonials.length; i += itemsPerView) {
      chunks.push(testimonials.slice(i, i + itemsPerView));
    }

    return chunks;
  }, [itemsPerView]);

  const slidesCount = slides.length;
  const hasMultipleSlides = slidesCount > 1;

  useEffect(() => {
    setCurrentSlide((prev) => Math.min(prev, Math.max(slidesCount - 1, 0)));
  }, [slidesCount]);

  const aspectPadding = useMemo(() => {
    if (itemsPerView >= 3) return '90%';
    if (itemsPerView === 2) return '110%';
    return '130%';
  }, [itemsPerView]);

  const handlePrev = () => {
    if (!hasMultipleSlides) return;
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const handleNext = () => {
    if (!hasMultipleSlides) return;
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleOpen = (index: number) => {
    setOpenSlide(index);
  };

  const handleClose = () => {
    setOpenSlide(null);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (openSlide !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [openSlide]);

  return (
    <section className="relative mt-8 flex w-full max-w-7xl flex-col px-4 pb-16 sm:mt-16 sm:pb-16">
      <div className="mb-8 text-center sm:mb-12">
        <h2 className="mb-3 !text-[32px] leading-tight font-bold sm:!text-[48px] lg:!text-[59px]">
          Відгуки <span className="gradient-text">учасників</span>
        </h2>
        <p className="mx-auto max-w-2xl text-[16px] leading-relaxed text-gray-600 sm:text-[18px]">
          Що кажуть наші випускники про навчання
        </p>
      </div>

      <div className="relative">
        <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-white">
          <div
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slideTestimonials, slideIndex) => (
              <div key={slideIndex} className="flex w-full flex-shrink-0 gap-4 px-2 sm:gap-6 sm:px-4">
                {slideTestimonials.map((testimonial, itemIndex) => {
                  const globalIndex = slideIndex * itemsPerView + itemIndex;

                  return (
                    <article key={testimonial.id} className="relative flex-1">
                      <button
                        type="button"
                        onClick={() => handleOpen(globalIndex)}
                        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                        aria-label={`Відкрити повний відгук ${globalIndex + 1}`}
                      >
                        <div className="relative w-full" style={{ paddingBottom: aspectPadding }}>
                          <Image
                            src={testimonial.imageSrc}
                            alt={testimonial.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 30vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            priority={testimonial.id === '1'}
                          />

                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                          <div className="absolute top-3 left-3 flex items-center gap-2 sm:top-4 sm:left-4">
                            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-gray-800 uppercase shadow">
                              Скріншот
                            </span>
                          </div>
                          <div className="absolute right-3 bottom-3 left-3 sm:right-4 sm:bottom-4 sm:left-4">
                            <p className="text-sm leading-relaxed font-medium text-white drop-shadow-sm sm:text-base">
                              {testimonial.summary}
                            </p>
                          </div>
                        </div>
                      </button>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {hasMultipleSlides && (
          <div className="pointer-events-none absolute inset-y-0 right-0 left-0 flex items-center justify-between px-3 sm:px-5">
            <button
              type="button"
              onClick={handlePrev}
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/90 text-gray-800 shadow-lg transition hover:bg-white"
              aria-label="Попередній відгук"
            >
              <span aria-hidden>‹</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/90 text-gray-800 shadow-lg transition hover:bg-white"
              aria-label="Наступний відгук"
            >
              <span aria-hidden>›</span>
            </button>
          </div>
        )}

        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-gray-900' : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Перейти до відгуку ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>
      </div>

      {openSlide !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={handleClose}
        >
          <div className="relative mx-4 w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-0 right-0 z-10 inline-flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg transition hover:bg-white"
              aria-label="Закрити повний відгук"
            >
              ×
            </button>
            <div className="relative aspect-[3/4] w-full sm:aspect-[4/5] md:aspect-[16/10] lg:aspect-[16/9]">
              <Image
                src={testimonials[openSlide].imageSrc}
                alt={testimonials[openSlide].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-white/80">{testimonials[openSlide].summary}</p>
          </div>
        </div>
      )}
    </section>
  );
};
