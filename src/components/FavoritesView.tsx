"use client";

import { ExperienceGrid } from "@/components/ExperienceGrid";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/useFavorites";

export const FavoritesView = () => {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const favorites = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Mis favoritos</h1>
        <p className="mt-1 text-sm text-stone-600">
          {favorites.length === 0
            ? "Todavía no guardaste experiencias."
            : `${favorites.length} experiencia${favorites.length === 1 ? "" : "s"} guardada${favorites.length === 1 ? "" : "s"}.`}
        </p>
      </header>

      <ExperienceGrid
        experiences={favorites}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
        emptyMessage="No se encontraron resultados: marcá el corazón de una tarjeta para verla acá."
      />
    </main>
  );
};