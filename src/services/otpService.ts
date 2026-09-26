import { delay } from "./delay";

export interface OtpResult {
  success: boolean;
  message?: string;
}

/**
 * OTP service abstraction. In a real deployment, `sendOtp` triggers a
 * server-generated one-time code emailed to the user, and `verifyOtp` checks
 * it server-side — the code itself never reaches the browser.
 *
 * For this frontend-only prototype there is no backend to generate or check
 * a code, so a single mock code is used to let the flow be exercised end to
 * end. It is read from an env var (falling back to a fixed dev value) and
 * is never rendered in the UI, so a person can only "know" it by reading
 * this source file or the environment configuration — not by inspecting
 * the page. Replace both methods with real API calls when a backend exists.
 */
const DEV_MOCK_OTP = (import.meta as any).env?.VITE_MOCK_OTP || "123456";

export const otpService = {
  async sendOtp(email: string): Promise<OtpResult> {
    await delay(500);
    // Placeholder: replace with a real API call, e.g.
    //   await fetch('/api/otp/send', { method: 'POST', body: JSON.stringify({ email }) });
    void email;
    return { success: true };
  },

  async verifyOtp(email: string, code: string): Promise<OtpResult> {
    await delay(450);
    // Placeholder: replace with a real API call that checks the code
    // server-side against the one it generated for this email.
    void email;
    if (code === DEV_MOCK_OTP) {
      return { success: true };
    }
    return { success: false, message: "incorrect" };
  },
};
