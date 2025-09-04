import { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/utils';

export type BannerType = 'default' | 'splitted';

export type BannerProps = {
  type?: BannerType;
  background: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export type BannerElement =
  | 'wrapper'
  | 'image'
  | 'title'
  | 'description'
  | 'content';

const bannerVariants: Record<BannerType, Record<BannerElement, string>> = {
  default: {
    wrapper:
      'flex flex-col w-full h-[60vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh] items-center justify-center text-white',
    image:
      'absolute w-[100vw] z-[-10] h-[60vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh] object-cover',
    content:
      'w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12',
    title:
      'max-w-[85%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%] h2-shadow text-center',
    description:
      'max-w-[90%] sm:max-w-[85%] md:max-w-[80%] text-center mt-2 sm:mt-3 md:mt-4',
  },
  splitted: {
    wrapper:
      'grid gap-8 sm:gap-8 md:gap-10 lg:gap-30 justify-center text-foreground grid-cols-1 sm:grid-cols-2 min-h-[90vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] items-center py-12 sm:py-0',
    image:
      'banner-splitted-image relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-3xl sm:rounded-3xl shadow-2xl order-1 sm:order-2 mx-4 sm:mx-0',
    content:
      'w-full flex flex-col justify-center items-center sm:items-start px-6 sm:px-6 md:px-8 lg:px-12 relative z-10 order-2 sm:order-1',
    title:
      'w-full text-center sm:text-left sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight gradient-text mb-6 sm:mb-6',
    description:
      'max-w-[95%] sm:max-w-[90%] md:max-w-[85%] text-center sm:text-left text-lg sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-8',
  },
};

export const Banner = ({
  children = null,
  type = 'default',
  background,
  title,
  description,
}: BannerProps) => {
  return (
    <div className={cn(`${bannerVariants[type].wrapper} relative w-full`)}>
      {type === 'default' ? (
        <>
          <Image
            src={background}
            width={1920}
            height={1080}
            alt='banner image'
            className={bannerVariants[type].image}
          />
          <div className={bannerVariants[type].content}>
            <h2 className={cn(bannerVariants[type].title)}>{title}</h2>
            {description && (
              <p className={cn(bannerVariants[type].description)}>
                {description}
              </p>
            )}
            {children && <div className='mt-3 sm:mt-4 md:mt-6'>{children}</div>}
          </div>
        </>
      ) : (
        <>
          <div className={bannerVariants[type].image}>
            <Image
              src={background}
              width={800}
              height={600}
              alt='banner image'
              className='w-full h-full object-cover object-center'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl sm:rounded-3xl'></div>
            <div className='absolute inset-0 bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-3xl sm:rounded-3xl'></div>
            <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/20 rounded-3xl sm:rounded-3xl'></div>
            <div className='absolute inset-0 bg-gradient-to-tl from-white/5 via-transparent to-transparent rounded-3xl sm:rounded-3xl'></div>
          </div>
          <div className={bannerVariants[type].content}>
            <div className='animate-fade-in-up w-full'>
              <h2 className={cn(bannerVariants[type].title, 'animate-float')}>
                {title}
              </h2>
              {description && (
                <p
                  className={cn(
                    bannerVariants[type].description,
                    'animate-fade-in-up animation-delay-300',
                  )}
                >
                  {description}
                </p>
              )}
              {children && (
                <div className='mt-8 sm:mt-6 md:mt-8 animate-fade-in-up animation-delay-600 flex justify-center sm:justify-start'>
                  {children}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
