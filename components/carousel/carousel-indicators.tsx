import { cn } from '@/utils';

type CarouselIndicatorsProps = {
  totalSlides: number;
  currentSlide: number;
  onSlideSelect: (index: number) => void;
};

export const CarouselIndicators = ({ 
  totalSlides, 
  currentSlide, 
  onSlideSelect 
}: CarouselIndicatorsProps) => {
  return (
    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideSelect(index)}
          className={cn(
            'cursor-pointer w-1 h-1 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-125',
            index === currentSlide && 'bg-white shadow-lg',
            index !== currentSlide && 'bg-white/50 hover:bg-white/70'
          )}
          aria-label={`Перейти до слайда ${index + 1}`}
        />
      ))}
    </div>
  );
};
