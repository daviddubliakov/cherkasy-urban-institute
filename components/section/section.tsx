'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils';

export type SectionElementProps = {
  image: string;
  title: string;
  link: string;
  description?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  delay?: number;
};

export type SectionProps = {
  elements: SectionElementProps[];
};

const SectionElement = ({
  image,
  title,
  description,
  children,
  style,
  delay = 0,
}: SectionElementProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shouldRender) {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, delay * 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div ref={wrapperRef}>
      {shouldRender && (
        <div
          className={cn(
            'group relative flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/50 backdrop-blur-sm border border-gray-100/50 hover:bg-white/80 hover:border-gray-200/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1',
            shouldRender ? 'animate-fade-in-up' : 'opacity-0',
          )}
          style={style || {}}
        >
          {/* Background gradient overlay */}
          <div className='absolute inset-0 bg-linear-to-br from-blue-50/30 via-transparent to-purple-50/30 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

          {/* Image container with enhanced styling */}
          <div className='relative z-10 shrink-0'>
            <div className='relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-500'>
              <Image
                src={image}
                alt='section image'
                width={120}
                height={120}
                className='h-[100px] sm:h-[120px] md:h-[140px] w-[100px] sm:w-[120px] md:w-[140px] object-cover transform group-hover:scale-110 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
          </div>

          {/* Content container */}
          <div className='relative z-10 flex-1 min-w-0 flex flex-col justify-between'>
            <div>
              <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight'>
                {title}
              </h3>
              <p className='text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300'>
                {description}
              </p>
            </div>

            {/* Link with enhanced styling */}
            <div className='mt-auto'>{children}</div>
          </div>

          {/* Decorative elements */}
          <div className='absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
          <div className='absolute bottom-4 right-4 w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100'></div>
        </div>
      )}
    </div>
  );
};

export const Section = ({ elements }: SectionProps) => {
  return (
    <section className='relative w-full bg-gradient-to-b from-gray-50/50 to-white/50 py-16 sm:py-20 md:py-24 lg:py-32'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-40 h-40 bg-purple-100/30 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-50/20 to-purple-50/20 rounded-full blur-3xl'></div>
      </div>

      {/* Section header */}
      <div className='relative z-10 text-center mb-12 sm:mb-16 md:mb-20'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6'>
          Черкаський <span className='gradient-text'>інститут міста</span>
        </h2>
        <p className='text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-6'>
          Досліджуємо, популяризуємо та впроваджуємо кращі практики міського життя та управління з 2015 року
        </p>
      </div>

      {/* Projects container */}
      <div className='relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col gap-6 sm:gap-8 md:gap-10'>
        {elements.map((props, index) => (
          <SectionElement
            key={index}
            delay={index}
            {...props}
            style={{
              paddingLeft: `${(index % 3) * 2}0px`,
            }}
          >
            <Link
              href={props.link}
              className='inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300 group/link'
            >
              <span className='relative'>
                Більше інформації
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/link:w-full transition-all duration-300'></span>
              </span>
              <svg
                className='w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </Link>
          </SectionElement>
        ))}
      </div>
    </section>
  );
};
