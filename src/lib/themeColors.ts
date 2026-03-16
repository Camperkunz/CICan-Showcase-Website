import { ThemeKey } from "@/data/types";

const THEME_COLORS: Record<ThemeKey, string> = {
  // Используем полупрозрачный черный (bg-black/40) и легкий оттенок темы в бордере или оверлее
  food: "bg-black/50 backdrop-blur-md border-l-4 border-[hsl(var(--theme-food))] text-white",
  indigenous: "bg-black/50 backdrop-blur-md border-l-4 border-[hsl(var(--theme-indigenous))] text-white",
  greenBuildings: "bg-black/50 backdrop-blur-md border-l-4 border-[hsl(var(--theme-green-buildings))] text-white",
  wasteManagment: "bg-black/50 backdrop-blur-md border-l-4 border-[hsl(var(--theme-land-management))] text-white",
};

export const getThemeClasses = (theme: ThemeKey) =>
  THEME_COLORS[theme] ?? "bg-muted text-muted-foreground";
