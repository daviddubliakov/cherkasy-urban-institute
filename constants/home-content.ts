
import type { CarouselSlide } from '@/components/carousel';
import { BOOK } from '@/utils/book';

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    background: '/images/main-screen/fpv-school.jpg',
    title: 'Школа FPV "Черкаський рій"',
    description: 'Пілотування FPV, курси пілотів-перехоплювачів та FPV-інженерії',
  },
  {
    background: '/images/main-screen/civil-traning.JPG',
    title: 'Військові вишколи та тренінги для цивільних',
    description: 'Навчаємо реагувати на екстремальні ситуації воєнного часу',
  },
  {
    background: '/images/main-screen/ipsology.jpg',
    title: 'ІПСОлогія',
    description: 'Дослідження, виявлення, протидія та витіснення ворожих ІПСО з інформаційного простору',
  },
  {
    background: '/images/main-screen/culture.jpg',
    title: 'Культурна громада',
    description: 'Інкубація культурних проєктів, ініціатив та політик',
  },
];

export const SECTION_ELEMENTS = [
  {
    image: '/images/homepage/photo_2024-10-21_12-06-33.jpg',
    title: 'Цикл «Підготовка цивільних в умовах воєнного часу»',
    description:
      'Проводимо військові вишколи для цивільних та вишколи щодо реагування на екстремальні ситуації воєнного часу',
    link: BOOK.civilTraining,
  },
  {
    image: '/images/homepage/photo_2024-10-21_17-46-27-1.jpg',
    title: 'Культурна громада',
    description:
      'Інкубація культурних проєктів, ініціатив та політик. Запартнерились із ГО «Культура» у розрізі культурних та розвиткових проєктів у Черкасах',
    link: BOOK.citizensCulture,
  },
  {
    image: '/images/homepage/photo_2024-10-21_20-48-00.jpg',
    title: 'ІПСОЛОГІЯ',
    description:
      'Досліджуємо тему інформаційної війни та готуємо цивільних до протидії ІПСО ворога на території України​',
    link: BOOK.IPSOlogy,
  },
];
