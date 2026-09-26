import React from "react";
import { ChevronDown } from "lucide-react";

interface SelectFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

/**
 * Accessible labeled dropdown. Uses a native <select> so it works with
 * keyboard navigation and screen readers out of the box.
 */
const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  placeholder,
  value,
  options,
  onChange,
  error,
  className = "",
}) => {
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`w-full appearance-none rounded-lg border bg-white px-3.5 py-2.5 pr-9 text-sm outline-none transition ${
            value ? "text-navy" : "text-[#9BB0CC]"
          } ${error ? "border-[#E4B4AE] focus:border-[#B42318]" : "border-[#DCE9F7] focus:border-brandBlue"}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-navy">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8AA0BF]" />
      </div>
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs font-semibold text-[#B42318]">
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectField;
