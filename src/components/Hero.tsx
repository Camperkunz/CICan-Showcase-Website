import { useTranslation } from "react-i18next";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { branding } from "@/data/branding";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    document.getElementById("project-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16 py-20 lg:py-20 "
      aria-labelledby="hero-heading"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text */}
          <div>
            <h1
              id="hero-heading"
              className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              {t("hero.title")}
            </h1>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("hero.description")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="default" onClick={scrollToProjects} className="gap-2">
                {t("hero.cta")}
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2">
                <a href={branding.reportUrl} target="_blank" rel="noopener noreferrer" download>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {t("hero.downloadReport")}
                </a>
              </Button>
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative">
            <img
              src="/hero-cican-hand.png"
              alt={t("hero.imageAlt")}
              className="w-full object-cover lg:aspect-auto"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
