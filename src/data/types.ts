export type ThemeKey =
  | "food"
  | "management"
  | "indigenous"
  | "greenBuildings"
  | "landManagement"
  | "energy"
  | "biodiversity"
  | "waste";

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
  theme: ThemeKey;
  province: string;
  collegeLogoUrl: string;
  previewImageUrl: string;
  externalUrl?: string;
  reportUrl?: string;
  en: ProjectLocale;
  fr: ProjectLocale;
}
