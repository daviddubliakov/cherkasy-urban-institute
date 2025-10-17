import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type Props = {
  onPrevious: () => void;
  onNext: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export const CarouselNavigation = ({ 
  onPrevious, 
  onNext,
  onMouseEnter,
  onMouseLeave 
}: Props) => {
  return (
    <>
      <button
        onClick={onPrevious}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="cursor-pointer absolute left-4 sm:left-6 md:left-8 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 md:p-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 group flex items-center justify-center"
        aria-label="Попередній слайд"
      >
        <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-blue-200 transition-colors duration-300" />
      </button>

      <button
        onClick={onNext}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="cursor-pointer absolute right-4 sm:right-6 md:right-8 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 md:p-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 group flex items-center justify-center"
        aria-label="Наступний слайд"
      >
        <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:text-blue-200 transition-colors duration-300" />
      </button>
    </>
  );
};
