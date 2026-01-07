'use client';

import { useState, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { TrainingDetailsType, TrainingScheduleType } from '../models/training-details';
import type { RegistrationDataType } from '../training-detail-page';
import {
  registrationSchema,
  registrationWithScheduleSchema,
  type RegistrationFormData,
} from '../models/registration-schema';
import { PhoneInput } from '@/components/ui/inputs/phone';
import { CheckIcon, SpinnerIcon } from '@/components/icons';

type RegistrationSectionProps = {
  training: TrainingDetailsType;
  onRegistrationComplete: (data: RegistrationDataType) => void;
};

export function RegistrationSection({
  training,
  onRegistrationComplete,
}: RegistrationSectionProps) {
  const availableSchedules = training.schedules.filter((s) => s.spotsAvailable > 0);
  const hasAvailableDates = availableSchedules.length > 0;

  const [selectedSchedule, setSelectedSchedule] = useState<TrainingScheduleType | null>(
    availableSchedules[0] || null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const schema = useMemo(
    () => (hasAvailableDates ? registrationWithScheduleSchema(training.donationInfo.suggested) : registrationSchema),
    [hasAvailableDates, training.donationInfo.suggested]
  );

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      phone: '+380 ',
      socialLink: '',
      donation: training.donationInfo.suggested,
      scheduleId: availableSchedules[0]?.id || '',
    },
  });

  const watchedScheduleId = watch('scheduleId');

  const handleScheduleSelect = (schedule: TrainingScheduleType) => {
    setSelectedSchedule(schedule);
    setValue('scheduleId', schedule.id, { shouldValidate: true });
  };

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    onRegistrationComplete({
      fullName: data.fullName,
      phone: data.phone,
      socialLink: data.socialLink || undefined,
      selectedDate: selectedSchedule?.date,
      selectedTime: selectedSchedule?.time,
      donation: hasAvailableDates ? data.donation : undefined,
    });

    setIsSubmitting(false);
  };

  return (
    <section id="registration" className="w-full max-w-7xl scroll-mt-8">
      <div className="rounded-3xl border border-gray-200 bg-linear-to-br from-white to-gray-50 p-6 sm:p-10 lg:p-12">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            {hasAvailableDates ? 'Реєстрація на вишкіл' : 'Залишити заявку'}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {hasAvailableDates
              ? 'Оберіть зручну дату та заповніть форму реєстрації'
              : 'Наразі немає доступних дат. Залиште заявку і ми повідомимо вас про нові дати'}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-2xl">
          {/* Date Selection */}
          {hasAvailableDates && (
            <div className="mb-8">
              <label className="mb-4 block text-lg font-semibold text-gray-900">
                Оберіть дату вишколу
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {availableSchedules.map((schedule) => (
                  <button
                    key={schedule.id}
                    type="button"
                    onClick={() => handleScheduleSelect(schedule)}
                    className={`relative flex flex-col rounded-xl border-2 p-4 text-left transition-all ${
                      watchedScheduleId === schedule.id
                        ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600/20'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                    }`}
                  >
                    {watchedScheduleId === schedule.id && (
                      <span className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                    )}
                    <span className="text-lg font-bold text-gray-900">
                      {schedule.date}, {schedule.day}
                    </span>
                    <span className="mt-1 text-gray-600">{schedule.time}</span>
                    <span className="mt-2 text-sm text-green-600">
                      Вільних місць: {schedule.spotsAvailable}/{schedule.maxSpots}
                    </span>
                  </button>
                ))}
              </div>
              {errors.scheduleId && (
                <p className="mt-2 text-sm text-red-600">{errors.scheduleId.message}</p>
              )}
            </div>
          )}

          {/* Form Fields */}
          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="mb-2 block font-semibold text-gray-900">
                Ім&apos;я та прізвище <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                {...register('fullName')}
                placeholder="Введіть ваше ім'я та прізвище"
                className={`w-full rounded-xl border-2 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 ${
                  errors.fullName
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-200 focus:border-blue-600'
                }`}
              />
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block font-semibold text-gray-900">
                Номер телефону (Viber/Telegram) <span className="text-red-500">*</span>
              </label>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    id="phone"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    hasError={!!errors.phone}
                  />
                )}
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                Номер на якому є Viber або Telegram для зв&apos;язку
              </p>
            </div>

            <div>
              <label htmlFor="socialLink" className="mb-2 block font-semibold text-gray-900">
                Посилання на соцмережу{' '}
                <span className="font-normal text-gray-500">(необов&apos;язково)</span>
              </label>
              <input
                type="url"
                id="socialLink"
                {...register('socialLink')}
                placeholder="https://instagram.com/username"
                className={`w-full rounded-xl border-2 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 ${
                  errors.socialLink
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-gray-200 focus:border-blue-600'
                }`}
              />
              {errors.socialLink && (
                <p className="mt-2 text-sm text-red-600">{errors.socialLink.message}</p>
              )}
            </div>

            {hasAvailableDates && (
              <div>
                <label htmlFor="donation" className="mb-2 block font-semibold text-gray-900">
                  Сума донату
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="donation"
                    min="0"
                    {...register('donation', { valueAsNumber: true })}
                    className={`w-full rounded-xl border-2 px-4 py-3 pr-16 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 ${
                      errors.donation
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-200 focus:border-blue-600'
                    }`}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-semibold text-gray-500">
                    грн
                  </span>
                </div>
                {errors.donation && (
                  <p className="mt-2 text-sm text-red-600">{errors.donation.message}</p>
                )}
                <p className="mt-2 text-sm text-gray-500">
                  {training.donationInfo.description}
                </p>
              </div>
            )}
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-600/20 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <SpinnerIcon className="h-5 w-5 animate-spin" />
                  Обробка...
                </span>
              ) : hasAvailableDates ? (
                'Зареєструватися'
              ) : (
                'Надіслати заявку'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
