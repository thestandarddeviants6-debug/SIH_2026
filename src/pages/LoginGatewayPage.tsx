import React from "react";
import { Link } from "react-router-dom";
import {
  UserCog,
  ShieldCheck,
  GraduationCap,
  TrendingUp,
  ClipboardCheck,
  Target,
  Route as RouteIcon,
  Users,
  FileBarChart,
  Library,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * /login — role-selection gateway. Replaces the old single email/password
 * form: the person now picks a role first, then lands on that role's own
 * login form (/login/officer or /login/admin).
 */
const LoginGatewayPage: React.FC = () => {
  const { t } = useLanguage();
  const lg = t.loginGateway;

  const officerFeatureIcons = [ClipboardCheck, Target, RouteIcon, TrendingUp];
  const adminFeatureIcons = [Users, ClipboardCheck, Library, FileBarChart];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-skyFaint to-white">
      {/* Subtle tricolour-inspired decorative waves + data motifs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-saffron/5 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-brandGreen/5 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 h-72 w-[32rem] rounded-full bg-brandBlue/5 blur-3xl" />
        <svg className="absolute inset-x-0 top-0 h-24 w-full opacity-40" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0 40 C 300 90, 600 0, 900 40 C 1100 70, 1300 20, 1440 50 L1440 0 L0 0 Z" fill="#F39A28" opacity="0.06" />
          <path d="M0 55 C 300 20, 600 90, 900 55 C 1100 30, 1300 80, 1440 55 L1440 0 L0 0 Z" fill="#079447" opacity="0.06" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        {/* Title block */}
        <div className="animate-fade-slide-up text-center">
          <p className="text-lg font-extrabold text-navy sm:text-xl">
            Karmayogi<span className="bg-gradient-to-r from-brandBlue via-teal to-brandGreen bg-clip-text text-transparent">-StatAI</span>
          </p>
          <h1 className="mt-4 text-[32px] font-extrabold leading-tight text-navy sm:text-[42px]">{lg.welcome}</h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#33507A] sm:text-lg">{lg.subtitle}</p>
        </div>

        {/* Two role cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Statistical Officer — blue theme */}
          <div className="flex flex-col rounded-3xl border border-[#DCE9F7] bg-white p-8 shadow-[0_10px_40px_-15px_rgba(8,43,99,0.15)] transition hover:-translate-y-1 hover:shadow-lg sm:p-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-skyLight">
              <UserCog size={30} className="text-brandBlue" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-extrabold text-navy">{lg.officerTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4C6386]">{lg.officerDescription}</p>

            <ul className="mt-6 flex flex-col gap-3">
              {lg.officerFeatures.map((feature, i) => {
                const Icon = officerFeatureIcons[i];
                return (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-skyLight">
                      <Icon size={15} className="text-brandBlue" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-navy">{feature}</span>
                  </li>
                );
              })}
            </ul>

            <Link
              to="/login/officer"
              className="focus-ring mt-8 flex h-14 items-center justify-center gap-2 rounded-xl bg-brandBlue text-base font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md"
            >
              {lg.officerCta}
            </Link>
          </div>

          {/* Administrator — green theme */}
          <div className="flex flex-col rounded-3xl border border-[#DCEFE0] bg-white p-8 shadow-[0_10px_40px_-15px_rgba(8,43,99,0.15)] transition hover:-translate-y-1 hover:shadow-lg sm:p-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-greenFaint">
              <ShieldCheck size={30} className="text-brandGreen" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-extrabold text-navy">{lg.adminTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4C6386]">{lg.adminDescription}</p>

            <ul className="mt-6 flex flex-col gap-3">
              {lg.adminFeatures.map((feature, i) => {
                const Icon = adminFeatureIcons[i];
                return (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-greenFaint">
                      <Icon size={15} className="text-brandGreen" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-navy">{feature}</span>
                  </li>
                );
              })}
            </ul>

            <Link
              to="/login/admin"
              className="focus-ring mt-8 flex h-14 items-center justify-center gap-2 rounded-xl bg-brandGreen text-base font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md"
            >
              {lg.adminCta}
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-10 text-center">
          <Link to="/" className="focus-ring inline-flex items-center gap-1.5 text-sm font-semibold text-brandBlue hover:underline">
            {lg.backToHome}
          </Link>
        </div>

        {/* Information strip */}
        <div className="mt-14 grid grid-cols-1 gap-8 rounded-3xl border border-[#EAEFF5] bg-white p-8 shadow-sm sm:grid-cols-3 sm:p-10">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-skyLight">
              <ShieldCheck size={20} className="text-brandBlue" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-navy">{lg.infoSecureTitle}</p>
              <p className="mt-1 text-sm text-[#4C6386]">{lg.infoSecureText}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-greenFaint">
              <GraduationCap size={20} className="text-brandGreen" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-navy">{lg.infoOfficerTitle}</p>
              <p className="mt-1 text-sm text-[#4C6386]">{lg.infoOfficerText}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FDF1E2]">
              <ArrowRight size={20} className="text-saffron" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-navy">{lg.infoIndiaTitle}</p>
              <p className="mt-1 text-sm text-[#4C6386]">{lg.infoIndiaText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginGatewayPage;
