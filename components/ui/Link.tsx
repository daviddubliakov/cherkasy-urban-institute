import cx from 'classnames';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link';

type LinkVariantType = 'button' | 'text';
type LinkColorType = 'gray-900';
type LinkFontWeightType = 'semibold' | 'normal';
type LinkFontSizeType = 'sm' | 'sm/6' | 'base/7';

type LinkProps = NextLinkProps & {
  children: React.ReactNode;
  variant?: LinkVariantType;
  fontWeight?: LinkFontWeightType;
  fontSize?: LinkFontSizeType;
  color?: LinkColorType;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

const linkStylesByVariant = {
  button:
    'rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900',
  text: '',
};

const linkStylesByColor = {
  ['gray-900']: 'text-gray-900 hover:text-gray-500',
};

const linkStylesByFontWeight = {
  ['semibold']: 'font-semibold',
  ['normal']: 'font-normal',
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
    ...rest
  } = props;

  const linkStyles = cx(
    linkStylesByVariant[variant],
    linkStylesByColor[color],
    linkStylesByFontWeight[fontWeight],
    linkStylesByFontSize[fontSize],
    className,
  );

  return <NextLink className={linkStyles} {...rest}></NextLink>;
};
