import React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
  maxLength?: number;
}

/**
 * Labeled text input with an associated error message. The error is
 * rendered as a sibling <p> linked via aria-describedby, and the input
 * gets aria-invalid, so validation is never communicated by color alone.
 */
const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  className = "",
  maxLength,
}) => {
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition ${
          error ? "border-[#E4B4AE] focus:border-[#B42318]" : "border-[#DCE9F7] focus:border-brandBlue"
        }`}
      />
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs font-semibold text-[#B42318]">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
