import { CHARITY_LIST } from "./model/charity-list";
import { CharityCard } from "./ui/charity-card";

export default function CharityPage() {
  return (
   <div className="flex min-h-screen flex-col items-center">
   <section className="relative flex max-w-[1140px] flex-col items-center py-8">
     <div className="flex items-center sm:py-12 py-4 px-8">
       <h2 className="!text-[28px] font-bold">
         Зробити внесок на рахунок ЧІМ для підтримки команди та наших проєктів
       </h2>
     </div>
     <div className="grid grid-cols-1 gap-5 gap-y-10 sm:grid-cols-2">{CHARITY_LIST.map(CharityCard)}</div>
   </section>
 </div>
  );
}