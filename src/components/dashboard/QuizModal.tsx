import React, { useState } from "react";
import { ClipboardCheck, X, CheckCircle2, XCircle, Sparkles, ArrowRight, Target, TrendingUp, Lightbulb } from "lucide-react";
import { QuizQuestion } from "../../data/officerDashboardMock";

interface QuizModalProps {
  title: string;
  questions: QuizQuestion[];
  onClose: () => void;
  aiGenerated?: boolean;
  labels: {
    checkAnswerButton: string;
    nextButton: string;
    finishButton: string;
    correctFeedback: string;
    incorrectFeedback: string;
    scoreLabel: string;
    doneButton: string;
    generatedBadge: string;
    pipelineHeading: string;
    pipelineCompetency: string;
    pipelineSkillGap: string;
    pipelineRecommendation: string;
  };
}

/**
 * Generic MCQ assessment flow: pick an answer, see it marked right/wrong
 * immediately ("instant evaluation and feedback" from the brief), then
 * move on. Used both for fixed assessment banks and for the mock
 * "AI-generated from uploaded content" practice quiz — same shape, the
 * aiGenerated flag just adds a small badge so the concept is visible.
 */
const QuizModal: React.FC<QuizModalProps> = ({ title, questions, onClose, aiGenerated, labels }) => {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const isDone = step >= questions.length;
  const question = !isDone ? questions[step] : null;

  function checkAnswer() {
    if (selected === null) return;
    setChecked(true);
    if (selected === question!.correctIndex) setCorrectCount((c) => c + 1);
  }

  function next() {
    setSelected(null);
    setChecked(false);
    setStep((s) => s + 1);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 px-4 py-8" role="dialog" aria-modal="true">
      <div className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#EAEFF5] px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-skyLight">
              <ClipboardCheck size={20} className="text-brandBlue" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-navy">{title}</p>
              {aiGenerated && (
                <p className="mt-0.5 flex items-center gap-1 text-xs font-semibold text-brandGreen">
                  <Sparkles size={11} aria-hidden="true" />
                  {labels.generatedBadge}
                </p>
              )}
            </div>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="focus-ring rounded-full p-1.5 text-[#8AA0BF] hover:bg-[#F1F4F9] hover:text-navy">
            <X size={18} />
          </button>
        </div>

        {!isDone && question && (
          <div className="flex-1 overflow-y-auto px-5 py-5">
            <div className="mb-4 flex gap-1.5">
              {questions.map((_, i) => (
                <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-brandBlue" : "bg-[#EAEFF5]"}`} />
              ))}
            </div>
            <p className="text-sm font-bold text-navy">{question.prompt}</p>
            <div className="mt-4 flex flex-col gap-2">
              {question.options.map((opt, i) => {
                let tone = "border-[#DCE9F7] text-navy hover:bg-skyFaint";
                if (checked) {
                  if (i === question.correctIndex) tone = "border-brandGreen bg-greenFaint text-navy";
                  else if (i === selected) tone = "border-[#E4B4AE] bg-[#FDEAEA] text-navy";
                  else tone = "border-[#EAEFF5] text-[#8AA0BF]";
                } else if (selected === i) {
                  tone = "border-brandBlue bg-skyFaint text-navy";
                }
                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={checked}
                    onClick={() => setSelected(i)}
                    className={`focus-ring flex items-center justify-between gap-2 rounded-lg border-2 px-4 py-2.5 text-left text-sm font-semibold transition ${tone}`}
                  >
                    {opt}
                    {checked && i === question.correctIndex && <CheckCircle2 size={16} className="shrink-0 text-brandGreen" aria-hidden="true" />}
                    {checked && i === selected && i !== question.correctIndex && <XCircle size={16} className="shrink-0 text-[#B42318]" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
            {checked && (
              <p className={`mt-3 text-sm font-bold ${selected === question.correctIndex ? "text-brandGreen" : "text-[#B42318]"}`}>
                {selected === question.correctIndex ? labels.correctFeedback : labels.incorrectFeedback}
              </p>
            )}
          </div>
        )}

        {isDone && (
          <div className="flex-1 overflow-y-auto px-5 py-6 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-greenFaint">
              <CheckCircle2 size={26} className="text-brandGreen" aria-hidden="true" />
            </span>
            <p className="mt-4 text-sm font-semibold text-[#4C6386]">{labels.scoreLabel}</p>
            <p className="mt-1 text-3xl font-extrabold text-navy">
              {correctCount}/{questions.length}
            </p>

            <div className="mt-6 rounded-xl border border-[#EAEFF5] bg-skyFaint p-4 text-left">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-wide text-[#8AA0BF]">{labels.pipelineHeading}</p>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { icon: CheckCircle2, label: title },
                  { icon: Target, label: labels.pipelineCompetency },
                  { icon: TrendingUp, label: labels.pipelineSkillGap },
                  { icon: Lightbulb, label: labels.pipelineRecommendation },
                ].map((s, i, arr) => (
                  <React.Fragment key={s.label}>
                    <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-navy shadow-sm">
                      <s.icon size={13} className="shrink-0 text-brandGreen" aria-hidden="true" />
                      {s.label}
                    </span>
                    {i < arr.length - 1 && <ArrowRight size={13} className="shrink-0 text-[#B7C6DC]" aria-hidden="true" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="border-t border-[#EAEFF5] px-5 py-4">
          {!isDone ? (
            !checked ? (
              <button
                type="button"
                onClick={checkAnswer}
                disabled={selected === null}
                className="focus-ring flex h-11 w-full items-center justify-center rounded-lg bg-brandBlue text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
              >
                {labels.checkAnswerButton}
              </button>
            ) : (
              <button
                type="button"
                onClick={next}
                className="focus-ring flex h-11 w-full items-center justify-center rounded-lg bg-brandBlue text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md"
              >
                {step === questions.length - 1 ? labels.finishButton : labels.nextButton}
              </button>
            )
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="focus-ring flex h-11 w-full items-center justify-center rounded-lg bg-brandGreen text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md"
            >
              {labels.doneButton}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
