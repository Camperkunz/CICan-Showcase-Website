import type { ThemeKey } from "@/data/types";

export const THEME_ICON_MAP: Record<ThemeKey, string> = {
  food: "/themes-icons/food.png",
  indigenous: "/themes-icons/indigenous.png",
  greenBuildings: "/themes-icons/greenBuildings-landManagement.png",
  wasteManagement: "/themes-icons/land-managment.png",
};

interface ThemeIconProps {
  theme: ThemeKey;
  className?: string;
}

export const ThemeIcon = ({ theme, className = "h-4 w-4" }: ThemeIconProps) => {
  const src = THEME_ICON_MAP[theme];
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
      loading="lazy"
    />
  );
};
