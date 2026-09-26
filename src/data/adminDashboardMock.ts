// Frontend-only mock data for the Administrator's organization-wide view.
// Aggregate / platform-management data only — no personal learner data
// belongs here. Aligned to the SIH problem statement's competency
// taxonomy and reporting needs.

export const adminStats = {
  totalOfficers: 1284,
  totalDepartments: 18,
  officersAssessed: 967,
  totalCourses: 56,
};

// Competency distribution across the four SIH-specified categories
// (averaged across all assessed officers).
export const adminCompetencyOverview = [
  { domain: "Statistical", score: 66 },
  { domain: "Technical", score: 54 },
  { domain: "Digital Governance", score: 47 },
  { domain: "Behavioural/Managerial", score: 69 },
];

export const adminSkillGapAnalytics = [
  { skill: "AI/ML", officersAffected: 612, percent: 48 },
  { skill: "Government Cloud (MeghRaj)", officersAffected: 534, percent: 42 },
  { skill: "Cloud", officersAffected: 431, percent: 34 },
  { skill: "SAS", officersAffected: 298, percent: 23 },
];

export const adminDepartmentPerformance = [
  { department: "National Statistical Office (NSO)", officers: 312, avgScore: 74 },
  { department: "National Sample Survey Office (NSSO)", officers: 268, avgScore: 68 },
  { department: "Central Statistics Office (CSO)", officers: 201, avgScore: 71 },
  { department: "State Statistical Bureau — Maharashtra", officers: 145, avgScore: 63 },
  { department: "State Statistical Bureau — Karnataka", officers: 122, avgScore: 66 },
];

// Training Effectiveness — how well completed training is translating into
// measured competency improvement.
export const adminTrainingEffectiveness = [
  { course: "Introduction to Machine Learning for Official Statistics", completionRate: 78, avgScoreImprovement: 22 },
  { course: "Data Analysis with R", completionRate: 91, avgScoreImprovement: 18 },
  { course: "Cyber Hygiene & Data Privacy for Government Officers", completionRate: 85, avgScoreImprovement: 15 },
  { course: "Sampling Techniques in National Surveys", completionRate: 69, avgScoreImprovement: 12 },
];

// Emerging Skills — capability areas trending upward in demand across the
// organization (mock forward-looking signal).
export const adminEmergingSkills = [
  { skill: "AI/ML for Official Statistics", demandTrend: 64 },
  { skill: "Cloud & Government Cloud (MeghRaj)", demandTrend: 57 },
  { skill: "Data Privacy & Cybersecurity", demandTrend: 49 },
  { skill: "GIS & Spatial Statistics", demandTrend: 38 },
];

// Predictive / future capacity-building insights — presented as mock
// AI-generated observations, not a real predictive model yet.
export const adminPredictiveInsights = [
  "At current pace, AI/ML competency gaps will affect 55% of officers by Q2 2027 without intervention.",
  "Departments with >80% training completion show 2.1x faster skill-gap closure — recommend prioritizing NSO and NSSO's completion model for rollout.",
  "Demand for Cloud & Digital Governance skills is projected to overtake Technical (software) skills within 3 quarters.",
];

// Learning Activity — aggregate platform usage over recent weeks.
export const adminLearningActivity = [
  { period: "Week of 1 Sep", hoursLogged: 2140, completions: 312 },
  { period: "Week of 8 Sep", hoursLogged: 2380, completions: 356 },
  { period: "Week of 15 Sep", hoursLogged: 2510, completions: 389 },
  { period: "Week of 22 Sep", hoursLogged: 2690, completions: 410 },
];

export const adminRecentActivity = [
  { text: "42 officers completed \u201cData Analysis with R\u201d this week", time: "Today" },
  { text: "New department \u201cState Statistical Bureau — Kerala\u201d onboarded", time: "Yesterday" },
  { text: "18 new administrator access requests submitted", time: "2 days ago" },
  { text: "Quarterly competency report generated", time: "4 days ago" },
];

export const adminQuickActions = [
  "Review Pending Registrations",
  "Publish New Course",
  "Generate Competency Report",
  "Add Department",
];

export const adminOfficers = [
  { name: "Anjali Deshmukh", id: "OFF-20481", department: "NSO", designation: "Statistical Officer", status: "Active" },
  { name: "Rohan Kulkarni", id: "OFF-20512", department: "NSSO", designation: "Senior Statistical Officer", status: "Active" },
  { name: "Meera Iyer", id: "OFF-20390", department: "CSO", designation: "Statistical Officer", status: "Active" },
  { name: "Sanjay Patil", id: "OFF-20601", department: "SSB — Maharashtra", designation: "Statistical Officer", status: "Inactive" },
  { name: "Farah Sheikh", id: "OFF-20455", department: "NSO", designation: "Junior Statistical Officer", status: "Active" },
];

