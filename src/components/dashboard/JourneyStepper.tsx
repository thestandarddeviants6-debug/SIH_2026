import React from "react";
import { LucideIcon, ArrowRight } from "lucide-react";

export interface JourneyStep {
  label: string;
  icon: LucideIcon;
}

/**
 * A static, illustrative pipeline strip — not a navigation control. Its job
 * is purely to make the platform's underlying concept visible in the UI, as
 * called for by the brief: Competency -> Skill Gap -> Personalized Learning
 * -> Assessment -> Progress for officers, and Workforce Competency -> Skill
 * Gaps -> Training Effectiveness -> Emerging Skills -> Capacity Planning
 * for administrators.
 */
const JourneyStepper: React.FC<{ steps: JourneyStep[] }> = ({ steps }) => (
  <div className="mt-6 flex flex-wrap items-center gap-x-1 gap-y-3 rounded-2xl border border-[#DCE9F7] bg-white/60 px-4 py-3.5 sm:flex-nowrap sm:overflow-x-auto">
    {steps.map((step, i) => {
      const Icon = step.icon;
      return (
        <React.Fragment key={step.label}>
          <div className="flex shrink-0 items-center gap-2 rounded-full bg-skyFaint px-3.5 py-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brandBlue text-[11px] font-extrabold text-white">{i + 1}</span>
            <Icon size={15} className="shrink-0 text-brandBlue" aria-hidden="true" />
            <span className="whitespace-nowrap text-xs font-bold text-navy">{step.label}</span>
          </div>
          {i < steps.length - 1 && <ArrowRight size={16} className="mx-1 shrink-0 text-[#B7C6DC]" aria-hidden="true" />}
        </React.Fragment>
      );
    })}
  </div>
);

export default JourneyStepper;
