'use client';

import { useMemo } from 'react';
import { Link } from '@/components/ui/link';
import { generateGoogleCalendarLink } from '@/utils';
import type { TrainingDetailsType } from '../models/training-details';
import type { RegistrationDataType } from '../training-detail-page';
import {
  CheckCircleIcon,
  UserIcon,
  PhoneIcon,
  CalendarIcon,
  ClockIcon,
  CashIcon,
  InfoCircleIcon,
} from '@/components/icons';

type RegistrationConfirmationProps = {
  training: TrainingDetailsType;
  registrationData: RegistrationDataType;
  onNewRegistration: () => void;
};

export function RegistrationConfirmation({
  training,
  registrationData,
  onNewRegistration,
}: RegistrationConfirmationProps) {
  const isWaitlist = !registrationData.selectedDate;

  const calendarLink = useMemo(() => {
    if (!registrationData.selectedDate || !registrationData.selectedTime) {
      return null;
    }

    return generateGoogleCalendarLink({
      title: training.title,
      date: registrationData.selectedDate,
      time: registrationData.selectedTime,
      details: `Вишкіл від Черкаського міського інституту\n\nІнструктори: ${training.instructors.map((i) => i.name).join(', ')}`,
      location: 'Черкаси, Україна',
    });
  }, [training, registrationData]);

  return (
    <div className="flex w-full flex-col items-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg sm:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 sm:h-24 sm:w-24">
            <CheckCircleIcon className="h-10 w-10 text-green-600 sm:h-12 sm:w-12" />
          </div>

          <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            {isWaitlist ? 'Заявку надіслано!' : 'Реєстрацію підтверджено!'}
          </h1>

          <p className="mb-8 text-lg text-gray-600">
            {isWaitlist
              ? `Дякуємо за інтерес до вишколу "${training.title}". Ми повідомимо вас про нові дати.`
              : `Вас зареєстровано на вишкіл "${training.title}".`}
          </p>

          <div className="mb-8 rounded-2xl bg-gray-50 p-6 text-left">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Деталі {isWaitlist ? 'заявки' : 'реєстрації'}
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <UserIcon className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Ім&apos;я</p>
                  <p className="font-medium text-gray-900">{registrationData.fullName}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Телефон</p>
                  <p className="font-medium text-gray-900">{registrationData.phone}</p>
                </div>
              </div>

              {!isWaitlist && registrationData.selectedDate && (
                <>
                  <div className="flex items-start gap-3">
                    <CalendarIcon className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Дата</p>
                      <p className="font-medium text-gray-900">{registrationData.selectedDate}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Час</p>
                      <p className="font-medium text-gray-900">{registrationData.selectedTime}</p>
                    </div>
                  </div>

                  {registrationData.donation && registrationData.donation > 0 && (
                    <div className="flex items-start gap-3">
                      <CashIcon className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Донат</p>
                        <p className="font-medium text-gray-900">{registrationData.donation} грн</p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Add to Calendar */}
          {calendarLink && (
            <div className="mb-6">
              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-blue-600 bg-blue-50 px-6 py-3 font-semibold text-blue-600 transition-all hover:bg-blue-100"
              >
                <CalendarIcon className="h-5 w-5" />
                Додати до Google Calendar
              </a>
            </div>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/trainings"
              variant="buttonLink"
              backgroundColor="blue-600"
              fontWeight="bold"
              fontSize="sm"
            >
              До всіх вишколів
            </Link>
            <button
              onClick={onNewRegistration}
              className="rounded-xl border-2 border-gray-300 px-6 py-3 font-bold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
            >
              Нова реєстрація
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
