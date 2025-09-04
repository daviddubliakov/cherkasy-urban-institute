export * from './client-side-utils';

import cx from 'classnames';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: cx.Argument[]) {
  return twMerge(cx(inputs));
}
