export type ThemeKey =
  | "food"
  | "indigenous"
  | "greenBuildings"
  | "wasteManagment";

export interface ProjectHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface ProjectPhoto {
  url: string;
  caption: string;
}

export interface ProjectLocale {
  collegeName: string;
  title: string;
  address: string;
  projectLead: string;
  description: string;
  previewDescription: string;
  highlights: ProjectHighlight[];
  photos: ProjectPhoto[];
  futureOutlook: string;
}

export interface Project {
  id: string;
  theme: ThemeKey | ThemeKey[];
  province: string;
  collegeLogoUrl: string;
  previewImageUrl: string;
  externalUrl?: string;
  en: ProjectLocale;
  fr: ProjectLocale;
}

/** Normalize theme field to always return an array */
export const getThemes = (project: Project): ThemeKey[] =>
  Array.isArray(project.theme) ? project.theme : [project.theme];
