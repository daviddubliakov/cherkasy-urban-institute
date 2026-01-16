import { Link } from '@/components/ui/link';

export type ScheduleCardPropsType = {
  id: string;
  date: string;
  day: string;
  time: string;
  title: string;
  slug?: string;
};

export const ScheduleCard = ({ date, day, time, title, slug }: ScheduleCardPropsType) => {
  const content = (
    <>
      <div className="mb-4">
        <div className="text-[16px] font-semibold text-gray-900">
          {date}, {day}
        </div>
        <div className="mt-1 text-[14px] text-gray-600">{time}</div>
      </div>
      <h3 className="text-[16px] leading-tight font-bold text-gray-900">{title}</h3>
    </>
  );

  if (slug) {
    return (
      <Link
        href={`/trainings/${slug}`}
        className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-gray-300 hover:shadow-md"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:shadow-md">
      {content}
    </div>
  );
};
