import { z } from 'zod';

// Ukrainian phone format: +380 XX XXX XX XX (total 17 chars with spaces)
const PHONE_REGEX = /^\+380\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/;

export const registrationSchema = z.object({
  fullName: z
    .string()
    .min(1, "Введіть ваше ім'я та прізвище")
    .refine((value) => value.trim().split(/\s+/).length >= 2, "Введіть ім'я та прізвище (мінімум два слова)"),
  phone: z
    .string()
    .min(1, 'Введіть номер телефону')
    .regex(PHONE_REGEX, 'Введіть повний номер телефону (+380 XX XXX XX XX)'),
  socialLink: z.string().url('Введіть коректне посилання').optional().or(z.literal('')),
  donation: z.number({ message: 'Введіть коректну суму' }).min(1, "Сума не може бути від'ємною"),
  scheduleId: z.string().optional(),
});

export const registrationWithScheduleSchema = (minDonation: number)=>{ return registrationSchema.extend({
  scheduleId: z.string().min(0, 'Оберіть дату вишколу'),
  donation: z.number({ message: 'Введіть коректну суму' }).min(minDonation, `Сума не може бути менше ${minDonation} грн`),
})};

export type RegistrationFormData = z.infer<typeof registrationSchema>;
export type RegistrationWithScheduleFormData = z.infer<typeof registrationWithScheduleSchema>;
