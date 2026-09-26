import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  // "About" / "Features" / "How it Works" / "Contact" / "Privacy Policy" /
  // "Terms of Use" are all real routes now.
  const routedLinks: { label: string; to: string }[] = [
    { label: t.footer.about, to: "/about" },
    { label: t.footer.features, to: "/features" },
    { label: t.footer.howItWorks, to: "/how-it-works" },
    { label: t.footer.contact, to: "/contact" },
    { label: t.footer.privacy, to: "/privacy-policy" },
    { label: t.footer.terms, to: "/terms-of-use" },
  ];

  return (
    <footer className="w-full bg-navy">
      <div className="mx-auto flex min-h-[95px] max-w-content flex-col items-center justify-center gap-4 px-4 py-6 sm:flex-row sm:justify-between sm:gap-6 sm:px-6 lg:px-10">
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
          {routedLinks.map((link, i) => (
            <React.Fragment key={link.label}>
              <Link
                to={link.to}
                className="focus-ring text-sm text-[#D7E3F5] transition hover:text-white"
              >
                {link.label}
              </Link>
              {i < routedLinks.length - 1 && (
                <span className="text-[#4A6491]" aria-hidden="true">
                  |
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <p className="flex items-center gap-2 text-sm font-medium text-[#EAF1FB]">
          {t.footer.statement}
          <span role="img" aria-label="Flag of India">
            🇮🇳
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
