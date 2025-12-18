import type { TrainingCardPropsType } from '../training-card';

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

export const TRAINING_CATEGORIES:TrainingCategoryType[]= [
  {
    id: crypto.randomUUID(),
    title: 'Тактичний напрям',
    description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    trainings: [
      {
        id: crypto.randomUUID(),
        title: 'Основи поводження зі зброєю: короткий ствол',
      },
      {
        id: crypto.randomUUID(),
        title: 'Основи поводження зі зброєю: АК-74',
      },
      {
        id: crypto.randomUUID(),
        title: 'Тактична підготовка',
      },
      {
        id: crypto.randomUUID(),
        title: 'Приліт, пожежа: як діяти',
      },
      {
        id: crypto.randomUUID(),
        title: 'Військова топографія',

      },
      {
        id: crypto.randomUUID(),
        title: 'Мінна безпека',

      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: "Домедична допомога",
    description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    trainings: [
      {
        id: crypto.randomUUID(),
        title: 'Індивідуальна аптечка та базова підтримка життя',
      },
      {
        id: crypto.randomUUID(),
        title: 'Зупинка критичних кровотеч',
      },
      {
        id: crypto.randomUUID(),
        title: 'Травма та інші види шоку',
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    title: 'Психологічний напрям',
    description:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    trainings: [
      {
        id: crypto.randomUUID(),
        title: 'Психологічна підготовка до стресових ситуацій',
      },
      {
        id: crypto.randomUUID(),
        title: 'ІПСОлогія: ознайомча лекція',
      },
      {
        id: crypto.randomUUID(),
        title: 'Психоедукація',
      },
    ],
  },
];
