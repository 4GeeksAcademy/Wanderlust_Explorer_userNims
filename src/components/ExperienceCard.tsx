import Link from "next/link";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const ExperienceCard = ({ experience, isFavorite, onToggleFavorite }: ExperienceCardProps) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <button
      type="button"
      onClick={() => onToggleFavorite(experience.id)}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? `Quitar ${experience.title} de favoritos` : `Añadir ${experience.title} a favoritos`}
      className={`absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full text-lg shadow-sm transition ${
        isFavorite ? "bg-rose-600 text-white" : "bg-white/90 text-stone-500 hover:text-rose-600"
      }`}
    >
      {isFavorite ? "♥" : "♡"}
    </button>

    <Link href={`/experiences/${experience.id}`} className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-amber-500">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={experience.imageUrl}
        alt=""
        loading="lazy"
        className="h-40 w-full bg-stone-200 object-cover transition group-hover:scale-[1.02]"
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="w-fit rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-amber-700">
          {experience.category}
        </span>
        <h3 className="line-clamp-2 text-base font-semibold text-stone-900">{experience.title}</h3>
        <p className="text-sm text-stone-500">{experience.destination}</p>
        <div className="mt-auto flex items-center justify-between pt-2 text-sm">
          <span className="font-semibold text-stone-900">USD {experience.price}</span>
          <span className="text-stone-600">★ {experience.rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  </article>
);