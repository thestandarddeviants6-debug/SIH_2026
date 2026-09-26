# Karmayogi-StatAI — Landing Page

A production-ready React + TypeScript + Tailwind CSS landing page for the
Government of India statistical competency platform, "Karmayogi-StatAI".

## Stack
- React 18 + TypeScript
- React Router 6 (real routes, not anchor-scrolling)
- Tailwind CSS
- Vite
- lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  i18n/
    translations.ts      # English / Hindi / Marathi copy for every page
    LanguageContext.tsx  # React context + hook (useLanguage) — sits above
                          # the router, so language persists across pages
  layout/
    Layout.tsx            # Header + <Outlet /> + Footer, shared by every route
  components/
    Header.tsx             # NavLink-based nav — real routes, active-state underline
    Breadcrumb.tsx          # "Home > <Page>" shown on every internal page
    ScrollToTop.tsx         # resets scroll position to 0 on every navigation
    LanguageSelector.tsx
    HeroSection.tsx
    HeroIllustration.tsx    # SVG artwork (officer + laptop + India map + books)
    FeatureHighlights.tsx
    StatsStrip.tsx
    CollaborationSection.tsx
    Footer.tsx
    LoginBackground.tsx     # shared subtle decorative background (waves, map, chart, building)
                             # — reused by every registration screen too
    LoginBreadcrumb.tsx     # "Home > Login > <Role>" pill, used by both role login pages
    LoginInfoPanel.tsx      # shared Assess / Learn / Grow panel used on login pages
    LoginCardShell.tsx      # shared login card (fields, password toggle, remember me,
                             # submit, register CTA, security note) — Officer/Admin pages
                             # pass only role-specific props (accent color, icon, copy)
    SideInfoPanel.tsx       # registration-page info panel — officer (Assess/Learn/Grow)
                             # or admin (Manage/Monitor/Strengthen) variant
    RegistrationCard.tsx    # shared white translucent card shell for registration screens
    ProgressStepper.tsx     # 1–4 step indicator for the officer wizard
    FormField.tsx           # labeled text input with inline error, aria-describedby
    SelectField.tsx         # labeled native <select> dropdown with inline error
    CheckboxGroup.tsx       # multi-select checkbox grid (competency areas)
    PasswordStrength.tsx    # live requirement checklist + strength bar
                             # (exports checkPassword / isPasswordStrongEnough)
    OTPInput.tsx             # 6-digit OTP boxes: auto-advance, backspace nav, paste support
    InfoBox.tsx              # small info banner (OTP delivery note, etc.)
  data/
    registrationOptions.ts  # dropdown option lists (departments, designations, states,
                             # languages, experience ranges, work areas) — English only,
                             # see note below
  services/
    delay.ts                 # shared mock-latency helper
    authService.ts            # login() — mock, always succeeds
    registrationService.ts    # registerOfficer() — called only after OTP verification
    otpService.ts              # sendOtp() / verifyOtp() — configurable dev-mode OTP
                                # (VITE_MOCK_OTP env var, default "123456"), never
                                # rendered in the UI
    adminRequestService.ts     # submitRequest() — access-request only, never creates
                                # a login-capable account
  pages/
    HomePage.tsx              # /                       — hero, stats, collaboration
    AboutPage.tsx              # /about                  — overview, objectives, 4 cards, initiative
    FeaturesPage.tsx           # /features               — 8 feature cards + process flow
    HowItWorksPage.tsx         # /how-it-works           — 7-step journey + learning cycle
    ContactPage.tsx            # /contact                — info cards, form, FAQ accordion, map
    LoginGatewayPage.tsx       # /login                  — role-selection gateway (Officer / Admin)
    OfficerLoginPage.tsx       # /login/officer          — Statistical Officer login form
    AdminLoginPage.tsx         # /login/admin            — Administrator login form
    RegisterGatewayPage.tsx    # /register               — role-selection gateway
    OfficerRegisterWizardPage.tsx  # /register/officer   — 4-step wizard + OTP + success
    AdminAccessRequestPage.tsx     # /register/administrator — access-request form + status timeline
  App.tsx                   # BrowserRouter + route table
  main.tsx
  index.css
