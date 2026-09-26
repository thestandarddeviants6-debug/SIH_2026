import React from "react";
import { Check } from "lucide-react";

interface ProgressStepperProps {
  steps: string[];
  currentStep: number;
}

/**
 * Numbered step indicator: the active step is blue, completed steps show a
 * checkmark, future steps stay gray. currentStep is 1-indexed.
 */
const ProgressStepper: React.FC<ProgressStepperProps> = ({ steps, currentStep }) => {
  return (
    <ol className="flex items-start justify-between gap-1 sm:gap-2" aria-label="Registration progress">
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === currentStep;
        const isDone = stepNum < currentStep;
        return (
          <li key={label} className="flex flex-1 flex-col items-center gap-1.5 text-center">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold sm:h-9 sm:w-9 ${
                isDone
                  ? "bg-brandGreen text-white"
                  : isActive
                  ? "bg-brandBlue text-white"
                  : "bg-[#EAEFF5] text-[#8AA0BF]"
              }`}
              aria-current={isActive ? "step" : undefined}
            >
              {isDone ? <Check size={15} aria-hidden="true" /> : stepNum}
            </span>
            <span className={`hidden text-xs font-semibold sm:block ${isActive ? "text-navy" : "text-[#8AA0BF]"}`}>
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
};

export default ProgressStepper;
