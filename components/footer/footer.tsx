import { Link } from '@/components/ui/link';

import { SOCIALS } from './constants';

export const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto w-full'>
        <div className='px-4 py-6 bg-gray-100  md:flex md:items-center md:justify-between'>
          <span className='text-sm text-gray-500  sm:text-center'>
            © 2015 - 2025. Усі права захищені.
          </span>
          <div className='flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse'>
            {SOCIALS.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                fontWeight='semibold'
                target='_blank'
              >
                {<social.icon />}
                <span className='sr-only'>{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
