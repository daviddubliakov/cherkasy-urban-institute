import { BOOK } from '@/utils/book';

import type { ReactElement, SVGProps } from 'react';

import { AcademicCapNewIcon, DroneIcon, HomeIcon, ShieldCheckNewIcon } from '../icons';

export type SubItem = {
  name: string;
  href: string;
};

export type MainMenuItem = {
  name: string;
  id: string;
  description?: string;
  subItems?: SubItem[];
  href?: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
};

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
    subItems: [
      { name: 'Ветеранські політики', href: '#' },
      { name: 'Культурна громада', href: '#' },
    ],
  },
];
