import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { Project } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getThemeClasses } from "@/lib/themeColors";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "fr";
  const data = project[lang] ?? project.en;

  return (
    <Link
      to={`/project/${project.id}`}
      className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
      aria-label={`${t("card.viewProject")}: ${data.title}`}
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-focus-visible:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.previewImageUrl}
            alt={data.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <Badge
            className={`absolute left-3 top-3 ${getThemeClasses(project.theme)} border-0 text-xs font-semibold`}
          >
            {t(`themes.${project.theme}`)}
          </Badge>
        </div>
        <CardContent className="p-4">
          <div className="mb-2 flex items-center gap-2">
            <img
              src={project.collegeLogoUrl}
              alt={`${data.collegeName} logo`}
              className="h-8 w-8 rounded-full border bg-muted object-cover"
              loading="lazy"
            />
            <span className="text-xs font-medium text-muted-foreground">
              {data.collegeName}
            </span>
          </div>
          <h3 className="text-sm font-bold leading-snug text-foreground line-clamp-2 sm:text-base">
            {data.title}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
