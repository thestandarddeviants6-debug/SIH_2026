import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

interface Props {
  score: number;
  totalMarks: number;
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  passed: boolean;
  passingPercent: number;
  isCompetencyAssessment: boolean;
  onClose: () => void;
}

const AssessmentResultModal: React.FC<Props> = ({ score, totalMarks, percentage, correctCount, incorrectCount, passed, passingPercent, isCompetencyAssessment, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 px-4 py-8" role="dialog" aria-modal="true">
    <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl">
      <span className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${passed ? "bg-greenFaint" : "bg-[#FDEAEA]"}`}>
        {passed ? <CheckCircle2 size={26} className="text-brandGreen" aria-hidden="true" /> : <XCircle size={26} className="text-[#B42318]" aria-hidden="true" />}
      </span>
      <p className={`mt-4 text-lg font-extrabold ${passed ? "text-brandGreen" : "text-[#B42318]"}`}>{passed ? "Passed" : "Not Passed"}</p>
      <p className="mt-1 text-3xl font-extrabold text-navy">
        {score}/{totalMarks} <span className="text-lg text-[#8AA0BF]">({percentage}%)</span>
      </p>
      <p className="mt-1 text-xs text-[#8AA0BF]">Passing criteria: {passingPercent}%</p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#EAEFF5] px-3 py-2.5">
          <p className="text-xl font-extrabold text-brandGreen">{correctCount}</p>
          <p className="text-xs text-[#8AA0BF]">Correct</p>
        </div>
        <div className="rounded-lg border border-[#EAEFF5] px-3 py-2.5">
          <p className="text-xl font-extrabold text-[#B42318]">{incorrectCount}</p>
          <p className="text-xs text-[#8AA0BF]">Incorrect</p>
        </div>
      </div>

      {isCompetencyAssessment && (
        <p className="mt-4 rounded-lg bg-skyFaint px-3 py-2.5 text-xs font-semibold text-navy">
          This was a competency assessment — your competency score, skill gaps, recommendations and learning path have been updated.
        </p>
      )}

      <button
        type="button"
        onClick={onClose}
        className="focus-ring mt-6 flex h-11 w-full items-center justify-center rounded-lg bg-brandBlue text-sm font-bold text-white shadow-sm transition hover:bg-brandBlue-bright"
      >
        Done
      </button>
    </div>
  </div>
);

export default AssessmentResultModal;
