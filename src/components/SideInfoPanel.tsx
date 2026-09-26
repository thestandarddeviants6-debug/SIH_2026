import React from "react";
import { BarChart3, BookOpen, TrendingUp, Users, LineChart, ShieldCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

interface SideInfoPanelProps {
  variant: "officer" | "admin";
}

/**
 * Left-column informational panel shown on registration pages: a short
 * stacked kicker ("Data / People / Policy / Impact"), a headline, and a
 * translucent card of three points — Assess/Learn/Grow for officers,
 * Manage/Monitor/Strengthen for administrators.
 */
const SideInfoPanel: React.FC<SideInfoPanelProps> = ({ variant }) => {
  const { t } = useLanguage();
  const sp = t.sidePanel;

  const officerItems = [
    { icon: BarChart3, title: sp.assessTitle, text: sp.assessText, fg: "text-brandBlue", bg: "bg-skyLight/80" },
    { icon: BookOpen, title: sp.learnTitle, text: sp.learnText, fg: "text-brandGreen", bg: "bg-greenFaint/80" },
    { icon: TrendingUp, title: sp.growTitle, text: sp.growText, fg: "text-saffron", bg: "bg-[#FDF1E2]/80" },
  ];
  const adminItems = [
    { icon: Users, title: sp.manageTitle, text: sp.manageText, fg: "text-brandBlue", bg: "bg-skyLight/80" },
    { icon: LineChart, title: sp.monitorTitle, text: sp.monitorText, fg: "text-brandGreen", bg: "bg-greenFaint/80" },
    { icon: ShieldCheck, title: sp.strengthenTitle, text: sp.strengthenText, fg: "text-saffron", bg: "bg-[#FDF1E2]/80" },
  ];
  const items = variant === "officer" ? officerItems : adminItems;

  return (
    <div className="flex flex-col gap-6 lg:sticky lg:top-28">
      <div className="hidden lg:block">
        <p className="text-2xl font-extrabold leading-tight text-navy/70">
          {sp.words.join(" · ")}
        </p>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight text-navy">{sp.headline}</h2>
      </div>

      <div className="flex flex-col gap-6 rounded-3xl border border-white/60 bg-white/50 p-7 backdrop-blur-sm sm:p-8">
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
    </div>
  );
};

export default SideInfoPanel;
