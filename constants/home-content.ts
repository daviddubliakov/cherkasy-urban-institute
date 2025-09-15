import { BannerProps } from '@/components/banner';
import { BOOK } from '@/utils/book';

export const BANNER_LIST: Array<BannerProps & { link: string }> = [
  {
    background: '/images/homepage/banner.jpg',
    title: 'Школа FPV “Черкаський рій”',
    description: 'Пілотування FPV, курси пілотів-перехоплювачів та FPV-інженерії',
    link: BOOK.fpvSchool,
  },
  {
    type: 'splitted',
    background: '/images/homepage/fpv-school.jpg',
    title: 'Школа FPV інженерії',
    description:
      'Навчаємо військових та цивільних конструювати та налаштовувати FPV дрони',
    link: BOOK.fpvMaster,
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
