import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import LegalPageShell, { LegalSection } from "../components/LegalPageShell";

const sections: LegalSection[] = [
  {
    heading: "1. Information We Collect",
    paragraphs: [
      "When you register or use Karmayogi-StatAI, we collect information you provide directly, such as your name, official email address, employee/officer ID, department, designation, and contact number, along with information generated as you use the platform.",
    ],
  },
  {
    heading: "2. Profile, Learning and Assessment Data",
    paragraphs: [
      "To support your personal learning journey, we maintain a Competency Profile (designation, department, job role, current assignment, qualifications, experience and previous training) along with data from your activity on the platform.",
    ],
    bullets: [
      "Competency scores and skill-gap results from assessments you complete",
      "Courses, learning paths and resources you view, start or complete",
      "Quiz and assessment attempts, answers and scores",
      "Learning hours logged and overall progress",
      "Interactions with the AI virtual assistant, for the purpose of improving your learning support",
    ],
  },
  {
    heading: "3. How We Use Your Information",
    paragraphs: ["We use the information above to operate and improve the platform, specifically to:"],
    bullets: [
      "Generate your Competency Profile and track competency levels over time",
      "Run AI-based competency assessments and automated skill-gap analysis",
      "Generate personalized recommendations, including iGOT Karmayogi course modules and NSSTA TPAC recommended training programmes",
      "Build and update your personalized learning path",
      "Provide organization-wide analytics to administrators in aggregate, de-identified form wherever practicable",
    ],
  },
  {
    heading: "4. Data Security",
    paragraphs: [
      "We apply reasonable administrative, technical and physical safeguards to protect your information against unauthorized access, alteration, disclosure or destruction. No method of storage or transmission is completely secure, and this prototype does not yet implement production-grade security controls, real authentication, or backend infrastructure.",
    ],
  },
  {
    heading: "5. Data Sharing and Integrations",
    paragraphs: [
      "Karmayogi-StatAI is designed to integrate conceptually with iGOT Karmayogi and NSSTA training systems. In a production deployment, limited profile and progress data may be shared with these systems solely to deliver and track recommended training. We do not sell personal information to third parties. This prototype does not currently connect to any real external system, API, or single sign-on (SSO) provider.",
    ],
  },
  {
    heading: "6. Cookies and Session Data",
    paragraphs: [
      "The platform may use cookies or local browser storage to remember basic preferences, such as your selected language, and to maintain your session while logged in. These are used only to support core functionality and are not used for third-party advertising or tracking.",
    ],
  },
  {
    heading: "7. Your Rights",
    paragraphs: [
      "Subject to applicable government data protection rules, you may request access to, correction of, or deletion of your personal information held by the platform, and may ask questions about how your data is used. Requests can be directed to the contact below.",
    ],
  },
  {
    heading: "8. Contact Information",
    paragraphs: [
      "For questions about this Privacy Policy or your data, please contact:",
      "Karmayogi-StatAI Support Desk (placeholder)",
      "Email: privacy@karmayogi-statai.example.gov.in (placeholder)",
      "Phone: +91-11-XXXX-XXXX (placeholder)",
    ],
  },
];

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <LegalPageShell
      title={t.footer.privacy}
      lastUpdated="Last updated: 25 September 2026"
      intro="This Privacy Policy explains what information Karmayogi-StatAI collects, why, and how it is used and protected. It applies to Statistical Officers and Administrators using this prototype platform."
      disclaimer="This is a placeholder policy for a frontend prototype of Karmayogi-StatAI and does not constitute an official Government of India policy or legal document."
      sections={sections}
    />
  );
};

export default PrivacyPolicyPage;
