import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

type RegularLinkProps = {
  title?: string;
  link: string;
  withArrow?: boolean;
};

export const RegularLink = ({ title, link, withArrow = true }: RegularLinkProps) => {
  return (
    <Link
      href={link}
      className="group/link inline-flex items-center gap-2 text-sm  text-blue-600 transition-colors duration-300 hover:text-blue-700 sm:text-base"
    >
      <span className="relative">
        {title}
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover/link:w-full" />
      </span>
      {withArrow && (
        <ArrowRightIcon className='size-4' />
      )}
    </Link>
  );
};
