import {
  deriveSkillGaps,
  findCompetencyItem,
  officerRecommendations,
  officerOverallScore,
  officerOverallProgress,
  officerLearningHours,
  officerUpcomingAssessments,
} from "../data/officerDashboardMock";

export interface AssistantTemplates {
  gapsIntro: string;
  explainGap: string;
  explainOk: string;
  recommendations: string;
  progress: string;
  assessmentsPending: string;
  assessmentsNone: string;
  fallback: string;
}

function fill(template: string, values: Record<string, string | number>): string {
  return Object.entries(values).reduce((str, [key, val]) => str.replace(`{${key}}`, String(val)), template);
}

const GAP_KEYWORDS = ["skill gap", "gaps", "कौशल अंतराल", "कौशल्य त्रुटी"];
const PROGRESS_KEYWORDS = ["progress", "score", "hour", "time", "प्रगति", "प्रगती", "गुण", "घंटे", "तास"];
const ASSESSMENT_KEYWORDS = ["assessment", "quiz", "test", "मूल्यांकन", "क्विज़", "क्विझ"];
const COURSE_KEYWORDS = ["course", "recommend", "iGOT", "TPAC", "सिफारिश", "कोर्स", "शिफारस"];

/**
 * Frontend-only reply logic for the AI assistant widget: matches the
 * officer's message against a small set of intents and formats a reply
 * using the officer's existing mock dashboard data (skill gaps,
 * recommendations, progress, assessments) — never a real model or backend.
 */
export function getAssistantReply(input: string, tpl: AssistantTemplates): string {
  const lower = input.toLowerCase();

  // "Why was X identified as a gap?" (or any message naming a specific
  // skill) takes priority over the generic "gaps" keyword match below, so
  // asking about "Python" gets an answer about Python specifically.
  const item = findCompetencyItem(lower);
  if (item) {
    return item.score < 60
      ? fill(tpl.explainGap, { skill: item.skill, score: item.score })
      : fill(tpl.explainOk, { skill: item.skill, score: item.score });
  }

  if (GAP_KEYWORDS.some((k) => lower.includes(k))) {
    const gaps = deriveSkillGaps(3);
    return fill(tpl.gapsIntro, {
      skills: gaps.map((g) => g.skill).join(", "),
      course: officerRecommendations[0]?.title ?? "",
    });
  }

  if (ASSESSMENT_KEYWORDS.some((k) => lower.includes(k))) {
    if (officerUpcomingAssessments.length === 0) return tpl.assessmentsNone;
    return fill(tpl.assessmentsPending, {
      count: officerUpcomingAssessments.length,
      assessments: officerUpcomingAssessments.map((a) => a.title).join(", "),
    });
  }

  if (PROGRESS_KEYWORDS.some((k) => lower.includes(k))) {
    return fill(tpl.progress, { score: officerOverallScore, progress: officerOverallProgress, hours: officerLearningHours });
  }

  if (COURSE_KEYWORDS.some((k) => lower.includes(k))) {
    return fill(tpl.recommendations, { courses: officerRecommendations.map((r) => r.title).join(", ") });
  }

  return tpl.fallback;
}
