import { ThemeKey } from "@/data/types";

const THEME_COLORS: Record<ThemeKey, string> = {
  food: "bg-[hsl(var(--theme-food))] text-white",
  management: "bg-[hsl(var(--theme-management))] text-white",
  indigenous: "bg-[hsl(var(--theme-indigenous))] text-white",
  greenBuildings: "bg-[hsl(var(--theme-green-buildings))] text-white",
  landManagement: "bg-[hsl(var(--theme-land-management))] text-white",
};

export const getThemeClasses = (theme: ThemeKey) =>
  THEME_COLORS[theme] ?? "bg-muted text-muted-foreground";
