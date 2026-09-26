import React, { useState, useRef } from "react";
import { Upload, X, FileText, Presentation, Video, Sparkles, Loader2, Trash2, CheckCircle2, Link2 } from "lucide-react";
import ProgressStepper from "../ProgressStepper";
import { useAppStore, COMPETENCY_DOMAINS, CompetencyDomain, AssessmentQuestion, nextId } from "../../state/appStore";

interface UploadedFile {
  id: string;
  name: string;
  kind: "pdf" | "doc" | "ppt" | "video" | "link";
}
function kindFromFile(file: File): UploadedFile["kind"] {
  const name = file.name.toLowerCase();
  if (name.endsWith(".pdf")) return "pdf";
  if (name.endsWith(".doc") || name.endsWith(".docx")) return "doc";
  if (name.endsWith(".ppt") || name.endsWith(".pptx")) return "ppt";
  return "video";
}
const KIND_ICON: Record<UploadedFile["kind"], typeof FileText> = { pdf: FileText, doc: FileText, ppt: Presentation, video: Video, link: Link2 };

const DEFAULT_INSTRUCTIONS = [
  "Read questions carefully.",
  "Assessment has a fixed time limit.",
  "Timer starts when assessment begins.",
  "Assessment auto-submits at 00:00.",
  "Avoid unnecessary refresh/navigation.",
];

const POOL: Record<CompetencyDomain, Omit<AssessmentQuestion, "id">[]> = {
  Statistical: [
    { prompt: "Which sampling method reduces selection bias in stratified surveys?", options: ["Convenience sampling", "Stratified random sampling", "Snowball sampling", "Quota sampling"], correctIndex: 1, explanation: "Stratified random sampling ensures proportional representation of subgroups." },
    { prompt: "What does a non-response rate measure?", options: ["Proportion of sample that did not participate", "Number of blank questions", "Margin of error", "Confidence interval width"], correctIndex: 0, explanation: "It is the share of the selected sample that could not be contacted or refused." },
    { prompt: "Which document defines a survey's sampling frame?", options: ["Data dictionary", "Survey design document", "Codebook", "Tabulation plan"], correctIndex: 1, explanation: "The survey design document defines target population and sampling frame." },
  ],
  Technical: [
    { prompt: "Which Python library is most associated with data wrangling?", options: ["matplotlib", "pandas", "requests", "flask"], correctIndex: 1, explanation: "pandas provides dataframes purpose-built for cleaning and reshaping data." },
    { prompt: "Which chart type best shows change over time?", options: ["Pie chart", "Line chart", "Scatter plot", "Box plot"], correctIndex: 1, explanation: "Line charts plot a continuous variable against time." },
    { prompt: "What does a choropleth map represent?", options: ["Point locations only", "Data values across regions using shading", "Time-series trends", "Correlation between variables"], correctIndex: 1, explanation: "Choropleth maps shade regions according to a data value." },
  ],
  "Digital Governance": [
    { prompt: "What is the main purpose of two-factor authentication?", options: ["Faster login", "An additional layer of identity verification", "Automatic password reset", "Reducing server load"], correctIndex: 1, explanation: "2FA requires a second factor beyond a password." },
    { prompt: "Which principle is central to data privacy regulations?", options: ["Collecting as much data as possible", "Purpose limitation", "Storing data indefinitely", "Sharing data freely"], correctIndex: 1, explanation: "Purpose limitation restricts use of data to stated purposes." },
  ],
  "Behavioural/Managerial": [
    { prompt: "Which of these is a core principle of ethical public service?", options: ["Prioritizing personal gain", "Accountability and integrity", "Avoiding documentation", "Working in isolation"], correctIndex: 1, explanation: "Accountability and integrity are foundational to ethical conduct." },
    { prompt: "What does a RACI matrix help clarify?", options: ["Budget forecasts", "Roles and responsibilities", "Software licensing", "Data storage limits"], correctIndex: 1, explanation: "RACI maps who does what on a project." },
  ],
};

const STEPS = ["Create", "Configure", "Generate", "Preview", "Publish"];

