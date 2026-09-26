import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import { AppStoreProvider } from "./state/appStore";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ContactPage from "./pages/ContactPage";
import LoginGatewayPage from "./pages/LoginGatewayPage";
import OfficerLoginPage from "./pages/OfficerLoginPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import RegisterGatewayPage from "./pages/RegisterGatewayPage";
import OfficerRegisterWizardPage from "./pages/OfficerRegisterWizardPage";
import AdminRegisterWizardPage from "./pages/AdminRegisterWizardPage";
import OfficerDashboardPage from "./pages/OfficerDashboardPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";

/**
 * Every nav item is a real route (no anchor-scrolling). Layout renders the
 * shared Header/Footer around whichever page is active, and ScrollToTop
 * (inside Layout) resets scroll position to the top on every navigation.
 * Language selection lives above the router so it persists across pages.
 */
const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppStoreProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginGatewayPage />} />
            <Route path="/login/officer" element={<OfficerLoginPage />} />
            <Route path="/login/admin" element={<AdminLoginPage />} />
            <Route path="/register" element={<RegisterGatewayPage />} />
            <Route path="/register/officer" element={<OfficerRegisterWizardPage />} />
            <Route path="/register/administrator" element={<AdminRegisterWizardPage />} />
            {/* Old path kept working for anyone who bookmarked it. */}
            <Route path="/register/admin" element={<Navigate to="/register/administrator" replace />} />
            {/* Real (frontend-only, mock-data) dashboards. */}
            <Route path="/dashboard/officer" element={<OfficerDashboardPage />} />
            <Route path="/dashboard/administrator" element={<AdminDashboardPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </AppStoreProvider>
    </LanguageProvider>
  );
};

export default App;
