import React, { type ReactNode } from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import { cn } from '@/utils';

export type ButtonVariant = 'default';

export type ButtonProps = {
  variant?: ButtonVariant;
  children?: string | ReactNode;
  className?: string;
};

const buttonVariants: Record<ButtonVariant, string> = {
  default:
    'rounded bg-sky-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500',
};

export const Button = ({
  children,
  variant = 'default',
  className,
}: ButtonProps) => {
  const buttonStyles = cn(
    'flex items-center justify-center gap-2 cursor-pointer',
    buttonVariants[variant],
    className,
  );
  return (
    <HeadlessButton className={buttonStyles}>
      {children && children}
    </HeadlessButton>
  );
};
