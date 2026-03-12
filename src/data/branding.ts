/**
 * Centralized branding configuration.
 * Navbar, Footer, and other components should import from here
 * instead of hardcoding logos, labels, or contact info.
 */

export const branding = {
  /** Organisation / programme name */
  name: "ImpAct-Climate",

  logos: {
    /** CICan logo displayed in the navbar and footer */
    cican: "/logos/logo-cican.webp",
    /** Partner / company logo */
    partner: "/logos/logo-slide.svg",
  },

  /** Navigation-bar labels (i18n keys) */
  nav: {
    titleKey: "nav.title",
    subtitleKey: "nav.subtitle",
  },

  /** Contact & social links */
  contact: {
    email: "info@collegesinstitutes.ca",
    website: "https://www.collegesinstitutes.ca",
    social: {
      twitter: "https://twitter.com/CICan",
      linkedin: "https://www.linkedin.com/company/cican",
      facebook: "https://www.facebook.com/CICan",
    },
  },

  /** Single global report PDF */
  reportUrl: "/reports/impact-climate-report.pdf",

  /** Footer navigation (i18n keys) */
  footerLinks: [
    { to: "/", labelKey: "footer.home" },
    { to: "/about", labelKey: "footer.about" },
  ],
} as const;
