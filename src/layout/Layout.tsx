import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

/**
 * Shared shell for every route: header + footer stay mounted and visually
 * consistent while <Outlet /> swaps in each page's unique content.
 */
const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-navy">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
