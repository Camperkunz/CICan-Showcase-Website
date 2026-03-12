import { useTranslation } from "react-i18next";
import { Leaf } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

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

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur">
            <Leaf className="h-4 w-4" aria-hidden="true" />
            CICan
          </div>
          <h1
            id="hero-heading"
            className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {t("hero.title")}
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("hero.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
