import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { branding } from "@/config/branding";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-foreground))]" role="contentinfo">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logos from branding config */}
          <div className="flex items-center gap-6">
            <img
              src={branding.logos.cican}
              alt="CICan"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <img
              src={branding.logos.partner}
              alt="Partner"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </div>

          {/* Navigation links from branding config */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6">
              {branding.footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[hsl(var(--footer-muted))] transition-colors hover:text-[hsl(var(--footer-foreground))]"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[hsl(var(--footer-muted)/0.2)]">
        <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[hsl(var(--footer-muted))]">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
