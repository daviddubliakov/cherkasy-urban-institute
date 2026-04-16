import { BOOK } from '@/utils/book';

import { ReactElement, ReactNode, SVGProps } from 'react';

import { AcademicCapNewIcon, DroneIcon, HomeIcon, ShieldCheckNewIcon } from '../icons';
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
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
};

const submenuLikClassNames = 'block py-1 pl-[52px]';
export const MAIN_MENU_ITEMS: MainMenuItem[] = [
  {
    name: 'Школа FPV «Черкаський рій»',
    href: BOOK.war,
    icon: DroneIcon,
    id: 'fpv-school',
  },
  {
    name: 'Вишколи для цивільних',
    href: BOOK.warConsequences,
    icon: AcademicCapNewIcon,
    id: 'civil-training',
  },
  {
    name: 'Проєкт «ІПСОлогія»',
    href: BOOK.safeCity,
    icon: ShieldCheckNewIcon,
    id: 'ipsology',
  },
  {
    name: 'Мегапроєкт «Вдома»',
    icon: HomeIcon,
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
        key="kulturna-gromada"
        href={'#'}
        fontWeight="semibold"
        className={submenuLikClassNames}
        onClick={() => close()}
      >
        Культурна громада
      </Link>,
    ],
  },
];