export const adminPendingRegistrations = [
  { name: "Vikram Rao", requestedRole: "Administrator", department: "CSO", date: "24 Sep 2026" },
  { name: "Neha Joshi", requestedRole: "Administrator", department: "NSSO", date: "23 Sep 2026" },
  { name: "Arvind Menon", requestedRole: "Administrator", department: "SSB — Karnataka", date: "21 Sep 2026" },
];

export const adminDepartments = [
  { name: "National Statistical Office (NSO)", officers: 312, avgScore: 74 },
  { name: "National Sample Survey Office (NSSO)", officers: 268, avgScore: 68 },
  { name: "Central Statistics Office (CSO)", officers: 201, avgScore: 71 },
  { name: "State Statistical Bureau — Maharashtra", officers: 145, avgScore: 63 },
  { name: "State Statistical Bureau — Karnataka", officers: 122, avgScore: 66 },
  { name: "State Statistical Bureau — Kerala", officers: 88, avgScore: 60 },
];

export const adminCourses = [
  { title: "Introduction to Machine Learning for Official Statistics", category: "Technical", source: "iGOT Karmayogi", enrolled: 412, duration: "4 weeks" },
  { title: "Sampling Techniques in National Surveys", category: "Statistical", source: "NSSTA TPAC", enrolled: 298, duration: "2 weeks" },
  { title: "Advanced SAS Programming for Survey Data", category: "Technical", source: "NSSTA TPAC", enrolled: 356, duration: "2 weeks" },
  { title: "Effective Dashboards with GIS Data", category: "Technical", source: "iGOT Karmayogi", enrolled: 201, duration: "Self-paced" },
  { title: "Cyber Hygiene & Data Privacy for Government Officers", category: "Digital Governance", source: "iGOT Karmayogi", enrolled: 389, duration: "1 week" },
];

export const adminLearningResources = [
  { title: "NSSO Survey Design Handbook", type: "PDF Guide", domain: "Statistical" },
  { title: "R Programming Cheat Sheet", type: "Reference", domain: "Technical" },
  { title: "GIS Visualization Case Studies", type: "Case Study", domain: "Technical" },
  { title: "Digital Public Infrastructure Primer", type: "Video", domain: "Digital Governance" },
];

// NSSTA TPAC (Training Programme Approval Committee) recommended
// training programmes — distinct from iGOT Karmayogi's self-paced courses.
export const adminTpacPrograms = [
  { title: "Cloud Computing on Government Cloud (MeghRaj)", domain: "Digital Governance", duration: "3 days", cohortSize: 40 },
  { title: "Advanced SAS Programming for Survey Data", domain: "Technical", duration: "2 weeks", cohortSize: 30 },
  { title: "Sampling Techniques in National Surveys", domain: "Statistical", duration: "2 weeks", cohortSize: 35 },
  { title: "Project Management for Statistical Programmes", domain: "Behavioural/Managerial", duration: "1 week", cohortSize: 25 },
];

export const adminAssessments = [
  { title: "Survey Methodology — Module Quiz", domain: "Statistical", attempts: 612, avgScore: 66 },
  { title: "Data Visualization — Practical Assessment", domain: "Technical", attempts: 401, avgScore: 71 },
  { title: "Data Analysis — Final Assessment", domain: "Technical", attempts: 588, avgScore: 69 },
];

export const adminQuestionBank = [
  { question: "Which sampling method reduces selection bias in stratified surveys?", domain: "Statistical", difficulty: "Medium" },
  { question: "What does a p-value below 0.05 typically indicate?", domain: "Statistical", difficulty: "Easy" },
  { question: "Which Python library is most commonly used for data wrangling?", domain: "Technical", difficulty: "Easy" },
  { question: "What visualization best represents geographic survey coverage?", domain: "Technical", difficulty: "Medium" },
];

export const adminReports = [
  { title: "Quarterly Competency Report — Q3 2026", generatedOn: "20 Sep 2026" },
  { title: "Department Performance Summary — Aug 2026", generatedOn: "3 Sep 2026" },
  { title: "Skill Gap Analytics — National Rollup", generatedOn: "15 Aug 2026" },
];
