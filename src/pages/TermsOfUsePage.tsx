import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import LegalPageShell, { LegalSection } from "../components/LegalPageShell";

const sections: LegalSection[] = [
  {
    heading: "1. Platform Purpose",
    paragraphs: [
      "Karmayogi-StatAI is an AI-enabled Skill Intelligence & Learning Platform intended for India's official statistical system, designed to help Statistical Officers assess competencies, identify skill gaps, and access personalized learning, and to help Administrators manage workforce competency, training effectiveness and capacity-building at an organizational level. It is intended to integrate conceptually with iGOT Karmayogi and NSSTA training programmes.",
    ],
  },
  {
    heading: "2. User and Account Responsibilities",
    paragraphs: ["By creating an account, you agree to:"],
    bullets: [
      "Provide accurate information during registration, including designation, department and contact details",
      "Keep your login credentials confidential and not share your account with others",
      "Promptly update your Competency Profile if your role, department or assignment changes",
      "Notify an administrator if you believe your account has been accessed without authorization",
    ],
  },
  {
    heading: "3. Acceptable Use",
    paragraphs: ["You agree not to:"],
    bullets: [
      "Use the platform for any unlawful purpose or in violation of applicable government conduct rules",
      "Attempt to gain unauthorized access to another user's account, data or the underlying systems",
      "Upload content that is unlawful, infringing, or unrelated to official training and assessment purposes",
      "Interfere with or disrupt the platform's normal operation",
    ],
  },
  {
    heading: "4. Learning and Assessment Content",
    paragraphs: [
      "Courses, assessments, quizzes and recommendations presented on the platform — including those generated using AI-assisted tools from uploaded learning content — are provided for professional development purposes. Assessment results, competency scores and skill-gap analyses are indicative and intended to guide learning; they do not by themselves constitute an official performance appraisal.",
    ],
  },
  {
    heading: "5. External Services and Integrations",
    paragraphs: [
      "References to iGOT Karmayogi course modules and NSSTA TPAC recommended training programmes describe how this platform is intended to work alongside those systems. This prototype does not yet connect to any live iGOT API, NSSTA system, single sign-on (SSO) provider, or other external backend service; all such data shown is currently mock/sample data for demonstration purposes.",
    ],
  },
  {
    heading: "6. Intellectual Property",
    paragraphs: [
      "The Karmayogi-StatAI name, interface design and platform content are provided for use within India's official statistical system. Course content sourced from iGOT Karmayogi, NSSTA, or other training providers remains the property of its respective owner. Nothing in these Terms transfers ownership of any third-party content to you.",
    ],
  },
  {
    heading: "7. Disclaimer",
    paragraphs: [
      "This platform is currently a frontend prototype provided \u201cas is\u201d, without warranties of any kind, express or implied, including as to accuracy, availability or fitness for a particular purpose. AI-based features (competency assessment, skill-gap analysis, recommendations, the virtual assistant, and quiz generation) are simulated using mock data and are not yet backed by a real model, and should not be relied upon for official decision-making.",
    ],
  },
  {
    heading: "8. Account Termination",
    paragraphs: [
      "Access may be suspended or terminated if these Terms are violated, if an account is found to contain fraudulent information, or at the request of the officer's or administrator's parent department. You may request closure of your own account at any time via the contact details below.",
    ],
  },
  {
    heading: "9. Changes to These Terms",
    paragraphs: [
      "These Terms may be updated from time to time as the platform evolves. Material changes will be reflected by updating the \u201cLast updated\u201d date on this page. Continued use of the platform after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "10. Contact Information",
    paragraphs: [
      "For questions about these Terms of Use, please contact:",
      "Karmayogi-StatAI Support Desk (placeholder)",
      "Email: support@karmayogi-statai.example.gov.in (placeholder)",
      "Phone: +91-11-XXXX-XXXX (placeholder)",
    ],
  },
];

const TermsOfUsePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <LegalPageShell
      title={t.footer.terms}
      lastUpdated="Last updated: 25 September 2026"
      intro="These Terms of Use govern access to and use of the Karmayogi-StatAI platform by Statistical Officers and Administrators. By using this platform, you agree to these Terms."
      disclaimer="This is a placeholder Terms of Use document for a frontend prototype of Karmayogi-StatAI and does not constitute an official Government of India policy or legal document."
      sections={sections}
    />
  );
};

export default TermsOfUsePage;
