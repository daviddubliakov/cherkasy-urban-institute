import { BOOK } from '@/utils/book';

import { ForwardRefExoticComponent, ReactNode, RefAttributes, SVGProps } from 'react';

import { PhoneIcon } from '@heroicons/react/20/solid';
import {
  AcademicCapIcon,
  BugAntIcon,
  CurrencyDollarIcon,
  FireIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

import { Link } from '../ui/link';

export type SubmenuItem = {
  name: string;
  link?: string;
};

export type MainMenuItem = {
  name: string;
  description?: string;
  content?: ReactNode[];
  href?: string;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
  >;
};

const submenuLikClassNames = "block py-1 pl-20 hover:bg-gray-50"

export const MAIN_MENU_ITEMS: MainMenuItem[] = [
  {
    name: 'Школа FPV «Черкаський рій»',
    // description: 'Дізнайтеся, як ми допомагаємо місту під час війни',
    href: BOOK.war,
    icon: FireIcon,
  },
  {
    name: 'Вишколи для цивільних',
    // description: 'Підтримка відновлення інфраструктури',
    href: BOOK.warConsequences,
    icon: BugAntIcon,
  },
  {
    name: 'ІПСОлогія',
    // description: 'Розробка та впровадження технологій безпеки',
    href: BOOK.safeCity,
    icon: ShieldCheckIcon,
  },
  {
    name: 'Мегапроект «Вдома»:',
    // description: 'Підтримка та розвиток культурних ініціатив',
    icon: AcademicCapIcon,
    content: [
      <Link href={'#'} fontWeight="semibold" className={submenuLikClassNames} onClick={() => close()}>
        Ветеранські політики
      </Link>,
      <Link href={'#'} fontWeight="semibold" className={submenuLikClassNames} onClick={() => close()}>
        «Безпечна громада»
      </Link>,
      <Link href={'#'} fontWeight="semibold" className={submenuLikClassNames} onClick={() => close()}>
        «Заможна громада»
      </Link>,
      <Link href={'#'} fontWeight="semibold" className={submenuLikClassNames} onClick={() => close()}>
        «Культурна громада»
      </Link>,
    ],
  },
];

export const CALLS_TO_ACTION: MainMenuItem[] = [
  { name: 'Підтримка інституту', href: '/charity', icon: CurrencyDollarIcon },
  { name: "Зворотній зв'язок", href: '/contacts', icon: PhoneIcon },
];
