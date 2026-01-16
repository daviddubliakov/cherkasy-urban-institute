export * from './client-side-utils';
export { generateGoogleCalendarLink } from './generate-calendar-link';
export { formatPhoneNumber } from './format-phone-number';

import cx from 'classnames';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: cx.Argument[]) {
  return twMerge(cx(inputs));
}
