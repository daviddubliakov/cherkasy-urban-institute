'use client';
import { type MouseEvent, useCallback, useRef } from 'react';

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
     <main className="my-8 flex flex-col items-center gap-12 overflow-hidden px-4 sm:mt-8">
       <HeroSection onScrollToCarousel={handleScrollToCarousel} />
 
       <CategoriesSection />
 
       <ScheduleSection ref={sectionRef} />
 
       <TestimonialsSection />
     </main>
   );
}