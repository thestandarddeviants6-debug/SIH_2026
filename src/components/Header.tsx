import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { LogIn, UserPlus, Menu, X, Landmark } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const NAV_ITEMS: { key: keyof ReturnType<typeof useLanguage>["t"]["nav"]; to: string }[] = [
  { key: "home", to: "/" },
  { key: "about", to: "/about" },
  { key: "features", to: "/features" },
  { key: "howItWorks", to: "/how-it-works" },
  { key: "contact", to: "/contact" },
];

const navLinkClasses = (isActive: boolean) =>
  `focus-ring group relative py-1 text-[15px] font-medium transition-colors ${
    isActive ? "text-brandBlue" : "text-navy/80 hover:text-brandBlue"
  }`;

const navUnderlineClasses = (isActive: boolean) =>
  `absolute -bottom-0.5 left-0 h-[2px] bg-brandBlue transition-all duration-300 ${
    isActive ? "w-full" : "w-0 group-hover:w-full"
  }`;

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#EAEFF5] bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-[78px] max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        {/* Left: emblem + ministry + brand */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-saffron via-white to-brandGreen ring-1 ring-[#E4EEF9]">
            <Landmark size={22} className="text-navy" aria-hidden="true" />
          </div>
          <div className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="truncate text-[13px] font-bold text-navy">
              {t.header.ministryLine1}
            </span>
            <span className="truncate text-[11px] font-medium text-navy/80">
              {t.header.ministryLine2}
            </span>
            <span className="truncate text-[11px] font-medium text-navy/80">
              {t.header.ministryLine3}
            </span>
          </div>

          <div className="hidden h-10 w-px bg-[#E1E8F0] md:block" aria-hidden="true" />

          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brandBlue to-brandGreen text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 20V10M10 20V4M16 20V13M22 20V7" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </span>
            <span className="whitespace-nowrap text-lg font-extrabold text-navy">
              Karmayogi
              <span className="bg-gradient-to-r from-brandBlue via-teal to-brandGreen bg-clip-text text-transparent">
                -StatAI
              </span>
            </span>
          </Link>
        </div>

        {/* Center: nav — real routes, not anchors */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map(({ key, to }) => (
            <NavLink key={key} to={to} end={to === "/"} className={({ isActive }) => navLinkClasses(isActive)}>
              {({ isActive }) => (
                <>
                  {t.nav[key]}
                  <span className={navUnderlineClasses(isActive)} aria-hidden="true" />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right: language + auth navigation */}
        <div className="flex items-center gap-2.5">
          <div className="hidden sm:block">
            <LanguageSelector />
          </div>

          <Link
            to="/login"
            className="focus-ring hidden min-w-[130px] items-center justify-center gap-2 rounded-lg bg-brandBlue px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md md:inline-flex"
          >
            <LogIn size={16} aria-hidden="true" />
            {t.nav.login}
          </Link>
          <Link
            to="/register"
            className="focus-ring hidden min-w-[140px] items-center justify-center gap-2 rounded-lg bg-brandGreen px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md md:inline-flex"
          >
            <UserPlus size={16} aria-hidden="true" />
            {t.nav.register}
          </Link>

          <button
            type="button"
            className="focus-ring inline-flex items-center justify-center rounded-lg p-2 text-navy lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#EAEFF5] bg-white px-4 py-4 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
            {NAV_ITEMS.map(({ key, to }) => (
              <NavLink
                key={key}
                to={to}
                end={to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `focus-ring rounded-md px-2 py-2 text-base font-medium ${
                    isActive ? "bg-skyFaint text-brandBlue" : "text-navy/80"
                  }`
                }
              >
                {t.nav[key]}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between gap-3">
            <LanguageSelector />
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="focus-ring flex items-center justify-center gap-2 rounded-lg bg-brandBlue px-4 py-3 text-sm font-bold text-white"
            >
              <LogIn size={16} /> {t.nav.login}
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileOpen(false)}
              className="focus-ring flex items-center justify-center gap-2 rounded-lg bg-brandGreen px-4 py-3 text-sm font-bold text-white"
            >
              <UserPlus size={16} /> {t.nav.register}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
