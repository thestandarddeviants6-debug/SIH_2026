import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCircle, KeyRound, LogOut } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionCard } from "./DashboardUI";
import { Toggle, SelectRow, LinkRow, SettingsToast } from "./SettingsRows";
import { officerProfile, officerCompetencyProfile } from "../../data/officerDashboardMock";
import { OfficerSettingsState, DEFAULT_OFFICER_SETTINGS, loadOfficerSettings, saveOfficerSettings } from "../../data/officerSettingsMock";

/**
 * Statistical Officer Settings — a government-learning-portal-style
 * settings surface for the officer role. All state is React state mirrored
 * to localStorage for this frontend prototype; there is no real backend,
 * email delivery, or authentication behind any of it.
 */
const OfficerSettingsPage: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const d = t.dashboard.officer;
  const navigate = useNavigate();
  const [settings, setSettings] = useState<OfficerSettingsState>(DEFAULT_OFFICER_SETTINGS);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    setSettings(loadOfficerSettings());
  }, []);

  function update<K extends keyof OfficerSettingsState>(key: K, value: OfficerSettingsState[K]) {
    setSettings((s) => {
      const next = { ...s, [key]: value };
      saveOfficerSettings(next);
      return next;
    });
    setToast(d.settingsSaved);
    window.setTimeout(() => setToast(null), 1800);
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Profile / Personal Information */}
      <SectionCard title={d.settingsSectionProfile}>
        <div className="flex items-center gap-4">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-skyLight">
            <UserCircle size={30} className="text-brandBlue" aria-hidden="true" />
          </span>
          <div>
            <p className="text-base font-extrabold text-navy">{officerProfile.name}</p>
            <p className="text-sm text-[#4C6386]">
              {officerCompetencyProfile.designation} · {officerCompetencyProfile.department}
            </p>
            <p className="text-xs text-[#8AA0BF]">{officerCompetencyProfile.currentAssignment}</p>
          </div>
        </div>
      </SectionCard>

      {/* Account & Security */}
      <SectionCard title={d.settingsSectionSecurity}>
        <div className="flex items-center justify-between gap-4 py-1">
          <p className="text-sm font-semibold text-navy">{d.settingsChangePasswordLabel}</p>
          <button
            type="button"
            onClick={() => setToast(`${d.settingsChangePasswordAction} — prototype action`)}
            className="focus-ring flex items-center gap-1.5 rounded-lg bg-brandBlue px-4 py-2 text-sm font-bold text-white transition hover:bg-brandBlue-bright"
          >
            <KeyRound size={14} aria-hidden="true" />
            {d.settingsChangePasswordAction}
          </button>
        </div>
      </SectionCard>

      {/* Language */}
      <SectionCard title={d.settingsSectionLanguage}>
        <div className="flex gap-2">
          {([["en", "English"], ["hi", "हिंदी"], ["mr", "मराठी"]] as const).map(([code, label]) => (
            <button
              key={code}
              type="button"
              onClick={() => setLanguage(code)}
              className={`focus-ring rounded-lg border-2 px-4 py-2 text-sm font-bold transition ${
                language === code ? "border-brandBlue bg-skyFaint text-navy" : "border-[#DCE9F7] text-navy hover:bg-skyFaint"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </SectionCard>

      {/* Notifications */}
      <SectionCard title={d.settingsSectionNotifications}>
        <div className="divide-y divide-[#EAEFF5]">
          <Toggle checked={settings.emailNotifications} onChange={(v) => update("emailNotifications", v)} label={d.settingsEmailNotifications} />
          <Toggle checked={settings.assessmentReminders} onChange={(v) => update("assessmentReminders", v)} label={d.settingsAssessmentReminders} />
          <Toggle checked={settings.trainingAlerts} onChange={(v) => update("trainingAlerts", v)} label={d.settingsTrainingAlerts} />
          <Toggle checked={settings.skillGapAlerts} onChange={(v) => update("skillGapAlerts", v)} label={d.settingsSkillGapAlerts} />
        </div>
      </SectionCard>

      {/* Accessibility */}
      <SectionCard title={d.settingsSectionAccessibility}>
        <div className="divide-y divide-[#EAEFF5]">
          <SelectRow label={d.settingsFontSize} value={settings.fontSize} options={["small", "medium", "large"]} onChange={(v) => update("fontSize", v as OfficerSettingsState["fontSize"])} />
          <Toggle checked={settings.highContrast} onChange={(v) => update("highContrast", v)} label={d.settingsHighContrast} />
          <Toggle checked={settings.screenReaderHints} onChange={(v) => update("screenReaderHints", v)} label={d.settingsScreenReaderHints} />
          <Toggle checked={settings.keyboardNavHints} onChange={(v) => update("keyboardNavHints", v)} label={d.settingsKeyboardNavHints} />
        </div>
      </SectionCard>

      {/* Privacy */}
      <SectionCard title={d.settingsSectionPrivacy}>
        <div className="divide-y divide-[#EAEFF5]">
          <Toggle checked={settings.dataSharingConsent} onChange={(v) => update("dataSharingConsent", v)} label={d.settingsDataSharingConsent} />
          <LinkRow label={t.footer.privacy} to="/privacy-policy" actionLabel={d.settingsViewAction} />
          <LinkRow label={t.footer.terms} to="/terms-of-use" actionLabel={d.settingsViewAction} />
        </div>
      </SectionCard>

      {/* Help & Support */}
      <SectionCard title={d.settingsSectionHelp}>
        <div className="divide-y divide-[#EAEFF5]">
          <LinkRow label={d.settingsHelpCenter} href="#" actionLabel={d.settingsViewAction} />
          <LinkRow label={d.settingsUserGuide} href="#" actionLabel={d.settingsViewAction} />
          <LinkRow label={d.settingsFaqs} to="/contact" actionLabel={d.settingsViewAction} />
          <LinkRow label={d.settingsContactSupport} to="/contact" actionLabel={d.settingsViewAction} />
          <LinkRow label={d.settingsReportIssue} href="mailto:support@karmayogi-statai.example.gov.in" actionLabel={d.settingsViewAction} />
          <LinkRow label={d.settingsFeedback} href="mailto:feedback@karmayogi-statai.example.gov.in" actionLabel={d.settingsViewAction} />
        </div>
      </SectionCard>

      {/* About / Portal Information */}
      <SectionCard title={d.settingsSectionAbout}>
        <div className="divide-y divide-[#EAEFF5]">
          <LinkRow label={d.settingsAboutPlatform} to="/about" actionLabel={d.settingsViewAction} />
          <div className="flex items-center justify-between gap-4 py-3">
            <p className="text-sm font-semibold text-navy">{d.settingsInitiativeInfo}</p>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <p className="text-xs text-[#8AA0BF]">{d.settingsCopyright}</p>
          </div>
        </div>
      </SectionCard>

      {/* Logout */}
      <button
        type="button"
        onClick={() => navigate("/")}
        className="focus-ring flex h-11 items-center justify-center gap-2 self-start rounded-lg border-2 border-[#DCE9F7] bg-white px-6 text-sm font-bold text-[#B42318] transition hover:bg-[#FDEAEA]"
      >
        <LogOut size={16} aria-hidden="true" />
        {d.settingsLogoutButton}
      </button>

      <SettingsToast message={toast} />
    </div>
  );
};

export default OfficerSettingsPage;
