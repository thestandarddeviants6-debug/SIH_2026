import React, { useEffect, useRef, useState } from "react";
import { X, Clock, CheckCircle2 } from "lucide-react";
import { Assessment } from "../../state/appStore";

interface Props {
  assessment: Assessment;
  onClose: () => void;
  onSubmit: (answers: (number | null)[]) => void;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

/**
 * Real timed assessment: the countdown starts the moment this mounts (i.e.
 * when the officer clicks "Start Assessment"), ticks every second via
 * setInterval, persists across question navigation (owned by this
 * component, not per-question), and auto-submits at 00:00. Answers are
 * held silently until submit — no per-question feedback, unlike the
 * practice quiz modal, since this is a real graded attempt.
 */
const AssessmentAttemptModal: React.FC<Props> = ({ assessment, onClose, onSubmit }) => {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => assessment.questions.map(() => null));
  const [secondsLeft, setSecondsLeft] = useState(assessment.durationMinutes * 60);
  const submittedRef = useRef(false);
  const answersRef = useRef(answers);
  answersRef.current = answers;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          window.clearInterval(interval);
          if (!submittedRef.current) {
            submittedRef.current = true;
            onSubmit(answersRef.current);
          }
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function selectAnswer(i: number) {
    setAnswers((a) => a.map((v, idx) => (idx === index ? i : v)));
  }

  function submit() {
    if (submittedRef.current) return;
    submittedRef.current = true;
    onSubmit(answers);
  }

  const q = assessment.questions[index];
  const low = secondsLeft <= 30;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/40 px-4 py-8" role="dialog" aria-modal="true">
      <div className="flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#EAEFF5] px-5 py-4">
          <p className="text-sm font-extrabold text-navy">{assessment.title}</p>
          <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-extrabold ${low ? "bg-[#FDEAEA] text-[#B42318]" : "bg-skyLight text-brandBlue"}`}>
            <Clock size={14} aria-hidden="true" />
            {formatTime(secondsLeft)}
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="focus-ring rounded-full p-1.5 text-[#8AA0BF] hover:bg-[#F1F4F9] hover:text-navy">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          <div className="mb-4 flex items-center justify-between text-xs font-bold text-[#8AA0BF]">
            <span>
              Question {index + 1} of {assessment.questions.length}
            </span>
            <div className="flex gap-1">
              {assessment.questions.map((_, i) => (
                <span key={i} className={`h-1.5 w-5 rounded-full ${i === index ? "bg-brandBlue" : answers[i] !== null ? "bg-brandGreen" : "bg-[#EAEFF5]"}`} />
              ))}
            </div>
          </div>

          <p className="text-sm font-bold text-navy">{q.prompt}</p>
          <div className="mt-4 flex flex-col gap-2">
            {q.options.map((opt, i) => (
              <button
                key={opt}
                type="button"
                onClick={() => selectAnswer(i)}
                className={`focus-ring rounded-lg border-2 px-4 py-2.5 text-left text-sm font-semibold transition ${
                  answers[index] === i ? "border-brandBlue bg-skyFaint text-navy" : "border-[#DCE9F7] text-navy hover:bg-skyFaint"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 border-t border-[#EAEFF5] px-5 py-4">
          <button
            type="button"
            disabled={index === 0}
            onClick={() => setIndex((i) => i - 1)}
            className="focus-ring flex h-11 items-center justify-center rounded-lg border-2 border-[#DCE9F7] px-5 text-sm font-bold text-navy transition hover:bg-skyFaint disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          {index < assessment.questions.length - 1 ? (
            <button
              type="button"
              onClick={() => setIndex((i) => i + 1)}
              className="focus-ring flex h-11 flex-1 items-center justify-center rounded-lg bg-brandBlue text-sm font-bold text-white shadow-sm transition hover:bg-brandBlue-bright"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              className="focus-ring flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-brandGreen text-sm font-bold text-white shadow-sm transition hover:brightness-110"
            >
              <CheckCircle2 size={15} aria-hidden="true" />
              Submit Assessment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssessmentAttemptModal;
