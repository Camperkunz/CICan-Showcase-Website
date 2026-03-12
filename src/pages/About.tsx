import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PARTNER_PLACEHOLDERS = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Partner ${i + 1}`,
}));

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-primary py-20 sm:py-28" aria-labelledby="about-hero-heading">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h1
            id="about-hero-heading"
            className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl"
          >
            {t("about.heroTitle")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
            {t("about.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <main className="flex-1">
        <section className="py-16 sm:py-24" aria-labelledby="mission-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2
              id="mission-heading"
              className="mb-8 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
            >
              {t("about.missionTitle")}
            </h2>
            <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>{t("about.missionP1")}</p>
              <p>{t("about.missionP2")}</p>
              <p>{t("about.missionP3")}</p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="border-t bg-muted/30 py-16 sm:py-24" aria-labelledby="partners-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                id="partners-heading"
                className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
              >
                {t("about.partnersTitle")}
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                {t("about.partnersSubtitle")}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {PARTNER_PLACEHOLDERS.map((partner) => (
                <div
                  key={partner.id}
                  className="flex h-24 items-center justify-center rounded-lg border bg-card text-sm font-medium text-muted-foreground"
                >
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
