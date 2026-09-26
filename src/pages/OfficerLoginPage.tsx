import React from "react";
import { UserCog } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import LoginBackground from "../components/LoginBackground";
import LoginBreadcrumb from "../components/LoginBreadcrumb";
import LoginInfoPanel from "../components/LoginInfoPanel";
import LoginCardShell from "../components/LoginCardShell";

const OfficerLoginPage: React.FC = () => {
  const { t } = useLanguage();
  const lg = t.loginGateway;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-skyFaint to-white">
      <LoginBackground />

      <div className="relative mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <LoginBreadcrumb roleLabel={lg.breadcrumbOfficer} />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.3fr_1fr]">
          <div className="order-2 lg:order-1">
            <LoginInfoPanel />
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <LoginCardShell
              accent="blue"
              icon={UserCog}
              title={lg.officerFormTitle}
              subtitle={lg.officerFormSubtitle}
              idFieldId="officer-id"
              idLabel={lg.officerEmailLabel}
              idPlaceholder={lg.officerEmailPlaceholder}
              registerLabel={lg.registerAsOfficer}
              registerTo="/register/officer"
              secureTitle={lg.secureOfficerTitle}
              secureText={lg.secureOfficerText}
              dashboardTo="/dashboard/officer"
              role="officer"
            />
          </div>

          {/* Empty third column on desktop keeps the card visually centered
              between the info panel and the background illustration. */}
          <div className="order-3 hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default OfficerLoginPage;
