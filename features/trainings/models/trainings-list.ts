import type { TrainingCardPropsType } from '../ui/training-card';

export type TrainingCategoryType = {
  id: string;
  title: string;
  description: string;
  trainings: TrainingCardPropsType[];
};

export const TRAININGS_LIST: TrainingCardPropsType[] = [
  {
    id: 'practice',
    title: 'Практика',
    description: 'Теоретичні знання перетворюємо на практичні вміння, одразу застосовуючи їх на вишколах.',
  },
  {
    id: 'community',
    title: 'Спільнота',
    description: 'Формуємо спільноту "супергероїв", здатних рятувати життя.',
  },
  {
    id: 'effectiveness',
    title: 'Дієвість',
    description: 'Знанння та вміння допомагають одразу діяти у критичний момент.',
  },
];

export const TRAINING_CATEGORIES: TrainingCategoryType[] = [
  {
    id: 'tactical',
    title: 'Тактичний напрям',
    description: 'Практичні навички поводження зі зброєю, тактичної підготовки та дій в екстремальних ситуаціях.',
    trainings: [
      {
        id: 'weapon-short',
        slug: 'osnovy-povodzhennia-zi-zbroieiu-korotkyi-stvol',
        title: 'Основи поводження зі зброєю: короткий ствол',
      },
      {
        id: 'weapon-ak74',
        slug: 'osnovy-povodzhennia-zi-zbroieiu-ak-74',
        title: 'Основи поводження зі зброєю: АК-74',
      },
      {
        id: 'tactical',
        slug: 'taktychna-pidhotovka',
        title: 'Тактична підготовка',
      },
      {
        id: 'arrival-fire',
        title: 'Приліт, пожежа: як діяти',
      },
      {
        id: 'topography',
        title: 'Військова топографія',
      },
      {
        id: 'mine-safety',
        title: 'Мінна безпека',
      },
    ],
  },
  {
    id: 'medical',
    title: 'Домедична допомога',
    description: 'Життєво важливі навички надання першої допомоги та рятування життя у критичних ситуаціях.',
    trainings: [
      {
        id: 'first-aid',
        slug: 'indyvidualna-aptechka-ta-bazova-pidtrymka-zhyttia',
        title: 'Індивідуальна аптечка та базова підтримка життя',
      },
      {
        id: 'bleeding',
        slug: 'zupynka-krytychnykh-krovotetch',
        title: 'Зупинка критичних кровотеч',
      },
      {
        id: 'trauma',
        title: 'Травма та інші види шоку',
      },
    ],
  },
  {
    id: 'psychological',
    title: 'Психологічний напрям',
    description: 'Підготовка до стресових ситуацій, розуміння інформаційних загроз та психологічна стійкість.',
    trainings: [
      {
        id: 'stress-prep',
        title: 'Психологічна підготовка до стресових ситуацій',
      },
      {
        id: 'ipsology',
        slug: 'ipsolohiia-oznaiomcha-lektsiia',
        title: 'ІПСОлогія: ознайомча лекція',
      },
      {
        id: 'psychoeducation',
        title: 'Психоедукація',
      },
    ],
  },
];
