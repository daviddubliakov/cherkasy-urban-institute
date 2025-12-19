import { Link } from '@/components/ui/link';

export type TrainingCardPropsType = {
  id: string;
  title: string;
  description?: string;
};

export const TrainingCard = ({ title }: TrainingCardPropsType) => {
  return (
    <Link
      href="#"
      className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 transition-all hover:border-gray-300 hover:shadow-sm sm:px-5 sm:py-4"
    >
      <span className="text-[14px] font-medium text-gray-900 sm:text-[16px]">{title}</span>
      <svg
        className="h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
};