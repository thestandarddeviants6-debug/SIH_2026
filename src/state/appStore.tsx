import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";

/* ============================== Types ============================== */
export type RecommendationSource = "iGOT Karmayogi" | "NSSTA TPAC";
export type CompetencyDomain = "Statistical" | "Technical" | "Digital Governance" | "Behavioural/Managerial";
export const COMPETENCY_DOMAINS: CompetencyDomain[] = ["Statistical", "Technical", "Digital Governance", "Behavioural/Managerial"];

export interface CompetencyItem {
  skill: string;
  score: number; // 0-100
}
export interface CompetencyCategory {
  category: CompetencyDomain;
  items: CompetencyItem[];
}

export interface Department {
  id: string;
  name: string;
}

export interface Course {
  id: string;
  title: string;
  source: RecommendationSource;
  domain: CompetencyDomain;
  duration: string;
}

export interface Officer {
  id: string;
  name: string;
  designation: string;
  department: string;
  employeeId: string;
  jobRole: string;
  currentAssignment: string;
  educationalQualifications: string;
  workExperience: string;
  previousTraining: string;
  competencyCategories: CompetencyCategory[]; // [] until first competency assessment
  learningPath: { title: string; status: "completed" | "in-progress" | "upcoming" }[];
  completedCourseIds: string[];
  learningHours: number;
  status: "Active" | "Inactive";
}

export interface AssessmentQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Assessment {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  totalMarks: number;
  questionCount: number;
  durationMinutes: number;
  startAt: string; // ISO
  endAt: string; // ISO
  passingPercent: number;
  questionType: "MCQ" | "Quiz";
  questions: AssessmentQuestion[];
  status: "Draft" | "Published" | "Closed";
  isCompetencyAssessment: boolean;
  competencyDomain?: CompetencyDomain;
  createdDate: string;
  publishedDate?: string;
}

export interface AssessmentResult {
  id: string;
  assessmentId: string;
  officerId: string;
  score: number;
  totalMarks: number;
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  passed: boolean;
  completedAt: string;
}

export interface AppState {
  officers: Officer[];
  departments: Department[];
  courses: Course[];
  assessments: Assessment[];
  assessmentResults: AssessmentResult[];
  reports: { id: string; title: string; generatedOn: string }[];
  currentOfficerId: string | null;
}

const STORAGE_KEY = "karmayogi-app-store";
const EMPTY_STATE: AppState = { officers: [], departments: [], courses: [], assessments: [], assessmentResults: [], reports: [], currentOfficerId: null };
export { EMPTY_STATE };

let idCounter = 1000;
export function nextId(prefix: string): string {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY_STATE };
    return { ...EMPTY_STATE, ...JSON.parse(raw) };
  } catch {
    return { ...EMPTY_STATE };
  }
}

function saveState(s: AppState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    /* private-browsing or storage disabled: prototype simply won't persist */
  }
}

/* ============================== Demo seed ==============================
   Only used the first time someone logs in (not registers) on a
   completely empty store, so "returning users" see a populated platform
   instead of a blank one. Registration never triggers this. */
