import React, { useRef } from "react";

interface OTPInputProps {
  length?: number;
  value: string[];
  onChange: (digits: string[]) => void;
  error?: boolean;
}

/**
 * A row of single-digit boxes for OTP entry. Typing a digit auto-advances
 * to the next box; Backspace on an empty box moves focus back one box.
 * Pasting a full code fills every box at once.
 */
const OTPInput: React.FC<OTPInputProps> = ({ length = 6, value, onChange, error }) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  function handleChange(index: number, raw: string) {
    const digit = raw.replace(/[^0-9]/g, "").slice(-1);
    const next = [...value];
    next[index] = digit;
    onChange(next);
    if (digit && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const pasted = e.clipboardData.getData("text").replace(/[^0-9]/g, "").slice(0, length);
    if (!pasted) return;
    e.preventDefault();
    const next = Array.from({ length }, (_, i) => pasted[i] || "");
    onChange(next);
    const lastFilled = Math.min(pasted.length, length) - 1;
    inputsRef.current[Math.max(lastFilled, 0)]?.focus();
  }

  return (
    <div className="flex justify-center gap-2.5 sm:gap-3" role="group" aria-label="One-time password">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[i] || ""}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          aria-label={`Digit ${i + 1} of ${length}`}
          className={`h-12 w-11 rounded-lg border text-center text-lg font-bold text-navy outline-none transition sm:h-14 sm:w-12 ${
            error ? "border-[#E4B4AE] focus:border-[#B42318]" : "border-[#DCE9F7] focus:border-brandBlue"
          }`}
        />
      ))}
    </div>
  );
};

export default OTPInput;
