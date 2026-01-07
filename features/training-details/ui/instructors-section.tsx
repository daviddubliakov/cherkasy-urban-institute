import Image from 'next/image';
import type { InstructorType } from '../models/training-details';
import { UserPlaceholderIcon } from '@/components/icons';

type InstructorsSectionProps = {
  instructors: InstructorType[];
};

export function InstructorsSection({ instructors }: InstructorsSectionProps) {
  return (
    <section id="instructors" className="w-full max-w-7xl scroll-mt-8">
      <div className="mb-8 text-center sm:mb-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
          Інструктори вишколу
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Досвідчені спеціалісти, які поділяться своїми знаннями та навичками
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </section>
  );
}

function InstructorCard({ instructor }: { instructor: InstructorType }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:shadow-lg sm:flex-row">
      <div className="relative h-48 w-full overflow-hidden bg-linear-to-br from-blue-100 to-purple-100 sm:h-auto sm:w-40 sm:min-h-[200px] lg:w-48">
        {instructor.photo ? (
          <Image
            src={instructor.photo}
            alt={instructor.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <UserPlaceholderIcon className="h-20 w-20 text-gray-400" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
        <div className="mb-1">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            {instructor.role}
          </span>
        </div>
        <h3 className="mt-2 text-xl font-bold text-gray-900">
          {instructor.name}
        </h3>
        <p className="mt-2 text-gray-600 leading-relaxed">
          {instructor.bio}
        </p>
      </div>
    </div>
  );
}

