import React from "react";

/**
 * Cohesive flat-illustration hero artwork:
 * A statistical officer at a desk with a laptop showing the Karmayogi-StatAI
 * dashboard, set against an India-map/data-network backdrop with a government
 * building silhouette, bar chart, and a stack of labelled books.
 *
 * Built entirely in SVG (no external images) so it renders anywhere and
 * blends into the hero's light background via a transparent canvas.
 */
const HeroIllustration: React.FC = () => {
  return (
    <svg
      viewBox="0 0 900 760"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of a statistical officer working on a laptop showing the Karmayogi-StatAI dashboard, with an India map data network and government building in the background"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4FAFF" />
          <stop offset="100%" stopColor="#EAF6FF" />
        </linearGradient>
        <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F3B7A" />
          <stop offset="100%" stopColor="#082B63" />
        </linearGradient>
        <linearGradient id="sareeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D8C3A0" />
          <stop offset="100%" stopColor="#BFA57C" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B3E86" />
          <stop offset="100%" stopColor="#082B63" />
        </linearGradient>
      </defs>

      {/* Soft backdrop */}
      <circle cx="640" cy="230" r="330" fill="url(#skyGrad)" opacity="0.9" />

      {/* Faint India map made of connected nodes */}
      <g opacity="0.55">
        <path
          d="M560 90 L610 100 L640 130 L660 175 L650 220 L670 250 L655 300 L620 330 L600 380 L565 400 L540 370 L520 330 L495 300 L505 250 L480 210 L500 170 L520 130 Z"
          fill="none"
          stroke="#0878D1"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        {[
          [560, 90], [610, 100], [640, 130], [660, 175], [650, 220],
          [670, 250], [655, 300], [620, 330], [600, 380], [565, 400],
          [540, 370], [520, 330], [495, 300], [505, 250], [480, 210],
          [500, 170], [520, 130],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 4.5 : 3} fill="#1689E5" />
        ))}
      </g>

      {/* Government building silhouette, right background */}
      <g opacity="0.5">
        <rect x="700" y="230" width="150" height="180" fill="#DCEBFA" />
        <rect x="695" y="215" width="160" height="18" fill="#C7DFF5" />
        <polygon points="700,215 775,175 850,215" fill="#C7DFF5" />
        <circle cx="775" cy="195" r="8" fill="#DCEBFA" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={715 + i * 26} y={250} width="12" height="150" fill="#BEDAF2" />
        ))}
      </g>

      {/* Faint skyline */}
      <g opacity="0.35">
        <rect x="40" y="300" width="60" height="110" fill="#DCEBFA" />
        <rect x="120" y="330" width="45" height="80" fill="#E3EFFB" />
        <rect x="820" y="330" width="55" height="80" fill="#E3EFFB" />
      </g>

      {/* Ascending bar chart, left of desk */}
      <g transform="translate(60,470)">
        <rect x="0" y="70" width="26" height="40" rx="3" fill="#EAF9F0" />
        <rect x="34" y="45" width="26" height="65" rx="3" fill="#B8E7C9" />
        <rect x="68" y="20" width="26" height="90" rx="3" fill="#079447" />
        <rect x="102" y="0" width="26" height="110" rx="3" fill="#008A86" />
      </g>

      {/* Connected data dots trailing to the chart */}
      <g opacity="0.6">
        <path d="M160 500 L230 460 L300 480 L360 440" fill="none" stroke="#1689E5" strokeWidth="1.5" strokeDasharray="3 4" />
        <circle cx="160" cy="500" r="4" fill="#1689E5" />
        <circle cx="230" cy="460" r="4" fill="#079447" />
        <circle cx="300" cy="480" r="4" fill="#1689E5" />
        <circle cx="360" cy="440" r="4" fill="#F39A28" />
      </g>

      {/* Desk */}
      <rect x="230" y="590" width="480" height="22" rx="4" fill="url(#deskGrad)" />
      <rect x="255" y="612" width="18" height="90" fill="#082B63" />
      <rect x="640" y="612" width="18" height="90" fill="#082B63" />

      {/* Stack of books, bottom-right of desk */}
      <g transform="translate(520,540)">
        <rect x="0" y="36" width="150" height="16" rx="3" fill="#082B63" />
        <text x="75" y="47" textAnchor="middle" fontSize="9" fontWeight="700" fill="#FFFFFF" fontFamily="Inter, sans-serif">
          STATISTICS
        </text>
        <rect x="6" y="20" width="138" height="16" rx="3" fill="#0878D1" />
        <text x="75" y="31" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#FFFFFF" fontFamily="Inter, sans-serif">
          DATA ANALYTICS
        </text>
        <rect x="14" y="6" width="110" height="14" rx="3" fill="#008A86" />
        <text x="69" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="#FFFFFF" fontFamily="Inter, sans-serif">
          GIS
        </text>
        <rect x="22" y="-8" width="95" height="14" rx="3" fill="#079447" />
        <text x="69" y="2" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#FFFFFF" fontFamily="Inter, sans-serif">
          AI &amp; ML
        </text>
      </g>

      {/* Notebook + pen */}
      <g transform="translate(430,565)">
        <rect x="0" y="0" width="60" height="42" rx="3" fill="#FFFFFF" stroke="#DCE9F7" />
        <line x1="8" y1="12" x2="52" y2="12" stroke="#EAF6FF" strokeWidth="2" />
        <line x1="8" y1="20" x2="52" y2="20" stroke="#EAF6FF" strokeWidth="2" />
        <line x1="8" y1="28" x2="38" y2="28" stroke="#EAF6FF" strokeWidth="2" />
        <rect x="10" y="34" width="46" height="4" rx="2" fill="#F39A28" transform="rotate(-4 33 36)" />
      </g>

      {/* Chair */}
      <path d="M370 470 Q370 420 420 420 Q470 420 470 470 L470 560 L440 560 L440 500 L400 500 L400 560 L370 560 Z" fill="#0F3B7A" opacity="0.9" />

      {/* Woman — stylised, three-quarter seated figure */}
      <g transform="translate(345,300)">
        {/* torso / saree */}
        <path
          d="M40 150 C10 160 0 210 6 270 L140 270 C146 210 132 160 100 150 C86 168 54 168 40 150 Z"
          fill="url(#sareeGrad)"
        />
        {/* saree pallu drape accent */}
        <path d="M40 150 C30 190 34 230 46 268 L64 268 C56 225 56 185 62 155 Z" fill="#EDE0C8" opacity="0.8" />
        {/* neck */}
        <rect x="62" y="95" width="20" height="26" rx="8" fill="#C98F5E" />
        {/* head */}
        <circle cx="72" cy="70" r="38" fill="#D8A272" />
        {/* hair bun + hair */}
        <path d="M36 66 C30 30 60 6 96 18 C118 26 122 54 112 70 C112 46 92 30 70 32 C50 34 38 48 36 66 Z" fill="#2B2118" />
        <circle cx="106" cy="30" r="13" fill="#2B2118" />
        {/* glasses */}
        <rect x="46" y="66" width="24" height="16" rx="7" fill="none" stroke="#082B63" strokeWidth="3" />
        <rect x="78" y="66" width="24" height="16" rx="7" fill="none" stroke="#082B63" strokeWidth="3" />
        <line x1="70" y1="73" x2="78" y2="73" stroke="#082B63" strokeWidth="3" />
        {/* arm to laptop */}
        <path d="M112 165 C150 172 176 190 190 210" stroke="#D8A272" strokeWidth="16" strokeLinecap="round" fill="none" />
        <path d="M20 165 C-10 178 -22 205 -18 232" stroke="#D8A272" strokeWidth="16" strokeLinecap="round" fill="none" />
      </g>

      {/* Laptop */}
      <g transform="translate(470,470)">
        <path d="M0 60 L18 100 L170 100 L152 60 Z" fill="#B8C7DC" />
        <rect x="8" y="-58" width="150" height="118" rx="8" fill="#0A2E63" />
        <rect x="16" y="-50" width="134" height="100" rx="4" fill="url(#screenGrad)" />

        {/* dashboard header */}
        <text x="83" y="-32" textAnchor="middle" fontSize="9" fontWeight="700" fill="#FFFFFF" fontFamily="Inter, sans-serif">
          Karmayogi-StatAI
        </text>
        <line x1="24" y1="-24" x2="142" y2="-24" stroke="#1F4E8C" strokeWidth="1" />

        {/* 2x2 dashboard cards */}
        <g fontFamily="Inter, sans-serif">
          <rect x="24" y="-16" width="52" height="26" rx="3" fill="#12407F" />
          <circle cx="32" cy="-9" r="3.5" fill="#F39A28" />
          <text x="38" y="-6" fontSize="5.4" fontWeight="700" fill="#FFFFFF">My Competency</text>

          <rect x="90" y="-16" width="52" height="26" rx="3" fill="#12407F" />
          <circle cx="98" cy="-9" r="3.5" fill="#1689E5" />
          <text x="104" y="-6" fontSize="5.4" fontWeight="700" fill="#FFFFFF">Assessment</text>

          <rect x="24" y="14" width="52" height="26" rx="3" fill="#12407F" />
          <circle cx="32" cy="21" r="3.5" fill="#079447" />
          <text x="38" y="24" fontSize="4.7" fontWeight="700" fill="#FFFFFF">Recommended</text>
          <text x="38" y="30" fontSize="4.7" fontWeight="700" fill="#FFFFFF">Learning</text>

          <rect x="90" y="14" width="52" height="26" rx="3" fill="#12407F" />
          <circle cx="98" cy="21" r="3.5" fill="#008A86" />
          <text x="104" y="24" fontSize="4.7" fontWeight="700" fill="#FFFFFF">Progress</text>
          <text x="104" y="30" fontSize="4.7" fontWeight="700" fill="#FFFFFF">Tracker</text>
        </g>
      </g>

      {/* Foreground subtle shadow */}
      <ellipse cx="470" cy="700" rx="220" ry="16" fill="#082B63" opacity="0.08" />
    </svg>
  );
};

export default HeroIllustration;
