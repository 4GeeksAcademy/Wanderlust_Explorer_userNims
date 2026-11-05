"use client";

import { ALL_OPTION, EXPERIENCE_CATEGORIES } from "@/types/experience";

interface FilterBarProps {
  category: string;
  destination: string;
  destinations: string[];
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  onReset: () => void;
  hasActiveFilters: boolean;
}

export const FilterBar = ({
  category,
  destination,
  destinations,
  onCategoryChange,
  onDestinationChange,
  onReset,
  hasActiveFilters,
}: FilterBarProps) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
    <div>
      <label htmlFor="filter-category" className="mb-1 block text-sm font-medium text-stone-700">
        Categoría
      </label>
      <select
        id="filter-category"
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 shadow-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
      >
        <option value={ALL_OPTION}>Todas las categorías</option>
        {EXPERIENCE_CATEGORIES.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label htmlFor="filter-destination" className="mb-1 block text-sm font-medium text-stone-700">
        Destino
      </label>
      <select
        id="filter-destination"
        value={destination}
        onChange={(event) => onDestinationChange(event.target.value)}
        className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 shadow-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
      >
        <option value={ALL_OPTION}>Todos los destinos</option>
        {destinations.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>

    <button
      type="button"
      onClick={onReset}
      disabled={!hasActiveFilters}
      className="h-11 rounded-xl border border-stone-300 px-4 text-sm font-medium text-stone-700 transition hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-40 lg:mb-0"
    >
      Limpiar filtros
    </button>
  </div>
);