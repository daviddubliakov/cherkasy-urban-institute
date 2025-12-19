'use client';
import { type MouseEvent, useCallback, useRef } from 'react';
import { CategoriesSection, HeroSection, ScheduleSection } from './ui';
import { TestimonialsSection } from './ui/testimonials-section';

export default function TrainingsPage() { 
   const sectionRef = useRef<HTMLElement | null>(null);

   const handleScrollToCarousel = useCallback((event?: MouseEvent<HTMLAnchorElement>) => {
     event?.preventDefault();
 
     const section = sectionRef.current;
 
     if (!section) {
       return;
     }
 
     section.scrollIntoView({ behavior: 'smooth', block: 'center' });
 
     if (typeof window !== 'undefined') {
       window.history.replaceState(null, '', '#schedule-carousel');
     }
   }, []);
 
   return (
     <div className="flex w-full flex-col items-center gap-12 overflow-hidden px-4 sm:gap-16 lg:gap-20">
       <HeroSection onScrollToCarousel={handleScrollToCarousel} />

       <CategoriesSection />

       <ScheduleSection ref={sectionRef} />

       <TestimonialsSection />
     </div>
   );
}