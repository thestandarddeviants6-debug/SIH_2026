import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

interface BreadcrumbTrailItem {
  label: string;
  to: string;
}

interface BreadcrumbProps {
  current: string;
  /**
   * Optional intermediate, clickable segments rendered between "Home" and
   * the current page — e.g. [{ label: "Register", to: "/register" }] for
   * "Home > Register > Administrator". Omit for a plain "Home > <current>".
   */
  trail?: BreadcrumbTrailItem[];
}

/**
 * Breadcrumb shown at the top of every internal page: "Home > <current>",
 * or "Home > ...trail > <current>" when intermediate segments are given.
 * Every segment except the final (current) one is a real navigable Link —
 * never a scroll, and never rendered from a value that could be undefined.
 */
const Breadcrumb: React.FC<BreadcrumbProps> = ({ current, trail = [] }) => {
  const { t } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-4 pt-6 sm:px-6 lg:px-10">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#4C6386]">
        <li>
          <Link to="/" className="focus-ring font-medium hover:text-brandBlue">
            {t.breadcrumb.home}
          </Link>
        </li>
        {trail.map((item) => (
          <React.Fragment key={item.to}>
            <li aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li>
              <Link to={item.to} className="focus-ring font-medium hover:text-brandBlue">
                {item.label}
              </Link>
            </li>
          </React.Fragment>
        ))}
        <li aria-hidden="true">
          <ChevronRight size={14} />
        </li>
        <li aria-current="page" className="font-semibold text-navy">
          {current}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
