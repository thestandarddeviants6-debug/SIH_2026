import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

/* Shared, reusable settings-page rows — used by both Admin and Officer
   Settings so neither duplicates this UI. */

export const Toggle: React.FC<{ checked: boolean; onChange: (v: boolean) => void; label: string; note?: string }> = ({ checked, onChange, label, note }) => (
  <div className="flex items-center justify-between gap-4 py-3">
    <div>
      <p className="text-sm font-semibold text-navy">{label}</p>
      {note && <p className="mt-0.5 text-xs text-[#8AA0BF]">{note}</p>}
    </div>
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`focus-ring relative h-6 w-11 shrink-0 rounded-full transition ${checked ? "bg-brandGreen" : "bg-[#DCE9F7]"}`}
    >
      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${checked ? "left-[22px]" : "left-0.5"}`} />
    </button>
  </div>
);

export const SelectRow: React.FC<{ label: string; value: string; options: string[]; onChange: (v: string) => void }> = ({ label, value, options, onChange }) => (
  <div className="flex items-center justify-between gap-4 py-3">
    <p className="text-sm font-semibold text-navy">{label}</p>
    <select value={value} onChange={(e) => onChange(e.target.value)} className="rounded-lg border border-[#DCE9F7] bg-white px-3 py-1.5 text-sm text-navy outline-none focus:border-brandBlue">
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

export const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex items-center justify-between gap-4 py-3">
    <p className="text-sm font-semibold text-navy">{label}</p>
    <p className="text-sm text-[#4C6386]">{value}</p>
  </div>
);

export const LinkRow: React.FC<{ label: string; to?: string; href?: string; actionLabel: string }> = ({ label, to, href, actionLabel }) => (
  <div className="flex items-center justify-between gap-4 py-3">
    <p className="text-sm font-semibold text-navy">{label}</p>
    {to ? (
      <Link to={to} className="focus-ring text-sm font-semibold text-brandBlue hover:underline">
        {actionLabel}
      </Link>
    ) : (
      <a href={href} className="focus-ring text-sm font-semibold text-brandBlue hover:underline">
        {actionLabel}
      </a>
    )}
  </div>
);

export const SettingsToast: React.FC<{ message: string | null }> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-navy px-4 py-3 text-sm font-bold text-white shadow-lg">
      <CheckCircle2 size={16} className="text-brandGreen" aria-hidden="true" />
      {message}
    </div>
  );
};
