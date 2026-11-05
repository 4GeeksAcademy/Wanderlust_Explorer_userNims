"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { ALL_OPTION, type ExperienceFilters } from "@/types/experience";

type FilterKey = keyof ExperienceFilters;

export const useExperienceFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters: ExperienceFilters = {
    search: searchParams.get("search") ?? "",
    category: searchParams.get("category") ?? ALL_OPTION,
    destination: searchParams.get("destination") ?? ALL_OPTION,
  };

  const setFilter = useCallback(
    (key: FilterKey, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const isEmpty = value.trim() === "" || value === ALL_OPTION;

      if (isEmpty) {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const resetFilters = useCallback(() => {
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  return { filters, setFilter, resetFilters };
};