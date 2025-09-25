import { CharityCard } from './charity-card';
import { CHARITY_LIST } from './charity-list';

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
