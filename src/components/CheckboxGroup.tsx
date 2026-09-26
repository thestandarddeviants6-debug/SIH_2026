import React from "react";

interface CheckboxGroupProps {
  heading: string;
  subtitle?: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

/**
 * A grid of checkboxes for multi-select fields (e.g. competency areas).
 * Fully keyboard accessible since it's built from real <input type="checkbox">
 * elements rather than styled divs.
 */
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ heading, subtitle, options, selected, onChange }) => {
  function toggle(option: string) {
    if (selected.includes(option)) {
      onChange(selected.filter((o) => o !== option));
    } else {
      onChange([...selected, option]);
    }
  }

  return (
    <fieldset className="sm:col-span-2">
      <legend className="text-sm font-bold text-navy">{heading}</legend>
      {subtitle && <p className="mt-1 text-xs text-[#4C6386]">{subtitle}</p>}
      <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {options.map((option) => {
          const checked = selected.includes(option);
          return (
            <label
              key={option}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                checked ? "border-brandBlue bg-skyFaint text-navy" : "border-[#DCE9F7] text-[#4C6386]"
              }`}
            >
              <input type="checkbox" checked={checked} onChange={() => toggle(option)} className="accent-brandBlue" />
              {option}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default CheckboxGroup;
