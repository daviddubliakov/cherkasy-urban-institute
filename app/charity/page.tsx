import Image from 'next/image';

export type CharityItem = {
  image: string;
  header: string[];
  text: string[];
  link: string;
};

const CHARITY_LIST: Array<CharityItem> = [
  {
    image: '/images/charity/Bilyy-kvadratnyy-loho2-1320x1368.jpg',
    header: ['Стати опорою команді та простору ЧІМ >>'],
    text: [
      'Тут ви долучаєтесь до спільноти найближчих за духом та цінностями благодійників, які дають нам впевненість у тому, що історія ЧІМ триватиме доти, доки є ваша довіра',
    ],
    link: 'https://secure.wayforpay.com/donate/cui',
  },
  {
    image: '/images/charity/471508850_122109294686667816_4637580820509835710_n.jpg',
    header: ['Підтримати ІПСОлогію >>'],
    text: ['Тут ви підтримуєте команду, яка викриває і знешкоджує ворожі ІПСО в Черкасах і по всій країні'],
    link: 'https://secure.wayforpay.com/donate/ipsology',
  },
  {
    image: '/images/charity/IMG_20230903_153001_449-1320x1424.jpg',
    header: ['Підтримати школу FPV пілотування', 'та інженерії >>'],
    text: ['Тут ви долучаєтесь до вирощування Черкаського рою, який захищає Україну та Черкаси'],
    link: 'https://secure.wayforpay.com/donate/fpvschool',
  },
  {
    image: '/images/charity/IMG_20230903_153852_527-768x795.jpg',
    header: ['Постійно діючий збір на закупівлю', 'кари небесної >>'],
    text: ['Тут ви доєднуєтесь до постачання ударних безпілотників та їх комплектуючих на голови ворогам'],
    link: 'https://secure.wayforpay.com/donate/fpvdrones',
  },
  {
    image: '/images/charity/nebesa_cherkaschyny-768x511.jpg',
    header: ['Проект Небеса Черкащини >>'],
    text: [
      'Ціль проекту «Небеса Черкащини» — надійніше закрити небо над Черкасами та районом від все більш масованих атак шaxедами.',
      'Бюджет першого етапу проекту (до липня 2025) 4 млн. грн.',
    ],
    link: 'https://secure.wayforpay.com/donate/nebesa',
  },
];

export const CharityCard = ({ image, header, text = [], link }: CharityItem) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-2.5" key={header[0]}>
      <a href={link} target="_blank">
        <Image src={image} width={270} height={270} alt={'image'}></Image>
      </a>
      <a href={link} target="_blank">
        {header.map((line, index) => (
          <h3 key={index} className="text-center !text-[22px] !font-bold">
            {line}
          </h3>
        ))}
      </a>
      {text.map((line, index) => (
        <p key={index} className="text-center text-sm">
          {line}
        </p>
      ))}
      <a href={link} target="_blank">
        <button className="border-3 border-white bg-black px-8 py-3.5 text-white transition-colors duration-300 ease-in-out hover:border-black hover:bg-white hover:text-black">
          <p className="text-base font-bold">ПІДТРИМАТИ</p>
        </button>
      </a>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="relative flex max-w-[1140px] flex-col items-center py-8">
        <div className="flex h-[98px] items-center py-2.5">
          <h2 className="!text-[28px] font-bold">
            Зробити внесок на рахунок ЧІМ для підтримки команди та наших проєктів
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 gap-y-10">{CHARITY_LIST.map(CharityCard)}</div>
      </section>
    </main>
  );
}
