import React from "react";
import { LucideIcon } from "lucide-react";

/**
 * Small, shared building blocks for both dashboards. Kept in one file
 * deliberately — these are simple, closely related pieces reused across
 * many sections, and the existing site has no charting library installed,
 * so bar-style visuals here are plain CSS/SVG rather than a new dependency.
 */

type Accent = "blue" | "green" | "teal" | "saffron";

const accentClasses: Record<Accent, { bg: string; text: string; bar: string }> = {
  blue: { bg: "bg-skyLight", text: "text-brandBlue", bar: "bg-brandBlue" },
  green: { bg: "bg-greenFaint", text: "text-brandGreen", bar: "bg-brandGreen" },
  teal: { bg: "bg-[#E3F6F5]", text: "text-teal", bar: "bg-teal" },
  saffron: { bg: "bg-[#FDF1E2]", text: "text-saffron", bar: "bg-saffron" },
};

/* ---------------------------- StatCard ---------------------------- */
export const StatCard: React.FC<{
  icon: LucideIcon;
  label: string;
  value: string | number;
  accent?: Accent;
}> = ({ icon: Icon, label, value, accent = "blue" }) => {
  const a = accentClasses[accent];
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#EAEFF5] bg-white p-5 shadow-sm">
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${a.bg}`}>
        <Icon size={22} className={a.text} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-2xl font-extrabold text-navy">{value}</p>
        <p className="truncate text-sm font-medium text-[#4C6386]">{label}</p>
      </div>
    </div>
  );
};

/* --------------------------- SectionCard --------------------------- */
export const SectionCard: React.FC<{
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}> = ({ title, subtitle, action, children, className = "" }) => (
  <div className={`rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm ${className}`}>
    <div className="flex items-start justify-between gap-3">
      <div>
        <h2 className="text-base font-extrabold text-navy">{title}</h2>
        {subtitle && <p className="mt-0.5 text-sm text-[#4C6386]">{subtitle}</p>}
      </div>
      {action}
    </div>
    <div className="mt-4">{children}</div>
  </div>
);

/* --------------------------- ProgressBar --------------------------- */
export const ProgressBar: React.FC<{ value: number; accent?: Accent }> = ({ value, accent = "blue" }) => {
  const a = accentClasses[accent];
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-[#EAEFF5]" role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
      <div className={`h-full rounded-full ${a.bar}`} style={{ width: `${clamped}%` }} />
    </div>
  );
};

/* ------------------------------ Badge ------------------------------ */
const badgeTones: Record<string, string> = {
  danger: "bg-[#FDEAEA] text-[#B42318]",
  warning: "bg-[#FDF1E2] text-[#9A5B0A]",
  success: "bg-greenFaint text-brandGreen",
  info: "bg-skyLight text-brandBlue",
  neutral: "bg-[#F1F4F9] text-[#4C6386]",
};

export const Badge: React.FC<{ label: string; tone?: keyof typeof badgeTones }> = ({ label, tone = "neutral" }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${badgeTones[tone]}`}>{label}</span>
);

/* ----------------------------- BarList ----------------------------- */
export const BarList: React.FC<{
  items: { label: string; value: number; suffix?: string }[];
  accent?: Accent;
}> = ({ items, accent = "blue" }) => (
  <ul className="flex flex-col gap-4">
    {items.map((item) => (
      <li key={item.label}>
        <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
          <span className="font-semibold text-navy">{item.label}</span>
          <span className="shrink-0 text-[#4C6386]">{item.suffix ?? `${item.value}%`}</span>
        </div>
        <ProgressBar value={item.value} accent={accent} />
      </li>
    ))}
  </ul>
);

/* ----------------------------- DataTable ---------------------------- */
export interface DataTableColumn {
  key: string;
  label: string;
}

export const DataTable: React.FC<{
  columns: DataTableColumn[];
  rows: Record<string, React.ReactNode>[];
}> = ({ columns, rows }) => (
  <div className="-mx-2 overflow-x-auto">
    <table className="w-full min-w-[520px] border-collapse text-left text-sm">
      <thead>
        <tr className="border-b border-[#EAEFF5] text-xs font-bold uppercase tracking-wide text-[#8AA0BF]">
          {columns.map((col) => (
            <th key={col.key} className="px-2 py-2.5 font-bold">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-[#F1F4F9] last:border-0">
            {columns.map((col) => (
              <td key={col.key} className="px-2 py-3 text-navy">
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
