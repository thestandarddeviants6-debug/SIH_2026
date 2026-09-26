// Frontend-only mock data for the Administrator's AI Assessment workflow:
// upload content -> configure -> generate -> review/edit -> publish ->
// (mock) officer attempts -> results. No real LLM/upload backend exists —
// "generation" filters a fixed local question pool by domain/difficulty.

export type AssessmentDifficulty = "Easy" | "Medium" | "Hard";
export type AssessmentType = "MCQ" | "Quiz";
export type AssessmentStatus = "Draft" | "Published" | "Unpublished";

export const COMPETENCY_DOMAINS = ["Statistical", "Technical", "Digital Governance", "Behavioural/Managerial"] as const;
export type CompetencyDomain = (typeof COMPETENCY_DOMAINS)[number];

export const ASSESSMENT_LANGUAGES = ["English", "हिन्दी", "मराठी"] as const;

export interface AdminQuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  competency: CompetencyDomain;
  difficulty: AssessmentDifficulty;
}

export interface PublishedAssessment {
  id: string;
  name: string;
  competency: CompetencyDomain;
  assessmentType: AssessmentType;
  difficulty: AssessmentDifficulty;
  language: string;
  status: AssessmentStatus;
  createdDate: string;
  publishedDate?: string;
  questions: AdminQuizQuestion[];
}

export interface AssessmentResult {
  assessmentName: string;
  competency: CompetencyDomain;
  officersInvited: number;
  attempts: number;
  completionRate: number; // %
  avgScore: number; // %
  passRate: number; // %
  competencyImpact: string;
}