function buildSeed(): AppState {
  const departments: Department[] = [
    { id: nextId("dept"), name: "National Statistical Office (NSO)" },
    { id: nextId("dept"), name: "National Sample Survey Office (NSSO)" },
    { id: nextId("dept"), name: "Central Statistics Office (CSO)" },
    { id: nextId("dept"), name: "State Statistical Bureau — Maharashtra" },
  ];
  const courses: Course[] = [
    { id: nextId("course"), title: "Introduction to Machine Learning for Official Statistics", source: "iGOT Karmayogi", domain: "Technical", duration: "4 weeks" },
    { id: nextId("course"), title: "Cyber Hygiene & Data Privacy for Government Officers", source: "iGOT Karmayogi", domain: "Digital Governance", duration: "1 week" },
    { id: nextId("course"), title: "Cloud Computing on Government Cloud (MeghRaj)", source: "NSSTA TPAC", domain: "Digital Governance", duration: "3 days" },
    { id: nextId("course"), title: "Advanced SAS Programming for Survey Data", source: "NSSTA TPAC", domain: "Technical", duration: "2 weeks" },
    { id: nextId("course"), title: "Sampling Techniques in National Surveys", source: "NSSTA TPAC", domain: "Statistical", duration: "2 weeks" },
    { id: nextId("course"), title: "Data Analysis with R", source: "iGOT Karmayogi", domain: "Technical", duration: "3 weeks" },
  ];

  const officer: Officer = {
    id: nextId("officer"),
    name: "Anjali Deshmukh",
    designation: "Statistical Officer",
    department: departments[0].name,
    employeeId: "OFF-20481",
    jobRole: "Survey Data Analyst",
    currentAssignment: "Periodic Labour Force Survey (PLFS) — Data Processing Unit",
    educationalQualifications: "M.Sc. Statistics, Savitribai Phule Pune University",
    workExperience: "6 years in official statistics (NSO, State Statistical Bureau)",
    previousTraining: "Foundations of Official Statistics (2022), Data Analysis with R (2023)",
    competencyCategories: [
      { category: "Statistical", items: [{ skill: "Survey Design", score: 74 }, { skill: "Sampling", score: 66 }, { skill: "Data Quality", score: 70 }] },
      { category: "Technical", items: [{ skill: "Python", score: 52 }, { skill: "R", score: 78 }, { skill: "SQL", score: 65 }, { skill: "AI/ML", score: 33 }] },
      { category: "Digital Governance", items: [{ skill: "Cybersecurity", score: 48 }, { skill: "Government Cloud (MeghRaj)", score: 36 }] },
      { category: "Behavioural/Managerial", items: [{ skill: "Communication", score: 80 }, { skill: "Ethics", score: 88 }] },
    ],
    learningPath: [
      { title: "Foundations of Official Statistics", status: "completed" },
      { title: "Data Analysis with R", status: "completed" },
      { title: "Introduction to Machine Learning for Official Statistics", status: "in-progress" },
    ],
    completedCourseIds: [courses[5].id],
    learningHours: 42,
    status: "Active",
  };

  const assessment1: Assessment = {
    id: nextId("assess"),
    title: "Survey Methodology — Module Quiz",
    description: "Tests core survey methodology concepts covered in the foundations course.",
    instructions: [
      "Read questions carefully.",
      "Assessment has a fixed time limit.",
      "Timer starts when assessment begins.",
      "Assessment auto-submits at 00:00.",
      "Avoid unnecessary refresh/navigation.",
    ],
    totalMarks: 30,
    questionCount: 3,
    durationMinutes: 5,
    startAt: new Date(Date.now() - 7 * 86400000).toISOString(),
    endAt: new Date(Date.now() + 30 * 86400000).toISOString(),
    passingPercent: 60,
    questionType: "Quiz",
    isCompetencyAssessment: true,
    competencyDomain: "Statistical",
    status: "Published",
    createdDate: "18 Sep 2026",
    publishedDate: "20 Sep 2026",
    questions: [
      { id: nextId("q"), prompt: "Which sampling method reduces selection bias in stratified surveys?", options: ["Convenience sampling", "Stratified random sampling", "Snowball sampling", "Quota sampling"], correctIndex: 1, explanation: "Stratified random sampling ensures proportional representation of subgroups." },
      { id: nextId("q"), prompt: "What does a non-response rate measure?", options: ["Proportion of the sample that did not participate", "Number of blank questions", "Margin of error", "Confidence interval width"], correctIndex: 0, explanation: "It is the share of the selected sample that could not be contacted or refused." },
      { id: nextId("q"), prompt: "Which document defines a survey's sampling frame?", options: ["Data dictionary", "Survey design document", "Codebook", "Tabulation plan"], correctIndex: 1, explanation: "The survey design document defines target population and sampling frame." },
    ],
  };
  const assessment2: Assessment = {
    ...assessment1,
    id: nextId("assess"),
    title: "Data Visualization — Practical Assessment",
    description: "Covers chart selection and geographic data visualization.",
    competencyDomain: "Technical",
    durationMinutes: 4,
    questionCount: 2,
    totalMarks: 20,
    questions: [
      { id: nextId("q"), prompt: "Which chart type best shows change over time?", options: ["Pie chart", "Line chart", "Scatter plot", "Box plot"], correctIndex: 1, explanation: "Line charts plot a continuous variable against time." },
      { id: nextId("q"), prompt: "What does a choropleth map represent?", options: ["Point locations only", "Data values across regions using shading", "Time-series trends", "Correlation between variables"], correctIndex: 1, explanation: "Choropleth maps shade regions according to a data value." },
    ],
  };

  return {
    officers: [officer],
    departments,
    courses,
    assessments: [assessment1, assessment2],
    assessmentResults: [],
    reports: [{ id: nextId("report"), title: "Quarterly Competency Report — Q3 2026", generatedOn: "20 Sep 2026" }],
    currentOfficerId: officer.id,
  };
}

