import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Search, X, ArrowDownAZ, ArrowUpZA } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import projectsData from "@/data/projects.json";
import type { Project, ThemeKey } from "@/data/types";

const projects = projectsData as Project[];

// Auto-generate unique themes and provinces from the dataset
const THEMES: ThemeKey[] = [...new Set(projects.map((p) => p.theme))].sort();
const PROVINCES: string[] = [...new Set(projects.map((p) => p.province))].sort();

export type SortOrder = "az" | "za";

interface FilterBarProps {
  theme: string;
  province: string;
  search: string;
  sort: SortOrder;
  onThemeChange: (v: string) => void;
  onProvinceChange: (v: string) => void;
  onSearchChange: (v: string) => void;
  onSortChange: (v: SortOrder) => void;
  resultCount: number;
}

const FilterBar = ({
  theme, province, search, sort,
  onThemeChange, onProvinceChange, onSearchChange, onSortChange, resultCount,
}: FilterBarProps) => {
  const { t } = useTranslation();
  const hasFilters = theme !== "all" || province !== "all" || search !== "" || sort !== "az";

  const clearFilters = () => {
    onThemeChange("all");
    onProvinceChange("all");
    onSearchChange("");
    onSortChange("az");
  };

  return (
    <section className="border-b bg-background py-4" aria-label="Project filters">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
          <Select value={theme} onValueChange={onThemeChange}>
            <SelectTrigger className="w-full sm:w-48" aria-label={t("filters.allThemes")}>
              <SelectValue placeholder={t("filters.allThemes")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("filters.allThemes")}</SelectItem>
              {THEMES.map((th) => (
                <SelectItem key={th} value={th}>{t(`themes.${th}`)}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={province} onValueChange={onProvinceChange}>
            <SelectTrigger className="w-full sm:w-44" aria-label={t("filters.allProvinces")}>
              <SelectValue placeholder={t("filters.allProvinces")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("filters.allProvinces")}</SelectItem>
              {PROVINCES.map((prov) => (
                <SelectItem key={prov} value={prov}>{prov}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sort} onValueChange={(v) => onSortChange(v as SortOrder)}>
            <SelectTrigger className="w-full sm:w-36" aria-label={t("filters.sortLabel")}>
              <SelectValue placeholder={t("filters.sortLabel")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="az">{t("filters.sortAZ")}</SelectItem>
              <SelectItem value="za">{t("filters.sortZA")}</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative flex-1 min-w-[180px]">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
              type="search"
              placeholder={t("filters.searchPlaceholder")}
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9"
              aria-label={t("filters.searchPlaceholder")}
            />
          </div>

          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1 text-muted-foreground" aria-label={t("filters.clearFilters")}>
              <X className="h-3.5 w-3.5" aria-hidden="true" />
              {t("filters.clearFilters")}
            </Button>
          )}
        </div>

        <p className="mt-2 text-sm text-muted-foreground" aria-live="polite">
          {t("filters.resultsCount", { count: resultCount })}
        </p>
      </div>
    </section>
  );
};

export default FilterBar;
