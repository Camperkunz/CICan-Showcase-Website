import {
  Salad, Settings, Feather, Building, Mountain,
} from "lucide-react";
import type { ThemeKey } from "@/data/types";

export const THEME_ICON_MAP: Record<ThemeKey, React.ElementType> = {
  food: Salad,
  management: Settings,
  indigenous: Feather,
  greenBuildings: Building,
  landManagement: Mountain,
};
