// Frontend-only mock data for the Statistical Officer's personal learning
// journey, aligned to the SIH problem statement's competency taxonomy and
// recommendation sources (iGOT Karmayogi / NSSTA TPAC). No backend yet.

export const officerProfile = {
  name: "Anjali Deshmukh",
  designation: "Statistical Officer",
  department: "National Statistical Office (NSO)",
  employeeId: "OFF-20481",
};

// Full Competency Profile shown on its own tab — richer than the header
// summary above.
export const officerCompetencyProfile = {
  designation: "Statistical Officer",
  department: "National Statistical Office (NSO)",
  jobRole: "Survey Data Analyst",
  currentAssignment: "Periodic Labour Force Survey (PLFS) — Data Processing Unit",
  educationalQualifications: "M.Sc. Statistics, Savitribai Phule Pune University",
  workExperience: "6 years in official statistics (NSO, State Statistical Bureau)",
  previousTraining: "Foundations of Official Statistics (2022), Data Analysis with R (2023)",
};

export const officerLearningHours = 42; // hours logged this quarter
export const officerOverallScore = 68;
export const officerOverallProgress = 61; // % through current learning path

// Competency taxonomy, grouped into the four SIH-specified categories.
// Each item carries a mock proficiency score (0-100).
export const officerCompetencyCategories = [
  {
    category: "Statistical",
    items: [
      { skill: "Survey Design", score: 74 },
      { skill: "Sampling", score: 66 },
      { skill: "National Accounts", score: 58 },
      { skill: "Price Statistics", score: 61 },
      { skill: "Labour Statistics", score: 79 },
      { skill: "Agricultural Statistics", score: 55 },
      { skill: "Industrial Statistics", score: 50 },
      { skill: "SDG Indicators", score: 60 },
      { skill: "Metadata", score: 63 },
      { skill: "Data Quality", score: 70 },
    ],
  },
  {
    category: "Technical",
    items: [
      { skill: "Python", score: 52 },
      { skill: "R", score: 78 },
      { skill: "SQL", score: 65 },
      { skill: "Stata", score: 60 },
      { skill: "SPSS", score: 57 },
      { skill: "SAS", score: 40 },
      { skill: "GIS", score: 45 },
      { skill: "Data Visualization", score: 71 },
      { skill: "AI/ML", score: 33 },
      { skill: "Cloud", score: 38 },
      { skill: "APIs", score: 41 },
      { skill: "Open Data", score: 59 },
    ],
  },
  {
    category: "Digital Governance",
    items: [
      { skill: "Cybersecurity", score: 48 },
      { skill: "Data Privacy", score: 54 },
      { skill: "Digital Signatures", score: 62 },
      { skill: "Government Cloud (MeghRaj)", score: 36 },
      { skill: "Digital Public Infrastructure", score: 44 },
    ],
  },
  {
    category: "Behavioural/Managerial",
    items: [
      { skill: "Leadership", score: 68 },
      { skill: "Communication", score: 80 },
      { skill: "Project Management", score: 57 },
      { skill: "Ethics", score: 88 },
      { skill: "Decision Making", score: 66 },
      { skill: "Change Management", score: 51 },
    ],
  },
];

// Flattened view used for the "Detected Skill Gaps" section on the
// dashboard, DERIVED from the competency scores above (bottom-scoring
// items) rather than a separate, disconnected hardcoded list — so the
// displayed gaps genuinely reflect the assessment data.
export interface SkillGap {
  skill: string;
  domain: string;
  score: number;
  severity: "high" | "medium" | "low";
}

function severityForScore(score: number): "high" | "medium" | "low" {
  if (score < 45) return "high";
  if (score < 60) return "medium";
  return "low";
}

