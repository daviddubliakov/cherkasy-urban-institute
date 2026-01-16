import { notFound } from 'next/navigation';
import { getAllTrainingSlugs, getTrainingBySlug, TrainingDetailPage } from '@/features/training-details';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllTrainingSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function TrainingPage({ params }: PageProps) {
  const { slug } = await params;
  const training = getTrainingBySlug(slug);

  if (!training) {
    notFound();
  }

  return <TrainingDetailPage training={training} />;
}

