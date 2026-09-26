import React from "react";
import { BarChart3, BookOpen, TrendingUp } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Translucent Assess / Learn / Grow panel shown beside the login card on
 * desktop (left column) and below the card on mobile — same content on
 * both the Officer and Administrator login pages.
 */
const LoginInfoPanel: React.FC = () => {
  const { t } = useLanguage();
  const lg = t.loginGateway;

  const items = [
    { icon: BarChart3, title: lg.assessTitle, text: lg.assessText, fg: "text-brandBlue", bg: "bg-skyLight/80" },
    { icon: BookOpen, title: lg.learnTitle, text: lg.learnText, fg: "text-brandGreen", bg: "bg-greenFaint/80" },
    { icon: TrendingUp, title: lg.growTitle, text: lg.growText, fg: "text-saffron", bg: "bg-[#FDF1E2]/80" },
  ];

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-white/60 bg-white/50 p-7 backdrop-blur-sm sm:p-8 lg:sticky lg:top-28">
      {items.map(({ icon: Icon, title, text, fg, bg }) => (
        <div key={title} className="flex items-start gap-4">
          <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${bg}`}>
            <Icon size={20} className={fg} aria-hidden="true" />
          </span>
          <div>
            <p className="text-sm font-bold text-navy">{title}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#4C6386]">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoginInfoPanel;
