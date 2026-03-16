import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { branding } from "@/data/branding";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById("project-grid")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/?scrollTo=project-grid");
    }
  };

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "#projects", label: t("nav.projects"), onClick: handleProjectsClick },
    { to: "/about", label: t("nav.about") },
  ];

  return (
    <nav
      className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      role="navigation"
      aria-label={i18n.language === "en" ? "Main navigation" : "Navigation principale"}
    >
      <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="CICan ImpAct-Climate Home">
          <img
            src={branding.logos.cican}
            alt="CICan"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-1">
          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                onClick={link.onClick ?? ((e) => {
                  e.preventDefault();
                  navigate(link.to);
                })}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
                  "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:transition-all after:duration-300",
                  !link.onClick && location.pathname === link.to
                    ? "text-brand-primary after:bg-brand-primary after:scale-x-100"
                    : "text-muted-foreground hover:text-foreground after:bg-brand-primary after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language toggle – always visible */}
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

          {/* Mobile hamburger – visible on md and below */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-1"
            onClick={() => setOpen(true)}
            aria-label={i18n.language === "en" ? "Open menu" : "Ouvrir le menu"}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-72">
          <SheetHeader>
            <SheetTitle className="text-left">{branding.name}</SheetTitle>
          </SheetHeader>
          <div className="mt-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.to}>
                <a
                  href={link.to}
                  onClick={(e) => {
                    if (link.onClick) {
                      link.onClick(e);
                    } else {
                      e.preventDefault();
                      navigate(link.to);
                    }
                    setOpen(false);
                  }}
                  className={cn(
                    "rounded-md px-4 py-3 text-base font-medium transition-colors cursor-pointer",
                    !link.onClick && location.pathname === link.to
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </a>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
