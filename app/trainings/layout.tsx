export default function TrainingsLayout({ children }: { children: React.ReactNode }) {
  return (
   <main className="my-8 flex flex-col items-center gap-12 overflow-hidden px-4 sm:mt-8">
      {children}
    </main>
  );
}