export type InstructorType = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

export type TrainingScheduleType = {
  id: string;
  date: string;
  day: string;
  time: string;
  spotsAvailable: number;
  maxSpots: number;
};

export type TrainingDetailsType = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string | null;
  duration: string;
  category: string;
  whatYouWillLearn: string[];
  requirements: string[];
  instructors: InstructorType[];
  schedules: TrainingScheduleType[];
  donationInfo: {
    suggested: number;
    description: string;
  };
};

export const TRAINING_DETAILS: TrainingDetailsType[] = [
  {
    id: 'weapon-handling-short',
    slug: 'osnovy-povodzhennia-zi-zbroieiu-korotkyi-stvol',
    title: 'Основи поводження зі зброєю: короткий ствол',
    shortDescription: 'Навчіться безпечно поводитися з пістолетом та основам стрільби.',
    fullDescription: `Вишкіл з основ поводження з короткоствольною зброєю призначений для цивільних, які хочуть навчитися безпечно та ефективно поводитися з пістолетом. Курс охоплює теоретичні основи та практичні навички, необхідні для впевненого володіння зброєю.

Під час вишколу ви опануєте правила безпеки, навчитесь правильно тримати, заряджати та розряджати зброю, а також освоїте базові техніки стрільби.`,
    image: null,
    duration: '3 години',
    category: 'Тактичний напрям',
    whatYouWillLearn: [
      'Правила безпеки при поводженні зі зброєю',
      'Правильний хват та стійка',
      'Техніка прицілювання',
      'Заряджання та розряджання пістолета',
      'Усунення базових затримок',
      'Практична стрільба по мішенях',
    ],
    requirements: ['Вік від 18 років', 'Зручний одяг та закрите взуття', 'Документ, що посвідчує особу'],
    instructors: [
      {
        id: 'instructor-1',
        name: 'lorem ipsum dolor sit amet',
        role: 'lorem ipsum dolor sit amet',
        bio: 'lorem ipsum dolor sit amet',
        photo: '',
      },
      {
        id: 'instructor-2',
        name: 'lorem ipsum dolor sit amet',
        role: 'lorem ipsum dolor sit amet',
        bio: 'lorem ipsum dolor sit amet',
        photo: '',
      },
    ],
    schedules: [
      {
        id: 'schedule-1',
        date: '12 січня',
        day: 'неділя',
        time: '10:00 - 13:00',
        spotsAvailable: 5,
        maxSpots: 12,
      },
      {
        id: 'schedule-2',
        date: '18 січня',
        day: 'субота',
        time: '14:00 - 17:00',
        spotsAvailable: 8,
        maxSpots: 12,
      },
      {
        id: 'schedule-3',
        date: '19 січня',
        day: 'неділя',
        time: '14:00 - 17:00',
        spotsAvailable: 8,
        maxSpots: 12,
      },
      {
        id: 'schedule-4',
        date: '20 січня',
        day: 'понеділок',
        time: '14:00 - 17:00',
        spotsAvailable: 8,
        maxSpots: 12,
      },
      {
        id: 'schedule-5',
        date: '25 січня',
        day: 'субота',
        time: '10:00 - 13:00',
        spotsAvailable: 0,
        maxSpots: 12,
      },
    ],
    donationInfo: {
      suggested: 500,
      description:
        'Рекомендований внесок 500 грн. Кошти йдуть на забезпечення тренувань та підтримку добровольчого формування.',
    },
  },
  {
    id: 'weapon-handling-ak74',
    slug: 'osnovy-povodzhennia-zi-zbroieiu-ak-74',
    title: 'Основи поводження зі зброєю: АК-74',
    shortDescription: 'Опануйте автомат Калашникова - основну зброю української армії.',
    fullDescription: `Комплексний вишкіл з вивчення автомата Калашникова АК-74. Курс розроблений для цивільних, які хочуть отримати практичні навички поводження з основною стрілецькою зброєю ЗСУ.

Програма включає повний цикл: від теорії та розбирання зброї до практичної стрільби. Ви навчитесь безпечно та ефективно використовувати АК-74 в різних ситуаціях.`,
    image: null,
    duration: '4 години',
    category: 'Тактичний напрям',
    whatYouWillLearn: [
      'Будова та принцип роботи АК-74',
      'Неповне розбирання та збирання',
      'Чищення та обслуговування',
      'Правила безпеки при поводженні',
      'Стрілецькі позиції та стійки',
      'Практична стрільба',
    ],
    requirements: [
      'Вік від 18 років',
      'Зручний одяг та закрите взуття',
      'Документ, що посвідчує особу',
      'Фізична підготовка середнього рівня',
    ],
    instructors: [
      {
        id: 'instructor-1',
        name: 'Олександр Петренко',
        role: 'Головний інструктор',
        bio: 'Ветеран ЗСУ з 8-річним досвідом. Сертифікований інструктор зі стрілецької підготовки. Проводить вишколи з 2022 року.',
        photo: '',
      },
    ],
    schedules: [
      {
        id: 'schedule-ak-1',
        date: '15 січня',
        day: 'середа',
        time: '18:00 - 22:00',
        spotsAvailable: 3,
        maxSpots: 10,
      },
    ],
    donationInfo: {
      suggested: 700,
      description: 'Рекомендований внесок 700 грн. Кошти йдуть на боєприпаси та підтримку добровольчого формування.',
    },
  },
  {
    id: 'tactical-training',
    slug: 'taktychna-pidhotovka',
    title: 'Тактична підготовка',
    shortDescription: 'Основи індивідуальної тактики та дій в умовах бойових дій.',
    fullDescription: `Вишкіл з тактичної підготовки для цивільних. Курс розроблений спільно з ветеранами бойових дій та включає практичні навички, які можуть врятувати життя у критичних ситуаціях.

Ви навчитесь правильно пересуватися на місцевості, використовувати укриття, орієнтуватися в тактичній обстановці та взаємодіяти в команді.`,
    image: null,
    duration: '5 годин',
    category: 'Тактичний напрям',
    whatYouWillLearn: [
      'Індивідуальна тактична підготовка',
      'Пересування та використання укриттів',
      'Орієнтування на місцевості',
      'Командна взаємодія',
      "Тактичний зв'язок",
      'Дії при контакті з противником',
    ],
    requirements: ['Вік від 18 років', 'Спортивний одяг та взуття', 'Хороша фізична форма', 'Вода та легкий перекус'],
    instructors: [
      {
        id: 'instructor-3',
        name: 'Максим Дорошенко',
        role: 'Тактичний інструктор',
        bio: 'Офіцер ЗСУ у відставці. Учасник бойових дій з 2014 року. Спеціалізується на тактичній підготовці цивільних.',
        photo: '',
      },
      {
        id: 'instructor-4',
        name: 'Андрій Савченко',
        role: 'Асистент інструктора',
        bio: 'Ветеран добровольчих батальйонів. Має досвід підготовки новобранців.',
        photo: '',
      },
    ],
    schedules: [],
    donationInfo: {
      suggested: 600,
      description: 'Рекомендований внесок 600 грн на матеріальне забезпечення тренування.',
    },
  },
  {
    id: 'first-aid',
    slug: 'indyvidualna-aptechka-ta-bazova-pidtrymka-zhyttia',
    title: 'Індивідуальна аптечка та базова підтримка життя',
    shortDescription: 'Навчіться надавати першу допомогу та рятувати життя.',
    fullDescription: `Вишкіл з домедичної допомоги, розроблений для цивільних. Ви навчитесь комплектувати індивідуальну аптечку, надавати базову підтримку життя та діяти в екстрених медичних ситуаціях.

Курс базується на стандартах TCCC (Tactical Combat Casualty Care) та адаптований для цивільного населення.`,
    image: null,
    duration: '3 години',
    category: 'Домедична допомога',
    whatYouWillLearn: [
      'Комплектування індивідуальної аптечки',
      'Оцінка стану постраждалого',
      'Серцево-легенева реанімація (СЛР)',
      'Допомога при непритомності',
      'Позиція відновлення',
      'Виклик екстреної допомоги',
    ],
    requirements: ['Вік від 16 років', 'Зручний одяг', 'Готовність до практичних вправ'],
    instructors: [
      {
        id: 'instructor-5',
        name: 'Олена Мельник',
        role: 'Медичний інструктор',
        bio: 'Парамедик з 10-річним досвідом. Сертифікований інструктор TCCC. Проводить тренінги для військових та цивільних.',
        photo: '',
      },
    ],
    schedules: [
      {
        id: 'schedule-med-1',
        date: '14 січня',
        day: 'вівторок',
        time: '18:30 - 21:30',
        spotsAvailable: 10,
        maxSpots: 15,
      },
      {
        id: 'schedule-med-2',
        date: '21 січня',
        day: 'вівторок',
        time: '18:30 - 21:30',
        spotsAvailable: 12,
        maxSpots: 15,
      },
    ],
    donationInfo: {
      suggested: 400,
      description: 'Рекомендований внесок 400 грн на медичні витратні матеріали.',
    },
  },
  {
    id: 'critical-bleeding',
    slug: 'zupynka-krytychnykh-krovotetch',
    title: 'Зупинка критичних кровотеч',
    shortDescription: 'Опануйте техніки зупинки критичних кровотеч за допомогою турнікетів та гемостатиків.',
    fullDescription: `Практичний вишкіл з надання допомоги при критичних кровотечах. Ви навчитесь швидко та ефективно зупиняти кровотечі за допомогою турнікетів, гемостатичних засобів та тиснучих пов\'язок.

Курс включає інтенсивну практичну частину з відпрацюванням навичок на манекенах та у реалістичних сценаріях.`,
    image: null,
    duration: '2.5 години',
    category: 'Домедична допомога',
    whatYouWillLearn: [
      'Типи кровотеч та їх ознаки',
      'Накладання турнікета CAT/SICH',
      'Використання гемостатичних засобів',
      "Тиснучі пов'язки",
      'Тампонування ран',
      'Алгоритм дій при масивній кровотечі',
    ],
    requirements: ['Вік від 16 років', 'Одяг, який не шкода забруднити', 'Бажано пройти базовий курс першої допомоги'],
    instructors: [
      {
        id: 'instructor-5',
        name: 'Олена Мельник',
        role: 'Медичний інструктор',
        bio: 'Парамедик з 10-річним досвідом. Сертифікований інструктор TCCC. Проводить тренінги для військових та цивільних.',
        photo: '',
      },
      {
        id: 'instructor-6',
        name: 'Віктор Бондаренко',
        role: 'Бойовий медик',
        bio: 'Бойовий медик ЗСУ. Учасник бойових дій. Має практичний досвід надання допомоги в польових умовах.',
        photo: '',
      },
    ],
    schedules: [
      {
        id: 'schedule-bleed-1',
        date: '16 січня',
        day: 'четвер',
        time: '19:00 - 21:30',
        spotsAvailable: 6,
        maxSpots: 12,
      },
    ],
    donationInfo: {
      suggested: 350,
      description: 'Рекомендований внесок 350 грн на витратні матеріали для тренування.',
    },
  },
  {
    id: 'ipsology',
    slug: 'ipsolohiia-oznaiomcha-lektsiia',
    title: 'ІПСОлогія: ознайомча лекція',
    shortDescription: 'Розуміння інформаційно-психологічних операцій та захист від маніпуляцій.',
    fullDescription: `Ознайомча лекція з основ ІПСОлогії - науки про інформаційно-психологічні операції. Ви дізнаєтесь, як розпізнавати маніпуляції, фейки та пропаганду, а також як захистити себе та близьких від інформаційних атак.

Курс особливо актуальний в умовах інформаційної війни та допоможе розвинути критичне мислення.`,
    image: null,
    duration: '2 години',
    category: 'Психологічний напрям',
    whatYouWillLearn: [
      'Основи інформаційно-психологічних операцій',
      'Методи пропаганди та маніпуляцій',
      'Розпізнавання фейків',
      'Критичне споживання інформації',
      'Захист від інформаційних атак',
      'Інформаційна гігієна',
    ],
    requirements: ['Вік від 14 років', 'Бажання вчитися та думати критично'],
    instructors: [
      {
        id: 'instructor-7',
        name: 'Наталія Шевченко',
        role: 'Аналітик-психолог',
        bio: 'Психолог, спеціаліст з інформаційної безпеки. Автор досліджень з протидії російській пропаганді.',
        photo: '',
      },
    ],
    schedules: [
      {
        id: 'schedule-ipso-1',
        date: '13 січня',
        day: 'понеділок',
        time: '19:00 - 21:00',
        spotsAvailable: 20,
        maxSpots: 30,
      },
    ],
    donationInfo: {
      suggested: 200,
      description: 'Добровільний внесок від 200 грн на розвиток освітніх програм.',
    },
  },
];

export function getTrainingBySlug(slug: string): TrainingDetailsType | undefined {
  return TRAINING_DETAILS.find((training) => training.slug === slug);
}

export function getAllTrainingSlugs(): string[] {
  return TRAINING_DETAILS.map((training) => training.slug);
}
