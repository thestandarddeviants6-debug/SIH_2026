// Frontend-only, localStorage-backed settings state for the Statistical
// Officer Settings page. No real backend, email service, or 2FA exists —
// toggles persist locally for this prototype.

export interface OfficerSettingsState {
  emailNotifications: boolean;
  assessmentReminders: boolean;
  trainingAlerts: boolean;
  skillGapAlerts: boolean;
  highContrast: boolean;
  fontSize: "small" | "medium" | "large";
  screenReaderHints: boolean;
  keyboardNavHints: boolean;
  dataSharingConsent: boolean;
}

export const DEFAULT_OFFICER_SETTINGS: OfficerSettingsState = {
  emailNotifications: true,
  assessmentReminders: true,
  trainingAlerts: true,
  skillGapAlerts: true,
  highContrast: false,
  fontSize: "medium",
  screenReaderHints: false,
  keyboardNavHints: false,
  dataSharingConsent: true,
};

const STORAGE_KEY = "karmayogi-officer-settings";

export function loadOfficerSettings(): OfficerSettingsState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_OFFICER_SETTINGS };
    return { ...DEFAULT_OFFICER_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_OFFICER_SETTINGS };
  }
}

export function saveOfficerSettings(settings: OfficerSettingsState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // Prototype-only persistence; silently no-op if storage is unavailable.
  }
}
