import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ExperienceDetailView } from "@/components/ExperienceDetailView";
import { getExperienceById } from "@/data/experiences";

type DetailPageProps = { params: Promise<{ id: string }> };

const ExperienceDetailContent = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  const experience = getExperienceById(id);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetailView experience={experience} />;
};

const ExperienceDetailPage = ({ params }: DetailPageProps) => (
  <Suspense fallback={<p className="mx-auto max-w-4xl px-4 py-8 text-sm text-stone-600">Cargando experiencia…</p>}>
    <ExperienceDetailContent params={params} />
  </Suspense>
);

export default ExperienceDetailPage;