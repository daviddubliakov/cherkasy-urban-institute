type NotExistsPageProps = {
  pageName: string;
};

export const NotExistsPage = (props: NotExistsPageProps) => {
  const { pageName } = props;

  return (
    <section className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-2xl font-semibold text-slate-900'>Шаблон</p>
        <h1 className='mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl'>
          {pageName}
        </h1>
        <p className='mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8'>
          Треба трохи почекати! Ми ще працюємо над цією сторінкою.
        </p>
      </div>
    </section>
  );
};
