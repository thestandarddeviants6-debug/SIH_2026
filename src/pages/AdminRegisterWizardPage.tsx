import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Eye, EyeOff, Mail, CheckCircle2, Clock } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import LoginBackground from "../components/LoginBackground";
import Breadcrumb from "../components/Breadcrumb";
import SideInfoPanel from "../components/SideInfoPanel";
import RegistrationCard from "../components/RegistrationCard";
import ProgressStepper from "../components/ProgressStepper";
import FormField from "../components/FormField";
import SelectField from "../components/SelectField";
import PasswordStrength, { isPasswordStrongEnough } from "../components/PasswordStrength";
import OTPInput from "../components/OTPInput";
import InfoBox from "../components/InfoBox";
import { STATES, PREFERRED_LANGUAGES, YEARS_OF_SERVICE, AREAS_OF_RESPONSIBILITY } from "../data/registrationOptions";
import { otpService } from "../services/otpService";
import { registrationService } from "../services/registrationService";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_RE = /^[0-9]{10}$/;
const RESEND_SECONDS = 45;
const AUTH_DETAILS_MAX = 300;
const REASON_MAX = 500;

interface FormData {
  fullName: string;
  officialEmail: string;
  contactNumber: string;
  employeeId: string;
  department: string;
  designation: string;
  state: string;
  preferredLanguage: string;
  adminRole: string;
  yearsOfService: string;
  areaOfResponsibility: string;
  authorizationDetails: string;
  reason: string;
  password: string;
  confirmPassword: string;
}

const initialData: FormData = {
  fullName: "",
  officialEmail: "",
  contactNumber: "",
  employeeId: "",
  department: "",
  designation: "",
  state: "",
  preferredLanguage: "English",
  adminRole: "",
  yearsOfService: "",
  areaOfResponsibility: "",
  authorizationDetails: "",
  reason: "",
  password: "",
  confirmPassword: "",
};

/**
 * /register/administrator — a 4-step wizard, visually mirroring the
 * Statistical Officer flow (same shared components, same step count), but
 * a genuinely different flow underneath: this is an ACCESS REQUEST, not
 * immediate account creation. Submitting after verification never yields a
 * login-capable account by itself — it produces a request an authorized
 * administrator still has to approve, which is why the terminal state here
 * is "Access Request Submitted" / "Pending Approval" rather than the
 * Officer flow's "Account Created Successfully".
 */
