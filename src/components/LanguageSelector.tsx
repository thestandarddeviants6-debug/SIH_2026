import React, { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Language } from "../i18n/translations";

const LANGUAGE_LABELS: Record<Language, string> = {
  en: "EN",
  hi: "हिन्दी",
  mr: "मराठी",
};

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        onClick={() => setOpen((v) => !v)}
        className="focus-ring flex items-center gap-1.5 rounded-full border border-[#DCE9F7] bg-skyFaint px-3 py-1.5 text-sm font-semibold text-navy transition hover:bg-skyLight"
      >
        <Globe size={16} className="text-brandBlue" aria-hidden="true" />
        <span>{LANGUAGE_LABELS[language]}</span>
        <ChevronDown size={14} className="text-navy/60" aria-hidden="true" />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-[#E4EEF9] bg-white py-1 shadow-lg animate-fade-in"
        >
          {(Object.keys(LANGUAGE_LABELS) as Language[]).map((lang) => (
            <li key={lang} role="option" aria-selected={language === lang}>
              <button
                type="button"
                onClick={() => {
                  setLanguage(lang);
                  setOpen(false);
                }}
                className={`focus-ring w-full px-4 py-2 text-left text-sm font-medium transition hover:bg-skyFaint ${
                  language === lang ? "text-brandBlue" : "text-navy"
                }`}
              >
                {LANGUAGE_LABELS[lang]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
