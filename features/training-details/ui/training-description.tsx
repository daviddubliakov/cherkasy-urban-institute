import { BuildingIcon, CashIcon, CheckIcon, ClockIcon, UsersIcon } from '@/components/icons';

import type { TrainingDetailsType } from '../models/training-details';

type TrainingDescriptionProps = {
  training: TrainingDetailsType;
};

export function TrainingDescription({ training }: TrainingDescriptionProps) {
  return (
    <section className="w-full max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-2">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">Про вишкіл</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            {training.fullDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">Що ви дізнаєтесь</h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {training.whatYouWillLearn.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-gray-900">Деталі вишколу</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <ClockIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Тривалість</p>
                  <p className="font-semibold text-gray-900">{training.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                  <BuildingIcon className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Категорія</p>
                  <p className="font-semibold text-gray-900">{training.category}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                  <CashIcon className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Мінімальний донат</p>
                  <p className="font-semibold text-gray-900">{training.donationInfo.suggested} грн</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                  <UsersIcon className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Інструкторів</p>
                  <p className="font-semibold text-gray-900">{training.instructors.length}</p>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h4 className="mb-3 font-semibold text-gray-900">Вимоги до учасників</h4>
              <ul className="space-y-2">
                {training.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 text-blue-600">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
