import React from "react";
import { Info, LucideIcon } from "lucide-react";

interface InfoBoxProps {
  text: string;
  icon?: LucideIcon;
  tone?: "info" | "success";
}

/**
 * A small banner for supplementary information (e.g. OTP delivery notes,
 * confirmation messages). Not used for errors — those live inline next to
 * the field they refer to via FormField/OTPInput's own error props.
 */
const InfoBox: React.FC<InfoBoxProps> = ({ text, icon: Icon = Info, tone = "info" }) => {
  const toneClasses = tone === "success" ? "bg-greenFaint text-brandGreen" : "bg-skyLight text-brandBlue";

  return (
    <div className={`flex items-start gap-2.5 rounded-lg px-4 py-3 text-sm ${toneClasses}`}>
      <Icon size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
      <p className="leading-relaxed text-navy/80">{text}</p>
    </div>
  );
};

export default InfoBox;
