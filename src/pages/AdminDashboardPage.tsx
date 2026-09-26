import React, { useState } from "react";
import { ShieldCheck, Users, Building2, ClipboardCheck, BookOpen, Clock, Sparkles, TrendingUp, Rocket, Target, Eye, EyeOff, ChevronDown, ChevronUp, Plus } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { StatCard, SectionCard, BarList, DataTable, Badge } from "../components/dashboard/DashboardUI";
import AdminSidebar, { AdminSection } from "../components/dashboard/AdminSidebar";
import JourneyStepper from "../components/dashboard/JourneyStepper";
import AIAssessmentGenerator from "../components/dashboard/AIAssessmentGenerator";
import AdminSettingsPage from "../components/dashboard/AdminSettingsPage";
import { useAppStore, COMPETENCY_DOMAINS } from "../state/appStore";
import {
  adminSkillGapAnalytics,
  adminTrainingEffectiveness,
  adminEmergingSkills,
  adminPredictiveInsights,
  adminLearningActivity,
  adminRecentActivity,
  adminLearningResources,
  adminTpacPrograms,
  adminPendingRegistrations,
  adminQuestionBank,
} from "../data/adminDashboardMock";
import { getDefaultLandingSection } from "../data/adminSettingsMock";

const AdminDashboardPage: React.FC = () => {
  const { t } = useLanguage();
  const a = t.dashboard.admin;
  const tb = t.dashboard.table;
  const { state, addDepartment, addCourse, publishAssessment, unpublishAssessment, generateReport } = useAppStore();
  const [section, setSection] = useState<AdminSection>(() => getDefaultLandingSection());
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [newDept, setNewDept] = useState("");
  const [newCourse, setNewCourse] = useState({ title: "", source: "iGOT Karmayogi" as const, domain: "Statistical" as const, duration: "" });

  const sidebarLabels = { ...t.dashboard.sidebar };
  const journeySteps = [
    { label: a.journeyStepWorkforce, icon: Users },
    { label: a.journeyStepSkillGaps, icon: Target },
    { label: a.journeyStepTrainingEffectiveness, icon: TrendingUp },
    { label: a.journeyStepEmergingSkills, icon: Rocket },
    { label: a.journeyStepCapacityPlanning, icon: Sparkles },
  ];

  const isEmpty = state.officers.length === 0 && state.departments.length === 0 && state.courses.length === 0 && state.assessments.length === 0;
  const officersAssessed = state.officers.filter((o) => o.competencyCategories.length > 0).length;

  const competencyDistribution = COMPETENCY_DOMAINS.map((domain) => {
    const scores = state.officers.flatMap((o) => o.competencyCategories.find((c) => c.category === domain)?.items.map((i) => i.score) ?? []);
    return { label: domain, value: scores.length ? Math.round(scores.reduce((s, v) => s + v, 0) / scores.length) : 0 };
  });

  function resultsFor(assessmentId: string) {
    return state.assessmentResults.filter((r) => r.assessmentId === assessmentId).map((r) => ({ ...r, officerName: state.officers.find((o) => o.id === r.officerId)?.name ?? "Unknown" }));
  }

  function renderSection() {
    if (isEmpty && section === "dashboard") {
      return (
        <SectionCard title="Get started">
          <p className="text-sm text-[#4C6386]">This organization has no data yet. Use the quick actions below to add your first records.</p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { label: "Add Department", action: () => setSection("departments") },
              { label: "Review/Approve Officers", action: () => setSection("pending") },
              { label: "Add Course", action: () => setSection("courses") },
              { label: "Create Assessment", action: () => setSection("aiAssessmentGenerator") },
            ].map((cta) => (
              <button key={cta.label} type="button" onClick={cta.action} className="focus-ring flex items-center gap-2 rounded-lg border-2 border-[#DCE9F7] px-4 py-3 text-left text-sm font-bold text-navy transition hover:bg-skyFaint">
                <Plus size={15} className="text-brandGreen" aria-hidden="true" />
                {cta.label}
              </button>
            ))}
          </div>
        </SectionCard>
      );
    }

    switch (section) {
      case "dashboard":
        return (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard icon={Users} label={a.totalOfficersLabel} value={state.officers.length} accent="blue" />
              <StatCard icon={Building2} label={a.totalDepartmentsLabel} value={state.departments.length} accent="teal" />
              <StatCard icon={ClipboardCheck} label={a.officersAssessedLabel} value={officersAssessed} accent="green" />
              <StatCard icon={BookOpen} label={a.totalCoursesLabel} value={state.courses.length} accent="saffron" />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <SectionCard title={a.competencyOverviewHeading}>
                <BarList items={competencyDistribution} accent="blue" />
              </SectionCard>
              <SectionCard title={a.skillGapAnalyticsHeading}>
                <BarList items={adminSkillGapAnalytics.map((s) => ({ label: s.skill, value: s.percent, suffix: `${s.officersAffected} officers` }))} accent="saffron" />
              </SectionCard>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <SectionCard title={a.trainingEffectivenessHeading}>
                <BarList items={adminTrainingEffectiveness.map((t2) => ({ label: t2.course, value: t2.completionRate, suffix: `+${t2.avgScoreImprovement} pts avg.` }))} accent="green" />
              </SectionCard>
              <SectionCard title={a.emergingSkillsHeading}>
                <BarList items={adminEmergingSkills.map((s) => ({ label: s.skill, value: s.demandTrend }))} accent="teal" />
              </SectionCard>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <SectionCard title={a.predictiveInsightsHeading}>
                <ul className="flex flex-col gap-3">
                  {adminPredictiveInsights.map((insight, i) => (
                    <li key={i} className="flex items-start gap-2.5 rounded-lg border border-[#EAEFF5] px-3.5 py-2.5 text-sm">
                      <Sparkles size={15} className="mt-0.5 shrink-0 text-brandGreen" aria-hidden="true" />
                      <span className="text-navy">{insight}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
              <SectionCard title={a.learningActivityHeading}>
                <DataTable
                  columns={[{ key: "period", label: tb.period }, { key: "hoursLogged", label: tb.hoursLogged }, { key: "completions", label: tb.completions }]}
                  rows={adminLearningActivity.map((w) => ({ period: w.period, hoursLogged: w.hoursLogged.toLocaleString(), completions: w.completions }))}
                />
              </SectionCard>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <SectionCard title={a.activityHeading}>
                <ul className="flex flex-col gap-3">
                  {adminRecentActivity.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <Clock size={14} className="mt-0.5 shrink-0 text-[#8AA0BF]" aria-hidden="true" />
                      <span className="flex-1 text-navy">{item.text}</span>
                      <span className="shrink-0 text-xs text-[#8AA0BF]">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
              <SectionCard title={a.quickActionsHeading}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button type="button" onClick={() => setSection("pending")} className="focus-ring rounded-lg border border-[#EAEFF5] px-4 py-3 text-left text-sm font-semibold text-navy transition hover:bg-skyFaint">
                    Review Pending Registrations
                  </button>
                  <button type="button" onClick={() => setSection("courses")} className="focus-ring rounded-lg border border-[#EAEFF5] px-4 py-3 text-left text-sm font-semibold text-navy transition hover:bg-skyFaint">
                    Publish New Course
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      generateReport("Competency Report — " + new Date().toLocaleDateString("en-IN", { month: "short", year: "numeric" }));
                      setSection("reports");
                    }}
                    className="focus-ring rounded-lg border border-[#EAEFF5] px-4 py-3 text-left text-sm font-semibold text-navy transition hover:bg-skyFaint"
                  >
                    Generate Competency Report
                  </button>
                  <button type="button" onClick={() => setSection("departments")} className="focus-ring rounded-lg border border-[#EAEFF5] px-4 py-3 text-left text-sm font-semibold text-navy transition hover:bg-skyFaint">
                    Add Department
                  </button>
                </div>
              </SectionCard>
            </div>
          </>
        );

      case "officers":
        return (
          <SectionCard title={a.officersHeading}>
            {state.officers.length === 0 ? (
              <p className="text-sm text-[#4C6386]">No officers yet.</p>
            ) : (
              <DataTable
                columns={[{ key: "name", label: tb.name }, { key: "id", label: tb.id }, { key: "department", label: tb.department }, { key: "designation", label: tb.designation }, { key: "status", label: tb.status }]}
                rows={state.officers.map((o) => ({ name: o.name, id: o.employeeId, department: o.department, designation: o.designation, status: <Badge label={o.status} tone={o.status === "Active" ? "success" : "neutral"} /> }))}
              />
            )}
          </SectionCard>
        );

      case "pending":
        return (
          <SectionCard title={a.pendingHeading}>
            <DataTable columns={[{ key: "name", label: tb.name }, { key: "requestedRole", label: tb.requestedRole }, { key: "department", label: tb.department }, { key: "date", label: tb.date }]} rows={adminPendingRegistrations} />
          </SectionCard>
        );

      case "departments":
        return (
          <SectionCard title={a.departmentsHeading}>
            <div className="mb-4 flex gap-2">
              <input type="text" value={newDept} onChange={(e) => setNewDept(e.target.value)} placeholder="New department name" className="w-full rounded-lg border border-[#DCE9F7] bg-white px-3.5 py-2.5 text-sm text-navy outline-none focus:border-brandBlue" />
              <button
                type="button"
                disabled={!newDept.trim()}
                onClick={() => {
                  addDepartment(newDept.trim());
                  setNewDept("");
                }}
                className="focus-ring flex shrink-0 items-center gap-1.5 rounded-lg bg-brandGreen px-4 py-2.5 text-sm font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Plus size={15} aria-hidden="true" />
                Add
              </button>
            </div>
            {state.departments.length === 0 ? <p className="text-sm text-[#4C6386]">No departments yet.</p> : (
              <DataTable
                columns={[{ key: "name", label: tb.name }, { key: "officers", label: tb.officers }]}
                rows={state.departments.map((d) => ({ name: d.name, officers: state.officers.filter((o) => o.department === d.name).length }))}
              />
            )}
          </SectionCard>
        );

      case "competencyAnalytics":
        return (
          <SectionCard title={a.competencyOverviewHeading}>
            <BarList items={competencyDistribution} accent="blue" />
          </SectionCard>
        );

      case "skillGapAnalytics":
        return (
          <SectionCard title={a.skillGapAnalyticsHeading}>
            <BarList items={adminSkillGapAnalytics.map((s) => ({ label: s.skill, value: s.percent, suffix: `${s.officersAffected} officers` }))} accent="saffron" />
          </SectionCard>
        );

      case "trainingEffectiveness":
        return (
          <SectionCard title={a.trainingEffectivenessHeading}>
            <BarList items={adminTrainingEffectiveness.map((t2) => ({ label: t2.course, value: t2.completionRate, suffix: `+${t2.avgScoreImprovement} pts` }))} accent="green" />
          </SectionCard>
        );

      case "emergingSkills":
        return (
          <SectionCard title={a.emergingSkillsHeading}>
            <BarList items={adminEmergingSkills.map((s) => ({ label: s.skill, value: s.demandTrend }))} accent="teal" />
          </SectionCard>
        );

      case "courses":
        return (
          <SectionCard title={a.coursesHeading}>
            <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto_auto_auto_auto]">
              <input type="text" value={newCourse.title} onChange={(e) => setNewCourse((c) => ({ ...c, title: e.target.value }))} placeholder="Course title" className="rounded-lg border border-[#DCE9F7] bg-white px-3 py-2 text-sm text-navy outline-none focus:border-brandBlue" />
              <select value={newCourse.source} onChange={(e) => setNewCourse((c) => ({ ...c, source: e.target.value as any }))} className="rounded-lg border border-[#DCE9F7] bg-white px-2 py-2 text-sm text-navy">
                <option>iGOT Karmayogi</option>
                <option>NSSTA TPAC</option>
              </select>
              <select value={newCourse.domain} onChange={(e) => setNewCourse((c) => ({ ...c, domain: e.target.value as any }))} className="rounded-lg border border-[#DCE9F7] bg-white px-2 py-2 text-sm text-navy">
                {COMPETENCY_DOMAINS.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
              <input type="text" value={newCourse.duration} onChange={(e) => setNewCourse((c) => ({ ...c, duration: e.target.value }))} placeholder="Duration" className="rounded-lg border border-[#DCE9F7] bg-white px-3 py-2 text-sm text-navy outline-none focus:border-brandBlue" />
              <button
                type="button"
                disabled={!newCourse.title.trim()}
                onClick={() => {
                  addCourse(newCourse);
                  setNewCourse({ title: "", source: "iGOT Karmayogi", domain: "Statistical", duration: "" });
                }}
                className="focus-ring flex items-center gap-1.5 rounded-lg bg-brandGreen px-4 py-2 text-sm font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Plus size={15} aria-hidden="true" />
                Publish
              </button>
            </div>
            {state.courses.length === 0 ? <p className="text-sm text-[#4C6386]">No courses yet.</p> : (
              <DataTable
                columns={[{ key: "title", label: tb.title }, { key: "source", label: tb.source }, { key: "domain", label: tb.domain }, { key: "duration", label: tb.duration }]}
                rows={state.courses.map((c) => ({ title: c.title, source: <Badge label={c.source} tone={c.source === "iGOT Karmayogi" ? "info" : "success"} />, domain: c.domain, duration: c.duration }))}
              />
            )}
          </SectionCard>
        );

      case "resources":
        return (
          <SectionCard title={a.resourcesHeading}>
            <DataTable columns={[{ key: "title", label: tb.title }, { key: "type", label: tb.type }, { key: "domain", label: tb.domain }]} rows={adminLearningResources} />
          </SectionCard>
        );

      case "tpacPrograms":
        return (
          <SectionCard title={a.tpacProgramsHeading}>
            <DataTable columns={[{ key: "title", label: tb.title }, { key: "domain", label: tb.domain }, { key: "duration", label: tb.duration }, { key: "cohortSize", label: tb.cohortSize }]} rows={adminTpacPrograms} />
          </SectionCard>
        );

      case "aiAssessmentGenerator":
        return <AIAssessmentGenerator />;

      case "publishedAssessments":
        return (
          <SectionCard title="Published Assessments">
            {state.assessments.length === 0 ? (
              <p className="text-sm text-[#4C6386]">No assessments yet — create one from AI Assessment Generator.</p>
            ) : (
              <ul className="flex flex-col gap-3">
                {state.assessments.map((x) => {
                  const isOpen = expandedId === x.id;
                  const results = resultsFor(x.id);
                  return (
                    <li key={x.id} className="rounded-xl border border-[#EAEFF5] p-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-bold text-navy">{x.title}</p>
                          <p className="mt-0.5 text-xs text-[#8AA0BF]">
                            {x.competencyDomain ?? "General"} · {x.questionType} · {x.questionCount} questions · {x.durationMinutes} min · Pass {x.passingPercent}%
                          </p>
                          <p className="mt-0.5 text-xs text-[#8AA0BF]">
                            Created {x.createdDate}
                            {x.publishedDate ? ` · Published ${x.publishedDate}` : ""}
                          </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          <Badge label={x.status} tone={x.status === "Published" ? "success" : x.status === "Draft" ? "neutral" : "warning"} />
                          <button type="button" onClick={() => setExpandedId(isOpen ? null : x.id)} className="focus-ring flex items-center gap-1 rounded-lg border-2 border-[#DCE9F7] px-3 py-1.5 text-xs font-bold text-navy transition hover:bg-skyFaint">
                            {isOpen ? <ChevronUp size={13} aria-hidden="true" /> : <ChevronDown size={13} aria-hidden="true" />}
                            View
                          </button>
                          {x.status !== "Draft" && (
                            <button
                              type="button"
                              onClick={() => (x.status === "Published" ? unpublishAssessment(x.id) : publishAssessment(x.id))}
                              className="focus-ring flex items-center gap-1 rounded-lg bg-brandBlue px-3 py-1.5 text-xs font-bold text-white transition hover:bg-brandBlue-bright"
                            >
                              {x.status === "Published" ? <EyeOff size={13} aria-hidden="true" /> : <Eye size={13} aria-hidden="true" />}
                              {x.status === "Published" ? "Unpublish" : "Publish"}
                            </button>
                          )}
                          {x.status === "Draft" && (
                            <button type="button" onClick={() => publishAssessment(x.id)} className="focus-ring flex items-center gap-1 rounded-lg bg-brandGreen px-3 py-1.5 text-xs font-bold text-white transition hover:brightness-110">
                              <Eye size={13} aria-hidden="true" />
                              Publish
                            </button>
                          )}
                        </div>
                      </div>
                      {isOpen && (
                        <div className="mt-3 flex flex-col gap-4 border-t border-[#EAEFF5] pt-3">
                          <ul className="flex flex-col gap-2">
                            {x.questions.map((q, i) => (
                              <li key={q.id} className="text-sm text-[#4C6386]">
                                <span className="font-semibold text-navy">{i + 1}. {q.prompt}</span>
                                <span className="ml-1.5 text-xs text-brandGreen">— {q.options[q.correctIndex]}</span>
                              </li>
                            ))}
                          </ul>
                          <div>
                            <p className="mb-2 text-xs font-extrabold uppercase tracking-wide text-[#8AA0BF]">Participating Officers</p>
                            {results.length === 0 ? (
                              <p className="text-xs text-[#8AA0BF]">No attempts yet.</p>
                            ) : (
                              <DataTable
                                columns={[{ key: "officerName", label: tb.name }, { key: "score", label: "Score" }, { key: "percentage", label: tb.avgScore }, { key: "passed", label: "Status" }]}
                                rows={results.map((r) => ({ officerName: r.officerName, score: `${r.score}/${r.totalMarks}`, percentage: `${r.percentage}%`, passed: <Badge label={r.passed ? "Pass" : "Fail"} tone={r.passed ? "success" : "danger"} /> }))}
                              />
                            )}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </SectionCard>
        );

      case "assessmentResults": {
        const rows = state.assessments
          .filter((asmt) => resultsFor(asmt.id).length > 0)
          .map((asmt) => {
            const results = resultsFor(asmt.id);
            const avgPct = Math.round(results.reduce((s, r) => s + r.percentage, 0) / results.length);
            const passRate = Math.round((results.filter((r) => r.passed).length / results.length) * 100);
            return { title: asmt.title, competency: asmt.competencyDomain ?? "General", attempts: results.length, avgScore: `${avgPct}%`, passRate: `${passRate}%` };
          });
        return (
          <SectionCard title="Assessment Results">
            {rows.length === 0 ? <p className="text-sm text-[#4C6386]">No results yet.</p> : (
              <DataTable columns={[{ key: "title", label: tb.title }, { key: "competency", label: tb.domain }, { key: "attempts", label: tb.attempts }, { key: "avgScore", label: tb.avgScore }, { key: "passRate", label: "Pass Rate" }]} rows={rows} />
            )}
          </SectionCard>
        );
      }

      case "generatedQuestions": {
        const all = state.assessments.flatMap((asmt) => asmt.questions.map((q) => ({ ...q, assessmentTitle: asmt.title })));
        return (
          <SectionCard title="Generated Questions">
            {all.length === 0 ? <p className="text-sm text-[#4C6386]">No questions generated yet.</p> : (
              <ul className="flex flex-col gap-3">
                {all.map((q) => (
                  <li key={q.id} className="rounded-lg border border-[#EAEFF5] px-4 py-3">
                    <p className="text-sm font-bold text-navy">{q.prompt}</p>
                    <p className="mt-1 text-xs text-brandGreen">✓ {q.options[q.correctIndex]}</p>
                    <p className="mt-1 text-xs text-[#8AA0BF]">From: {q.assessmentTitle}</p>
                  </li>
                ))}
              </ul>
            )}
          </SectionCard>
        );
      }

      case "questionBank":
        return (
          <SectionCard title={a.questionBankHeading}>
            <DataTable columns={[{ key: "question", label: tb.question }, { key: "domain", label: tb.domain }, { key: "difficulty", label: tb.difficulty }]} rows={adminQuestionBank} />
          </SectionCard>
        );

      case "reports":
        return (
          <SectionCard
            title={a.reportsHeading}
            action={
              <button type="button" onClick={() => generateReport("Report — " + new Date().toLocaleDateString("en-IN"))} className="focus-ring flex items-center gap-1.5 rounded-lg bg-brandGreen px-3 py-1.5 text-xs font-bold text-white transition hover:brightness-110">
                <Plus size={13} aria-hidden="true" />
                Generate Report
              </button>
            }
          >
            {state.reports.length === 0 ? <p className="text-sm text-[#4C6386]">No reports yet.</p> : (
              <DataTable columns={[{ key: "title", label: tb.title }, { key: "generatedOn", label: tb.generatedOn }]} rows={state.reports} />
            )}
          </SectionCard>
        );

      case "settings":
        return <AdminSettingsPage onDefaultLandingChange={setSection} />;

      default:
        return null;
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-skyFaint to-white">
      <div className="relative mx-auto max-w-content px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="flex items-center gap-4 rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-greenFaint">
            <ShieldCheck size={26} className="text-brandGreen" aria-hidden="true" />
          </span>
          <h1 className="text-xl font-extrabold text-navy sm:text-2xl">{a.welcomeHeading}</h1>
        </div>

        <JourneyStepper steps={journeySteps} />

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
          <AdminSidebar active={section} onSelect={setSection} labels={sidebarLabels} />
          <div>{renderSection()}</div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardPage;
