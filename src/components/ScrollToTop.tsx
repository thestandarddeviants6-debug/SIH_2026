import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures every route change starts at the top of the page, rather than
 * preserving scroll position from the previous page (React Router does not
 * do this automatically).
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
