import { Banner, BannerProps } from '@/components/banner';
import Link from 'next/link';
import { Button } from '@/components/button';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Section } from '@/components/section';
import { BOOK } from '@/utils/book';

const HomepageBannerList: Array<BannerProps & { link: string }> = [
  {
    background: '/images/homepage/DSC_3991_-1-1320x1064.jpg',
    title: 'Школа FPV пілотування',
    description: 'Навчаємо військових та цивільних пілотувати FPV дрони',
    link: BOOK.fpvSchool,
  },
  {
    type: 'splitted',
    background: 'images/homepage/photo_2024-10-21_17-21-22.jpg',
    title: 'Школа FPV інженерії',
    description:
      'Навчаємо військових та цивільних конструювати та налаштовувати FPV дрони',
    link: BOOK.fpvMaster,
  },
];

const sectionElements = [
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

export default function Home() {
  return (
    <div className='relative flex flex-col gap-10 py-[80px] sm:gap-30'>
      {HomepageBannerList.map((bannerProps, i) => (
        <Banner key={i} {...bannerProps}>
          <Link href={bannerProps.link}>
            <Button className='mt-6'>
              Go to
              <ArrowRightIcon className='size-6' />
            </Button>
          </Link>
        </Banner>
      ))}
      <Section elements={sectionElements} />
    </div>
  );
}
