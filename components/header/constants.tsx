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
  id: string;
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

const submenuLikClassNames = 'block py-1 pl-20 hover:bg-gray-50';
export const MAIN_MENU_ITEMS: MainMenuItem[] = [
  {
    name: 'Школа FPV «Черкаський рій»',
    href: BOOK.war,
    icon: FireIcon,
    id: 'fpv-school',
  },
  {
    name: 'Вишколи для цивільних',
    href: BOOK.warConsequences,
    icon: BugAntIcon,
    id: 'civil-training',
  },
  {
    name: 'ІПСОлогія',
    href: BOOK.safeCity,
    icon: ShieldCheckIcon,
    id: 'ipsology',
  },
  {
    name: 'Мегапроект «Вдома»:',
    icon: AcademicCapIcon,
    id: 'mega-project',
    content: [
      <Link
        key="vetranskii-politiki"
        href={'#'}
        fontWeight="semibold"
        className={submenuLikClassNames}
        onClick={() => close()}
      >
        Ветеранські політики
      </Link>,
      <Link
        key="bezpechna-gromada"
        href={'#'}
        fontWeight="semibold"
        className={submenuLikClassNames}
        onClick={() => close()}
      >
        «Безпечна громада»
      </Link>,
      <Link
        key="zamozhna-gromada"
        href={'#'}
        fontWeight="semibold"
        className={submenuLikClassNames}
        onClick={() => close()}
      >
        «Заможна громада»
      </Link>,
      <Link
        key="kulturna-gromada"
        href={'#'}
        fontWeight="semibold"
        className={submenuLikClassNames}
        onClick={() => close()}
      >
        «Культурна громада»
      </Link>,
    ],
  },
];

export const CALLS_TO_ACTION: MainMenuItem[] = [
  { id: 'charity', name: 'Підтримка інституту', href: '/charity', icon: CurrencyDollarIcon },
  { id: 'contacts', name: "Зворотній зв'язок", href: '/contacts', icon: PhoneIcon },
];
