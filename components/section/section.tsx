'use client';

import { cn } from '@/utils';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

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

export type SectionSubLink = {
  title: string;
  link: string;
  description: string;
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
    <div ref={wrapperRef} className="h-full">
      {shouldRender && (
        <div
          className={cn(
            'group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-gray-100/50 bg-white/50 shadow-lg backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gray-200/80 hover:bg-white/80 hover:shadow-xl sm:flex-row sm:items-stretch sm:rounded-3xl',
            shouldRender ? 'animate-fade-in-up' : 'opacity-0',
          )}
          style={style || {}}
        >
          <div className="relative h-[200px] w-full sm:h-auto sm:w-[308px] sm:flex-shrink-0 sm:self-stretch md:w-[428px]">
            <Image src={image} alt="section image" fill className="object-cover" />
          </div>

          <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-between p-5 pt-6 sm:p-6 sm:pt-7">
            <div>
              <h4 className="mb-3 text-2xl leading-tight font-semibold text-gray-900 md:text-3xl">{title}</h4>
              <p className="mb-4 text-base leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700 sm:mb-6">
                {description}
              </p>
            </div>

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
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-purple-100/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-blue-50/20 to-purple-50/20 blur-3xl" />
      </div>

      {/* Section header */}
      <div className="relative z-10 mb-12 text-center sm:mb-16 md:mb-20">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
          Наші <span className="gradient-text">проєкти</span>
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

export const SectionSubCard = ({ title, description, link }: SectionSubLink) => (
  <div key={title} className="flex items-center justify-between border border-gray-200 rounded-xl p-4">
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <RegularLink link={link} />
  </div>
);
