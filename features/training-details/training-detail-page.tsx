'use client';

import { useState } from 'react';
import type { TrainingDetailsType } from './models/training-details';
import { TrainingHero } from './ui/training-hero';
import { TrainingDescription } from './ui/training-description';
import { InstructorsSection } from './ui/instructors-section';
import { RegistrationSection } from './ui/registration-section';
import { RegistrationConfirmation } from './ui/registration-confirmation';

type TrainingDetailPageProps = {
  training: TrainingDetailsType;
};

export type RegistrationDataType = {
  fullName: string;
  phone: string;
  socialLink?: string;
  selectedDate?: string;
  selectedTime?: string;
  donation?: number;
};

export function TrainingDetailPage({ training }: TrainingDetailPageProps) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationData, setRegistrationData] = useState<RegistrationDataType | null>(null);

  const handleRegistrationComplete = (data: RegistrationDataType) => {
    // TODO: send data to server & and more fields from client to server
    setRegistrationData(data);
    setIsRegistered(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewRegistration = () => {
    setIsRegistered(false);
    setRegistrationData(null);
  };

  if (isRegistered && registrationData) {
    return (
      <RegistrationConfirmation
        training={training}
        registrationData={registrationData}
        onNewRegistration={handleNewRegistration}
      />
    );
  }

  return (
    <div className="flex w-full flex-col items-center gap-12 px-4 sm:gap-16 lg:gap-20">
      <TrainingHero training={training} />
      <TrainingDescription training={training} />
      <InstructorsSection instructors={training.instructors} />
      <RegistrationSection
        training={training}
        onRegistrationComplete={handleRegistrationComplete}
      />
    </div>
  );
}

