import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserCog, LogOut, Settings as SettingsIcon, Sparkles, BookOpen, ClipboardCheck, Clock, ArrowRight,
  GraduationCap, Target, Lightbulb, BarChart3, Library,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { SectionCard, BarList, ProgressBar, Badge } from "../components/dashboard/DashboardUI";
import SkillGapAnalysisModal from "../components/dashboard/SkillGapAnalysisModal";
import QuizModal from "../components/dashboard/QuizModal";
import QuizGenerationWizard from "../components/dashboard/QuizGenerationWizard";
import AIAssistantWidget from "../components/dashboard/AIAssistantWidget";
import JourneyStepper from "../components/dashboard/JourneyStepper";
import OfficerSettingsPage from "../components/dashboard/OfficerSettingsPage";
import AssessmentInstructionsModal from "../components/dashboard/AssessmentInstructionsModal";
import AssessmentAttemptModal from "../components/dashboard/AssessmentAttemptModal";
import AssessmentResultModal from "../components/dashboard/AssessmentResultModal";
import { useAppStore, deriveSkillGaps, deriveOverallScore, deriveRecommendations, deriveOverallProgress, Assessment } from "../state/appStore";
import { QuizQuestion } from "../data/officerDashboardMock";

type Tab = "overview" | "skillGaps" | "learning" | "assessments" | "progress" | "profile" | "settings";
type AssessmentStatus = "Upcoming" | "Available" | "Completed" | "Expired";

function statusFor(assessment: Assessment, hasResult: boolean): AssessmentStatus {
  const now = new Date();
  if (hasResult) return "Completed";
  if (now < new Date(assessment.startAt)) return "Upcoming";
  if (now > new Date(assessment.endAt)) return "Expired";
  return "Available";
}

