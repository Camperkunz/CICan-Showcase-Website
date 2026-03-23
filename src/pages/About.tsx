import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { branding } from "@/data/branding";

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
            <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground pb-4">
              <p>{t("about.missionP1")}</p>
              <p>{t("about.missionP2")}</p>
              <p>{t("about.missionP3")}</p>
              <p>{t("about.missionP4")}</p>
              <p>{t("about.missionP5")}</p>
              <p>{t("about.missionP6")}</p>
            </div>
            <a
              href={branding.contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
            >
              Learn more about CICan
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
