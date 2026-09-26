import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCog, Eye, EyeOff, Mail, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import LoginBackground from "../components/LoginBackground";
import Breadcrumb from "../components/Breadcrumb";
import SideInfoPanel from "../components/SideInfoPanel";
import RegistrationCard from "../components/RegistrationCard";
import ProgressStepper from "../components/ProgressStepper";
import FormField from "../components/FormField";
import SelectField from "../components/SelectField";
import CheckboxGroup from "../components/CheckboxGroup";
import PasswordStrength, { isPasswordStrongEnough } from "../components/PasswordStrength";
import OTPInput from "../components/OTPInput";
import InfoBox from "../components/InfoBox";
import { useAppStore, nextId } from "../state/appStore";
import { DEPARTMENTS, DESIGNATIONS, STATES, PREFERRED_LANGUAGES, EXPERIENCE_RANGES, ROLE_FUNCTIONS, STATISTICAL_DOMAINS } from "../data/registrationOptions";
import { otpService } from "../services/otpService";
import { registrationService } from "../services/registrationService";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_RE = /^[0-9]{10}$/;
const RESEND_SECONDS = 45;

interface FormData {
  fullName: string;
  officialEmail: string;
  mobile: string;
  officerId: string;
  department: string;
  designation: string;
  state: string;
  preferredLanguage: string;
  experience: string;
  role: string;
  domain: string;
  skillAreas: string[];
  responsibilities: string;
  password: string;
  confirmPassword: string;
}

const initialData: FormData = {
  fullName: "",
  officialEmail: "",
  mobile: "",
  officerId: "",
  department: "",
  designation: "",
  state: "",
  preferredLanguage: "English",
  experience: "",
  role: "",
  domain: "",
  skillAreas: [],
  responsibilities: "",
  password: "",
  confirmPassword: "",
};

/**
 * /register/officer — a single route holding all four wizard steps (plus a
 * fifth "success" view) in one centralized state object, so data entered in
 * any step survives moving forward or back. This was the cleaner of the two
 * architectures the brief allowed (multi-route-per-step vs. single route
 * with controlled state).
 */
