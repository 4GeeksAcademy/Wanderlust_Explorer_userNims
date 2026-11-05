"use client";

import Link from "next/link";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useFavorites } from "@/hooks/useFavorites";
import type { Experience } from "@/types/experience";

export const ExperienceDetailView = ({ experience }: { experience: Experience }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(experience.id);

  useDocumentTitle(`${experience.title} · Wanderlust`);

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <Link href="/experiences" className="text-sm font-medium text-amber-700 underline-offset-4 hover:underline">
        ← Volver al explorador
      </Link>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={experience.imageUrl}
        alt=""
        className="mt-4 h-56 w-full rounded-2xl bg-stone-200 object-cover sm:h-80"
      />

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="inline-block rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-amber-700">
            {experience.category}
          </span>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
            {experience.title}
          </h1>
          <p className="mt-1 text-sm text-stone-600">
            {experience.destination} · ★ {experience.rating.toFixed(1)}
          </p>
        </div>

        <button
          type="button"
          onClick={() => toggleFavorite(experience.id)}
          aria-pressed={favorite}
          className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
            favorite
              ? "border-rose-200 bg-rose-50 text-rose-700"
              : "border-stone-300 text-stone-700 hover:bg-stone-100"
          }`}
        >
          <span aria-hidden="true">{favorite ? "♥" : "♡"}</span>
          {favorite ? "Guardada en favoritos" : "Guardar en favoritos"}
        </button>
      </div>

      <section className="mt-6 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-stone-900">Sobre esta experiencia</h2>
        <p className="mt-2 text-sm leading-relaxed text-stone-700">{experience.description}</p>
        <p className="mt-4 text-xl font-bold text-stone-900">
          USD {experience.price}
          <span className="ml-1 text-sm font-normal text-stone-500">por persona</span>
        </p>
      </section>
    </main>
  );
};