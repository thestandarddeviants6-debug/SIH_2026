import React from "react";
import { Users, BookOpen, BarChart3, GraduationCap } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const StatsStrip: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: "2,450+", label: t.stats.officersLabel },
    { icon: BookOpen, value: "500+", label: t.stats.resourcesLabel },
    { icon: BarChart3, value: "10+", label: t.stats.domainsLabel },
    { icon: GraduationCap, value: t.stats.aiValue, label: t.stats.aiLabel },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-[#E8EEF6]">
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={label} className="flex flex-col items-center gap-2 px-4 text-center sm:first:pl-0 sm:last:pr-0">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-skyLight">
            <Icon size={20} className="text-brandBlue" aria-hidden="true" />
          </span>
          <p className="text-2xl font-extrabold text-navy sm:text-[26px]">{value}</p>
          <p className="max-w-[160px] text-sm font-medium text-[#4C6386]">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsStrip;
