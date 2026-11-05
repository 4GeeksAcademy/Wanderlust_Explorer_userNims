"use client";

import { useMemo } from "react";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { FilterBar } from "@/components/FilterBar";
import { SearchBar } from "@/components/SearchBar";
import { experiences } from "@/data/experiences";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";
import { useFavorites } from "@/hooks/useFavorites";
import { useFilteredExperiences } from "@/hooks/useFilteredExperiences";
import { ALL_OPTION } from "@/types/experience";

export const ExplorerView = () => {
  const { filters, setFilter, resetFilters } = useExperienceFilters();
  const { favoriteIds, toggleFavorite } = useFavorites();
  const results = useFilteredExperiences(experiences, filters);

  const destinations = useMemo(
    () => Array.from(new Set(experiences.map((experience) => experience.destination))).sort(),
    [],
  );

  const hasActiveFilters =
    filters.search !== "" || filters.category !== ALL_OPTION || filters.destination !== ALL_OPTION;

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">Explorar experiencias</h1>
        <p className="mt-1 text-sm text-stone-600">
          Busca, filtra y comparte el enlace: los filtros viven en la URL.
        </p>
      </header>

      <section className="mb-6 grid gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
        <SearchBar value={filters.search} onChange={(value) => setFilter("search", value)} />
        <FilterBar
          category={filters.category}
          destination={filters.destination}
          destinations={destinations}
          onCategoryChange={(value) => setFilter("category", value)}
          onDestinationChange={(value) => setFilter("destination", value)}
          onReset={resetFilters}
          hasActiveFilters={hasActiveFilters}
        />
      </section>

      <p className="mb-4 text-sm text-stone-600" role="status">
        {results.length} de {experiences.length} experiencias
      </p>

      <ExperienceGrid
        experiences={results}
        favoriteIds={favoriteIds}
        onToggleFavorite={toggleFavorite}
      />
    </main>
  );
};