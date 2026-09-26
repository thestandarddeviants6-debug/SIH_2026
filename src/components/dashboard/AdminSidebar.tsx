import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Building2,
  BarChart3,
  TrendingDown,
  TrendingUp,
  Rocket,
  BookOpen,
  Library,
  Landmark,
  Sparkles,
  ClipboardCheck,
  BarChart2,
  ListChecks,
  HelpCircle,
  FileText,
  Settings,
  LogOut,
  LucideIcon,
} from "lucide-react";

export type AdminSection =
  | "dashboard"
  | "officers"
  | "pending"
  | "departments"
  | "competencyAnalytics"
  | "skillGapAnalytics"
  | "trainingEffectiveness"
  | "emergingSkills"
  | "courses"
  | "resources"
  | "tpacPrograms"
  | "aiAssessmentGenerator"
  | "publishedAssessments"
  | "assessmentResults"
  | "generatedQuestions"
  | "questionBank"
  | "reports"
  | "settings";

type NavEntry = { type: "item"; key: AdminSection; icon: LucideIcon } | { type: "group"; label: string };

const entries: NavEntry[] = [
  { type: "item", key: "dashboard", icon: LayoutDashboard },
  { type: "item", key: "officers", icon: Users },
  { type: "item", key: "pending", icon: UserPlus },
  { type: "item", key: "departments", icon: Building2 },
  { type: "item", key: "competencyAnalytics", icon: BarChart3 },
  { type: "item", key: "skillGapAnalytics", icon: TrendingDown },
  { type: "item", key: "trainingEffectiveness", icon: TrendingUp },
  { type: "item", key: "emergingSkills", icon: Rocket },
  { type: "item", key: "courses", icon: BookOpen },
  { type: "item", key: "resources", icon: Library },
  { type: "item", key: "tpacPrograms", icon: Landmark },
  { type: "group", label: "assessmentsGroup" },
  { type: "item", key: "aiAssessmentGenerator", icon: Sparkles },
  { type: "item", key: "publishedAssessments", icon: ClipboardCheck },
  { type: "item", key: "assessmentResults", icon: BarChart2 },
  { type: "group", label: "questionBankGroup" },
  { type: "item", key: "generatedQuestions", icon: ListChecks },
  { type: "item", key: "questionBank", icon: HelpCircle },
  { type: "group", label: "" },
  { type: "item", key: "reports", icon: FileText },
  { type: "item", key: "settings", icon: Settings },
];

const AdminSidebar: React.FC<{
  active: AdminSection;
  onSelect: (s: AdminSection) => void;
  labels: Record<AdminSection | "logout" | "assessmentsGroup" | "questionBankGroup", string>;
}> = ({ active, onSelect, labels }) => {
  const navigate = useNavigate();

  return (
    <nav className="flex h-full flex-col gap-1 overflow-y-auto rounded-2xl border border-[#EAEFF5] bg-white p-3 shadow-sm lg:sticky lg:top-6">
      {entries.map((entry, i) => {
        if (entry.type === "group") {
          if (!entry.label) return <div key={`div-${i}`} className="my-1.5 border-t border-[#EAEFF5]" />;
          return (
            <p key={entry.label} className="mb-1 mt-3 px-3.5 text-[11px] font-extrabold uppercase tracking-wide text-[#B0BFD4] first:mt-1">
              {labels[entry.label as "assessmentsGroup" | "questionBankGroup"]}
            </p>
          );
        }
        const { key, icon: Icon } = entry;
        const isActive = active === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(key)}
            className={`focus-ring flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-left text-sm font-semibold transition ${
              isActive ? "bg-greenFaint text-brandGreen" : "text-[#4C6386] hover:bg-[#F1F4F9] hover:text-navy"
            }`}
          >
            <Icon size={17} aria-hidden="true" />
            <span className="truncate">{labels[key]}</span>
          </button>
        );
      })}
      <div className="my-1.5 border-t border-[#EAEFF5]" />
      <button
        type="button"
        onClick={() => navigate("/")}
        className="focus-ring flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-left text-sm font-semibold text-[#B42318] transition hover:bg-[#FDEAEA]"
      >
        <LogOut size={17} aria-hidden="true" />
        {labels.logout}
      </button>
    </nav>
  );
};

export default AdminSidebar;
