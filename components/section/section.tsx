'use client';

import { cn } from '@/utils';

import { ReactNode, useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { RegularLink } from '../ui/regular-link';

export type SectionCardProps = {
  image: string;
  title: string;
  link: string;
  description?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
  delay?: number;
};

export type SectionProps = {
  elements: SectionCardProps[];
};

const SectionCard = ({ image, title, description, children, style, delay = 0 }: SectionCardProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shouldRender) {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, delay * 500);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={wrapperRef}>
      {shouldRender && (
        <div
          className={cn(
            'group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-gray-100/50 bg-white/50 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gray-200/80 hover:bg-white/80 hover:shadow-xl sm:flex-row sm:rounded-3xl',
            shouldRender ? 'animate-fade-in-up' : 'opacity-0',
          )}
          style={style || {}}
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:rounded-3xl"></div>

          {/* Image container with enhanced styling */}
          <div className="relative z-10 flex-shrink-0">
            <div className="relative h-full overflow-hidden">
              <Image
                src={image}
                alt="section image"
                width={240}
                height={100}
                className="h-[300px] w-full object-cover sm:h-full sm:w-[200px] md:h-full md:w-[340px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            </div>
          </div>

          {/* Content container */}
          <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-between p-4">
            <div>
              <h3 className="mb-3 text-lg leading-tight font-bold text-gray-900 transition-colors duration-300 group-hover:text-gray-800 sm:mb-4 sm:text-xl md:text-2xl">
                {title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700 sm:mb-6 sm:text-base md:text-lg">
                {description}
              </p>
            </div>

            {/* Link with enhanced styling */}
            <div className="mt-auto">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Section = ({ elements }: SectionProps) => {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50/50 to-white/50 py-16 sm:py-20 md:py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-100/30 blur-3xl"></div>
        <div className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-purple-100/30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-blue-50/20 to-purple-50/20 blur-3xl"></div>
      </div>

      {/* Section header */}
      <div className="relative z-10 mb-12 text-center sm:mb-16 md:mb-20">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
          Наші <span className="gradient-text">проекти</span>
        </h2>
        <p className="mx-auto max-w-3xl px-4 text-lg text-gray-600 sm:px-6 sm:text-xl md:text-2xl">
          Дізнайтеся більше про наші ключові ініціативи та програми
        </p>
      </div>

      {/* Projects container */}
      <div className="relative z-10 flex w-full flex-col gap-6 px-4 sm:gap-8 sm:px-6 md:gap-10 md:px-12 lg:px-20">
        {elements.map((props, index) => (
          <SectionCard key={index} delay={index} {...props}>
            {props.children ? props.children : <RegularLink title="Детальніше" link={props.link} />}
          </SectionCard>
        ))}
      </div>
    </section>
  );
};