const OfficerDashboardPage: React.FC = () => {
  const { t } = useLanguage();
  const d = t.dashboard.officer;
  const navigate = useNavigate();
  const { state, currentOfficer, submitResult } = useAppStore();

  const [tab, setTab] = useState<Tab>("overview");
  const [showSkillGapModal, setShowSkillGapModal] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState<{ title: string; questions: QuizQuestion[]; aiGenerated?: boolean } | null>(null);
  const [showGenerationWizard, setShowGenerationWizard] = useState(false);
  const [generatedQuizzes, setGeneratedQuizzes] = useState<{ title: string; questions: QuizQuestion[] }[]>([]);
  const [instructionsFor, setInstructionsFor] = useState<Assessment | null>(null);
  const [attemptFor, setAttemptFor] = useState<Assessment | null>(null);
  const [lastResult, setLastResult] = useState<{ score: number; totalMarks: number; percentage: number; correctCount: number; incorrectCount: number; passed: boolean; passingPercent: number; isCompetencyAssessment: boolean } | null>(null);

  if (!currentOfficer) {
    return (
      <section className="mx-auto max-w-content px-4 py-20 text-center">
        <p className="text-sm text-[#4C6386]">No officer session found. Please log in again.</p>
        <button type="button" onClick={() => navigate("/login/officer")} className="focus-ring mt-4 rounded-lg bg-brandBlue px-6 py-2.5 text-sm font-bold text-white">
          Go to Login
        </button>
      </section>
    );
  }

  const officer = currentOfficer;
  const isNew = officer.competencyCategories.length === 0;
  const overallScore = deriveOverallScore(officer.competencyCategories);
  const overallProgress = deriveOverallProgress(officer);
  const skillGaps = deriveSkillGaps(officer.competencyCategories, 5);
  const recommendations = isNew ? [] : deriveRecommendations(officer.competencyCategories, state.courses, 4);
  const completedCourses = officer.completedCourseIds.length;
  const myResults = state.assessmentResults.filter((r) => r.officerId === officer.id);
  const completedAssessmentsCount = myResults.length;

  const visibleAssessments = state.assessments
    .filter((a) => a.status === "Published")
    .map((a) => ({ assessment: a, result: myResults.find((r) => r.assessmentId === a.id) }))
    .map(({ assessment, result }) => ({ assessment, result, status: statusFor(assessment, !!result) }));

  const severityLabel: Record<string, string> = { high: d.severityHigh, medium: d.severityMedium, low: d.severityLow };
  const severityTone: Record<string, "danger" | "warning" | "success"> = { high: "danger", medium: "warning", low: "success" };
  const statusLabel: Record<string, string> = { completed: d.statusCompleted, "in-progress": d.statusInProgress, upcoming: d.statusUpcoming };
  const pathStatusTone: Record<string, "success" | "info" | "neutral"> = { completed: "success", "in-progress": "info", upcoming: "neutral" };
  const sourceTone: Record<string, "info" | "success"> = { "iGOT Karmayogi": "info", "NSSTA TPAC": "success" };
  const assessmentStatusTone: Record<AssessmentStatus, "info" | "success" | "neutral" | "danger"> = { Upcoming: "info", Available: "success", Completed: "neutral", Expired: "danger" };

  const tabs: { key: Tab; label: string }[] = [
    { key: "overview", label: d.overviewTabLabel },
    { key: "skillGaps", label: d.skillGapsTabLabel },
    { key: "learning", label: d.learningTabLabel },
    { key: "assessments", label: d.assessmentsTabLabel },
    { key: "progress", label: d.progressTabLabel },
    { key: "profile", label: d.profileTabLabel },
  ];

  const journeySteps = [
    { label: d.journeyStepCompetency, icon: Target },
    { label: d.journeyStepSkillGap, icon: BarChart3 },
    { label: d.journeyStepLearning, icon: Lightbulb },
    { label: d.journeyStepAssessment, icon: ClipboardCheck },
    { label: d.journeyStepProgress, icon: GraduationCap },
  ];

  const quickAccessItems = [
    { label: d.qaSkillGapAnalysis, icon: Sparkles, action: () => setShowSkillGapModal(true) },
    { label: d.qaSkillGapsRecommendations, icon: Target, action: () => setTab("skillGaps") },
    { label: d.qaLearningResources, icon: Library, action: () => setTab("learning") },
    { label: d.qaAssessmentCentre, icon: ClipboardCheck, action: () => setTab("assessments") },
    { label: d.qaMyProgress, icon: BarChart3, action: () => setTab("progress") },
  ];

  const quizLabels = {
    checkAnswerButton: d.quizCheckAnswerButton, nextButton: d.quizNextButton, finishButton: d.quizFinishButton,
    correctFeedback: d.quizCorrectFeedback, incorrectFeedback: d.quizIncorrectFeedback, scoreLabel: d.quizScoreLabel,
    doneButton: d.quizDoneButton, generatedBadge: d.quizGeneratedBadge, pipelineHeading: d.pipelineHeading,
    pipelineCompetency: d.pipelineCompetency, pipelineSkillGap: d.pipelineSkillGap, pipelineRecommendation: d.pipelineRecommendation,
  };

  const assistantTemplates = {
    gapsIntro: d.assistantGapsIntro, explainGap: d.assistantExplainGap, explainOk: d.assistantExplainOk,
    recommendations: d.assistantRecommendations, progress: d.assistantProgress, assessmentsPending: d.assistantAssessmentsPending,
    assessmentsNone: d.assistantAssessmentsNone, fallback: d.assistantFallback,
  };
  const assistantChips = [d.chipSkillGaps, d.chipWhyPython, d.chipRecommendedCourses, d.chipProgress, d.chipPendingAssessment];

  function startAssessment(a: Assessment) {
    setInstructionsFor(null);
    setAttemptFor(a);
  }

  function handleSubmitAttempt(assessment: Assessment, answers: (number | null)[]) {
    const correctCount = assessment.questions.filter((q, i) => answers[i] === q.correctIndex).length;
    const incorrectCount = assessment.questions.length - correctCount;
    const percentage = Math.round((correctCount / assessment.questions.length) * 100);
    const score = Math.round((percentage / 100) * assessment.totalMarks);
    const passed = percentage >= assessment.passingPercent;
    submitResult(
      { assessmentId: assessment.id, officerId: officer.id, score, totalMarks: assessment.totalMarks, percentage, correctCount, incorrectCount, passed, completedAt: new Date().toISOString() },
      assessment.isCompetencyAssessment ? assessment.competencyDomain : undefined,
      percentage
    );
    setAttemptFor(null);
    setLastResult({ score, totalMarks: assessment.totalMarks, percentage, correctCount, incorrectCount, passed, passingPercent: assessment.passingPercent, isCompetencyAssessment: assessment.isCompetencyAssessment });
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-skyFaint to-white">
      <div className="relative mx-auto max-w-content px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-skyLight">
              <UserCog size={26} className="text-brandBlue" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#4C6386]">{d.welcomeBack}</p>
              <h1 className="text-xl font-extrabold text-navy sm:text-2xl">{officer.name}</h1>
              <p className="mt-0.5 text-sm text-[#4C6386]">{officer.designation} · {officer.department} · {officer.employeeId}</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button type="button" onClick={() => setTab("settings")} aria-label={d.settingsTabLabel} className={`focus-ring flex h-11 w-11 items-center justify-center rounded-lg border-2 transition ${tab === "settings" ? "border-brandBlue bg-skyFaint text-brandBlue" : "border-[#DCE9F7] text-navy hover:bg-skyFaint"}`}>
              <SettingsIcon size={18} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => navigate("/")} className="focus-ring flex h-11 items-center justify-center gap-2 rounded-lg border-2 border-[#DCE9F7] px-5 text-sm font-bold text-navy transition hover:bg-skyFaint">
              <LogOut size={16} aria-hidden="true" />
              {t.dashboard.sidebar.logout}
            </button>
          </div>
        </div>

        <JourneyStepper steps={journeySteps} />

        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((tb) => (
            <button key={tb.key} type="button" onClick={() => setTab(tb.key)} className={`focus-ring rounded-lg px-4 py-2 text-sm font-bold transition ${tab === tb.key ? "bg-brandBlue text-white shadow-sm" : "border border-[#DCE9F7] bg-white text-navy hover:bg-skyFaint"}`}>
              {tb.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div className="mt-6 flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col justify-between rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-[#4C6386]">{d.overallScoreLabel}</p>
                {isNew ? <p className="mt-3 text-lg font-bold text-[#8AA0BF]">Not assessed</p> : (
                  <>
                    <div className="mt-3 flex items-end gap-2"><span className="text-4xl font-extrabold text-navy">{overallScore}</span><span className="mb-1 text-lg font-bold text-[#8AA0BF]">/100</span></div>
                    <div className="mt-3"><ProgressBar value={overallScore} accent="blue" /></div>
                  </>
                )}
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-[#4C6386]">{d.overallProgressLabel}</p>
                {officer.learningPath.length === 0 ? <p className="mt-3 text-lg font-bold text-[#8AA0BF]">No activity yet</p> : (
                  <>
                    <div className="mt-3 flex items-end gap-2"><span className="text-4xl font-extrabold text-navy">{overallProgress}</span><span className="mb-1 text-lg font-bold text-[#8AA0BF]">%</span></div>
                    <div className="mt-3"><ProgressBar value={overallProgress} accent="green" /></div>
                  </>
                )}
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-[#4C6386]">{d.learningHoursLabel}</p>
                <div className="mt-3 flex items-end gap-2"><span className="text-4xl font-extrabold text-navy">{officer.learningHours}</span><span className="mb-1 text-lg font-bold text-[#8AA0BF]">{d.hoursUnit}</span></div>
                <Clock size={18} className="mt-3 text-[#8AA0BF]" aria-hidden="true" />
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-3 rounded-2xl border border-[#DCE9F7] bg-gradient-to-br from-skyLight to-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm"><Sparkles size={22} className="text-brandBlue" aria-hidden="true" /></span>
                <div><p className="text-sm font-extrabold text-navy">{d.startAnalysisButton}</p><p className="text-xs text-[#4C6386]">{d.modalSubtitle}</p></div>
              </div>
              <button type="button" onClick={() => setShowSkillGapModal(true)} className="focus-ring flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-brandBlue px-6 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md">
                {d.startAnalysisButton}<ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>

            <SectionCard title={d.quickLinksHeading}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {quickAccessItems.map((qa) => (
                  <button key={qa.label} type="button" onClick={qa.action} className="focus-ring flex items-center gap-2.5 rounded-lg border border-[#EAEFF5] px-4 py-3 text-left text-sm font-semibold text-navy transition hover:border-brandBlue hover:bg-skyFaint">
                    <qa.icon size={16} className="shrink-0 text-brandBlue" aria-hidden="true" />
                    {qa.label}
                  </button>
                ))}
              </div>
            </SectionCard>

            <SectionCard title={d.activityHeading}>
              {isNew ? <p className="text-sm text-[#4C6386]">No activity yet.</p> : (
                <ul className="flex flex-col gap-3">
                  {myResults.map((r, i) => {
                    const a = state.assessments.find((x) => x.id === r.assessmentId);
                    return (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <Clock size={14} className="mt-0.5 shrink-0 text-[#8AA0BF]" aria-hidden="true" />
                        <span className="flex-1 text-navy">Completed "{a?.title ?? "Assessment"}" — {r.percentage}%</span>
                        <span className="shrink-0 text-xs text-[#8AA0BF]">{new Date(r.completedAt).toLocaleDateString()}</span>
                      </li>
                    );
                  })}
                  {myResults.length === 0 && <p className="text-sm text-[#4C6386]">No activity yet.</p>}
                </ul>
              )}
            </SectionCard>
          </div>
        )}

        {tab === "skillGaps" && (
          <div className="mt-6 flex flex-col gap-6">
            <SectionCard title={d.competencyOverviewHeading}>
              {isNew ? <p className="text-sm text-[#4C6386]">Complete an assessment first to see your competency breakdown.</p> : (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {officer.competencyCategories.map((cat) => (
                    <div key={cat.category}>
                      <p className="mb-2 text-xs font-extrabold uppercase tracking-wide text-[#8AA0BF]">{cat.category}</p>
                      <BarList items={cat.items.map((i) => ({ label: i.skill, value: i.score }))} accent="blue" />
                    </div>
                  ))}
                </div>
              )}
            </SectionCard>

            <SectionCard title={d.skillGapsHeading}>
              {isNew ? <p className="text-sm text-[#4C6386]">Complete assessment first.</p> : (
                <ul className="flex flex-col gap-3">
                  {skillGaps.map((gap) => (
                    <li key={gap.skill} className="flex items-center justify-between gap-3 rounded-lg border border-[#EAEFF5] px-4 py-3">
                      <div><p className="text-sm font-bold text-navy">{gap.skill}</p><p className="text-xs text-[#8AA0BF]">{gap.domain} · {gap.score}/100</p></div>
                      <Badge label={severityLabel[gap.severity]} tone={severityTone[gap.severity]} />
                    </li>
                  ))}
                </ul>
              )}
            </SectionCard>

            <SectionCard title={d.recommendationsHeading} subtitle={isNew ? undefined : d.recommendationsConnectText}>
              {isNew ? (
                <div>
                  <p className="mb-3 text-sm text-[#4C6386]">Personalized recommendations will be available after your first competency assessment. Meanwhile, here's what's available platform-wide:</p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {state.courses.slice(0, 4).map((c) => (
                      <div key={c.id} className="flex flex-col justify-between rounded-xl border border-[#EAEFF5] p-4">
                        <div><Badge label={c.source} tone={sourceTone[c.source]} /><p className="mt-2.5 text-sm font-bold leading-snug text-navy">{c.title}</p></div>
                        <p className="mt-3 text-xs text-[#8AA0BF]">{c.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {recommendations.map((c) => (
                    <div key={c.id} className="flex flex-col justify-between rounded-xl border border-[#EAEFF5] p-4">
                      <div><Badge label={c.source} tone={sourceTone[c.source]} /><p className="mt-2.5 text-sm font-bold leading-snug text-navy">{c.title}</p></div>
                      <p className="mt-3 text-xs text-[#8AA0BF]">{c.duration}</p>
                    </div>
                  ))}
                </div>
              )}
            </SectionCard>
          </div>
        )}

        {tab === "learning" && (
          <div className="mt-6 flex flex-col gap-6">
            <SectionCard title={d.learningPathHeading}>
              {officer.learningPath.length === 0 ? <p className="text-sm text-[#4C6386]">Learning path not generated yet — complete a competency assessment first.</p> : (
                <ol className="flex flex-col gap-3">
                  {officer.learningPath.map((item, i) => (
                    <li key={item.title} className="flex items-center gap-3">
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-extrabold ${item.status === "completed" ? "bg-brandGreen text-white" : item.status === "in-progress" ? "bg-brandBlue text-white" : "bg-[#F1F4F9] text-[#8AA0BF]"}`}>{i + 1}</span>
                      <span className="flex-1 text-sm font-semibold text-navy">{item.title}</span>
                      <Badge label={statusLabel[item.status]} tone={pathStatusTone[item.status]} />
                    </li>
                  ))}
                </ol>
              )}
            </SectionCard>

            <SectionCard title={d.courseProgressHeading}>
              {completedCourses === 0 ? <p className="text-sm text-[#4C6386]">0 completed courses.</p> : (
                <ul className="flex flex-col gap-4">
                  {officer.completedCourseIds.map((cid) => {
                    const c = state.courses.find((x) => x.id === cid);
                    return c ? (
                      <li key={cid}>
                        <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
                          <span className="flex items-center gap-2 font-semibold text-navy"><BookOpen size={14} className="shrink-0 text-brandBlue" aria-hidden="true" />{c.title}</span>
                          <span className="shrink-0 text-[#4C6386]">100%</span>
                        </div>
                        <ProgressBar value={100} accent="green" />
                      </li>
                    ) : null;
                  })}
                </ul>
              )}
            </SectionCard>

            <SectionCard title={d.catalogueHeading} subtitle="General platform content, available to all officers.">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {state.courses.map((c) => (
                  <div key={c.id} className="flex flex-col justify-between rounded-xl border border-[#EAEFF5] p-4">
                    <div><Badge label={c.source} tone={sourceTone[c.source]} /><p className="mt-2.5 text-sm font-bold leading-snug text-navy">{c.title}</p><p className="mt-1 text-xs text-[#8AA0BF]">{c.domain}</p></div>
                    <span className="mt-3 flex items-center gap-1.5 text-xs text-[#8AA0BF]"><GraduationCap size={13} aria-hidden="true" />{c.duration}</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        )}

        {tab === "assessments" && (
          <div className="mt-6 flex flex-col gap-6">
            <SectionCard title={d.assessmentsTabLabel}>
              {visibleAssessments.length === 0 ? <p className="text-sm text-[#4C6386]">No assessments available right now.</p> : (
                <ul className="flex flex-col gap-3">
                  {visibleAssessments.map(({ assessment, result, status }) => (
                    <li key={assessment.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#EAEFF5] px-4 py-3">
                      <div className="flex items-start gap-2.5">
                        <ClipboardCheck size={16} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                        <div>
                          <p className="text-sm font-bold text-navy">{assessment.title}</p>
                          <p className="text-xs text-[#8AA0BF]">
                            {assessment.totalMarks} marks · {assessment.questionCount} questions · {assessment.durationMinutes} min · Pass {assessment.passingPercent}%
                          </p>
                          <p className="text-xs text-[#8AA0BF]">Available {new Date(assessment.startAt).toLocaleDateString()} – {new Date(assessment.endAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <Badge label={status} tone={assessmentStatusTone[status]} />
                        {status === "Available" && (
                          <button type="button" onClick={() => setInstructionsFor(assessment)} className="focus-ring rounded-lg bg-brandBlue px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-brandBlue-bright">
                            {d.takeAssessmentButton}
                          </button>
                        )}
                        {status === "Completed" && result && <span className="text-xs font-bold text-brandGreen">{result.percentage}% {result.passed ? "· Pass" : "· Fail"}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </SectionCard>

            <SectionCard title={d.aiGeneratedQuizTitle} subtitle={d.aiQuizCardSubtitle}
              action={
                <button type="button" onClick={() => setShowGenerationWizard(true)} className="focus-ring flex shrink-0 items-center gap-2 rounded-lg bg-brandGreen px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:brightness-110">
                  <Sparkles size={14} aria-hidden="true" />{d.generateQuizButton}
                </button>
              }
            >
              <ul className="flex flex-col gap-2">
                {generatedQuizzes.map((q) => (
                  <li key={q.title} className="flex items-center justify-between gap-3 rounded-lg border border-[#EAEFF5] px-4 py-3">
                    <div className="flex items-start gap-2.5"><Sparkles size={16} className="mt-0.5 shrink-0 text-brandGreen" aria-hidden="true" /><p className="text-sm font-bold text-navy">{q.title}</p></div>
                    <button type="button" onClick={() => setActiveQuiz({ title: q.title, questions: q.questions, aiGenerated: true })} className="focus-ring shrink-0 rounded-lg bg-brandBlue px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-brandBlue-bright">
                      {d.takeAssessmentButton}
                    </button>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-[#4C6386]">
                {generatedQuizzes.length > 0 ? d.aiQuizPublishedCountText.replace("{count}", String(generatedQuizzes.length)) : d.aiQuizNoneYetText}
              </p>
            </SectionCard>
          </div>
        )}

        {tab === "progress" && (
          <div className="mt-6 flex flex-col gap-6">
            <p className="text-sm text-[#4C6386]">{d.progressIntroText}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm"><p className="text-sm font-bold text-[#4C6386]">{d.overallScoreLabel}</p><p className="mt-2 text-3xl font-extrabold text-navy">{isNew ? "—" : `${overallScore}/100`}</p></div>
              <div className="rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm"><p className="text-sm font-bold text-[#4C6386]">{d.overallProgressLabel}</p><p className="mt-2 text-3xl font-extrabold text-navy">{officer.learningPath.length === 0 ? "—" : `${overallProgress}%`}</p></div>
              <div className="rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm"><p className="text-sm font-bold text-[#4C6386]">Completed Courses</p><p className="mt-2 text-3xl font-extrabold text-navy">{completedCourses}</p></div>
              <div className="rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm"><p className="text-sm font-bold text-[#4C6386]">Completed Assessments</p><p className="mt-2 text-3xl font-extrabold text-navy">{completedAssessmentsCount}</p></div>
            </div>
            <SectionCard title={d.activityHeading}>
              {myResults.length === 0 ? <p className="text-sm text-[#4C6386]">No activity yet.</p> : (
                <ul className="flex flex-col gap-3">
                  {myResults.map((r, i) => {
                    const a2 = state.assessments.find((x) => x.id === r.assessmentId);
                    return (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <Clock size={14} className="mt-0.5 shrink-0 text-[#8AA0BF]" aria-hidden="true" />
                        <span className="flex-1 text-navy">{a2?.title ?? "Assessment"} — {r.score}/{r.totalMarks} ({r.percentage}%) {r.passed ? "Pass" : "Fail"}</span>
                        <span className="shrink-0 text-xs text-[#8AA0BF]">{new Date(r.completedAt).toLocaleDateString()}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </SectionCard>
          </div>
        )}

        {tab === "profile" && (
          <div className="mt-6">
            <SectionCard title={d.profileTabLabel}>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  [d.designationLabel, officer.designation], [d.departmentLabel, officer.department], [d.jobRoleLabel, officer.jobRole],
                  [d.currentAssignmentLabel, officer.currentAssignment], [d.qualificationsLabel, officer.educationalQualifications],
                  [d.experienceLabel, officer.workExperience], [d.previousTrainingLabel, officer.previousTraining],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-[#EAEFF5] px-4 py-3">
                    <dt className="text-xs font-bold uppercase tracking-wide text-[#8AA0BF]">{label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-navy">{value}</dd>
                  </div>
                ))}
              </dl>
            </SectionCard>
          </div>
        )}

        {tab === "settings" && <div className="mt-6"><OfficerSettingsPage /></div>}
      </div>

      {showSkillGapModal && (
        <SkillGapAnalysisModal onClose={() => setShowSkillGapModal(false)} labels={{ title: d.modalTitle, subtitle: d.modalSubtitle, nextButton: d.modalNextButton, finishButton: d.modalFinishButton, resultHeading: d.modalResultHeading, resultText: d.modalResultText, viewGapsButton: d.modalViewGapsButton }} />
      )}
      {activeQuiz && <QuizModal title={activeQuiz.title} questions={activeQuiz.questions} aiGenerated={activeQuiz.aiGenerated} onClose={() => setActiveQuiz(null)} labels={quizLabels} />}
      {showGenerationWizard && (
        <QuizGenerationWizard
          onClose={() => setShowGenerationWizard(false)}
          onPublish={(title, questions) => setGeneratedQuizzes((qs) => [...qs, { title, questions }])}
          labels={{ stepSelectContent: d.wizStepSelectContent, stepConfigure: d.wizStepConfigure, stepGenerating: d.wizStepGenerating, stepPreview: d.wizStepPreview, stepPublished: d.wizStepPublished, contentLabel: d.wizContentLabel, countLabel: d.wizCountLabel, difficultyLabel: d.wizDifficultyLabel, generateButton: d.wizGenerateButton, generatingText: d.wizGeneratingText, previewHint: d.wizPreviewHint, removeButton: d.wizRemoveButton, backButton: d.wizBackButton, publishButton: d.wizPublishButton, publishedText: d.wizPublishedText, doneButton: d.wizDoneButton }}
        />
      )}
      {instructionsFor && <AssessmentInstructionsModal assessment={instructionsFor} onClose={() => setInstructionsFor(null)} onStart={() => startAssessment(instructionsFor)} />}
      {attemptFor && <AssessmentAttemptModal assessment={attemptFor} onClose={() => setAttemptFor(null)} onSubmit={(answers) => handleSubmitAttempt(attemptFor, answers)} />}
      {lastResult && <AssessmentResultModal {...lastResult} onClose={() => setLastResult(null)} />}

      <AIAssistantWidget labels={{ title: d.aiAssistantTitle, placeholder: d.aiAssistantPlaceholder, greeting: d.aiAssistantGreeting, launcherLabel: d.aiAssistantLauncherLabel, typing: d.assistantTyping }} templates={assistantTemplates} chips={assistantChips} />
    </section>
  );
};

export default OfficerDashboardPage;
