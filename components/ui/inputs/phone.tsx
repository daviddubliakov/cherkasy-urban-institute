import { formatPhoneNumber } from '@/utils';
import {type  ChangeEvent, forwardRef } from 'react';

type PhoneInputProps = {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  name?: string;
  id?: string;
  placeholder?: string;
  className?: string;
  hasError?: boolean;
};

const PREFIX = '+380 ';

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, onBlur, name, id, placeholder = '+380 XX XXX XX XX', className, hasError }, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const formatted = formatPhoneNumber(inputValue);
      onChange(formatted);
    };

    const handleFocus = () => {
      // Ensure prefix is always present
      if (!value || value.length < PREFIX.length) {
        onChange(PREFIX);
      }
    };

    const baseClasses =
      'w-full rounded-xl border-2 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20';
    const errorClasses = hasError ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-600';

    return (
      <input
        ref={ref}
        type="tel"
        id={id}
        name={name}
        value={value || PREFIX}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        className={className || `${baseClasses} ${errorClasses}`}
        autoComplete="tel"
      />
    );
  },
);

PhoneInput.displayName = 'PhoneInput';
