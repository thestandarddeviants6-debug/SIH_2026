import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, ArrowRight, ShieldCheck, LucideIcon } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useAppStore } from "../state/appStore";

export type LoginAccent = "blue" | "green";

interface LoginCardShellProps {
  accent: LoginAccent;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  idFieldId: string;
  idLabel: string;
  idPlaceholder: string;
  registerLabel: string;
  registerTo: string;
  secureTitle: string;
  secureText: string;
  /** Route to send the person to once mock login succeeds. */
  dashboardTo: string;
  /** "officer" seeds/selects the demo officer in the shared store on login. */
  role: "officer" | "admin";
}

/**
 * Shared card layout for both role-specific login forms. Only the props
 * above differ between /login/officer and /login/admin — everything else
 * (structure, spacing, validation, password toggle) is identical so the
 * two pages stay visually and behaviourally consistent.
 */
const LoginCardShell: React.FC<LoginCardShellProps> = ({
  accent,
  icon: Icon,
  title,
  subtitle,
  idFieldId,
  idLabel,
  idPlaceholder,
  registerLabel,
  registerTo,
  secureTitle,
  secureText,
  dashboardTo,
  role,
}) => {
  const { t } = useLanguage();
  const lg = t.loginGateway;
  const navigate = useNavigate();
  const { loginOfficer, loginAdmin } = useAppStore();
  const [idValue, setIdValue] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isBlue = accent === "blue";
  const accentBg = isBlue ? "bg-brandBlue" : "bg-brandGreen";
  const accentBgHover = isBlue ? "hover:bg-brandBlue-bright" : "hover:brightness-110";
  const accentText = isBlue ? "text-brandBlue" : "text-brandGreen";
  const accentBorder = isBlue ? "border-brandBlue" : "border-brandGreen";
  const iconBg = isBlue ? "bg-skyLight" : "bg-greenFaint";
  const ring = isBlue ? "focus-within:border-brandBlue" : "focus-within:border-brandGreen";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!idValue.trim() || !password.trim()) {
      setError(t.validation.requiredFields);
      return;
    }

    // Mock login for this frontend prototype: any non-empty ID + password
    // is accepted, since there is no real auth backend yet. Logging in
    // resumes the shared centralized store (seeding it with demo data the
    // first time, if nothing has been registered yet) rather than
    // fabricating fresh personal data.
    if (role === "officer") loginOfficer();
    else loginAdmin();
    navigate(dashboardTo);
  }

  return (
    <div className="w-full max-w-md rounded-3xl border border-[#EAEFF5] bg-white p-8 shadow-[0_20px_60px_-20px_rgba(8,43,99,0.25)] sm:p-10">
      <div className="flex flex-col items-center text-center">
        <span className={`flex h-16 w-16 items-center justify-center rounded-full ${iconBg}`}>
          <Icon size={28} className={accentText} aria-hidden="true" />
        </span>
        <h1 className="mt-5 text-xl font-extrabold text-navy sm:text-2xl">{title}</h1>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#4C6386]">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4" noValidate>
        <div>
          <label htmlFor={idFieldId} className="mb-1.5 block text-sm font-semibold text-navy">
            {idLabel}
          </label>
          <div className={`flex items-center gap-2 rounded-lg border border-[#DCE9F7] bg-white px-3.5 transition ${ring}`}>
            <Mail size={16} className="shrink-0 text-[#8AA0BF]" aria-hidden="true" />
            <input
              id={idFieldId}
              type="text"
              required
              placeholder={idPlaceholder}
              value={idValue}
              onChange={(e) => setIdValue(e.target.value)}
              className="w-full bg-transparent py-2.5 text-sm text-navy outline-none placeholder:text-[#9BB0CC]"
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${idFieldId}-password`} className="mb-1.5 block text-sm font-semibold text-navy">
            {lg.passwordLabelRequired}
          </label>
          <div className={`flex items-center gap-2 rounded-lg border border-[#DCE9F7] bg-white px-3.5 transition ${ring}`}>
            <Lock size={16} className="shrink-0 text-[#8AA0BF]" aria-hidden="true" />
            <input
              id={`${idFieldId}-password`}
              type={showPassword ? "text" : "password"}
              required
              placeholder={lg.passwordPlaceholder}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent py-2.5 text-sm text-navy outline-none placeholder:text-[#9BB0CC]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="focus-ring shrink-0 text-[#8AA0BF] hover:text-navy"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-[#4C6386]">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className={isBlue ? "accent-brandBlue" : "accent-brandGreen"}
            />
            {lg.rememberMe}
          </label>
          <button type="button" className={`focus-ring text-sm font-semibold hover:underline ${accentText}`}>
            {lg.forgotPassword}
          </button>
        </div>

        {error && (
          <p role="alert" className="rounded-lg bg-[#FDEAEA] px-4 py-2.5 text-sm font-semibold text-[#B42318]">
            {error}
          </p>
        )}

        <button
          type="submit"
          className={`focus-ring mt-1 flex h-12 items-center justify-center gap-2 rounded-lg ${accentBg} text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 ${accentBgHover} hover:shadow-md`}
        >
          {t.modals.submitLogin}
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-[#4C6386]">{lg.newUserQuestion}</p>
        <Link
          to={registerTo}
          className={`focus-ring mt-3 flex h-12 items-center justify-center rounded-lg border-2 ${accentBorder} bg-white text-sm font-bold ${accentText} transition hover:bg-skyFaint`}
        >
          {registerLabel}
        </Link>
      </div>

      <div className="mt-8 flex items-start gap-3 border-t border-[#EAEFF5] pt-6">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
          <ShieldCheck size={16} className={accentText} aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-bold text-navy">{secureTitle}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-[#4C6386]">{secureText}</p>
        </div>
      </div>

      <Link
        to="/login"
        className="focus-ring mt-6 block w-full text-center text-xs font-medium text-[#4C6386] hover:text-navy"
      >
        {lg.backToRoleSelection}
      </Link>
    </div>
  );
};

export default LoginCardShell;
