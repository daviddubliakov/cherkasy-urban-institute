import Image from 'next/image';

export type CharityCardPropsType = {
  image: string;
  header: string;
  text: string[];
  link: string;
};

export const CharityCard = ({ image, header, text = [], link }: CharityCardPropsType) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-2.5" key={header[0]}>
      <a href={link} target="_blank">
        <Image src={image} width={270} height={270} alt={'image'}></Image>
      </a>
      <a href={link} target="_blank">
        <h3 className="text-center !text-[22px] !font-bold">{header}</h3>
      </a>
      {text.map((line, index) => (
        <p key={index} className="text-center text-sm">
          {line}
        </p>
      ))}
      <a href={link} target="_blank">
        <button className="cursor-pointer border-3 border-white bg-black px-8 py-3.5 text-white transition-colors duration-300 ease-in-out hover:border-black hover:bg-white hover:text-black">
          <p className="text-base font-bold">ПІДТРИМАТИ</p>
        </button>
      </a>
    </div>
  );
};
