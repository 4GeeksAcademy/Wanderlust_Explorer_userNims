export type ExperienceCategory = "Adventure" | "Culture" | "Food" | "Wellness" | "Nature";

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: ExperienceCategory;
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

export const ALL_OPTION = "All";

export interface ExperienceFilters {
  search: string;
  category: string;
  destination: string;
}