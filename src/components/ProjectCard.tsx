import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getThemeClasses } from "@/lib/themeColors";
import { THEME_ICON_MAP } from "@/lib/themeIcons";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "fr";
  const data = project[lang] ?? project.en;
  const ThemeIcon = THEME_ICON_MAP[project.theme];

  return (
    <Link
      to={`/project/${project.id}`}
      className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
      aria-label={`${t("card.viewProject")}: ${data.title}`}
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:shadow-primary/10 group-focus-visible:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.previewImageUrl}
            alt={data.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <Badge
            className={`absolute left-3 top-3 ${getThemeClasses(project.theme)} border-0 text-xs font-semibold gap-1`}
          >
            {ThemeIcon && <ThemeIcon className="h-3 w-3" aria-hidden="true" />}
            {t(`themes.${project.theme}`)}
          </Badge>
        </div>
        <CardContent className="flex flex-col gap-3 p-4">
          <div className="flex-col items-center gap-2">
            <img
              src={project.collegeLogoUrl}
              alt={`${data.collegeName} logo`}
              className="w-48"
              loading="lazy"
            />
            <span className="text-xs font-medium text-muted-foreground">
              {data.collegeName}
            </span>
          </div>
          <h3 className="text-sm font-bold leading-snug text-foreground line-clamp-2 sm:text-base">
            {data.title}
          </h3>
          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {data.previewDescription}
          </p>
          <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors group-hover:text-primary/80">
            {t("card.readReport")}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
