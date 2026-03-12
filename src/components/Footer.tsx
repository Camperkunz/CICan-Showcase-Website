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
            <div className="flex h-10 w-24 items-center justify-center rounded border border-[hsl(var(--footer-muted)/0.3)] bg-[hsl(var(--footer-muted)/0.1)]">
              <span className="text-xs font-bold text-[hsl(var(--footer-foreground))]">CICan</span>
            </div>
            <div className="flex h-10 w-24 items-center justify-center rounded border border-[hsl(var(--footer-muted)/0.3)] bg-[hsl(var(--footer-muted)/0.1)]">
              <span className="text-xs font-bold text-[hsl(var(--footer-foreground))]">Your Logo</span>
            </div>
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
