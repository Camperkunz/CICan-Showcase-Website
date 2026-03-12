import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      role="navigation"
      aria-label={i18n.language === "en" ? "Main navigation" : "Navigation principale"}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2" aria-label="CICan ImpAct-Climate Home">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">CI</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-base font-bold tracking-tight text-foreground">
              {t("nav.title")}
            </span>
            <span className="ml-1.5 text-xs font-medium text-muted-foreground">
              {t("nav.subtitle")}
            </span>
          </div>
        </a>

        <Button
          variant="outline"
          size="sm"
          onClick={toggleLanguage}
          aria-label={
            i18n.language === "en"
              ? "Switch to French"
              : "Passer à l'anglais"
          }
          className="gap-1.5 font-semibold"
        >
          <Globe className="h-4 w-4" aria-hidden="true" />
          {t("nav.lang")}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
