import {
  FireIcon,
  CurrencyDollarIcon,
  BugAntIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/20/solid';

import { BOOK } from '@/utils/book';

export const MAIN_MENU_ITEMS = [
  {
    name: 'Війна',
    description: 'Дізнайтеся, як ми допомагаємо місту під час війни',
    href: BOOK.war,
    icon: FireIcon,
  },
  {
    name: 'Подолання наслідків війни',
    description: 'Підтримка відновлення інфраструктури',
    href: BOOK.warConsequences,
    icon: BugAntIcon,
  },
  {
    name: 'Безпечне місто',
    description: 'Розробка та впровадження технологій безпеки',
    href: BOOK.safeCity,
    icon: ShieldCheckIcon,
  },
  {
    name: 'Міська культура',
    description: 'Підтримка та розвиток культурних ініціатив',
    href: BOOK.cityCulture,
    icon: AcademicCapIcon,
  },
];
export const CALLS_TO_ACTION = [
  { name: 'Підтримка інституту', href: '/charity', icon: CurrencyDollarIcon },
  { name: "Зворотній зв'язок", href: '/contacts', icon: PhoneIcon },
];