function isStoreEmpty(s: AppState): boolean {
  return s.officers.length === 0 && s.departments.length === 0 && s.courses.length === 0 && s.assessments.length === 0;
}

/* ============================== Derived selectors ============================== */
export interface SkillGap {
  skill: string;
  domain: CompetencyDomain;
  score: number;
  severity: "high" | "medium" | "low";
}
function severityForScore(score: number): "high" | "medium" | "low" {
  if (score < 45) return "high";
  if (score < 60) return "medium";
  return "low";
}
export function deriveSkillGaps(categories: CompetencyCategory[], topN = 5): SkillGap[] {
  const flat = categories.flatMap((c) => c.items.map((i) => ({ skill: i.skill, domain: c.category, score: i.score })));
  return flat.sort((a, b) => a.score - b.score).slice(0, topN).map((i) => ({ ...i, severity: severityForScore(i.score) }));
}
export function deriveOverallScore(categories: CompetencyCategory[]): number {
  const flat = categories.flatMap((c) => c.items);
  if (flat.length === 0) return 0;
  return Math.round(flat.reduce((sum, i) => sum + i.score, 0) / flat.length);
}
export function deriveRecommendations(categories: CompetencyCategory[], courses: Course[], max = 4): Course[] {
  const gapDomains = deriveSkillGaps(categories, 3).map((g) => g.domain);
  const matched = courses.filter((c) => gapDomains.includes(c.domain));
  const rest = courses.filter((c) => !gapDomains.includes(c.domain));
  return [...matched, ...rest].slice(0, max);
}
export function deriveOverallProgress(officer: Officer): number {
  if (officer.learningPath.length === 0) return 0;
  const done = officer.learningPath.filter((p) => p.status === "completed").length;
  return Math.round((done / officer.learningPath.length) * 100);
}

