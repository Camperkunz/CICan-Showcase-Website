import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
  ];

  return (
    <nav
      className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      role="navigation"
      aria-label={i18n.language === "en" ? "Main navigation" : "Navigation principale"}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" aria-label="CICan ImpAct-Climate Home">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">CI</span>
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight text-foreground">
              {t("nav.title")}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              {t("nav.subtitle")}
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-1">
          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:transition-all after:duration-300",
                  location.pathname === link.to
                    ? "text-primary after:bg-primary after:scale-x-100"
                    : "text-muted-foreground hover:text-foreground after:bg-primary after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            aria-label={
              i18n.language === "en"
                ? "Switch to French"
                : "Passer à l'anglais"
            }
            className="ml-2 gap-1.5 font-semibold"
          >
            <Globe className="h-4 w-4" aria-hidden="true" />
            {t("nav.lang")}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
