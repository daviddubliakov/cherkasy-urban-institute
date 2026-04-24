import type { CarouselSlide } from '@/components/carousel';
import { SectionSubCard, SectionSubLink } from '@/components/section';
import { BOOK } from '@/utils/book';

export const MEGA_PROJECT_HOME_LINKS: SectionSubLink[] = [
  {
    title: 'Ветеранські політики',
    link: '#',
    description: 'вивчаємо та впроваджуємо кращі практики в Черкасах',
  },
  // {
  //   title: 'Безпечна громада',
  //   link: '#',
  //   description: 'впроваджуємо кращі безпекові практики, нарощуємо відчуття безпеки в Черкасах',
  // },
  // {
  //   title: 'Заможна громада',
  //   link: '#',
  //   description: 'розвиваємо підприємництво й кращі практики міських економічних політик',
  // },
  {
    title: 'Культурна громада',
    link: '#',
    description: 'вирощуємо культурні проєкти, ініціативи та політики',
  },
];

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    background: '/images/main-screen/fpv-school.jpg',
    title: 'Школа FPV "Черкаський рій"',
    description: 'Пілотування FPV, курси пілотів-перехоплювачів та FPV-інженерії',
    link: BOOK.fpvSchool,
  },
  {
    background: '/images/main-screen/civil-traning.JPG',
    title: 'Військові вишколи та тренінги для цивільних',
    description: 'Навчаємо реагувати на екстремальні ситуації воєнного часу',
    link: BOOK.civilTraining,
  },
  {
    background: '/images/main-screen/ipsology.jpg',
    title: 'ІПСОлогія',
    description: 'Дослідження, виявлення, протидія та витіснення ворожих ІПСО з інформаційного простору',
    link: BOOK.IPSOlogy,
  },
  {
    background: '/images/main-screen/culture.jpg',
    title: 'Культурна громада',
    description: 'Інкубація культурних проєктів, ініціатив та політик',
    link: BOOK.citizensCulture,
  },
];

export const SECTION_ELEMENTS = [
  {
    image: '/images/homepage/photo_2024-10-21_12-06-33.jpg',
    title: 'Школа FPV «Черкаський рій»',
    description: 'Із 2022 року безперервно навчаємо військових та цивільних пілотуванню дронів',
    link: BOOK.civilTraining,
  },
  {
    image: '/images/homepage/photo_2024-10-21_17-46-27-1.jpg',
    title: 'Вишколи для цивільних',
    description:
      'Діє з грудня 2023 року у партнерстві з Добровольчим формуванням Черкаської територіальної громади (ДФТГ)',
    link: BOOK.citizensCulture,
  },
  {
    image: '/images/homepage/photo_2024-10-21_20-48-00.jpg',
    title: 'Проєкт «ІПСОлогія»',
    description: 'Готуємо цивільних до протидії ІПСО ворога на території України​',
    link: BOOK.IPSOlogy,
  },
  {
    image: '/images/homepage/megapro_home.png',
    title: 'Мегапроєкт «Вдома»',
    description: 'Тримаємо цілісність і дієвість громади під ударами війни.​',
    children: (
      <div className='flex flex-col gap-2'>
        {MEGA_PROJECT_HOME_LINKS.map((sublink) => (
          <SectionSubCard {...sublink} />
        ))}
      </div>
    ),
    link: BOOK.IPSOlogy,
  },
];