export function deriveSkillGaps(topN = 5): SkillGap[] {
  const flattened = officerCompetencyCategories.flatMap((cat) =>
    cat.items.map((item) => ({ skill: item.skill, domain: cat.category, score: item.score }))
  );
  return flattened
    .sort((a, b) => a.score - b.score)
    .slice(0, topN)
    .map((item) => ({ ...item, severity: severityForScore(item.score) }));
}

/** Finds a named competency item anywhere in the taxonomy (case-insensitive,
 * whole-word match) — used by the AI assistant to answer "why is X a gap?"
 * for any skill name the officer types, not just a fixed example. Uses
 * word-boundary matching (not plain substring) so short names like "R" or
 * "SQL" don't false-match inside unrelated words/sentences. */
function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function findCompetencyItem(query: string): { skill: string; domain: string; score: number } | null {
  const q = query.trim().toLowerCase();
  if (!q) return null;
  for (const cat of officerCompetencyCategories) {
    for (const item of cat.items) {
      const skillLower = item.skill.toLowerCase();
      const pattern = new RegExp(`\\b${escapeRegExp(skillLower)}\\b`);
      if (pattern.test(q)) {
        return { skill: item.skill, domain: cat.category, score: item.score };
      }
    }
  }
  return null;
}

export const officerSkillGaps: SkillGap[] = deriveSkillGaps(5);

export type RecommendationSource = "iGOT Karmayogi" | "NSSTA TPAC";

export const officerRecommendations: {
  title: string;
  source: RecommendationSource;
  duration: string;
  level: string;
  domain: string;
}[] = [
  { title: "Introduction to Machine Learning for Official Statistics", source: "iGOT Karmayogi", duration: "4 weeks", level: "Beginner", domain: "Technical" },
  { title: "Cyber Hygiene & Data Privacy for Government Officers", source: "iGOT Karmayogi", duration: "1 week", level: "Beginner", domain: "Digital Governance" },
  { title: "Cloud Computing on Government Cloud (MeghRaj)", source: "NSSTA TPAC", duration: "3 days", level: "Intermediate", domain: "Digital Governance" },
  { title: "Advanced SAS Programming for Survey Data", source: "NSSTA TPAC", duration: "2 weeks", level: "Intermediate", domain: "Technical" },
];

export const officerLearningPath = [
  { title: "Foundations of Official Statistics", status: "completed" as const },
  { title: "Data Analysis with R", status: "completed" as const },
  { title: "Introduction to Machine Learning for Official Statistics", status: "in-progress" as const },
  { title: "Cyber Hygiene & Data Privacy for Government Officers", status: "upcoming" as const },
  { title: "Cloud Computing on Government Cloud (MeghRaj)", status: "upcoming" as const },
];

export const officerCourseProgress = [
  { title: "Introduction to Machine Learning for Official Statistics", progress: 45 },
  { title: "Data Analysis with R", progress: 100 },
  { title: "Report Writing for Policy Makers", progress: 80 },
];

// Learning Resources / Courses catalogue (its own tab) — spans both
// recommendation sources, tagged so officers can tell them apart.
export const officerCourseCatalogue: {
  title: string;
  source: RecommendationSource;
  domain: string;
  duration: string;
}[] = [
  { title: "Introduction to Machine Learning for Official Statistics", source: "iGOT Karmayogi", domain: "Technical", duration: "4 weeks" },
  { title: "Cyber Hygiene & Data Privacy for Government Officers", source: "iGOT Karmayogi", domain: "Digital Governance", duration: "1 week" },
  { title: "Cloud Computing on Government Cloud (MeghRaj)", source: "NSSTA TPAC", domain: "Digital Governance", duration: "3 days" },
  { title: "Advanced SAS Programming for Survey Data", source: "NSSTA TPAC", domain: "Technical", duration: "2 weeks" },
  { title: "Sampling Techniques in National Surveys", source: "NSSTA TPAC", domain: "Statistical", duration: "2 weeks" },
  { title: "Effective Dashboards with GIS Data", source: "iGOT Karmayogi", domain: "Technical", duration: "Self-paced" },
  { title: "Ethics & Integrity in Public Service", source: "iGOT Karmayogi", domain: "Behavioural/Managerial", duration: "3 days" },
  { title: "Project Management for Statistical Programmes", source: "NSSTA TPAC", domain: "Behavioural/Managerial", duration: "1 week" },
];