const AdminRegisterWizardPage: React.FC = () => {
  const { t } = useLanguage();
  const w = t.adminWizard;
  const v = t.validation;
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1-4 wizard, 5 = submitted/pending
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [otpDigits, setOtpDigits] = useState<string[]>(Array(6).fill(""));
  const [otpError, setOtpError] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [agreedError, setAgreedError] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [resendSeconds, setResendSeconds] = useState(RESEND_SECONDS);

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }

  // Countdown + send the OTP once the person reaches step 4. This is a
  // mock flow for the frontend prototype — no real email is sent.
  useEffect(() => {
    if (step !== 4) return;
    setResendSeconds(RESEND_SECONDS);
    otpService.sendOtp(data.officialEmail);
    const id = setInterval(() => {
      setResendSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  function validateStep1(): boolean {
    const e: Record<string, string> = {};
    if (!data.fullName.trim()) e.fullName = v.requiredFields;
    if (!data.employeeId.trim()) e.employeeId = v.requiredFields;
    if (!data.department.trim()) e.department = v.requiredFields;
    if (!data.state) e.state = v.requiredFields;
    if (!data.officialEmail.trim()) e.officialEmail = v.requiredFields;
    if (!data.contactNumber.trim()) e.contactNumber = v.requiredFields;
    if (!data.designation.trim()) e.designation = v.requiredFields;
    if (!data.preferredLanguage) e.preferredLanguage = v.requiredFields;
    if (data.officialEmail.trim() && !EMAIL_RE.test(data.officialEmail.trim())) e.officialEmail = v.invalidEmail;
    if (data.contactNumber.trim() && !CONTACT_RE.test(data.contactNumber.trim())) e.contactNumber = v.invalidMobile;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep2(): boolean {
    const e: Record<string, string> = {};
    if (!data.adminRole) e.adminRole = v.requiredFields;
    if (!data.yearsOfService) e.yearsOfService = v.requiredFields;
    if (!data.areaOfResponsibility) e.areaOfResponsibility = v.requiredFields;
    if (!data.authorizationDetails.trim()) e.authorizationDetails = v.requiredFields;
    if (!data.reason.trim()) e.reason = v.requiredFields;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep3(): boolean {
    const e: Record<string, string> = {};
    if (!isPasswordStrongEnough(data.password)) e.password = v.requiredFields;
    if (data.password !== data.confirmPassword) e.confirmPassword = v.passwordMismatch;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function goNext() {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
    else if (step === 3 && validateStep3()) setStep(4);
  }

  function goBack() {
    if (step > 1) setStep(step - 1);
  }

  function goToChangeEmail() {
    setStep(1);
  }

  async function handleResend() {
    if (resendSeconds > 0) return;
    setOtpDigits(Array(6).fill(""));
    setOtpError(null);
    setResendSeconds(RESEND_SECONDS);
    await otpService.sendOtp(data.officialEmail);
  }

  async function handleVerify() {
    const code = otpDigits.join("");
    if (code.length < 6) {
      setOtpError(v.otpIncomplete);
      return;
    }
    if (!agreed) {
      setAgreedError(v.termsRequired);
      return;
    }
    setVerifying(true);
    setOtpError(null);
    setAgreedError(null);
    const result = await otpService.verifyOtp(data.officialEmail, code);
    if (!result.success) {
      setVerifying(false);
      setOtpError(v.otpIncorrect);
      return;
    }
    await registrationService.registerAdmin({
      fullName: data.fullName,
      officialEmail: data.officialEmail,
      contactNumber: data.contactNumber,
      employeeId: data.employeeId,
      department: data.department,
      designation: data.designation,
      state: data.state,
      preferredLanguage: data.preferredLanguage,
      adminRole: data.adminRole,
      yearsOfService: data.yearsOfService,
      areaOfResponsibility: data.areaOfResponsibility,
      authorizationDetails: data.authorizationDetails,
      reason: data.reason,
      password: data.password, // never logged or persisted client-side beyond this call
    });
    setVerifying(false);
    setStep(5);
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-skyFaint to-white">
      <LoginBackground />

      <div className="relative mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
        <Breadcrumb current={t.loginGateway.adminTitle} trail={[{ label: t.nav.register, to: "/register" }]} />

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SideInfoPanel variant="admin" />

          <div className="flex justify-center">
            <RegistrationCard maxWidth="max-w-2xl">
              {step <= 4 && (
                <>
                  <div className="flex flex-col items-center text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-greenFaint">
                      <ShieldCheck size={26} className="text-brandGreen" aria-hidden="true" />
                    </span>
                    <h1 className="mt-4 text-xl font-extrabold text-navy sm:text-2xl">{w.heading}</h1>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-[#4C6386]">{w.subtitle}</p>
                  </div>

                  <div className="mt-8">
                    <ProgressStepper steps={w.steps} currentStep={step} />
                  </div>
                </>
              )}

              {/* STEP 1 — BASIC INFORMATION (Left column, then right column) */}
              {step === 1 && (
                <div className="mt-8">
                  <h2 className="text-lg font-extrabold text-navy">{w.step1Heading}</h2>
                  <p className="mt-1 text-sm text-[#4C6386]">{w.step1Subtitle}</p>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField id="fullName" label={t.registerForm.fullNameLabel} placeholder={t.registerForm.fullNamePlaceholder} value={data.fullName} onChange={(val) => update("fullName", val)} error={errors.fullName} />
                    <FormField id="officialEmail" type="email" label={t.officerWizard.officialEmailLabel} placeholder={t.officerWizard.officialEmailPlaceholder} value={data.officialEmail} onChange={(val) => update("officialEmail", val)} error={errors.officialEmail} />
                    <FormField id="employeeId" label={w.employeeIdLabel} placeholder={w.employeeIdPlaceholder} value={data.employeeId} onChange={(val) => update("employeeId", val)} error={errors.employeeId} />
                    <FormField id="contactNumber" type="tel" label={w.officialContactLabel} placeholder={w.officialContactPlaceholder} value={data.contactNumber} onChange={(val) => update("contactNumber", val)} error={errors.contactNumber} />
                    <FormField id="department" label={w.departmentLabel} placeholder={w.departmentPlaceholder} value={data.department} onChange={(val) => update("department", val)} error={errors.department} />
                    <FormField id="designation" label={w.designationLabel} placeholder={w.designationPlaceholder} value={data.designation} onChange={(val) => update("designation", val)} error={errors.designation} />
                    <SelectField id="state" label={t.officerWizard.stateLabel} placeholder={t.officerWizard.statePlaceholder} value={data.state} options={STATES} onChange={(val) => update("state", val)} error={errors.state} />
                    <SelectField id="preferredLanguage" label={t.officerWizard.languageLabel} placeholder={t.officerWizard.languageLabel} value={data.preferredLanguage} options={PREFERRED_LANGUAGES} onChange={(val) => update("preferredLanguage", val)} error={errors.preferredLanguage} />
                  </div>
                  <button
                    type="button"
                    onClick={goNext}
                    className="focus-ring mt-8 flex h-12 w-full items-center justify-center rounded-lg bg-brandGreen text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md sm:w-auto sm:px-8"
                  >
                    {t.officerWizard.nextButton}
                  </button>
                </div>
              )}

              {/* STEP 2 — PROFESSIONAL DETAILS */}
              {step === 2 && (
                <div className="mt-8">
                  <h2 className="text-lg font-extrabold text-navy">{w.step2Heading}</h2>
                  <p className="mt-1 text-sm text-[#4C6386]">{w.step2Subtitle}</p>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <SelectField id="adminRole" label={w.adminRoleLabel} placeholder={w.adminRolePlaceholder} value={data.adminRole} options={w.accessTypeOptions} onChange={(val) => update("adminRole", val)} error={errors.adminRole} />
                    <SelectField id="yearsOfService" label={w.yearsOfServiceLabel} placeholder={w.yearsOfServicePlaceholder} value={data.yearsOfService} options={YEARS_OF_SERVICE} onChange={(val) => update("yearsOfService", val)} error={errors.yearsOfService} />
                    <SelectField id="areaOfResponsibility" label={w.areaOfResponsibilityLabel} placeholder={w.areaOfResponsibilityPlaceholder} value={data.areaOfResponsibility} options={AREAS_OF_RESPONSIBILITY} onChange={(val) => update("areaOfResponsibility", val)} error={errors.areaOfResponsibility} />
                    <div className="sm:col-span-2">
                      <label htmlFor="authorizationDetails" className="mb-1.5 block text-sm font-semibold text-navy">
                        {w.authDetailsLabel}
                      </label>
                      <textarea
                        id="authorizationDetails"
                        rows={3}
                        maxLength={AUTH_DETAILS_MAX}
                        placeholder={w.authDetailsPlaceholder}
                        value={data.authorizationDetails}
                        onChange={(e) => update("authorizationDetails", e.target.value)}
                        aria-invalid={!!errors.authorizationDetails}
                        className={`w-full resize-none rounded-lg border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition ${errors.authorizationDetails ? "border-[#E4B4AE]" : "border-[#DCE9F7] focus:border-brandGreen"}`}
                      />
                      <div className="mt-1 flex items-center justify-between">
                        {errors.authorizationDetails ? <p role="alert" className="text-xs font-semibold text-[#B42318]">{errors.authorizationDetails}</p> : <span />}
                        <span className="text-xs text-[#8AA0BF]">{data.authorizationDetails.length}/{AUTH_DETAILS_MAX}</span>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="reason" className="mb-1.5 block text-sm font-semibold text-navy">
                        {w.reasonLabel}
                      </label>
                      <textarea
                        id="reason"
                        rows={4}
                        maxLength={REASON_MAX}
                        placeholder={w.reasonPlaceholder}
                        value={data.reason}
                        onChange={(e) => update("reason", e.target.value)}
                        aria-invalid={!!errors.reason}
                        className={`w-full resize-none rounded-lg border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition ${errors.reason ? "border-[#E4B4AE]" : "border-[#DCE9F7] focus:border-brandGreen"}`}
                      />
                      <div className="mt-1 flex items-center justify-between">
                        {errors.reason ? <p role="alert" className="text-xs font-semibold text-[#B42318]">{errors.reason}</p> : <span />}
                        <span className="text-xs text-[#8AA0BF]">{data.reason.length}/{REASON_MAX}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={goBack} className="focus-ring flex h-12 items-center justify-center rounded-lg border-2 border-[#DCE9F7] px-6 text-sm font-bold text-navy transition hover:bg-skyFaint">
                      {t.officerWizard.backButton}
                    </button>
                    <button type="button" onClick={goNext} className="focus-ring flex h-12 flex-1 items-center justify-center rounded-lg bg-brandGreen text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md sm:flex-none sm:px-8">
                      {t.officerWizard.nextButton}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 — CREATE PASSWORD */}
              {step === 3 && (
                <div className="mt-8">
                  <h2 className="text-lg font-extrabold text-navy">{w.step3Heading}</h2>
                  <p className="mt-1 text-sm text-[#4C6386]">{w.step3Subtitle}</p>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-navy">
                        {t.loginGateway.passwordLabelRequired}
                      </label>
                      <div className={`flex items-center gap-2 rounded-lg border bg-white px-3.5 transition ${errors.password ? "border-[#E4B4AE]" : "border-[#DCE9F7] focus-within:border-brandGreen"}`}>
                        <input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={data.password}
                          onChange={(e) => update("password", e.target.value)}
                          className="w-full bg-transparent py-2.5 text-sm text-navy outline-none"
                        />
                        <button type="button" onClick={() => setShowPassword((s) => !s)} aria-label={showPassword ? "Hide password" : "Show password"} className="focus-ring shrink-0 text-[#8AA0BF] hover:text-navy">
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-semibold text-navy">
                        {t.registerForm.confirmPasswordLabel}
                      </label>
                      <div className={`flex items-center gap-2 rounded-lg border bg-white px-3.5 transition ${errors.confirmPassword ? "border-[#E4B4AE]" : "border-[#DCE9F7] focus-within:border-brandGreen"}`}>
                        <input
                          id="confirmPassword"
                          type={showConfirm ? "text" : "password"}
                          value={data.confirmPassword}
                          onChange={(e) => update("confirmPassword", e.target.value)}
                          className="w-full bg-transparent py-2.5 text-sm text-navy outline-none"
                        />
                        <button type="button" onClick={() => setShowConfirm((s) => !s)} aria-label={showConfirm ? "Hide password" : "Show password"} className="focus-ring shrink-0 text-[#8AA0BF] hover:text-navy">
                          {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                      {errors.confirmPassword && <p role="alert" className="mt-1.5 text-xs font-semibold text-[#B42318]">{errors.confirmPassword}</p>}
                    </div>
                    <PasswordStrength password={data.password} requirementLabels={t.officerWizard.passwordRequirements} strengthLabel={t.officerWizard.passwordStrengthLabel} />
                  </div>
                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={goBack} className="focus-ring flex h-12 items-center justify-center rounded-lg border-2 border-[#DCE9F7] px-6 text-sm font-bold text-navy transition hover:bg-skyFaint">
                      {t.officerWizard.backButton}
                    </button>
                    <button type="button" onClick={goNext} className="focus-ring flex h-12 flex-1 items-center justify-center rounded-lg bg-brandGreen text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md sm:flex-none sm:px-8">
                      {t.officerWizard.nextButton}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4 — VERIFICATION */}
              {step === 4 && (
                <div className="mt-8 text-center">
                  <h2 className="text-lg font-extrabold text-navy">{w.step4Heading}</h2>
                  <p className="mt-1 text-sm text-[#4C6386]">{w.step4Description}</p>
                  <p className="mt-2 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-navy">
                    <Mail size={15} className="text-brandGreen" aria-hidden="true" />
                    {w.step4Text} {data.officialEmail}
                    <button type="button" onClick={goToChangeEmail} className="focus-ring text-xs font-semibold text-brandGreen hover:underline">
                      {t.officerWizard.changeLink}
                    </button>
                  </p>

                  <div className="mt-6">
                    <OTPInput value={otpDigits} onChange={setOtpDigits} error={!!otpError} />
                    {otpError && <p role="alert" className="mt-3 text-sm font-semibold text-[#B42318]">{otpError}</p>}
                  </div>

                  <p className="mt-5 text-sm text-[#4C6386]">
                    {t.officerWizard.resendQuestion}{" "}
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={resendSeconds > 0}
                      className={`font-semibold ${resendSeconds > 0 ? "text-[#9BB0CC]" : "text-brandGreen hover:underline"}`}
                    >
                      {t.officerWizard.resendButton}
                      {resendSeconds > 0 ? ` (00:${String(resendSeconds).padStart(2, "0")})` : ""}
                    </button>
                  </p>

                  <div className="mt-5">
                    <InfoBox text={t.officerWizard.otpInfo} />
                  </div>

                  <div className="mt-6 text-left">
                    <label className="flex cursor-pointer items-start gap-2.5 text-sm font-medium text-[#4C6386]">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => {
                          setAgreed(e.target.checked);
                          setAgreedError(null);
                        }}
                        className="mt-0.5 accent-brandGreen"
                      />
                      <span className="underline decoration-dotted underline-offset-2">{t.registerForm.termsText}</span>
                    </label>
                    {agreedError && <p role="alert" className="mt-1.5 text-xs font-semibold text-[#B42318]">{agreedError}</p>}
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={goBack} className="focus-ring flex h-12 items-center justify-center rounded-lg border-2 border-[#DCE9F7] px-6 text-sm font-bold text-navy transition hover:bg-skyFaint">
                      {t.officerWizard.backButton}
                    </button>
                    <button
                      type="button"
                      onClick={handleVerify}
                      disabled={verifying}
                      className="focus-ring flex h-12 flex-1 items-center justify-center rounded-lg bg-brandGreen text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md disabled:opacity-60"
                    >
                      {verifying ? "…" : w.verifyButton}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 5 — ACCESS REQUEST SUBMITTED / PENDING APPROVAL */}
              {step === 5 && (
                <div className="text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-greenFaint">
                    <CheckCircle2 size={32} className="text-brandGreen" aria-hidden="true" />
                  </span>
                  <h1 className="mt-5 text-xl font-extrabold text-navy sm:text-2xl">{w.requestSubmittedHeading}</h1>
                  <p className="mt-2 text-sm leading-relaxed text-[#4C6386]">{w.requestSubmittedText}</p>
                  <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-2 rounded-full bg-[#FDF1E2] px-4 py-2 text-sm font-bold text-saffron">
                    <Clock size={15} aria-hidden="true" />
                    {w.pendingApprovalLabel}
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate("/dashboard/administrator")}
                    className="focus-ring mx-auto mt-8 flex h-12 items-center justify-center rounded-lg bg-brandGreen px-8 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md"
                  >
                    {w.goToDashboardButton}
                  </button>
                </div>
              )}
            </RegistrationCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminRegisterWizardPage;
