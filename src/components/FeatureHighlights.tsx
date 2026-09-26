import React from "react";
import { BarChart3, Target, BookOpen, ClipboardCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const FeatureHighlights: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    { icon: BarChart3, label: t.features.assessSkills, bg: "bg-skyLight", fg: "text-brandBlue" },
    { icon: Target, label: t.features.identifyGaps, bg: "bg-greenFaint", fg: "text-brandGreen" },
    { icon: BookOpen, label: t.features.personalizedLearning, bg: "bg-[#FDF1E2]", fg: "text-saffron" },
    { icon: ClipboardCheck, label: t.features.aiQuizzes, bg: "bg-[#E5F6F5]", fg: "text-teal" },
  ];

  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-4">
      {items.map(({ icon: Icon, label, bg, fg }, i) => (
        <div
          key={label}
          className="flex flex-col items-center gap-2.5 text-center animate-fade-slide-up"
          style={{ animationDelay: `${0.15 + i * 0.08}s` }}
        >
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-full ${bg} transition-transform duration-300 hover:scale-105`}
          >
            <Icon size={24} className={fg} aria-hidden="true" />
          </span>
          <p className="max-w-[110px] text-[13px] font-bold leading-snug text-navy">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureHighlights;
