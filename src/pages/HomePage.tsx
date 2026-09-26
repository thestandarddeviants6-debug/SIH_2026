import React from "react";
import HeroSection from "../components/HeroSection";
import StatsStrip from "../components/StatsStrip";
import CollaborationSection from "../components/CollaborationSection";

/**
 * The Home / Landing page — unchanged from the original single-page design,
 * just extracted into its own route component so Header/Footer can be
 * shared across all pages via the Layout.
 */
const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />

      {/* Trust / statistics strip with collaboration section */}
      <section className="relative -mt-6 rounded-t-[32px] bg-white sm:-mt-10">
        <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
          <div className="grid grid-cols-1 gap-10 rounded-3xl border border-[#EAEFF5] bg-white p-6 shadow-[0_10px_40px_-15px_rgba(8,43,99,0.15)] sm:p-10 lg:grid-cols-[1.4fr_1fr]">
            <StatsStrip />
            <CollaborationSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
