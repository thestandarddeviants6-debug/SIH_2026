import React, { useState } from "react";
import { Bot, X, Sparkles, CheckCircle2 } from "lucide-react";
import { skillGapQuestions, officerSkillGaps } from "../../data/officerDashboardMock";

interface SkillGapAnalysisModalProps {
  onClose: () => void;
  labels: {
    title: string;
    subtitle: string;
    nextButton: string;
    finishButton: string;
    resultHeading: string;
    resultText: string;
    viewGapsButton: string;
  };
}

/**
 * A lightweight, frontend-only stand-in for what would eventually be a real
 * adaptive assessment service. It asks a few mock questions in a chat-style
 * layout, then reveals a canned (but realistic-looking) result drawn from
 * officerSkillGaps. Nothing here is scored for real — there's no backend —
 * but the flow is fully interactive so it reads as a genuine bot check-in.
 */
const SkillGapAnalysisModal: React.FC<SkillGapAnalysisModalProps> = ({ onClose, labels }) => {
  const [step, setStep] = useState(0); // index into questions; questions.length === results screen
  const [selected, setSelected] = useState<string | null>(null);
  const isResults = step >= skillGapQuestions.length;

  function choose(option: string) {
    setSelected(option);
  }

  function next() {
    setSelected(null);
    setStep((s) => s + 1);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 px-4 py-8" role="dialog" aria-modal="true">
      <div className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#EAEFF5] px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-skyLight">
              <Bot size={20} className="text-brandBlue" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-navy">{labels.title}</p>
              <p className="text-xs text-[#4C6386]">{labels.subtitle}</p>
            </div>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="focus-ring rounded-full p-1.5 text-[#8AA0BF] hover:bg-[#F1F4F9] hover:text-navy">
            <X size={18} />
          </button>
        </div>

        {!isResults && (
          <div className="flex-1 overflow-y-auto px-5 py-5">
            <div className="mb-4 flex gap-1.5">
              {skillGapQuestions.map((_, i) => (
                <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-brandBlue" : "bg-[#EAEFF5]"}`} />
              ))}
            </div>
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-skyLight">
                <Bot size={16} className="text-brandBlue" aria-hidden="true" />
              </span>
              <p className="rounded-2xl rounded-tl-sm bg-skyFaint px-4 py-3 text-sm font-medium text-navy">
                {skillGapQuestions[step].prompt}
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-2 pl-[42px]">
              {skillGapQuestions[step].options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => choose(opt)}
                  className={`focus-ring rounded-lg border-2 px-4 py-2.5 text-left text-sm font-semibold transition ${
                    selected === opt ? "border-brandBlue bg-skyFaint text-navy" : "border-[#DCE9F7] text-navy hover:bg-skyFaint"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {isResults && (
          <div className="flex-1 overflow-y-auto px-5 py-6 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-greenFaint">
              <Sparkles size={26} className="text-brandGreen" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-navy">{labels.resultHeading}</h3>
            <p className="mt-1.5 text-sm text-[#4C6386]">{labels.resultText}</p>
            <ul className="mt-5 flex flex-col gap-2 text-left">
              {officerSkillGaps.slice(0, 3).map((gap) => (
                <li key={gap.skill} className="flex items-center gap-2.5 rounded-lg border border-[#EAEFF5] px-3.5 py-2.5 text-sm">
                  <CheckCircle2 size={16} className="shrink-0 text-brandGreen" aria-hidden="true" />
                  <span className="font-semibold text-navy">{gap.skill}</span>
                  <span className="ml-auto text-xs text-[#8AA0BF]">{gap.domain}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="border-t border-[#EAEFF5] px-5 py-4">
          {!isResults ? (
            <button
              type="button"
              onClick={next}
              disabled={!selected}
              className="focus-ring flex h-11 w-full items-center justify-center rounded-lg bg-brandBlue text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {step === skillGapQuestions.length - 1 ? labels.finishButton : labels.nextButton}
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="focus-ring flex h-11 w-full items-center justify-center rounded-lg bg-brandGreen text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-md"
            >
              {labels.viewGapsButton}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillGapAnalysisModal;
