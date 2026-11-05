"use client";

import { useMemo } from "react";
import { ALL_OPTION, type Experience, type ExperienceFilters } from "@/types/experience";

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export const useFilteredExperiences = (
  experiences: Experience[],
  { search, category, destination }: ExperienceFilters,
): Experience[] =>
  useMemo(() => {
    const term = search.trim();
    const pattern = term ? new RegExp(escapeRegExp(term), "i") : null;

    return experiences.filter((experience) => {
      const matchesSearch = pattern ? pattern.test(experience.title) : true;
      const matchesCategory = category === ALL_OPTION || experience.category === category;
      const matchesDestination =
        destination === ALL_OPTION || experience.destination === destination;

      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [experiences, search, category, destination]);