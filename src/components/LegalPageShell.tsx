import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import Breadcrumb from "./Breadcrumb";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

interface LegalPageShellProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  disclaimer: string;
}

/**
 * Shared layout for /privacy-policy and /terms-of-use. Reuses the site's
 * existing card/typography language (same heading scale and section-card
 * pattern as About/Contact) rather than introducing a new visual style.
 * Body copy is placeholder/template legal text for this prototype — see
 * the disclaimer rendered at the top — and is not localized per-language,
 * since it is explicitly not an official policy document.
 */
const LegalPageShell: React.FC<LegalPageShellProps> = ({ title, lastUpdated, intro, sections, disclaimer }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <>
      <Breadcrumb current={title} />

      <section className="bg-gradient-to-b from-skyFaint to-white">
        <div className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-[32px] font-extrabold leading-tight text-navy sm:text-[40px]">{title}</h1>
            <p className="mt-2 text-sm font-medium text-[#8AA0BF]">{lastUpdated}</p>

            <div className="mt-5 rounded-xl border border-[#F3D9A8] bg-[#FDF6E8] px-4 py-3.5 text-sm leading-relaxed text-[#7A5A17]">
              {disclaimer}
            </div>

            <p className="mt-6 text-base leading-relaxed text-[#33507A]">{intro}</p>

            <div className="mt-8 flex flex-col gap-8">
              {sections.map((section) => (
                <div key={section.heading} className="rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-extrabold text-navy">{section.heading}</h2>
                  <div className="mt-3 flex flex-col gap-3">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="text-sm leading-relaxed text-[#4C6386]">
                        {p}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-1 flex flex-col gap-2">
                        {section.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#4C6386]">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brandBlue" aria-hidden="true" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="focus-ring flex h-11 items-center justify-center rounded-lg border-2 border-[#DCE9F7] bg-white px-6 text-sm font-bold text-navy transition hover:bg-skyFaint"
              >
                {t.officerWizard.backButton}
              </button>
              <Link
                to="/"
                className="focus-ring flex h-11 items-center justify-center rounded-lg bg-brandBlue px-6 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md"
              >
                {t.loginGateway.backToHome}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPageShell;