export const officerUpcomingAssessments = [
  { title: "Survey Methodology — Module Quiz", domain: "Statistical", date: "2 Oct 2026" },
  { title: "Data Visualization — Practical Assessment", domain: "Technical", date: "9 Oct 2026" },
];

export const officerRecentActivity = [
  { text: "Completed \u201cData Analysis with R\u201d", time: "2 days ago" },
  { text: "Scored 72% in Report Writing assessment", time: "5 days ago" },
  { text: "Started \u201cIntroduction to Machine Learning\u201d", time: "1 week ago" },
  { text: "Updated Competency Profile — added previous training", time: "2 weeks ago" },
];

// Fixed mock question bank for the interactive skill-gap analysis modal.
// Answers aren't scored for real — this is a frontend prototype — but the
// flow feels like a real adaptive, bot-style check-in.
export const skillGapQuestions = [
  {
    prompt: "How confident are you working with statistical software like R or Python?",
    options: ["Very confident", "Somewhat confident", "Just getting started", "Not confident at all"],
  },
  {
    prompt: "Have you worked with Government Cloud (MeghRaj) or similar cloud platforms?",
    options: ["Regularly", "A few times", "Only in training", "Never"],
  },
  {
    prompt: "How comfortable are you applying AI/ML concepts to official statistics work?",
    options: ["Very comfortable", "Comfortable with guidance", "Limited experience", "No experience"],
  },
];

// Assessment / quiz question banks with correct answers, used by the
// Assessments tab's "instant evaluation and feedback" quiz flow. One bank
// is explicitly framed as AI-generated from uploaded course content, to
// represent that concept in the frontend without a real generation step.
export interface QuizQuestion {
  prompt: string;
  options: string[];
  correctIndex: number;
}

export const surveyMethodologyQuiz: QuizQuestion[] = [
  {
    prompt: "Which sampling method reduces selection bias in stratified surveys?",
    options: ["Convenience sampling", "Stratified random sampling", "Snowball sampling", "Quota sampling"],
    correctIndex: 1,
  },
  {
    prompt: "What does a non-response rate measure in a survey?",
    options: [
      "The proportion of the sample that did not participate",
      "The number of questions left blank",
      "The margin of error",
      "The confidence interval width",
    ],
    correctIndex: 0,
  },
  {
    prompt: "Which document typically defines a survey's target population and sampling frame?",
    options: ["Data dictionary", "Survey design document", "Codebook", "Tabulation plan"],
    correctIndex: 1,
  },
];

export const dataVisualizationQuiz: QuizQuestion[] = [
  {
    prompt: "Which chart type best shows change over time?",
    options: ["Pie chart", "Line chart", "Scatter plot", "Box plot"],
    correctIndex: 1,
  },
  {
    prompt: "What does a choropleth map represent?",
    options: [
      "Point locations only",
      "Data values across geographic regions using shading",
      "Time-series trends",
      "Correlation between two variables",
    ],
    correctIndex: 1,
  },
];

// Presented as an AI-generated practice quiz from an uploaded course PDF —
// same QuizQuestion shape, just sourced from a "generated" mock instead of
// a fixed assessment, to represent the generation concept in the UI.
export const aiGeneratedPracticeQuiz: QuizQuestion[] = [
  {
    prompt: "According to the uploaded course material, what is the primary goal of data cleaning?",
    options: ["Increase file size", "Improve data accuracy and consistency", "Remove all missing values only", "Encrypt sensitive fields"],
    correctIndex: 1,
  },
  {
    prompt: "Which Python library was highlighted for data wrangling in the course content?",
    options: ["matplotlib", "pandas", "requests", "flask"],
    correctIndex: 1,
  },
  {
    prompt: "What did the course recommend doing before merging two datasets?",
    options: ["Deleting duplicate columns only", "Validating key fields match on both sides", "Converting everything to strings", "Sorting alphabetically"],
    correctIndex: 1,
  },
];

