import React from "react";
import { Check, X } from "lucide-react";

interface PasswordStrengthProps {
  password: string;
  requirementLabels: [string, string, string, string, string];
  strengthLabel: string;
}

export interface PasswordChecks {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  special: boolean;
}

export function checkPassword(password: string): PasswordChecks {
  return {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };
}

export function isPasswordStrongEnough(password: string): boolean {
  const c = checkPassword(password);
  return c.length && c.uppercase && c.lowercase && c.number && c.special;
}

/**
 * Real-time password requirement checklist plus a segmented strength bar.
 * Requirements are always shown with both a checkmark/cross icon and text
 * (never color alone), so it stays legible for colorblind users too.
 */
const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password, requirementLabels, strengthLabel }) => {
  const checks = checkPassword(password);
  const checkList = [checks.length, checks.uppercase, checks.lowercase, checks.number, checks.special];
  const score = checkList.filter(Boolean).length;

  const barColor = score <= 2 ? "bg-[#DC2626]" : score <= 4 ? "bg-saffron" : "bg-brandGreen";

  return (
    <div className="sm:col-span-2">
      {password.length > 0 && (
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs font-semibold text-[#4C6386]">
            <span>{strengthLabel}</span>
          </div>
          <div className="mt-1.5 flex gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full ${i < score ? barColor : "bg-[#E7EDF5]"}`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      )}
      <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {requirementLabels.map((label, i) => {
          const met = checkList[i];
          return (
            <li key={label} className={`flex items-center gap-1.5 text-xs font-medium ${met ? "text-brandGreen" : "text-[#8AA0BF]"}`}>
              {met ? <Check size={13} aria-hidden="true" /> : <X size={13} aria-hidden="true" />}
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PasswordStrength;