let idCounter = 1000;
export function nextMockId(prefix: string): string {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

// A fixed local pool the "AI Generate" step draws from, filtered by the
// selected competency domain and (where possible) difficulty. Standing in
// for a real generation call from uploaded content.
export const generatedQuestionPool: Record<CompetencyDomain, AdminQuizQuestion[]> = {
  Statistical: [
    {
      id: "pool-stat-1",
      prompt: "Which sampling method reduces selection bias in stratified surveys?",
      options: ["Convenience sampling", "Stratified random sampling", "Snowball sampling", "Quota sampling"],
      correctIndex: 1,
      explanation: "Stratified random sampling ensures every subgroup is proportionally represented, reducing selection bias compared to non-probability methods.",
      competency: "Statistical",
      difficulty: "Medium",
    },
    {
      id: "pool-stat-2",
      prompt: "What does a non-response rate measure in a survey?",
      options: ["The proportion of the sample that did not participate", "The number of blank questions", "The margin of error", "The confidence interval width"],
      correctIndex: 0,
      explanation: "Non-response rate is the share of the selected sample that could not be contacted or refused to respond, which can bias results if not addressed.",
      competency: "Statistical",
      difficulty: "Easy",
    },
    {
      id: "pool-stat-3",
      prompt: "In national accounts, what does GVA stand for?",
      options: ["Gross Value Added", "General Variance Analysis", "Government Valuation Authority", "Gross Volume Assessment"],
      correctIndex: 0,
      explanation: "Gross Value Added measures the value of goods and services produced, before adding taxes and subtracting subsidies.",
      competency: "Statistical",
      difficulty: "Easy",
    },
    {
      id: "pool-stat-4",
      prompt: "Which index is commonly used to track retail price inflation in India?",
      options: ["Consumer Price Index (CPI)", "Human Development Index", "Gini Index", "Purchasing Managers' Index"],
      correctIndex: 0,
      explanation: "CPI tracks changes in the price level of a basket of consumer goods and services over time.",
      competency: "Statistical",
      difficulty: "Easy",
    },
    {
      id: "pool-stat-5",
      prompt: "What is the primary purpose of metadata in an official statistics dataset?",
      options: ["To reduce file size", "To document context needed to interpret and reuse data correctly", "To replace the need for data validation", "To encrypt sensitive records"],
      correctIndex: 1,
      explanation: "Metadata documents definitions, methodology and coverage so data can be correctly interpreted, compared and reused.",
      competency: "Statistical",
      difficulty: "Hard",
    },
  ],
  Technical: [
    {
      id: "pool-tech-1",
      prompt: "Which Python library is most associated with data wrangling?",
      options: ["matplotlib", "pandas", "requests", "flask"],
      correctIndex: 1,
      explanation: "pandas provides dataframes and tools purpose-built for cleaning, reshaping and analyzing tabular data.",
      competency: "Technical",
      difficulty: "Easy",
    },
    {
      id: "pool-tech-2",
      prompt: "Which chart type best shows change over time?",
      options: ["Pie chart", "Line chart", "Scatter plot", "Box plot"],
      correctIndex: 1,
      explanation: "Line charts plot a continuous variable against time, making trends easy to follow.",
      competency: "Technical",
      difficulty: "Easy",
    },
    {
      id: "pool-tech-3",
      prompt: "What does a choropleth map represent?",
      options: ["Point locations only", "Data values across geographic regions using shading", "Time-series trends", "Correlation between two variables"],
      correctIndex: 1,
      explanation: "Choropleth maps shade regions according to a data value, useful for showing geographic variation in survey indicators.",
      competency: "Technical",
      difficulty: "Medium",
    },
    {
      id: "pool-tech-4",
      prompt: "What should be validated before merging two datasets by a key field?",
      options: ["That the key fields match on both sides", "That column order matches", "That file size is identical", "That both files use the same font"],
      correctIndex: 0,
      explanation: "Validating that join keys are consistent (type, format, duplicates) prevents silent data loss or duplication during a merge.",
      competency: "Technical",
      difficulty: "Medium",
    },
    {
      id: "pool-tech-5",
      prompt: "In a regression model, what does multicollinearity refer to?",
      options: ["Missing values in the dataset", "High correlation between predictor variables", "A non-linear relationship", "An imbalanced sample"],
      correctIndex: 1,
      explanation: "Multicollinearity occurs when predictors are highly correlated with each other, which can distort coefficient estimates.",
      competency: "Technical",
      difficulty: "Hard",
    },
  ],
  "Digital Governance": [
    {
      id: "pool-dg-1",
      prompt: "What is the main purpose of two-factor authentication?",
      options: ["Faster login", "An additional layer of identity verification beyond a password", "Automatic password reset", "Reducing server load"],
      correctIndex: 1,
      explanation: "2FA requires a second factor (like an OTP or authenticator app) in addition to a password, making unauthorized access harder.",
      competency: "Digital Governance",
      difficulty: "Easy",
    },
    {
      id: "pool-dg-2",
      prompt: "Which principle is central to data privacy regulations?",
      options: ["Collecting as much data as possible", "Purpose limitation — using data only for stated purposes", "Storing data indefinitely", "Sharing data freely with all departments"],
      correctIndex: 1,
      explanation: "Purpose limitation restricts use of personal data to the specific purposes it was collected for.",
      competency: "Digital Governance",
      difficulty: "Medium",
    },
    {
      id: "pool-dg-3",
      prompt: "What is a key risk of using Government Cloud without proper access controls?",
      options: ["Higher storage cost", "Unauthorized data access", "Slower processing", "Reduced uptime"],
      correctIndex: 1,
      explanation: "Without role-based access controls, cloud-hosted sensitive data is exposed to unauthorized users.",
      competency: "Digital Governance",
      difficulty: "Medium",
    },
    {
      id: "pool-dg-4",
      prompt: "A digital signature primarily provides which guarantee?",
      options: ["Faster document transfer", "Authenticity and integrity of a document", "Automatic translation", "Free storage"],
      correctIndex: 1,
      explanation: "Digital signatures cryptographically verify who signed a document and that it hasn't been altered since.",
      competency: "Digital Governance",
      difficulty: "Easy",
    },
    {
      id: "pool-dg-5",
      prompt: "Digital Public Infrastructure (DPI) is best described as:",
      options: ["A single government website", "Shared, interoperable digital systems that enable public services at scale", "A private company's internal IT system", "A type of encryption algorithm"],
      correctIndex: 1,
      explanation: "DPI refers to foundational, interoperable digital systems (identity, payments, data exchange) that many services can build on.",
      competency: "Digital Governance",
      difficulty: "Hard",
    },
  ],
  "Behavioural/Managerial": [
    {
      id: "pool-bm-1",
      prompt: "Which of these is a core principle of ethical public service?",
      options: ["Prioritizing personal gain", "Accountability and integrity", "Avoiding documentation", "Working in isolation"],
      correctIndex: 1,
      explanation: "Accountability and integrity are foundational to ethical conduct in public administration.",
      competency: "Behavioural/Managerial",
      difficulty: "Easy",
    },
    {
      id: "pool-bm-2",
      prompt: "In project management, what does a RACI matrix help clarify?",
      options: ["Budget forecasts", "Roles and responsibilities across a project", "Software licensing", "Data storage limits"],
      correctIndex: 1,
      explanation: "RACI (Responsible, Accountable, Consulted, Informed) maps who does what on a project to avoid ambiguity.",
      competency: "Behavioural/Managerial",
      difficulty: "Medium",
    },
    {
      id: "pool-bm-3",
      prompt: "Which leadership style is most associated with empowering team members to make decisions?",
      options: ["Autocratic", "Delegative/participative", "Laissez-faire without support", "Micromanagement"],
      correctIndex: 1,
      explanation: "A delegative or participative style shares decision-making authority while still providing guidance and support.",
      competency: "Behavioural/Managerial",
      difficulty: "Medium",
    },
    {
      id: "pool-bm-4",
      prompt: "What is a common first step in effective change management?",
      options: ["Announcing change with no explanation", "Clearly communicating the reason and expected impact of the change", "Skipping stakeholder input", "Implementing without a timeline"],
      correctIndex: 1,
      explanation: "Clear communication of the rationale and impact builds understanding and reduces resistance to change.",
      competency: "Behavioural/Managerial",
      difficulty: "Easy",
    },
    {
      id: "pool-bm-5",
      prompt: "Which factor most improves decision-making under uncertainty?",
      options: ["Ignoring available data", "Structured evaluation of options against available evidence", "Deciding as quickly as possible regardless of information", "Delegating all decisions permanently"],
      correctIndex: 1,
      explanation: "Structured evaluation of options against evidence reduces bias and improves the quality of decisions made under uncertainty.",
      competency: "Behavioural/Managerial",
      difficulty: "Hard",
    },
  ],
};

// Seed data so the Published Assessments / Generated Questions / Results
// sections aren't empty on first load — represents assessments an
// administrator already created before this session.
const seedQuestions = generatedQuestionPool.Statistical.slice(0, 3);

export const initialPublishedAssessments: PublishedAssessment[] = [
  {
    id: nextMockId("assess"),
    name: "Survey Methodology — Module Quiz",
    competency: "Statistical",
    assessmentType: "Quiz",
    difficulty: "Medium",
    language: "English",
    status: "Published",
    createdDate: "18 Sep 2026",
    publishedDate: "20 Sep 2026",
    questions: seedQuestions,
  },
  {
    id: nextMockId("assess"),
    name: "Data Visualization — Practical Assessment",
    competency: "Technical",
    assessmentType: "MCQ",
    difficulty: "Medium",
    language: "English",
    status: "Published",
    createdDate: "10 Sep 2026",
    publishedDate: "12 Sep 2026",
    questions: generatedQuestionPool.Technical.slice(0, 3),
  },
  {
    id: nextMockId("assess"),
    name: "Cyber Hygiene Readiness Check",
    competency: "Digital Governance",
    assessmentType: "MCQ",
    difficulty: "Easy",
    language: "English",
    status: "Draft",
    createdDate: "23 Sep 2026",
    questions: generatedQuestionPool["Digital Governance"].slice(0, 2),
  },
];

export const initialGeneratedQuestionsLog: AdminQuizQuestion[] = [
  ...generatedQuestionPool.Statistical.slice(0, 3),
  ...generatedQuestionPool.Technical.slice(0, 3),
  ...generatedQuestionPool["Digital Governance"].slice(0, 2),
];

export const adminAssessmentResults: AssessmentResult[] = [
  {
    assessmentName: "Survey Methodology — Module Quiz",
    competency: "Statistical",
    officersInvited: 850,
    attempts: 612,
    completionRate: 72,
    avgScore: 66,
    passRate: 78,
    competencyImpact: "+6 pts avg. Statistical competency",
  },
  {
    assessmentName: "Data Visualization — Practical Assessment",
    competency: "Technical",
    officersInvited: 540,
    attempts: 401,
    completionRate: 74,
    avgScore: 71,
    passRate: 81,
    competencyImpact: "+5 pts avg. Technical competency",
  },
  {
    assessmentName: "Data Analysis — Final Assessment",
    competency: "Technical",
    officersInvited: 700,
    attempts: 588,
    completionRate: 84,
    avgScore: 69,
    passRate: 75,
    competencyImpact: "+7 pts avg. Technical competency",
  },
];
