import React from "react";
import { ClipboardList, X, Clock, Award, HelpCircle, Calendar } from "lucide-react";
import { Assessment } from "../../state/appStore";

interface Props {
  assessment: Assessment;
  onClose: () => void;
  onStart: () => void;
}

const AssessmentInstructionsModal: React.FC<Props> = ({ assessment, onClose, onStart }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 px-4 py-8" role="dialog" aria-modal="true">
    <div className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-[#EAEFF5] px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-skyLight">
            <ClipboardList size={19} className="text-brandBlue" aria-hidden="true" />
          </span>
          <p className="text-sm font-extrabold text-navy">{assessment.title}</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Close" className="focus-ring rounded-full p-1.5 text-[#8AA0BF] hover:bg-[#F1F4F9] hover:text-navy">
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5">
        <p className="text-sm text-[#4C6386]">{assessment.description}</p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 rounded-lg border border-[#EAEFF5] px-3 py-2">
            <Award size={14} className="shrink-0 text-brandBlue" aria-hidden="true" />
            <span>{assessment.totalMarks} marks</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-[#EAEFF5] px-3 py-2">
            <HelpCircle size={14} className="shrink-0 text-brandBlue" aria-hidden="true" />
            <span>{assessment.questionCount} questions</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-[#EAEFF5] px-3 py-2">
            <Clock size={14} className="shrink-0 text-brandBlue" aria-hidden="true" />
            <span>{assessment.durationMinutes} minutes</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-[#EAEFF5] px-3 py-2">
            <Calendar size={14} className="shrink-0 text-brandBlue" aria-hidden="true" />
            <span>Pass: {assessment.passingPercent}%</span>
          </div>
        </div>

        <p className="mt-4 text-xs text-[#8AA0BF]">
          Available {new Date(assessment.startAt).toLocaleDateString()} – {new Date(assessment.endAt).toLocaleDateString()}
        </p>

        <p className="mt-5 text-xs font-extrabold uppercase tracking-wide text-[#8AA0BF]">Instructions</p>
        <ul className="mt-2 flex flex-col gap-1.5">
          {assessment.instructions.map((rule, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-navy">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brandBlue" />
              {rule}
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-[#EAEFF5] px-5 py-4">
        <button
          type="button"
          onClick={onStart}
          className="focus-ring flex h-11 w-full items-center justify-center rounded-lg bg-brandBlue text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brandBlue-bright hover:shadow-md"
        >
          Start Assessment
        </button>
      </div>
    </div>
  </div>
);

export default AssessmentInstructionsModal;
