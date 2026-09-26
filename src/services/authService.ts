import { delay } from "./delay";

export interface LoginCredentials {
  id: string;
  password: string;
  role: "officer" | "admin";
}

export interface AuthResult {
  success: boolean;
  message?: string;
}

/**
 * Authentication service abstraction. Every method here is a mock that
 * simulates a network round trip and always succeeds — this keeps the UI
 * fully wireable today while making the swap to a real backend a matter of
 * replacing the function bodies below, not touching any calling component.
 *
 * IMPORTANT: never send or persist plaintext passwords to a real backend
 * over anything but TLS, and never log them. This mock exists purely to
 * exercise the frontend flow.
 */
export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResult> {
    await delay(500);
    // Placeholder: replace with a real API call, e.g.
    //   const res = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify(credentials) });
    void credentials;
    return { success: true };
  },
};
