import React from "react";
import {
  ClipboardCheck,
  Target,
  BookOpen,
  HelpCircle,
  TrendingUp,
  Library,
  Route,
  Award,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import Breadcrumb from "../components/Breadcrumb";

const CARD_STYLES = [
  { icon: ClipboardCheck, bg: "bg-[#EAF6FF]", fg: "text-[#0878D1]", dot: "bg-[#0878D1]", ring: "hover:border-[#0878D1]/30" },
  { icon: Target, bg: "bg-[#EAF9F0]", fg: "text-[#079447]", dot: "bg-[#079447]", ring: "hover:border-[#079447]/30" },
  { icon: BookOpen, bg: "bg-[#FDF1E2]", fg: "text-[#F39A28]", dot: "bg-[#F39A28]", ring: "hover:border-[#F39A28]/30" },
  { icon: HelpCircle, bg: "bg-[#F3EAFE]", fg: "text-[#7C3AED]", dot: "bg-[#7C3AED]", ring: "hover:border-[#7C3AED]/30" },
  { icon: TrendingUp, bg: "bg-[#FCE8F3]", fg: "text-[#DB2777]", dot: "bg-[#DB2777]", ring: "hover:border-[#DB2777]/30" },
  { icon: Library, bg: "bg-[#E5F6F5]", fg: "text-[#008A86]", dot: "bg-[#008A86]", ring: "hover:border-[#008A86]/30" },
  { icon: Route, bg: "bg-[#EEF0FE]", fg: "text-[#4F46E5]", dot: "bg-[#4F46E5]", ring: "hover:border-[#4F46E5]/30" },
  { icon: Award, bg: "bg-[#FDEAEA]", fg: "text-[#DC2626]", dot: "bg-[#DC2626]", ring: "hover:border-[#DC2626]/30" },
];

const FeaturesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <Breadcrumb current={t.nav.features} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-skyFaint to-white">
        <div className="mx-auto max-w-content px-4 py-16 text-center sm:px-6 lg:px-10 lg:py-20">
          <h1 className="animate-fade-slide-up text-[36px] font-extrabold leading-tight text-navy sm:text-[48px]">
            {t.featuresPage.heroTitle}
          </h1>
          <p
            className="animate-fade-slide-up mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#33507A] sm:text-lg"
            style={{ animationDelay: "0.08s" }}
          >
            {t.featuresPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* 8 feature cards */}
      <section className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.featuresPage.cards.map((card, i) => {
            const { icon: Icon, bg, fg, dot, ring } = CARD_STYLES[i % CARD_STYLES.length];
            return (
              <div
                key={card.title}
                className={`flex flex-col gap-4 rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${ring}`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-full ${bg}`}>
                  <Icon size={22} className={fg} aria-hidden="true" />
                </span>
                <h3 className="text-base font-bold text-navy">{card.title}</h3>
                <p className="text-sm leading-relaxed text-[#4C6386]">{card.description}</p>
                <ul className="mt-1 flex flex-col gap-1.5">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-xs font-medium text-navy/80">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Integrated platform process flow */}
      <section className="mx-auto max-w-content px-4 pb-16 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-[#EAEFF5] bg-navy px-6 py-12 text-center sm:px-10">
          <h2 className="text-2xl font-extrabold text-white sm:text-[28px]">
            {t.featuresPage.integratedHeading1}
            <br />
            {t.featuresPage.integratedHeading2}
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {t.featuresPage.process.map((step, i) => (
              <React.Fragment key={step}>
                <div className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white">
                  {step}
                </div>
                {i < t.featuresPage.process.length - 1 && (
                  <ArrowRight size={18} className="text-white/40" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;
