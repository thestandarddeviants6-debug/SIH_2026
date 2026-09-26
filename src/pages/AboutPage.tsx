import React from "react";
import { Users, Cpu, Target as TargetIcon, LifeBuoy, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import Breadcrumb from "../components/Breadcrumb";
import HeroIllustration from "../components/HeroIllustration";

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Users, title: t.aboutPage.cardWhoTitle, text: t.aboutPage.cardWhoText, bg: "bg-skyLight", fg: "text-brandBlue" },
    { icon: Cpu, title: t.aboutPage.cardWhatTitle, text: t.aboutPage.cardWhatText, bg: "bg-greenFaint", fg: "text-brandGreen" },
    { icon: TargetIcon, title: t.aboutPage.cardWhyTitle, text: t.aboutPage.cardWhyText, bg: "bg-[#FDF1E2]", fg: "text-saffron" },
    { icon: LifeBuoy, title: t.aboutPage.cardHowTitle, text: t.aboutPage.cardHowText, bg: "bg-[#E5F6F5]", fg: "text-teal" },
  ];

  return (
    <>
      <Breadcrumb current={t.nav.about} />

      {/* Hero / banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-skyFaint to-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brandBlue/5 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-brandGreen/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-content px-4 py-16 text-center sm:px-6 lg:px-10 lg:py-20">
          <h1 className="animate-fade-slide-up text-[36px] font-extrabold leading-tight text-navy sm:text-[48px]">
            {t.aboutPage.heroTitle}
          </h1>
          <p
            className="animate-fade-slide-up mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#33507A] sm:text-lg"
            style={{ animationDelay: "0.08s" }}
          >
            {t.aboutPage.heroDescription}
          </p>
        </div>
      </section>

      {/* Overview + Key Objectives */}
      <section className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-navy sm:text-[28px]">{t.aboutPage.overviewHeading}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#33507A]">
              {t.aboutPage.overviewText}
            </p>
          </div>
          <div className="rounded-2xl border border-[#EAEFF5] bg-skyFaint p-7">
            <h2 className="text-xl font-extrabold text-navy">{t.aboutPage.objectivesHeading}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {t.aboutPage.objectives.map((obj) => (
                <li key={obj} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brandGreen" aria-hidden="true" />
                  <span className="text-sm font-medium leading-relaxed text-navy">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Four information cards */}
      <section className="mx-auto max-w-content px-4 pb-14 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text, bg, fg }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-full ${bg}`}>
                <Icon size={22} className={fg} aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-navy">{title}</h3>
              <p className="text-sm leading-relaxed text-[#4C6386]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About the Initiative */}
      <section className="mx-auto max-w-content px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 rounded-3xl border border-[#EAEFF5] bg-skyFaint p-8 lg:grid-cols-2 lg:p-12">
          <div className="order-2 lg:order-1">
            <HeroIllustration />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-extrabold text-navy sm:text-[28px]">
              {t.aboutPage.initiativeHeading}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[#33507A]">
              {t.aboutPage.initiativeText}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
