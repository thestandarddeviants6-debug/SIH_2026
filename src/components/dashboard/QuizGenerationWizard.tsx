import React, { useState } from "react";
import { Sparkles, X, Loader2, Trash2, CheckCircle2 } from "lucide-react";
import { uploadedLearningContent, generatedQuizPools, QuizDifficulty, QuizQuestion } from "../../data/officerDashboardMock";

interface QuizGenerationWizardProps {
  onClose: () => void;
  onPublish: (title: string, questions: QuizQuestion[]) => void;
  labels: {
    stepSelectContent: string;
    stepConfigure: string;
    stepGenerating: string;
    stepPreview: string;
    stepPublished: string;
    contentLabel: string;
    countLabel: string;
    difficultyLabel: string;
    generateButton: string;
    generatingText: string;
    previewHint: string;
    removeButton: string;
    backButton: string;
    publishButton: string;
    publishedText: string;
    doneButton: string;
  };
}

const QUESTION_COUNTS = [3, 5];

/**
 * The AI-powered MCQ/quiz generation workflow called for in the brief:
 * select uploaded content -> choose count/difficulty -> generate ->
 * preview/edit -> publish. "Generate" is a timed mock (no real model);
 * the resulting quiz pool is a fixed set for the chosen difficulty, sliced
 * to the requested count, and can be trimmed (removed questions) before
 * publishing. Publishing adds it to the officer's own Assessments list.
 */
const QuizGenerationWizard: React.FC<QuizGenerationWizardProps> = ({ onClose, onPublish, labels }) => {
  const [step, setStep] = useState<"select" | "configure" | "generating" | "preview" | "published">("select");
  const [content, setContent] = useState<string | null>(null);
  const [count, setCount] = useState<number>(3);
  const [difficulty, setDifficulty] = useState<QuizDifficulty>("Medium");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  function startGenerating() {
    setStep("generating");
    window.setTimeout(() => {
      setQuestions(generatedQuizPools[difficulty].slice(0, count));
      setStep("preview");
    }, 1100);
  }

  function removeQuestion(i: number) {
    setQuestions((qs) => qs.filter((_, idx) => idx !== i));
  }

  function editPrompt(i: number, text: string) {
    setQuestions((qs) => qs.map((q, idx) => (idx === i ? { ...q, prompt: text } : q)));
  }

  function publish() {
    const title = `${content?.split(" — ")[0] ?? "Generated"} — AI Practice Quiz (${difficulty})`;
    onPublish(title, questions);
    setStep("published");
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 px-4 py-8" role="dialog" aria-modal="true">
      <div className="flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#EAEFF5] px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-greenFaint">
              <Sparkles size={19} className="text-brandGreen" aria-hidden="true" />
            </span>
            <p className="text-sm font-extrabold text-navy">
              {step === "select" && labels.stepSelectContent}
              {step === "configure" && labels.stepConfigure}
              {step === "generating" && labels.stepGenerating}
              {step === "preview" && labels.stepPreview}
              {step === "published" && labels.stepPublished}
            </p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="focus-ring rounded-full p-1.5 text-[#8AA0BF] hover:bg-[#F1F4F9] hover:text-navy">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {step === "select" && (
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#8AA0BF]">{labels.contentLabel}</p>
              <div className="flex flex-col gap-2">
                {uploadedLearningContent.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setContent(c)}
                    className={`focus-ring rounded-lg border-2 px-4 py-2.5 text-left text-sm font-semibold transition ${
                      content === c ? "border-brandBlue bg-skyFaint text-navy" : "border-[#DCE9F7] text-navy hover:bg-skyFaint"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "configure" && (
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#8AA0BF]">{labels.countLabel}</p>
                <div className="flex gap-2">
                  {QUESTION_COUNTS.map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setCount(n)}
                      className={`focus-ring rounded-lg border-2 px-5 py-2 text-sm font-bold transition ${count === n ? "border-brandBlue bg-skyFaint text-navy" : "border-[#DCE9F7] text-navy hover:bg-skyFaint"}`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#8AA0BF]">{labels.difficultyLabel}</p>
                <div className="flex gap-2">
                  {(["Easy", "Medium", "Hard"] as QuizDifficulty[]).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setDifficulty(lvl)}
                      className={`focus-ring rounded-lg border-2 px-5 py-2 text-sm font-bold transition ${difficulty === lvl ? "border-brandBlue bg-skyFaint text-navy" : "border-[#DCE9F7] text-navy hover:bg-skyFaint"}`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === "generating" && (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <Loader2 size={30} className="animate-spin text-brandBlue" aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold text-[#4C6386]">{labels.generatingText}</p>
            </div>
          )}

          {step === "preview" && (
            <div>
              <p className="mb-3 text-xs text-[#8AA0BF]">{labels.previewHint}</p>
              <ul className="flex flex-col gap-3">
                {questions.map((q, i) => (
                  <li key={i} className="rounded-lg border border-[#EAEFF5] p-3.5">
                    <div className="flex items-start gap-2">
                      <textarea
                        value={q.prompt}
                        onChange={(e) => editPrompt(i, e.target.value)}
                        rows={2}
                        className="w-full resize-none rounded-lg border border-[#DCE9F7] bg-white px-3 py-2 text-sm font-semibold text-navy outline-none focus:border-brandBlue"
                      />
                      <button type="button" onClick={() => removeQuestion(i)} aria-label={labels.removeButton} className="focus-ring shrink-0 rounded-lg p-2 text-[#B42318] hover:bg-[#FDEAEA]">
                        <Trash2 size={15} aria-hidden="true" />
                      </button>
                    </div>
                    <ul className="mt-2 flex flex-col gap-1 pl-1">
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
            </div>
          )}

          {step === "published" && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-greenFaint">
                <CheckCircle2 size={26} className="text-brandGreen" aria-hidden="true" />
              </span>
              <p className="mt-4 text-sm font-semibold text-navy">{labels.publishedText}</p>
            </div>
          )}
        </div>

        <div className="flex gap-3 border-t border-[#EAEFF5] px-5 py-4">
          {step === "select" && (
            <button
              type="button"
              disabled={!content}
              onClick={() => setStep("configure")}
              className="focus-ring flex h-11 w-full items-center justify-center rounded-lg bg-brandGreen text-sm font-bold text-white shadow-sm transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {labels.stepConfigure}
            </button>
          )}
          {step === "configure" && (
            <>
              <button type="button" onClick={() => setStep("select")} className="focus-ring flex h-11 items-center justify-center rounded-lg border-2 border-[#DCE9F7] px-6 text-sm font-bold text-navy transition hover:bg-skyFaint">
                {labels.backButton}
              </button>
              <button type="button" onClick={startGenerating} className="focus-ring flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-brandGreen text-sm font-bold text-white shadow-sm transition hover:brightness-110">
                <Sparkles size={15} aria-hidden="true" />
                {labels.generateButton}
              </button>
            </>
          )}
          {step === "preview" && (
            <button
              type="button"
              disabled={questions.length === 0}
              onClick={publish}
              className="focus-ring flex h-11 w-full items-center justify-center rounded-lg bg-brandGreen text-sm font-bold text-white shadow-sm transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {labels.publishButton}
            </button>
          )}
          {step === "published" && (
            <button type="button" onClick={onClose} className="focus-ring flex h-11 w-full items-center justify-center rounded-lg bg-brandBlue text-sm font-bold text-white shadow-sm transition hover:bg-brandBlue-bright">
              {labels.doneButton}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizGenerationWizard;
