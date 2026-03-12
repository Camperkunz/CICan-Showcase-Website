import { useTranslation } from "react-i18next";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    document.getElementById("project-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30 py-16 sm:py-24"
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
            <Button size="lg" onClick={scrollToProjects} className="gap-2">
              {t("hero.cta")}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          {/* Right — Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=600&fit=crop"
              alt={t("hero.imageAlt")}
              className="w-full rounded-2xl object-cover shadow-lg lg:aspect-[4/3]"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
