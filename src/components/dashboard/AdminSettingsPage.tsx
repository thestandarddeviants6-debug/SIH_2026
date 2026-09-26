import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCircle, LogOut, KeyRound } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
import { SectionCard } from "./DashboardUI";
import { Toggle, SelectRow, InfoRow, LinkRow, SettingsToast } from "./SettingsRows";
import {
  AdminSettingsState,
  DEFAULT_ADMIN_SETTINGS,
  loadAdminSettings,
  saveAdminSettings,
  mockAdminActivityLog,
  mockActiveSessions,
} from "../../data/adminSettingsMock";
import { COMPETENCY_DOMAINS } from "../../data/adminAssessmentMock";
import { AdminSection } from "./AdminSidebar";

interface AdminSettingsPageProps {
  onDefaultLandingChange?: (section: AdminSection) => void;
}

/**
 * Administrator Settings, upgraded from a 3-line placeholder into a full
 * government-portal-style settings surface. All state is React state
 * mirrored to localStorage for this frontend prototype — there is no real
 * backend, email delivery, 2FA provider, or SSO behind any of this.
 */
const AdminSettingsPage: React.FC<AdminSettingsPageProps> = ({ onDefaultLandingChange }) => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [settings, setSettings] = useState<AdminSettingsState>(DEFAULT_ADMIN_SETTINGS);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    setSettings(loadAdminSettings());
  }, []);

  function update<K extends keyof AdminSettingsState>(key: K, value: AdminSettingsState[K]) {
    setSettings((s) => {
      const next = { ...s, [key]: value };
      saveAdminSettings(next);
      return next;
    });
    if (key === "defaultLandingSection") onDefaultLandingChange?.(value as unknown as AdminSection);
    setToast("Saved");
    window.setTimeout(() => setToast(null), 1800);
  }

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Profile & Account */}
      <SectionCard title="Profile & Account">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-greenFaint">
              <UserCircle size={30} className="text-brandGreen" aria-hidden="true" />
            </span>
            <div>
              <p className="text-base font-extrabold text-navy">Vikram Rao</p>
              <p className="text-sm text-[#4C6386]">Platform Administrator · Central Statistics Office (CSO)</p>
              <p className="text-xs text-[#8AA0BF]">vikram.rao@cso.example.gov.in (placeholder) · +91-XXXXXXXXXX (placeholder)</p>
            </div>
          </div>
          <div className="flex shrink-0 gap-2">
            <button type="button" onClick={() => setToast("Profile edit is a prototype action")} className="focus-ring rounded-lg border-2 border-[#DCE9F7] px-4 py-2 text-sm font-bold text-navy transition hover:bg-skyFaint">
              Edit Profile
            </button>
            <button type="button" onClick={() => setToast("Password change is a prototype action")} className="focus-ring flex items-center gap-1.5 rounded-lg bg-brandBlue px-4 py-2 text-sm font-bold text-white transition hover:bg-brandBlue-bright">
              <KeyRound size={14} aria-hidden="true" />
              Change Password
            </button>
          </div>
        </div>
        <div className="mt-4 border-t border-[#EAEFF5] pt-3">
          <button type="button" onClick={() => navigate("/")} className="focus-ring flex items-center gap-2 text-sm font-bold text-[#B42318] hover:underline">
            <LogOut size={15} aria-hidden="true" />
            Logout
          </button>
        </div>
      </SectionCard>

      {/* 2. Security */}
      <SectionCard title="Security">
        <div className="divide-y divide-[#EAEFF5]">
          <Toggle checked={settings.twoFactorEnabled} onChange={(v) => update("twoFactorEnabled", v)} label="Two-Factor Authentication" note="Prototype toggle — no real OTP/authenticator is issued yet." />
          <div className="flex items-center justify-between gap-4 py-3">
            <p className="text-sm font-semibold text-navy">Change Password</p>
            <button type="button" onClick={() => setToast("Password change is a prototype action")} className="focus-ring text-sm font-semibold text-brandBlue hover:underline">
              Update →
            </button>
          </div>
          <SelectRow label="Session Timeout" value={`${settings.sessionTimeoutMinutes} min`} options={["15 min", "30 min", "60 min", "120 min"]} onChange={(v) => update("sessionTimeoutMinutes", Number(v.split(" ")[0]) as AdminSettingsState["sessionTimeoutMinutes"])} />
          <InfoRow label="Last Login" value="Today, 9:02 AM from New Delhi, IN (mock)" />
          <div className="py-3">
            <p className="mb-2 text-sm font-semibold text-navy">Active Sessions / Devices</p>
            <ul className="flex flex-col gap-2">
              {mockActiveSessions.map((s) => (
                <li key={s.device} className="flex items-center justify-between rounded-lg border border-[#EAEFF5] px-3.5 py-2 text-xs">
                  <span className="font-semibold text-navy">{s.device}</span>
                  <span className="text-[#8AA0BF]">
                    {s.location} · {s.lastActive}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <p className="text-sm font-semibold text-navy">Security Alerts</p>
            <span className="rounded-full bg-greenFaint px-2.5 py-1 text-xs font-bold text-brandGreen">No alerts (mock)</span>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <p className="text-sm font-semibold text-navy">Account Recovery</p>
            <button type="button" onClick={() => setToast("Account recovery setup is a prototype action")} className="focus-ring text-sm font-semibold text-brandBlue hover:underline">
              Set up →
            </button>
          </div>
        </div>
      </SectionCard>

      {/* 3. Notifications */}
      <SectionCard title="Notifications">
        <div className="divide-y divide-[#EAEFF5]">
          <Toggle checked={settings.emailNotifications} onChange={(v) => update("emailNotifications", v)} label="Email Notifications" note="Prototype toggle — no real email is sent." />
          <Toggle checked={settings.newRegistrationAlerts} onChange={(v) => update("newRegistrationAlerts", v)} label="New Officer Registration Alerts" />
          <Toggle checked={settings.assessmentNotifications} onChange={(v) => update("assessmentNotifications", v)} label="Assessment Notifications" />
          <Toggle checked={settings.trainingAlerts} onChange={(v) => update("trainingAlerts", v)} label="Training / Completion Alerts" />
          <Toggle checked={settings.skillGapAlerts} onChange={(v) => update("skillGapAlerts", v)} label="Skill-Gap Alerts" />
          <Toggle checked={settings.systemNotifications} onChange={(v) => update("systemNotifications", v)} label="System / Platform Notifications" />
        </div>
      </SectionCard>

      {/* 4. Language & Accessibility */}
      <SectionCard title="Language & Accessibility">
        <div className="divide-y divide-[#EAEFF5]">
          <div className="flex items-center justify-between gap-4 py-3">
            <p className="text-sm font-semibold text-navy">Platform Language</p>
            <div className="flex gap-1.5">
              {([["en", "English"], ["hi", "हिंदी"], ["mr", "मराठी"]] as const).map(([code, label]) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  className={`focus-ring rounded-lg border-2 px-3 py-1.5 text-xs font-bold transition ${language === code ? "border-brandBlue bg-skyFaint text-navy" : "border-[#DCE9F7] text-navy hover:bg-skyFaint"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <SelectRow label="Font Size" value={settings.fontSize} options={["small", "medium", "large"]} onChange={(v) => update("fontSize", v as AdminSettingsState["fontSize"])} />
          <Toggle checked={settings.highContrast} onChange={(v) => update("highContrast", v)} label="High-Contrast Mode" />
          <Toggle checked={settings.screenReaderHints} onChange={(v) => update("screenReaderHints", v)} label="Screen-Reader Optimized Hints" />
          <Toggle checked={settings.keyboardNavHints} onChange={(v) => update("keyboardNavHints", v)} label="Keyboard Navigation Hints" />
        </div>
      </SectionCard>

      {/* 5. Organization & Department */}
      <SectionCard title="Organization & Department">
        <div className="divide-y divide-[#EAEFF5]">
          <InfoRow label="Organization" value="Ministry of Statistics & Programme Implementation (MoSPI)" />
          <InfoRow label="Department" value="Central Statistics Office (CSO)" />
          <InfoRow label="Administrative Hierarchy" value="MoSPI → CSO → Data Processing Division (mock)" />
          <InfoRow label="Officer Role/Designation Preferences" value="Statistical Officer, Senior Statistical Officer, Junior Statistical Officer" />
          <InfoRow label="Competency Framework" value="Statistical · Technical · Digital Governance · Behavioural/Managerial" />
        </div>
      </SectionCard>

      {/* 6. Learning & Training */}
      <SectionCard title="Learning & Training">
        <div className="divide-y divide-[#EAEFF5]">
          <SelectRow label="Default Learning Language" value={settings.defaultLearningLanguage} options={["English", "हिन्दी", "मराठी"]} onChange={(v) => update("defaultLearningLanguage", v as AdminSettingsState["defaultLearningLanguage"])} />
          <Toggle checked={settings.igotPreferences} onChange={(v) => update("igotPreferences", v)} label="iGOT Karmayogi Learning Preferences" note="Show iGOT-sourced recommendations" />
          <Toggle checked={settings.tpacPreferences} onChange={(v) => update("tpacPreferences", v)} label="NSSTA / TPAC Training Preferences" note="Show TPAC-recommended programmes" />
          <Toggle checked={settings.trainingReminders} onChange={(v) => update("trainingReminders", v)} label="Training Reminder Preferences" />
          <SelectRow label="Default Competency Domain" value={settings.defaultCompetencyDomain} options={[...COMPETENCY_DOMAINS]} onChange={(v) => update("defaultCompetencyDomain", v)} />
        </div>
      </SectionCard>

      {/* 7. Assessment Preferences */}
      <SectionCard title="Assessment Preferences">
        <div className="divide-y divide-[#EAEFF5]">
          <SelectRow label="Default Question Type" value={settings.defaultQuestionType} options={["MCQ", "Quiz"]} onChange={(v) => update("defaultQuestionType", v as AdminSettingsState["defaultQuestionType"])} />
          <SelectRow label="Default Difficulty" value={settings.defaultDifficulty} options={["Easy", "Medium", "Hard"]} onChange={(v) => update("defaultDifficulty", v as AdminSettingsState["defaultDifficulty"])} />
          <SelectRow label="Default Question Count" value={String(settings.defaultQuestionCount)} options={["3", "5", "10"]} onChange={(v) => update("defaultQuestionCount", Number(v) as AdminSettingsState["defaultQuestionCount"])} />
          <SelectRow label="Assessment Language" value={settings.assessmentLanguage} options={["English", "हिन्दी", "मराठी"]} onChange={(v) => update("assessmentLanguage", v)} />
          <div className="flex items-center justify-between gap-4 py-3">
            <p className="text-sm font-semibold text-navy">Passing Criteria</p>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={0}
                max={100}
                value={settings.passingCriteriaPercent}
                onChange={(e) => update("passingCriteriaPercent", Math.max(0, Math.min(100, Number(e.target.value))))}
                className="w-16 rounded-lg border border-[#DCE9F7] bg-white px-2 py-1.5 text-sm text-navy outline-none focus:border-brandBlue"
              />
              <span className="text-sm text-[#4C6386]">%</span>
            </div>
          </div>
          <Toggle checked={settings.feedbackEnabled} onChange={(v) => update("feedbackEnabled", v)} label="Instant Feedback After Assessment" />
          <SelectRow label="AI Assessment Generation Style" value={settings.aiAssessmentStyle} options={["Conservative", "Balanced", "Creative"]} onChange={(v) => update("aiAssessmentStyle", v as AdminSettingsState["aiAssessmentStyle"])} />
        </div>
      </SectionCard>

      {/* 8. Privacy & Data */}
      <SectionCard title="Privacy & Data">
        <div className="divide-y divide-[#EAEFF5]">
          <Toggle checked={settings.dataSharingConsent} onChange={(v) => update("dataSharingConsent", v)} label="Allow Aggregate Data Sharing with iGOT/NSSTA (mock)" />
          <InfoRow label="Data Retention" value="Learner and assessment data retained per government record-keeping rules (placeholder)" />
          <LinkRow label="Privacy Policy" to="/privacy-policy" actionLabel="View →" />
          <LinkRow label="Terms of Use" to="/terms-of-use" actionLabel="View →" />
        </div>
      </SectionCard>

      {/* 9. Activity & Audit */}
      <SectionCard title="Activity & Audit">
        <p className="mb-3 text-xs text-[#8AA0BF]">Mock activity log for this frontend prototype.</p>
        <ul className="flex flex-col gap-2.5">
          {mockAdminActivityLog.map((a, i) => (
            <li key={i} className="flex items-start justify-between gap-3 rounded-lg border border-[#EAEFF5] px-3.5 py-2.5 text-sm">
              <span className="text-navy">{a.action}</span>
              <span className="shrink-0 text-xs text-[#8AA0BF]">{a.time}</span>
            </li>
          ))}
        </ul>
      </SectionCard>

      {/* 10. System & Platform */}
      <SectionCard title="System & Platform">
        <div className="divide-y divide-[#EAEFF5]">
          <SelectRow label="Date/Time Format" value={settings.dateFormat} options={["DD/MM/YYYY", "MM/DD/YYYY"]} onChange={(v) => update("dateFormat", v as AdminSettingsState["dateFormat"])} />
          <SelectRow
            label="Default Landing Page"
            value={settings.defaultLandingSection}
            options={["dashboard", "officers", "aiAssessmentGenerator", "publishedAssessments", "reports"]}
            onChange={(v) => update("defaultLandingSection", v as AdminSection)}
          />
          <Toggle checked={settings.maintenanceNotifications} onChange={(v) => update("maintenanceNotifications", v)} label="Maintenance / Platform Announcements" />
        </div>
      </SectionCard>

      {/* 11. Help & Support */}
      <SectionCard title="Help & Support">
        <div className="divide-y divide-[#EAEFF5]">
          <LinkRow label="Help Center" href="#" actionLabel="View →" />
          <LinkRow label="User Guide" href="#" actionLabel="View →" />
          <LinkRow label="FAQs" to="/contact" actionLabel="View →" />
          <LinkRow label="Contact Support" to="/contact" actionLabel="View →" />
          <LinkRow label="Report an Issue" href="mailto:support@karmayogi-statai.example.gov.in" actionLabel="View →" />
          <LinkRow label="Feedback" href="mailto:feedback@karmayogi-statai.example.gov.in" actionLabel="View →" />
        </div>
      </SectionCard>

      {/* 12. Government Portal Information */}
      <SectionCard title="Government Portal Information">
        <div className="divide-y divide-[#EAEFF5]">
          <LinkRow label="About Karmayogi-StatAI" to="/about" actionLabel="View →" />
          <InfoRow label="Initiative" value="Ministry of Statistics & Programme Implementation (MoSPI), in collaboration with iGOT Karmayogi and NSSTA" />
          <LinkRow label="Accessibility Statement" href="#" actionLabel="View →" />
          <LinkRow label="Privacy Policy" to="/privacy-policy" actionLabel="View →" />
          <LinkRow label="Terms of Use" to="/terms-of-use" actionLabel="View →" />
          <InfoRow label="Copyright" value="© 2026 Government of India (placeholder)" />
        </div>
      </SectionCard>

      <SettingsToast message={toast} />
    </div>
  );
};

export default AdminSettingsPage;
