import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t bg-muted/30 py-8" role="contentinfo">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs text-muted-foreground">
          {t("footer.initiative")}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
