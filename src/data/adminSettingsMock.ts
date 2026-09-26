// Frontend-only, localStorage-backed settings state for the Administrator
// Settings page. Nothing here talks to a real backend, email service, 2FA
// provider, or SSO — toggles persist locally so the prototype "remembers"
// choices across a session/reload, per the brief.

import { AdminSection } from "../components/dashboard/AdminSidebar";

export interface AdminSettingsState {
  // Notifications
  emailNotifications: boolean;
  newRegistrationAlerts: boolean;
  assessmentNotifications: boolean;
  trainingAlerts: boolean;
  skillGapAlerts: boolean;
  systemNotifications: boolean;
  // Security
  twoFactorEnabled: boolean;
  sessionTimeoutMinutes: 15 | 30 | 60 | 120;
  // Accessibility
  fontSize: "small" | "medium" | "large";
  highContrast: boolean;
  screenReaderHints: boolean;
  keyboardNavHints: boolean;
  // Learning & Training
  defaultLearningLanguage: "English" | "हिन्दी" | "मराठी";
  igotPreferences: boolean;
  tpacPreferences: boolean;
  trainingReminders: boolean;
  defaultCompetencyDomain: string;
  // Assessment preferences
  defaultQuestionType: "MCQ" | "Quiz";
  defaultDifficulty: "Easy" | "Medium" | "Hard";
  defaultQuestionCount: 3 | 5 | 10;
  assessmentLanguage: string;
  passingCriteriaPercent: number;
  feedbackEnabled: boolean;
  aiAssessmentStyle: "Conservative" | "Balanced" | "Creative";
  // Privacy & data
  dataSharingConsent: boolean;
  // System & platform
  dateFormat: "DD/MM/YYYY" | "MM/DD/YYYY";
  defaultLandingSection: AdminSection;
  maintenanceNotifications: boolean;
}

export const DEFAULT_ADMIN_SETTINGS: AdminSettingsState = {
  emailNotifications: true,
  newRegistrationAlerts: true,
  assessmentNotifications: true,
  trainingAlerts: true,
  skillGapAlerts: true,
  systemNotifications: false,
  twoFactorEnabled: false,
  sessionTimeoutMinutes: 30,
  fontSize: "medium",
  highContrast: false,
  screenReaderHints: false,
  keyboardNavHints: false,
  defaultLearningLanguage: "English",
  igotPreferences: true,
  tpacPreferences: true,
  trainingReminders: true,
  defaultCompetencyDomain: "Statistical",
  defaultQuestionType: "MCQ",
  defaultDifficulty: "Medium",
  defaultQuestionCount: 5,
  assessmentLanguage: "English",
  passingCriteriaPercent: 60,
  feedbackEnabled: true,
  aiAssessmentStyle: "Balanced",
  dataSharingConsent: true,
  dateFormat: "DD/MM/YYYY",
  defaultLandingSection: "dashboard",
  maintenanceNotifications: true,
};

const STORAGE_KEY = "karmayogi-admin-settings";

export function loadAdminSettings(): AdminSettingsState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_ADMIN_SETTINGS };
    const parsed = JSON.parse(raw);
    // Merge over defaults so newly added fields always have a value even
    // if an older saved copy predates them.
    return { ...DEFAULT_ADMIN_SETTINGS, ...parsed };
  } catch {
    return { ...DEFAULT_ADMIN_SETTINGS };
  }
}

export function saveAdminSettings(settings: AdminSettingsState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // Prototype-only persistence; silently no-op if storage is unavailable
    // (e.g. private browsing mode blocking localStorage).
  }
}

/** Used by AdminDashboardPage on mount to honor "Default landing page". */
export function getDefaultLandingSection(): AdminSection {
  return loadAdminSettings().defaultLandingSection;
}

// Mock activity log for the Activity & Audit settings section.
export const mockAdminActivityLog: { action: string; time: string }[] = [
  { action: "Published assessment \u201cCyber Hygiene Readiness Check\u201d", time: "Today, 10:42 AM" },
  { action: "Approved administrator access request — Vikram Rao", time: "Yesterday, 4:15 PM" },
  { action: "Updated department details for SSB — Kerala", time: "22 Sep 2026" },
  { action: "Generated 5 questions for Technical competency", time: "21 Sep 2026" },
  { action: "Logged in from Chrome on Windows", time: "21 Sep 2026, 9:02 AM" },
  { action: "Unpublished assessment \u201cLegacy Metadata Quiz\u201d", time: "18 Sep 2026" },
];

export const mockActiveSessions: { device: string; location: string; lastActive: string }[] = [
  { device: "Chrome on Windows", location: "New Delhi, IN", lastActive: "Active now" },
  { device: "Karmayogi Mobile App — Android", location: "New Delhi, IN", lastActive: "2 days ago" },
];
