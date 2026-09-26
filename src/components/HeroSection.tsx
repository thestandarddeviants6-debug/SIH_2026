import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, UserPlus } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import FeatureHighlights from "./FeatureHighlights";
import HeroIllustration from "./HeroIllustration";

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-skyFaint to-white"
    >
      {/* Decorative Indian-inspired flowing shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-saffron/5 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-80 w-80 rounded-full bg-brandGreen/5 blur-3xl" />
        <div className="absolute left-1/3 -bottom-24 h-72 w-[32rem] rounded-full bg-brandBlue/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[48%_52%] lg:gap-8 lg:px-10 lg:py-20 min-h-0 lg:min-h-[730px]">
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <p className="animate-fade-slide-up inline-flex max-w-full items-center rounded-full bg-skyLight px-4 py-2 text-xs font-semibold text-navy sm:text-sm">
            {t.hero.pill}
          </p>

          <h1
            className="animate-fade-slide-up mt-6 text-[42px] font-extrabold leading-[1.08] sm:text-[56px] lg:text-[68px]"
            style={{ animationDelay: "0.08s" }}
          >
            <span className="text-navy">Karmayogi</span>
            <span className="bg-gradient-to-r from-brandBlue via-teal to-brandGreen bg-clip-text text-transparent">
              -StatAI
            </span>
          </h1>

          <h2
            className="animate-fade-slide-up mt-4 text-xl font-bold leading-snug text-navy sm:text-2xl lg:text-[28px]"
            style={{ animationDelay: "0.14s" }}
          >
            {t.hero.subheadingLine1}
            <br />
            {t.hero.subheadingLine2}
          </h2>

          <p
            className="animate-fade-slide-up mt-5 max-w-xl text-base leading-relaxed text-[#33507A] sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            {t.hero.description}
          </p>

          <div
            className="animate-fade-slide-up mt-8 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "0.26s" }}
          >
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="focus-ring flex h-16 w-full items-center justify-center gap-2 rounded-xl bg-brandGreen px-8 text-base font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg sm:w-[295px]"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="focus-ring flex h-16 w-full items-center justify-center gap-2 rounded-xl border-2 border-brandBlue bg-white px-8 text-base font-bold text-brandBlue transition hover:-translate-y-0.5 hover:bg-skyFaint sm:w-[260px]"
            >
              <UserPlus size={20} aria-hidden="true" />
              {t.hero.ctaSecondary}
            </button>
          </div>

          <div className="mt-12">
            <FeatureHighlights />
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          className="animate-fade-in order-1 mx-auto w-full max-w-[560px] lg:order-2 lg:max-w-none"
          style={{ animationDelay: "0.15s" }}
        >
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
