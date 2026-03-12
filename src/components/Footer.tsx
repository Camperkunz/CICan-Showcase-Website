import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-foreground))]" role="contentinfo">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-xs font-bold text-primary-foreground">CI</span>
              </div>
              <span className="text-sm font-bold">{t("nav.title")}</span>
            </div>
            <p className="text-sm leading-relaxed text-[hsl(var(--footer-muted))]">
              {t("footer.aboutSnippet")}
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: t("footer.home") },
                { to: "/#project-grid", label: t("footer.projects") },
                { to: "/about", label: t("footer.about") },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[hsl(var(--footer-muted))] transition-colors hover:text-[hsl(var(--footer-foreground))]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Connect */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">
              {t("footer.connect")}
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "#", label: t("footer.contactUs") },
                { href: "#", label: t("footer.twitter") },
                { href: "#", label: t("footer.linkedin") },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[hsl(var(--footer-muted))] transition-colors hover:text-[hsl(var(--footer-foreground))]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Initiative */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide">
              {t("footer.initiative")}
            </h3>
            <p className="text-sm leading-relaxed text-[hsl(var(--footer-muted))]">
              {t("footer.bilingual")}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[hsl(var(--footer-muted)/0.2)]">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-[hsl(var(--footer-muted))]">
            {t("footer.copyright")}
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-[hsl(var(--footer-muted))] hover:text-[hsl(var(--footer-foreground))] transition-colors">
              {t("footer.privacyPolicy")}
            </a>
            <a href="#" className="text-xs text-[hsl(var(--footer-muted))] hover:text-[hsl(var(--footer-foreground))] transition-colors">
              {t("footer.termsOfUse")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