/* ============================== Reducer ============================== */
type Action =
  | { type: "ENSURE_SEEDED" }
  | { type: "LOGIN_OFFICER" }
  | { type: "LOGIN_ADMIN" }
  | { type: "REGISTER_OFFICER"; officer: Omit<Officer, "competencyCategories" | "learningPath" | "completedCourseIds" | "learningHours" | "status"> }
  | { type: "SET_CURRENT_OFFICER"; id: string | null }
  | { type: "ADD_DEPARTMENT"; name: string }
  | { type: "ADD_COURSE"; course: Omit<Course, "id"> }
  | { type: "CREATE_ASSESSMENT"; assessment: Omit<Assessment, "id" | "createdDate" | "status" | "publishedDate">; publishNow: boolean }
  | { type: "PUBLISH_ASSESSMENT"; id: string }
  | { type: "UNPUBLISH_ASSESSMENT"; id: string }
  | { type: "SUBMIT_RESULT"; result: Omit<AssessmentResult, "id">; competencyDomain?: CompetencyDomain; percentage: number }
  | { type: "GENERATE_REPORT"; title: string }
  | { type: "APPROVE_OFFICER"; id: string };

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "ENSURE_SEEDED":
      return isStoreEmpty(state) ? buildSeed() : state;

    case "LOGIN_OFFICER": {
      if (isStoreEmpty(state)) return buildSeed();
      if (!state.currentOfficerId && state.officers.length > 0) return { ...state, currentOfficerId: state.officers[0].id };
      return state;
    }

    case "LOGIN_ADMIN": {
      return isStoreEmpty(state) ? buildSeed() : state;
    }

    case "REGISTER_OFFICER": {
      const officer: Officer = {
        ...action.officer,
        competencyCategories: [],
        learningPath: [],
        completedCourseIds: [],
        learningHours: 0,
        status: "Active",
      };
      return { ...state, officers: [...state.officers, officer], currentOfficerId: officer.id };
    }

    case "SET_CURRENT_OFFICER":
      return { ...state, currentOfficerId: action.id };

    case "ADD_DEPARTMENT":
      return { ...state, departments: [...state.departments, { id: nextId("dept"), name: action.name }] };

    case "ADD_COURSE":
      return { ...state, courses: [...state.courses, { ...action.course, id: nextId("course") }] };

    case "CREATE_ASSESSMENT": {
      const today = new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
      const assessment: Assessment = {
        ...action.assessment,
        id: nextId("assess"),
        createdDate: today,
        status: action.publishNow ? "Published" : "Draft",
        publishedDate: action.publishNow ? today : undefined,
      };
      return { ...state, assessments: [...state.assessments, assessment] };
    }

    case "PUBLISH_ASSESSMENT":
      return {
        ...state,
        assessments: state.assessments.map((a) =>
          a.id === action.id ? { ...a, status: "Published", publishedDate: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) } : a
        ),
      };

    case "UNPUBLISH_ASSESSMENT":
      return { ...state, assessments: state.assessments.map((a) => (a.id === action.id ? { ...a, status: "Closed" } : a)) };

    case "SUBMIT_RESULT": {
      const result: AssessmentResult = { ...action.result, id: nextId("result") };
      let officers = state.officers;
      if (action.competencyDomain) {
        officers = officers.map((o) => {
          if (o.id !== result.officerId) return o;
          const domain = action.competencyDomain!;
          const categories = o.competencyCategories.length > 0 ? o.competencyCategories : COMPETENCY_DOMAINS.map((d) => ({ category: d, items: [] as CompetencyItem[] }));
          const updated = categories.map((c) =>
            c.category === domain
              ? { ...c, items: c.items.some((i) => i.skill === "Assessed Competency") ? c.items.map((i) => (i.skill === "Assessed Competency" ? { ...i, score: action.percentage } : i)) : [...c.items, { skill: "Assessed Competency", score: action.percentage }] }
              : c
          );
          return { ...o, competencyCategories: updated, learningHours: o.learningHours + 2 };
        });
      } else {
        officers = officers.map((o) => (o.id === result.officerId ? { ...o, learningHours: o.learningHours + 1 } : o));
      }
      return { ...state, assessmentResults: [...state.assessmentResults, result], officers };
    }

    case "GENERATE_REPORT":
      return { ...state, reports: [{ id: nextId("report"), title: action.title, generatedOn: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) }, ...state.reports] };

    case "APPROVE_OFFICER":
      return { ...state, officers: state.officers.map((o) => (o.id === action.id ? { ...o, status: "Active" } : o)) };

    default:
      return state;
  }
}

/* ============================== Context ============================== */
const StoreContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const AppStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, undefined, loadState);
  useEffect(() => saveState(state), [state]);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export function useAppStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useAppStore must be used within AppStoreProvider");
  const { state, dispatch } = ctx;

  const currentOfficer = state.officers.find((o) => o.id === state.currentOfficerId) ?? null;

  return {
    state,
    currentOfficer,
    ensureSeeded: () => dispatch({ type: "ENSURE_SEEDED" }),
    loginOfficer: () => dispatch({ type: "LOGIN_OFFICER" }),
    loginAdmin: () => dispatch({ type: "LOGIN_ADMIN" }),
    registerOfficer: (officer: Omit<Officer, "competencyCategories" | "learningPath" | "completedCourseIds" | "learningHours" | "status">) =>
      dispatch({ type: "REGISTER_OFFICER", officer }),
    setCurrentOfficer: (id: string | null) => dispatch({ type: "SET_CURRENT_OFFICER", id }),
    addDepartment: (name: string) => dispatch({ type: "ADD_DEPARTMENT", name }),
    addCourse: (course: Omit<Course, "id">) => dispatch({ type: "ADD_COURSE", course }),
    createAssessment: (assessment: Omit<Assessment, "id" | "createdDate" | "status" | "publishedDate">, publishNow: boolean) =>
      dispatch({ type: "CREATE_ASSESSMENT", assessment, publishNow }),
    publishAssessment: (id: string) => dispatch({ type: "PUBLISH_ASSESSMENT", id }),
    unpublishAssessment: (id: string) => dispatch({ type: "UNPUBLISH_ASSESSMENT", id }),
    submitResult: (result: Omit<AssessmentResult, "id">, competencyDomain: CompetencyDomain | undefined, percentage: number) =>
      dispatch({ type: "SUBMIT_RESULT", result, competencyDomain, percentage }),
    generateReport: (title: string) => dispatch({ type: "GENERATE_REPORT", title }),
    approveOfficer: (id: string) => dispatch({ type: "APPROVE_OFFICER", id }),
  };
}
