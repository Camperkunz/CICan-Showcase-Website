import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft, MapPin, User, Sparkles, ExternalLink,
  TreesIcon, Users, Salad, Leaf, Zap, Sun, GraduationCap,
  Trash2, Recycle, Award, Sprout, Heart, Building, Thermometer,
  Bug, Flower, Bird, BarChart3, Droplet, Monitor, Database, DollarSign,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getThemeClasses } from "@/lib/themeColors";
import { THEME_ICON_MAP } from "@/lib/themeIcons";
import projectsData from "@/data/projects.json";
import type { Project } from "@/data/types";

const projects = projectsData as Project[];

const ICON_MAP: Record<string, React.ElementType> = {
  trees: TreesIcon, users: Users, salad: Salad, leaf: Leaf, zap: Zap,
  dollar: DollarSign, sun: Sun, graduationCap: GraduationCap, trash: Trash2,
  recycle: Recycle, award: Award, sprout: Sprout, heart: Heart, mapPin: MapPin,
  building: Building, thermometer: Thermometer, bug: Bug, flower: Flower,
  bird: Bird, barChart: BarChart3, droplet: Droplet, monitor: Monitor,
  database: Database,
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "fr";

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex flex-1 items-center justify-center">
          <p className="text-muted-foreground">Project not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const data = project[lang] ?? project.en;
  const ThemeIcon = THEME_ICON_MAP[project.theme];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Back */}
        <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" asChild className="gap-1.5 text-muted-foreground hover:text-foreground">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {t("detail.back")}
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <img
              src={project.collegeLogoUrl}
              alt={`${data.collegeName} logo`}
              className="h-16 w-16 rounded-xl border bg-muted object-cover"
            />
            <div className="flex-1">
              <Badge className={`mb-3 ${getThemeClasses(project.theme)} border-0 text-xs font-semibold gap-1`}>
                {ThemeIcon && <ThemeIcon className="h-3 w-3" aria-hidden="true" />}
                {t(`themes.${project.theme}`)}
              </Badge>
              <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {data.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {data.address}
                </span>
              </div>

            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <p className="text-base leading-relaxed text-foreground/90">
                {data.description}
              </p>

              {/* Highlights */}
              <section aria-labelledby="highlights-heading">
                <h2 id="highlights-heading" className="mb-4 text-xl font-bold text-foreground">
                  {t("detail.highlights")}
                </h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {data.highlights.map((h, i) => {
                    const Icon = ICON_MAP[h.icon] ?? Sparkles;
                    return (
                      <Card key={i} className="text-center border-primary/10 bg-primary/[0.03]">
                        <CardContent className="p-4">
                          <Icon className="mx-auto mb-2 h-6 w-6 text-primary" aria-hidden="true" />
                          <p className="text-xl font-extrabold text-foreground">{h.value}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{h.label}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>

              {/* Gallery */}
              <section aria-labelledby="gallery-heading">
                <h2 id="gallery-heading" className="mb-4 text-xl font-bold text-foreground">
                  {t("detail.gallery")}
                </h2>
                <div className="space-y-6">
                  {data.photos.map((photo, i) => (
                    <figure key={i}>
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full rounded-lg object-cover"
                        loading="lazy"
                      />
                      <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                        {photo.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <Card>
                <CardContent className="p-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {t("detail.projectLead")}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm font-medium text-foreground">
                      <User className="h-4 w-4 text-primary" aria-hidden="true" />
                      {data.projectLead}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {t("detail.province")}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {project.province}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {t("detail.college")}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {data.collegeName}
                    </p>
                  </div>

                  {project.externalUrl && (
                    <Button variant="outline" size="sm" asChild className="w-full gap-2 mt-2">
                      <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        {t("detail.visitWebsite")}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Future Outlook */}
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-5">
                  <h3 className="mb-2 text-sm font-bold text-primary">
                    {t("detail.futureOutlook")}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {data.futureOutlook}
                  </p>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