// Mock "uploaded/available learning content" an officer can pick from when
// generating a practice quiz — represents the "upload/select content" step
// of the AI quiz-generation workflow without a real upload/parsing backend.
export const uploadedLearningContent = [
  "Introduction to Machine Learning for Official Statistics — Module 3 (PDF)",
  "Data Analysis with R — Session Transcript",
  "Cyber Hygiene & Data Privacy — Slide Deck",
  "Sampling Techniques in National Surveys — Course Notes",
];

export type QuizDifficulty = "Easy" | "Medium" | "Hard";

// Mock generated question pools, keyed by difficulty, so the "choose
// difficulty" step of the generation workflow visibly changes the output.
// A real implementation would generate these from the selected content;
// here they're fixed pools that plausibly could have come from it.
export const generatedQuizPools: Record<QuizDifficulty, QuizQuestion[]> = {
  Easy: [
    { prompt: "What is the primary goal of data cleaning?", options: ["Increase file size", "Improve data accuracy and consistency", "Remove all missing values only", "Encrypt sensitive fields"], correctIndex: 1 },
    { prompt: "Which Python library is most associated with data wrangling?", options: ["matplotlib", "pandas", "requests", "flask"], correctIndex: 1 },
    { prompt: "What does MCQ stand for?", options: ["Multiple Choice Question", "Many Correct Quizzes", "Modular Content Query", "Manual Comparison Quiz"], correctIndex: 0 },
  ],
  Medium: [
    { prompt: "What should be validated before merging two datasets?", options: ["Deleting duplicate columns only", "That key fields match on both sides", "Converting everything to strings", "Sorting alphabetically"], correctIndex: 1 },
    { prompt: "Which sampling method reduces selection bias in stratified surveys?", options: ["Convenience sampling", "Stratified random sampling", "Snowball sampling", "Quota sampling"], correctIndex: 1 },
    { prompt: "What does a non-response rate measure?", options: ["The proportion of the sample that did not participate", "The number of blank questions", "The margin of error", "The confidence interval width"], correctIndex: 0 },
    { prompt: "Which chart best shows change over time?", options: ["Pie chart", "Line chart", "Scatter plot", "Box plot"], correctIndex: 1 },
  ],
  Hard: [
    { prompt: "In a stratified sample, what does Neyman allocation optimize for?", options: ["Equal sample size per stratum", "Minimum variance for a given total sample size", "Maximum response rate", "Simplicity of fieldwork"], correctIndex: 1 },
    { prompt: "What is a key risk of using Government Cloud (MeghRaj) without proper access controls?", options: ["Higher storage cost", "Unauthorized data access", "Slower processing", "Reduced uptime"], correctIndex: 1 },
    { prompt: "Which technique helps address multicollinearity in regression models?", options: ["Increasing sample size only", "Principal Component Analysis", "Removing the intercept", "Using a pie chart"], correctIndex: 1 },
    { prompt: "What does a choropleth map represent?", options: ["Point locations only", "Data values across geographic regions using shading", "Time-series trends", "Correlation between two variables"], correctIndex: 1 },
    { prompt: "Why is metadata important in official statistics?", options: ["It replaces the need for data quality checks", "It documents context needed to interpret and reuse data correctly", "It is only required for internal audits", "It reduces file size"], correctIndex: 1 },
  ],
};

// AI virtual assistant reply logic lives in ../utils/officerAssistant.ts,
// where it can pull live data from this file (skill gaps, recommendations,
// progress, assessments) and format language-aware replies.

