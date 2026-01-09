import type { CarouselSlide } from '@/components/carousel';
import { RegularLink } from '@/components/ui/regular-link';
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
    image: '/images/homepage/photo_2024-10-21_20-48-00.jpg',
    title: 'Мегапроєкт «Вдома»',
    description: 'Тримаємо цілісність і дієвість громади під ударами війни.​',
    children: (
      <div>
        <p>Проєкт включає такі підпроєкти:</p>
        <ul className="list-inside list-disc">
          <li><RegularLink title="Ветеранські політики " link={"#"} withArrow={false} /> — вивчаємо та впроваджуємо кращі практики в Черкасах</li>
          <li><RegularLink title="«Безпечна громада» " link={"#"} withArrow={false} /> — впроваджуємо кращі безпекові практики, нарощуємо відчуття безпеки в Черкасах</li>
          <li><RegularLink title="«Заможна громада» " link={"#"} withArrow={false} /> — розвиваємо підприємництво й кращі практики міських економічних політик</li>
          <li><RegularLink title="«Культурна громада» " link={"#"} withArrow={false} /> — вирощуємо культурні проєкти, ініціативи та політики</li>
        </ul>
      </div>
    ),
    link: BOOK.IPSOlogy,
  },
];
