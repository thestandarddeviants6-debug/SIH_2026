import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

interface LoginBreadcrumbProps {
  roleLabel: string;
}

/**
 * "Home > Login > <Role>" breadcrumb pill for /login/officer and
 * /login/admin. Home and Login are real navigation (never scroll-based);
 * the role segment is the current page.
 */
const LoginBreadcrumb: React.FC<LoginBreadcrumbProps> = ({ roleLabel }) => {
  const { t } = useLanguage();
  const lg = t.loginGateway;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-medium text-[#4C6386] backdrop-blur-sm sm:text-sm">
        <li>
          <Link to="/" className="focus-ring font-semibold hover:text-brandBlue">
            {t.breadcrumb.home}
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight size={13} />
        </li>
        <li>
          <Link to="/login" className="focus-ring font-semibold hover:text-brandBlue">
            {lg.breadcrumbLogin}
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight size={13} />
        </li>
        <li aria-current="page" className="font-semibold text-navy">
          {roleLabel}
        </li>
      </ol>
    </nav>
  );
};

export default LoginBreadcrumb;
