import React from "react";
import {
  UserPlus,
  ClipboardCheck,
  Target,
  Route,
  BookOpen,
  RotateCcw,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import Breadcrumb from "../components/Breadcrumb";

const STEP_ICONS = [UserPlus, ClipboardCheck, Target, Route, BookOpen, RotateCcw, TrendingUp];

const HowItWorksPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <Breadcrumb current={t.nav.howItWorks} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-skyFaint to-white">
        <div className="mx-auto max-w-content px-4 py-16 text-center sm:px-6 lg:px-10 lg:py-20">
          <h1 className="animate-fade-slide-up text-[36px] font-extrabold leading-tight text-navy sm:text-[48px]">
            {t.howItWorksPage.heroTitle}
          </h1>
          <p
            className="animate-fade-slide-up mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#33507A] sm:text-lg"
            style={{ animationDelay: "0.08s" }}
          >
            {t.howItWorksPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Quick horizontal step overview */}
      <section className="mx-auto max-w-content px-4 py-12 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-start justify-center gap-4">
          {t.howItWorksPage.quickSteps.map((step, i) => {
            const Icon = STEP_ICONS[i % STEP_ICONS.length];
            return (
              <React.Fragment key={step.title}>
                <div className="flex w-32 flex-col items-center gap-2 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-skyLight">
                    <Icon size={22} className="text-brandBlue" aria-hidden="true" />
                  </span>
                  <p className="text-xs font-bold leading-snug text-navy">{step.title}</p>
                </div>
                {i < t.howItWorksPage.quickSteps.length - 1 && (
                  <ArrowRight size={16} className="mt-5 hidden shrink-0 text-navy/20 sm:block" aria-hidden="true" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* Step-by-step detailed cards */}
      <section className="mx-auto max-w-content px-4 py-8 sm:px-6 lg:px-10">
        <h2 className="text-center text-2xl font-extrabold text-navy sm:text-[28px]">
          {t.howItWorksPage.stepByStepHeading}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.howItWorksPage.quickSteps.map((step, i) => {
            const Icon = STEP_ICONS[i % STEP_ICONS.length];
            return (
              <div
                key={step.title}
                className="flex flex-col gap-3 rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-skyLight text-sm font-extrabold text-brandBlue">
                    {i + 1}
                  </span>
                  <Icon size={20} className="text-brandBlue" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-navy">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#4C6386]">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Continuous learning cycle */}
      <section className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-[#EAEFF5] bg-navy px-6 py-12 text-center sm:px-10">
          <h2 className="text-2xl font-extrabold text-white sm:text-[28px]">
            {t.howItWorksPage.cycleHeading}
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {t.howItWorksPage.cycleSteps.map((step, i) => (
              <React.Fragment key={step}>
                <div className="rounded-full bg-white/10 px-6 py-3 text-base font-bold text-white">
                  {step}
                </div>
                {i < t.howItWorksPage.cycleSteps.length - 1 && (
                  <ArrowRight size={20} className="text-white/40" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="mt-8 text-base font-semibold text-brandGreen">
            {t.howItWorksPage.cycleFooter}
          </p>
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;
