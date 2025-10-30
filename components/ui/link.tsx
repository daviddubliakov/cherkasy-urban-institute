import { type ReactElement } from 'react';

import cx from 'classnames';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link';

type LinkVariantType = 'button' | 'text' | 'buttonLink';
type LinkColorType = 'gray-900';
type LinkFontWeightType = 'semibold' | 'normal' | 'bold';
type LinkFontSizeType = 'sm' | 'sm/6' | 'base/7';
type LinkBackgroundColorType = 'blue-600' | 'transparent';

type LinkProps = NextLinkProps & {
  children: React.ReactNode;
  variant?: LinkVariantType;
  fontWeight?: LinkFontWeightType;
  fontSize?: LinkFontSizeType;
  color?: LinkColorType;
  backgroundColor?: LinkBackgroundColorType;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rightIcon?: ReactElement;
};

const linkStylesByVariant = {
  button:
    'rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 flex items-center justify-between gap-3',
  buttonLink:
    'rounded-xl px-6 py-3 text-[16px] font-bold text-white transition-colors hover:cursor-pointer sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4 sm:text-[18px]',
  text: '',
};

const linkStylesByColor = {
  ['gray-900']: 'text-gray-900',
};

const linkStylesByFontWeight = {
  ['semibold']: 'font-semibold',
  ['normal']: 'font-normal',
  ['bold']: 'font-bold',
};

const linkStylesByBackgroundColor = {
  ['blue-600']: 'bg-blue-600 hover:bg-blue-700',
  ['transparent']: 'bg-transparent',
};

const linkStylesByFontSize = {
  ['sm']: 'text-sm',
  ['sm/6']: 'text-sm/6',
  ['base/7']: 'text-base/7',
};

export const Link = (props: LinkProps) => {
  const {
    variant = 'text',
    className,
    color = 'gray-900',
    fontWeight = 'normal',
    fontSize = 'sm',
    backgroundColor = 'transparent',
    rightIcon,
    children,
    ...rest
  } = props;

  const linkStyles = cx(
    linkStylesByVariant[variant],
    linkStylesByColor[color],
    linkStylesByBackgroundColor[backgroundColor],
    linkStylesByFontWeight[fontWeight],
    linkStylesByFontSize[fontSize],
    className,
  );

  return (
    <NextLink className={linkStyles} {...rest}>
      {children}
      {rightIcon}
    </NextLink>
  );
};
