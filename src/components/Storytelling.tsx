import { useTranslation } from "react-i18next";

const Storytelling = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-muted/40 py-16 sm:py-24" aria-labelledby="storytelling-heading">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left — Narrative */}
          <div>
            <h2
              id="storytelling-heading"
              className="mb-6 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
            >
              {t("storytelling.headline")}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>{t("storytelling.paragraph1")}</p>
              <p>{t("storytelling.paragraph2")}</p>
              <p>{t("storytelling.paragraph3")}</p>
            </div>
          </div>

          {/* Right — Quote / Impact */}
          <div className="flex flex-col justify-center">
            <blockquote className="rounded-2xl border-l-4 border-primary bg-card p-8 shadow-sm">
              <p className="text-lg font-medium italic leading-relaxed text-foreground">
                {t("storytelling.quote")}
              </p>
              <footer className="mt-4 text-sm font-medium text-muted-foreground">
                {t("storytelling.quoteAuthor")}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
