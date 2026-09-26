import { delay } from "./delay";

export interface OfficerRegistrationData {
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
}

export interface AdminRegistrationData {
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
}

export interface RegistrationResult {
  success: boolean;
  message?: string;
}

/**
 * Officer registration service abstraction. `registerOfficer` is called
 * only after OTP verification succeeds. The mock never stores the password
 * anywhere (not in state, not in localStorage) beyond the single call —
 * a real implementation should hash it server-side and this function
 * should send it over TLS and immediately let it fall out of scope.
 */
export const registrationService = {
  async registerOfficer(data: OfficerRegistrationData): Promise<RegistrationResult> {
    await delay(700);
    // Placeholder: replace with a real API call, e.g.
    //   await fetch('/api/register/officer', { method: 'POST', body: JSON.stringify(data) });
    void data;
    return { success: true };
  },

  async registerAdmin(data: AdminRegistrationData): Promise<RegistrationResult> {
    await delay(700);
    // Placeholder: replace with a real API call, e.g.
    //   await fetch('/api/register/administrator', { method: 'POST', body: JSON.stringify(data) });
    void data;
    return { success: true };
  },
};
