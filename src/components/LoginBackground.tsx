import React from "react";

/**
 * Subtle government/statistics-themed decorative background shared by both
 * login pages. Kept low-opacity and behind everything (aria-hidden) so the
 * login card stays the visual focus, per the design brief.
 */
const LoginBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* soft atmospheric gradients */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brandBlue/5 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-brandGreen/5 blur-3xl" />
      <div className="absolute left-1/4 bottom-0 h-72 w-[36rem] rounded-full bg-saffron/5 blur-3xl" />

      {/* tricolour-inspired waves along the top edge */}
      <svg className="absolute inset-x-0 top-0 h-20 w-full opacity-50" viewBox="0 0 1440 90" preserveAspectRatio="none">
        <path d="M0 30 C 300 80, 600 -10, 900 30 C 1100 60, 1300 10, 1440 40 L1440 0 L0 0 Z" fill="#F39A28" opacity="0.05" />
        <path d="M0 45 C 300 10, 600 80, 900 45 C 1100 20, 1300 70, 1440 45 L1440 0 L0 0 Z" fill="#079447" opacity="0.05" />
      </svg>

      {/* faint India map / connected-node network, upper right */}
      <svg className="absolute right-6 top-16 h-64 w-64 opacity-[0.12] sm:right-10" viewBox="0 0 240 240" fill="none">
        <path
          d="M120 20 L160 30 L180 60 L195 95 L185 130 L200 160 L175 190 L140 205 L110 195 L90 175 L65 165 L55 130 L70 100 L55 70 L85 45 L100 30 Z"
          stroke="#0878D1"
          strokeWidth="1.4"
          strokeDasharray="4 5"
        />
        {[
          [120, 20], [160, 30], [180, 60], [195, 95], [185, 130], [200, 160],
          [175, 190], [140, 205], [110, 195], [90, 175], [65, 165], [55, 130],
          [70, 100], [55, 70], [85, 45], [100, 30],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 3.5 : 2.2} fill="#1689E5" />
        ))}
      </svg>

      {/* subtle ascending bar chart, lower left */}
      <svg className="absolute -left-2 bottom-24 h-28 w-40 opacity-[0.15] sm:bottom-32" viewBox="0 0 160 100" fill="none">
        <rect x="0" y="55" width="24" height="45" rx="3" fill="#0878D1" />
        <rect x="34" y="35" width="24" height="65" rx="3" fill="#079447" />
        <rect x="68" y="15" width="24" height="85" rx="3" fill="#008A86" />
        <rect x="102" y="45" width="24" height="55" rx="3" fill="#1689E5" />
      </svg>

      {/* circular data-viz motif, mid right */}
      <svg className="absolute right-16 top-1/2 h-32 w-32 -translate-y-1/2 opacity-[0.12] hidden lg:block" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="52" stroke="#079447" strokeWidth="2" strokeDasharray="6 8" />
        <circle cx="60" cy="60" r="34" stroke="#0878D1" strokeWidth="2" strokeDasharray="4 6" />
        <circle cx="60" cy="60" r="14" fill="#F39A28" opacity="0.6" />
      </svg>

      {/* institutional building silhouette, far right */}
      <svg className="absolute -right-6 bottom-0 h-40 w-52 opacity-[0.08] hidden md:block" viewBox="0 0 220 170" fill="none">
        <rect x="30" y="70" width="160" height="100" fill="#0878D1" />
        <polygon points="20,70 110,25 200,70" fill="#0878D1" />
        <circle cx="110" cy="45" r="9" fill="#0878D1" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={45 + i * 22} y={95} width="12" height="75" fill="#F4FAFF" />
        ))}
      </svg>
    </div>
  );
};

export default LoginBackground;
