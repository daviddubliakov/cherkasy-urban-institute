// @flow
import Link from 'next/link';

type RegularLinkProps = {
  title?: string;
  link: string;
  withArrow?: boolean;
};

export const RegularLink = ({ title, link, withArrow = true }: RegularLinkProps) => {
  return (
    <Link
      href={link}
      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-700 sm:text-base"
    >
      <span className="relative">
        {title}
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover/link:w-full"></span>
      </span>
      {withArrow && (
        <svg
          className="h-4 w-4 transform transition-transform duration-300 group-hover/link:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </Link>
  );
};