const OfficerRegisterWizardPage: React.FC = () => {
  const { t } = useLanguage();
  const w = t.officerWizard;
  const v = t.validation;
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1-4 wizard, 5 = success
  const [data, setData] = useState<FormData>(initialData);
  const { registerOfficer } = useAppStore();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [otpDigits, setOtpDigits] = useState<string[]>(Array(6).fill(""));
  const [otpError, setOtpError] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [resendSeconds, setResendSeconds] = useState(RESEND_SECONDS);

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }

  // Countdown + send the OTP once the person reaches step 4.
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
    if (!data.officialEmail.trim()) e.officialEmail = v.requiredFields;
    if (!data.mobile.trim()) e.mobile = v.requiredFields;
    if (!data.officerId.trim()) e.officerId = v.requiredFields;
    if (!data.department) e.department = v.requiredFields;
    if (!data.designation) e.designation = v.requiredFields;
    if (!data.state) e.state = v.requiredFields;
    if (!data.preferredLanguage) e.preferredLanguage = v.requiredFields;
    if (data.officialEmail.trim() && !EMAIL_RE.test(data.officialEmail.trim())) e.officialEmail = v.invalidEmail;
    if (data.mobile.trim() && !MOBILE_RE.test(data.mobile.trim())) e.mobile = v.invalidMobile;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function validateStep2(): boolean {
    const e: Record<string, string> = {};
    if (!data.experience) e.experience = v.requiredFields;
    if (!data.role) e.role = v.requiredFields;
    if (!data.domain) e.domain = v.requiredFields;
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
    setVerifying(true);
    setOtpError(null);
    const result = await otpService.verifyOtp(data.officialEmail, code);
    if (!result.success) {
      setVerifying(false);
      setOtpError(v.otpIncorrect);
      return;
    }
    await registrationService.registerOfficer({
      fullName: data.fullName,
      officialEmail: data.officialEmail,
      mobile: data.mobile,
      officerId: data.officerId,
      department: data.department,
      designation: data.designation,
      state: data.state,
      preferredLanguage: data.preferredLanguage,
      experience: data.experience,
      role: data.role,
      domain: data.domain,
      skillAreas: data.skillAreas,
      responsibilities: data.responsibilities,
      password: data.password, // never logged or persisted client-side beyond this call
    });
    // A newly registered officer starts with empty competency/skill-gap/
    // progress state in the shared store (never fabricated personal data).
    registerOfficer({
      id: nextId("officer"),
      name: data.fullName,
      designation: data.designation,
      department: data.department,
      employeeId: data.officerId,
      jobRole: data.role || data.designation,
      currentAssignment: data.responsibilities || "Not yet assigned",
      educationalQualifications: "Not provided",
      workExperience: data.experience || "Not provided",
      previousTraining: "None recorded yet",
    });
    setVerifying(false);
    setStep(5);
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-skyFaint to-white">
      <LoginBackground />

      <div className="relative mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
        <Breadcrumb current={t.loginGateway.officerTitle} trail={[{ label: t.nav.register, to: "/register" }]} />

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.6fr]">
          <SideInfoPanel variant="officer" />

          <div className="flex justify-center">
            <RegistrationCard maxWidth="max-w-2xl">
              {step <= 4 && (
                <>
                  <div className="flex flex-col items-center text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-skyLight">
                      <UserCog size={26} className="text-brandBlue" aria-hidden="true" />
                    </span>
                    <h1 className="mt-4 text-xl font-extrabold text-navy sm:text-2xl">{w.heading}</h1>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-[#4C6386]">{w.subtitle}</p>
                  </div>

                  <div className="mt-8">
                    <ProgressStepper steps={w.steps} currentStep={step} />
                  </div>
                </>
              )}

              {/* STEP 1 — BASIC INFORMATION */}
              {step === 1 && (
                <div className="mt-8">
                  <h2 className="text-lg font-extrabold text-navy">{w.step1Heading}</h2>
                  <p className="mt-1 text-sm text-[#4C6386]">{w.step1Subtitle}</p>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField id="fullName" label={t.registerForm.fullNameLabel} placeholder={t.registerForm.fullNamePlaceholder} value={data.fullName} onChange={(val) => update("fullName", val)} error={errors.fullName} />
                    <FormField id="officialEmail" type="email" label={w.officialEmailLabel} placeholder={w.officialEmailPlaceholder} value={data.officialEmail} onChange={(val) => update("officialEmail", val)} error={errors.officialEmail} />
                    <FormField id="mobile" type="tel" label={t.registerForm.mobileLabel} placeholder={w.officerMobilePlaceholder} value={data.mobile} onChange={(val) => update("mobile", val)} error={errors.mobile} />
                    <FormField id="officerId" label={w.officerIdLabel} placeholder={w.officerIdPlaceholder} value={data.officerId} onChange={(val) => update("officerId", val)} error={errors.officerId} />
                    <SelectField id="department" label={w.departmentLabel} placeholder={w.departmentPlaceholder} value={data.department} options={DEPARTMENTS} onChange={(val) => update("department", val)} error={errors.department} />
                    <SelectField id="designation" label={w.designationLabel} placeholder={w.designationPlaceholder} value={data.designation} options={DESIGNATIONS} onChange={(val) => update("designation", val)} error={errors.designation} />
                    <SelectField id="state" label={w.stateLabel} placeholder={w.statePlaceholder} value={data.state} options={STATES} onChange={(val) => update("state", val)} error={errors.state} />
                    <SelectField id="preferredLanguage" label={w.languageLabel} placeholder={w.languageLabel} value={data.preferredLanguage} options={PREFERRED_LANGUAGES} onChange={(val) => update("preferredLanguage", val)} error={errors.preferredLanguage} />
                  </div>
                  <button
                    type="button"
                    onClick={goNext}
                    className="focus-ring mt-8 flex h-12 w-full items-center justify-center rounded-lg bg-brandBlue text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md sm:w-auto sm:px-8"
                  >
                    {w.nextButton}
                  </button>
                </div>
              )}

              {/* STEP 2 — PROFESSIONAL DETAILS */}
              {step === 2 && (
                <div className="mt-8">
                  <h2 className="text-lg font-extrabold text-navy">{w.step2Heading}</h2>
                  <p className="mt-1 text-sm text-[#4C6386]">{w.step2Subtitle}</p>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <SelectField id="experience" label={w.experienceLabel} placeholder={w.experiencePlaceholder} value={data.experience} options={EXPERIENCE_RANGES} onChange={(val) => update("experience", val)} error={errors.experience} />
                    <SelectField id="role" label={w.roleLabel} placeholder={w.rolePlaceholder} value={data.role} options={ROLE_FUNCTIONS} onChange={(val) => update("role", val)} error={errors.role} />
                    <SelectField id="domain" label={w.domainLabel} placeholder={w.domainPlaceholder} value={data.domain} options={STATISTICAL_DOMAINS} onChange={(val) => update("domain", val)} error={errors.domain} />
                    <div className="sm:col-span-2">
                      <CheckboxGroup
                        heading={w.skillsHeading}
                        subtitle={w.skillsSubtitle}
                        options={w.skillOptions}
                        selected={data.skillAreas}
                        onChange={(sel) => update("skillAreas", sel)}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="responsibilities" className="mb-1.5 block text-sm font-semibold text-navy">
                        {w.responsibilitiesLabel}
                      </label>
                      <textarea
                        id="responsibilities"
                        rows={3}
                        placeholder={w.responsibilitiesPlaceholder}
                        value={data.responsibilities}
                        onChange={(e) => update("responsibilities", e.target.value)}
                        className="w-full resize-none rounded-lg border border-[#DCE9F7] bg-white px-3.5 py-2.5 text-sm text-navy outline-none focus:border-brandBlue"
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={goBack} className="focus-ring flex h-12 items-center justify-center rounded-lg border-2 border-[#DCE9F7] px-6 text-sm font-bold text-navy transition hover:bg-skyFaint">
                      {w.backButton}
                    </button>
                    <button type="button" onClick={goNext} className="focus-ring flex h-12 flex-1 items-center justify-center rounded-lg bg-brandBlue text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md sm:flex-none sm:px-8">
                      {w.nextButton}
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
                      <div className={`flex items-center gap-2 rounded-lg border bg-white px-3.5 transition ${errors.password ? "border-[#E4B4AE]" : "border-[#DCE9F7] focus-within:border-brandBlue"}`}>
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
                      <div className={`flex items-center gap-2 rounded-lg border bg-white px-3.5 transition ${errors.confirmPassword ? "border-[#E4B4AE]" : "border-[#DCE9F7] focus-within:border-brandBlue"}`}>
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
                    <PasswordStrength password={data.password} requirementLabels={w.passwordRequirements} strengthLabel={w.passwordStrengthLabel} />
                  </div>
                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={goBack} className="focus-ring flex h-12 items-center justify-center rounded-lg border-2 border-[#DCE9F7] px-6 text-sm font-bold text-navy transition hover:bg-skyFaint">
                      {w.backButton}
                    </button>
                    <button type="button" onClick={goNext} className="focus-ring flex h-12 flex-1 items-center justify-center rounded-lg bg-brandBlue text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md sm:flex-none sm:px-8">
                      {w.createAccountButton}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4 — OTP VERIFICATION */}
              {step === 4 && (
                <div className="mt-8 text-center">
                  <h2 className="text-lg font-extrabold text-navy">{w.step4Heading}</h2>
                  <p className="mt-1 text-sm text-[#4C6386]">{w.step4Text}</p>
                  <p className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-navy">
                    <Mail size={15} className="text-brandBlue" aria-hidden="true" />
                    {data.officialEmail}
                    <button type="button" onClick={() => setStep(1)} className="focus-ring text-xs font-semibold text-brandBlue hover:underline">
                      {w.changeLink}
                    </button>
                  </p>

                  <div className="mt-6">
                    <OTPInput value={otpDigits} onChange={setOtpDigits} error={!!otpError} />
                    {otpError && <p role="alert" className="mt-3 text-sm font-semibold text-[#B42318]">{otpError}</p>}
                  </div>

                  <p className="mt-5 text-sm text-[#4C6386]">
                    {w.resendQuestion}{" "}
                    <button
                      type="button"
                      onClick={handleResend}
                      disabled={resendSeconds > 0}
                      className={`font-semibold ${resendSeconds > 0 ? "text-[#9BB0CC]" : "text-brandBlue hover:underline"}`}
                    >
                      {w.resendButton}
                      {resendSeconds > 0 ? ` (00:${String(resendSeconds).padStart(2, "0")})` : ""}
                    </button>
                  </p>

                  <div className="mt-5">
                    <InfoBox text={w.otpInfo} />
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={goBack} className="focus-ring flex h-12 items-center justify-center rounded-lg border-2 border-[#DCE9F7] px-6 text-sm font-bold text-navy transition hover:bg-skyFaint">
                      {w.backButton}
                    </button>
                    <button
                      type="button"
                      onClick={handleVerify}
                      disabled={verifying}
                      className="focus-ring flex h-12 flex-1 items-center justify-center rounded-lg bg-brandBlue text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md disabled:opacity-60"
                    >
                      {verifying ? "…" : w.verifyButton}
                    </button>
                  </div>
                </div>
              )}

              {/* SUCCESS */}
              {step === 5 && (
                <div className="text-center">
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-greenFaint">
                    <CheckCircle2 size={32} className="text-brandGreen" aria-hidden="true" />
                  </span>
                  <h1 className="mt-5 text-xl font-extrabold text-navy sm:text-2xl">{w.successHeading}</h1>
                  <p className="mt-2 text-sm leading-relaxed text-[#4C6386]">{w.successText}</p>
                  <div className="mx-auto mt-6 max-w-sm rounded-lg bg-skyFaint px-4 py-3 text-sm text-navy">
                    <p>{w.confirmationSentTo}</p>
                    <p className="mt-1 font-semibold">{data.officialEmail}</p>
                  </div>
                  <p className="mt-4 text-sm text-[#4C6386]">{w.checkInboxText}</p>
                  <button
                    type="button"
                    onClick={() => navigate("/dashboard/officer")}
                    className="focus-ring mx-auto mt-6 flex h-12 items-center justify-center rounded-lg bg-brandBlue px-8 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md"
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

export default OfficerRegisterWizardPage;
