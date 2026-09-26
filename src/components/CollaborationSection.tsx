import React from "react";
import { Landmark, GraduationCap, School } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const CollaborationSection: React.FC = () => {
  const { t } = useLanguage();

  const orgs = [
    {
      icon: Landmark,
      name: t.collaboration.mospiName,
      lines: [t.collaboration.mospiDesc1, t.collaboration.mospiDesc2],
    },
    {
      icon: GraduationCap,
      name: t.collaboration.igotName,
      lines: [],
    },
    {
      icon: School,
      name: t.collaboration.nsstaName,
      lines: [t.collaboration.nsstaDesc],
    },
  ];

  return (
    <div className="flex flex-col gap-5 border-t border-[#E8EEF6] pt-8 sm:border-t-0 sm:border-l sm:pl-10 sm:pt-0">
      <p className="text-sm font-bold uppercase tracking-wide text-navy/70 sm:normal-case sm:tracking-normal">
        {t.collaboration.heading}
      </p>
      <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-8">
        {orgs.map(({ icon: Icon, name, lines }) => (
          <div key={name} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#E1E8F0] bg-white">
              <Icon size={20} className="text-navy" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-navy">{name}</p>
              {lines.map((line) => (
                <p key={line} className="text-[11px] text-[#4C6386]">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationSection;