vercel.json                 # SPA rewrite so /about etc. work on direct load (Vercel)
public/_redirects           # same, for Netlify
```

### Routing notes

- **Every header nav item is a real route**, not an anchor link — clicking
  "About" navigates to `/about`, "Features" to `/features`, and so on.
  `NavLink` drives the active-state (blue text + underline) automatically
  based on the current URL.
- **`ScrollToTop`** (mounted once inside `Layout`) calls `window.scrollTo(0,0)`
  on every route change, so each page opens at the top rather than
  preserving the previous page's scroll position.
- **Direct navigation works.** Loading `/about`, `/features`, `/how-it-works`,
  or `/contact` directly (typed URL, refresh, bookmark) renders that page
  correctly. In dev (`vite dev`) this works out of the box; in production,
  your static host needs a catch-all rewrite to `index.html` since this is a
  client-side-routed SPA — `vercel.json` and `public/_redirects` are included
  for Vercel and Netlify respectively. Other hosts need the equivalent
  (e.g. `try_files $uri /index.html;` on nginx).
- **Login / Register are routes** (`/login`, `/register`), not modals —
  `LoginPage.tsx` / `RegisterPage.tsx` are placeholders ready for real
  authentication wiring.
- **Breadcrumbs**: every internal page renders `<Breadcrumb current="..." />`
  under the header. Its "Home" segment is a `Link` to `/`, never a scroll.

## Notes on implementation choices

- **Language switching** is done via a lightweight React Context
  (`LanguageProvider` / `useLanguage`) that holds the current language and a
  `t` (translations) object. It's structured so you can swap it for a real
  i18n library (e.g. `react-i18next`) later without touching component code —
  just replace the provider's internals and keep the `useLanguage()` call
  signature.
- **Hero artwork** is a single self-contained SVG component
  (`HeroIllustration.tsx`) rather than an external image, so there's no
  broken-image risk and it can be restyled by editing the SVG/Tailwind tokens
  directly. It depicts the officer at her desk, the laptop dashboard
  (My Competency / Assessment / Recommended Learning / Progress Tracker
  cards), the India map data-network, a government building silhouette, an
  ascending bar chart, and the four labelled books, per the brief.
- **Login is a two-step flow**: `/login` is a role-selection gateway
  (Statistical Officer / Administrator, styled in blue/green respectively),
  which routes to `/login/officer` or `/login/admin` — each rendered from
  the same `LoginCardShell` (icon, title, subtitle, ID field, password field
  with show/hide toggle, remember-me, forgot-password, submit, register CTA,
  and a security note), configured with only the handful of props that
  differ by role. Both pages also share `LoginBackground` (decorative waves
  /map/chart/building SVGs), `LoginInfoPanel` (Assess/Learn/Grow), and
  `LoginBreadcrumb` ("Home > Login > Role"). `handleSubmit` in
  `LoginCardShell` validates that both fields are filled (via `t.validation`)
  and is a clearly marked placeholder past that — wire it to `authService`.
- **Registration is a full multi-step flow**, not a single form:
  - `/register` is a role-selection gateway (`RegisterGatewayPage`) with
    feature lists per role and an "Already have an account? Login" link.
  - `/register/officer` (`OfficerRegisterWizardPage`) is a **4-step wizard**
    — Basic Information → Professional Details → Create Password → OTP
    Verification — plus a 5th success view, all driven by one `useState`
    object in a single route, so Back/Next never lose entered data.
    `ProgressStepper` shows the active/completed/upcoming steps. Step 3 uses
    `PasswordStrength` for live requirement feedback (8+ chars, upper,
    lower, number, special character). Step 4 uses `OTPInput` (auto-advance,
    backspace navigation, paste-to-fill) with a real 45-second resend
    countdown; verification goes through `otpService`, which reads a
    dev-mode mock code from `VITE_MOCK_OTP` (default `"123456"`) and never
    renders it in the UI.
  - `/register/administrator` (`AdminAccessRequestPage`) is deliberately an
    **access-request workflow**, not account creation: submitting calls
    `adminRequestService.submitRequest` (never a login-capable account) and
    shows a status timeline (Submitted → Under Review → Approval → Account
    Activation) with only the first two steps reflecting real progress.
  - The old `/register/admin` path redirects to `/register/administrator`
    so any existing links or bookmarks keep working.
  - Field-level validation (required fields, email format, 10-digit mobile,
    password strength, password match, terms acceptance, OTP completeness)
    lives in each page's own handlers and reads its messages from
    `t.validation`, so it's fully translated.
  - Dropdown *option values* (department names, designations, states, etc.,
    in `src/data/registrationOptions.ts`) are English-only for now — that's
    a content-translation effort distinct from UI-string localization and
    can be layered on later without touching any component.
- **Colors** are defined as Tailwind theme tokens in `tailwind.config.js`
  (`navy`, `brandBlue`, `brandGreen`, `teal`, `saffron`, etc.) matching the
  specified palette, so you can retheme globally from one file.
- **Accessibility**: semantic landmarks (`header`, `main`, `footer`, `nav`),
  labelled buttons/inputs, keyboard-dismissible modals (Escape key + focus
  on open), visible focus rings (`.focus-ring`), and `prefers-reduced-motion`
  support in `index.css`. Form errors use `aria-invalid`/`aria-describedby`
  and are never communicated by color alone (icon + text everywhere).
- The "MoSPI" / "iGOT Karmayogi" / "NSSTA" collaboration marks are rendered
  as clean text + icon placeholders, not official logo assets — swap in the
  real logo files when available.

## Wiring up real services later

Everything in `src/services/` is a mock today (simulated network delay,
always-successful responses) so the full UI is exercisable without a
backend. To connect a real one, replace the body of each exported function
— the calling components only depend on each function's signature, not its
implementation, so no component code needs to change:
- `authService.login()` — real authentication call.
- `registrationService.registerOfficer()` — called only after OTP
  verification succeeds; send the password over TLS and let it fall out of
  scope immediately, never log or persist it client-side.
- `otpService.sendOtp()` / `verifyOtp()` — a real backend generates and
  checks the code server-side; the code should never reach the browser at
  all, unlike the dev-mode mock.
- `adminRequestService.submitRequest()` — route to your approval workflow;
  this must never directly create a login-capable account.

## Customizing translations

All UI copy lives in `src/i18n/translations.ts`. Add a new language by:
1. Adding its code to the `Language` union type.
2. Adding a matching `Translation` object to the `translations` record.
3. Adding its label to `LANGUAGE_LABELS` in `LanguageSelector.tsx`.
