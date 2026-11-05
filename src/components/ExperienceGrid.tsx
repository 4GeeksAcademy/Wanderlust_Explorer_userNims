import { ExperienceCard } from "@/components/ExperienceCard";
import type { Experience } from "@/types/experience";

interface ExperienceGridProps {
  experiences: Experience[];
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  emptyMessage?: string;
}

export const ExperienceGrid = ({
  experiences,
  favoriteIds,
  onToggleFavorite,
  emptyMessage = "No se encontraron resultados",
}: ExperienceGridProps) => {
  if (experiences.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-6 py-12 text-center text-stone-600">
        {emptyMessage}
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {experiences.map((experience) => (
        <li key={experience.id}>
          <ExperienceCard
            experience={experience}
            isFavorite={favoriteIds.includes(experience.id)}
            onToggleFavorite={onToggleFavorite}
          />
        </li>
      ))}
    </ul>
  );
};