import React from "react";
import { Link } from "react-router-dom";
import { UserCog, ShieldCheck, ClipboardCheck, Route as RouteIcon, Library, TrendingUp, Users, FileBarChart } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import LoginBackground from "../components/LoginBackground";
import Breadcrumb from "../components/Breadcrumb";

const officerFeatureIcons = [ClipboardCheck, RouteIcon, Library, TrendingUp];
const adminFeatureIcons = [Users, ClipboardCheck, Library, FileBarChart];

/**
 * /register — registration role-selection gateway. Mirrors the visual
 * language of the /login gateway (same background, same card treatment)
 * so the two flows feel like one consistent application.
 */
const RegisterGatewayPage: React.FC = () => {
  const { t } = useLanguage();
  const rg = t.registerGateway;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-skyFaint to-white">
      <LoginBackground />

      <div className="relative mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
        <Breadcrumb current={t.nav.register} />

        <div className="animate-fade-slide-up mt-6 text-center">
          <p className="text-lg font-extrabold text-navy sm:text-xl">
            Karmayogi<span className="bg-gradient-to-r from-brandBlue via-teal to-brandGreen bg-clip-text text-transparent">-StatAI</span>
          </p>
          <h1 className="mt-4 text-[32px] font-extrabold leading-tight text-navy sm:text-[42px]">{rg.heading}</h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#33507A] sm:text-lg">{rg.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col rounded-3xl border border-[#DCE9F7] bg-white p-8 shadow-[0_10px_40px_-15px_rgba(8,43,99,0.15)] transition hover:-translate-y-1 hover:shadow-lg sm:p-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-skyLight">
              <UserCog size={30} className="text-brandBlue" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-extrabold text-navy">{rg.officerTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4C6386]">{rg.officerDescription}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {rg.officerFeatures.map((feature, i) => {
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
              to="/register/officer"
              className="focus-ring mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-brandBlue text-base font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md"
            >
              {rg.officerCta}
            </Link>
          </div>

          <div className="flex flex-col rounded-3xl border border-[#DCEFE0] bg-white p-8 shadow-[0_10px_40px_-15px_rgba(8,43,99,0.15)] transition hover:-translate-y-1 hover:shadow-lg sm:p-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-greenFaint">
              <ShieldCheck size={30} className="text-brandGreen" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl font-extrabold text-navy">{rg.adminTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4C6386]">{rg.adminDescription}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {rg.adminFeatures.map((feature, i) => {
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
              to="/register/administrator"
              className="focus-ring mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-brandGreen text-base font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md"
            >
              {rg.adminCta}
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-[#4C6386]">
          {rg.alreadyHaveAccount}{" "}
          <Link to="/login" className="focus-ring font-semibold text-brandBlue hover:underline">
            {rg.loginLink}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegisterGatewayPage;