const AIAssessmentGenerator: React.FC = () => {
  const { createAssessment } = useAppStore();
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [linkInput, setLinkInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState<string[]>(DEFAULT_INSTRUCTIONS);

  const [domain, setDomain] = useState<CompetencyDomain>("Statistical");
  const [questionType, setQuestionType] = useState<"MCQ" | "Quiz">("MCQ");
  const [count, setCount] = useState<3 | 5>(3);
  const [durationMinutes, setDurationMinutes] = useState(10);
  const [totalMarks, setTotalMarks] = useState(30);
  const [passingPercent, setPassingPercent] = useState(60);
  const [startAt, setStartAt] = useState(() => new Date().toISOString().slice(0, 16));
  const [endAt, setEndAt] = useState(() => new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 16));
  const [isCompetencyAssessment, setIsCompetencyAssessment] = useState(true);

  const [generating, setGenerating] = useState(false);
  const [questions, setQuestions] = useState<AssessmentQuestion[]>([]);
  const [published, setPublished] = useState(false);

  function addFiles(fl: FileList | null) {
    if (!fl) return;
    setFiles((fs) => [...fs, ...Array.from(fl).map((f) => ({ id: nextId("file"), name: f.name, kind: kindFromFile(f) }))]);
  }
  function addLink() {
    if (!linkInput.trim()) return;
    setFiles((fs) => [...fs, { id: nextId("file"), name: linkInput.trim(), kind: "link" as const }]);
    setLinkInput("");
  }
  function removeFile(id: string) {
    setFiles((fs) => fs.filter((f) => f.id !== id));
  }

  function generate() {
    setStep(3);
    setGenerating(true);
    window.setTimeout(() => {
      const picked = POOL[domain].slice(0, count).map((q) => ({ ...q, id: nextId("q") }));
      setQuestions(picked);
      setGenerating(false);
      setStep(4);
    }, 1200);
  }

  function publish(publishNow: boolean) {
    createAssessment(
      {
        title: title || `${domain} Assessment`,
        description,
        instructions,
        totalMarks,
        questionCount: questions.length,
        durationMinutes,
        startAt: new Date(startAt).toISOString(),
        endAt: new Date(endAt).toISOString(),
        passingPercent,
        questionType,
        questions,
        isCompetencyAssessment,
        competencyDomain: isCompetencyAssessment ? domain : undefined,
      },
      publishNow
    );
    setPublished(publishNow);
    setStep(5);
  }

  return (
    <div className="rounded-2xl border border-[#EAEFF5] bg-white p-6 shadow-sm">
      <div className="mb-6">
        <ProgressStepper steps={STEPS} currentStep={step} />
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-navy">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-lg border border-[#DCE9F7] bg-white px-3.5 py-2.5 text-sm text-navy outline-none focus:border-brandBlue" placeholder="e.g. Survey Methodology — Module Quiz" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-navy">Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} className="w-full resize-none rounded-lg border border-[#DCE9F7] bg-white px-3.5 py-2.5 text-sm text-navy outline-none focus:border-brandBlue" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-navy">Instructions / Rules</label>
            <ul className="flex flex-col gap-2">
              {instructions.map((rule, i) => (
                <li key={i} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={rule}
                    onChange={(e) => setInstructions((ins) => ins.map((r, idx) => (idx === i ? e.target.value : r)))}
                    className="w-full rounded-lg border border-[#DCE9F7] bg-white px-3 py-2 text-sm text-navy outline-none focus:border-brandBlue"
                  />
                  <button type="button" onClick={() => setInstructions((ins) => ins.filter((_, idx) => idx !== i))} className="focus-ring shrink-0 rounded-lg p-2 text-[#B42318] hover:bg-[#FDEAEA]">
                    <Trash2 size={14} aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => setInstructions((ins) => [...ins, "New rule"])} className="focus-ring mt-2 text-xs font-bold text-brandBlue hover:underline">
              + Add rule
            </button>
          </div>

          <div className="mt-2">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#8AA0BF]">Source content (optional)</p>
            <input ref={fileInputRef} type="file" multiple accept=".pdf,.doc,.docx,.ppt,.pptx,video/*" className="hidden" onChange={(e) => addFiles(e.target.files)} />
            <button type="button" onClick={() => fileInputRef.current?.click()} className="focus-ring flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#DCE9F7] bg-skyFaint px-6 py-6 text-center transition hover:border-brandBlue">
              <Upload size={20} className="text-brandBlue" aria-hidden="true" />
              <span className="text-sm font-bold text-navy">Click to select files</span>
            </button>
            <div className="mt-3 flex items-center gap-2">
              <input type="text" value={linkInput} onChange={(e) => setLinkInput(e.target.value)} placeholder="Or paste a video/content link (placeholder)" className="w-full rounded-lg border border-[#DCE9F7] bg-white px-3.5 py-2.5 text-sm text-navy outline-none focus:border-brandBlue" />
              <button type="button" onClick={addLink} className="focus-ring shrink-0 rounded-lg border-2 border-[#DCE9F7] px-4 py-2.5 text-sm font-bold text-navy transition hover:bg-skyFaint">
                Add
              </button>
            </div>
            {files.length > 0 && (
              <ul className="mt-3 flex flex-col gap-2">
                {files.map((f) => {
                  const Icon = KIND_ICON[f.kind];
                  return (
                    <li key={f.id} className="flex items-center justify-between gap-3 rounded-lg border border-[#EAEFF5] px-3.5 py-2.5">
                      <span className="flex min-w-0 items-center gap-2.5">
                        <Icon size={16} className="shrink-0 text-brandBlue" aria-hidden="true" />
                        <span className="truncate text-sm font-semibold text-navy">{f.name}</span>
                      </span>
                      <button type="button" onClick={() => removeFile(f.id)} aria-label="Remove file" className="focus-ring shrink-0 rounded-lg p-1.5 text-[#B42318] hover:bg-[#FDEAEA]">
                        <X size={15} aria-hidden="true" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <button
            type="button"
            disabled={!title.trim()}
            onClick={() => setStep(2)}
            className="focus-ring mt-2 flex h-11 w-full items-center justify-center rounded-lg bg-brandGreen text-sm font-bold text-white shadow-sm transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-8"
          >
            Next: Configure →
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-navy">Competency / Domain</label>
              <select value={domain} onChange={(e) => setDomain(e.target.value as CompetencyDomain)} className="w-full rounded-lg border border-[#DCE9F7] bg-white px-3.5 py-2.5 text-sm text-navy outline-none focus:border-brandBlue">
                {COMPETENCY_DOMAINS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-navy">Question Type</label>
              <div className="flex gap-2">
                {(["MCQ", "Quiz"] as const).map((tp) => (
                  <button key={tp} type="button" onClick={() => setQuestionType(tp)} className={`focus-ring flex-1 rounded-lg border-2 px-4 py-2 text-sm font-bold transition ${questionType === tp ? "border-brandBlue bg-skyFaint text-navy" : "border-[#DCE9F7] text-navy hover:bg-skyFaint"}`}>
                    {tp}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-navy">Number of Questions</label>
              <div className="flex gap-2">
                {([3, 5] as const).map((n) => (
                  <button key={n} type="button" onClick={() => setCount(n)} className={`focus-ring flex-1 rounded-lg border-2 px-4 py-2 text-sm font-bold transition ${count === n ? "border-brandBlue bg-skyFaint text-navy" : "border-[#DCE9F7] text-navy hover:bg-skyFaint"}`}>
                    {n}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-navy">Duration (minutes)</label>
              <input type="number" min={1} value={durationMinutes} onChange={(e) => setDurationMinutes(Math.max(1, Number(e.target.value)))} className="w-full rounded-lg border border-[#DCE9F7] bg-white px-3.5 py-2.5 text-sm text-navy outline-none focus:border-brandBlue" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-navy">Total Marks</label>
              <input type="number" min={1} value={totalMarks} onChange={(e) => setTotalMarks(Math.max(1, Number(e.target.value)))} className="w-full rounded-lg border border-[#DCE9F7] bg-white px-3.5 py-2.5 text-sm text-navy outline-none focus:border-brandBlue" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-navy">Passing %</label>
              <input type="number" min={0} max={100} value={passingPercent} onChange={(e) => setPassingPercent(Math.max(0, Math.min(100, Number(e.target.value))))} className="w-full rounded-lg border border-[#DCE9F7] bg-white px-3.5 py-2.5 text-sm text-navy outline-none focus:border-brandBlue" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-navy">Start</label>
              <input type="datetime-local" value={startAt} onChange={(e) => setStartAt(e.target.value)} className="w-full rounded-lg border border-[#DCE9F7] bg-white px-3 py-2.5 text-sm text-navy outline-none focus:border-brandBlue" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-navy">End</label>
              <input type="datetime-local" value={endAt} onChange={(e) => setEndAt(e.target.value)} className="w-full rounded-lg border border-[#DCE9F7] bg-white px-3 py-2.5 text-sm text-navy outline-none focus:border-brandBlue" />
            </div>
          </div>

          <label className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-[#EAEFF5] px-4 py-3 text-sm font-semibold text-navy">
            <input type="checkbox" checked={isCompetencyAssessment} onChange={(e) => setIsCompetencyAssessment(e.target.checked)} className="accent-brandGreen" />
            Competency / Skill Assessment (result updates the officer's competency score, skill gaps and recommendations)
          </label>

          <div className="mt-2 flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="focus-ring flex h-11 items-center justify-center rounded-lg border-2 border-[#DCE9F7] px-6 text-sm font-bold text-navy transition hover:bg-skyFaint">
              ← Back
            </button>
            <button type="button" onClick={generate} className="focus-ring flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-brandGreen text-sm font-bold text-white shadow-sm transition hover:brightness-110">
              <Sparkles size={15} aria-hidden="true" />
              Generate Questions with AI
            </button>
          </div>
        </div>
      )}

      {step === 3 && generating && (
        <div className="flex flex-col items-center justify-center py-14 text-center">
          <Loader2 size={32} className="animate-spin text-brandBlue" aria-hidden="true" />
          <p className="mt-4 text-sm font-semibold text-[#4C6386]">Generating {count} {questionType} questions for {domain}…</p>
        </div>
      )}

      {step === 4 && (
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-wide text-[#8AA0BF]">Preview</p>
          <div className="mb-4 rounded-xl border border-[#EAEFF5] p-4">
            <p className="text-sm font-extrabold text-navy">{title}</p>
            <p className="mt-1 text-xs text-[#8AA0BF]">
              {domain} · {questionType} · {questions.length} questions · {totalMarks} marks · {durationMinutes} min · Pass {passingPercent}%
              {isCompetencyAssessment ? " · Competency Assessment" : ""}
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {questions.map((q, i) => (
              <li key={q.id} className="rounded-lg border border-[#EAEFF5] p-3.5">
                <p className="text-sm font-bold text-navy">
                  {i + 1}. {q.prompt}
                </p>
                <ul className="mt-2 flex flex-col gap-1 pl-4">
                  {q.options.map((opt, oi) => (
                    <li key={oi} className={`text-xs ${oi === q.correctIndex ? "font-bold text-brandGreen" : "text-[#8AA0BF]"}`}>
                      {oi === q.correctIndex ? "✓ " : "· "}
                      {opt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <button type="button" onClick={() => setStep(2)} className="focus-ring flex h-11 items-center justify-center rounded-lg border-2 border-[#DCE9F7] px-6 text-sm font-bold text-navy transition hover:bg-skyFaint">
              ← Back
            </button>
            <button type="button" onClick={() => publish(false)} className="focus-ring flex h-11 items-center justify-center rounded-lg border-2 border-[#DCE9F7] px-6 text-sm font-bold text-navy transition hover:bg-skyFaint">
              Save as Draft
            </button>
            <button type="button" onClick={() => publish(true)} className="focus-ring flex h-11 flex-1 items-center justify-center rounded-lg bg-brandGreen text-sm font-bold text-white shadow-sm transition hover:brightness-110">
              Publish Assessment
            </button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-greenFaint">
            <CheckCircle2 size={26} className="text-brandGreen" aria-hidden="true" />
          </span>
          <p className="mt-4 text-sm font-semibold text-navy">{published ? `"${title}" has been published.` : `"${title}" has been saved as a draft.`}</p>
          <p className="mt-1 text-xs text-[#8AA0BF]">See it under Published Assessments.</p>
        </div>
      )}
    </div>
  );
};

export default AIAssessmentGenerator;
